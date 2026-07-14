import type { CSSProperties } from "react";

export const AS: Record<string, CSSProperties> = {
  p: { marginBottom: "1.25rem", color: "#3D3D38", lineHeight: 1.85 },
  h2: {
    fontSize: "22px", fontWeight: 600, color: "#1A1A1A",
    marginTop: "2.5rem", marginBottom: "0.875rem", letterSpacing: "-0.3px",
  },
  h3: {
    fontSize: "18px", fontWeight: 600, color: "#1A1A1A",
    marginTop: "1.75rem", marginBottom: "0.75rem",
  },
  overline: {
    display: "block", fontSize: "11px", fontWeight: 600,
    color: "#8F8F86", letterSpacing: "2px", textTransform: "uppercase",
    marginBottom: "0.75rem",
  },
  callout: {
    background: "#F5F5F0", borderRadius: "14px",
    padding: "1.5rem", margin: "2rem 0",
  },
  calloutTitle: {
    color: "#8A9922", fontSize: "11px", fontWeight: 700,
    letterSpacing: "2px", marginBottom: "0.75rem", textTransform: "uppercase",
  },
  calloutText: { color: "#3D3D38", fontSize: "15px", lineHeight: 1.75, margin: 0 },
  highlight: {
    background: "rgba(138,153,34,0.12)", color: "#1A1A1A",
    fontWeight: 600, padding: "1px 5px", borderRadius: "3px",
  },
  imgWrap: {
    margin: "2rem 0", borderRadius: "10px", overflow: "hidden",
    border: "1px solid #EDECE5",
  },
  imgCaption: { fontSize: "12px", color: "#8F8F86", textAlign: "center", padding: "8px 0 0" },
  divider: { border: "none", borderTop: "1px solid #EDECE5", margin: "2.5rem 0" },
  sourceBox: {
    background: "#FFFFFF", border: "1px solid #EDECE5",
    borderRadius: "8px", padding: "1rem 1.25rem",
    display: "flex", alignItems: "center", gap: "0.75rem", margin: "2rem 0",
  },
  sourceLabel: { fontSize: "11px", color: "#B4B2A9", flex: "none" },
  ctaBox: {
    background: "#1A1A1A", borderRadius: "12px",
    padding: "2rem", textAlign: "center", margin: "3rem 0",
  },
  ctaTitle: { color: "white", fontSize: "20px", fontWeight: 500, marginBottom: "0.5rem" },
  ctaDesc: { color: "rgba(255,255,255,0.45)", fontSize: "14px", marginBottom: "1.25rem" },
  ctaBtn: {
    display: "inline-block", background: "#CCDA47", color: "#1A1A1A",
    padding: "12px 28px", borderRadius: "8px", fontSize: "14px",
    fontWeight: 600, textDecoration: "none",
  },
  tipBox: {
    background: "#FFFFFF", border: "1px solid #EDECE5",
    borderRadius: "10px", padding: "1.25rem 1.5rem", margin: "1.5rem 0",
  },
  tipTitle: {
    fontSize: "13px", fontWeight: 600, color: "#8A9922",
    marginBottom: "0.75rem", letterSpacing: "0.3px",
  },
  tipList: { paddingLeft: "1.25rem", margin: 0 },
  tipItem: { color: "#3D3D38", fontSize: "15px", lineHeight: 1.75, marginBottom: "0.4rem" },
  disclaimer: {
    background: "#F5F5F0", border: "1px solid #EDECE5",
    borderRadius: "8px", padding: "1rem 1.25rem", margin: "2rem 0",
  },
  disclaimerText: { fontSize: "13px", color: "#8F8F86", lineHeight: 1.65, margin: 0 },
  table: {
    width: "100%", borderCollapse: "collapse",
    margin: "1.5rem 0", fontSize: "14px",
  },
  th: {
    padding: "10px 14px", textAlign: "left", background: "#FFFFFF",
    color: "#1A1A1A", fontWeight: 600, fontSize: "12px", letterSpacing: "0.5px",
    borderBottom: "2px solid #1A1A1A",
  },
  td: {
    padding: "10px 14px", borderBottom: "1px solid #EDECE5",
    color: "#3D3D38", background: "#FFFFFF",
  },
  tdRight: {
    padding: "10px 14px", borderBottom: "1px solid #EDECE5",
    textAlign: "right", fontWeight: 600, color: "#1A1A1A", background: "#FFFFFF",
  },
  stepBox: {
    background: "#FFFFFF", border: "1px solid #EDECE5",
    borderRadius: "10px", padding: "1rem 1.25rem", margin: "0.75rem 0",
    display: "flex", gap: "12px", alignItems: "flex-start",
  },
  stepNum: {
    background: "#CCDA47", color: "#1A1A1A", fontWeight: 700,
    fontSize: "13px", minWidth: "26px", height: "26px",
    borderRadius: "50%", display: "flex", alignItems: "center",
    justifyContent: "center", flexShrink: 0, marginTop: "2px",
  },
};
