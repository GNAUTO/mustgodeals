import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "About | MustGoDeals",
  description: "MustGoDeals gives Australian car buyers the insider knowledge they need to get the best deal — especially at month end.",
};

export default function About() {
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA" }}>
      <Navbar />

      {/* Page header */}
      <div style={{ background: "#FAFAFA", padding: "2rem 2rem 1.5rem", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", color: "#8A9A10", letterSpacing: "1px", marginBottom: "0.75rem", fontWeight: 600 }}>OUR STORY</div>
          <h1 style={{ color: "#1A1A1A", fontSize: "32px", fontWeight: 500, letterSpacing: "-0.3px", marginBottom: "0.75rem" }}>
            We&apos;re on the buyer&apos;s side
          </h1>
          <p style={{ color: "#6B6B6B", fontSize: "15px", margin: 0, lineHeight: 1.7 }}>
            MustGoDeals gives Australian car buyers the insider knowledge<br />they need to negotiate like they&apos;ve done it a hundred times.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" }}>

        {/* Mission card */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2rem", marginBottom: "1.5rem", border: "0.5px solid rgba(0,0,0,0.07)", borderLeft: "3px solid #CCDA47", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: "11px", color: "#8A9A10", letterSpacing: "1px", marginBottom: "0.75rem", fontWeight: 600 }}>MISSION</div>
          <p style={{ color: "#1A1A1A", fontSize: "18px", fontWeight: 400, lineHeight: 1.7, margin: 0 }}>
            To close the information gap between Australian car buyers and dealerships — so that everyone can negotiate from the same position.
          </p>
        </div>

        {/* Main content */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2.5rem", border: "0.5px solid rgba(0,0,0,0.07)", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "1rem" }}>Why we built this</h2>
          <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            Most Australians walk into a dealership without knowing that the last few days of every month are when dealers are under the most pressure to close deals. Manufacturers set monthly sales targets. Dealers who hit those targets unlock substantial bonus payments — sometimes thousands of dollars per vehicle sold.
          </p>
          <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.8, marginBottom: "1.25rem" }}>
            That pressure is real, and it creates genuine opportunities for buyers. But only if you know it exists. Dealers are not going to bring it up.
          </p>
          <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.8, margin: 0 }}>
            MustGoDeals was built to change that. We publish free guides, negotiation strategies, and clearance vehicle alerts — all focused on helping everyday Australians buy smarter.
          </p>
        </div>

        {/* What we do - 3 cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px", marginBottom: "1.5rem" }}>
          {[
            {
              icon: "📖",
              title: "Free buying guides",
              desc: "Practical articles on timing, negotiation tactics, demo cars, finance, and more.",
            },
            {
              icon: "🔔",
              title: "Deal alerts",
              desc: "Weekly emails with clearance vehicles that dealers need to move before month end.",
            },
            {
              icon: "🤝",
              title: "Buyer-first, always",
              desc: "We are not affiliated with any manufacturer or dealership. No sponsored listings.",
            },
          ].map(({ icon, title, desc }) => (
            <div key={title} style={{ background: "white", borderRadius: "10px", padding: "1.25rem", border: "0.5px solid rgba(0,0,0,0.07)" }}>
              <div style={{ fontSize: "22px", marginBottom: "0.6rem" }}>{icon}</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.4rem" }}>{title}</div>
              <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.6 }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* Contact card */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2rem", border: "0.5px solid rgba(0,0,0,0.07)" }}>
          <h2 style={{ fontSize: "16px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.5rem" }}>Get in touch</h2>
          <p style={{ fontSize: "15px", color: "#777", lineHeight: 1.7, marginBottom: "1rem" }}>
            Questions, feedback, or dealer partnership enquiries — we&apos;d love to hear from you.
          </p>
          <Link href="mailto:hello.mustgodeals@gmail.com" style={{ display: "inline-block", background: "#CCDA47", color: "#1A1A1A", padding: "10px 20px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            hello.mustgodeals@gmail.com
          </Link>
        </div>

      </div>

      <Footer />
    </div>
  );
}
