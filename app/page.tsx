"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BLOG_POSTS, NEWS_ITEMS } from "./data/posts";

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

  const filtered = BLOG_POSTS
    .filter((p) => p.lang === activeLang)
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  const filteredNews = NEWS_ITEMS.filter((n) => n.lang === activeLang);
  const currentLang = LANGS.find((l) => l.code === activeLang)!;

  return (
    <div style={{ minHeight: "100vh", background: "#F5F5F0", display: "flex", flexDirection: "column" }}>
      <Navbar langTabs={{ activeLang, onLangChange: setActiveLang }} />

      {/* Hero */}
      <div className="hero-section" style={{ background: "#1A1A1A", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(204,218,71,0.15)", border: "1px solid #CCDA47", color: "#CCDA47", fontSize: "11px", padding: "4px 14px", borderRadius: "20px", marginBottom: "1rem", letterSpacing: "0.5px" }}>
          {getMonthBadge()}
        </div>
        <h1 style={{ color: "white", fontSize: "clamp(1.5rem, 8.5vw, 2.875rem)", fontWeight: 500, lineHeight: 1.3, marginBottom: "0.75rem", letterSpacing: "-0.5px" }}>
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

      {/* Demo Cars */}
      <div style={{ background: "#1A1A1A", padding: "2.5rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 600, color: "white", letterSpacing: "0.08em", textTransform: "uppercase" }}>Demo Cars Available Now</h2>
            <Link href="/listings" style={{ fontSize: "13px", color: "#CCDA47", textDecoration: "none", fontWeight: 500 }}>View all listings →</Link>
          </div>

          <div className="demo-grid">
            {/* Cards 1–3: COMING SOON */}
            {[0, 1, 2].map((i) => (
              <div key={i} style={{ background: "#242424", borderRadius: "8px", border: "0.5px solid #2e2e2e", overflow: "hidden" }}>
                <div style={{ height: "120px", background: "#1e1e1e", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                  <svg width="64" height="38" viewBox="0 0 64 38" fill="none" style={{ color: "#2e2e2e" }}>
                    <path d="M8 24 L18 10 C19.5 8 21.5 7 23.5 7 L40.5 7 C42.5 7 44.5 8 46 10 L56 24 Z" fill="currentColor"/>
                    <rect x="5" y="24" width="54" height="9" rx="3" fill="currentColor"/>
                    <circle cx="16" cy="33" r="5" fill="#1e1e1e" stroke="currentColor" strokeWidth="2"/>
                    <circle cx="48" cy="33" r="5" fill="#1e1e1e" stroke="currentColor" strokeWidth="2"/>
                  </svg>
                  <div style={{ position: "absolute", top: "10px", left: "10px", background: "#1f2410", color: "#CCDA47", border: "0.5px solid #3a4a10", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
                    COMING SOON
                  </div>
                </div>
                <div style={{ padding: "0.9rem 0.9rem 1rem" }}>
                  <div style={{ background: "#333", height: "10px", borderRadius: "4px", width: "70%", marginBottom: "8px" }} />
                  <div style={{ background: "#292929", height: "8px", borderRadius: "4px", width: "50%", marginBottom: "12px" }} />
                  <div style={{ background: "#383838", height: "13px", borderRadius: "4px", width: "42%", marginBottom: "10px" }} />
                  <div style={{ display: "flex", gap: "6px", marginBottom: "14px" }}>
                    <div style={{ background: "#2a2a2a", height: "8px", borderRadius: "4px", width: "38%" }} />
                    <div style={{ background: "#2a2a2a", height: "8px", borderRadius: "4px", width: "30%" }} />
                  </div>
                  <button style={{ width: "100%", padding: "8px", background: "#1f2410", color: "#CCDA47", border: "0.5px solid #3a4a10", borderRadius: "6px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.3px", cursor: "default" }}>
                    Notify me when listed
                  </button>
                </div>
              </div>
            ))}

            {/* Card 4: SOLD */}
            <div style={{ background: "#242424", borderRadius: "8px", border: "0.5px solid #2e2e2e", overflow: "hidden" }}>
              <div style={{ height: "120px", background: "#1e1e1e", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                <svg width="64" height="38" viewBox="0 0 64 38" fill="none" style={{ color: "#2e2e2e" }}>
                  <path d="M8 24 L18 10 C19.5 8 21.5 7 23.5 7 L40.5 7 C42.5 7 44.5 8 46 10 L56 24 Z" fill="currentColor"/>
                  <rect x="5" y="24" width="54" height="9" rx="3" fill="currentColor"/>
                  <circle cx="16" cy="33" r="5" fill="#1e1e1e" stroke="currentColor" strokeWidth="2"/>
                  <circle cx="48" cy="33" r="5" fill="#1e1e1e" stroke="currentColor" strokeWidth="2"/>
                </svg>
                <div style={{ position: "absolute", top: "10px", left: "10px", background: "#2a1515", color: "#e05555", border: "0.5px solid #4a2020", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
                  SOLD
                </div>
              </div>
              <div style={{ padding: "0.9rem 0.9rem 1rem" }}>
                <div style={{ background: "#333", height: "10px", borderRadius: "4px", width: "70%", marginBottom: "8px" }} />
                <div style={{ background: "#292929", height: "8px", borderRadius: "4px", width: "50%", marginBottom: "12px" }} />
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
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div style={{ background: "#ECEEE7", padding: "2.5rem 0" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 500, color: "#1A1A1A" }}>Latest News</h2>
            <Link href="/news" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>All news →</Link>
          </div>
          {filteredNews.length === 0 ? (
            <div style={{ textAlign: "center", padding: "2rem", color: "#aaa", fontSize: "14px" }}>{currentLang.comingSoon}</div>
          ) : null}
          <div className="section-grid">
            {filteredNews.slice(0, 6).map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="news-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "white", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                      <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.8px", background: "rgba(204,218,71,0.12)", padding: "2px 8px", borderRadius: "10px" }}>{item.category}</span>
                      <span style={{ fontSize: "11px", color: "#999" }}>{item.date}</span>
                    </div>
                    <div style={{ fontSize: "14px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4 }}>{item.title}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Blog cards */}
      <div style={{ flex: 1 }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 500, color: "#1A1A1A" }}>Latest articles</h2>
          <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>All articles →</Link>
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "4rem 2rem", color: "#aaa", fontSize: "15px" }}>
            {currentLang.comingSoon}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
            {filtered.slice(0, 6).map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="news-card" style={{ textDecoration: "none" }}>
                <div style={{ background: "white", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", padding: "1.25rem", height: "100%", cursor: "pointer" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                      <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 500, letterSpacing: "0.5px", textTransform: "uppercase" }}>{post.category}</span>
                      {post.pinned && (
                        <span style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.5px", color: "#CCDA47", background: "rgba(204,218,71,0.15)", border: "1px solid #CCDA47", padding: "4px 10px", borderRadius: "4px" }}>FEATURED</span>
                      )}
                    </div>
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
      </div>

      {/* Email signup */}
      <div style={{ background: "#1A1A1A" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <h3 style={{ color: "white", fontSize: "16px", fontWeight: 500, marginBottom: "4px" }}>Get alerts before deals are gone</h3>
            <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px" }}>New clearance vehicles every week — be first to know</p>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <input placeholder="your@email.com" style={{ padding: "10px 14px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: "13px", width: "220px" }} />
            <button style={{ background: "#CCDA47", color: "#1A1A1A", border: "none", padding: "10px 18px", borderRadius: "6px", fontSize: "13px", fontWeight: 500, cursor: "pointer" }}>Get alerts</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
