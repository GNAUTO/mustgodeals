"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BLOG_POSTS, type BlogPost } from "../data/posts";

const LANGS = [
  { label: "EN", code: "EN", comingSoon: "Articles coming soon." },
  { label: "KO", code: "KO", comingSoon: "준비중입니다." },
];

const PER_PAGE = 8;

function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  if (current <= 3) return [1, 2, 3, "...", total];
  if (current >= total - 2) return [1, "...", total - 2, total - 1, total];
  return [1, "...", current - 1, current, current + 1, "...", total];
}

function Tag({ label }: { label: string }) {
  return (
    <span style={{
      fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em",
      textTransform: "uppercase" as const, color: "#7a8a00",
    }}>
      {label}
    </span>
  );
}

function Meta({ date, readTime }: { date: string; readTime: string }) {
  return (
    <span style={{ fontSize: "11px", color: "rgba(0,0,0,0.3)" }}>
      {date}{readTime ? `  ·  ${readTime}` : ""}
    </span>
  );
}

function FeaturedCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div style={{
        width: "100%", aspectRatio: "16/9", borderRadius: "4px",
        background: "#1a1a1a", marginBottom: "14px",
        display: "flex", flexDirection: "column",
        justifyContent: "flex-end", padding: "20px 22px",
        boxSizing: "border-box", overflow: "hidden", position: "relative",
      }} className="blog-featured-img-card">
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, #2a2a2a 0%, #111 100%)",
        }} />
        <div style={{ position: "relative" }}>
          <div style={{
            fontSize: "10px", fontWeight: 500, letterSpacing: "0.1em",
            textTransform: "uppercase" as const, color: "#CCDA47", marginBottom: "8px",
          }}>
            {post.category}
          </div>
          <div style={{
            fontSize: "20px", fontWeight: 600, color: "white",
            lineHeight: 1.25, letterSpacing: "-0.3px",
          }}>
            {post.title}
          </div>
        </div>
      </div>
      <div style={{ marginBottom: "6px" }}>
        <Tag label={post.category} />
      </div>
      <h2 style={{
        fontSize: "19px", fontWeight: 600, color: "#111",
        lineHeight: 1.3, letterSpacing: "-0.3px", margin: "0 0 8px",
      }}>
        {post.title}
      </h2>
      <p style={{
        fontSize: "12px", color: "rgba(0,0,0,0.5)", lineHeight: 1.6,
        margin: "0 0 10px",
      }}>
        {post.excerpt}
      </p>
      <Meta date={post.date} readTime={post.readTime} />
    </Link>
  );
}

function NumberedCard({ post, num }: { post: BlogPost; num: string }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "flex", gap: "14px", alignItems: "flex-start" }}>
      <span className="blog-list-number" style={{
        fontSize: "18px", fontWeight: 300, color: "rgba(0,0,0,0.1)",
        lineHeight: 1, flexShrink: 0, minWidth: "28px", paddingTop: "2px",
      }}>
        {num}
      </span>
      <div>
        <div style={{ marginBottom: "5px" }}>
          <Tag label={post.category} />
        </div>
        <h3 style={{
          fontSize: "14px", fontWeight: 600, color: "#111",
          lineHeight: 1.35, letterSpacing: "-0.2px", margin: "0 0 6px",
        }}>
          {post.title}
        </h3>
        <Meta date={post.date} readTime={post.readTime} />
      </div>
    </Link>
  );
}

function GridCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <div style={{ marginBottom: "5px" }}>
        <Tag label={post.category} />
      </div>
      <h3 style={{
        fontSize: "14px", fontWeight: 600, color: "#111",
        lineHeight: 1.35, letterSpacing: "-0.2px", margin: "0 0 8px",
      }}>
        {post.title}
      </h3>
      <Meta date={post.date} readTime={post.readTime} />
    </Link>
  );
}

export default function BlogPageClient() {
  const [activeLang, setActiveLang] = useState("EN");
  const [currentPage, setCurrentPage] = useState(1);

  const filtered = BLOG_POSTS
    .filter((p) => p.lang === activeLang)
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  const currentLang = LANGS.find((l) => l.code === activeLang)!;

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const pageSlice = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE);

  const featured = currentPage === 1 ? (pageSlice[0] ?? null) : null;
  const listItems = featured ? pageSlice.slice(1) : pageSlice;
  const numbered = listItems.slice(0, 4);
  const gridItems = listItems.slice(4);

  function handleLangChange(lang: string) {
    setActiveLang(lang);
    setCurrentPage(1);
  }

  function goTo(page: number) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA", display: "flex", flexDirection: "column" }}>
      <Navbar langTabs={{ activeLang, onLangChange: handleLangChange }} />

      <div style={{ flex: 1 }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "2rem 2rem 4rem" }}>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 2rem", color: "#aaa", fontSize: "15px" }}>
              {currentLang.comingSoon}
            </div>
          ) : (
            <>
              {featured && (
                <>
                  <div className="blog-main-grid">
                    <div className="blog-featured-col">
                      <FeaturedCard post={featured} />
                    </div>
                    <div className="blog-numbered-col">
                      {numbered.map((post, i) => (
                        <div key={post.slug}>
                          <div style={{ padding: "16px 0" }}>
                            <NumberedCard post={post} num={String(i + 1).padStart(2, "0")} />
                          </div>
                          {i < numbered.length - 1 && (
                            <div style={{ height: "0.5px", background: "rgba(0,0,0,0.08)" }} />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  {gridItems.length > 0 && (
                    <div className="blog-bottom-grid">
                      {gridItems.map((post) => (
                        <div key={post.slug} className="blog-bottom-cell">
                          <GridCard post={post} />
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}

              {!featured && (
                <div style={{ borderTop: "0.5px solid rgba(0,0,0,0.1)" }}>
                  {pageSlice.map((post, i) => (
                    <div key={post.slug}>
                      <div style={{ padding: "16px 0" }}>
                        <NumberedCard post={post} num={String(i + 1).padStart(2, "0")} />
                      </div>
                      {i < pageSlice.length - 1 && (
                        <div style={{ height: "0.5px", background: "rgba(0,0,0,0.08)" }} />
                      )}
                    </div>
                  ))}
                </div>
              )}

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
