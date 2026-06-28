"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LANGS = [
  { label: "EN", code: "EN" },
  { label: "KO", code: "KO" },
];

type LangTabsProps = {
  activeLang: string;
  onLangChange: (lang: string) => void;
};

export default function Navbar({ langTabs }: { langTabs?: LangTabsProps }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const linkColor = (key: string, mobile = false) => {
    if (key === "blog"     && pathname.startsWith("/blog"))     return "#CCDA47";
    if (key === "news"     && pathname.startsWith("/news"))     return "#CCDA47";
    if (key === "listings" && pathname.startsWith("/listings")) return "#CCDA47";
    return mobile ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.5)";
  };

  return (
    <nav style={{ background: "#1A1A1A" }}>

      {/* ── Row 1 ── */}
      <div style={{ padding: "0 2rem", height: "52px", display: "flex", alignItems: "center" }}>

        {/* Left: Logo */}
        <div style={{ flex: 1 }}>
          <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
            <span style={{ fontSize: "20px", fontWeight: 500, color: "white", letterSpacing: "-0.5px" }}>
              must<span style={{ color: "#CCDA47" }}>go</span>
            </span>
            <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "2px", marginTop: "2px" }}>DEALS</span>
          </Link>
        </div>

        {/* Center: Nav links (desktop only) */}
        <div className="navbar-center-links">
          <Link href="/listings" style={{ color: linkColor("listings"), fontSize: "13px", textDecoration: "none", padding: "4px 10px" }}>Listings</Link>
          <Link href="/news"     style={{ color: linkColor("news"),     fontSize: "13px", textDecoration: "none", padding: "4px 10px" }}>News</Link>
          <Link href="/blog"     style={{ color: linkColor("blog"),     fontSize: "13px", textDecoration: "none", padding: "4px 10px" }}>Blog</Link>
        </div>

        {/* Right: Lang tabs (desktop) + Hamburger (mobile) */}
        <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center" }}>
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
          {/* Mobile: hamburger */}
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
      </div>

      {/* ── Mobile dropdown ── */}
      {menuOpen && (
        <div className="navbar-mobile-dropdown">
          {langTabs && (
            <>
              <div style={{ display: "flex", padding: "10px 1.5rem" }}>
                {LANGS.map((l) => (
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
                ))}
              </div>
              <div style={{ borderTop: "0.5px solid rgba(255,255,255,0.08)" }} />
            </>
          )}
          <Link href="/listings" onClick={() => setMenuOpen(false)} style={{ color: linkColor("listings", true), fontSize: "15px", textDecoration: "none", padding: "14px 2rem", borderTop: "1px solid rgba(255,255,255,0.07)", display: "block" }}>Listings</Link>
          <Link href="/news"     onClick={() => setMenuOpen(false)} style={{ color: linkColor("news",     true), fontSize: "15px", textDecoration: "none", padding: "14px 2rem", borderTop: "1px solid rgba(255,255,255,0.07)", display: "block" }}>News</Link>
          <Link href="/blog"     onClick={() => setMenuOpen(false)} style={{ color: linkColor("blog",     true), fontSize: "15px", textDecoration: "none", padding: "14px 2rem", borderTop: "1px solid rgba(255,255,255,0.07)", borderBottom: "1px solid rgba(255,255,255,0.07)", display: "block" }}>Blog</Link>
        </div>
      )}

    </nav>
  );
}
