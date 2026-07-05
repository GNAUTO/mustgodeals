"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { BLOG_POSTS, NEWS_ITEMS } from "./data/posts";
import { LISTINGS } from "./data/listings";
import { JsonLd } from "./components/JsonLd";

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


export default function Home() {
  const [activeLang, setActiveLang] = useState("EN");

  const filtered = BLOG_POSTS
    .filter((p) => p.lang === activeLang)
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  const filteredNews = NEWS_ITEMS.filter((n) => n.lang === activeLang);
  const currentLang = LANGS.find((l) => l.code === activeLang)!;

  const tickerItems = LISTINGS
    .filter((l) => l.status === "available")
    .map((l) => ({
      save: `SAVE $${l.savingsAmount.toLocaleString("en-AU")}`,
      vehicle: `on ${l.name}`,
    }));

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", display: "flex", flexDirection: "column" }}>
      <JsonLd data={ORG_SCHEMA} />
      <Navbar langTabs={{ activeLang, onLangChange: setActiveLang }} />

      {/* Hero — light theme */}
      <div className="hero-section" style={{ background: "#FAFAFA", textAlign: "center" }}>
        <h1 style={{ color: "#1A1A1A", fontSize: "clamp(2rem, 8vw, 4rem)", fontWeight: 600, lineHeight: 1.1, marginBottom: "1.25rem", letterSpacing: "-0.5px" }}>
          Cars dealers <span style={{ color: "#CCDA47" }}>must move</span><br />
          Savings you didn&rsquo;t expect
        </h1>
        <p style={{ color: "#6B6B6B", fontSize: "clamp(0.875rem, 2vw, 1rem)", maxWidth: "420px", margin: "0 auto 2rem" }}>
          Dealer clearance vehicles. Real discounts. Updated regularly.
        </p>
        <div className="hero-btns">
          <Link href="/listings" style={{ background: "#CCDA47", color: "#1A1A1A", padding: "12px 28px", borderRadius: "8px", fontSize: "14px", fontWeight: 600, textDecoration: "none" }}>
            Browse Demo Cars
          </Link>
          <Link href="/blog" style={{ background: "transparent", color: "#1A1A1A", padding: "12px 28px", borderRadius: "8px", fontSize: "14px", fontWeight: 500, border: "1.5px solid #1A1A1A", textDecoration: "none" }}>
            Read buying guides
          </Link>
        </div>

        {/* Deal ticker */}
        {tickerItems.length > 0 && (
          <div style={{ marginTop: "2rem" }} aria-hidden="true">
            <div className="deal-ticker">
              <div className="deal-ticker-track">
                {[...tickerItems, ...tickerItems].map((item, i) => (
                  <span key={i} style={{ display: "inline-flex", alignItems: "center" }}>
                    <span style={{ color: "#CCDA47", fontWeight: 700, fontSize: "12px", letterSpacing: "0.02em" }}>
                      {item.save}
                    </span>
                    <span style={{ color: "#6B6B6B", fontSize: "12px" }}>
                      &nbsp;{item.vehicle}
                    </span>
                    <span style={{ color: "rgba(0,0,0,0.18)", fontSize: "12px", margin: "0 20px" }}>·</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Demo Cars */}
      <div style={{ background: "#FAFAFA", padding: "2.5rem 0" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "16px", fontWeight: 600, color: "#1A1A1A", letterSpacing: "0.06em", textTransform: "uppercase" }}>Demo Cars Available Now</h2>
            <Link href="/listings" style={{ fontSize: "13px", color: "#6B6B6B", textDecoration: "none", fontWeight: 500 }}>View all listings →</Link>
          </div>

          <div className="demo-grid">
            {LISTINGS.map((listing) => {
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

              if (listing.status === "sold") {
                return (
                  <div key={listing.slug} style={{ background: "#F3F3F3", borderRadius: "8px", overflow: "hidden", pointerEvents: "none", cursor: "default", opacity: 0.4, boxShadow: "0 1px 3px rgba(0,0,0,0.06)" }}>
                    <div style={{ height: "120px", background: "#E8E8E8", display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
                      <svg width="64" height="38" viewBox="0 0 64 38" fill="none" style={{ color: "#D0D0D0" }}>
                        <path d="M8 24 L18 10 C19.5 8 21.5 7 23.5 7 L40.5 7 C42.5 7 44.5 8 46 10 L56 24 Z" fill="currentColor"/>
                        <rect x="5" y="24" width="54" height="9" rx="3" fill="currentColor"/>
                        <circle cx="16" cy="33" r="5" fill="#E8E8E8" stroke="currentColor" strokeWidth="2"/>
                        <circle cx="48" cy="33" r="5" fill="#E8E8E8" stroke="currentColor" strokeWidth="2"/>
                      </svg>
                      <div style={{ position: "absolute", top: "10px", left: "10px", background: "#FEE2E2", color: "#DC2626", border: "0.5px solid #FECACA", fontSize: "9px", fontWeight: 700, letterSpacing: "0.8px", padding: "3px 8px", borderRadius: "4px" }}>SOLD</div>
                    </div>
                    <div style={{ padding: "0.9rem 0.9rem 1rem" }}>
                      <div style={{ background: "#DCDCDC", height: "10px", borderRadius: "4px", width: "70%", marginBottom: "8px" }} />
                      <div style={{ background: "#E4E4E4", height: "8px", borderRadius: "4px", width: "50%", marginBottom: "12px" }} />
                      <button style={{ width: "100%", padding: "8px", background: "#E8E8E8", color: "#AAAAAA", border: "none", borderRadius: "6px", fontSize: "11px", fontWeight: 500, letterSpacing: "0.3px", cursor: "default" }}>No longer available</button>
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
      <div style={{ background: "#FAFAFA", padding: "2.5rem 0", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 500, color: "#1A1A1A" }}>Latest News</h2>
            <Link href="/news" style={{ fontSize: "13px", color: "#6B6B6B", textDecoration: "none", fontWeight: 500 }}>All news →</Link>
          </div>
          {filteredNews.length === 0 ? (
            <div style={{ textAlign: "center", padding: "2rem", color: "#AAAAAA", fontSize: "14px" }}>{currentLang.comingSoon}</div>
          ) : (
            <div className="news-mag-grid">
              {filteredNews.slice(0, 4).map((item) => (
                <Link key={item.slug} href={`/news/${item.slug}`} className="news-mag-card">
                  <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(transparent 45%, rgba(0,0,0,0.82))", pointerEvents: "none" }} />
                  <div style={{ position: "absolute", top: "16px", left: "16px", fontSize: "10px", fontWeight: 700, color: "#CCDA47", letterSpacing: "0.8px" }}>
                    {item.category}
                  </div>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px 18px" }}>
                    <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginBottom: "6px" }}>{item.date}</div>
                    <div className="news-mag-title" style={{ fontWeight: 700, color: "#ffffff", lineHeight: 1.3 }}>
                      {item.title}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Blog section */}
      <div style={{ background: "#FAFAFA", padding: "60px 0", width: "100%", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="blog-section-inner">

          {/* Section header */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 500, color: "#1A1A1A" }}>Guides &amp; Insights</h2>
            <Link href="/blog" style={{ fontSize: "13px", color: "#6B6B6B", textDecoration: "none", fontWeight: 500 }}>View all articles →</Link>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem 2rem", color: "#AAAAAA", fontSize: "15px" }}>
              {currentLang.comingSoon}
            </div>
          ) : (
            <>
              {/* Main grid */}
              <div className="blog-main-grid">
                {/* Left: featured */}
                <div className="blog-featured-col">
                  {filtered[0] && (
                    <Link href={`/blog/${filtered[0].slug}`} style={{ textDecoration: "none", display: "block" }}>
                      <div className="blog-featured-img-card" style={{ width: "100%", aspectRatio: "16/9", borderRadius: "4px", background: "linear-gradient(135deg, #2a2a2a 0%, #111 100%)", marginBottom: "14px", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "18px 20px", boxSizing: "border-box", overflow: "hidden" }}>
                        <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#CCDA47", marginBottom: "6px" }}>{filtered[0].category}</div>
                        <div style={{ fontSize: "17px", fontWeight: 600, color: "white", lineHeight: 1.25 }}>{filtered[0].title}</div>
                      </div>
                      <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#7a8a00", marginBottom: "6px" }}>{filtered[0].category}</div>
                      <h2 style={{ fontSize: "19px", fontWeight: 600, color: "#111", lineHeight: 1.25, margin: "0 0 8px" }}>{filtered[0].title}</h2>
                      <p style={{ fontSize: "12px", color: "#6B6B6B", lineHeight: 1.6, margin: "0 0 10px" }}>{filtered[0].excerpt}</p>
                      <span style={{ fontSize: "11px", color: "#AAAAAA" }}>{filtered[0].date}&nbsp;&nbsp;·&nbsp;&nbsp;{filtered[0].readTime}</span>
                    </Link>
                  )}
                </div>

                {/* Right: numbered list 01-04 */}
                <div className="blog-numbered-col">
                  {filtered.slice(1, 5).map((post, i) => (
                    <div key={post.slug} className={i === 3 ? "blog-list-item-4th" : ""} style={{ borderBottom: i < Math.min(filtered.slice(1, 5).length, 4) - 1 ? "0.5px solid rgba(0,0,0,0.07)" : "none" }}>
                      <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "flex", gap: "12px", alignItems: "flex-start", padding: "14px 0" }}>
                        <span className="blog-list-number" style={{ fontSize: "18px", fontWeight: 300, color: "rgba(0,0,0,0.1)", lineHeight: 1, flexShrink: 0, minWidth: "26px", paddingTop: "1px" }}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <div>
                          <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#7a8a00", marginBottom: "4px" }}>{post.category}</div>
                          <h3 style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.35, margin: "0 0 5px" }}>{post.title}</h3>
                          <span style={{ fontSize: "11px", color: "#AAAAAA" }}>{post.date}&nbsp;&nbsp;·&nbsp;&nbsp;{post.readTime}</span>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom 3-col grid (posts 6-8) */}
              {filtered.slice(5, 8).length > 0 && (
                <div className="blog-bottom-grid blog-home-bottom">
                  {filtered.slice(5, 8).map((post) => (
                    <div key={post.slug} className="blog-bottom-cell">
                      <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
                        <div style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#7a8a00", marginBottom: "5px" }}>{post.category}</div>
                        <h3 style={{ fontSize: "12px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.35, margin: "0 0 6px" }}>{post.title}</h3>
                        <span style={{ fontSize: "11px", color: "#AAAAAA" }}>{post.date}&nbsp;&nbsp;·&nbsp;&nbsp;{post.readTime}</span>
                      </Link>
                    </div>
                  ))}
                </div>
              )}

            </>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
