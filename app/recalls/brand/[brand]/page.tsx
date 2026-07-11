import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecallsByBrand, getAllBrands } from "../../../data/recallsDb";

export const revalidate = 3600;

type Props = { params: Promise<{ brand: string }> };

function normalizeBrand(slug: string, records: { brand: string }[]): string | null {
  const lower = slug.toLowerCase();
  return records.find(r => r.brand.toLowerCase().replace(/\s+/g, "") === lower)?.brand ?? null;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brand: brandSlug } = await params;
  const brands = await getAllBrands();
  const brand = normalizeBrand(brandSlug, brands);
  if (!brand) return { title: "Brand Not Found | MustGoDeals" };
  const title = `${brand} Safety Recalls in Australia | MustGoDeals`;
  const description = `Complete list of ${brand} vehicle safety recalls in Australia. Check if your ${brand} is affected and what action to take.`;
  return { title, description, alternates: { canonical: `/recalls/brand/${brandSlug}` } };
}

const DEFECT_COLORS: Record<string, string> = { airbag: "#E53E3E", brake: "#DD6B20", steering: "#D69E2E", "fuel and engine": "#805AD5", "fire risk": "#E53E3E", "software and electronics": "#3182CE" };
function defectColor(t: string | null) { return DEFECT_COLORS[t ?? ""] ?? "#718096"; }

const AS = {
  badge: (bg: string) => ({ display: "inline-block", background: bg, color: "white", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", fontWeight: 600 }),
  grayBadge: { display: "inline-block", background: "#F5F5F0", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", color: "#555", fontWeight: 500 } as React.CSSProperties,
  card: { background: "white", border: "0.5px solid rgba(0,0,0,0.09)", borderLeft: "3px solid #CCDA47", borderRadius: "8px", padding: "1rem 1.25rem", textDecoration: "none", display: "block", marginBottom: "10px", color: "#1A1A1A" } as React.CSSProperties,
};

export default async function BrandRecallsPage({ params }: Props) {
  const { brand: brandSlug } = await params;
  const brands = await getAllBrands();
  const brand = normalizeBrand(brandSlug, brands);
  if (!brand) notFound();

  const recalls = await getRecallsByBrand(brand, 50);
  if (recalls.length === 0) notFound();

  // build defect type breakdown
  const typeCounts: Record<string, number> = {};
  for (const r of recalls) typeCounts[r.defect_type ?? "other"] = (typeCounts[r.defect_type ?? "other"] ?? 0) + 1;
  const topTypes = Object.entries(typeCounts).sort((a, b) => b[1] - a[1]).slice(0, 5);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${brand} Safety Recalls in Australia`,
    "description": `Complete list of ${brand} vehicle safety recalls in Australia.`,
    "url": `https://mustgodeals.com.au/recalls/brand/${brandSlug}`,
    "numberOfItems": recalls.length,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem" }}>
        <nav style={{ fontSize: "12px", color: "#999", marginBottom: "1rem" }}>
          <Link href="/recalls" style={{ color: "#5A7A10", textDecoration: "none" }}>Recall Tracker</Link>
          {" / "}
          {brand}
        </nav>

        <h1 style={{ fontSize: "26px", fontWeight: 700, color: "#1A1A1A", marginBottom: "0.4rem" }}>
          {brand} Safety Recalls in Australia
        </h1>
        <p style={{ color: "#555", fontSize: "14px", marginBottom: "1.5rem" }}>
          {recalls.length} recall{recalls.length !== 1 ? "s" : ""} on record. Check if your {brand} is affected and find out what action to take.
        </p>

        {topTypes.length > 1 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "1.75rem" }}>
            {topTypes.map(([type, count]) => (
              <span key={type} style={{ ...AS.grayBadge, padding: "4px 10px" }}>
                <span style={{ display: "inline-block", width: "8px", height: "8px", borderRadius: "50%", background: defectColor(type), marginRight: "5px", verticalAlign: "middle" }} />
                {type} ({count})
              </span>
            ))}
          </div>
        )}

        <section>
          {recalls.map(r => {
            const yl = r.year_start ? ` ${r.year_start}${r.year_end && r.year_end !== r.year_start ? ` to ${r.year_end}` : ""}` : "";
            const date = r.announced_date ? new Date(r.announced_date).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" }) : null;
            return (
              <Link key={r.slug} href={`/recalls/${r.slug}`} style={AS.card}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "12px", flexWrap: "wrap" }}>
                  <div>
                    <div style={{ fontSize: "14px", fontWeight: 700, marginBottom: "3px" }}>
                      {r.model}{yl}
                    </div>
                    <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.5 }}>
                      {r.defect_desc.slice(0, 110)}{r.defect_desc.length > 110 ? "..." : ""}
                    </div>
                  </div>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px", flexShrink: 0 }}>
                    {r.defect_type && <span style={AS.badge(defectColor(r.defect_type))}>{r.defect_type}</span>}
                    {date && <span style={AS.grayBadge}>{date}</span>}
                    {r.affected_count && <span style={{ fontSize: "11px", color: "#888" }}>{r.affected_count.toLocaleString()} vehicles</span>}
                  </div>
                </div>
              </Link>
            );
          })}
        </section>

        <div style={{ marginTop: "2.5rem", padding: "1.25rem", background: "white", borderRadius: "10px", border: "0.5px solid rgba(0,0,0,0.09)" }}>
          <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.65, margin: 0 }}>
            Recall data is sourced from Australian government safety notices and updated daily. For your specific VIN,
            use the{" "}
            <a href="https://www.vehiclerecalls.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: "#5A7A10" }}>vehiclerecalls.gov.au</a>{" "}
            lookup tool.
          </p>
        </div>

        <div style={{ marginTop: "1.25rem", display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link href="/recalls" style={{ fontSize: "13px", color: "#5A7A10", fontWeight: 500 }}>← All recalls</Link>
          <Link href="/blog/buying-a-car-in-australia-guide" style={{ fontSize: "13px", color: "#5A7A10", fontWeight: 500 }}>Buying Guide</Link>
        </div>
      </main>
    </>
  );
}
