"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// ── Data ──────────────────────────────────────────────────────────────────────

const SLUG = "2025-audi-a5-sport";

const IMAGES = [
  "https://edge.pxcrush.net/cars/dealer/euy7ctpajf5ul5opydntht8xw.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=98b39390ab0e54aba568cf55b91ca2fe&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/223k97ssru0t63qr5nqu0hecz.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=bd970ba1c7e630109dfb4b3fc9476359&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/3djn7viwbypmakn8hd08nyze8.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=982c0e168e1eb055fc079654215c0a41&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/4p8ifi525rxyt1u8il6uaiete.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=29f0ea919f98fc521038805ba308ec39&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/72e1jhwnrq89rmn1swiyr46gm.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=63f26dd893be9ba8384b92ac0e923c1a&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/8ety4qxb6hn1162zbx8nc11ay.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=9bcba19a96892532372a9bd47af47026&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/eg8dagkoil7bp95idh7w3q04.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=684f4efed3cfaa7de0562528c4c6a611&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/4h1iiutb24pf2ebx7pnxu6hhl.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=2312b2594347ec11744c417669539265&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/3ks9z9hi82alh1azv47ztil9o.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=b76f1699f43364302f5c70a4d41d6973&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/5sq9ts6l1eswt9i3q21dpz6k7.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=c08ddd9f84b66ea0c9e1b4402c2ffb94&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/cadcyjpb1fop90qq38ur5xn6n.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=8997fed3f47ced46304b86fc82d7f4ab&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/epmm73ctsvh3btr93bvuf63gs.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=7824e84db9df697564d5d93c9740ea42&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/34uhobbg629467b3pio02mnve.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=29ce87605ea04608c4b6d916b7ed2675&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/2vtdcttw78ylys0c13js6c1ic.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=718fc38563a3f372f16d66e3f9cfbb66&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/8jnleu2e97k7l6sxrwd9wxsb8.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=2fd5883fa9e893033f6f7f1b1c4ff4d2&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/bbjjge0y93k5qddyda3cvwo6e.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=e757cf032e4d673bddc77e526b6470b4&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/4i664ofhtb2b3jzlalikpi7mu.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=757720077fe055f0e4c4087308863c97&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/5uj949elwvueuss7ees1xtf61.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=d17a3b674614164eac9a0a8190601d95&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/eqerzy4tdqtk2885adni4e8wd.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=50751974e003ea5ef8d2032124c291d3&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/2uhtk0b3ovj08m7eczjx3lag6.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=4fef64cdf52d3e18cfc63dd3be168084&pxc_size=1000%2c667",
];

const IMG_LABELS = IMAGES.map((_, i) => `Photo ${i + 1}`);

const SPECS = [
  { label: "Year",         value: "2025" },
  { label: "Body",         value: "Sedan (Hatch) · 5 doors" },
  { label: "Engine",       value: "2.0L Turbo Petrol" },
  { label: "Power",        value: "200 kW / 400 Nm" },
  { label: "Transmission", value: "7-speed S tronic DCT" },
  { label: "Drive",        value: "Quattro AWD" },
  { label: "0–100 km/h",  value: "5.9 sec" },
  { label: "Fuel",         value: "7.4L/100km" },
  { label: "Colour",       value: "Daytona Grey" },
  { label: "Seats",        value: "5" },
  { label: "Build",        value: "July 2025" },
];

const FEATURES = {
  EN: [
    { name: "Bang & Olufsen 3D Sound",    desc: "19-speaker premium 3D audio system with individual speaker calibration" },
    { name: "Head-up Display",            desc: "Projects speed, navigation and ADAS info onto the windscreen" },
    { name: "Panoramic Roof (Switchable)",desc: "Full-width glass roof with electronically switchable transparency" },
    { name: "Quattro AWD",                desc: "Permanent all-wheel drive with torque vectoring differential" },
    { name: "Matrix LED Headlights",      desc: "Individual LED cell control for maximum illumination without glare" },
    { name: "Adaptive Cruise Control",    desc: "Maintains speed and following distance automatically on highways" },
  ],
  KO: [
    { name: "Bang & Olufsen 3D Sound",    desc: "19개 스피커 3D 프리미엄 사운드, 공간감 있는 콘서트홀 음향" },
    { name: "Head-up Display",            desc: "속도·내비·주행보조 정보를 앞 유리에 투영" },
    { name: "Panoramic Roof (Switchable)",desc: "전동 투명도 조절 파노라마 선루프" },
    { name: "Quattro AWD",                desc: "상시 AWD + 토크 벡터링 차동장치" },
    { name: "Matrix LED Headlights",      desc: "개별 LED 셀 제어로 눈부심 없는 최대 조사 범위" },
    { name: "Adaptive Cruise Control",    desc: "고속도로에서 차간거리·속도 자동 유지" },
  ],
};

const OPTIONS = [
  { name: "Premium Package",  ko: "HUD, B&O Sound, USB-C 고출력, 앰비언트 라이팅 프로, 어쿠스틱 도어 글라스", price: "+$5,500", raw: 5500 },
  { name: "Style Package",    ko: "20인치 블랙 메탈릭 휠, 블랙 익스테리어 패키지, 프라이버시 글라스",           price: "+$3,200", raw: 3200 },
  { name: "Panoramic Roof (Switchable)", ko: "전동 투명도 조절 선루프",                                       price: "+$3,800", raw: 3800 },
];

const COOLDOWN_MS = 2 * 60 * 60 * 1000;

function formatCooldown(ms: number): string {
  const totalSec = Math.ceil(ms / 1000);
  const h = Math.floor(totalSec / 3600);
  const m = Math.ceil((totalSec % 3600) / 60);
  if (h > 0 && m > 0) return `${h}h ${m}min`;
  if (h > 0) return `${h}h`;
  return `${m}min`;
}

// ── Shared mini-component ─────────────────────────────────────────────────────

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

// ── Page ─────────────────────────────────────────────────────────────────────

export default function ListingA5Page() {
  const [activeImg, setActiveImg]   = useState(0);
  const [featLang, setFeatLang]     = useState<"EN" | "KO">("EN");

  // Enquire form
  const [enquireOpen, setEnquireOpen] = useState(false);
  const [formName, setFormName]       = useState("");
  const [formMobile, setFormMobile]   = useState("");
  const [formMsg, setFormMsg]         = useState("");
  const [sending, setSending]         = useState(false);

  // Success popup
  const [showSuccess, setShowSuccess]         = useState(false);
  const [submittedMobile, setSubmittedMobile] = useState("");

  // Cooldown
  const [cooldownLeft, setCooldownLeft] = useState(0);
  const lsKey = `enquiry_${SLUG}`;

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
          carName: "2025 Audi A5 TFSI 200kW S line",
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

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "1.5rem 2rem 3rem", flex: 1, width: "100%" }}>

        {/* Breadcrumb */}
        <div style={{ fontSize: "12px", color: "#CCDA47", marginBottom: "1.5rem" }}>
          <Link href="/listings" style={{ color: "#CCDA47", textDecoration: "none" }}>Listings</Link>
          {" › "}
          <span>2025 Audi A5 TFSI 200kW S line</span>
        </div>

        {/* Two-column layout */}
        <div className="listing-grid" style={{ marginBottom: "2rem" }}>

          {/* Left: Image slider */}
          <div>
            {/* Main image */}
            <div style={{ position: "relative", height: "480px", width: "100%", background: "#111", borderRadius: "8px", overflow: "hidden", marginBottom: "8px" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={IMAGES[activeImg]}
                alt={IMG_LABELS[activeImg]}
                style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
              />

              {/* Left arrow */}
              {activeImg > 0 && (
                <button
                  onClick={() => setActiveImg((i) => i - 1)}
                  style={{
                    position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)",
                    width: "40px", height: "40px", background: "rgba(0,0,0,0.5)", color: "#fff",
                    fontSize: "24px", borderRadius: "50%", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.5)")}
                >
                  ‹
                </button>
              )}

              {/* Right arrow */}
              {activeImg < IMAGES.length - 1 && (
                <button
                  onClick={() => setActiveImg((i) => i + 1)}
                  style={{
                    position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)",
                    width: "40px", height: "40px", background: "rgba(0,0,0,0.5)", color: "#fff",
                    fontSize: "24px", borderRadius: "50%", border: "none", cursor: "pointer",
                    display: "flex", alignItems: "center", justifyContent: "center", lineHeight: 1,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.8)")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.5)")}
                >
                  ›
                </button>
              )}

              {/* Index counter */}
              <div style={{
                position: "absolute", right: "12px", bottom: "12px",
                background: "rgba(0,0,0,0.5)", color: "#fff",
                fontSize: "11px", padding: "3px 8px", borderRadius: "10px",
              }}>
                {activeImg + 1} / {IMAGES.length}
              </div>
            </div>

            {/* Thumbnails — horizontal scroll */}
            <div style={{ overflowX: "auto", whiteSpace: "nowrap", paddingBottom: "4px" }}>
              {IMAGES.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={src}
                  alt={IMG_LABELS[i]}
                  onClick={() => setActiveImg(i)}
                  style={{
                    display: "inline-block",
                    width: "80px", height: "54px",
                    objectFit: "cover",
                    borderRadius: "4px",
                    marginRight: "6px",
                    cursor: "pointer",
                    border: activeImg === i ? "2px solid #CCDA47" : "2px solid transparent",
                    opacity: activeImg === i ? 1 : 0.6,
                    transition: "border-color 0.15s, opacity 0.15s",
                    verticalAlign: "top",
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right: Enquire card */}
          <div style={{ background: "#242424", border: "0.5px solid #2e2e2e", borderRadius: "8px", padding: "14px", display: "flex", flexDirection: "column", gap: "12px" }}>

            {/* A. Vehicle info */}
            <div>
              <span style={{ display: "inline-block", background: "#CCDA47", color: "#1A1A1A", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "2px 8px", borderRadius: "4px", marginBottom: "8px" }}>
                DEMO
              </span>
              <div style={{ fontSize: "15px", fontWeight: 600, color: "#ffffff", lineHeight: 1.35, marginBottom: "4px" }}>
                2025 Audi A5 TFSI 200kW S line<br />
                <span style={{ fontSize: "13px", fontWeight: 400, color: "#aaaaaa" }}>2.0L Turbo · Quattro AWD · S tronic</span>
              </div>
              <div style={{ fontSize: "11px", color: "#888888" }}>Artarmon, Sydney · 2,500 km</div>
            </div>

            {/* B. Pricing */}
            <div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#CCDA47", marginBottom: "4px" }}>
                $87,880
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "11px", color: "#555", textDecoration: "line-through" }}>$128,918</span>
                <span style={{ fontSize: "9px", fontWeight: 700, color: "#CCDA47", background: "#1f2410", border: "0.5px solid #3a4a10", padding: "2px 7px", borderRadius: "4px", letterSpacing: "0.5px" }}>
                  SAVE $41,038
                </span>
              </div>
              <div style={{ fontSize: "10px", color: "#555" }}>32% below new · 5yr unlimited km warranty</div>
            </div>

            {/* C. Why this price makes sense */}
            <div style={{ background: "#1e1e1e", border: "0.5px solid #2a2a2a", borderRadius: "6px", padding: "10px" }}>
              <div style={{ fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.7px", fontWeight: 600, marginBottom: "8px" }}>
                Why this price makes sense
              </div>
              {[
                { label: "New drive-away",      val: "$128,918", lime: false },
                { label: "Added options value", val: "+$12,500", lime: false },
                { label: "Total new value",     val: "$141,418", lime: false },
                { label: "MustGoDeals price",   val: "$87,880",  lime: true  },
              ].map((row, i, arr) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingBottom: "6px", marginBottom: i < arr.length - 1 ? "6px" : 0, borderBottom: i < arr.length - 1 ? "0.5px solid #252525" : "none" }}>
                  <span style={{ fontSize: "11px", color: row.lime ? "#CCDA47" : "#aaaaaa", fontWeight: row.lime ? 600 : 400 }}>{row.label}</span>
                  <span style={{ fontSize: "11px", color: row.lime ? "#CCDA47" : "#aaaaaa", fontWeight: row.lime ? 600 : 400 }}>{row.val}</span>
                </div>
              ))}
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
                      <input
                        required type="text" placeholder="Your name" value={formName}
                        onChange={(e) => setFormName(e.target.value)}
                        style={{ width: "100%", padding: "9px 11px", background: "#1e1e1e", border: "0.5px solid #333", borderRadius: "6px", color: "#ccc", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
                      />
                      <input
                        required type="tel" placeholder="Mobile number" value={formMobile}
                        onChange={(e) => setFormMobile(e.target.value)}
                        style={{ width: "100%", padding: "9px 11px", background: "#1e1e1e", border: "0.5px solid #333", borderRadius: "6px", color: "#ccc", fontSize: "13px", outline: "none", boxSizing: "border-box" }}
                      />
                      <textarea
                        rows={3} placeholder="I'm interested in this car" value={formMsg}
                        onChange={(e) => setFormMsg(e.target.value)}
                        style={{ width: "100%", padding: "9px 11px", background: "#1e1e1e", border: "0.5px solid #333", borderRadius: "6px", color: "#ccc", fontSize: "13px", outline: "none", resize: "none", boxSizing: "border-box" }}
                      />
                      <div style={{ fontSize: "10px", color: "#444", textAlign: "center" }}>
                        Your details will be shared with the dealer only
                      </div>
                      <button
                        type="submit" disabled={sending}
                        style={{ width: "100%", padding: "11px", background: "#CCDA47", color: "#1A1A1A", border: "none", borderRadius: "6px", fontSize: "14px", fontWeight: 700, cursor: sending ? "default" : "pointer", opacity: sending ? 0.7 : 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}
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
              <div style={{ fontSize: "13px", color: "#ffffff", fontWeight: 500, marginBottom: "5px" }}>Jung In B</div>
              <div style={{ fontSize: "11px", color: "#aaaaaa" }}>📍 Artarmon, Sydney</div>
            </div>

            {/* F. Interstate note */}
            <div style={{ fontSize: "10px", color: "#444", textAlign: "center" }}>
              Interstate buyers welcome · We assist with delivery
            </div>
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
              EOFY Sale — one of the best-spec&apos;d A5s we&apos;ve had. Fully optioned with Premium and Style packages, panoramic roof with switchable transparency, and Bang &amp; Olufsen sound. AWD Quattro with only 2,500km. This one won&apos;t last.
            </p>
          </div>
          <div style={{ fontSize: "11px", color: "#555", textAlign: "right" }}>— Jung In B, Artarmon</div>
        </div>

        {/* Specifications */}
        <div style={{ marginBottom: "2rem" }}>
          <SectionTitle>Specifications</SectionTitle>
          <div className="spec-grid">
            {SPECS.map((s) => (
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
                <div style={{ fontSize: "12px", color: "#cccccc", fontWeight: 500, marginBottom: "3px" }}>{f.name}</div>
                <div style={{ fontSize: "10px", color: "#888888", lineHeight: 1.5 }}>{f.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Added Options */}
        <div style={{ marginBottom: "2rem" }}>
          <SectionTitle>Added Options — included in this vehicle</SectionTitle>
          {OPTIONS.map((opt, i) => (
            <div key={i} style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "12px", paddingBottom: "10px", marginBottom: "10px", borderBottom: "0.5px solid #242424" }}>
              <div style={{ display: "flex", alignItems: "flex-start", gap: "8px", flex: 1 }}>
                <span style={{ fontSize: "6px", color: "#CCDA47", lineHeight: "18px", flexShrink: 0 }}>●</span>
                <div>
                  <div style={{ fontSize: "12px", color: "#dddddd", marginBottom: "2px" }}>{opt.name}</div>
                  <div style={{ fontSize: "10px", color: "#888888" }}>{opt.ko}</div>
                </div>
              </div>
              <span style={{ fontSize: "12px", color: "#CCDA47", fontWeight: 600, flexShrink: 0, paddingTop: "1px" }}>{opt.price}</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "4px" }}>
            <span style={{ fontSize: "11px", color: "#666" }}>추가 옵션 합계 (이 차량에 포함)</span>
            <span style={{ fontSize: "13px", color: "#CCDA47", fontWeight: 700 }}>+$12,500</span>
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
