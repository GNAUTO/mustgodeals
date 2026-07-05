"use client";

import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (key: string) =>
    (key === "blog" && pathname.startsWith("/blog")) ||
    (key === "news" && pathname.startsWith("/news")) ||
    (key === "listings" && pathname.startsWith("/listings"));

  const linkStyle = (key: string): React.CSSProperties => ({
    color: isActive(key) ? "#1A1A1A" : "#777",
    fontWeight: isActive(key) ? 600 : 400,
    fontSize: "13px",
    textDecoration: "none",
    padding: "4px 10px",
  });

  return (
    <nav className="navbar-float-outer" style={{
      position: "sticky",
      top: 0,
      zIndex: 50,
      padding: "10px 1.5rem",
      background: "transparent",
      pointerEvents: "none",
    }}>
      {/* Floating pill */}
      <div style={{
        maxWidth: "1400px",
        margin: "0 auto",
        pointerEvents: "all",
        background: "rgba(255,255,255,0.94)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        borderRadius: menuOpen ? "16px 16px 12px 12px" : "16px",
        boxShadow: scrolled
          ? "0 4px 24px rgba(0,0,0,0.11), 0 0 0 1px rgba(0,0,0,0.06)"
          : "0 2px 16px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.05)",
        transition: "box-shadow 0.2s ease, border-radius 0.15s ease",
        overflow: "hidden",
      }}>

        {/* Main row */}
        <div style={{ height: "48px", display: "flex", alignItems: "center", padding: "0 1.25rem" }}>

          {/* Logo */}
          <div style={{ flex: 1 }}>
            <Link href="/" style={{ display: "inline-flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
              <span style={{ fontSize: "20px", fontWeight: 500, color: "#1A1A1A", letterSpacing: "-0.5px" }}>
                must<span style={{ color: "#CCDA47" }}>go</span>
              </span>
              <span style={{ fontSize: "11px", color: "rgba(0,0,0,0.28)", letterSpacing: "2px", marginTop: "2px" }}>DEALS</span>
            </Link>
          </div>

          {/* Center nav links (desktop) */}
          <div className="navbar-center-links">
            <Link href="/listings" style={linkStyle("listings")}>Listings</Link>
            <Link href="/news"     style={linkStyle("news")}>News</Link>
            <Link href="/blog"     style={linkStyle("blog")}>Blog</Link>
          </div>

          {/* Right: lang tabs + hamburger */}
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "0.5rem" }}>
            {langTabs && (
              <div className="navbar-lang-tabs">
                {LANGS.map((l) => (
                  <button
                    key={l.code}
                    onClick={() => langTabs.onLangChange(l.code)}
                    className="navbar-lang-btn"
                    style={{
                      background: "none", border: "none", padding: 0,
                      color: langTabs.activeLang === l.code ? "#1A1A1A" : "rgba(0,0,0,0.32)",
                      fontWeight: langTabs.activeLang === l.code ? 600 : 400,
                      cursor: "pointer", fontFamily: "inherit",
                    }}
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            )}

            {/* Hamburger — mobile only */}
            <button
              className="navbar-hamburger"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <line x1="4" y1="4" x2="18" y2="18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
                  <line x1="18" y1="4" x2="4" y2="18" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <line x1="3" y1="6"  x2="19" y2="6"  stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="11" x2="19" y2="11" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
                  <line x1="3" y1="16" x2="19" y2="16" stroke="#1A1A1A" strokeWidth="2" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {menuOpen && (
          <div style={{ background: "white", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
            {langTabs && (
              <>
                <div style={{ display: "flex", padding: "10px 1.5rem" }}>
                  {LANGS.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => langTabs.onLangChange(l.code)}
                      className="navbar-mobile-lang-btn"
                      style={{
                        color: langTabs.activeLang === l.code ? "#1A1A1A" : "rgba(0,0,0,0.32)",
                        fontWeight: langTabs.activeLang === l.code ? 600 : 400,
                      }}
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
                <div style={{ borderTop: "0.5px solid rgba(0,0,0,0.06)" }} />
              </>
            )}
            <Link href="/listings" onClick={() => setMenuOpen(false)} style={{ color: "#1A1A1A", fontSize: "15px", textDecoration: "none", padding: "14px 2rem", borderTop: "1px solid rgba(0,0,0,0.05)", display: "block" }}>Listings</Link>
            <Link href="/news"     onClick={() => setMenuOpen(false)} style={{ color: "#1A1A1A", fontSize: "15px", textDecoration: "none", padding: "14px 2rem", borderTop: "1px solid rgba(0,0,0,0.05)", display: "block" }}>News</Link>
            <Link href="/blog"     onClick={() => setMenuOpen(false)} style={{ color: "#1A1A1A", fontSize: "15px", textDecoration: "none", padding: "14px 2rem", borderTop: "1px solid rgba(0,0,0,0.05)", display: "block" }}>Blog</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
