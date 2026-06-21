"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const NEWS = [
  {
    slug: "maserati-grecale-2027-australia",
    title: "Maserati expands Grecale SUV lineup for 2027 Australian market",
    excerpt:
      "Maserati's Grecale receives wider V6 availability and an improved Folgore EV with better range and faster charging for 2027, arriving in Australia early next year.",
    category: "NEWS",
    date: "June 21, 2026",
    author: "MustGoDeals Editorial",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg",
    lang: "EN",
  },
  {
    slug: "maserati-grecale-2027-australia-ko",
    title: "마세라티, 2027 그레칼레 SUV 라인업 호주 시장에 확대 출시",
    excerpt:
      "마세라티 그레칼레가 V6 엔진 확대 적용과 폴고레 EV 성능 개선으로 2027년형 업데이트를 받아, 2027년 초 호주 시장에 출시될 예정이다.",
    category: "뉴스",
    date: "2026년 6월 21일",
    author: "MustGoDeals 편집팀",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg",
    lang: "KO",
  },
  {
    slug: "porsche-taycan-e-shift-2027",
    title: "Porsche Taycan gets simulated gear shifts — and it's more interesting than it sounds",
    excerpt:
      "The 2027 Taycan's E-Shift system simulates an 8-speed DCT with paddle shifters and a virtual rev limiter. Here's what it is, how to get it, and what else changes for MY27.",
    category: "NEWS",
    date: "June 18, 2026",
    author: "MustGoDeals Editorial",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/s26_0407.jpg",
    lang: "EN",
  },
  {
    slug: "porsche-taycan-e-shift-2027-ko",
    title: "포르쉐 타이칸, 가상 변속기를 달다 — 전기차가 기어를 흉내 내는 이유",
    excerpt:
      "2027년형 타이칸의 E-Shift 시스템은 패들 시프터와 가상 레브 리미터를 갖춘 8단 DCT를 시뮬레이션한다. 작동 원리와 MY27의 주요 변경사항을 정리했다.",
    category: "뉴스",
    date: "2026년 6월 18일",
    author: "MustGoDeals 편집팀",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/s26_0407.jpg",
    lang: "KO",
  },
];

const LANGS = [
  { label: "EN",   code: "EN", comingSoon: "No news in this language yet." },
  { label: "한국어", code: "KO", comingSoon: "준비중입니다." },
  { label: "中文",  code: "ZH", comingSoon: "敬请期待。" },
];

export default function NewsPage() {
  const [activeLang, setActiveLang] = useState("EN");
  const filtered = NEWS.filter((n) => n.lang === activeLang);
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
      <div style={{ flex: 1 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "2.5rem 2rem" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 2rem", color: "#aaa", fontSize: "15px" }}>
              {currentLang.comingSoon}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "20px" }}>
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
      </div>

      <Footer />
    </div>
  );
}
