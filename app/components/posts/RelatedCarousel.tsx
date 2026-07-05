"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export type CarouselItem = {
  slug: string;
  title: string;
  category: string;
  date: string;
  image?: string;
  excerpt?: string;
  readTime?: string;
};

const SHOW = 3;

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function NavBtn({ onClick, disabled, children }: { onClick: () => void; disabled: boolean; children: React.ReactNode }) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      style={{
        width: "30px", height: "30px", borderRadius: "50%",
        border: `1px solid ${disabled ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.22)"}`,
        background: "transparent",
        color: disabled ? "rgba(0,0,0,0.2)" : "#1A1A1A",
        cursor: disabled ? "default" : "pointer",
        fontSize: "16px", lineHeight: 1,
        display: "flex", alignItems: "center", justifyContent: "center",
        flexShrink: 0,
      }}
    >
      {children}
    </button>
  );
}

export default function RelatedCarousel({
  items,
  base,
  title,
  allLink,
  allLinkText,
  cardStyle,
}: {
  items: CarouselItem[];
  base: string;
  title: string;
  allLink: string;
  allLinkText: string;
  cardStyle: "news" | "blog";
}) {
  const [list, setList] = useState<CarouselItem[]>(items);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    setList(shuffle(items));
    setOffset(0);
  }, [items]);

  if (items.length === 0) return null;

  const canPrev = offset > 0;
  const canNext = offset + SHOW < list.length;
  const visible = list.slice(offset, offset + SHOW);

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
        <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {list.length > SHOW && (
            <div style={{ display: "flex", gap: "6px" }}>
              <NavBtn onClick={() => setOffset(o => o - 1)} disabled={!canPrev}>‹</NavBtn>
              <NavBtn onClick={() => setOffset(o => o + 1)} disabled={!canNext}>›</NavBtn>
            </div>
          )}
          <Link href={allLink} style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>
            {allLinkText}
          </Link>
        </div>
      </div>

      <div className="section-grid">
        {visible.map((item) => (
          <Link key={item.slug} href={`${base}/${item.slug}`} style={{ textDecoration: "none", display: "block" }}>
            {cardStyle === "news" ? (
              <div style={{ background: "#F5F5F0", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
                <Image src={item.image ?? ""} alt={item.title} width={400} height={140} style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }} />
                <div style={{ padding: "1rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                    <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.8px", background: "rgba(204,218,71,0.12)", padding: "2px 8px", borderRadius: "10px" }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: "11px", color: "#999" }}>{item.date}</span>
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4 }}>{item.title}</div>
                </div>
              </div>
            ) : (
              <div style={{ background: "white", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", padding: "1.25rem", height: "100%" }}>
                <div style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {item.category}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4, marginBottom: "0.5rem" }}>{item.title}</div>
                {item.excerpt && (
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.55, marginBottom: "0.75rem" }}>{item.excerpt}</div>
                )}
                <div style={{ fontSize: "11px", color: "#aaa" }}>{item.readTime} · {item.date}</div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </>
  );
}
