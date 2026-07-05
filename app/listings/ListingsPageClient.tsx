"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ListingCard from "../components/listings/ListingCard";
import { LISTINGS } from "../data/listings";

const FILTERS = ["All", "Audi", "Land Rover", "Under $80k", "EV"];

const PLACEHOLDER_CARDS = [
  { status: "coming_soon" as const },
  { status: "sold" as const },
];

export default function ListingsPageClient() {
  const [activeFilter, setActiveFilter] = useState("All");

  const tickerItems = LISTINGS
    .filter((l) => l.status === "available")
    .map((l) => ({
      save: `SAVE $${l.savingsAmount.toLocaleString("en-AU")}`,
      vehicle: `on ${l.name}`,
    }));

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", display: "flex", flexDirection: "column" }}>
      <Navbar />

      <div style={{ background: "#FAFAFA", padding: "2rem 2rem 1.25rem", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", background: "rgba(204,218,71,0.15)", border: "1px solid rgba(204,218,71,0.4)", color: "#6B6B00", fontSize: "11px", padding: "4px 14px", borderRadius: "20px", marginBottom: "0.75rem", letterSpacing: "0.5px" }}>
            Demo Listings
          </div>
          <h1 style={{ color: "#1A1A1A", fontWeight: 500, fontSize: "clamp(1.4rem, 4vw, 2rem)", letterSpacing: "-0.5px", lineHeight: 1.2, marginBottom: "0.4rem" }}>
            Demo Cars Available Now
          </h1>
          <p style={{ color: "#6B6B6B", fontSize: "14px" }}>
            Demo cars. Real savings. Updated regularly.
          </p>
        </div>
      </div>

      {/* Deal ticker */}
      {tickerItems.length > 0 && (
        <div style={{ background: "#FAFAFA", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "0" }} aria-hidden="true">
          <div className="deal-ticker">
            <div className="deal-ticker-track">
              {[...tickerItems, ...tickerItems].map((item, i) => (
                <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                  <span style={{ color: "#CCDA47", fontWeight: 700, fontSize: "12px", letterSpacing: "0.02em" }}>
                    {item.save}
                  </span>
                  <span style={{ color: "#6B6B6B", fontSize: "12px" }}>
                    &nbsp;{item.vehicle}
                  </span>
                  <span style={{ color: "rgba(0,0,0,0.18)", fontSize: "12px", margin: "0 20px" }}>·</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      <div style={{ background: "#FAFAFA", borderBottom: "1px solid rgba(0,0,0,0.06)", padding: "0 2rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", display: "flex", gap: "8px", padding: "0.75rem 0", flexWrap: "wrap" }}>
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              style={{
                padding: "5px 14px", fontSize: "12px", borderRadius: "20px",
                cursor: "pointer", fontFamily: "inherit",
                fontWeight: activeFilter === f ? 600 : 400,
                background: activeFilter === f ? "#CCDA47" : "white",
                color:  activeFilter === f ? "#1A1A1A" : "#555",
                border: activeFilter === f ? "1px solid #CCDA47" : "1px solid rgba(0,0,0,0.12)",
                transition: "all 0.15s",
              }}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "2rem 2rem 3rem" }}>
          <div className="listings-grid">
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

          <p style={{ color: "#999", fontSize: "13px", textAlign: "center", marginTop: "2.5rem" }}>
            More listings coming soon. Check back regularly.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
