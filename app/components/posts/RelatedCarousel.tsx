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
        border: `1px solid ${disabled ? "#EDECE5" : "rgba(0,0,0,0.18)"}`,
        background: "transparent",
        color: disabled ? "#B4B2A9" : "#1A1A1A",
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
        <div style={{ fontSize: "11px", fontWeight: 700, color: "#8F8F86", letterSpacing: "1.5px", textTransform: "uppercase" }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          {list.length > SHOW && (
            <div style={{ display: "flex", gap: "6px" }}>
              <NavBtn onClick={() => setOffset(o => o - 1)} disabled={!canPrev}>‹</NavBtn>
              <NavBtn onClick={() => setOffset(o => o + 1)} disabled={!canNext}>›</NavBtn>
            </div>
          )}
          <Link href={allLink} style={{ fontSize: "12px", color: "#8F8F86", textDecoration: "none", fontWeight: 500 }}>
            {allLinkText}
          </Link>
        </div>
      </div>

      <div className="section-grid">
        {visible.map((item) => (
          <Link key={item.slug} href={`${base}/${item.slug}`} style={{ textDecoration: "none", display: "block" }}>
            {cardStyle === "news" ? (
              <div style={{ background: "#FFFFFF", borderRadius: "10px", border: "1px solid #EDECE5", overflow: "hidden" }}>
                <Image src={item.image ?? ""} alt={item.title} width={400} height={140} style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }} />
                <div style={{ padding: "0.875rem 1rem" }}>
                  <div style={{ fontSize: "10px", fontWeight: 700, color: "#8A9922", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "5px" }}>
                    {item.category}
                  </div>
                  <div style={{ fontSize: "13px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4, marginBottom: "4px" }}>{item.title}</div>
                  <div style={{ fontSize: "11px", color: "#B4B2A9" }}>{item.date}</div>
                </div>
              </div>
            ) : (
              <div style={{ background: "#FFFFFF", borderRadius: "10px", border: "1px solid #EDECE5", padding: "1.25rem", height: "100%" }}>
                <div style={{ fontSize: "10px", fontWeight: 700, color: "#8A9922", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "0.5rem" }}>
                  {item.category}
                </div>
                <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4, marginBottom: "0.5rem" }}>{item.title}</div>
                {item.excerpt && (
                  <div style={{ fontSize: "13px", color: "#8F8F86", lineHeight: 1.55, marginBottom: "0.75rem" }}>{item.excerpt}</div>
                )}
                <div style={{ fontSize: "11px", color: "#B4B2A9" }}>{item.readTime} · {item.date}</div>
              </div>
            )}
          </Link>
        ))}
      </div>
    </>
  );
}
