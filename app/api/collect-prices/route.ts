import { NextResponse } from "next/server";
import { createHash } from "crypto";
import { createSupabaseClient } from "../../../lib/supabase";
import { TRACKER_BRANDS, type TrackerBrand } from "../../data/priceTrackerBrands";

const USER_AGENT = "MustGoDeals-PriceTracker/1.0 (+https://mustgodeals.com.au)";
const FETCH_TIMEOUT_MS = 15_000;

async function isRobotsAllowed(targetUrl: string): Promise<boolean> {
  try {
    const { origin, pathname } = new URL(targetUrl);
    const res = await fetch(`${origin}/robots.txt`, {
      headers: { "User-Agent": USER_AGENT },
      signal: AbortSignal.timeout(5_000),
    });
    if (!res.ok) return true;
    return checkRobotsText(await res.text(), pathname);
  } catch {
    return true;
  }
}

function checkRobotsText(text: string, path: string): boolean {
  const lines = text.split(/\r?\n/);
  let inBlock = false;
  const allowed: string[] = [];
  const disallowed: string[] = [];
  for (const raw of lines) {
    const line = raw.trim();
    if (line.startsWith("#") || line === "") continue;
    const [field, ...rest] = line.split(":").map((s) => s.trim());
    const value = rest.join(":").trim();
    if (field.toLowerCase() === "user-agent") {
      inBlock = value === "*" || value.toLowerCase().includes("mustgodeals");
    } else if (inBlock) {
      if (field.toLowerCase() === "allow" && value) allowed.push(value);
      if (field.toLowerCase() === "disallow" && value) disallowed.push(value);
    }
  }
  for (const a of allowed) if (path.startsWith(a)) return true;
  for (const d of disallowed) if (path.startsWith(d)) return false;
  return true;
}

type ExtractedOffer = { model?: string; offerType: string; price?: number; expiryDate?: string };

function extractOffersFromHtml(html: string): ExtractedOffer[] {
  const offers: ExtractedOffer[] = [];
  for (const match of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(match[1]);
      for (const item of Array.isArray(data) ? data : [data]) {
        const nested = item["@type"] === "Offer" ? [item] : Array.isArray(item.offers) ? item.offers : item.offers ? [item.offers] : [];
        for (const n of nested) {
          const price = typeof n.price === "number" ? n.price : parseFloat(String(n.price ?? "").replace(/[^0-9.]/g, ""));
          if (price >= 10_000) {
            const desc = String(n.description ?? "").toLowerCase();
            offers.push({ model: item.name as string | undefined, price, expiryDate: n.priceValidUntil, offerType: desc.includes("drive") ? "driveaway" : desc.includes("cashback") ? "cashback" : desc.includes("rate") ? "low_rate" : "other" });
          }
        }
      }
    } catch { /* skip */ }
  }
  if (offers.length > 0) return offers;
  const found = new Set<number>();
  for (const m of html.matchAll(/\$([0-9]{1,3}(?:,[0-9]{3})+)/g)) {
    const price = parseFloat(m[1].replace(/,/g, ""));
    if (price >= 15_000 && price <= 500_000 && !found.has(price)) {
      found.add(price);
      const ctx = html.slice(Math.max(0, (m.index ?? 0) - 100), (m.index ?? 0) + 50).toLowerCase();
      offers.push({ price, offerType: ctx.includes("drive") ? "driveaway" : ctx.includes("cashback") ? "cashback" : "other" });
      if (offers.length >= 20) break;
    }
  }
  return offers;
}

function offerHash(brandId: string, o: ExtractedOffer): string {
  return createHash("sha256").update([brandId, o.model ?? "", o.offerType, o.price ?? "", o.expiryDate ?? ""].join("|")).digest("hex").slice(0, 16);
}

export async function GET(req: Request) {
  const secret = new URL(req.url).searchParams.get("secret");
  if (!secret || secret !== process.env.CRON_SECRET)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const supabase = createSupabaseClient();
  const collectTime = new Date().toISOString();
  type BrandResult = { brand: string; offersExtracted: number; inserted: number; updated: number; error: string | null };
  const results: BrandResult[] = [];

  for (const brand of TRACKER_BRANDS) {
    const result: BrandResult = { brand: brand.id, offersExtracted: 0, inserted: 0, updated: 0, error: null };
    try {
      if (!await isRobotsAllowed(brand.offerUrl)) { result.error = "robots.txt disallows"; results.push(result); continue; }
      const res = await fetch(brand.offerUrl, { headers: { "User-Agent": USER_AGENT }, signal: AbortSignal.timeout(FETCH_TIMEOUT_MS) });
      if (!res.ok) { result.error = `HTTP ${res.status}`; results.push(result); continue; }
      const html = await res.text();
      const pageHash = createHash("sha256").update(html).digest("hex");
      const offers = extractOffersFromHtml(html);
      result.offersExtracted = offers.length;
      await supabase.from("price_snapshots").insert({ brand: brand.id, source_url: brand.offerUrl, page_hash: pageHash, offers_extracted: offers, raw_excerpt: html.slice(0, 1500).replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(), robots_allowed: true, http_status: res.status, collected_at: collectTime });
      for (const offer of offers) {
        const hash = offerHash(brand.id, offer);
        const { data: existing } = await supabase.from("price_offers").select("id").eq("offer_hash", hash).single();
        if (existing) { await supabase.from("price_offers").update({ last_seen_at: collectTime, is_active: true }).eq("offer_hash", hash); result.updated++; }
        else { await supabase.from("price_offers").insert({ brand: brand.id, model: offer.model ?? null, offer_type: offer.offerType, price: offer.price ?? null, expiry_date: offer.expiryDate ?? null, source_url: brand.offerUrl, offer_hash: hash, first_seen_at: collectTime, last_seen_at: collectTime, is_active: true }); result.inserted++; }
      }
    } catch (e) { result.error = e instanceof Error ? e.message : String(e); }
    results.push(result);
  }

  const summary = { collected_at: collectTime, brands: results.length, succeeded: results.filter(r => !r.error).length, total_offers: results.reduce((s, r) => s + r.offersExtracted, 0), results };
  console.log("[collect-prices]", JSON.stringify(summary));
  return NextResponse.json(summary);
}
