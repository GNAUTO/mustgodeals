"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BLOG_POSTS } from "../data/posts";

const LANGS = [
  { label: "EN",   code: "EN", comingSoon: "Articles coming soon." },
  { label: "한국어", code: "KO", comingSoon: "준비중입니다." },
  { label: "中文",  code: "ZH", comingSoon: "敬请期待。" },
];

export default function BlogPage() {
  const [activeLang, setActiveLang] = useState("EN");
  const filtered = BLOG_POSTS
    .filter((p) => p.lang === activeLang)
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  const currentLang = LANGS.find((l) => l.code === activeLang)!;

  return (
    <div style={{ minHeight: "100vh", background: "#F5F5F0", display: "flex", flexDirection: "column" }}>
      <Navbar langTabs={{ activeLang, onLangChange: setActiveLang }} />

      {/* Hero */}
      <div style={{ background: "#1A1A1A", padding: "2rem 2rem 2.25rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center",
            background: "rgba(204,218,71,0.15)", border: "1px solid #CCDA47",
            color: "#CCDA47", fontSize: "11px", padding: "4px 14px",
            borderRadius: "20px", marginBottom: "1rem", letterSpacing: "0.5px",
          }}>
            Insider Guides
          </div>
          <h1 style={{ color: "white", fontWeight: 500, letterSpacing: "-0.5px", lineHeight: 1.2, marginBottom: "0.5rem" }}>
            Buying Guides
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "14px" }}>
            Insider knowledge, negotiation tips, and timing strategies for Australian car buyers
          </p>
        </div>
      </div>

      {/* Posts */}
      <div style={{ flex: 1 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 2rem" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 2rem", color: "#aaa", fontSize: "15px" }}>
              {currentLang.comingSoon}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
              {filtered.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
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

      <Footer />
    </div>
  );
}
