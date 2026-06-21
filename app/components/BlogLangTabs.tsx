"use client";

import Link from "next/link";

const TABS = [
  { code: "EN",  label: "EN",    href: null },
  { code: "KO",  label: "한국어", href: "/blog/wolmal-jadongcha-dil-jongni" },
  { code: "ZH",  label: "中文",  href: null },
];

export default function BlogLangTabs({ current }: { current: string }) {
  return (
    <div style={{
      background: "#1A1A1A",
      borderBottom: "1px solid rgba(255,255,255,0.06)",
      padding: "7px 2rem",
      display: "flex",
      gap: "1.25rem",
    }}>
      {TABS.map((tab) => {
        if (tab.code === current) {
          return (
            <span key={tab.code} style={{ fontSize: "12px", color: "#CCDA47", fontWeight: 600 }}>
              {tab.label}
            </span>
          );
        }
        if (!tab.href) {
          return (
            <span key={tab.code} style={{ fontSize: "12px", color: "rgba(255,255,255,0.2)", cursor: "not-allowed" }}>
              {tab.label}
            </span>
          );
        }
        return (
          <Link key={tab.code} href={tab.href} style={{ fontSize: "12px", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
