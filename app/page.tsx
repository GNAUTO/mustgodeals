"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BlogGridCard } from "./components/posts/BlogCard";
import { BLOG_POSTS, NEWS_ITEMS } from "./data/posts";
import { LISTINGS } from "./data/listings";
import { JsonLd } from "./components/JsonLd";

import type { NewsItem } from "./data/posts";

function HomeNewsCard({ item }: { item: NewsItem }) {
  const [imgFailed, setImgFailed] = useState(false);
  return (
    <Link href={`/news/${item.slug}`} className="news-mag-card" style={{ background: "#f0ede4" }}>
      {!imgFailed && (
        <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} onError={() => setImgFailed(true)} />
      )}
      <div style={{ position: "absolute", inset: 0, background: imgFailed ? "none" : "linear-gradient(transparent 45%, rgba(0,0,0,0.82))", pointerEvents: "none" }} />
      {imgFailed ? (
        <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: "8px" }}>
          <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", color: "#84a300", textTransform: "uppercase" }}>{item.category}</div>
          <div style={{ fontSize: "13px", fontWeight: 600, color: "#26261f", lineHeight: 1.4, textAlign: "center", padding: "0 16px" }}>{item.title}</div>
        </div>
      ) : (
        <>
          <div style={{ position: "absolute", top: "16px", left: "16px", fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", color: "#84a300", textTransform: "uppercase" }}>{item.category}</div>
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px 18px" }}>
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginBottom: "6px" }}>{item.date}</div>
            <div className="news-mag-title" style={{ fontWeight: 700, color: "#ffffff", lineHeight: 1.3 }}>{item.title}</div>
          </div>
        </>
      )}
    </Link>
  );
}

const ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "MustGoDeals",
  url: "https://mustgodeals.com.au",
  logo: "https://mustgodeals.com.au/favicon.svg",
  email: "hello.mustgodeals@gmail.com",
};

const LANGS = [
  { label: "EN", code: "EN", comingSoon: "Articles coming soon." },
  { label: "한국어", code: "KO", comingSoon: "준비중입니다." },
  { label: "中文", code: "ZH", comingSoon: "敬请期待。" },
];

type GuideEntry = { href: string; title: string; category: string; time: string };
const GUIDE_DATA: Record<"start" | "most", GuideEntry[]> = {
  start: [
    { href: "/blog/buying-a-car-in-australia-guide", title: "The complete guide to buying a car in Australia", category: "Buying guide", time: "12 min" },
    { href: "/blog/why-buy-demo-car-australia", title: "Why a demo car makes more sense than you think", category: "Buying guide", time: "7 min" },
    { href: "/blog/demo-car-warranty-start-australia", title: "When does a demo car warranty actually start?", category: "Ownership", time: "8 min" },
  ],
  most: [
    { href: "/blog/novated-lease-worth-it-australia", title: "Is a novated lease actually worth it?", category: "Buying guide", time: "9 min" },
    { href: "/blog/car-stamp-duty-australia-explained", title: "Stamp duty on cars in Australia, explained", category: "Tax", time: "6 min" },
    { href: "/blog/fuel-type-guide-australia", title: "Which fuel type actually fits your life", category: "Buying guide", time: "12 min" },
  ],
};


export default function Home() {
  const [activeLang, setActiveLang] = useState("EN");
  const [cardTab, setCardTab] = useState<"start" | "most">("start");

  const filtered = BLOG_POSTS
    .filter((p) => p.lang === activeLang)
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  const filteredNews = NEWS_ITEMS.filter((n) => n.lang === activeLang);
  const currentLang = LANGS.find((l) => l.code === activeLang)!;

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", display: "flex", flexDirection: "column" }}>
      <JsonLd data={ORG_SCHEMA} />
      <Navbar langTabs={{ activeLang, onLangChange: setActiveLang }} />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <div style={{ background: "#fdfdfb", borderBottom: "1px solid #edeae0" }}>
        <div className="new-hero-wrap">
          <div className="new-hero-grid">

            {/* Left: copy */}
            <div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "12px", letterSpacing: "0.16em", color: "#84a300", textTransform: "uppercase", marginBottom: "28px" }}>
                Written from inside the industry
              </div>
              <h1 className="new-hero-h1">
                Know what<br />the dealer knows.
              </h1>
              <p className="new-hero-sub">
                Buying guides written from inside the industry, plus real dealer
                clearance cars with the discount shown on every listing.
              </p>
              <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                <Link href="/blog" className="new-hero-cta1">Read the guides</Link>
                <Link href="/listings" className="new-hero-cta2">Browse cars</Link>
              </div>
            </div>

            {/* Right: guide index card */}
            <div className="new-hero-card">
              <div className="new-hero-card-tabs">
                <button
                  onClick={() => setCardTab("start")}
                  className={`new-hero-card-tab${cardTab === "start" ? " active" : ""}`}
                >
                  START HERE
                </button>
                <button
                  onClick={() => setCardTab("most")}
                  className={`new-hero-card-tab${cardTab === "most" ? " active" : ""}`}
                >
                  MOST READ
                </button>
              </div>

              {GUIDE_DATA[cardTab].map((g, i) => (
                <Link key={g.href} href={g.href} className="new-hero-card-item">
                  <div style={{ fontFamily: "var(--font-newsreader)", fontSize: "22px", color: "#c9c5b6", fontVariantNumeric: "tabular-nums", flexShrink: 0, lineHeight: 1, marginTop: "3px" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div>
                    <div style={{ fontFamily: "var(--font-grotesk)", fontSize: "14px", fontWeight: 500, color: "#26261f", lineHeight: 1.4, marginBottom: "6px" }}>
                      {g.title}
                    </div>
                    <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#a3a091", letterSpacing: "0.05em" }}>
                      {g.category} · {g.time}
                    </div>
                  </div>
                </Link>
              ))}

              <div style={{ padding: "16px 24px", borderTop: "1px solid #f0ede4" }}>
                <Link href="/blog" style={{ fontFamily: "var(--font-grotesk)", fontSize: "13px", color: "#84a300", textDecoration: "none", fontWeight: 500 }}>
                  All guides →
                </Link>
              </div>
            </div>
          </div>

          {/* Stats bar */}
          <div className="new-hero-stats">
            <div className="new-hero-stats-label">CURRENTLY LISTED</div>
            <div className="new-hero-stats-items">
              {([
                { val: "$37,510", label: "total verified discount" },
                { val: "23%",     label: "largest below new price" },
                { val: "3",       label: "cars dealers must move"  },
              ] as const).map((s) => (
                <div key={s.label} style={{ flexShrink: 0 }}>
                  <div style={{ fontFamily: "var(--font-newsreader)", fontSize: "32px", fontVariantNumeric: "tabular-nums", color: "#26261f", lineHeight: 1.1, whiteSpace: "nowrap" }}>
                    {s.val.startsWith("$") ? (
                      <>
                        <span style={{ fontFamily: "var(--font-grotesk)", fontSize: "22px", fontWeight: 500, verticalAlign: "2px", marginRight: "1px" }}>$</span>
                        {s.val.slice(1)}
                      </>
                    ) : s.val}
                  </div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: "11px", color: "#a3a091", letterSpacing: "0.06em", marginTop: "4px" }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Demo Cars */}
      <div style={{ background: "#FAFAFA", padding: "2.5rem 0" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 600, color: "#1A1A1A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Demo Cars Available Now</h2>
            <Link href="/listings" style={{ fontSize: "13px", color: "#6B6B6B", textDecoration: "none", fontWeight: 500 }}>View all listings →</Link>
          </div>

          <div className="demo-grid">
            {LISTINGS.filter((l) => l.status !== "sold").map((listing) => {
              const engSpec = listing.specs.find((s) => s.label === "Engine")?.value ?? "";
              const fuelLabel = engSpec.includes("Electric") ? "EV" : engSpec.includes("Hybrid") ? "Hybrid" : "Petrol";
              const fmtP = (n: number) => `$${n.toLocaleString("en-AU")}`;

              if (listing.status === "coming_soon") {
                return (
                  <div key={listing.slug} className="listing-card home-card-light" style={{ background: "#F3F3F3", borderRadius: "8px", overflow: "hidden", pointerEvents: "none", cursor: "default", opacity: 0.55 }}>
                    <div style={{ height: "120px", background: "#E8E8E8", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                      <svg width="64" height="38" viewBox="0 0 64 38" fill="none" style={{ color: "#D0D0D0" }}>
                        <path d="M8 24 L18 10 C19.5 8 21.5 7 23.5 7 L40.5 7 C42.5 7 44.5 8 46 10 L56 24 Z" fill="currentColor"/>
                        <rect x="5" y="24" width="54" height="9" rx="3" fill="currentColor"/>
                        <circle cx="16" cy="33" r="5" fill="#E8E8E8" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="48" cy="33" r="5" fill="#E8E8E8" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <div style={{ position: "absolute", top: "10px", left: "10px", background: "#1A1A1A", color: "#CCDA47", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>COMING SOON</div>
                    </div>
                    <div style={{ padding: "0.9rem 0.9rem 1rem" }}>
                      <div style={{ background: "#DCDCDC", height: "10px", borderRadius: "4px", width: "70%", marginBottom: "8px" }} />
                      <div style={{ background: "#E4E4E4", height: "8px", borderRadius: "4px", width: "50%", marginBottom: "12px" }} />
                      <div style={{ background: "#D8D8D8", height: "13px", borderRadius: "4px", width: "42%", marginBottom: "10px" }} />
                      <div style={{ width: "100%", padding: "8px", background: "#E0E0E0", color: "#AAAAAA", borderRadius: "6px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.3px", textAlign: "center" }}>Coming soon</div>
                    </div>
                  </div>
                );
              }

              return (
                <Link key={listing.slug} href={`/listings/${listing.slug}`} style={{ textDecoration: "none", display: "block" }}>
                  <div className="listing-card home-card-light" style={{ background: "#FFFFFF", borderRadius: "8px", overflow: "hidden", cursor: "pointer" }}>
                    <div style={{ aspectRatio: "16/9", background: "#F0F0F0", overflow: "hidden", position: "relative" }}>
                      <Image src={listing.images[0]} alt={listing.name} fill style={{ objectFit: "cover", objectPosition: "center" }} />
                      <div style={{ position: "absolute", top: "10px", left: "10px", display: "flex", gap: "5px" }}>
                        <span style={{ background: "#CCDA47", color: "#1A1A1A", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>{listing.badge}</span>
                        {listing.savingsPct >= 20 && (
                          <span style={{ background: "#E8460A", color: "#fff", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>HOT DEAL</span>
                        )}
                      </div>
                    </div>
                    <div style={{ padding: "0.9rem 0.9rem 1rem" }}>
                      <div style={{ fontSize: "12px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3, marginBottom: "3px" }}>{listing.name}</div>
                      <div style={{ fontSize: "10px", color: "#6B6B6B", marginBottom: "8px" }}>{listing.km.toLocaleString("en-AU")} km · {listing.colour} · {fuelLabel}</div>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "4px" }}>
                        <span style={{ fontSize: "12px", color: "#BBBBBB", textDecoration: "line-through" }}>{fmtP(listing.wasPrice)}</span>
                        <span style={{ fontSize: "12px", color: "#BBBBBB" }}>→</span>
                        <span style={{ fontSize: "22px", fontWeight: 700, color: "#1A1A1A" }}>{fmtP(listing.price)}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "5px", marginBottom: "10px" }}>
                        <span style={{ fontSize: "12px", fontWeight: 700, color: "#1A1A1A", background: "#CCDA47", padding: "3px 8px", borderRadius: "4px" }}>SAVE {fmtP(listing.savingsAmount)}</span>
                        <span style={{ fontSize: "10px", color: "#6B6B6B" }}>{listing.savingsPct}% below new</span>
                      </div>
                      <button className="home-view-btn" style={{ width: "100%", padding: "8px", background: "#CCDA47", color: "#1A1A1A", border: "none", borderRadius: "6px", fontSize: "11px", fontWeight: 600, letterSpacing: "0.3px", cursor: "pointer" }}>
                        View listing →
                      </button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div style={{ background: "#fdfdfb", padding: "3rem 0", borderTop: "1px solid #edeae0" }}>
        <div className="news-home-wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-newsreader)", fontSize: "24px", fontWeight: 400, color: "#26261f", margin: 0 }}>
              {activeLang === "KO" ? "최신 뉴스" : "Latest News"}
            </h2>
            <Link href="/news" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", color: "#84a300", textDecoration: "none" }}>
              {activeLang === "KO" ? "전체 보기 →" : "All news →"}
            </Link>
          </div>
          {filteredNews.length === 0 ? (
            <div style={{ textAlign: "center", padding: "2rem", color: "#a3a091", fontSize: "14px" }}>{currentLang.comingSoon}</div>
          ) : (
            <div className="news-mag-grid">
              {filteredNews.slice(0, 4).map((item) => (
                <HomeNewsCard key={item.slug} item={item} />
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Blog section */}
      <div style={{ background: "#FFFFFF", padding: "60px 0", width: "100%", borderTop: "1px solid #EDECE5" }}>
        <div className="blog-section-inner">

          {/* Section header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A", margin: 0 }}>
              {activeLang === "KO" ? "가이드" : "Guides"}
            </h2>
            <Link href="/blog" style={{ fontSize: "13px", color: "#1A1A1A", textDecoration: "none", fontWeight: 500 }}>
              {activeLang === "KO" ? "전체 보기" : "View all"}
            </Link>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 2rem", color: "#B4B2A9", fontSize: "15px" }}>
              {currentLang.comingSoon}
            </div>
          ) : (
            <div className="blog-home-grid">
              {filtered.slice(0, 4).map((post, i) => (
                <div key={post.slug} className={i === 3 ? "blog-home-card-4" : ""}>
                  <BlogGridCard post={post} index={i} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Tools banner */}
      <div style={{ background: "#fdfdfb", borderTop: "1px solid #edeae0", padding: "3rem 0" }}>
        <div className="news-home-wrap">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "1.5rem" }}>
            <h2 style={{ fontFamily: "var(--font-newsreader)", fontSize: "24px", fontWeight: 400, color: "#26261f", margin: 0 }}>
              {activeLang === "KO" ? "무료 도구" : "Free Tools"}
            </h2>
            <Link href="/tools" style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.1em", color: "#84a300", textDecoration: "none" }}>
              {activeLang === "KO" ? "전체 보기 →" : "All tools →"}
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "14px" }}>
            <Link
              href={activeLang === "KO" ? "/tools/stamp-duty-calculator-ko" : "/tools/stamp-duty-calculator"}
              className="home-tool-card"
            >
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", color: "#84a300", textTransform: "uppercase", marginBottom: "6px" }}>
                  {activeLang === "KO" ? "스탬프 듀티" : "Stamp Duty"}
                </div>
                <div style={{ fontFamily: "var(--font-newsreader)", fontSize: "19px", color: "#26261f", lineHeight: 1.3, marginBottom: "6px" }}>
                  {activeLang === "KO" ? "스탬프 듀티 계산기" : "Stamp Duty Calculator"}
                </div>
                <div style={{ fontSize: "13px", color: "#6b6963", lineHeight: 1.6 }}>
                  {activeLang === "KO" ? "전 주 차량 구매세 즉시 계산" : "Instant estimate for all Australian states"}
                </div>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#84a300", flexShrink: 0 }}>→</div>
            </Link>
            <Link href="/tools/rego-calculator" className="home-tool-card">
              <div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: "10px", letterSpacing: "0.15em", color: "#84a300", textTransform: "uppercase", marginBottom: "6px" }}>
                  {activeLang === "KO" ? "레고" : "Registration"}
                </div>
                <div style={{ fontFamily: "var(--font-newsreader)", fontSize: "19px", color: "#26261f", lineHeight: 1.3, marginBottom: "6px" }}>
                  {activeLang === "KO" ? "레고 계산기" : "Rego Calculator"}
                </div>
                <div style={{ fontSize: "13px", color: "#6b6963", lineHeight: 1.6 }}>
                  {activeLang === "KO" ? "전 주 연간 레고 비용 즉시 계산" : "Annual rego estimate for all Australian states"}
                </div>
              </div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "13px", color: "#84a300", flexShrink: 0 }}>→</div>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
