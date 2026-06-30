"use client";

import Link from "next/link";

type LangLinks = Partial<Record<string, string | null>>;

export default function BlogLangTabs({ current, links = {} }: { current: string; links?: LangLinks }) {
  const codes = ["EN", "KO"];

  return (
    <div style={{
      background: "#1A1A1A",
      padding: "7px 2rem",
      display: "flex",
      gap: "1.25rem",
    }}>
      {codes.map((code) => {
        const href = links[code] ?? null;
        const isActive = code === current;

        if (isActive) {
          return (
            <span key={code} style={{ fontSize: "12px", color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>
              {code}
            </span>
          );
        }
        if (!href) {
          return (
            <span key={code} style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", cursor: "not-allowed" }}>
              {code}
            </span>
          );
        }
        return (
          <Link key={code} href={href} style={{ fontSize: "12px", color: "rgba(255,255,255,0.35)", textDecoration: "none" }}>
            {code}
          </Link>
        );
      })}
    </div>
  );
}
