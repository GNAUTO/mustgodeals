import { NextResponse } from "next/server";
import { createHash } from "crypto";
import { createSupabaseClient } from "../../../lib/supabase";

const UA = "MustGoDeals-RecallTracker/1.0 (+https://mustgodeals.com.au)";
const RECALLS_URL = process.env.RECALLS_SOURCE_URL ?? "https://www.productsafety.gov.au/recalls?categories=8&sort=newest";

// ── robots check ──────────────────────────────────────────────────────────────

async function robotsAllowed(url: string): Promise<boolean> {
  try {
    const { origin, pathname } = new URL(url);
    const res = await fetch(`${origin}/robots.txt`, { headers: { "User-Agent": UA }, signal: AbortSignal.timeout(5_000) });
    if (!res.ok) return true;
    const text = await res.text();
    let inBlock = false;
    const dis: string[] = [];
    for (const raw of text.split(/\r?\n/)) {
      const line = raw.trim();
      if (!line || line.startsWith("#")) continue;
      const [f, ...rest] = line.split(":").map(s => s.trim());
      const v = rest.join(":").trim();
      if (f.toLowerCase() === "user-agent") inBlock = v === "*" || v.toLowerCase().includes("mustgodeals");
      else if (inBlock && f.toLowerCase() === "disallow" && v && pathname.startsWith(v)) return false;
    }
    return true;
  } catch { return true; }
}

// ── slug generation (underscores, no hyphens) ─────────────────────────────────

function toSlugPart(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function generateSlug(brand: string, model: string, yearStart: number | null, defectType: string | null, recallId: string): string {
  const parts = [
    toSlugPart(brand),
    toSlugPart(model),
    yearStart ? String(yearStart) : "",
    defectType ? toSlugPart(defectType) : "",
  ].filter(Boolean);
  const suffix = recallId.replace(/[^a-z0-9]/gi, "").slice(-6).toLowerCase();
  return `${parts.join("_")}_${suffix}`;
}

// ── defect type classification ─────────────────────────────────────────────────

function classifyDefect(text: string): string {
  const t = text.toLowerCase();
  if (t.includes("airbag")) return "airbag";
  if (t.includes("brake")) return "brake";
  if (t.includes("steering")) return "steering";
  if (t.includes("fuel") || t.includes("engine")) return "fuel and engine";
  if (t.includes("software") || t.includes("electronic") || t.includes("firmware")) return "software and electronics";
  if (t.includes("tyre") || t.includes("tire") || t.includes("wheel")) return "tyres and wheels";
  if (t.includes("fire") || t.includes("combustion")) return "fire risk";
  return "safety system";
}

// ── content rewriting ─────────────────────────────────────────────────────────
// Generates unique-feeling natural paragraphs from structured data.
// Uses recall_id hash to pick template variant → pages differ from each other.

function variant(seed: string, n: number): number {
  let h = 0;
  for (const c of seed) h = (h * 31 + c.charCodeAt(0)) & 0x7fffffff;
  return h % n;
}

function rewriteDefect(brand: string, model: string, yearRange: string, original: string, seed: string): string {
  const templates = [
    `A safety defect has been identified in ${brand} ${model} vehicles ${yearRange}. ${original}`,
    `${brand} has notified Australian authorities of a safety concern in ${model} vehicles ${yearRange}. The issue involves: ${original}`,
    `Certain ${brand} ${model} vehicles ${yearRange} are subject to a safety recall. The identified defect relates to ${original.toLowerCase().replace(/^the /, "")}`,
  ];
  return templates[variant(seed, templates.length)];
}

function rewriteRisk(original: string, defectType: string, seed: string): string {
  const templates = [
    `The risk to occupants and other road users is as follows. ${original}`,
    `According to the official safety notice, ${original.charAt(0).toLowerCase()}${original.slice(1)}`,
    `This ${defectType} issue presents the following safety concern. ${original}`,
  ];
  return templates[variant(seed + "r", templates.length)];
}

function rewriteAction(original: string, brand: string, seed: string): string {
  const templates = [
    `Owners should take the following action. ${original} Contact your nearest ${brand} dealer to arrange a free inspection and repair.`,
    `${brand} will remedy the defect at no charge to the owner. ${original}`,
    `The recommended course of action is as follows. ${original} No charge applies to affected owners for this recall repair.`,
  ];
  return templates[variant(seed + "a", templates.length)];
}

// ── HTML parsing ──────────────────────────────────────────────────────────────

type ParsedRecall = {
  recallId: string;
  brand: string;
  model: string;
  yearStart: number | null;
  yearEnd: number | null;
  affectedCount: number | null;
  defectType: string;
  defectRaw: string;
  riskRaw: string;
  actionRaw: string;
  announcedDate: string | null;
  sourceUrl: string;
};

function parseRecallsHtml(html: string, baseUrl: string): ParsedRecall[] {
  const recalls: ParsedRecall[] = [];

  // Try JSON-LD first (some gov sites embed structured data)
  for (const m of html.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)) {
    try {
      const data = JSON.parse(m[1]);
      const items = (Array.isArray(data) ? data : [data]).filter((d: Record<string, unknown>) =>
        String(d["@type"] ?? "").includes("Recall") || String(d["@type"] ?? "").includes("Safety")
      );
      for (const item of items) {
        const title = String(item.name ?? item.headline ?? "");
        const desc = String(item.description ?? "");
        const date = String(item.datePublished ?? item.startDate ?? "");
        const url = String(item.url ?? baseUrl);
        const idMatch = url.match(/\/(\d+)\/?$/) ?? title.match(/\b(PRA\d+|RC\d+|\d{5,})\b/i);
        if (!title || !desc) continue;
        const { brand, model, yearStart, yearEnd } = extractVehicleInfo(title);
        recalls.push({
          recallId: idMatch?.[1] ?? createHash("md5").update(title).digest("hex").slice(0, 10),
          brand, model, yearStart, yearEnd,
          affectedCount: extractAffectedCount(desc),
          defectType: classifyDefect(desc),
          defectRaw: desc.slice(0, 500),
          riskRaw: desc.slice(0, 300),
          actionRaw: "Contact your nearest authorised dealer to arrange a free inspection and repair under this recall.",
          announcedDate: date ? new Date(date).toISOString().split("T")[0] : null,
          sourceUrl: url,
        });
      }
    } catch { /* skip */ }
  }

  if (recalls.length > 0) return recalls;

  // Fallback: parse recall list items from HTML
  // Handles productsafety.gov.au article/list-item patterns
  const articleRe = /<(?:article|li)[^>]*class="[^"]*recall[^"]*"[^>]*>([\s\S]*?)<\/(?:article|li)>/gi;
  for (const m of html.matchAll(articleRe)) {
    const block = m[1];
    const titleMatch = block.match(/<(?:h[23]|strong)[^>]*>([^<]+)<\/(?:h[23]|strong)>/i);
    const dateMatch = block.match(/<time[^>]*datetime="([^"]+)"/i) ?? block.match(/(\d{1,2}\s+\w+\s+\d{4})/);
    const hrefMatch = block.match(/href="([^"]+recall[^"]+)"/i);
    const descMatch = block.match(/<p[^>]*>([^<]+)<\/p>/i);
    if (!titleMatch) continue;
    const title = titleMatch[1].trim();
    const { brand, model, yearStart, yearEnd } = extractVehicleInfo(title);
    if (!brand) continue;
    const url = hrefMatch ? (hrefMatch[1].startsWith("http") ? hrefMatch[1] : `https://www.productsafety.gov.au${hrefMatch[1]}`) : baseUrl;
    const idMatch = url.match(/\/(\d+)\/?$/) ?? title.match(/\b(PRA\d+|RC\d+|\d{5,})\b/i);
    const desc = descMatch?.[1]?.trim() ?? title;
    recalls.push({
      recallId: idMatch?.[1] ?? createHash("md5").update(title).digest("hex").slice(0, 10),
      brand, model, yearStart, yearEnd,
      affectedCount: extractAffectedCount(desc),
      defectType: classifyDefect(desc + " " + title),
      defectRaw: desc,
      riskRaw: desc,
      actionRaw: "Contact your nearest authorised dealer to arrange a free inspection and repair.",
      announcedDate: dateMatch ? parseDate(dateMatch[1]) : null,
      sourceUrl: url,
    });
  }

  return recalls;
}

function extractVehicleInfo(title: string): { brand: string; model: string; yearStart: number | null; yearEnd: number | null } {
  const knownBrands = ["Toyota", "Mazda", "Hyundai", "Kia", "Ford", "Holden", "Subaru", "Honda", "Nissan", "Mitsubishi", "BMW", "Mercedes", "Mercedes-Benz", "Audi", "Volkswagen", "VW", "Renault", "Peugeot", "Citroen", "Volvo", "Land Rover", "Jeep", "Dodge", "RAM", "Isuzu", "Suzuki", "Ssangyong", "MG", "GWM", "BYD", "Tesla", "Lexus", "Infiniti", "Acura", "Skoda", "Seat", "Cupra", "Alfa Romeo", "Fiat", "Maserati", "Lamborghini", "Porsche", "Ferrari"];
  let brand = "";
  let model = "";
  for (const b of knownBrands) {
    if (title.toLowerCase().includes(b.toLowerCase())) { brand = b; break; }
  }
  if (!brand) {
    const firstWord = title.match(/^([A-Z][a-z]+)/);
    brand = firstWord?.[1] ?? "Unknown";
  }
  const yearMatch = title.match(/\b(20\d{2})(?:\s*[-–]\s*(20\d{2}))?\b/);
  const yearStart = yearMatch ? parseInt(yearMatch[1]) : null;
  const yearEnd = yearMatch?.[2] ? parseInt(yearMatch[2]) : yearStart;
  const afterBrand = title.replace(new RegExp(brand, "i"), "").replace(/\b20\d{2}\b/g, "").replace(/recall|safety|defect/gi, "").trim();
  model = afterBrand.replace(/^\s*[-–]\s*/, "").split(/[-–]/)[0].trim() || brand;
  return { brand, model, yearStart, yearEnd };
}

function extractAffectedCount(text: string): number | null {
  const m = text.match(/(\d[\d,]+)\s+(?:vehicles?|units?|cars?)/i);
  return m ? parseInt(m[1].replace(/,/g, "")) : null;
}

function parseDate(str: string): string | null {
  const d = new Date(str);
  return isNaN(d.getTime()) ? null : d.toISOString().split("T")[0];
}

// ── main handler ──────────────────────────────────────────────────────────────

export async function GET(req: Request) {
  const url = new URL(req.url);
  const secret = url.searchParams.get("secret");
  if (!secret || secret !== process.env.CRON_SECRET)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const supabase = createSupabaseClient();
  const collectTime = new Date().toISOString();
  let inserted = 0, updated = 0, skipped = 0;
  const errors: string[] = [];

  try {
    if (!await robotsAllowed(RECALLS_URL))
      return NextResponse.json({ error: "robots.txt disallows crawling" }, { status: 403 });

    const res = await fetch(RECALLS_URL, {
      headers: { "User-Agent": UA, "Accept": "text/html,application/json,*/*" },
      signal: AbortSignal.timeout(20_000),
    });
    if (!res.ok) return NextResponse.json({ error: `HTTP ${res.status}` }, { status: 502 });

    const html = await res.text();
    const parsed = parseRecallsHtml(html, RECALLS_URL);

    for (const p of parsed) {
      try {
        // Check if already stored
        const { data: existing } = await supabase.from("recalls").select("id, content_hash").eq("recall_id", p.recallId).single();
        const slug = generateSlug(p.brand, p.model, p.yearStart, p.defectType, p.recallId);
        const yearRange = p.yearStart && p.yearEnd && p.yearStart !== p.yearEnd
          ? `from ${p.yearStart} to ${p.yearEnd}`
          : p.yearStart ? `from ${p.yearStart}` : "";

        const defectDesc = rewriteDefect(p.brand, p.model, yearRange, p.defectRaw, p.recallId);
        const riskDesc = rewriteRisk(p.riskRaw, p.defectType, p.recallId);
        const consumerAction = rewriteAction(p.actionRaw, p.brand, p.recallId);
        const contentHash = createHash("sha256").update(p.defectRaw + p.riskRaw).digest("hex").slice(0, 16);

        if (existing) {
          if (existing.content_hash !== contentHash) {
            await supabase.from("recalls").update({ defect_desc: defectDesc, risk_desc: riskDesc, consumer_action: consumerAction, content_hash: contentHash, updated_at: collectTime }).eq("recall_id", p.recallId);
            updated++;
          } else { skipped++; }
        } else {
          const { error: insertErr } = await supabase.from("recalls").insert({
            recall_id: p.recallId, brand: p.brand, model: p.model,
            year_start: p.yearStart, year_end: p.yearEnd,
            affected_count: p.affectedCount, defect_type: p.defectType,
            defect_desc: defectDesc, risk_desc: riskDesc, consumer_action: consumerAction,
            announced_date: p.announcedDate, source_url: p.sourceUrl,
            slug, content_hash: contentHash, collected_at: collectTime, updated_at: collectTime,
          });
          if (insertErr) errors.push(`${p.recallId}: ${insertErr.message}`);
          else inserted++;
        }
      } catch (e) { errors.push(`${p.recallId}: ${e instanceof Error ? e.message : String(e)}`); }
    }
  } catch (e) {
    return NextResponse.json({ error: e instanceof Error ? e.message : String(e) }, { status: 500 });
  }

  const summary = { collected_at: collectTime, parsed: 0, inserted, updated, skipped, errors };
  console.log("[collect-recalls]", JSON.stringify(summary));
  return NextResponse.json(summary);
}
