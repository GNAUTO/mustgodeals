"use client";

import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ListingCard from "../components/listings/ListingCard";
import { LISTINGS } from "../data/listings";

const FILTERS = ["All", "Audi", "Land Rover", "Under $80k", "EV"];

const PLACEHOLDER_CARDS = [
  { status: "coming_soon" as const },
  { status: "sold" as const },
];

export default function ListingsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#F5F5F0", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Header */}
      <div style={{ background: "#1A1A1A", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
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
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "8px", padding: "1rem 0", flexWrap: "wrap" }}>
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
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "2rem 2rem 3rem" }}>
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
            gap: "20px",
          }}>
            {LISTINGS.map((listing) => (
              <ListingCard key={listing.slug} listing={listing} />
            ))}
            {PLACEHOLDER_CARDS.map((p, i) => (
              <ListingCard
                key={`placeholder-${i}`}
                listing={{
                  slug: `placeholder-${i}`,
                  status: p.status,
                  badge: "",
                  name: "",
                  subtitle: "",
                  location: "",
                  km: 0,
                  colour: "",
                  price: 0,
                  wasPrice: 0,
                  savingsAmount: 0,
                  savingsPct: 0,
                  warranty: "",
                  images: [],
                  specs: [],
                  dealerComment: "",
                  features: [],
                  options: [],
                  dealer: { name: "", location: "" },
                  whyPriceMakesSense: { newDriveAway: 0, addedOptionsValue: 0, totalNewValue: 0, mustgoDealsPrice: 0 },
                }}
              />
            ))}
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
