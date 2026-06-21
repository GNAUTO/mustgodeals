"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LANGS = [
  { label: "EN", code: "EN" },
  { label: "한국어", code: "KO" },
  { label: "中文", code: "ZH" },
];

type LangTabsProps = {
  activeLang: string;
  onLangChange: (lang: string) => void;
};

export default function Navbar({ langTabs }: { langTabs?: LangTabsProps }) {
  const pathname = usePathname();

  const linkColor = (key: string) => {
    if (key === "blog" && pathname.startsWith("/blog")) return "#CCDA47";
    if (key === "news" && pathname.startsWith("/news")) return "#CCDA47";
    if (key === "listings" && pathname.startsWith("/listings")) return "#CCDA47";
    return "rgba(255,255,255,0.65)";
  };

  return (
    <nav style={{ background: "#1A1A1A", padding: "0 2rem", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
        <span style={{ fontSize: "20px", fontWeight: 500, color: "white", letterSpacing: "-0.5px" }}>
          must<span style={{ color: "#CCDA47" }}>go</span>
        </span>
        <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "2px", marginTop: "2px" }}>DEALS</span>
      </Link>

      <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
        {langTabs && (
          <div style={{ display: "flex", gap: "0.875rem", alignItems: "center", paddingRight: "1.25rem", marginRight: "0.25rem", borderRight: "1px solid rgba(255,255,255,0.1)" }}>
            {LANGS.map((l) => (
              <button
                key={l.code}
                onClick={() => langTabs.onLangChange(l.code)}
                style={{
                  background: "none",
                  border: "none",
                  padding: 0,
                  fontSize: "12px",
                  color: langTabs.activeLang === l.code ? "#CCDA47" : "rgba(255,255,255,0.4)",
                  fontWeight: langTabs.activeLang === l.code ? 600 : 400,
                  cursor: "pointer",
                  fontFamily: "inherit",
                }}
              >
                {l.label}
              </button>
            ))}
          </div>
        )}
        <Link href="/blog" style={{ color: linkColor("blog"), fontSize: "13px", textDecoration: "none" }}>Blog</Link>
        <Link href="/news" style={{ color: linkColor("news"), fontSize: "13px", textDecoration: "none" }}>News</Link>
        <Link href="/coming-soon" style={{ color: linkColor("listings"), fontSize: "13px", textDecoration: "none" }}>Listings</Link>
        <Link href="/coming-soon" style={{ background: "#CCDA47", color: "#1A1A1A", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 500, textDecoration: "none" }}>Get Alerts</Link>
      </div>
    </nav>
  );
}
