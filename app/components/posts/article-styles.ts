import type { CSSProperties } from "react";

export const AS: Record<string, CSSProperties> = {
  p: { marginBottom: "1.25rem", color: "#333", lineHeight: 1.8 },
  h2: {
    fontSize: "22px", fontWeight: 600, color: "#1A1A1A",
    marginTop: "2.25rem", marginBottom: "0.875rem", letterSpacing: "-0.3px",
  },
  h3: {
    fontSize: "18px", fontWeight: 600, color: "#1A1A1A",
    marginTop: "1.75rem", marginBottom: "0.75rem",
  },
  callout: {
    background: "#1A1A1A", border: "1px solid rgba(204,218,71,0.3)",
    borderLeft: "4px solid #CCDA47", borderRadius: "8px",
    padding: "1.25rem 1.5rem", margin: "1.75rem 0",
  },
  calloutTitle: {
    color: "#CCDA47", fontSize: "11px", fontWeight: 600,
    letterSpacing: "1px", marginBottom: "0.5rem",
  },
  calloutText: { color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.7, margin: 0 },
  highlight: {
    background: "rgba(204,218,71,0.18)", color: "#1A1A1A",
    fontWeight: 600, padding: "1px 5px", borderRadius: "3px",
  },
  imgWrap: {
    margin: "2rem 0", borderRadius: "10px", overflow: "hidden",
    border: "0.5px solid rgba(0,0,0,0.08)",
  },
  imgCaption: { fontSize: "12px", color: "#999", textAlign: "center", padding: "8px 0 0" },
  divider: { border: "none", borderTop: "1px solid rgba(0,0,0,0.08)", margin: "2.25rem 0" },
  sourceBox: {
    background: "white", border: "0.5px solid rgba(0,0,0,0.1)",
    borderRadius: "8px", padding: "1rem 1.25rem",
    display: "flex", alignItems: "center", gap: "0.75rem", margin: "2rem 0",
  },
  sourceLabel: { fontSize: "11px", color: "#999", flex: "none" },
  ctaBox: {
    background: "#1A1A1A", borderRadius: "12px",
    padding: "2rem", textAlign: "center", margin: "3rem 0",
  },
  ctaTitle: { color: "white", fontSize: "20px", fontWeight: 500, marginBottom: "0.5rem" },
  ctaDesc: { color: "rgba(255,255,255,0.5)", fontSize: "14px", marginBottom: "1.25rem" },
  ctaBtn: {
    display: "inline-block", background: "#CCDA47", color: "#1A1A1A",
    padding: "12px 28px", borderRadius: "8px", fontSize: "14px",
    fontWeight: 600, textDecoration: "none",
  },
  tipBox: {
    background: "white", border: "0.5px solid rgba(0,0,0,0.1)",
    borderRadius: "10px", padding: "1.25rem 1.5rem", margin: "1.5rem 0",
  },
  tipTitle: {
    fontSize: "13px", fontWeight: 600, color: "#8A9A10",
    marginBottom: "0.75rem", letterSpacing: "0.3px",
  },
  tipList: { paddingLeft: "1.25rem", margin: 0 },
  tipItem: { color: "#333", fontSize: "15px", lineHeight: 1.75, marginBottom: "0.4rem" },
  disclaimer: {
    background: "rgba(0,0,0,0.04)", border: "0.5px solid rgba(0,0,0,0.1)",
    borderRadius: "8px", padding: "1rem 1.25rem", margin: "2rem 0",
  },
  disclaimerText: { fontSize: "13px", color: "#888", lineHeight: 1.65, margin: 0 },
  table: {
    width: "100%", borderCollapse: "collapse",
    margin: "1.5rem 0", fontSize: "14px", borderRadius: "8px", overflow: "hidden",
  },
  th: {
    padding: "10px 14px", textAlign: "left", background: "#1A1A1A",
    color: "#CCDA47", fontWeight: 600, fontSize: "12px", letterSpacing: "0.5px",
  },
  td: {
    padding: "10px 14px", borderBottom: "0.5px solid rgba(0,0,0,0.07)",
    color: "#333", background: "white",
  },
  tdRight: {
    padding: "10px 14px", borderBottom: "0.5px solid rgba(0,0,0,0.07)",
    textAlign: "right", fontWeight: 600, color: "#1A1A1A", background: "white",
  },
  stepBox: {
    background: "white", border: "0.5px solid rgba(0,0,0,0.08)",
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
