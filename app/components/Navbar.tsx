"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LANGS = [
  { label: "EN", code: "EN" },
  { label: "KO", code: "KO" },
];

/* list-page mode: state-driven (News/Blog/Listings filters) */
type LangTabsProps = {
  activeLang: string;
  onLangChange: (lang: string) => void;
};

/* article-page mode: link-driven (PostDetail EN↔KO nav) */
type LangLinksProps = {
  current: string;
  links: Partial<Record<string, string | null>>;
};

export default function Navbar({
  langTabs,
  langLinks,
}: {
  langTabs?: LangTabsProps;
  langLinks?: LangLinksProps;
}) {
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

  /* ── Desktop lang section ──────────────────────────────── */
  const desktopLang = (() => {
    if (langTabs) {
      return (
        <div className="navbar-lang-tabs">
          {LANGS.map((l, i) => (
            <span key={l.code} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
              {i > 0 && <span style={{ color: "rgba(0,0,0,0.15)", fontSize: "10px", lineHeight: 1 }}>|</span>}
              <button
                onClick={() => langTabs.onLangChange(l.code)}
                className="navbar-lang-btn"
                style={{
                  background: "none", border: "none", padding: 0,
                  color: langTabs.activeLang === l.code ? "#1A1A1A" : "#6B6B6B",
                  fontWeight: langTabs.activeLang === l.code ? 600 : 400,
                  cursor: "pointer", fontFamily: "inherit",
                }}
              >
                {l.label}
              </button>
            </span>
          ))}
        </div>
      );
    }
    if (langLinks) {
      return (
        <div className="navbar-lang-tabs">
          {LANGS.map((l, i) => {
            const href = langLinks.links[l.code] ?? null;
            const isCurrentLang = l.code === langLinks.current;
            return (
              <span key={l.code} style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                {i > 0 && <span style={{ color: "rgba(0,0,0,0.15)", fontSize: "10px", lineHeight: 1 }}>|</span>}
                {isCurrentLang ? (
                  <span className="navbar-lang-btn" style={{ color: "#1A1A1A", fontWeight: 600 }}>
                    {l.label}
                  </span>
                ) : href ? (
                  <Link href={href} className="navbar-lang-btn" style={{ color: "#6B6B6B", fontWeight: 400, textDecoration: "none" }}>
                    {l.label}
                  </Link>
                ) : (
                  <span className="navbar-lang-btn" style={{ color: "rgba(0,0,0,0.2)", cursor: "not-allowed" }}>
                    {l.label}
                  </span>
                )}
              </span>
            );
          })}
        </div>
      );
    }
    return null;
  })();

  /* ── Mobile dropdown lang section ──────────────────────── */
  const mobileLang = (() => {
    if (langTabs) {
      return (
        <>
          <div style={{ display: "flex", padding: "10px 1.5rem" }}>
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => { langTabs.onLangChange(l.code); setMenuOpen(false); }}
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
      );
    }
    if (langLinks) {
      return (
        <>
          <div style={{ display: "flex", padding: "10px 1.5rem" }}>
            {LANGS.map((l) => {
              const href = langLinks.links[l.code] ?? null;
              const isCurrentLang = l.code === langLinks.current;
              if (isCurrentLang) {
                return (
                  <span key={l.code} className="navbar-mobile-lang-btn" style={{ color: "#1A1A1A", fontWeight: 600 }}>
                    {l.label}
                  </span>
                );
              }
              if (!href) {
                return (
                  <span key={l.code} className="navbar-mobile-lang-btn" style={{ color: "rgba(0,0,0,0.2)" }}>
                    {l.label}
                  </span>
                );
              }
              return (
                <Link key={l.code} href={href} onClick={() => setMenuOpen(false)} className="navbar-mobile-lang-btn" style={{ color: "rgba(0,0,0,0.32)", textDecoration: "none" }}>
                  {l.label}
                </Link>
              );
            })}
          </div>
          <div style={{ borderTop: "0.5px solid rgba(0,0,0,0.06)" }} />
        </>
      );
    }
    return null;
  })();

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
        maxWidth: "1600px",
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

          {/* Right: lang + hamburger */}
          <div style={{ flex: 1, display: "flex", justifyContent: "flex-end", alignItems: "center", gap: "0.75rem" }}>
            {desktopLang}
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
            {mobileLang}
            <Link href="/listings"    onClick={() => setMenuOpen(false)} style={{ color: "#1A1A1A", fontSize: "15px", textDecoration: "none", padding: "14px 2rem", borderTop: "1px solid rgba(0,0,0,0.05)", display: "block" }}>Listings</Link>
            <Link href="/news"        onClick={() => setMenuOpen(false)} style={{ color: "#1A1A1A", fontSize: "15px", textDecoration: "none", padding: "14px 2rem", borderTop: "1px solid rgba(0,0,0,0.05)", display: "block" }}>News</Link>
            <Link href="/blog"        onClick={() => setMenuOpen(false)} style={{ color: "#1A1A1A", fontSize: "15px", textDecoration: "none", padding: "14px 2rem", borderTop: "1px solid rgba(0,0,0,0.05)", display: "block" }}>Blog</Link>
            <Link href="/how-it-works" onClick={() => setMenuOpen(false)} style={{ color: "#777", fontSize: "14px", textDecoration: "none", padding: "12px 2rem", borderTop: "1px solid rgba(0,0,0,0.05)", display: "block" }}>How It Works</Link>
            <Link href="/for-dealers" onClick={() => setMenuOpen(false)} style={{ color: "#777", fontSize: "14px", textDecoration: "none", padding: "12px 2rem", borderTop: "1px solid rgba(0,0,0,0.05)", display: "block" }}>For Dealers</Link>
          </div>
        )}
      </div>
    </nav>
  );
}
