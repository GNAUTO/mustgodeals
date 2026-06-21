import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata: Metadata = {
  title: "Coming Soon | MustGoDeals",
};

export default function ComingSoon() {
  return (
    <div style={{ minHeight: "100vh", background: "#1A1A1A", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "4rem 2rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(204,218,71,0.15)", border: "1px solid #CCDA47", color: "#CCDA47", fontSize: "11px", padding: "4px 14px", borderRadius: "20px", marginBottom: "1.5rem", letterSpacing: "0.5px" }}>
          COMING SOON
        </div>
        <h1 style={{ color: "white", fontSize: "42px", fontWeight: 500, lineHeight: 1.25, marginBottom: "1rem", letterSpacing: "-0.5px" }}>
          We&apos;re working on it
        </h1>
        <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "16px", maxWidth: "420px", marginBottom: "2.5rem", lineHeight: 1.7 }}>
          This page is under construction. Subscribe below to get notified when it launches.
        </p>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center", flexWrap: "wrap", marginBottom: "2rem" }}>
          <input
            placeholder="your@email.com"
            style={{ padding: "11px 16px", borderRadius: "8px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.06)", color: "white", fontSize: "14px", width: "240px", outline: "none" }}
          />
          <button style={{ background: "#CCDA47", color: "#1A1A1A", border: "none", padding: "11px 20px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, cursor: "pointer" }}>
            Notify me
          </button>
        </div>
        <Link href="/" style={{ color: "rgba(255,255,255,0.35)", fontSize: "13px", textDecoration: "none" }}>
          ← Back to home
        </Link>
      </div>

      <footer style={{ background: "#111", padding: "1.25rem 2rem", textAlign: "center" }}>
        <span style={{ color: "rgba(255,255,255,0.2)", fontSize: "11px" }}>© 2026 MustGoDeals.com.au — Sydney, Australia</span>
      </footer>
    </div>
  );
}
