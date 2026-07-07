import type { CSSProperties } from "react";

export type ThumbSize = "featured" | "grid" | "small";

const CATEGORY_COLORS: Record<string, { bg: string; fg: string }> = {
  "nsw road rules":      { bg: "#1A1A1A", fg: "#CCDA47" },
  "nsw 도로법규":        { bg: "#1A1A1A", fg: "#CCDA47" },
  "road rules":          { bg: "#1A1A1A", fg: "#CCDA47" },
  "business":            { bg: "#EAEAEA", fg: "#1A1A1A" },
  "비즈니스":            { bg: "#EAEAEA", fg: "#1A1A1A" },
  "living in australia": { bg: "#D8E8D8", fg: "#1A1A1A" },
  "호주 생활 정보":      { bg: "#D8E8D8", fg: "#1A1A1A" },
  "insider guide":       { bg: "#2A2A2A", fg: "#CCDA47" },
  "한국어 가이드":       { bg: "#2A2A2A", fg: "#CCDA47" },
};

const LIME = { bg: "#CCDA47", fg: "#1A1A1A" };

const AUX_PALETTE = [
  { bg: "#8FA888", fg: "#1A1A1A" }, // sage green
  { bg: "#C4B8A8", fg: "#1A1A1A" }, // warm gray
  { bg: "#3A4A5C", fg: "#CCDA47" }, // navy
  { bg: "#C17A5C", fg: "#1A1A1A" }, // terracotta
];

function slugHash(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) & 0xffff;
  }
  return h;
}

function getColor(category: string, slug: string, size: ThumbSize): { bg: string; fg: string } {
  const cat = category.toLowerCase();
  if (CATEGORY_COLORS[cat]) return CATEGORY_COLORS[cat];
  if (size === "featured") return LIME;
  return AUX_PALETTE[slugHash(slug) % AUX_PALETTE.length];
}

function getFontSize(text: string, size: ThumbSize): string {
  const n = text.length;
  if (size === "featured") {
    if (n <= 1) return "clamp(48px, 13vw, 100px)";
    if (n <= 2) return "clamp(40px, 10vw, 80px)";
    if (n <= 4) return "clamp(30px, 7.5vw, 60px)";
    if (n <= 6) return "clamp(22px, 5vw, 40px)";
    return "clamp(16px, 3.5vw, 28px)";
  }
  if (size === "grid") {
    if (n <= 1) return "clamp(28px, 5.5vw, 46px)";
    if (n <= 2) return "clamp(22px, 4.5vw, 36px)";
    if (n <= 4) return "clamp(16px, 3.5vw, 26px)";
    if (n <= 6) return "clamp(13px, 2.5vw, 18px)";
    return "clamp(10px, 2vw, 14px)";
  }
  // small (100×100)
  if (n <= 1) return "40px";
  if (n <= 2) return "32px";
  if (n <= 4) return "22px";
  if (n <= 6) return "18px";
  return "14px";
}

export default function BlogThumb({
  category,
  highlight,
  slug,
  subtext,
  size,
}: {
  category: string;
  highlight?: string;
  slug: string;
  subtext?: string;
  size: ThumbSize;
}) {
  const { bg, fg } = getColor(category, slug, size);
  const isDark = bg === "#1A1A1A" || bg === "#2A2A2A" || bg === "#3A4A5C";
  const patternColor = isDark ? "rgba(204,218,71,0.055)" : "rgba(0,0,0,0.05)";

  const containerStyle: CSSProperties =
    size === "small"
      ? {
          width: "100px",
          height: "100px",
          borderRadius: "8px",
          background: bg,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }
      : {
          width: "100%",
          ...(size === "featured"
            ? { height: "clamp(160px, 18vw, 240px)" }
            : { aspectRatio: "16/9" }),
          borderRadius: "4px",
          background: bg,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: size === "featured" ? "14px" : "10px",
        };

  const isHighlight = !!highlight;
  const displayText = highlight ?? category;

  return (
    <div style={containerStyle}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(-45deg, ${patternColor} 0px, ${patternColor} 1px, transparent 1px, transparent 14px)`,
        }}
      />
      <span
        style={{
          position: "relative",
          color: fg,
          fontWeight: isHighlight ? 800 : 700,
          fontSize: isHighlight
            ? getFontSize(displayText, size)
            : size === "small" ? "9px" : "10px",
          letterSpacing: isHighlight
            ? size === "featured" ? "-0.03em" : "0"
            : "1.5px",
          textTransform: isHighlight ? "none" : "uppercase",
          opacity: isHighlight ? 1 : 0.55,
          textAlign: "center",
          padding: "0 8px",
          lineHeight: 1.05,
          wordBreak: "break-all",
        }}
      >
        {displayText}
      </span>
      {size === "featured" && subtext && (
        <span
          style={{
            position: "relative",
            color: fg,
            fontSize: "10px",
            fontWeight: 500,
            opacity: 0.6,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            marginTop: "7px",
            textAlign: "center",
          }}
        >
          {subtext}
        </span>
      )}
    </div>
  );
}
