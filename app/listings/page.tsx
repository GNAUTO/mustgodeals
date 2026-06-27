"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FILTERS = ["All", "Audi", "Land Rover", "Under $80k", "EV"];

function CarIcon() {
  return (
    <svg width="72" height="44" viewBox="0 0 64 38" fill="none">
      <path d="M8 24 L18 10 C19.5 8 21.5 7 23.5 7 L40.5 7 C42.5 7 44.5 8 46 10 L56 24 Z" fill="#d0d0d0" />
      <rect x="5" y="24" width="54" height="9" rx="3" fill="#d0d0d0" />
      <circle cx="16" cy="33" r="5" fill="#e8e8e8" stroke="#d0d0d0" strokeWidth="2" />
      <circle cx="48" cy="33" r="5" fill="#e8e8e8" stroke="#d0d0d0" strokeWidth="2" />
    </svg>
  );
}

function A5Card({ imgH }: { imgH: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href="/listings/2025-audi-a5-sport" style={{ textDecoration: "none", display: "block" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#fff",
          borderRadius: "8px",
          border: hovered ? "0.5px solid #CCDA47" : "0.5px solid #e0e0e0",
          overflow: "hidden",
          cursor: "pointer",
          transform: hovered ? "translateY(-2px)" : "none",
          boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.1)" : "none",
          transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
        }}
      >
        <div style={{ height: imgH, background: "#f0f0f0", overflow: "hidden", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://edge.pxcrush.net/cars/dealer/euy7ctpajf5ul5opydntht8xw.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=98b39390ab0e54aba568cf55b91ca2fe&pxc_size=1000%2c667"
            alt="2025 Audi A5 TFSI 200kW S line"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", top: "12px", left: "12px", background: "#CCDA47", color: "#1A1A1A", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
            DEMO
          </div>
          <div style={{ position: "absolute", top: "12px", right: "12px", background: "#1A1A1A", color: "#CCDA47", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
            SAVE $41,038
          </div>
        </div>
        <div style={{ padding: "16px" }}>
          <div style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3, marginBottom: "3px" }}>
            2025 Audi A5 TFSI 200kW S line
          </div>
          <div style={{ fontSize: "12px", color: "#888", marginBottom: "12px" }}>
            2.0L Turbo · Quattro AWD · S tronic
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
            <span style={{ fontSize: "22px", fontWeight: 700, color: "#1A1A1A" }}>$87,880</span>
            <span style={{ fontSize: "13px", color: "#aaa", textDecoration: "line-through" }}>$128,918</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#5a7a00", background: "#f0f5e0", padding: "2px 7px", borderRadius: "4px" }}>SAVE $41,038</span>
            <span style={{ fontSize: "11px", color: "#5a7a00" }}>32% below new</span>
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "14px" }}>
            {["2,500 km", "Daytona Grey", "Petrol", "📍 Artarmon"].map((tag) => (
              <span key={tag} style={{ fontSize: "11px", color: "#666", background: "#f5f5f0", padding: "3px 8px", borderRadius: "4px" }}>{tag}</span>
            ))}
          </div>
          <div style={{ width: "100%", padding: "10px", background: "#1A1A1A", color: "#CCDA47", borderRadius: "6px", fontSize: "13px", fontWeight: 600, textAlign: "center" }}>
            View listing →
          </div>
        </div>
      </div>
    </Link>
  );
}

function SQ8Card({ imgH }: { imgH: number }) {
  const [hovered, setHovered] = useState(false);
  return (
    <Link href="/listings/2025-audi-sq8" style={{ textDecoration: "none", display: "block" }}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          background: "#fff",
          borderRadius: "8px",
          border: hovered ? "0.5px solid #CCDA47" : "0.5px solid #e0e0e0",
          overflow: "hidden",
          cursor: "pointer",
          transform: hovered ? "translateY(-2px)" : "none",
          boxShadow: hovered ? "0 8px 24px rgba(0,0,0,0.1)" : "none",
          transition: "border-color 0.2s, transform 0.2s, box-shadow 0.2s",
        }}
      >
        <div style={{ height: imgH, background: "#f0f0f0", overflow: "hidden", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://edge.pxcrush.net/cars/dealer/2kpf62gbkg4jcti5u0rsy42nr.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=e1cd655ac9667dde9314d4ed7fe61a5b&pxc_size=1000%2c667"
            alt="2025 Audi SQ8 TFSI Quattro"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", top: "12px", left: "12px", background: "#CCDA47", color: "#1A1A1A", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
            DEMO
          </div>
          <div style={{ position: "absolute", top: "12px", right: "12px", background: "#1A1A1A", color: "#CCDA47", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
            SAVE $38,055
          </div>
        </div>
        <div style={{ padding: "16px" }}>
          <div style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3, marginBottom: "3px" }}>
            2025 Audi SQ8 TFSI Quattro
          </div>
          <div style={{ fontSize: "12px", color: "#888", marginBottom: "12px" }}>
            4.0L V8 Twin Turbo · Quattro AWD · Tiptronic
          </div>
          <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
            <span style={{ fontSize: "22px", fontWeight: 700, color: "#1A1A1A" }}>$189,888</span>
            <span style={{ fontSize: "13px", color: "#aaa", textDecoration: "line-through" }}>$227,943</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
            <span style={{ fontSize: "11px", fontWeight: 700, color: "#5a7a00", background: "#f0f5e0", padding: "2px 7px", borderRadius: "4px" }}>SAVE $38,055</span>
            <span style={{ fontSize: "11px", color: "#5a7a00" }}>17% below new</span>
          </div>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "14px" }}>
            {["2,000 km", "Mythos Black", "Petrol", "📍 Artarmon"].map((tag) => (
              <span key={tag} style={{ fontSize: "11px", color: "#666", background: "#f5f5f0", padding: "3px 8px", borderRadius: "4px" }}>{tag}</span>
            ))}
          </div>
          <div style={{ width: "100%", padding: "10px", background: "#1A1A1A", color: "#CCDA47", borderRadius: "6px", fontSize: "13px", fontWeight: 600, textAlign: "center" }}>
            View listing →
          </div>
        </div>
      </div>
    </Link>
  );
}

function ComingSoonCard({ imgH }: { imgH: number }) {
  return (
    <div style={{ background: "#fff", borderRadius: "8px", border: "0.5px solid #e0e0e0", overflow: "hidden", opacity: 0.5, pointerEvents: "none" }}>
      <div style={{ height: imgH, background: "#e8e8e8", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <CarIcon />
        <div style={{ position: "absolute", top: "12px", left: "12px", background: "#f0f5e0", color: "#5a7a00", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
          COMING SOON
        </div>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ background: "#e8e8e8", height: "14px", borderRadius: "4px", width: "65%", marginBottom: "8px" }} />
        <div style={{ background: "#f0f0f0", height: "11px", borderRadius: "4px", width: "45%", marginBottom: "16px" }} />
        <div style={{ background: "#e0e0e0", height: "26px", borderRadius: "4px", width: "40%", marginBottom: "8px" }} />
        <div style={{ display: "flex", gap: "6px", marginBottom: "14px" }}>
          {[70, 80, 60].map((w) => (
            <div key={w} style={{ background: "#f0f0f0", height: "24px", borderRadius: "4px", width: `${w}px` }} />
          ))}
        </div>
        <div style={{ width: "100%", padding: "10px", background: "#f0f0f0", color: "#bbb", borderRadius: "6px", fontSize: "13px", fontWeight: 600, textAlign: "center" }}>
          Coming soon
        </div>
      </div>
    </div>
  );
}

function SoldCard({ imgH }: { imgH: number }) {
  return (
    <div style={{ background: "#fff", borderRadius: "8px", border: "0.5px solid #e0e0e0", overflow: "hidden", opacity: 0.35, pointerEvents: "none" }}>
      <div style={{ height: imgH, background: "#f5f5f5", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <CarIcon />
        <div style={{ position: "absolute", top: "12px", left: "12px", background: "#fde8e8", color: "#c0392b", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
          SOLD
        </div>
      </div>
      <div style={{ padding: "16px" }}>
        <div style={{ background: "#e8e8e8", height: "14px", borderRadius: "4px", width: "65%", marginBottom: "8px" }} />
        <div style={{ background: "#f0f0f0", height: "11px", borderRadius: "4px", width: "45%", marginBottom: "16px" }} />
        <div style={{ background: "#e0e0e0", height: "26px", borderRadius: "4px", width: "40%", marginBottom: "8px" }} />
        <div style={{ display: "flex", gap: "6px", marginBottom: "14px" }}>
          {[70, 80].map((w) => (
            <div key={w} style={{ background: "#f0f0f0", height: "24px", borderRadius: "4px", width: `${w}px` }} />
          ))}
        </div>
        <div style={{ width: "100%", padding: "10px", background: "#f0f0f0", color: "#bbb", borderRadius: "6px", fontSize: "13px", fontWeight: 600, textAlign: "center" }}>
          No longer available
        </div>
      </div>
    </div>
  );
}

export default function ListingsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const imgH = isMobile ? 200 : 220;

  return (
    <div style={{ minHeight: "100vh", background: "#F5F5F0", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Header */}
      <div style={{ background: "#1A1A1A", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(204,218,71,0.15)", border: "1px solid #CCDA47", color: "#CCDA47", fontSize: "11px", padding: "4px 14px", borderRadius: "20px", marginBottom: "1rem", letterSpacing: "0.5px" }}>
            Demo Listings
          </div>
          <h1 style={{ color: "white", fontWeight: 500, fontSize: "clamp(1.4rem, 4vw, 2rem)", letterSpacing: "-0.5px", lineHeight: 1.2, marginBottom: "0.4rem" }}>
            Demo Cars Available Now
          </h1>
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>
            Demo cars. Real savings. Updated regularly.
          </p>
        </div>
      </div>

      {/* Filter chips */}
      <div style={{ background: "#1A1A1A", borderTop: "0.5px solid #2a2a2a", padding: "0 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "8px", padding: "1rem 0", flexWrap: "wrap" }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "5px 14px", fontSize: "12px", borderRadius: "20px",
                cursor: "pointer", fontFamily: "inherit",
                fontWeight: activeFilter === f ? 600 : 400,
                background: activeFilter === f ? "#CCDA47" : "transparent",
                color:  activeFilter === f ? "#1A1A1A" : "#555",
                border: activeFilter === f ? "1px solid #CCDA47" : "1px solid #333",
                transition: "all 0.15s",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* Card grid */}
      <div style={{ flex: 1 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2rem 2rem 3rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "20px",
          }}>
            <A5Card imgH={imgH} />
            <SQ8Card imgH={imgH} />
            <ComingSoonCard imgH={imgH} />
            <SoldCard imgH={imgH} />
          </div>

          <p style={{ color: "#aaa", fontSize: "13px", textAlign: "center", marginTop: "2.5rem" }}>
            More listings coming soon. Check back regularly.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
