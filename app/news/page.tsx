"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NEWS_ITEMS } from "../data/posts";

const LANGS = [
  { label: "EN",   code: "EN", comingSoon: "No news in this language yet." },
  { label: "한국어", code: "KO", comingSoon: "준비중입니다." },
  { label: "中文",  code: "ZH", comingSoon: "敬请期待。" },
];

export default function NewsPage() {
  const [activeLang, setActiveLang] = useState("EN");
  const filtered = NEWS_ITEMS.filter((n) => n.lang === activeLang);
  const currentLang = LANGS.find((l) => l.code === activeLang)!;

  return (
    <div style={{ minHeight: "100vh", background: "#F5F5F0", display: "flex", flexDirection: "column" }}>
      <Navbar langTabs={{ activeLang, onLangChange: setActiveLang }} />

      {/* Hero */}
      <div style={{ background: "#1A1A1A", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "6px",
            background: "rgba(204,218,71,0.15)", border: "1px solid #CCDA47",
            color: "#CCDA47", fontSize: "11px", padding: "4px 14px",
            borderRadius: "20px", marginBottom: "1rem", letterSpacing: "0.5px",
          }}>
            Latest News
          </div>
          <h1 style={{ color: "white", fontWeight: 500, letterSpacing: "-0.5px", lineHeight: 1.2, marginBottom: "0.5rem" }}>
            Automotive News
          </h1>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px" }}>
            New model launches, pricing updates, and industry developments for Australian buyers
          </p>
        </div>
      </div>

      {/* Grid */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "5rem 0", color: "#aaa", fontSize: "15px" }}>
            {currentLang.comingSoon}
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {filtered.map((item) => (
              <Link
                key={item.slug}
                href={`/news/${item.slug}`}
                className="news-card"
                style={{ textDecoration: "none" }}
              >
                <div style={{ background: "white", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", overflow: "hidden", height: "100%" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={item.image}
                    alt={item.title}
                    style={{ width: "100%", height: "200px", objectFit: "cover", display: "block" }}
                  />
                  <div style={{ padding: "1.25rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.6rem" }}>
                      <span style={{
                        fontSize: "10px", color: "#8A9A10", fontWeight: 600,
                        letterSpacing: "0.8px", background: "rgba(204,218,71,0.12)",
                        padding: "2px 10px", borderRadius: "10px",
                      }}>
                        {item.category}
                      </span>
                      <span style={{ fontSize: "11px", color: "#999" }}>{item.date}</span>
                    </div>
                    <h3 style={{ fontSize: "15px", color: "#1A1A1A", lineHeight: 1.4, marginBottom: "0.6rem" }}>
                      {item.title}
                    </h3>
                    <p style={{ fontSize: "13px", color: "#777", lineHeight: 1.6, marginBottom: "1rem" }}>
                      {item.excerpt}
                    </p>
                    <span style={{ fontSize: "11px", color: "#aaa" }}>{item.author}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
