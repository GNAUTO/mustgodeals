import type { CSSProperties } from "react";

export type ThumbSize = "featured" | "grid" | "small";

const COLORS: Record<string, { bg: string; fg: string }> = {
  "buying guide":        { bg: "#CCDA47", fg: "#1A1A1A" },
  "구매 가이드":         { bg: "#CCDA47", fg: "#1A1A1A" },
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
const DEFAULT_COLOR = { bg: "#1A1A1A", fg: "#CCDA47" };

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
  // small (52×52)
  if (n <= 1) return "22px";
  if (n <= 2) return "18px";
  if (n <= 4) return "13px";
  if (n <= 6) return "10px";
  return "8px";
}

export default function BlogThumb({
  category,
  highlight,
  size,
}: {
  category: string;
  highlight?: string;
  size: ThumbSize;
}) {
  const { bg, fg } = COLORS[category.toLowerCase()] ?? DEFAULT_COLOR;
  const isDark = bg === "#1A1A1A" || bg === "#2A2A2A";
  const patternColor = isDark ? "rgba(204,218,71,0.055)" : "rgba(0,0,0,0.05)";

  const containerStyle: CSSProperties =
    size === "small"
      ? {
          width: "52px",
          height: "52px",
          borderRadius: "6px",
          background: bg,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexShrink: 0,
        }
      : {
          width: "100%",
          aspectRatio: "16/9",
          borderRadius: "4px",
          background: bg,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: size === "featured" ? "14px" : "10px",
        };

  const isHighlight = !!highlight;
  const displayText = highlight ?? category;

  return (
    <div style={containerStyle}>
      {/* Diagonal stripe pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `repeating-linear-gradient(-45deg, ${patternColor} 0px, ${patternColor} 1px, transparent 1px, transparent 14px)`,
        }}
      />
      {/* Text */}
      <span
        style={{
          position: "relative",
          color: fg,
          fontWeight: isHighlight ? 800 : 700,
          fontSize: isHighlight
            ? getFontSize(displayText, size)
            : size === "small" ? "7px" : "10px",
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
    </div>
  );
}
