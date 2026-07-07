"use client";

import { useState } from "react";

type FaqItem = { q: string; a: string };

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => (
        <div key={i} style={{ borderBottom: i < items.length - 1 ? "0.5px solid rgba(0,0,0,0.08)" : "none" }}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            style={{
              width: "100%",
              textAlign: "left",
              background: "none",
              border: "none",
              padding: "18px 0",
              cursor: "pointer",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "16px",
              fontFamily: "inherit",
            }}
          >
            <span style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.4 }}>
              {item.q}
            </span>
            <span style={{
              flexShrink: 0,
              width: "24px",
              height: "24px",
              borderRadius: "50%",
              background: open === i ? "#CCDA47" : "rgba(0,0,0,0.07)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "14px",
              fontWeight: 600,
              color: "#1A1A1A",
              transition: "background 0.15s",
            }}>
              {open === i ? "−" : "+"}
            </span>
          </button>
          {open === i && (
            <div style={{ paddingBottom: "18px" }}>
              <p style={{ fontSize: "14px", color: "#555", lineHeight: 1.8, margin: 0 }}>
                {item.a}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
