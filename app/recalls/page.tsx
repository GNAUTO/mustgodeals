import type { Metadata } from "next";
import Link from "next/link";
import { getRecentRecalls, getAllBrands } from "../data/recallsDb";

export const revalidate = 3600;

export const metadata: Metadata = {
  title: "Australian Car Recalls | MustGoDeals",
  description: "Latest Australian car and vehicle safety recalls, searchable by brand. Official recall data from the Australian government, explained in plain language.",
  alternates: { canonical: "/recalls" },
};

const badge: React.CSSProperties = { display: "inline-block", background: "#F5F5F0", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: "4px", padding: "2px 8px", fontSize: "11px", color: "#555", fontWeight: 500 };
const card: React.CSSProperties = { background: "white", border: "0.5px solid rgba(0,0,0,0.09)", borderLeft: "3px solid #CCDA47", borderRadius: "8px", padding: "1rem 1.25rem", textDecoration: "none", display: "block", marginBottom: "10px", color: "#1A1A1A" };

const DEFECT_COLORS: Record<string, string> = { airbag: "#E53E3E", brake: "#DD6B20", steering: "#D69E2E", "fuel and engine": "#805AD5", "fire risk": "#E53E3E", "software and electronics": "#3182CE" };

function defectColor(type: string | null) { return DEFECT_COLORS[type ?? ""] ?? "#718096"; }

export default async function RecallsHubPage() {
  const [recalls, brands] = await Promise.all([getRecentRecalls(20), getAllBrands()]);

  return (
    <main style={{ maxWidth: "900px", margin: "0 auto", padding: "2rem 1rem" }}>
      <h1 style={{ fontSize: "28px", fontWeight: 700, color: "#1A1A1A", marginBottom: "0.5rem" }}>
        Australian Car Recall Tracker
      </h1>
      <p style={{ color: "#555", lineHeight: 1.7, marginBottom: "2rem", maxWidth: "640px" }}>
        Australian vehicle safety recalls from the official government database, explained in plain language.
        Check whether your car is affected and what action you need to take.
      </p>

      {brands.length > 0 && (
        <section style={{ marginBottom: "2.5rem" }}>
          <h2 style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.75rem", letterSpacing: "0.3px" }}>Browse by Brand</h2>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {brands.map(b => (
              <Link key={b.brand} href={`/recalls/brand/${b.brand.toLowerCase().replace(/\s+/g, "")}`}
                style={{ ...badge, background: "white", border: "0.5px solid rgba(0,0,0,0.12)", padding: "4px 12px", fontSize: "13px", fontWeight: 500 }}>
                {b.brand} <span style={{ color: "#999", fontSize: "11px" }}>({b.count})</span>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section>
        <h2 style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.75rem" }}>Recent Recalls</h2>
        {recalls.length === 0 ? (
          <p style={{ color: "#888", fontSize: "14px" }}>
            Recall data loads automatically via our daily collection run. Check back soon, or{" "}
            <Link href="/contact" style={{ color: "#5A7A10" }}>contact us</Link> if you have a specific recall question.
          </p>
        ) : (
          recalls.map(r => (
            <Link key={r.slug} href={`/recalls/${r.slug}`} style={card}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", flexWrap: "wrap" }}>
                <div>
                  <div style={{ fontSize: "13px", fontWeight: 700, color: "#1A1A1A", marginBottom: "4px" }}>
                    {r.brand} {r.model}
                    {r.year_start && <span style={{ fontWeight: 400, color: "#777", marginLeft: "6px" }}>
                      {r.year_start}{r.year_end && r.year_end !== r.year_start ? ` to ${r.year_end}` : ""}
                    </span>}
                  </div>
                  <div style={{ fontSize: "13px", color: "#555", lineHeight: 1.5 }}>
                    {r.defect_desc.slice(0, 100)}{r.defect_desc.length > 100 ? "..." : ""}
                  </div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "4px", flexShrink: 0 }}>
                  {r.defect_type && <span style={{ ...badge, background: defectColor(r.defect_type), color: "white", border: "none" }}>{r.defect_type}</span>}
                  {r.announced_date && <span style={{ ...badge, fontSize: "11px" }}>{new Date(r.announced_date).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })}</span>}
                </div>
              </div>
            </Link>
          ))
        )}
      </section>

      <div style={{ marginTop: "3rem", padding: "1.5rem", background: "white", borderRadius: "10px", border: "0.5px solid rgba(0,0,0,0.09)" }}>
        <p style={{ fontSize: "13px", color: "#888", lineHeight: 1.65, margin: 0 }}>
          Recall data is sourced from Australian government safety notices. This page is updated daily.
          For the official recall database, visit{" "}
          <a href="https://www.productsafety.gov.au/recalls" target="_blank" rel="noopener noreferrer" style={{ color: "#5A7A10" }}>productsafety.gov.au</a>{" "}
          or{" "}
          <a href="https://www.vehiclerecalls.gov.au" target="_blank" rel="noopener noreferrer" style={{ color: "#5A7A10" }}>vehiclerecalls.gov.au</a>.
          If you believe your vehicle is affected, contact your authorised dealer.
        </p>
      </div>

      <div style={{ marginTop: "1.5rem" }}>
        <h3 style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A1A", marginBottom: "8px" }}>Related guides</h3>
        <Link href="/blog/buying-a-car-in-australia-guide" style={{ ...card, border: "0.5px solid rgba(0,0,0,0.09)", borderLeft: "3px solid #CCDA47" }}>
          <span style={{ fontSize: "11px", color: "#8A9A10", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.7px" }}>Buying Guide</span>
          <div style={{ fontSize: "14px", fontWeight: 600, marginTop: "3px" }}>What to Check Before Buying a Used Car in Australia</div>
        </Link>
        <Link href="/news/australia-new-road-rules-july-2026" style={{ ...card, border: "0.5px solid rgba(0,0,0,0.09)", borderLeft: "3px solid #CCDA47" }}>
          <span style={{ fontSize: "11px", color: "#8A9A10", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.7px" }}>Road Rules</span>
          <div style={{ fontSize: "14px", fontWeight: 600, marginTop: "3px" }}>New Road Rules July 2026. What Changed Across Australia</div>
        </Link>
      </div>
    </main>
  );
}
