import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Free Car Cost Calculators for Australia · MustGoDeals",
  description:
    "Free tools for Australian car buyers. Calculate stamp duty and annual registration costs for all 8 states and territories. Instant results, no sign up required.",
  alternates: {
    canonical: "https://mustgodeals.com.au/tools",
  },
};

const TOOLS = [
  {
    href:    "/tools/stamp-duty-calculator",
    tag:     "STAMP DUTY",
    title:   "Stamp Duty Calculator",
    desc:    "Calculate motor vehicle stamp duty across all Australian states and territories. Supports EV concession rates and instant results.",
    badge:   "All 8 states",
  },
  {
    href:    "/tools/rego-calculator",
    tag:     "REGISTRATION",
    title:   "Rego Calculator",
    desc:    "Estimate your annual vehicle registration cost by state. Includes weight based fees, cylinder tiers, and EV registration incentives.",
    badge:   "2026 to 2027 rates",
  },
];

const S = {
  page:   { minHeight: "100vh", background: "#FAFAFA", display: "flex", flexDirection: "column" } as React.CSSProperties,
  hero:   { background: "#FAFAFA", padding: "2.5rem 1.5rem 2rem", borderBottom: "1px solid rgba(0,0,0,0.06)" } as React.CSSProperties,
  heroIn: { maxWidth: "780px", margin: "0 auto" } as React.CSSProperties,
  h1:     { fontSize: "36px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "0.75rem", letterSpacing: "-0.5px" } as React.CSSProperties,
  sub:    { fontSize: "15px", color: "#666", lineHeight: 1.6, maxWidth: "480px" } as React.CSSProperties,
  breadc: { display: "flex", gap: "6px", alignItems: "center", fontSize: "12px", color: "rgba(0,0,0,0.35)", marginBottom: "1.25rem" } as React.CSSProperties,
  bLink:  { color: "rgba(0,0,0,0.35)", textDecoration: "none" } as React.CSSProperties,
  grid:   { maxWidth: "780px", margin: "0 auto", padding: "2.5rem 1.5rem 4rem", display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px" } as React.CSSProperties,
  card:   { background: "white", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: "16px", padding: "24px", textDecoration: "none", display: "flex", flexDirection: "column" as const, gap: "10px" } as React.CSSProperties,
};

export default function ToolsPage() {
  return (
    <div style={S.page}>
      <Navbar />

      <div style={S.hero}>
        <div style={S.heroIn}>
          <div style={S.breadc}>
            <Link href="/" style={S.bLink}>Home</Link>
            <span>›</span>
            <span style={{ color: "rgba(0,0,0,0.5)" }}>Tools</span>
          </div>
          <h1 style={S.h1}>Free Car Cost Calculators</h1>
          <p style={S.sub}>
            Instant cost estimates for Australian car buyers. No sign up, no ads, just the numbers.
          </p>
        </div>
      </div>

      <div style={{ ...S.grid, flex: 1 }}>
        {TOOLS.map((tool) => (
          <Link key={tool.href} href={tool.href} style={S.card}>
            <div style={{ fontSize: "10px", fontWeight: 700, color: "#7a8a00", letterSpacing: "0.1em" }}>
              {tool.tag}
            </div>
            <div style={{ fontSize: "18px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3 }}>
              {tool.title}
            </div>
            <div style={{ fontSize: "13px", color: "#666", lineHeight: 1.65, flex: 1 }}>
              {tool.desc}
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "4px" }}>
              <span style={{ fontSize: "11px", color: "#aaa" }}>{tool.badge}</span>
              <span style={{ fontSize: "14px", color: "#CCDA47", fontWeight: 700 }}>→</span>
            </div>
          </Link>
        ))}
      </div>

      <Footer />
    </div>
  );
}
