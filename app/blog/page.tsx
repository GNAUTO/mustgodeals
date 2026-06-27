"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BLOG_POSTS } from "../data/posts";
import PostCard from "../components/posts/PostCard";

const LANGS = [
  { label: "EN",   code: "EN", comingSoon: "Articles coming soon." },
  { label: "한국어", code: "KO", comingSoon: "준비중입니다." },
  { label: "中文",  code: "ZH", comingSoon: "敬请期待。" },
];

const PER_PAGE = 9;

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, "...", total];
  if (current >= total - 2) return [1, "...", total - 2, total - 1, total];
  return [1, "...", current - 1, current, current + 1, "...", total];
}

export default function BlogPage() {
  const [activeLang, setActiveLang] = useState("EN");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = BLOG_POSTS
    .filter((p) => p.lang === activeLang)
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
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
            <>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
                {paginated.map((post) => (
                  <PostCard key={post.slug} type="blog" item={post} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "6px", marginTop: "3rem" }}>
                  {/* Prev */}
                  <button
                    className="page-btn arrow"
                    onClick={() => goTo(currentPage - 1)}
                    disabled={currentPage === 1}
                    aria-label="Previous page"
                  >
                    ‹
                  </button>

                  {/* Page numbers */}
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

                  {/* Next */}
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
