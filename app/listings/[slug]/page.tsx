"use client";

import { useState, useEffect, useCallback } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// ── Static demo data ──────────────────────────────────────────────────────────

const THUMBNAIL_LABELS = ["Front 3/4", "Side Profile", "Rear", "Interior", "Engine Bay"];

const SPECS = [
  { label: "Year",   value: "2024" },
  { label: "Body",   value: "SUV" },
  { label: "Engine", value: "2.0L Turbo" },
  { label: "Power",  value: "195 kW" },
  { label: "Drive",  value: "AWD Quattro" },
  { label: "Colour", value: "Daytona Grey" },
];

const FEATURES = {
  EN: [
    { name: "Matrix LED Headlights",    desc: "Individual LED control without glare" },
    { name: "Audi Virtual Cockpit Plus", desc: '12.3" digital cluster with full-screen nav' },
    { name: "Bang & Olufsen Sound",     desc: "19-speaker 3D premium audio" },
    { name: "Panoramic Sunroof",        desc: "Power-operated panoramic glass roof" },
  ],
  KO: [
    { name: "Matrix LED Headlights",    desc: "개별 제어 LED — 눈부심 없이 최대 조사 범위" },
    { name: "Audi Virtual Cockpit Plus", desc: "12.3인치 디지털 계기판 풀스크린 내비" },
    { name: "Bang & Olufsen Sound",     desc: "19스피커 3D 프리미엄 사운드" },
    { name: "Panoramic Sunroof",        desc: "전동식 대형 파노라마 선루프" },
  ],
};

const OPTIONS = [
  { name: "B&O Premium Sound System", ko: "콘서트홀 수준의 사운드 시스템", price: "+$3,900", raw: 3900 },
  { name: "Panoramic Sunroof",        ko: "전동식 대형 파노라마 선루프",   price: "+$2,100", raw: 2100 },
  { name: "Head-up Display",          ko: "속도·내비를 앞 유리에 투영",    price: "+$1,800", raw: 1800 },
  { name: "Wireless Charging Pad",    ko: "케이블 없이 폰을 충전",         price: "+$600",   raw: 600 },
];

const COOLDOWN_MS = 2 * 60 * 60 * 1000; // 2 hours

function formatCooldown(ms: number): string {
  const totalSec = Math.ceil(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.ceil((totalSec % 3600) / 60);
  if (h > 0 && m > 0) return `${h}h ${m}min`;
  if (h > 0) return `${h}h`;
  return `${m}min`;
}

// ── Shared mini-components ────────────────────────────────────────────────────

function SectionTitle({ children, right }: { children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "0.5px solid #2a2a2a", paddingBottom: "8px", marginBottom: "10px" }}>
      <span style={{ fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.8px", fontWeight: 600 }}>
        {children}
      </span>
      {right}
    </div>
  );
}

function CarSilhouette({ color = "#2e2e2e", size = 64 }: { color?: string; size?: number }) {
  const h = Math.round(size * 0.6);
  return (
    <svg width={size} height={h} viewBox="0 0 64 38" fill="none">
      <path d="M8 24 L18 10 C19.5 8 21.5 7 23.5 7 L40.5 7 C42.5 7 44.5 8 46 10 L56 24 Z" fill={color} />
      <rect x="5" y="24" width="54" height="9" rx="3" fill={color} />
      <circle cx="16" cy="33" r="5" fill="#1e1e1e" stroke={color} strokeWidth="2" />
      <circle cx="48" cy="33" r="5" fill="#1e1e1e" stroke={color} strokeWidth="2" />
    </svg>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ListingPage() {
  const params = useParams();
  const slug = typeof params?.slug === "string" ? params.slug : "listing";

  const [activeImg, setActiveImg]   = useState(0);
  const [featLang, setFeatLang]     = useState<"EN" | "KO">("EN");

  // Enquire form
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [formName, setFormName]       = useState("");
  const [formMobile, setFormMobile]   = useState("");
  const [formMsg, setFormMsg]         = useState("");
  const [sending, setSending]         = useState(false);

  // Success popup
  const [showSuccess, setShowSuccess]       = useState(false);
  const [submittedMobile, setSubmittedMobile] = useState("");

  // Cooldown
  const [cooldownLeft, setCooldownLeft] = useState(0); // ms remaining

  const lsKey = `enquiry_${slug}`;

  const checkCooldown = useCallback(() => {
    const stored = localStorage.getItem(lsKey);
    if (!stored) return 0;
    const sentAt = parseInt(stored, 10);
    const remaining = sentAt + COOLDOWN_MS - Date.now();
    return remaining > 0 ? remaining : 0;
  }, [lsKey]);

  useEffect(() => {
    setCooldownLeft(checkCooldown());
  }, [checkCooldown]);

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
  const features = FEATURES[featLang];

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!formName.trim() || !formMobile.trim()) return;
    setSending(true);
    try {
      await fetch("/api/enquire", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formName.trim(),
          mobile: formMobile.trim(),
          message: formMsg.trim() || "I'm interested in this car",
          carName: "2024 Audi Q5 Sport",
          listingUrl: window.location.href,
        }),
      });
      localStorage.setItem(lsKey, String(Date.now()));
      setCooldownLeft(COOLDOWN_MS);
      setSubmittedMobile(formMobile.trim());
      setShowSuccess(true);
      setEnquireOpen(false);
      setFormName(""); setFormMobile(""); setFormMsg("");
    } catch (err) {
      console.error(err);
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
          style={{
            position: "fixed", inset: 0, background: "rgba(0,0,0,0.7)",
            zIndex: 999, display: "flex", alignItems: "center", justifyContent: "center",
            padding: "1rem",
          }}
          onClick={() => setShowSuccess(false)}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#242424", borderRadius: "12px", padding: "32px",
              textAlign: "center", minHeight: "400px", display: "flex",
              flexDirection: "column", alignItems: "center", justifyContent: "center",
              width: "90%", maxWidth: "420px", gap: "14px",
            }}
          >
            {/* Check icon */}
            <div style={{
              width: "60px", height: "60px", borderRadius: "50%",
              background: "#1f2e00", border: "0.5px solid #3a4a10",
              display: "flex", alignItems: "center", justifyContent: "center",
              marginBottom: "8px",
            }}>
              <svg width="28" height="28" viewBox="0 0 22 22" fill="none">
                <path d="M5 11.5L9 15.5L17 7" stroke="#CCDA47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div style={{ color: "white", fontSize: "20px", fontWeight: 500 }}>Enquiry sent!</div>
            <div style={{ color: "#666", fontSize: "12px" }}>The dealer will be in touch at</div>
            <div style={{ color: "#CCDA47", fontSize: "13px", fontWeight: 500 }}>{submittedMobile}</div>
            <div style={{ color: "#666", fontSize: "12px", lineHeight: 1.6 }}>
              Usually responds within a few hours during business hours.
            </div>
            <button
              onClick={() => setShowSuccess(false)}
              style={{
                marginTop: "12px", width: "100%", padding: "12px",
                background: "transparent", border: "0.5px solid #333",
                borderRadius: "6px", color: "#888", fontSize: "13px", cursor: "pointer",
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "1.5rem 2rem 3rem", flex: 1, width: "100%" }}>

        {/* 1. Breadcrumb */}
        <div style={{ fontSize: "12px", color: "#CCDA47", marginBottom: "1.5rem" }}>
          <Link href="/listings" style={{ color: "#CCDA47", textDecoration: "none" }}>Listings</Link>
          {" › "}
          <span>2024 Audi Q5 Sport</span>
        </div>

        {/* 2. Two-column layout */}
        <div className="listing-grid" style={{ marginBottom: "2rem" }}>

          {/* ── Left: Image slider ── */}
          <div>
            {/* Main image */}
            <div style={{
              height: "380px", background: "#1e1e1e", border: "0.5px solid #2e2e2e",
              borderRadius: "8px", display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", marginBottom: "8px",
            }}>
              <CarSilhouette color="#333" size={90} />
              <span style={{ color: "#2e2e2e", fontSize: "10px", marginTop: "10px", letterSpacing: "0.5px" }}>
                {THUMBNAIL_LABELS[activeImg]}
              </span>
            </div>

            {/* Thumbnails */}
            <div style={{ display: "flex", gap: "6px" }}>
              {THUMBNAIL_LABELS.map((label, i) => (
                <div
                  key={i}
                  onClick={() => setActiveImg(i)}
                  title={label}
                  style={{
                    width: "50px", height: "34px", background: "#222",
                    border: activeImg === i ? "0.5px solid #CCDA47" : "0.5px solid #2e2e2e",
                    borderRadius: "4px", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "border-color 0.15s",
                  }}
                >
                  <CarSilhouette color={activeImg === i ? "#555" : "#333"} size={28} />
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: Enquire card ── */}
          <div style={{ background: "#242424", border: "0.5px solid #2e2e2e", borderRadius: "8px", padding: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>

            {/* A. Vehicle info */}
            <div>
              <span style={{ display: "inline-block", background: "#CCDA47", color: "#1A1A1A", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "2px 8px", borderRadius: "4px", marginBottom: "8px" }}>
                DEMO
              </span>
              <div style={{ fontSize: "15px", fontWeight: 600, color: "#ddd", lineHeight: 1.35, marginBottom: "4px" }}>
                2024 Audi Q5 Sport<br />
                <span style={{ fontSize: "13px", fontWeight: 400, color: "#888" }}>45 TFSI Quattro</span>
              </div>
              <div style={{ fontSize: "11px", color: "#555" }}>Artarmon, Sydney · 3,200 km</div>
            </div>

            {/* B. Pricing */}
            <div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#CCDA47", marginBottom: "4px" }}>
                $72,800
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "11px", color: "#555", textDecoration: "line-through" }}>$82,000</span>
                <span style={{ fontSize: "9px", fontWeight: 700, color: "#CCDA47", background: "#1f2410", border: "0.5px solid #3a4a10", padding: "2px 7px", borderRadius: "4px", letterSpacing: "0.5px" }}>
                  SAVE $9,200
                </span>
              </div>
              <div style={{ fontSize: "10px", color: "#555" }}>11% below new · Same factory warranty</div>
            </div>

            {/* C. Why this price makes sense */}
            <div style={{ background: "#1e1e1e", border: "0.5px solid #2a2a2a", borderRadius: "6px", padding: "10px" }}>
              <div style={{ fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.7px", fontWeight: 600, marginBottom: "8px" }}>
                Why this price makes sense
              </div>
              {[
                { label: "New drive-away",       val: "$82,000",  lime: false },
                { label: "Added options value",  val: "+$8,400",  lime: false },
                { label: "Total new value",      val: "$90,400",  lime: false },
                { label: "MustGoDeals price",    val: "$72,800",  lime: true  },
              ].map((row, i, arr) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "6px", marginBottom: i < arr.length - 1 ? "6px" : 0, borderBottom: i < arr.length - 1 ? "0.5px solid #252525" : "none" }}>
                  <span style={{ fontSize: "11px", color: row.lime ? "#CCDA47" : "#555", fontWeight: row.lime ? 600 : 400 }}>{row.label}</span>
                  <span style={{ fontSize: "11px", color: row.lime ? "#CCDA47" : "#666", fontWeight: row.lime ? 600 : 400 }}>{row.val}</span>
                </div>
              ))}
            </div>

            {/* D. CTA button + form */}
            <div>
              {isCoolingDown ? (
                <div>
                  <button
                    disabled
                    style={{
                      width: "100%", padding: "11px",
                      background: "#1f2e00", color: "#CCDA47",
                      border: "0.5px solid #3a4a10", borderRadius: "6px",
                      fontSize: "14px", fontWeight: 700, cursor: "default", letterSpacing: "0.2px",
                    }}
                  >
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
                    style={{
                      width: "100%", padding: "11px",
                      background: "#CCDA47", color: "#1A1A1A",
                      border: "none", borderRadius: "6px",
                      fontSize: "14px", fontWeight: 700, cursor: "pointer", letterSpacing: "0.2px",
                    }}
                  >
                    {enquireOpen ? "Cancel" : "Enquire Now"}
                  </button>

                  {/* Slide-down form */}
                  <div style={{
                    overflow: "hidden",
                    maxHeight: enquireOpen ? "600px" : "0",
                    transition: "max-height 0.3s ease",
                  }}>
                    <form onSubmit={handleSubmit} style={{ paddingTop: "12px", display: "flex", flexDirection: "column", gap: "8px" }}>
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        style={{
                          width: "100%", padding: "9px 11px",
                          background: "#1e1e1e", border: "0.5px solid #333",
                          borderRadius: "6px", color: "#ccc", fontSize: "13px",
                          outline: "none", boxSizing: "border-box",
                        }}
                      />
                      <input
                        required
                        type="tel"
                        placeholder="Mobile number"
                        value={formMobile}
                        onChange={(e) => setFormMobile(e.target.value)}
                        style={{
                          width: "100%", padding: "9px 11px",
                          background: "#1e1e1e", border: "0.5px solid #333",
                          borderRadius: "6px", color: "#ccc", fontSize: "13px",
                          outline: "none", boxSizing: "border-box",
                        }}
                      />
                      <textarea
                        rows={3}
                        placeholder="I'm interested in this car"
                        value={formMsg}
                        onChange={(e) => setFormMsg(e.target.value)}
                        style={{
                          width: "100%", padding: "9px 11px",
                          background: "#1e1e1e", border: "0.5px solid #333",
                          borderRadius: "6px", color: "#ccc", fontSize: "13px",
                          outline: "none", resize: "none", boxSizing: "border-box",
                        }}
                      />
                      <div style={{ fontSize: "10px", color: "#444", textAlign: "center" }}>
                        Your details will be shared with the dealer only
                      </div>
                      <button
                        type="submit"
                        disabled={sending}
                        style={{
                          width: "100%", padding: "11px",
                          background: "#CCDA47", color: "#1A1A1A",
                          border: "none", borderRadius: "6px",
                          fontSize: "14px", fontWeight: 700,
                          cursor: sending ? "default" : "pointer",
                          opacity: sending ? 0.7 : 1,
                          display: "flex", alignItems: "center", justifyContent: "center", gap: "6px",
                        }}
                      >
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
              <div style={{ fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.7px", fontWeight: 600, marginBottom: "8px" }}>
                Your dealer contact
              </div>
              <div style={{ fontSize: "13px", color: "#ccc", fontWeight: 500, marginBottom: "5px" }}>Jung In B</div>
              <div style={{ fontSize: "11px", color: "#555", marginBottom: "4px" }}>📍 Artarmon, Sydney</div>
              <div style={{ fontSize: "11px", color: "#CCDA47" }}>📞 0415 544 635</div>
            </div>

            {/* F. Interstate note */}
            <div style={{ fontSize: "10px", color: "#444", textAlign: "center" }}>
              Interstate buyers welcome · We assist with delivery
            </div>
          </div>
        </div>

        {/* 3. Dealer Comment */}
        <div style={{ background: "#242424", border: "0.5px solid #2e2e2e", borderRadius: "8px", padding: "14px 16px", marginBottom: "2rem" }}>
          <div style={{ fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.06em", fontWeight: 600, marginBottom: "10px" }}>
            Dealer&#39;s note
          </div>
          <div style={{ display: "flex", gap: "8px", alignItems: "flex-start", marginBottom: "10px" }}>
            <span style={{ fontSize: "18px", color: "#CCDA47", lineHeight: 1, flexShrink: 0 }}>&ldquo;</span>
            <p style={{ fontSize: "13px", color: "#aaa", lineHeight: 1.6, fontStyle: "italic", margin: 0 }}>
              This Q5 has been our showroom display vehicle and has been exceptionally well maintained. One of the best-spec&#39;d Q5s we&#39;ve had in stock — full option, low kilometres, and ready to go.
            </p>
          </div>
          <div style={{ fontSize: "11px", color: "#555", textAlign: "right" }}>— Jung In B, Artarmon</div>
        </div>

        {/* 4. Specifications */}
        <div style={{ marginBottom: "2rem" }}>
          <SectionTitle>Specifications</SectionTitle>
          <div className="spec-grid">
            {SPECS.map((s) => (
              <div key={s.label} style={{ background: "#242424", border: "0.5px solid #2e2e2e", borderRadius: "6px", padding: "8px 10px" }}>
                <div style={{ fontSize: "10px", color: "#555", marginBottom: "3px" }}>{s.label}</div>
                <div style={{ fontSize: "12px", color: "#ccc", fontWeight: 500 }}>{s.value}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 5. Key Features */}
        <div style={{ marginBottom: "2rem" }}>
          <SectionTitle
            right={
              <div style={{ display: "flex", gap: "4px" }}>
                {(["EN", "KO"] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setFeatLang(lang)}
                    style={{
                      padding: "3px 10px", fontSize: "10px", fontWeight: 600,
                      borderRadius: "4px", cursor: "pointer", letterSpacing: "0.3px",
                      background: featLang === lang ? "#CCDA47" : "transparent",
                      color:      featLang === lang ? "#1A1A1A" : "#555",
                      border:     featLang === lang ? "none" : "0.5px solid #333",
                      transition: "background 0.15s, color 0.15s",
                    }}
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
            {features.map((f) => (
              <div key={f.name} style={{ background: "#242424", border: "0.5px solid #2e2e2e", borderRadius: "6px", padding: "10px 12px" }}>
                <div style={{ fontSize: "12px", color: "#aaa", fontWeight: 500, marginBottom: "3px" }}>{f.name}</div>
                <div style={{ fontSize: "10px", color: "#555", lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* 6. Added Options */}
        <div style={{ marginBottom: "2rem" }}>
          <SectionTitle>Added Options — included in this vehicle</SectionTitle>
          {OPTIONS.map((opt, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", paddingBottom: "10px", marginBottom: "10px", borderBottom: "0.5px solid #242424" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", flex: 1 }}>
                <span style={{ fontSize: "6px", color: "#CCDA47", lineHeight: "18px", flexShrink: 0 }}>●</span>
                <div>
                  <div style={{ fontSize: "12px", color: "#ccc", marginBottom: "2px" }}>{opt.name}</div>
                  <div style={{ fontSize: "10px", color: "#555" }}>{opt.ko}</div>
                </div>
              </div>
              <span style={{ fontSize: "12px", color: "#CCDA47", fontWeight: 600, flexShrink: 0, paddingTop: "1px" }}>{opt.price}</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "4px" }}>
            <span style={{ fontSize: "11px", color: "#666" }}>추가 옵션 합계 (이 차량에 포함)</span>
            <span style={{ fontSize: "13px", color: "#CCDA47", fontWeight: 700 }}>+$8,400</span>
          </div>
        </div>

        {/* 7. Disclaimer */}
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
