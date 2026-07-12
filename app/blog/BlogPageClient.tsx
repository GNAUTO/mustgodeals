"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BlogGridCard, BlogHeroCard } from "../components/posts/BlogCard";
import { BLOG_POSTS } from "../data/posts";

const LANGS = [
  { label: "EN", code: "EN", comingSoon: "Articles coming soon." },
  { label: "KO", code: "KO", comingSoon: "준비중입니다." },
];

const GRID_INITIAL = 9;
const GRID_BATCH = 9;

const SUBTITLE: Record<string, string> = {
  EN: "Guides and insider notes for Australian car buyers",
  KO: "호주 자동차 구매자를 위한 가이드와 정보",
};

export default function BlogPageClient() {
  const [activeLang, setActiveLang] = useState("EN");
  const [showCount, setShowCount] = useState(GRID_INITIAL);

  const filtered = BLOG_POSTS
    .filter((p) => p.lang === activeLang)
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  const currentLang = LANGS.find((l) => l.code === activeLang)!;

  const hero = filtered[0];
  const gridAll = filtered.slice(1);
  const gridShown = gridAll.slice(0, showCount);
  const hasMore = showCount < gridAll.length;

  function handleLangChange(lang: string) {
    setActiveLang(lang);
    setShowCount(GRID_INITIAL);
  }

  return (
    <div style={{ minHeight: "100vh", background: "#FFFFFF", display: "flex", flexDirection: "column" }}>
      <Navbar langTabs={{ activeLang, onLangChange: handleLangChange }} />

      <div style={{ flex: 1 }}>
        <div className="blog-idx-wrap">

          {/* Page header */}
          <div className="blog-idx-header">
            <h1 style={{ fontSize: "clamp(28px, 5vw, 36px)", fontWeight: 500, color: "#1A1A1A", margin: "0 0 8px" }}>
              Blog
            </h1>
            <p style={{ fontSize: "14px", color: "#6B6B65", margin: 0 }}>
              {SUBTITLE[activeLang]}
            </p>
          </div>

          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "5rem 2rem", color: "#B4B2A9", fontSize: "15px" }}>
              {currentLang.comingSoon}
            </div>
          ) : (
            <>
              {/* Hero — single latest post, 2-col layout */}
              {hero && <BlogHeroCard post={hero} index={0} />}

              {/* Divider */}
              <div style={{ height: "1px", background: "#EDECE5", margin: "40px 0" }} />

              {/* 3-col grid */}
              {gridShown.length > 0 && (
                <div className="blog-idx-grid">
                  {gridShown.map((post, i) => (
                    <BlogGridCard key={post.slug} post={post} index={i + 1} />
                  ))}
                </div>
              )}

              {/* Load more */}
              {hasMore && (
                <div style={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}>
                  <button
                    onClick={() => setShowCount((c) => c + GRID_BATCH)}
                    style={{
                      background: "#FFFFFF",
                      border: "1px solid #EDECE5",
                      color: "#1A1A1A",
                      fontSize: "13px",
                      fontWeight: 500,
                      padding: "10px 32px",
                      borderRadius: "100px",
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    Load more
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
