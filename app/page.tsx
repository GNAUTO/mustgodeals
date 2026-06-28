"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BLOG_POSTS, NEWS_ITEMS } from "./data/posts";
import PostCard from "./components/posts/PostCard";

const LANGS = [
  { label: "EN", code: "EN", comingSoon: "Articles coming soon." },
  { label: "한국어", code: "KO", comingSoon: "준비중입니다." },
  { label: "中文", code: "ZH", comingSoon: "敬请期待。" },
];


export default function Home() {
  const [activeLang, setActiveLang] = useState("EN");

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
        <h1 style={{ color: "white", fontSize: "clamp(2rem, 8vw, 4rem)", fontWeight: 600, lineHeight: 1.1, marginBottom: "1.25rem", letterSpacing: "-0.5px" }}>
          Cars dealers <span style={{ color: "#CCDA47" }}>must move</span><br />
          Savings you didn&rsquo;t expect
        </h1>
        <p style={{ color: "#999", fontSize: "clamp(0.875rem, 2vw, 1rem)", maxWidth: "420px", margin: "0 auto 2rem" }}>
          Dealer clearance vehicles. Real discounts. Updated regularly.
        </p>
        <div className="hero-btns">
          <Link href="/listings" style={{ background: "#CCDA47", color: "#1A1A1A", padding: "12px 28px", borderRadius: "8px", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
            Browse Demo Cars
          </Link>
          <Link href="/blog" style={{ background: "transparent", color: "white", padding: "12px 28px", borderRadius: "8px", fontSize: "14px", border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none" }}>
            Read buying guides
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
            {/* Card 1: Real listing */}
            <Link href="/listings/2025-audi-a5-sport" style={{ textDecoration: "none", display: "block" }}>
              <div className="listing-card" style={{ background: "#242424", borderRadius: "8px", overflow: "hidden", cursor: "pointer" }}>
                <div style={{ height: "160px", background: "#1e1e1e", overflow: "hidden", position: "relative" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://edge.pxcrush.net/cars/dealer/euy7ctpajf5ul5opydntht8xw.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=98b39390ab0e54aba568cf55b91ca2fe&pxc_size=1000%2c667"
                    alt="2025 Audi A5 TFSI 200kW S line"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ position: "absolute", top: "10px", left: "10px", background: "#CCDA47", color: "#1A1A1A", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
                    DEMO
                  </div>
                </div>
                <div style={{ padding: "0.9rem 0.9rem 1rem" }}>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "#ddd", lineHeight: 1.3, marginBottom: "3px" }}>2025 Audi A5 TFSI 200kW S line</div>
                  <div style={{ fontSize: "10px", color: "#555", marginBottom: "8px" }}>2,500 km · Daytona Grey · Petrol</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "12px", color: "#888", textDecoration: "line-through" }}>$128,918</span>
                    <span style={{ fontSize: "12px", color: "#666" }}>→</span>
                    <span style={{ fontSize: "22px", fontWeight: 700, color: "#CCDA47" }}>$87,880</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#CCDA47", background: "#1f2410", border: "0.5px solid #3a4a10", padding: "3px 8px", borderRadius: "4px" }}>SAVE $41,038</span>
                    <span style={{ fontSize: "10px", color: "#CCDA47" }}>32% below new</span>
                  </div>
                  <button style={{ width: "100%", padding: "8px", background: "#1f2410", color: "#CCDA47", border: "0.5px solid #3a4a10", borderRadius: "6px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.3px", cursor: "pointer" }}>
                    View listing →
                  </button>
                </div>
              </div>
            </Link>

            {/* Card 2: SQ8 listing */}
            <Link href="/listings/2025-audi-sq8" style={{ textDecoration: "none", display: "block" }}>
              <div className="listing-card" style={{ background: "#242424", borderRadius: "8px", overflow: "hidden", cursor: "pointer" }}>
                <div style={{ height: "160px", background: "#1e1e1e", overflow: "hidden", position: "relative" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://edge.pxcrush.net/cars/dealer/2kpf62gbkg4jcti5u0rsy42nr.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=e1cd655ac9667dde9314d4ed7fe61a5b&pxc_size=1000%2c667"
                    alt="2025 Audi SQ8 TFSI Quattro"
                    style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ position: "absolute", top: "10px", left: "10px", background: "#CCDA47", color: "#1A1A1A", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>
                    DEMO
                  </div>
                </div>
                <div style={{ padding: "0.9rem 0.9rem 1rem" }}>
                  <div style={{ fontSize: "12px", fontWeight: 600, color: "#ddd", lineHeight: 1.3, marginBottom: "3px" }}>2025 Audi SQ8 TFSI Quattro</div>
                  <div style={{ fontSize: "10px", color: "#555", marginBottom: "8px" }}>2,000 km · Mythos Black · Petrol</div>
                  <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                    <span style={{ fontSize: "12px", color: "#888", textDecoration: "line-through" }}>$227,943</span>
                    <span style={{ fontSize: "12px", color: "#666" }}>→</span>
                    <span style={{ fontSize: "22px", fontWeight: 700, color: "#CCDA47" }}>$189,888</span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }}>
                    <span style={{ fontSize: "12px", fontWeight: 700, color: "#CCDA47", background: "#1f2410", border: "0.5px solid #3a4a10", padding: "3px 8px", borderRadius: "4px" }}>SAVE $38,055</span>
                    <span style={{ fontSize: "10px", color: "#CCDA47" }}>17% below new</span>
                  </div>
                  <button style={{ width: "100%", padding: "8px", background: "#1f2410", color: "#CCDA47", border: "0.5px solid #3a4a10", borderRadius: "6px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.3px", cursor: "pointer" }}>
                    View listing →
                  </button>
                </div>
              </div>
            </Link>

            {/* Card 3: COMING SOON */}
            <div className="listing-card" style={{ background: "#242424", borderRadius: "8px", overflow: "hidden", pointerEvents: "none", cursor: "default", opacity: 0.5 }}>
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
                <div style={{ width: "100%", padding: "8px", background: "#1f2410", color: "#CCDA47", border: "0.5px solid #3a4a10", borderRadius: "6px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.3px", textAlign: "center" }}>
                  Coming soon
                </div>
              </div>
            </div>

            {/* Card 4: SOLD */}
            <div style={{ background: "#242424", borderRadius: "8px", border: "0.5px solid #2e2e2e", overflow: "hidden", pointerEvents: "none", cursor: "default", opacity: 0.35 }}>
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
              <PostCard key={item.slug} type="news" item={item} compact />
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
              <PostCard key={post.slug} type="blog" item={post} />
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
