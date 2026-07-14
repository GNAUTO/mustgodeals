import type { CSSProperties } from "react";

const card: CSSProperties = {
  background: "#F5F5F0",
  borderRadius: "12px",
  padding: "1.125rem 1.25rem",
};

const label: CSSProperties = {
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "1.5px",
  textTransform: "uppercase",
  marginBottom: "8px",
};

const body: CSSProperties = {
  fontSize: "14px",
  color: "#3D3D38",
  lineHeight: 1.75,
  margin: 0,
};

export default function SuitAvoid({
  suits,
  avoid,
  lang = "EN",
}: {
  suits: string;
  avoid: string;
  lang?: "EN" | "KO";
}) {
  return (
    <div className="suit-avoid-grid">
      <div style={card}>
        <div style={{ ...label, color: "#8A9922" }}>
          {lang === "KO" ? "이런 사람에게 맞는다" : "WHO IT SUITS"}
        </div>
        <p style={body}>{suits}</p>
      </div>
      <div style={card}>
        <div style={{ ...label, color: "#8F8F86" }}>
          {lang === "KO" ? "이런 사람은 피할 것" : "WHO SHOULD AVOID IT"}
        </div>
        <p style={body}>{avoid}</p>
      </div>
    </div>
  );
}
