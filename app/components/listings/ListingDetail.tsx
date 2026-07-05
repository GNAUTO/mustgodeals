"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import type { Listing } from "../../data/listings";

const COOLDOWN_MS = 2 * 60 * 60 * 1000;

const fmt = (n: number) => `$${n.toLocaleString("en-AU")}`;

function formatCooldown(ms: number): string {
  const totalSec = Math.ceil(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.ceil((totalSec % 3600) / 60);
  if (h > 0 && m > 0) return `${h}h ${m}min`;
  if (h > 0) return `${h}h`;
  return `${m}min`;
}

function SectionTitle({ children, right }: { children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.5px solid #2a2a2a", paddingBottom: "8px", marginBottom: "10px" }}>
      <span style={{ fontSize: "10px", color: "#888888", textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 600 }}>
        {children}
      </span>
      {right}
    </div>
  );
}

export default function ListingDetail({ listing }: { listing: Listing }) {
  const [activeImg, setActiveImg]   = useState(0);
  const [featLang, setFeatLang]     = useState<"EN" | "KO">("EN");
  const [optionsOpen, setOptionsOpen] = useState(false);

  const [enquireOpen, setEnquireOpen] = useState(false);
  const [formName, setFormName]       = useState("");
  const [formMobile, setFormMobile]   = useState("");
  const [formMsg, setFormMsg]         = useState("");
  const [sending, setSending]         = useState(false);
  const [enquiryError, setEnquiryError] = useState(false);

  const [showSuccess, setShowSuccess]         = useState(false);
  const [submittedMobile, setSubmittedMobile] = useState("");

  const [cooldownLeft, setCooldownLeft] = useState(0);
  const lsKey = `enquiry_${listing.slug}`;

  const checkCooldown = useCallback(() => {
    const stored = localStorage.getItem(lsKey);
    if (!stored) return 0;
    const sentAt = parseInt(stored, 10);
    const remaining = sentAt + COOLDOWN_MS - Date.now();
    return remaining > 0 ? remaining : 0;
  }, [lsKey]);

  useEffect(() => { setCooldownLeft(checkCooldown()); }, [checkCooldown]);

  useEffect(() => {
    if (cooldownLeft <= 0) return;
    const interval = setInterval(() => {
      const remaining = checkCooldown();
      setCooldownLeft(remaining);
      if (remaining <= 0) clearInterval(interval);
    }, 10000);
    return () => clearInterval(interval);
  }, [cooldownLeft, checkCooldown]);

  const isCoolingDown = cooldownLeft > 0;
  const optionsTotal  = listing.options.reduce((sum, o) => sum + o.price, 0);
  const { newDriveAway, addedOptionsValue, totalNewValue, mustgoDealsPrice } = listing.whyPriceMakesSense;

  const priceRows = [
    { label: "New drive-away",      val: fmt(newDriveAway),             lime: false },
    { label: "Added options value", val: `+${fmt(addedOptionsValue)}`,  lime: false },
    { label: "Total new value",     val: fmt(totalNewValue),            lime: false },
    { label: "MustGoDeals price",   val: fmt(mustgoDealsPrice),         lime: true  },
  ];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formName.trim() || !formMobile.trim()) return;
    setSending(true);
    setEnquiryError(false);
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName.trim(),
          mobile: formMobile.trim(),
          message: formMsg.trim() || "I'm interested in this car",
          carName: listing.name,
          listingUrl: window.location.href,
        }),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) {
        setEnquiryError(true);
        return;
      }
      localStorage.setItem(lsKey, String(Date.now()));
      setCooldownLeft(COOLDOWN_MS);
      setSubmittedMobile(formMobile.trim());
      setShowSuccess(true);
      setEnquireOpen(false);
      setFormName(""); setFormMobile(""); setFormMsg("");
    } catch (err) {
      console.error(err);
      setEnquiryError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#1A1A1A", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Success popup */}
      {showSuccess && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
          onClick={() => setShowSuccess(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: "#242424", borderRadius: "12px", padding: "32px", textAlign: "center", minHeight: "400px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "90%", maxWidth: "420px", gap: "14px" }}
          >
            <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#1f2e00", border: "0.5px solid #3a4a10", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
              <svg width="28" height="28" viewBox="0 0 22 22" fill="none">
                <path d="M5 11.5L9 15.5L17 7" stroke="#CCDA47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ color: "white", fontSize: "20px", fontWeight: 500 }}>Enquiry sent!</div>
            <div style={{ color: "#666", fontSize: "12px" }}>The dealer will be in touch at</div>
            <div style={{ color: "#CCDA47", fontSize: "13px", fontWeight: 500 }}>{submittedMobile}</div>
            <div style={{ color: "#666", fontSize: "12px", lineHeight: 1.6 }}>Usually responds within a few hours during business hours.</div>
            <button
              onClick={() => setShowSuccess(false)}
              style={{ marginTop: "12px", width: "100%", padding: "12px", background: "transparent", border: "0.5px solid #333", borderRadius: "6px", color: "#888", fontSize: "13px", cursor: "pointer" }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "1.5rem 2rem 3rem", flex: 1, width: "100%" }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: "12px", color: "#CCDA47", marginBottom: "1.5rem" }}>
          <Link href="/listings" style={{ color: "#CCDA47", textDecoration: "none" }}>Listings</Link>
          {" › "}
          <span>{listing.name}</span>
        </div>

        {/* Two-column layout */}
        <div className="listing-grid" style={{ marginBottom: "2rem" }}>

          {/* Left: Image slider */}
          <div>
            <div style={{ position: "relative", aspectRatio: "16/9", width: "100%", background: "#111", borderRadius: "8px", overflow: "hidden", marginBottom: "8px" }}>
              <Image src={listing.images[activeImg]} alt={`Photo ${activeImg + 1}`} fill style={{ objectFit: "cover", objectPosition: "center" }} />

              {activeImg > 0 && (
                <button
                  onClick={() => setActiveImg((i) => i - 1)}
                  style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", background: "rgba(0,0,0,0.5)", color: "#fff", fontSize: "24px", borderRadius: "50%", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.5)")}
                >‹</button>
              )}

              {activeImg < listing.images.length - 1 && (
                <button
                  onClick={() => setActiveImg((i) => i + 1)}
                  style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", background: "rgba(0,0,0,0.5)", color: "#fff", fontSize: "24px", borderRadius: "50%", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.5)")}
                >›</button>
              )}

              <div style={{ position: "absolute", right: "12px", bottom: "12px", background: "rgba(0,0,0,0.5)", color: "#fff", fontSize: "11px", padding: "3px 8px", borderRadius: "10px" }}>
                {activeImg + 1} / {listing.images.length}
              </div>
            </div>

            {/* Thumbnails */}
            <div style={{ overflowX: "auto", whiteSpace: "nowrap", paddingBottom: "4px" }}>
              {listing.images.map((src, i) => (
                <Image
                  key={i} src={src} alt={`Photo ${i + 1}`}
                  width={80} height={54}
                  onClick={() => setActiveImg(i)}
                  style={{ display: "inline-block", objectFit: "cover", objectPosition: "center", borderRadius: "4px", marginRight: "6px", cursor: "pointer", border: activeImg === i ? "2px solid #CCDA47" : "2px solid transparent", opacity: activeImg === i ? 1 : 0.6, transition: "border-color 0.15s, opacity 0.15s", verticalAlign: "top" }}
                />
              ))}
            </div>
          </div>

          {/* Right: Enquire card */}
          <div className="listing-sidebar" style={{ background: "#242424", border: "0.5px solid #2e2e2e", borderRadius: "8px", padding: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>

            {/* A. Vehicle info */}
            <div>
              <span style={{ display: "inline-block", background: "#CCDA47", color: "#1A1A1A", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "2px 8px", borderRadius: "4px", marginBottom: "8px" }}>
                {listing.badge}
              </span>
              <div style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", lineHeight: 1.35, marginBottom: "4px" }}>
                {listing.name}<br />
                <span style={{ fontSize: "13px", fontWeight: 400, color: "#aaaaaa" }}>{listing.subtitle}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "6px" }}>
                <span style={{ fontSize: "11px", color: "#888888" }}>Location: {listing.location}</span>
                <span style={{ fontSize: "11px", color: "#888888" }}>Driven: {listing.km.toLocaleString("en-AU")} km</span>
              </div>
            </div>

            {/* B. Pricing */}
            <div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#CCDA47", marginBottom: "4px" }}>{fmt(listing.price)}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "11px", color: "#555", textDecoration: "line-through" }}>{fmt(listing.wasPrice)}</span>
                <span style={{ fontSize: "9px", fontWeight: 700, color: "#CCDA47", background: "#1f2410", border: "0.5px solid #3a4a10", padding: "2px 7px", borderRadius: "4px", letterSpacing: "0.5px" }}>
                  SAVE {fmt(listing.savingsAmount)}
                </span>
              </div>
              <div style={{ fontSize: "10px", color: "#555" }}>{listing.savingsPct}% below new · {listing.warranty}</div>
            </div>

            {/* C. Why this price makes sense */}
            <div style={{ background: "#1e1e1e", border: "0.5px solid #2a2a2a", borderRadius: "6px", padding: "10px" }}>
              <div style={{ fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.7px", fontWeight: 600, marginBottom: "8px" }}>
                Why this price makes sense
              </div>
              {priceRows.map((row, i, arr) => {
                const isOptionsRow = row.label === "Added options value";
                return (
                  <div key={i}>
                    <div
                      onClick={isOptionsRow ? () => setOptionsOpen((o) => !o) : undefined}
                      style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "6px", marginBottom: i < arr.length - 1 ? "6px" : 0, borderBottom: (!isOptionsRow || !optionsOpen) && i < arr.length - 1 ? "0.5px solid #252525" : "none", cursor: isOptionsRow ? "pointer" : "default" }}
                    >
                      <span style={{ fontSize: "11px", color: row.lime ? "#CCDA47" : "#aaaaaa", fontWeight: row.lime ? 600 : 400, display: "flex", alignItems: "center", gap: "5px" }}>
                        {row.label}
                        {isOptionsRow && <span style={{ fontSize: "8px", color: "#555" }}>{optionsOpen ? "▲" : "▼"}</span>}
                      </span>
                      <span style={{ fontSize: "11px", color: row.lime ? "#CCDA47" : "#aaaaaa", fontWeight: row.lime ? 600 : 400 }}>{row.val}</span>
                    </div>
                    {isOptionsRow && optionsOpen && (
                      <div style={{ marginBottom: "6px", paddingLeft: "8px", borderLeft: "1.5px solid #2e2e2e" }}>
                        {listing.options.map((opt, j) => (
                          <div key={j} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "0.5px solid #222" }}>
                            <span style={{ fontSize: "10px", color: "#777" }}>{opt.name}</span>
                            <span style={{ fontSize: "10px", color: "#CCDA47", fontWeight: 600 }}>+{fmt(opt.price)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* D. CTA button + form */}
            <div>
              {isCoolingDown ? (
                <div>
                  <button disabled style={{ width: "100%", padding: "11px", background: "#1f2e00", color: "#CCDA47", border: "0.5px solid #3a4a10", borderRadius: "6px", fontSize: "14px", fontWeight: 700, cursor: "default", letterSpacing: "0.2px" }}>
                    Enquiry sent ✓
                  </button>
                  <div style={{ textAlign: "center", marginTop: "6px", fontSize: "10px", color: "#444" }}>
                    You can send another enquiry in {formatCooldown(cooldownLeft)}
                  </div>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => setEnquireOpen((o) => !o)}
                    style={{ width: "100%", padding: "11px", background: "#CCDA47", color: "#1A1A1A", border: "none", borderRadius: "6px", fontSize: "14px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.2px" }}
                  >
                    {enquireOpen ? "Cancel" : "Enquire Now"}
                  </button>
                  <div style={{ overflow: "hidden", maxHeight: enquireOpen ? "600px" : "0", transition: "max-height 0.3s ease" }}>
                    <form onSubmit={handleSubmit} style={{ paddingTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <input required type="text" placeholder="Your name" value={formName} onChange={(e) => setFormName(e.target.value)} style={{ width: "100%", padding: "9px 11px", background: "#1e1e1e", border: "0.5px solid #333", borderRadius: "6px", color: "#ccc", fontSize: "13px", outline: "none", boxSizing: "border-box" }} />
                      <input required type="tel" placeholder="Mobile number" value={formMobile} onChange={(e) => setFormMobile(e.target.value)} style={{ width: "100%", padding: "9px 11px", background: "#1e1e1e", border: "0.5px solid #333", borderRadius: "6px", color: "#ccc", fontSize: "13px", outline: "none", boxSizing: "border-box" }} />
                      <textarea rows={3} placeholder="I'm interested in this car" value={formMsg} onChange={(e) => setFormMsg(e.target.value)} style={{ width: "100%", padding: "9px 11px", background: "#1e1e1e", border: "0.5px solid #333", borderRadius: "6px", color: "#ccc", fontSize: "13px", outline: "none", resize: "none", boxSizing: "border-box" }} />
                      <div style={{ fontSize: "10px", color: "#444", textAlign: "center" }}>Your details will be shared with the dealer only</div>
                      {enquiryError && (
                        <div style={{ fontSize: "12px", color: "#e05555", textAlign: "center", background: "#2a1515", border: "0.5px solid #4a2020", borderRadius: "6px", padding: "8px" }}>
                          Something went wrong. Please try again or contact us directly.
                        </div>
                      )}
                      <button type="submit" disabled={sending} style={{ width: "100%", padding: "11px", background: "#CCDA47", color: "#1A1A1A", border: "none", borderRadius: "6px", fontSize: "14px", fontWeight: 700, cursor: sending ? "default" : "pointer", opacity: sending ? 0.7 : 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                        {sending && (
                          <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="rgba(26,26,26,0.25)" strokeWidth="3" />
                            <path d="M12 2a10 10 0 0 1 10 10" stroke="#1A1A1A" strokeWidth="3" strokeLinecap="round" />
                          </svg>
                        )}
                        {sending ? "Sending..." : "Send Enquiry"}
                      </button>
                    </form>
                  </div>
                </div>
              )}
            </div>

            {/* E. Dealer contact */}
            <div style={{ background: "#1e1e1e", border: "0.5px solid #2a2a2a", borderRadius: "6px", padding: "10px 12px" }}>
              <div style={{ fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.7px", fontWeight: 600, marginBottom: "8px" }}>Your dealer contact</div>
              <div style={{ fontSize: "13px", color: "#ffffff", fontWeight: 500, marginBottom: "5px" }}>{listing.dealer.name}</div>
              <div style={{ fontSize: "11px", color: "#aaaaaa" }}>📍 {listing.dealer.location}</div>
            </div>

            {/* F. Interstate note */}
            <div style={{ fontSize: "10px", color: "#444", textAlign: "center" }}>
              Interstate buyers welcome · We assist with delivery
            </div>
          </div>
        </div>

        {/* Added Options */}
        <div style={{ marginBottom: "2rem" }}>
          <SectionTitle>Added Options — included in this vehicle</SectionTitle>
          {listing.options.map((opt, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", paddingBottom: "10px", marginBottom: "10px", borderBottom: "0.5px solid #242424" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", flex: 1 }}>
                <span style={{ fontSize: "6px", color: "#CCDA47", lineHeight: "18px", flexShrink: 0 }}>●</span>
                <div>
                  <div style={{ fontSize: "12px", color: "#dddddd", marginBottom: "2px" }}>{opt.name}</div>
                  <div style={{ fontSize: "10px", color: "#888888" }}>{featLang === "KO" ? opt.descKo : opt.descEn}</div>
                </div>
              </div>
              <span style={{ fontSize: "12px", color: "#CCDA47", fontWeight: 600, flexShrink: 0, paddingTop: "1px" }}>+{fmt(opt.price)}</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "4px" }}>
            <span style={{ fontSize: "11px", color: "#666" }}>
              {featLang === "KO" ? "추가 옵션 합계 (이 차량에 포함)" : "Total added options (included in this vehicle)"}
            </span>
            <span style={{ fontSize: "13px", color: "#CCDA47", fontWeight: 700 }}>+{fmt(optionsTotal)}</span>
          </div>
        </div>

        {/* Dealer Comment */}
        <div style={{ background: "#242424", border: "0.5px solid #2e2e2e", borderRadius: "8px", padding: "14px 16px", marginBottom: "2rem" }}>
          <div style={{ fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600, marginBottom: "10px" }}>
            Dealer&apos;s note
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "10px" }}>
            <span style={{ fontSize: "18px", color: "#CCDA47", lineHeight: 1, flexShrink: 0 }}>&ldquo;</span>
            <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>
              {listing.dealerComment}
            </p>
          </div>
          <div style={{ fontSize: "11px", color: "#555", textAlign: "right" }}>— {listing.dealer.name}, {listing.dealer.location}</div>
        </div>

        {/* Specifications */}
        <div style={{ marginBottom: "2rem" }}>
          <SectionTitle>Specifications</SectionTitle>
          <div className="spec-grid">
            {listing.specs.map((s) => (
              <div key={s.label} style={{ background: "#242424", border: "0.5px solid #2e2e2e", borderRadius: "6px", padding: "8px 10px" }}>
                <div style={{ fontSize: "10px", color: "#888888", marginBottom: "3px" }}>{s.label}</div>
                <div style={{ fontSize: "12px", color: "#ffffff", fontWeight: 500 }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Features */}
        <div style={{ marginBottom: "2rem" }}>
          <SectionTitle
            right={
              <div style={{ display: "flex", gap: "4px" }}>
                {(["EN", "KO"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setFeatLang(lang)}
                    style={{ padding: "3px 6px", fontSize: "10px", fontWeight: featLang === lang ? 600 : 400, cursor: "pointer", letterSpacing: "0.3px", background: "none", border: "none", color: featLang === lang ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.35)", transition: "color 0.15s" }}
                  >
                    {lang}
                  </button>
                ))}
              </div>
            }
          >
            Key Features
          </SectionTitle>
          <div className="feature-grid">
            {listing.features.map((f) => (
              <div key={f.name} style={{ background: "#242424", border: "0.5px solid #2e2e2e", borderRadius: "6px", padding: "10px 12px" }}>
                <div style={{ fontSize: "12px", color: "#cccccc", fontWeight: 500, marginBottom: "3px" }}>{f.name}</div>
                <div style={{ fontSize: "10px", color: "#888888", lineHeight: 1.5 }}>{featLang === "KO" ? f.descKo : f.descEn}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ borderTop: "0.5px solid #222", paddingTop: "1rem" }}>
          <p style={{ fontSize: "10px", color: "#333", lineHeight: 1.6 }}>
            Pricing information is provided by the dealer and is subject to change. MustGoDeals acts as a listing platform only and is not party to any sale. All figures should be independently verified with the dealer prior to purchase.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
}
