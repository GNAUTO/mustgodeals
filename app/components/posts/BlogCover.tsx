import type { CSSProperties } from "react";

export type CoverVariant = "grid" | "hero";

const WARM_GRAY = "#F5F5F0";
const CHARCOAL = "#1A1A1A";
const POINT_ON_WARM = "#8A9922";
const POINT_ON_DARK = "#CCDA47";
const TEXT_ON_WARM = "#1A1A1A";
const TEXT_ON_DARK = "#F5F5F0";

export function coverIsDark(index: number): boolean {
  return index % 4 === 1;
}

function isPointChar(text: string): boolean {
  if (!text) return false;
  const last = text.slice(-1);
  if (last === "?" || last === "%") return true;
  if (last.toLowerCase() === "x" && text.length > 1 && /\d/.test(text.slice(-2, -1))) return true;
  return false;
}

function getTextSize(text: string, variant: CoverVariant): string {
  const n = text.length;
  if (variant === "hero") {
    if (n <= 3) return "clamp(36px, 6vw, 52px)";
    if (n <= 6) return "clamp(28px, 4.5vw, 40px)";
    if (n <= 10) return "clamp(22px, 3.5vw, 30px)";
    return "clamp(18px, 2.5vw, 24px)";
  }
  if (n <= 3) return "clamp(26px, 4.5vw, 34px)";
  if (n <= 6) return "clamp(19px, 3.2vw, 25px)";
  if (n <= 10) return "clamp(15px, 2.4vw, 19px)";
  return "clamp(12px, 1.8vw, 15px)";
}

export default function BlogCover({
  highlight,
  thumbSubtext,
  index,
  variant = "grid",
  className = "",
}: {
  highlight?: string;
  thumbSubtext?: string;
  index: number;
  variant?: CoverVariant;
  className?: string;
}) {
  const isDark = coverIsDark(index);
  const bg = isDark ? CHARCOAL : WARM_GRAY;
  const fg = isDark ? TEXT_ON_DARK : TEXT_ON_WARM;
  const pointColor = isDark ? POINT_ON_DARK : POINT_ON_WARM;
  const text = highlight ?? "";
  const hasPoint = isPointChar(text);
  const before = hasPoint ? text.slice(0, -1) : text;
  const point = hasPoint ? text.slice(-1) : "";
  const fontSize = getTextSize(text, variant);

  const containerStyle: CSSProperties = {
    width: "100%",
    background: bg,
    borderRadius: "16px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  };

  return (
    <div style={containerStyle} className={className}>
      <div style={{ textAlign: "center", padding: "0 16px", lineHeight: 1.15 }}>
        <span style={{ fontSize, fontWeight: 500, color: fg, wordBreak: "break-word" }}>
          {before}
          {hasPoint && <span style={{ color: pointColor }}>{point}</span>}
        </span>
        {variant === "hero" && thumbSubtext && (
          <div style={{
            fontSize: "11px", fontWeight: 500, color: fg,
            opacity: 0.5, marginTop: "8px",
            letterSpacing: "0.07em", textTransform: "uppercase",
          }}>
            {thumbSubtext}
          </div>
        )}
      </div>
    </div>
  );
}
