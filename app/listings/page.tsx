"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FILTERS = ["All", "Audi", "Land Rover", "Under $80k", "EV"];

function CarSilhouette({ color = "#2e2e2e" }: { color?: string }) {
  return (
    <svg width="64" height="38" viewBox="0 0 64 38" fill="none">
      <path d="M8 24 L18 10 C19.5 8 21.5 7 23.5 7 L40.5 7 C42.5 7 44.5 8 46 10 L56 24 Z" fill={color} />
      <rect x="5" y="24" width="54" height="9" rx="3" fill={color} />
      <circle cx="16" cy="33" r="5" fill="#1e1e1e" stroke={color} strokeWidth="2" />
      <circle cx="48" cy="33" r="5" fill="#1e1e1e" stroke={color} strokeWidth="2" />
    </svg>
  );
}

function RealListingCard() {
  return (
    <Link href="/listings/2025-audi-a5-sport" style={{ textDecoration: "none", display: "block" }}>
      <div className="listing-card" style={{ background: "#242424", borderRadius: "8px", overflow: "hidden", cursor: "pointer" }}>
        <div style={{ height: "140px", background: "#1e1e1e", overflow: "hidden", position: "relative" }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="https://edge.pxcrush.net/cars/dealer/euy7ctpajf5ul5opydntht8xw.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=98b39390ab0e54aba568cf55b91ca2fe&pxc_size=1000%2c667"
            alt="2025 Audi A5 TFSI 200kW S line"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />
          <div style={{ position: "absolute", top: "10px", left: "10px", background: "#CCDA47", color: "#1A1A1A", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
            DEMO
          </div>
        </div>
        <div style={{ padding: "1rem 1rem 1.1rem" }}>
          <div style={{ fontSize: "13px", fontWeight: 600, color: "#ddd", lineHeight: 1.3, marginBottom: "3px" }}>
            2025 Audi A5 TFSI 200kW S line
          </div>
          <div style={{ fontSize: "11px", color: "#555", marginBottom: "10px" }}>2,500 km · Daytona Grey · Petrol</div>
          <div style={{ fontSize: "18px", fontWeight: 700, color: "#CCDA47", marginBottom: "3px" }}>$87,880</div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "10px" }}>
            <span style={{ fontSize: "10px", fontWeight: 700, color: "#CCDA47", background: "#1f2410", border: "0.5px solid #3a4a10", padding: "2px 6px", borderRadius: "4px" }}>SAVE $41,038</span>
            <span style={{ fontSize: "10px", color: "#555" }}>32% below new · 5yr warranty</span>
          </div>
          <div style={{ fontSize: "10px", color: "#555", marginBottom: "12px" }}>📍 Artarmon</div>
          <div style={{ width: "100%", padding: "8px", background: "#1f2410", color: "#CCDA47", border: "0.5px solid #3a4a10", borderRadius: "6px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.3px", textAlign: "center" }}>
            View listing →
          </div>
        </div>
      </div>
    </Link>
  );
}

function ComingSoonCard({ slug }: { slug: string }) {
  return (
    <Link href={`/listings/${slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div className="listing-card" style={{ background: "#242424", borderRadius: "8px", overflow: "hidden", cursor: "pointer" }}>
        {/* Image area */}
        <div style={{ height: "140px", background: "#1e1e1e", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
          <CarSilhouette />
          <div style={{ position: "absolute", top: "10px", left: "10px", background: "#1f2410", color: "#CCDA47", border: "0.5px solid #3a4a10", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
            COMING SOON
          </div>
        </div>
        {/* Body */}
        <div style={{ padding: "1rem 1rem 1.1rem" }}>
          <div style={{ background: "#333",   height: "10px", borderRadius: "4px", width: "70%", marginBottom: "8px" }} />
          <div style={{ background: "#292929", height: "8px",  borderRadius: "4px", width: "50%", marginBottom: "12px" }} />
          <div style={{ background: "#383838", height: "13px", borderRadius: "4px", width: "42%", marginBottom: "10px" }} />
          <div style={{ display: "flex", gap: "6px", marginBottom: "14px" }}>
            <div style={{ background: "#2a2a2a", height: "8px", borderRadius: "4px", width: "38%" }} />
            <div style={{ background: "#2a2a2a", height: "8px", borderRadius: "4px", width: "30%" }} />
          </div>
          <div style={{ width: "100%", padding: "8px", background: "#1f2410", color: "#CCDA47", border: "0.5px solid #3a4a10", borderRadius: "6px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.3px", textAlign: "center" }}>
            View listing →
          </div>
        </div>
      </div>
    </Link>
  );
}

function SoldCard() {
  return (
    <div style={{ background: "#242424", borderRadius: "8px", border: "0.5px solid #2e2e2e", overflow: "hidden", cursor: "default", opacity: 0.5 }}>
      {/* Image area */}
      <div style={{ height: "140px", background: "#1e1e1e", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        <CarSilhouette />
        <div style={{ position: "absolute", top: "10px", left: "10px", background: "#2a1515", color: "#e05555", border: "0.5px solid #4a2020", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
          SOLD
        </div>
      </div>
      {/* Body */}
      <div style={{ padding: "1rem 1rem 1.1rem" }}>
        <div style={{ background: "#333",   height: "10px", borderRadius: "4px", width: "70%", marginBottom: "8px" }} />
        <div style={{ background: "#292929", height: "8px",  borderRadius: "4px", width: "50%", marginBottom: "12px" }} />
        <div style={{ background: "#383838", height: "13px", borderRadius: "4px", width: "42%", marginBottom: "10px" }} />
        <div style={{ display: "flex", gap: "6px", marginBottom: "14px" }}>
          <div style={{ background: "#2a2a2a", height: "8px", borderRadius: "4px", width: "38%" }} />
          <div style={{ background: "#2a2a2a", height: "8px", borderRadius: "4px", width: "30%" }} />
        </div>
        <button style={{ width: "100%", padding: "8px", background: "#222", color: "#444", border: "0.5px solid #333", borderRadius: "6px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.3px", cursor: "default" }}>
          No longer available
        </button>
      </div>
    </div>
  );
}

export default function ListingsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  return (
    <div style={{ minHeight: "100vh", background: "#1A1A1A", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Header */}
      <div style={{ background: "#141414", padding: "2.5rem 2rem" }}>
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
      <div style={{ borderBottom: "0.5px solid #242424", padding: "0 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "8px", padding: "1rem 0", flexWrap: "wrap" }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "5px 14px",
                fontSize: "12px",
                borderRadius: "20px",
                cursor: "pointer",
                fontFamily: "inherit",
                fontWeight: activeFilter === f ? 600 : 400,
                background: "transparent",
                color:  activeFilter === f ? "#CCDA47" : "#555",
                border: activeFilter === f ? "1px solid #CCDA47" : "1px solid #333",
                transition: "color 0.15s, border-color 0.15s",
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
          <div className="listings-grid">
            <RealListingCard />
            <ComingSoonCard slug="2024-audi-q5-sport" />
            <ComingSoonCard slug="2024-audi-q5-sport" />
            <SoldCard />
          </div>

          {/* Bottom note */}
          <p style={{ color: "#555", fontSize: "13px", textAlign: "center", marginTop: "2.5rem" }}>
            More listings coming soon. Check back regularly.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
