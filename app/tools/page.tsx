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
    href:  "/tools/stamp-duty-calculator",
    tag:   "STAMP DUTY",
    title: "Stamp Duty Calculator",
    desc:  "Calculate motor vehicle stamp duty across all Australian states and territories. Supports EV concession rates and instant results.",
    badge: "All 8 states",
  },
  {
    href:  "/tools/rego-calculator",
    tag:   "REGISTRATION",
    title: "Rego Calculator",
    desc:  "Estimate your annual vehicle registration cost by state. Includes weight based fees, cylinder tiers, and EV registration incentives.",
    badge: "2026 to 2027 rates",
  },
];

export default function ToolsPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#fdfdfb", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <div className="tools-page-inner">
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#a3a091", letterSpacing: "0.08em", marginBottom: "2.5rem" }}>
          <Link href="/" style={{ color: "#a3a091", textDecoration: "none" }}>Home</Link>
          {" / "}
          <span>Tools</span>
        </div>

        <div style={{ marginBottom: "3rem" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", color: "#84a300", textTransform: "uppercase", marginBottom: "12px" }}>
            Free Tools
          </div>
          <h1 style={{ fontFamily: "var(--font-newsreader)", fontSize: "40px", fontWeight: 400, color: "#26261f", lineHeight: 1.2, margin: "0 0 16px" }}>
            Car Cost Calculators
          </h1>
          <p style={{ fontSize: "15px", color: "#6b6963", lineHeight: 1.65, maxWidth: "440px", margin: 0 }}>
            Instant cost estimates for Australian car buyers. No sign up, no ads, just the numbers.
          </p>
        </div>

        <div className="tools-card-grid">
          {TOOLS.map((tool) => (
            <Link key={tool.href} href={tool.href} className="tools-card">
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", color: "#84a300", textTransform: "uppercase" }}>
                {tool.tag}
              </div>
              <div style={{ fontFamily: "var(--font-newsreader)", fontSize: "22px", color: "#26261f", lineHeight: 1.3 }}>
                {tool.title}
              </div>
              <div style={{ fontSize: "13px", color: "#6b6963", lineHeight: 1.7, flex: 1 }}>
                {tool.desc}
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", paddingTop: "16px", borderTop: "1px solid #f0ede4" }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#a3a091" }}>{tool.badge}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#84a300" }}>→</span>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
