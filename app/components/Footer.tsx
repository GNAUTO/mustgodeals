import Link from "next/link";

const LINKS = [
  { label: "About",       href: "/about" },
  { label: "For Dealers", href: "/contact" },
  { label: "Privacy",     href: "/privacy-policy" },
  { label: "Contact",     href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#111" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "1.25rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>© 2026 MustGoDeals.com.au — Sydney, Australia</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {LINKS.map(({ label, href }) => (
            <Link key={label} href={href} style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", textDecoration: "none" }}>{label}</Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
