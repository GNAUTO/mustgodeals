import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "How It Works | MustGoDeals",
  description: "MustGoDeals aggregates dealer clearance stock in one place. We are not the seller, and we have no involvement in any transaction.",
};

const FAQ_ITEMS = [
  {
    q: "Does MustGoDeals charge a commission?",
    a: "No. MustGoDeals is completely free for both buyers and dealers. We charge no fees of any kind.",
  },
  {
    q: "Who is responsible if there is a problem with the vehicle or the transaction?",
    a: "MustGoDeals is a platform that connects buyers with dealers. We are not the seller and have no direct involvement in any transaction. All responsibility for vehicle condition, pricing, and contract terms lies with the dealer. Verify everything directly with the dealer before purchasing.",
  },
  {
    q: "Why should I trust the price shown?",
    a: "Each listing on MustGoDeals shows the original new price alongside the current asking price, so you can verify the savings yourself. We also show the vehicle's odometer reading and registration date, giving you the full picture to assess value independently. Prices are published exactly as submitted by the dealer.",
  },
  {
    q: "What happens when I make an enquiry?",
    a: "When you click \"Check Availability\", your details are sent directly to the dealer. The dealer then contacts you to discuss the vehicle. MustGoDeals is not part of that conversation and does not follow up on your behalf.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "Dealer submits stock",
    desc: "The dealer provides their clearance vehicle details directly to MustGoDeals.",
  },
  {
    n: "02",
    title: "We verify and publish",
    desc: "MustGoDeals checks the information and publishes it as-is. No prices or specifications are altered.",
  },
  {
    n: "03",
    title: "Enquiry goes straight to the dealer",
    desc: "When you click \"Check Availability\", the dealer receives a direct notification and contacts you themselves. MustGoDeals is not part of that conversation.",
  },
];

export default function HowItWorks() {
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA" }}>
      <Navbar langLinks={{ current: "EN", links: { EN: "/how-it-works", KO: "/how-it-works-ko" } }} />

      {/* Page header */}
      <div style={{ background: "#FAFAFA", padding: "2rem 2rem 1.5rem", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", color: "#8A9A10", letterSpacing: "1px", marginBottom: "0.75rem", fontWeight: 600 }}>TRANSPARENCY</div>
          <h1 style={{ color: "#1A1A1A", fontSize: "32px", fontWeight: 500, letterSpacing: "-0.3px", marginBottom: "0.75rem" }}>
            How It Works
          </h1>
          <p style={{ color: "#6B6B6B", fontSize: "15px", margin: 0, lineHeight: 1.7 }}>
            MustGoDeals aggregates dealer clearance stock in one place.<br />
            We are not the seller, and we have no involvement in any transaction.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" }}>

        {/* 3-step process */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2.5rem", border: "0.5px solid rgba(0,0,0,0.07)", marginBottom: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "1.75rem" }}>The process, step by step</h2>
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

        {/* Transparency card */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2rem", border: "0.5px solid rgba(0,0,0,0.07)", borderLeft: "3px solid #CCDA47", marginBottom: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: "11px", color: "#8A9A10", letterSpacing: "1px", marginBottom: "0.75rem", fontWeight: 600 }}>OUR COMMITMENT</div>
          <p style={{ color: "#1A1A1A", fontSize: "16px", lineHeight: 1.75, margin: 0 }}>
            MustGoDeals is completely free for both dealers and buyers. No listing is promoted or prioritised for payment. What you see is what the dealer submitted.
          </p>
        </div>

        {/* Why so cheap */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2.5rem", border: "0.5px solid rgba(0,0,0,0.07)", marginBottom: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "1rem" }}>Why are the prices so low?</h2>
          <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.8, marginBottom: "1rem" }}>
            Clearance and demo vehicles are priced below new because dealers need to move aged stock, end-of-model-year inventory, or over-allocated vehicles before certain financial deadlines. That pressure creates genuine savings for buyers.
          </p>
          <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            These vehicles typically have low kilometres, full manufacturer warranty entitlements, and the same after-sales support as any new car.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/blog/what-is-a-dealer-clearance-car-australia" style={{ fontSize: "13px", color: "#7a8a00", fontWeight: 600, textDecoration: "none", background: "rgba(204,218,71,0.12)", padding: "7px 14px", borderRadius: "6px", border: "1px solid rgba(204,218,71,0.3)" }}>
              What is a clearance car →
            </Link>
            <Link href="/blog/why-buy-demo-car-australia" style={{ fontSize: "13px", color: "#7a8a00", fontWeight: 600, textDecoration: "none", background: "rgba(204,218,71,0.12)", padding: "7px 14px", borderRadius: "6px", border: "1px solid rgba(204,218,71,0.3)" }}>
              Why buy a demo car →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2.5rem", border: "0.5px solid rgba(0,0,0,0.07)", marginBottom: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.25rem" }}>Frequently asked questions</h2>
          <p style={{ fontSize: "13px", color: "#aaa", marginBottom: "1.5rem", marginTop: "0.5rem" }}>Tap a question to expand.</p>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>

        {/* Legal disclaimer */}
        <div style={{ background: "#1A1A1A", borderRadius: "12px", padding: "1.75rem 2rem" }}>
          <div style={{ fontSize: "11px", color: "#CCDA47", letterSpacing: "1px", marginBottom: "0.75rem", fontWeight: 600 }}>LEGAL NOTICE</div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", lineHeight: 1.8, margin: 0 }}>
            MustGoDeals is an advertising platform. We are not a seller, broker, or agent. All transactions occur directly between the buyer and the dealer. MustGoDeals accepts no liability of any kind in connection with any transaction or vehicle listing published on this site.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
}
