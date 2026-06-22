"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LANGS = [
  { label: "EN",   code: "EN" },
  { label: "한국어", code: "KO" },
  { label: "中文",  code: "ZH" },
];

type LangTabsProps = {
  activeLang: string;
  onLangChange: (lang: string) => void;
};

export default function Navbar({ langTabs }: { langTabs?: LangTabsProps }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkColor = (key: string) => {
    if (key === "blog"     && pathname.startsWith("/blog"))     return "#CCDA47";
    if (key === "news"     && pathname.startsWith("/news"))     return "#CCDA47";
    if (key === "listings" && pathname.startsWith("/listings")) return "#CCDA47";
    return "rgba(255,255,255,0.65)";
  };

  return (
    <nav style={{ background: "#1A1A1A" }}>

      {/* ── Row 1 ── */}
      <div style={{ padding: "0 2rem", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>

        {/* Logo */}
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none", flexShrink: 0 }}>
          <span style={{ fontSize: "20px", fontWeight: 500, color: "white", letterSpacing: "-0.5px" }}>
            must<span style={{ color: "#CCDA47" }}>go</span>
          </span>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "2px", marginTop: "2px" }}>DEALS</span>
        </Link>

        {/* Desktop right: lang tabs + nav links + Get Alerts */}
        <div className="navbar-desktop-right">
          {langTabs && (
            <div className="navbar-lang-tabs">
              {LANGS.map((l) => (
                <button
                  key={l.code}
                  onClick={() => langTabs.onLangChange(l.code)}
                  className="navbar-lang-btn"
                  style={{
                    background: "none", border: "none", padding: 0,
                    color: langTabs.activeLang === l.code ? "#CCDA47" : "rgba(255,255,255,0.4)",
                    fontWeight: langTabs.activeLang === l.code ? 600 : 400,
                    cursor: "pointer", fontFamily: "inherit",
                  }}
                >
                  {l.label}
                </button>
              ))}
            </div>
          )}
          <div className="navbar-desktop-links">
            <Link href="/blog"         style={{ color: linkColor("blog"),     fontSize: "13px", textDecoration: "none" }}>Blog</Link>
            <Link href="/news"         style={{ color: linkColor("news"),     fontSize: "13px", textDecoration: "none" }}>News</Link>
            <Link href="/coming-soon"  style={{ color: linkColor("listings"), fontSize: "13px", textDecoration: "none" }}>Listings</Link>
          </div>
          <Link href="/coming-soon" style={{ background: "#CCDA47", color: "#1A1A1A", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>
            Get Alerts
          </Link>
        </div>

        {/* Mobile: hamburger only */}
        <button
          className="navbar-hamburger"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line x1="4" y1="4" x2="18" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="18" y1="4" x2="4" y2="18" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
              <line x1="3" y1="6"  x2="19" y2="6"  stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="11" x2="19" y2="11" stroke="white" strokeWidth="2" strokeLinecap="round" />
              <line x1="3" y1="16" x2="19" y2="16" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          )}
        </button>
      </div>

      {/* ── Row 2 (mobile only) — lang tabs + Get Alerts ── */}
      <div className="navbar-mobile-row2">
        <div className="navbar-mobile-lang">
          {langTabs ? (
            LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => langTabs.onLangChange(l.code)}
                className="navbar-mobile-lang-btn"
                style={{
                  color: langTabs.activeLang === l.code ? "#CCDA47" : "rgba(255,255,255,0.5)",
                  fontWeight: langTabs.activeLang === l.code ? 600 : 400,
                }}
              >
                {l.label}
              </button>
            ))
          ) : (
            /* 언어탭 없는 페이지(아티클 등)엔 빈 칸 */
            <span />
          )}
        </div>
        <Link href="/coming-soon" style={{ background: "#CCDA47", color: "#1A1A1A", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 500, textDecoration: "none", whiteSpace: "nowrap" }}>
          Get Alerts
        </Link>
      </div>

      {/* ── Mobile dropdown — Blog / News / Listings ── */}
      {menuOpen && (
        <div className="navbar-mobile-dropdown">
          <Link href="/blog"        onClick={() => setMenuOpen(false)} style={{ color: linkColor("blog"),     fontSize: "15px", textDecoration: "none", padding: "14px 2rem", borderTop: "1px solid rgba(255,255,255,0.07)", display: "block" }}>Blog</Link>
          <Link href="/news"        onClick={() => setMenuOpen(false)} style={{ color: linkColor("news"),     fontSize: "15px", textDecoration: "none", padding: "14px 2rem", borderTop: "1px solid rgba(255,255,255,0.07)", display: "block" }}>News</Link>
          <Link href="/coming-soon" onClick={() => setMenuOpen(false)} style={{ color: linkColor("listings"), fontSize: "15px", textDecoration: "none", padding: "14px 2rem", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "block" }}>Listings</Link>
        </div>
      )}

    </nav>
  );
}
