"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// ── Data ──────────────────────────────────────────────────────────────────────

const SLUG = "2025-audi-sq8";

const IMAGES = [
  "https://edge.pxcrush.net/cars/dealer/2kpf62gbkg4jcti5u0rsy42nr.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=e1cd655ac9667dde9314d4ed7fe61a5b&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/4xjfpupwxtxz1gzzah21pkc9w.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=586184ae5e3e9f9cda8125d973955bec&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/3m492f7byax7f9zefwuczhqm4.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=0a12fbfb3cdc5b623ad48c49728fcd63&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/g0lq0pc037nrxzargj9qaru9.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=0e700a425ee6985f5a02bd9de3293e02&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/9478ciqx7bukmn9xy4ef38b6g.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=e2760d891f9346b9bccc754ffe649f83&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/dy16g12owy0jx96u47in4kajz.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=fbfceaa741b2eff4f230fd50f2c4a8b8&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/8n9qtjjrx0128vm331t9hmd9y.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=5d06f5c28e4c13308e903c266bfac877&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/3safzj0x5oweaij3dewiv0jsa.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=06d6727a451b5c06c9697888f2ea0d9a&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/dejmzce99hwp24r7v8zp7hykj.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=eaed668ecc7f5198018bcfbfe5318290&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/1rbfbdtmmwlpzuimh2rd3z7cx.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=3fd84b333038567ed49203916b8a299c&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/9i3z5r2utkv28ip1p0jokr9jg.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=8ca381797567d2967b064271bba0c2ee&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/6y0cln7m4i9i0v9dstdmqwxdd.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=219f145609325374b286fafedaa73c56&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/deel6ytrjly0g7hn7a7jcougz.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=b8d1e5e214d3dbf4add7dcd61df71269&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/chssyaizzrkvlc3i3vmwzk3o9.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=ff4932ce4f92cf3eed046b6083dcd97d&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/20ktxyic9ot317r1weg8tcfry.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=f43a733ee7a1a70d18376b3f69ea3495&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/dfq5hndxry8880zb32b1cqjqd.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=e6943310f397f12241924ce249cc46a8&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/48gecej86yym81qypynnqjnm9.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=2e17576004719db513ba9b85cd62d914&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/eu8kyeh2fs87d3wbhb2oaxooz.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=09c095aee2448dda58ac7540bd0dbe3e&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/5zh7h66wpt6kaf5hijag1a3pk.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=36df447f7aa8c6e2b5348bca9454e427&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/e4z3t1kp54pz0zp5cq53wkd4l.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=f2903b854f0104682d84951574dfbd5b&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/dyl0i6o6t3imdeg7qepy34m93.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=9f6176d6a504b9e5cfa0cdca2e25c0cf&pxc_size=1000%2c667",
  "https://edge.pxcrush.net/cars/dealer/c4r2yzqpbym8c7mt83u2l5c2m.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=35e67276106f26d1a847ada5f04d64ad&pxc_size=1000%2c667",
];

const IMG_LABELS = IMAGES.map((_, i) => `Photo ${i + 1}`);

const SPECS = [
  { label: "Year",         value: "2025" },
  { label: "Body",         value: "SUV · 5 doors" },
  { label: "Engine",       value: "4.0L V8 Twin Turbo Petrol" },
  { label: "Power",        value: "373 kW / 770 Nm" },
  { label: "Transmission", value: "8-speed Tiptronic" },
  { label: "Drive",        value: "Quattro AWD" },
  { label: "0–100 km/h",  value: "4.1 sec" },
  { label: "Fuel",         value: "11.9L/100km" },
  { label: "Colour",       value: "Mythos Black" },
  { label: "Interior",     value: "Arras Red / Anthracite" },
  { label: "Seats",        value: "5" },
  { label: "Build",        value: "October 2025" },
];

const FEATURES = {
  EN: [
    { name: "B&O Advanced 3D Sound (1,920W)",  desc: "23-speaker system with 1,920W output and automatically extending acoustic lenses" },
    { name: "HD Matrix LED with Laser Light",   desc: "Individual LED matrix headlights with long-range laser assist and OLED rear lights" },
    { name: "Arras Red Nappa Leather",          desc: "Full Nappa leather upholstery in Arras Red with contrasting stitching" },
    { name: "4.0L V8 Twin Turbo",              desc: "373kW / 770Nm — 0-100km/h in 4.1 seconds with cylinder deactivation" },
    { name: "Quattro AWD + Air Suspension",     desc: "Permanent AWD with adaptive air suspension and torque vectoring" },
    { name: "22\" Black Alloy Wheels",          desc: "Factory-fitted 22-inch sport alloys in gloss black finish" },
  ],
  KO: [
    { name: "B&O Advanced 3D Sound (1,920W)",  desc: "23개 스피커, 1,920W 출력, 자동 확장 어쿠스틱 렌즈 탑재 최고급 사운드" },
    { name: "HD Matrix LED with Laser Light",   desc: "레이저 하이빔 보조 기능이 있는 HD 매트릭스 LED + OLED 리어 테일라이트" },
    { name: "Arras Red Nappa Leather",          desc: "아라스 레드 나파 가죽 풀 인테리어, 콘트라스트 스티칭 적용" },
    { name: "4.0L V8 Twin Turbo",              desc: "373kW / 770Nm, 정지에서 100km/h까지 4.1초, 실린더 비활성화 기능 포함" },
    { name: "Quattro AWD + Air Suspension",     desc: "상시 AWD + 에어 서스펜션 + 토크 벡터링으로 SUV와 스포츠카의 경계를 허물다" },
    { name: "22\" Black Alloy Wheels",          desc: "순정 22인치 블랙 스포츠 알로이 휠" },
  ],
};

const OPTIONS = [
  { name: "Arras Red Upholstery Package",                                    descEn: "Full Arras Red interior upholstery with contrasting stitching throughout",               descKo: "아라스 레드 풀 인테리어 업홀스터리, 전체 콘트라스트 스티칭 적용",              price: "+$6,500", raw: 6500 },
  { name: "Sensory Package (B&O 3D Advanced + Massage + Rear Seat Heating)", descEn: "B&O Advanced 3D Sound (1,920W), massage seats, rear seat heating",                       descKo: "B&O 어드밴스드 3D 사운드 (1,920W), 마사지 시트, 후석 히팅",                  price: "+$7,200", raw: 7200 },
  { name: "HD Matrix LED with Laser + OLED Package",                         descEn: "HD Matrix LED headlights with laser assist and OLED rear taillights",                    descKo: "레이저 보조 HD 매트릭스 LED 헤드라이트 + OLED 리어 테일라이트",               price: "+$3,800", raw: 3800 },
  { name: "Full Leather Package",                                             descEn: "Nappa leather upholstery with air quality package and electric sunblinds",               descKo: "나파 가죽 풀 업홀스터리, 에어 퀄리티 패키지, 전동 선블라인드",                price: "+$2,500", raw: 2500 },
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

export default function ListingSQ8Page() {
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
          carName: "2025 Audi SQ8 TFSI Quattro",
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
          <span>2025 Audi SQ8 TFSI Quattro</span>
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
                2025 Audi SQ8 TFSI Quattro<br />
                <span style={{ fontSize: "13px", fontWeight: 400, color: "#aaaaaa" }}>4.0L V8 Twin Turbo · Quattro AWD · Tiptronic</span>
              </div>
              <div style={{ fontSize: "11px", color: "#888888" }}>Artarmon, Sydney · 2,000 km</div>
            </div>

            {/* B. Pricing */}
            <div>
              <div style={{ fontSize: "22px", fontWeight: 700, color: "#CCDA47", marginBottom: "4px" }}>
                $189,888
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                <span style={{ fontSize: "11px", color: "#555", textDecoration: "line-through" }}>$227,943</span>
                <span style={{ fontSize: "9px", fontWeight: 700, color: "#CCDA47", background: "#1f2410", border: "0.5px solid #3a4a10", padding: "2px 7px", borderRadius: "4px", letterSpacing: "0.5px" }}>
                  SAVE $38,055
                </span>
              </div>
              <div style={{ fontSize: "10px", color: "#555" }}>17% below new · 5yr unlimited km warranty</div>
            </div>

            {/* C. Why this price makes sense */}
            <div style={{ background: "#1e1e1e", border: "0.5px solid #2a2a2a", borderRadius: "6px", padding: "10px" }}>
              <div style={{ fontSize: "10px", color: "#555", textTransform: "uppercase", letterSpacing: "0.7px", fontWeight: 600, marginBottom: "8px" }}>
                Why this price makes sense
              </div>
              {[
                { label: "New drive-away",      val: "$227,943", lime: false },
                { label: "Added options value", val: "+$20,000", lime: false },
                { label: "Total new value",     val: "$247,943", lime: false },
                { label: "MustGoDeals price",   val: "$189,888", lime: true  },
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
              A bespoke V8 SQ8 — one of the most fully optioned examples we&apos;ve had. Arras Red upholstery package, B&amp;O Advanced 3D sound with 1,920W output, HD Matrix LED with laser lights, Nappa leather, 22-inch black alloys, and panoramic sunroof. If you know SQ8, you know what this spec means.
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
                  <div style={{ fontSize: "10px", color: "#888888" }}>{featLang === "KO" ? opt.descKo : opt.descEn}</div>
                </div>
              </div>
              <span style={{ fontSize: "12px", color: "#CCDA47", fontWeight: 600, flexShrink: 0, paddingTop: "1px" }}>{opt.price}</span>
            </div>
          ))}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: "4px" }}>
            <span style={{ fontSize: "11px", color: "#666" }}>
              {featLang === "KO" ? "추가 옵션 합계 (이 차량에 포함)" : "Total added options (included in this vehicle)"}
            </span>
            <span style={{ fontSize: "13px", color: "#CCDA47", fontWeight: 700 }}>+$20,000</span>
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
