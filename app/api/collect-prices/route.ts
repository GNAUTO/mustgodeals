import { NextResponse } from "next/server";
import { createHash } from "crypto";
import { supabase } from "../../../lib/supabase";
import { TRACKER_BRANDS, type TrackerBrand } from "../../data/priceTrackerBrands";

const USER_AGENT = "MustGoDeals-PriceTracker/1.0 (+https://mustgodeals.com.au)";
const FETCH_TIMEOUT_MS = 15_000;

// ── Robots.txt check ─────────────────────────────────────────────────────────

async function isRobotsAllowed(targetUrl: string): Promise<boolean> {
  try {
    const { origin, pathname } = new URL(targetUrl);
    const robotsUrl = `${origin}/robots.txt`;
    const res = await fetch(robotsUrl, {
      headers: { "User-Agent": USER_AGENT },
      signal: AbortSignal.timeout(5_000),
    });
    if (!res.ok) return true; // no robots.txt = allowed
    const text = await res.text();
    return checkRobotsText(text, pathname);
  } catch {
    return true; // can't fetch robots.txt = proceed conservatively
  }
}

function checkRobotsText(text: string, path: string): boolean {
  const lines = text.split(/\r?\n/);
  let inRelevantBlock = false;
  let allowed: string[] = [];
  let disallowed: string[] = [];

  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith("#") || line === "") {
      if (inRelevantBlock && (allowed.length > 0 || disallowed.length > 0)) {
        break;
      }
      continue;
    }
    const [field, ...rest] = line.split(":").map((s) => s.trim());
    const value = rest.join(":").trim();

    if (field.toLowerCase() === "user-agent") {
      inRelevantBlock = value === "*" || value.toLowerCase().includes("mustgodeals");
      if (!inRelevantBlock) { allowed = []; disallowed = []; }
    } else if (inRelevantBlock) {
      if (field.toLowerCase() === "allow" && value) allowed.push(value);
      if (field.toLowerCase() === "disallow" && value) disallowed.push(value);
    }
  }

  // Allow rules take precedence over more general disallow rules
  for (const a of allowed) {
    if (path.startsWith(a)) return true;
  }
  for (const d of disallowed) {
    if (path.startsWith(d)) return false;
  }
  return true;
}

// ── Offer extraction ─────────────────────────────────────────────────────────

type ExtractedOffer = {
  model?: string;
  trim?: string;
  offerType: string;
  price?: number;
  expiryDate?: string;
};

function extractOffersFromHtml(html: string, brandId: string): ExtractedOffer[] {
  const offers: ExtractedOffer[] = [];

  // Try JSON-LD blocks first
  const jsonLdMatches = html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi);
  for (const match of jsonLdMatches) {
    try {
      const data = JSON.parse(match[1]);
      const items = Array.isArray(data) ? data : [data];
      for (const item of items) {
        const type = item["@type"] ?? "";
        if (type === "Offer" || type === "Product") {
          const offer = parseJsonLdOffer(item);
          if (offer) offers.push(offer);
        }
        // Handle nested offers (e.g. Product with offers array)
        if (item.offers) {
          const nested = Array.isArray(item.offers) ? item.offers : [item.offers];
          for (const n of nested) {
            const offer = parseJsonLdOffer(n, item.name);
            if (offer) offers.push(offer);
          }
        }
      }
    } catch {
      // ignore malformed JSON-LD
    }
  }

  if (offers.length > 0) return offers;

  // Fallback: regex scan for drive-away prices
  return extractPricesViaRegex(html, brandId);
}

function parseJsonLdOffer(item: Record<string, unknown>, parentName?: string): ExtractedOffer | null {
  const price = typeof item.price === "number"
    ? item.price
    : typeof item.price === "string" && item.price
      ? parseFloat(String(item.price).replace(/[^0-9.]/g, ""))
      : undefined;

  if (!price || price < 10_000) return null; // skip implausible prices

  const name = (typeof item.name === "string" ? item.name : parentName) ?? undefined;
  const expiry = typeof item.priceValidUntil === "string" ? item.priceValidUntil : undefined;
  const desc = typeof item.description === "string" ? item.description.toLowerCase() : "";

  const offerType =
    desc.includes("drive away") || desc.includes("driveaway") ? "driveaway"
    : desc.includes("cashback") || desc.includes("cash back") ? "cashback"
    : desc.includes("low rate") || desc.includes("finance rate") ? "low_rate"
    : "other";

  return { model: name, offerType, price, expiryDate: expiry };
}

function extractPricesViaRegex(html: string, _brandId: string): ExtractedOffer[] {
  const offers: ExtractedOffer[] = [];
  // Match price-like strings: $XX,XXX or $X,XXX with optional cents
  const priceRe = /\$([0-9]{1,3}(?:,[0-9]{3})+(?:\.[0-9]{2})?)/g;
  const found = new Set<number>();

  for (const match of html.matchAll(priceRe)) {
    const price = parseFloat(match[1].replace(/,/g, ""));
    if (price >= 15_000 && price <= 500_000 && !found.has(price)) {
      found.add(price);
      // Try to determine offer type from nearby context (100 chars before)
      const idx = match.index ?? 0;
      const ctx = html.slice(Math.max(0, idx - 100), idx + 50).toLowerCase();
      const offerType =
        ctx.includes("drive away") || ctx.includes("driveaway") ? "driveaway"
        : ctx.includes("cashback") || ctx.includes("cash back") ? "cashback"
        : ctx.includes("low rate") || ctx.includes("finance") ? "low_rate"
        : "other";
      offers.push({ offerType, price });
    }
  }

  return offers.slice(0, 20); // cap at 20 prices per brand
}

// ── Offer persistence ────────────────────────────────────────────────────────

function offerHash(brand: string, offer: ExtractedOffer): string {
  const key = [brand, offer.model ?? "", offer.trim ?? "", offer.offerType, offer.price ?? "", offer.expiryDate ?? ""].join("|");
  return createHash("sha256").update(key).digest("hex").slice(0, 16);
}

async function upsertOffers(brand: TrackerBrand, offers: ExtractedOffer[]): Promise<{ inserted: number; updated: number }> {
  let inserted = 0;
  let updated = 0;
  const now = new Date().toISOString();

  for (const offer of offers) {
    const hash = offerHash(brand.id, offer);
    const { data: existing } = await supabase
      .from("price_offers")
      .select("id")
      .eq("offer_hash", hash)
      .single();

    if (existing) {
      await supabase
        .from("price_offers")
        .update({ last_seen_at: now, is_active: true })
        .eq("offer_hash", hash);
      updated++;
    } else {
      await supabase.from("price_offers").insert({
        brand: brand.id,
        model: offer.model ?? null,
        trim: offer.trim ?? null,
        offer_type: offer.offerType,
        price: offer.price ?? null,
        expiry_date: offer.expiryDate ?? null,
        source_url: brand.offerUrl,
        offer_hash: hash,
        first_seen_at: now,
        last_seen_at: now,
        is_active: true,
      });
      inserted++;
    }
  }

  return { inserted, updated };
}

async function deactivateStaleOffers(brandId: string, seenHashes: string[], collectTime: string): Promise<number> {
  // Mark as inactive any offer for this brand that wasn't seen in this run
  const { data: allActive } = await supabase
    .from("price_offers")
    .select("id, offer_hash")
    .eq("brand", brandId)
    .eq("is_active", true);

  if (!allActive || allActive.length === 0) return 0;

  const stale = allActive.filter((r) => !seenHashes.includes(r.offer_hash));
  if (stale.length === 0) return 0;

  await supabase
    .from("price_offers")
    .update({ is_active: false })
    .in("id", stale.map((r) => r.id));

  return stale.length;
  void collectTime;
}

// ── Main handler ─────────────────────────────────────────────────────────────

type BrandResult = {
  brand: string;
  robotsAllowed: boolean;
  httpStatus: number | null;
  offersExtracted: number;
  inserted: number;
  updated: number;
  deactivated: number;
  error: string | null;
};

export async function GET(req: Request) {
  const url = new URL(req.url);
  const secret = url.searchParams.get("secret");

  if (!secret || secret !== process.env.CRON_SECRET) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const results: BrandResult[] = [];
  const collectTime = new Date().toISOString();

  for (const brand of TRACKER_BRANDS) {
    const result: BrandResult = {
      brand: brand.id,
      robotsAllowed: true,
      httpStatus: null,
      offersExtracted: 0,
      inserted: 0,
      updated: 0,
      deactivated: 0,
      error: null,
    };

    try {
      // 1. Check robots.txt
      result.robotsAllowed = await isRobotsAllowed(brand.offerUrl);

      if (!result.robotsAllowed) {
        result.error = "Skipped: robots.txt disallows crawling";
        results.push(result);
        continue;
      }

      // 2. Fetch the offer page
      const res = await fetch(brand.offerUrl, {
        headers: {
          "User-Agent": USER_AGENT,
          "Accept": "text/html,application/xhtml+xml",
          "Accept-Language": "en-AU,en;q=0.9",
        },
        signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      });

      result.httpStatus = res.status;

      if (!res.ok) {
        result.error = `HTTP ${res.status}`;
        await supabase.from("price_snapshots").insert({
          brand: brand.id,
          source_url: brand.offerUrl,
          page_hash: "failed",
          offers_extracted: [],
          robots_allowed: true,
          http_status: res.status,
          error_msg: result.error,
          collected_at: collectTime,
        });
        results.push(result);
        continue;
      }

      const html = await res.text();
      const pageHash = createHash("sha256").update(html).digest("hex");
      const rawExcerpt = html.slice(0, 1500).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();

      // 3. Extract offers
      const offers = extractOffersFromHtml(html, brand.id);
      result.offersExtracted = offers.length;

      // 4. Store snapshot
      await supabase.from("price_snapshots").insert({
        brand: brand.id,
        source_url: brand.offerUrl,
        page_hash: pageHash,
        offers_extracted: offers,
        raw_excerpt: rawExcerpt,
        robots_allowed: true,
        http_status: res.status,
        collected_at: collectTime,
      });

      // 5. Upsert normalised offer rows
      if (offers.length > 0) {
        const { inserted, updated } = await upsertOffers(brand, offers);
        result.inserted = inserted;
        result.updated = updated;

        const seenHashes = offers.map((o) => offerHash(brand.id, o));
        result.deactivated = await deactivateStaleOffers(brand.id, seenHashes, collectTime);
      }

    } catch (err) {
      result.error = err instanceof Error ? err.message : String(err);
      try {
        await supabase.from("price_snapshots").insert({
          brand: brand.id,
          source_url: brand.offerUrl,
          page_hash: "error",
          offers_extracted: [],
          robots_allowed: result.robotsAllowed,
          http_status: null,
          error_msg: result.error,
          collected_at: collectTime,
        });
      } catch {
        // ignore DB write error in error path
      }
    }

    results.push(result);
  }

  const summary = {
    collected_at: collectTime,
    brands_attempted: results.length,
    brands_succeeded: results.filter((r) => !r.error).length,
    brands_skipped: results.filter((r) => r.error?.startsWith("Skipped")).length,
    brands_failed: results.filter((r) => r.error && !r.error.startsWith("Skipped")).length,
    total_offers_extracted: results.reduce((s, r) => s + r.offersExtracted, 0),
    total_inserted: results.reduce((s, r) => s + r.inserted, 0),
    total_updated: results.reduce((s, r) => s + r.updated, 0),
    total_deactivated: results.reduce((s, r) => s + r.deactivated, 0),
    results,
  };

  console.log("[collect-prices] run summary:", JSON.stringify(summary, null, 2));

  return NextResponse.json(summary);
}
