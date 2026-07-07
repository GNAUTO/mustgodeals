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
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.5px solid rgba(0,0,0,0.08)", paddingBottom: "8px", marginBottom: "10px" }}>
      <span style={{ fontSize: "10px", color: "#AAAAAA", textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 600 }}>
        {children}
      </span>
      {right}
    </div>
  );
}

function StepRow({ num, text }: { num: number; text: string }) {
  return (
    <div style={{ display: "flex", gap: "8px", alignItems: "flex-start" }}>
      <span style={{ minWidth: "16px", height: "16px", background: "#CCDA47", color: "#1A1A1A", borderRadius: "50%", fontSize: "8px", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: "1px" }}>
        {num}
      </span>
      <span style={{ fontSize: "11px", color: "#6B6B6B", lineHeight: 1.55 }}>{text}</span>
    </div>
  );
}

export default function ListingDetail({ listing }: { listing: Listing }) {
  const [activeImg, setActiveImg]   = useState(0);
  const [featLang, setFeatLang]     = useState<"EN" | "KO">("EN");
  const [optionsOpen, setOptionsOpen] = useState(false);

  const [enquireOpen, setEnquireOpen] = useState(false);
  const [formName, setFormName]       = useState("");
  const [formContact, setFormContact] = useState("");
  const [formContactMethod, setFormContactMethod] = useState<"Phone" | "Email" | "SMS">("Phone");
  const [formMsg, setFormMsg]         = useState("");
  const [sending, setSending]         = useState(false);
  const [enquiryError, setEnquiryError] = useState(false);

  const [showSuccess, setShowSuccess]       = useState(false);
  const [submittedContact, setSubmittedContact] = useState("");
  const [submittedMethod, setSubmittedMethod]   = useState("");

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
    if (!formName.trim() || !formContact.trim()) return;
    setSending(true);
    setEnquiryError(false);
    try {
      const res = await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName.trim(),
          mobile: formContact.trim(),
          contactMethod: formContactMethod,
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
      setSubmittedContact(formContact.trim());
      setSubmittedMethod(formContactMethod);
      setShowSuccess(true);
      setEnquireOpen(false);
      setFormName(""); setFormContact(""); setFormMsg("");
    } catch (err) {
      console.error(err);
      setEnquiryError(true);
    } finally {
      setSending(false);
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", display: "flex", flexDirection: "column" }}>
      <Navbar />

      {/* Success popup */}
      {showSuccess && (
        <div
          style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem" }}
          onClick={() => setShowSuccess(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{ background: "white", borderRadius: "12px", padding: "32px", textAlign: "center", minHeight: "380px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "90%", maxWidth: "420px", gap: "14px", boxShadow: "0 20px 60px rgba(0,0,0,0.15)" }}
          >
            <div style={{ width: "60px", height: "60px", borderRadius: "50%", background: "#f0f9e0", border: "1px solid rgba(204,218,71,0.4)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "8px" }}>
              <svg width="28" height="28" viewBox="0 0 22 22" fill="none">
                <path d="M5 11.5L9 15.5L17 7" stroke="#CCDA47" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ color: "#1A1A1A", fontSize: "20px", fontWeight: 500 }}>Enquiry sent!</div>
            <div style={{ color: "#888", fontSize: "12px" }}>
              {listing.dealer.name} will reply by {submittedMethod.toLowerCase()} to
            </div>
            <div style={{ color: "#1A1A1A", fontSize: "13px", fontWeight: 600 }}>{submittedContact}</div>
            <div style={{ color: "#888", fontSize: "12px", lineHeight: 1.6 }}>Usually within a few hours during business hours.</div>
            <button
              onClick={() => setShowSuccess(false)}
              style={{ marginTop: "12px", width: "100%", padding: "12px", background: "transparent", border: "0.5px solid rgba(0,0,0,0.12)", borderRadius: "6px", color: "#888", fontSize: "13px", cursor: "pointer" }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "1.5rem 2rem 3rem", flex: 1, width: "100%" }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: "12px", color: "#6B6B6B", marginBottom: "1.5rem" }}>
          <Link href="/listings" style={{ color: "#6B6B6B", textDecoration: "none" }}>Listings</Link>
          {" › "}
          <span style={{ color: "#1A1A1A" }}>{listing.name}</span>
        </div>

        {/* Two-column layout */}
        <div className="listing-grid" style={{ marginBottom: "2rem" }}>

          {/* Left: Image slider */}
          <div>
            <div style={{ position: "relative", aspectRatio: "16/9", width: "100%", background: "#F0F0F0", borderRadius: "8px", overflow: "hidden", marginBottom: "8px" }}>
              <Image src={listing.images[activeImg]} alt={`Photo ${activeImg + 1}`} fill style={{ objectFit: "cover", objectPosition: "center" }} />

              {activeImg > 0 && (
                <button
                  onClick={() => setActiveImg((i) => i - 1)}
                  style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", background: "rgba(0,0,0,0.45)", color: "#fff", fontSize: "24px", borderRadius: "50%", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.7)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.45)")}
                >‹</button>
              )}

              {activeImg < listing.images.length - 1 && (
                <button
                  onClick={() => setActiveImg((i) => i + 1)}
                  style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", width: "40px", height: "40px", background: "rgba(0,0,0,0.45)", color: "#fff", fontSize: "24px", borderRadius: "50%", border: "none", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1 }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.7)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.45)")}
                >›</button>
              )}

              <div style={{ position: "absolute", right: "12px", bottom: "12px", background: "rgba(0,0,0,0.45)", color: "#fff", fontSize: "11px", padding: "3px 8px", borderRadius: "10px" }}>
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
                  style={{ display: "inline-block", objectFit: "cover", objectPosition: "center", borderRadius: "4px", marginRight: "6px", cursor: "pointer", border: activeImg === i ? "2px solid #CCDA47" : "2px solid transparent", opacity: activeImg === i ? 1 : 0.55, transition: "border-color 0.15s, opacity 0.15s", verticalAlign: "top" }}
                />
              ))}
            </div>
          </div>

          {/* Right: Enquire card */}
          <div className="listing-sidebar" style={{ background: "white", border: "0.5px solid rgba(0,0,0,0.08)", borderRadius: "8px", padding: "14px", display: "flex", flexDirection: "column", gap: "12px", boxShadow: "0 2px 12px rgba(0,0,0,0.06)" }}>

            {/* A. Vehicle info */}
            <div>
              <span style={{ display: "inline-block", background: "#CCDA47", color: "#1A1A1A", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "2px 8px", borderRadius: "4px", marginBottom: "8px" }}>
                {listing.badge}
              </span>
              <div style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.35, marginBottom: "4px" }}>
                {listing.name}<br />
                <span style={{ fontSize: "13px", fontWeight: 400, color: "#6B6B6B" }}>{listing.subtitle}</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "4px", marginTop: "6px" }}>
                <span style={{ fontSize: "11px", color: "#6B6B6B" }}>Location: {listing.location}</span>
                <span style={{ fontSize: "11px", color: "#6B6B6B" }}>Driven: {listing.km.toLocaleString("en-AU")} km</span>
              </div>
            </div>

            {/* B. Pricing */}
            <div>
              <div style={{ fontSize: "28px", fontWeight: 700, color: "#1A1A1A", marginBottom: "4px" }}>{fmt(listing.price)}</div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "12px", color: "#BBBBBB", textDecoration: "line-through" }}>{fmt(listing.wasPrice)}</span>
                <span style={{ fontSize: "9px", fontWeight: 700, color: "#1A1A1A", background: "#CCDA47", padding: "2px 7px", borderRadius: "4px", letterSpacing: "0.5px" }}>
                  SAVE {fmt(listing.savingsAmount)}
                </span>
              </div>
              <div style={{ fontSize: "10px", color: "#6B6B6B" }}>{listing.savingsPct}% below new · {listing.warranty}</div>
            </div>

            {/* C. Why this price makes sense */}
            <div style={{ background: "#F8F8F8", border: "0.5px solid rgba(0,0,0,0.06)", borderRadius: "6px", padding: "10px" }}>
              <div style={{ fontSize: "10px", color: "#AAAAAA", textTransform: "uppercase", letterSpacing: "0.7px", fontWeight: 600, marginBottom: "8px" }}>
                Why this price makes sense
              </div>
              {priceRows.map((row, i, arr) => {
                const isOptionsRow = row.label === "Added options value";
                return (
                  <div key={i}>
                    <div
                      onClick={isOptionsRow ? () => setOptionsOpen((o) => !o) : undefined}
                      style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "6px", marginBottom: i < arr.length - 1 ? "6px" : 0, borderBottom: (!isOptionsRow || !optionsOpen) && i < arr.length - 1 ? "0.5px solid rgba(0,0,0,0.06)" : "none", cursor: isOptionsRow ? "pointer" : "default" }}
                    >
                      <span style={{ fontSize: "11px", color: row.lime ? "#1A1A1A" : "#888", fontWeight: row.lime ? 700 : 400, display: "flex", alignItems: "center", gap: "5px" }}>
                        {row.label}
                        {isOptionsRow && <span style={{ fontSize: "8px", color: "#AAAAAA" }}>{optionsOpen ? "▲" : "▼"}</span>}
                      </span>
                      <span style={{ fontSize: "11px", color: row.lime ? "#1A1A1A" : "#888", fontWeight: row.lime ? 700 : 400 }}>{row.val}</span>
                    </div>
                    {isOptionsRow && optionsOpen && (
                      <div style={{ marginBottom: "6px", paddingLeft: "8px", borderLeft: "1.5px solid rgba(0,0,0,0.08)" }}>
                        {listing.options.map((opt, j) => (
                          <div key={j} style={{ display: "flex", justifyContent: "space-between", padding: "4px 0", borderBottom: "0.5px solid rgba(0,0,0,0.05)" }}>
                            <span style={{ fontSize: "10px", color: "#888" }}>{opt.name}</span>
                            <span style={{ fontSize: "10px", color: "#1A1A1A", fontWeight: 600 }}>+{fmt(opt.price)}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
              {/* Demo car note */}
              <div style={{ marginTop: "10px", paddingTop: "8px", borderTop: "0.5px solid rgba(0,0,0,0.06)", fontSize: "10px", color: "#AAAAAA", lineHeight: 1.55 }}>
                Demo cars are dealer-registered display vehicles with delivery kilometres. Full manufacturer warranty applies.
              </div>
            </div>

            {/* D. CTA button + form */}
            <div>
              {isCoolingDown ? (
                <div>
                  <button disabled style={{ width: "100%", padding: "11px", background: "#f0f9e0", color: "#5a7a00", border: "1px solid rgba(204,218,71,0.4)", borderRadius: "6px", fontSize: "14px", fontWeight: 700, cursor: "default", letterSpacing: "0.2px" }}>
                    Enquiry sent ✓
                  </button>
                  <div style={{ textAlign: "center", marginTop: "6px", fontSize: "10px", color: "#AAAAAA" }}>
                    You can send another enquiry in {formatCooldown(cooldownLeft)}
                  </div>
                </div>
              ) : (
                <div>
                  <button
                    onClick={() => setEnquireOpen((o) => !o)}
                    style={{ width: "100%", padding: "11px", background: "#CCDA47", color: "#1A1A1A", border: "none", borderRadius: "6px", fontSize: "14px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.2px" }}
                  >
                    {enquireOpen ? "Cancel" : "Check Availability"}
                  </button>

                  {/* Microcopy — only when form is closed */}
                  {!enquireOpen && (
                    <div style={{ textAlign: "center", marginTop: "6px", fontSize: "10px", color: "#AAAAAA", lineHeight: 1.5 }}>
                      No obligation. No account needed. The dealer replies directly.
                    </div>
                  )}

                  {/* What happens next — only when form is closed */}
                  {!enquireOpen && (
                    <div style={{ marginTop: "12px", padding: "10px 12px", background: "#F8F8F8", border: "0.5px solid rgba(0,0,0,0.06)", borderRadius: "6px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <div style={{ fontSize: "9px", color: "#AAAAAA", textTransform: "uppercase", letterSpacing: "0.7px", fontWeight: 600, marginBottom: "2px" }}>
                        What happens next
                      </div>
                      <StepRow num={1} text="Send a quick enquiry (takes 30 seconds)" />
                      <StepRow num={2} text={`${listing.dealer.name} replies directly, usually within a few hours`} />
                      <StepRow num={3} text="You decide. No pressure, no spam." />
                    </div>
                  )}

                  {/* Enquiry form */}
                  <div style={{ overflow: "hidden", maxHeight: enquireOpen ? "700px" : "0", transition: "max-height 0.3s ease" }}>
                    <form onSubmit={handleSubmit} style={{ paddingTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        style={{ width: "100%", padding: "9px 11px", background: "#F5F5F5", border: "0.5px solid rgba(0,0,0,0.12)", borderRadius: "6px", color: "#1A1A1A", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
                      />

                      {/* Preferred contact method */}
                      <div>
                        <div style={{ fontSize: "10px", color: "#AAAAAA", marginBottom: "5px", letterSpacing: "0.3px" }}>Preferred contact method</div>
                        <div style={{ display: "flex", border: "0.5px solid rgba(0,0,0,0.12)", borderRadius: "6px", overflow: "hidden" }}>
                          {(["Phone", "Email", "SMS"] as const).map((method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() => { setFormContactMethod(method); setFormContact(""); }}
                              style={{ flex: 1, padding: "8px 4px", background: formContactMethod === method ? "#1A1A1A" : "transparent", color: formContactMethod === method ? "white" : "#6B6B6B", border: "none", fontSize: "12px", fontWeight: formContactMethod === method ? 600 : 400, cursor: "pointer", fontFamily: "inherit", transition: "background 0.15s, color 0.15s" }}
                            >
                              {method}
                            </button>
                          ))}
                        </div>
                      </div>

                      <input
                        required
                        type={formContactMethod === "Email" ? "email" : "tel"}
                        placeholder={
                          formContactMethod === "Email" ? "Your email address" :
                          formContactMethod === "SMS"   ? "Your mobile (for SMS)" :
                                                          "Your mobile number"
                        }
                        value={formContact}
                        onChange={(e) => setFormContact(e.target.value)}
                        style={{ width: "100%", padding: "9px 11px", background: "#F5F5F5", border: "0.5px solid rgba(0,0,0,0.12)", borderRadius: "6px", color: "#1A1A1A", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
                      />

                      <textarea
                        rows={3}
                        placeholder="I'm interested in this car"
                        value={formMsg}
                        onChange={(e) => setFormMsg(e.target.value)}
                        style={{ width: "100%", padding: "9px 11px", background: "#F5F5F5", border: "0.5px solid rgba(0,0,0,0.12)", borderRadius: "6px", color: "#1A1A1A", fontSize: "13px", outline: "none", resize: "none", boxSizing: "border-box" }}
                      />

                      <div style={{ fontSize: "10px", color: "#AAAAAA", textAlign: "center" }}>
                        Your details will be shared with the dealer only
                      </div>

                      {enquiryError && (
                        <div style={{ fontSize: "12px", color: "#c0392b", textAlign: "center", background: "#fef2f2", border: "0.5px solid rgba(192,57,43,0.2)", borderRadius: "6px", padding: "8px" }}>
                          Something went wrong. Please try again or contact us directly.
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={sending}
                        style={{ width: "100%", padding: "11px", background: "#CCDA47", color: "#1A1A1A", border: "none", borderRadius: "6px", fontSize: "14px", fontWeight: 700, cursor: sending ? "default" : "pointer", opacity: sending ? 0.7 : 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
                      >
                        {sending && (
                          <svg className="animate-spin" width="15" height="15" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="rgba(26,26,26,0.2)" strokeWidth="3" />
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
            <div style={{ background: "#F8F8F8", border: "0.5px solid rgba(0,0,0,0.06)", borderRadius: "6px", padding: "10px 12px" }}>
              <div style={{ fontSize: "10px", color: "#AAAAAA", textTransform: "uppercase", letterSpacing: "0.7px", fontWeight: 600, marginBottom: "8px" }}>Your dealer contact</div>
              <div style={{ fontSize: "13px", color: "#1A1A1A", fontWeight: 500, marginBottom: "5px" }}>{listing.dealer.name}</div>
              <div style={{ fontSize: "11px", color: "#6B6B6B", marginBottom: "8px" }}>📍 {listing.dealer.location}</div>
              <div style={{ fontSize: "10px", color: "#AAAAAA", lineHeight: 1.5 }}>
                You&apos;ll hear back from {listing.dealer.name} directly, not a call centre.
              </div>
            </div>

            {/* F. Interstate note */}
            <div style={{ fontSize: "10px", color: "#AAAAAA", textAlign: "center" }}>
              Interstate buyers welcome · We assist with delivery
            </div>
          </div>
        </div>

        {/* Added Options */}
        <div style={{ marginBottom: "2rem" }}>
          <SectionTitle>Added Options — included in this vehicle</SectionTitle>
          {listing.options.map((opt, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", paddingBottom: "10px", marginBottom: "10px", borderBottom: "0.5px solid rgba(0,0,0,0.06)" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", flex: 1 }}>
                <span style={{ fontSize: "6px", color: "#CCDA47", lineHeight: "18px", flexShrink: 0 }}>●</span>
                <div>
                  <div style={{ fontSize: "12px", color: "#1A1A1A", marginBottom: "2px" }}>{opt.name}</div>
                  <div style={{ fontSize: "10px", color: "#888" }}>{featLang === "KO" ? opt.descKo : opt.descEn}</div>
                </div>
              </div>
              <span style={{ fontSize: "12px", color: "#1A1A1A", fontWeight: 600, flexShrink: 0, paddingTop: "1px" }}>+{fmt(opt.price)}</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "4px" }}>
            <span style={{ fontSize: "11px", color: "#888" }}>
              {featLang === "KO" ? "추가 옵션 합계 (이 차량에 포함)" : "Total added options (included in this vehicle)"}
            </span>
            <span style={{ fontSize: "13px", color: "#1A1A1A", fontWeight: 700 }}>+{fmt(optionsTotal)}</span>
          </div>
        </div>

        {/* Dealer Comment */}
        <div style={{ background: "white", border: "0.5px solid rgba(0,0,0,0.08)", borderRadius: "8px", padding: "14px 16px", marginBottom: "2rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: "10px", color: "#AAAAAA", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600, marginBottom: "10px" }}>
            Dealer&apos;s note
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "10px" }}>
            <span style={{ fontSize: "18px", color: "#CCDA47", lineHeight: 1, flexShrink: 0 }}>&ldquo;</span>
            <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>
              {listing.dealerComment}
            </p>
          </div>
          <div style={{ fontSize: "11px", color: "#AAAAAA", textAlign: "right" }}>— {listing.dealer.name}, {listing.dealer.location}</div>
        </div>

        {/* Specifications */}
        <div style={{ marginBottom: "2rem" }}>
          <SectionTitle>Specifications</SectionTitle>
          <div className="spec-grid">
            {listing.specs.map((s) => (
              <div key={s.label} style={{ background: "white", border: "0.5px solid rgba(0,0,0,0.08)", borderRadius: "6px", padding: "8px 10px" }}>
                <div style={{ fontSize: "10px", color: "#AAAAAA", marginBottom: "3px" }}>{s.label}</div>
                <div style={{ fontSize: "12px", color: "#1A1A1A", fontWeight: 500 }}>{s.value}</div>
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
                    style={{ padding: "3px 6px", fontSize: "10px", fontWeight: featLang === lang ? 600 : 400, cursor: "pointer", letterSpacing: "0.3px", background: "none", border: "none", color: featLang === lang ? "#1A1A1A" : "rgba(0,0,0,0.3)", transition: "color 0.15s" }}
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
              <div key={f.name} style={{ background: "white", border: "0.5px solid rgba(0,0,0,0.08)", borderRadius: "6px", padding: "10px 12px" }}>
                <div style={{ fontSize: "12px", color: "#1A1A1A", fontWeight: 500, marginBottom: "3px" }}>{f.name}</div>
                <div style={{ fontSize: "10px", color: "#888", lineHeight: 1.5 }}>{featLang === "KO" ? f.descKo : f.descEn}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div style={{ borderTop: "0.5px solid rgba(0,0,0,0.06)", paddingTop: "1rem" }}>
          <p style={{ fontSize: "10px", color: "#AAAAAA", lineHeight: 1.6 }}>
            Pricing information is provided by the dealer and is subject to change. MustGoDeals acts as a listing platform only and is not party to any sale. All figures should be independently verified with the dealer prior to purchase.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
}
