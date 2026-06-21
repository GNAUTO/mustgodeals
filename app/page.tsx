"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";

const posts = [
  {
    slug: "wolmal-jadongcha-dil-jongni",
    title: "월말 자동차 딜 총정리 — 딜러가 절대 말 안해주는 비밀",
    excerpt: "월말 마지막 3~5 영업일, 딜러에게 가장 강한 압박이 걸리는 시간. 이 타이밍과 협상 전술만 알면 수천 달러를 아낄 수 있습니다.",
    category: "한국어 가이드",
    readTime: "8분 읽기",
    date: "2026년 6월",
    lang: "KO",
  },
];

const LANGS = [
  { label: "EN", code: "EN", comingSoon: "Articles coming soon." },
  { label: "한국어", code: "KO", comingSoon: "준비중입니다." },
  { label: "中文", code: "ZH", comingSoon: "敬请期待。" },
];

function getMonthBadge() {
  const now = new Date();
  const month = now.toLocaleString("en-US", { month: "long" }).toUpperCase();
  const year = now.getFullYear();
  return `${month} ${year} — MONTH END CLEARANCE`;
}

function useCountdown() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  useEffect(() => {
    function tick() {
      const now = new Date();
      const end = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const diff = Math.max(0, end.getTime() - now.getTime());
      setT({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      });
    }
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return t;
}

export default function Home() {
  const [activeLang, setActiveLang] = useState("EN");
  const countdown = useCountdown();

  const filtered = posts.filter((p) => p.lang === activeLang);
  const currentLang = LANGS.find((l) => l.code === activeLang)!;

  return (
    <div style={{ minHeight: "100vh", background: "#F5F5F0" }}>
      <Navbar langTabs={{ activeLang, onLangChange: setActiveLang }} />

      {/* Hero */}
      <div style={{ background: "#1A1A1A", padding: "3rem 2rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(204,218,71,0.15)", border: "1px solid #CCDA47", color: "#CCDA47", fontSize: "11px", padding: "4px 14px", borderRadius: "20px", marginBottom: "1rem", letterSpacing: "0.5px" }}>
          {getMonthBadge()}
        </div>
        <h1 style={{ color: "white", fontSize: "46px", fontWeight: 500, lineHeight: 1.3, marginBottom: "0.75rem", letterSpacing: "-0.5px" }}>
          Cars dealers <span className="must-sell-animate">must sell</span><br />before month end
        </h1>

        {/* Countdown */}
        <div style={{ display: "flex", gap: "10px", justifyContent: "center", margin: "1.25rem auto 1.75rem" }}>
          {([
            { value: countdown.days,    label: "days" },
            { value: countdown.hours,   label: "hrs" },
            { value: countdown.minutes, label: "min" },
            { value: countdown.seconds, label: "sec" },
          ] as const).map(({ value, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "6px", padding: "8px 12px", minWidth: "52px" }}>
                <span className="countdown-digit" style={{ color: "white", fontSize: "22px", fontWeight: 500 }}>
                  {String(value).padStart(2, "0")}
                </span>
              </div>
              <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "10px", marginTop: "4px", letterSpacing: "0.5px", textTransform: "uppercase" }}>{label}</div>
            </div>
          ))}
        </div>

        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", maxWidth: "480px", margin: "0 auto 2rem" }}>
          Insider guides, negotiation tips, and clearance deals — updated every week.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/coming-soon" style={{ background: "#CCDA47", color: "#1A1A1A", padding: "12px 28px", borderRadius: "8px", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
            Read buying guides
          </Link>
          <Link href="/coming-soon" style={{ background: "transparent", color: "white", padding: "12px 28px", borderRadius: "8px", fontSize: "14px", border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none" }}>
            Get deal alerts
          </Link>
        </div>
      </div>

      {/* Ad banner */}
      <div style={{ background: "white", borderTop: "3px solid #CCDA47", padding: "10px 2rem", textAlign: "center", fontSize: "12px", color: "#888" }}>
        <span style={{ background: "#CCDA47", color: "#1A1A1A", fontSize: "9px", fontWeight: 500, padding: "2px 6px", borderRadius: "3px", marginRight: "8px", letterSpacing: "0.5px" }}>AD</span>
        Google AdSense — Advertisement
      </div>

      {/* Blog cards */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 500, color: "#1A1A1A" }}>Latest guides</h2>
          <Link href="/coming-soon" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>All articles →</Link>
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 2rem", color: "#aaa", fontSize: "15px" }}>
            {currentLang.comingSoon}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
            {filtered.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
                <div style={{ background: "white", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", padding: "1.25rem", height: "100%", transition: "border-color 0.2s", cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                    <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 500, letterSpacing: "0.5px", textTransform: "uppercase" }}>{post.category}</span>
                    <span style={{ fontSize: "10px", color: "#999", background: "#F5F5F0", padding: "2px 8px", borderRadius: "10px" }}>{post.lang}</span>
                  </div>
                  <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4, marginBottom: "0.6rem" }}>{post.title}</h3>
                  <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.6, marginBottom: "1rem" }}>{post.excerpt}</p>
                  <div style={{ fontSize: "11px", color: "#aaa" }}>{post.readTime} · {post.date}</div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* Email signup */}
      <div style={{ background: "#1A1A1A", padding: "2.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div>
          <h3 style={{ color: "white", fontSize: "16px", fontWeight: 500, marginBottom: "4px" }}>Get alerts before deals are gone</h3>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px" }}>New clearance vehicles every week — be first to know</p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <input placeholder="your@email.com" style={{ padding: "10px 14px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: "13px", width: "220px" }} />
          <button style={{ background: "#CCDA47", color: "#1A1A1A", border: "none", padding: "10px 18px", borderRadius: "6px", fontSize: "13px", fontWeight: 500, cursor: "pointer" }}>Get alerts</button>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ background: "#111", padding: "1.25rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>© 2026 MustGoDeals.com.au — Sydney, Australia</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["About", "For Dealers", "Privacy", "Contact"].map((l) => (
            <Link key={l} href="/coming-soon" style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", textDecoration: "none" }}>{l}</Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
