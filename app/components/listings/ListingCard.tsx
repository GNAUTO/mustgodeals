"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { Listing } from "../../data/listings";

const fmt = (n: number) => `$${n.toLocaleString("en-AU")}`;

function seedCount(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) h = (h * 31 + slug.charCodeAt(i)) & 0xfffffff;
  return 10 + (h % 71);
}

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

export default function ListingCard({ listing }: { listing: Listing }) {
  const [isMobile, setIsMobile] = useState(false);
  const [hovered, setHovered]   = useState(false);
  const [views, setViews]       = useState(0);
  const [liked, setLiked]       = useState(false);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem(`mgd_views_${listing.slug}`);
    setViews(stored ? parseInt(stored, 10) : 0);
    setLiked(localStorage.getItem(`mgd_liked_${listing.slug}`) === "1");
  }, [listing.slug]);

  const imgH       = isMobile ? 200 : 220;
  const heartCount = seedCount(listing.slug) + (liked ? 1 : 0);

  const engineSpec = listing.specs.find((s) => s.label === "Engine")?.value ?? "";
  const fuelLabel  = engineSpec.includes("Electric") ? "EV"
    : engineSpec.includes("Hybrid") ? "Hybrid"
    : "Petrol";

  const locationShort = listing.location.split(",")[0];

  function handleHeart(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const next = !liked;
    setLiked(next);
    localStorage.setItem(`mgd_liked_${listing.slug}`, next ? "1" : "0");
  }

  function handleShare(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    const url = `${window.location.origin}/listings/${listing.slug}`;
    navigator.clipboard.writeText(url).then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  }

  if (listing.status === "coming_soon") {
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

  if (listing.status === "sold") {
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

  return (
    <>
      <Link href={`/listings/${listing.slug}`} style={{ textDecoration: "none", display: "block" }}>
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
              src={listing.images[0]}
              alt={listing.name}
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
            <div style={{ position: "absolute", top: "12px", left: "12px", background: "#CCDA47", color: "#1A1A1A", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
              {listing.badge}
            </div>
            <div style={{ position: "absolute", top: "12px", right: "12px", background: "#1A1A1A", color: "#CCDA47", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
              SAVE {fmt(listing.savingsAmount)}
            </div>
          </div>

          <div style={{ padding: "16px" }}>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3, marginBottom: "3px" }}>
              {listing.name}
            </div>
            <div style={{ fontSize: "12px", color: "#888", marginBottom: "12px" }}>
              {listing.subtitle}
            </div>

            <div style={{ display: "flex", alignItems: "baseline", gap: "8px", marginBottom: "4px" }}>
              <span style={{ fontSize: "22px", fontWeight: 700, color: "#1A1A1A" }}>{fmt(listing.price)}</span>
              <span style={{ fontSize: "13px", color: "#aaa", textDecoration: "line-through" }}>{fmt(listing.wasPrice)}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "14px" }}>
              <span style={{ fontSize: "11px", fontWeight: 700, color: "#5a7a00", background: "#f0f5e0", padding: "2px 7px", borderRadius: "4px" }}>SAVE {fmt(listing.savingsAmount)}</span>
              <span style={{ fontSize: "11px", color: "#5a7a00" }}>{listing.savingsPct}% below new</span>
            </div>

            <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", marginBottom: "14px" }}>
              {[
                `${listing.km.toLocaleString("en-AU")} km`,
                listing.colour,
                fuelLabel,
                `📍 ${locationShort}`,
              ].map((tag) => (
                <span key={tag} style={{ fontSize: "11px", color: "#666", background: "#f5f5f0", padding: "3px 8px", borderRadius: "4px" }}>{tag}</span>
              ))}
            </div>

            {/* Stats bar: heart · views · share */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "10px", paddingTop: "2px" }}>
              <button
                onClick={handleHeart}
                style={{ background: "none", border: "none", cursor: "pointer", display: "flex", alignItems: "center", gap: "4px", fontSize: "11px", color: liked ? "#e05555" : "#bbb", padding: "2px 0", lineHeight: 1 }}
              >
                {liked ? "♥" : "♡"} {heartCount}
              </button>
              <span style={{ fontSize: "11px", color: "#bbb" }}>
                {views > 0 ? `${views.toLocaleString("en-AU")} views` : "—"}
              </span>
              <button
                onClick={handleShare}
                style={{ background: "none", border: "none", cursor: "pointer", fontSize: "11px", color: "#bbb", padding: "2px 0" }}
              >
                ↗ Share
              </button>
            </div>

            <div style={{ width: "100%", padding: "10px", background: "#1A1A1A", color: "#CCDA47", borderRadius: "6px", fontSize: "13px", fontWeight: 600, textAlign: "center" }}>
              View listing →
            </div>
          </div>
        </div>
      </Link>

      {showToast && (
        <div style={{ position: "fixed", bottom: "28px", left: "50%", transform: "translateX(-50%)", background: "#1A1A1A", color: "#CCDA47", padding: "10px 22px", borderRadius: "8px", fontSize: "13px", fontWeight: 600, zIndex: 9999, border: "0.5px solid #CCDA47", pointerEvents: "none", whiteSpace: "nowrap" }}>
          Link copied!
        </div>
      )}
    </>
  );
}
