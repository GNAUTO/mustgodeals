import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "Contact | MustGoDeals",
  description: "Get in touch with MustGoDeals — general enquiries, dealer partnerships, and media contact.",
};

export default function Contact() {
  return (
    <div style={{ minHeight: "100vh", background: "#F5F5F0", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Page header */}
      <div style={{ background: "#1A1A1A", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", color: "#CCDA47", letterSpacing: "1px", marginBottom: "0.75rem" }}>GET IN TOUCH</div>
          <h1 style={{ color: "white", fontSize: "32px", fontWeight: 500, letterSpacing: "-0.3px", marginBottom: "0.5rem" }}>Contact</h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", margin: 0 }}>We aim to respond within 2 business days.</p>
        </div>
      </div>

      {/* Content */}
      <div style={{ flex: 1 }}>
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" }}>

        {/* General */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2rem", border: "0.5px solid rgba(0,0,0,0.07)", marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
            <div>
              <div style={{ fontSize: "11px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.5px", marginBottom: "0.5rem" }}>GENERAL ENQUIRIES</div>
              <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.5rem" }}>Say hello</h2>
              <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.7, marginBottom: "1rem", maxWidth: "380px" }}>
                Questions about our guides, feedback on an article, or anything else — we&apos;re happy to hear from you.
              </p>
              <a href="mailto:hello.mustgodeals@gmail.com" style={{ display: "inline-block", background: "#CCDA47", color: "#1A1A1A", padding: "10px 18px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
                hello.mustgodeals@gmail.com
              </a>
            </div>
          </div>
        </div>

        {/* Dealer partnership */}
        <div style={{ background: "#1A1A1A", borderRadius: "12px", padding: "2rem", border: "1px solid rgba(204,218,71,0.2)", marginBottom: "1.25rem" }}>
          <div style={{ fontSize: "11px", color: "#CCDA47", letterSpacing: "1px", marginBottom: "0.5rem" }}>FOR DEALERS</div>
          <h2 style={{ fontSize: "18px", fontWeight: 600, color: "white", marginBottom: "0.75rem" }}>Dealer Partnerships</h2>
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.6)", lineHeight: 1.7, marginBottom: "1.25rem" }}>
            Do you have end-of-month stock that needs to move? We connect clearance vehicles with motivated buyers who are actively looking to purchase. List your month-end deals and reach our subscriber base before the clock runs out.
          </p>
          <div style={{ display: "flex", flexDirection: "column" as const, gap: "6px" }}>
            <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>Email with subject line: <strong style={{ color: "rgba(255,255,255,0.7)" }}>Dealer Partnership</strong></div>
            <a href="mailto:hello.mustgodeals@gmail.com?subject=Dealer%20Partnership" style={{ display: "inline-block", background: "#CCDA47", color: "#1A1A1A", padding: "10px 18px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, textDecoration: "none", width: "fit-content" }}>
              hello.mustgodeals@gmail.com
            </a>
          </div>
        </div>

        {/* Press */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2rem", border: "0.5px solid rgba(0,0,0,0.07)" }}>
          <div style={{ fontSize: "11px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.5px", marginBottom: "0.5rem" }}>PRESS &amp; MEDIA</div>
          <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.5rem" }}>Media Enquiries</h2>
          <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.7, marginBottom: "1rem" }}>
            Interview requests, data usage, or press coverage — reach out with the subject line &ldquo;Media Enquiry&rdquo;.
          </p>
          <a href="mailto:hello.mustgodeals@gmail.com?subject=Media%20Enquiry" style={{ display: "inline-block", fontSize: "14px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>
            hello.mustgodeals@gmail.com →
          </a>
        </div>

      </div>
      </div>

      <Footer />
    </div>
  );
}
