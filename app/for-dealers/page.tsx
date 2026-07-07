import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "For Dealers | MustGoDeals",
  description: "List your clearance and demo stock on MustGoDeals. Free for dealers. Enquiries go directly to you.",
};

const VALUE_PROPS = [
  {
    icon: "✦",
    title: "Currently 100% free",
    desc: "No setup fee, no listing fee, no commission. We will communicate clearly if that ever changes.",
  },
  {
    icon: "◎",
    title: "Clearance-only channel",
    desc: "Your stock sits alongside other clearance vehicles, not buried in general new-car listings. Buyers here are ready to move.",
  },
  {
    icon: "→",
    title: "Direct to you, no filter",
    desc: "When a buyer enquires, their details go straight to you. No middleman, no delay, no MustGoDeals follow-up.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Email us your stock",
    desc: "Send your clearance vehicle details to hello.mustgodeals@gmail.com. Include make, model, year, odometer, colour, original new price, and asking price.",
  },
  {
    n: "02",
    title: "We verify and publish",
    desc: "MustGoDeals checks the submission and publishes the listing. Typically within one business day.",
  },
  {
    n: "03",
    title: "Buyer enquiries come to you directly",
    desc: "When a buyer clicks \"Check Availability\", their details are forwarded to you immediately. You take it from there.",
  },
];

export default function ForDealers() {
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA" }}>
      <Navbar langLinks={{ current: "EN", links: { EN: "/for-dealers", KO: "/for-dealers-ko" } }} />

      {/* Page header */}
      <div style={{ background: "#FAFAFA", padding: "2rem 2rem 1.5rem", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", color: "#8A9A10", letterSpacing: "1px", marginBottom: "0.75rem", fontWeight: 600 }}>DEALER PARTNERSHIPS</div>
          <h1 style={{ color: "#1A1A1A", fontSize: "32px", fontWeight: 500, letterSpacing: "-0.3px", marginBottom: "0.75rem" }}>
            Move inventory faster, at no cost
          </h1>
          <p style={{ color: "#6B6B6B", fontSize: "15px", margin: 0, lineHeight: 1.7 }}>
            MustGoDeals puts your clearance and demo stock in front of buyers<br />
            who are already looking. No contracts, no fees, no complexity.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" }}>

        {/* Value propositions */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px", marginBottom: "1.5rem" }}>
          {VALUE_PROPS.map(({ icon, title, desc }) => (
            <div key={title} style={{ background: "white", borderRadius: "10px", padding: "1.5rem", border: "0.5px solid rgba(0,0,0,0.07)", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: "18px", color: "#CCDA47", marginBottom: "0.75rem", fontWeight: 700 }}>{icon}</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.5rem" }}>{title}</div>
              <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.7 }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* How it works for dealers */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2.5rem", border: "0.5px solid rgba(0,0,0,0.07)", marginBottom: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "1.75rem" }}>Getting listed in three steps</h2>
          {STEPS.map(({ n, title, desc }, i) => (
            <div key={n} style={{
              display: "flex",
              gap: "20px",
              paddingBottom: i < STEPS.length - 1 ? "1.5rem" : 0,
              marginBottom: i < STEPS.length - 1 ? "1.5rem" : 0,
              borderBottom: i < STEPS.length - 1 ? "0.5px solid rgba(0,0,0,0.06)" : "none",
            }}>
              <div style={{ flexShrink: 0, width: "40px", height: "40px", borderRadius: "50%", background: "#CCDA47", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#1A1A1A" }}>{n}</span>
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A", marginBottom: "5px" }}>{title}</div>
                <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.75 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2rem", border: "0.5px solid rgba(0,0,0,0.07)", borderLeft: "3px solid #CCDA47", marginBottom: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: "11px", color: "#8A9A10", letterSpacing: "1px", marginBottom: "0.75rem", fontWeight: 600 }}>WHO WE WORK WITH</div>
          <p style={{ color: "#1A1A1A", fontSize: "16px", lineHeight: 1.75, margin: "0 0 0.5rem" }}>
            We currently work with 3 premium brand dealerships in Sydney.
          </p>
          <p style={{ color: "#6B6B6B", fontSize: "14px", lineHeight: 1.7, margin: 0 }}>
            All partners joined because the process is simple and the cost is zero. If you have clearance stock that needs to move, that is all we ask.
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2.5rem", border: "0.5px solid rgba(0,0,0,0.07)", textAlign: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.75rem" }}>Ready to list your stock?</h2>
          <p style={{ fontSize: "15px", color: "#777", lineHeight: 1.7, marginBottom: "1.75rem" }}>
            Send us your clearance vehicle details and we will have your listing live within one business day.
          </p>
          <Link
            href="mailto:hello.mustgodeals@gmail.com?subject=Dealer%20Listing%20Enquiry"
            style={{
              display: "inline-block",
              background: "#CCDA47",
              color: "#1A1A1A",
              padding: "14px 28px",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.1px",
            }}
          >
            Email us to get started
          </Link>
          <div style={{ marginTop: "1rem", fontSize: "13px", color: "#aaa" }}>hello.mustgodeals@gmail.com</div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
