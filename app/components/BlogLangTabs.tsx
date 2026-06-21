"use client";

import Link from "next/link";

const LANG_LABELS: Record<string, string> = {
  EN: "EN",
  KO: "한국어",
  ZH: "中文",
};

type LangLinks = Partial<Record<string, string | null>>;

export default function BlogLangTabs({ current, links = {} }: { current: string; links?: LangLinks }) {
  const codes = ["EN", "KO", "ZH"];

  return (
    <div style={{
      background: "#1A1A1A",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "7px 2rem",
      display: "flex",
      gap: "1.25rem",
    }}>
      {codes.map((code) => {
        const href = links[code] ?? null;
        const isActive = code === current;

        if (isActive) {
          return (
            <span key={code} style={{ fontSize: "12px", color: "#CCDA47", fontWeight: 600 }}>
              {LANG_LABELS[code]}
            </span>
          );
        }
        if (!href) {
          return (
            <span key={code} style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", cursor: "not-allowed" }}>
              {LANG_LABELS[code]}
            </span>
          );
        }
        return (
          <Link key={code} href={href} style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
            {LANG_LABELS[code]}
          </Link>
        );
      })}
    </div>
  );
}
