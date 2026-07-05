"use client";

import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { NEWS_ITEMS } from "../data/posts";
import type { NewsItem } from "../data/posts";

const LANGS = [
  { label: "EN", code: "EN", comingSoon: "No news in this language yet." },
  { label: "KO", code: "KO", comingSoon: "준비중입니다." },
];

const PER_PAGE = 9;

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, "...", total];
  if (current >= total - 2) return [1, "...", total - 2, total - 1, total];
  return [1, "...", current - 1, current, current + 1, "...", total];
}

function MagCard({ item, featured }: { item: NewsItem; featured?: boolean }) {
  return (
    <Link
      href={`/news/${item.slug}`}
      className={`news-mag-card${featured ? " news-mag-card--featured" : ""}`}
    >
      <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />

      <div style={{
        position: "absolute", inset: 0,
        background: "linear-gradient(transparent 45%, rgba(0,0,0,0.82))",
        pointerEvents: "none",
      }} />

      <div style={{
        position: "absolute", top: "16px", left: "16px",
        fontSize: "10px", fontWeight: 700, color: "#CCDA47",
        letterSpacing: "0.8px",
      }}>
        {item.category}
      </div>

      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "20px 18px 18px" }}>
        <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.5)", marginBottom: "6px" }}>
          {item.date}
        </div>
        <div className="news-mag-title" style={{ fontWeight: 700, color: "#ffffff", lineHeight: 1.3 }}>
          {item.title}
        </div>
      </div>
    </Link>
  );
}

export default function NewsPageClient() {
  const [activeLang, setActiveLang] = useState("EN");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = NEWS_ITEMS.filter((n) => n.lang === activeLang);
  const currentLang = LANGS.find((l) => l.code === activeLang)!;
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paginated = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  function handleLangChange(lang: string) {
    setActiveLang(lang);
    setCurrentPage(1);
  }

  function goTo(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div style={{ minHeight: "100vh", background: "#F5F5F0", display: "flex", flexDirection: "column" }}>
      <Navbar langTabs={{ activeLang, onLangChange: handleLangChange }} />

      <div style={{ background: "#1A1A1A", padding: "2rem 2rem 2.25rem" }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto" }}>
          <h1 style={{ color: "white", fontSize: "24px", fontWeight: 500, letterSpacing: "-0.3px", lineHeight: 1.2 }}>
            Latest news
          </h1>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "2rem 2rem 3rem" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 0", color: "#aaa", fontSize: "15px" }}>
              {currentLang.comingSoon}
            </div>
          ) : (
            <>
              <div className="news-mag-grid">
                {paginated.map((item, idx) => (
                  <MagCard key={item.slug} item={item} featured={idx === 0} />
                ))}
              </div>

              {totalPages > 1 && (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", marginTop: "3rem" }}>
                  <button
                    className="page-btn arrow"
                    onClick={() => goTo(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    ‹
                  </button>
                  {getPageNumbers(currentPage, totalPages).map((page, i) =>
                    page === "..." ? (
                      <span key={`ellipsis-${i}`} style={{ color: "#555", fontSize: "13px", padding: "0 4px", lineHeight: "36px" }}>···</span>
                    ) : (
                      <button
                        key={page}
                        className={`page-btn${currentPage === page ? " active" : ""}`}
                        onClick={() => goTo(page as number)}
                      >
                        {page}
                      </button>
                    )
                  )}
                  <button
                    className="page-btn arrow"
                    onClick={() => goTo(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    aria-label="Next page"
                  >
                    ›
                  </button>
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
