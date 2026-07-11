import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getRecallBySlug, getRelatedRecalls } from "../../data/recallsDb";

export const revalidate = 3600;

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const r = await getRecallBySlug(slug);
  if (!r) return { title: "Recall Not Found | MustGoDeals" };
  const yearLabel = r.year_start ? ` ${r.year_start}${r.year_end && r.year_end !== r.year_start ? ` to ${r.year_end}` : ""}` : "";
  const title = `${r.brand} ${r.model}${yearLabel} Safety Recall | MustGoDeals`;
  const description = r.defect_desc.slice(0, 155);
  return {
    title,
    description,
    alternates: { canonical: `/recalls/${slug}` },
    openGraph: { title, description, type: "article" },
  };
}

const AS = {
  label: { fontSize: "11px", fontWeight: 600, color: "#8A9A10", textTransform: "uppercase" as const, letterSpacing: "0.7px" },
  h2: { fontSize: "18px", fontWeight: 700, color: "#1A1A1A", margin: "2rem 0 0.6rem" },
  body: { fontSize: "15px", lineHeight: 1.75, color: "#333" },
  badge: (bg: string) => ({ display: "inline-block", background: bg, color: "white", borderRadius: "4px", padding: "2px 9px", fontSize: "11px", fontWeight: 600 }),
  card: { background: "white", border: "0.5px solid rgba(0,0,0,0.09)", borderLeft: "3px solid #CCDA47", borderRadius: "8px", padding: "0.9rem 1.1rem", textDecoration: "none", display: "block", marginBottom: "8px", color: "#1A1A1A" },
};

const DEFECT_COLORS: Record<string, string> = { airbag: "#E53E3E", brake: "#DD6B20", steering: "#D69E2E", "fuel and engine": "#805AD5", "fire risk": "#E53E3E", "software and electronics": "#3182CE" };
function defectColor(t: string | null) { return DEFECT_COLORS[t ?? ""] ?? "#718096"; }

export default async function RecallDetailPage({ params }: Props) {
  const { slug } = await params;
  const [recall, related] = await Promise.all([
    getRecallBySlug(slug),
    getRecallBySlug(slug).then(r => r ? getRelatedRecalls(r.brand, slug, 4) : []),
  ]);

  if (!recall) notFound();

  const yearLabel = recall.year_start
    ? ` ${recall.year_start}${recall.year_end && recall.year_end !== recall.year_start ? ` to ${recall.year_end}` : ""}`
    : "";

  const announcedFormatted = recall.announced_date
    ? new Date(recall.announced_date).toLocaleDateString("en-AU", { day: "numeric", month: "long", year: "numeric" })
    : null;

  const brandSlug = recall.brand.toLowerCase().replace(/\s+/g, "");

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `${recall.brand} ${recall.model}${yearLabel} Safety Recall`,
    "description": recall.defect_desc.slice(0, 155),
    "datePublished": recall.announced_date ?? recall.collected_at.split("T")[0],
    "dateModified": recall.collected_at.split("T")[0],
    "author": { "@type": "Organization", "name": "MustGoDeals" },
    "publisher": { "@type": "Organization", "name": "MustGoDeals", "url": "https://mustgodeals.com.au" },
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem", display: "grid", gridTemplateColumns: "1fr", gap: "0" }}>
        <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 280px", gap: "2.5rem", alignItems: "start" }}>

          {/* ── main content ── */}
          <article>
            <nav style={{ fontSize: "12px", color: "#999", marginBottom: "1rem" }}>
              <Link href="/recalls" style={{ color: "#5A7A10", textDecoration: "none" }}>Recall Tracker</Link>
              {" / "}
              <Link href={`/recalls/brand/${brandSlug}`} style={{ color: "#5A7A10", textDecoration: "none" }}>{recall.brand}</Link>
            </nav>

            {recall.defect_type && (
              <span style={AS.badge(defectColor(recall.defect_type))}>{recall.defect_type}</span>
            )}

            <h1 style={{ fontSize: "26px", fontWeight: 700, color: "#1A1A1A", margin: "0.5rem 0 0.4rem", lineHeight: 1.3 }}>
              {recall.brand} {recall.model}{yearLabel} Safety Recall
            </h1>

            {announcedFormatted && (
              <p style={{ fontSize: "13px", color: "#888", margin: "0 0 1.5rem" }}>
                Announced {announcedFormatted}
                {recall.affected_count && <span> · {recall.affected_count.toLocaleString()} vehicles affected</span>}
              </p>
            )}

            <h2 style={AS.h2}>What Is the Defect</h2>
            <p style={AS.body}>{recall.defect_desc}</p>

            <h2 style={AS.h2}>What Is the Risk</h2>
            <p style={AS.body}>{recall.risk_desc}</p>

            <h2 style={AS.h2}>What You Should Do</h2>
            <p style={AS.body}>{recall.consumer_action}</p>

            <div style={{ marginTop: "1.5rem", background: "#FFFDE7", border: "1px solid #F6E05E", borderRadius: "8px", padding: "1rem 1.25rem" }}>
              <p style={{ fontSize: "13px", color: "#744210", margin: 0, lineHeight: 1.6 }}>
                <strong>Important.</strong> This recall information is drawn from official Australian government safety notices.
                To confirm current recall status for your specific VIN, use the official{" "}
                <a href="https://www.vehiclerecalls.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: "#5A7A10" }}>vehiclerecalls.gov.au</a>{" "}
                lookup or contact your{" "}
                <a href={recall.source_url} target="_blank" rel="noopener noreferrer" style={{ color: "#5A7A10" }}>authorised {recall.brand} dealer</a>.
              </p>
            </div>

            {related.length > 0 && (
              <section style={{ marginTop: "2.5rem" }}>
                <h2 style={{ ...AS.h2, margin: "0 0 0.75rem" }}>More {recall.brand} Recalls</h2>
                {related.map(r => {
                  const yl = r.year_start ? ` ${r.year_start}${r.year_end && r.year_end !== r.year_start ? ` to ${r.year_end}` : ""}` : "";
                  return (
                    <Link key={r.slug} href={`/recalls/${r.slug}`} style={AS.card}>
                      <div style={{ fontSize: "13px", fontWeight: 600 }}>{r.brand} {r.model}{yl}</div>
                      <div style={{ fontSize: "12px", color: "#777", marginTop: "2px" }}>{r.defect_type ?? "safety recall"}</div>
                    </Link>
                  );
                })}
                <Link href={`/recalls/brand/${brandSlug}`} style={{ fontSize: "13px", color: "#5A7A10", fontWeight: 500, display: "block", marginTop: "6px" }}>
                  All {recall.brand} recalls →
                </Link>
              </section>
            )}
          </article>

          {/* ── sidebar ── */}
          <aside style={{ position: "sticky", top: "80px" }}>
            <div style={{ background: "white", border: "0.5px solid rgba(0,0,0,0.09)", borderRadius: "10px", padding: "1.25rem" }}>
              <h3 style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A1A", margin: "0 0 0.75rem" }}>Recall Summary</h3>
              <dl style={{ margin: 0, fontSize: "13px", lineHeight: 1.7 }}>
                <dt style={{ color: "#999", fontWeight: 500 }}>Brand</dt>
                <dd style={{ margin: "0 0 6px", fontWeight: 600 }}>{recall.brand}</dd>
                <dt style={{ color: "#999", fontWeight: 500 }}>Model</dt>
                <dd style={{ margin: "0 0 6px", fontWeight: 600 }}>{recall.model}</dd>
                {recall.year_start && <>
                  <dt style={{ color: "#999", fontWeight: 500 }}>Model Years</dt>
                  <dd style={{ margin: "0 0 6px", fontWeight: 600 }}>{recall.year_start}{recall.year_end && recall.year_end !== recall.year_start ? ` to ${recall.year_end}` : ""}</dd>
                </>}
                {recall.defect_type && <>
                  <dt style={{ color: "#999", fontWeight: 500 }}>Defect Type</dt>
                  <dd style={{ margin: "0 0 6px" }}><span style={AS.badge(defectColor(recall.defect_type))}>{recall.defect_type}</span></dd>
                </>}
                {recall.affected_count && <>
                  <dt style={{ color: "#999", fontWeight: 500 }}>Vehicles Affected</dt>
                  <dd style={{ margin: "0 0 6px", fontWeight: 600 }}>{recall.affected_count.toLocaleString()}</dd>
                </>}
                {announcedFormatted && <>
                  <dt style={{ color: "#999", fontWeight: 500 }}>Announced</dt>
                  <dd style={{ margin: "0 0 6px" }}>{announcedFormatted}</dd>
                </>}
              </dl>
              <a href={recall.source_url} target="_blank" rel="noopener noreferrer"
                style={{ display: "block", marginTop: "0.75rem", background: "#CCDA47", color: "#1A1A1A", fontWeight: 600, fontSize: "13px", textAlign: "center", borderRadius: "6px", padding: "8px 12px", textDecoration: "none" }}>
                Official Government Notice
              </a>
            </div>

            <div style={{ marginTop: "1rem", background: "white", border: "0.5px solid rgba(0,0,0,0.09)", borderRadius: "10px", padding: "1.25rem" }}>
              <h3 style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A1A", margin: "0 0 0.75rem" }}>Related Guides</h3>
              <Link href="/blog/buying-a-car-in-australia-guide" style={{ ...AS.card, marginBottom: "8px" }}>
                <span style={AS.label}>Buying Guide</span>
                <div style={{ fontSize: "13px", fontWeight: 600, marginTop: "3px" }}>What to Check Before Buying a Used Car</div>
              </Link>
              <Link href="/news/australia-new-road-rules-july-2026" style={{ ...AS.card, marginBottom: 0 }}>
                <span style={AS.label}>Road Rules</span>
                <div style={{ fontSize: "13px", fontWeight: 600, marginTop: "3px" }}>New Road Rules July 2026</div>
              </Link>
            </div>
          </aside>
        </div>
      </main>
    </>
  );
}
