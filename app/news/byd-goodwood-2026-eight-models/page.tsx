import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "BYD Is Bringing Eight New Models to Goodwood — Including a Porsche 911 Rival | MustGoDeals",
  description:
    "BYD will debut eight new models at the 2026 Goodwood Festival of Speed, including the world premiere of the Denza Z Coupe — a 350km/h EV gunning for the Porsche 911.",
  keywords: [
    "byd goodwood 2026",
    "denza z coupe",
    "byd new models 2026",
    "denza z9gt australia",
    "yangwang u9 hypercar",
    "byd goodwood festival of speed",
  ],
  openGraph: {
    title: "BYD Is Bringing Eight New Models to Goodwood — Including a Porsche 911 Rival",
    description:
      "Eight models, three brands, and the world premiere of the Denza Z — a 350km/h EV targeting the Porsche 911. BYD's Goodwood stand is the largest in the event's history.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/byd-goodwood-2026-eight-models" },
};

const S = {
  page:       { minHeight: "100vh", background: "#F5F5F0" } as React.CSSProperties,
  hero:       { background: "#1A1A1A", padding: "3rem 2rem 2.5rem" } as React.CSSProperties,
  heroInner:  { maxWidth: "780px", margin: "0 auto" } as React.CSSProperties,
  badge: {
    display: "inline-flex", alignItems: "center", gap: "6px",
    background: "rgba(204,218,71,0.15)", border: "1px solid #CCDA47",
    color: "#CCDA47", fontSize: "11px", padding: "4px 14px",
    borderRadius: "20px", marginBottom: "1.25rem", letterSpacing: "0.5px",
  } as React.CSSProperties,
  h1: {
    color: "white", fontWeight: 500, lineHeight: 1.25,
    marginBottom: "1rem", letterSpacing: "-0.5px",
  } as React.CSSProperties,
  hereMeta: {
    display: "flex", gap: "1.25rem", alignItems: "center",
    flexWrap: "wrap" as const, marginTop: "1rem",
  } as React.CSSProperties,
  metaItem:   { fontSize: "12px", color: "rgba(255,255,255,0.4)" } as React.CSSProperties,
  article:    { maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" } as React.CSSProperties,
  body:       { fontSize: "16px", lineHeight: 1.8, color: "#2A2A2A" } as React.CSSProperties,
  h2: {
    fontSize: "22px", fontWeight: 600, color: "#1A1A1A",
    marginTop: "2.25rem", marginBottom: "0.875rem", letterSpacing: "-0.3px",
  } as React.CSSProperties,
  p:          { marginBottom: "1.25rem", color: "#333", lineHeight: 1.8 } as React.CSSProperties,
  callout: {
    background: "#1A1A1A", border: "1px solid rgba(204,218,71,0.3)",
    borderLeft: "4px solid #CCDA47", borderRadius: "8px",
    padding: "1.25rem 1.5rem", margin: "1.75rem 0",
  } as React.CSSProperties,
  calloutTitle: {
    color: "#CCDA47", fontSize: "11px", fontWeight: 600,
    letterSpacing: "1px", marginBottom: "0.5rem",
  } as React.CSSProperties,
  calloutText: { color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.7, margin: 0 } as React.CSSProperties,
  highlight: {
    background: "rgba(204,218,71,0.18)", color: "#1A1A1A",
    fontWeight: 600, padding: "1px 5px", borderRadius: "3px",
  } as React.CSSProperties,
  imgWrap:    { margin: "2rem 0", borderRadius: "10px", overflow: "hidden", border: "0.5px solid rgba(0,0,0,0.08)" } as React.CSSProperties,
  imgCaption: { fontSize: "12px", color: "#999", textAlign: "center" as const, padding: "8px 0 0" } as React.CSSProperties,
  divider:    { border: "none", borderTop: "1px solid rgba(0,0,0,0.08)", margin: "2.25rem 0" } as React.CSSProperties,
  sourceBox: {
    background: "white", border: "0.5px solid rgba(0,0,0,0.1)",
    borderRadius: "8px", padding: "1rem 1.25rem",
    display: "flex", alignItems: "center", gap: "0.75rem", margin: "2rem 0",
  } as React.CSSProperties,
  sourceLabel: { fontSize: "11px", color: "#999", flex: "none" } as React.CSSProperties,
  ctaBox: {
    background: "#1A1A1A", borderRadius: "12px",
    padding: "2rem", textAlign: "center" as const, margin: "3rem 0",
  } as React.CSSProperties,
  ctaTitle:   { color: "white", fontSize: "20px", fontWeight: 500, marginBottom: "0.5rem" } as React.CSSProperties,
  ctaDesc:    { color: "rgba(255,255,255,0.5)", fontSize: "14px", marginBottom: "1.25rem" } as React.CSSProperties,
  ctaBtn: {
    display: "inline-block", background: "#CCDA47", color: "#1A1A1A",
    padding: "12px 28px", borderRadius: "8px", fontSize: "14px",
    fontWeight: 600, textDecoration: "none",
  } as React.CSSProperties,
  breadcrumb: {
    display: "flex", gap: "6px", alignItems: "center",
    fontSize: "12px", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem",
  } as React.CSSProperties,
  breadcrumbLink: { color: "rgba(255,255,255,0.35)", textDecoration: "none" } as React.CSSProperties,
};

export default function Page() {
  return (
    <div style={S.page}>
      <Navbar />
      <BlogLangTabs
        current="EN"
        links={{
          EN: "/news/byd-goodwood-2026-eight-models",
          KO: "/news/byd-goodwood-2026-eight-models-ko",
        }}
      />

      {/* Hero */}
      <div style={S.hero}>
        <div style={S.heroInner}>
          <div style={S.breadcrumb}>
            <Link href="/" style={S.breadcrumbLink}>Home</Link>
            <span>›</span>
            <Link href="/news" style={S.breadcrumbLink}>News</Link>
            <span>›</span>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>BYD Goodwood 2026</span>
          </div>
          <div style={S.badge}>
            <span>NEWS</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 23, 2026</span>
          </div>
          <h1 style={S.h1}>
            BYD Is Bringing Eight New Models to Goodwood —{" "}
            <span style={{ color: "#CCDA47" }}>Including a Porsche 911 Rival</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals Editorial</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Electric Vehicles · Performance</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            BYD is set to show off <span style={S.highlight}>eight new models</span> at
            the 2026 Goodwood Festival of Speed, with debuts spanning its BYD, Denza, and
            Yangwang brands. The display will include world premieres as well as models
            already sold in other markets that are soon to launch in Europe.
          </p>

          {/* Image 1 — Denza Z hero */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/denza-z-2-rxk7.jpg"
              alt="Denza Z Coupe at Goodwood 2026"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: BYD Media / Denza Z</p>
          </div>

          <h2 style={S.h2}>The Headline Act: Denza Z</h2>

          <p style={S.p}>
            The headline attraction is the world debut of the{" "}
            <span style={S.highlight}>Denza Z Coupe</span> and Denza Z Racing — a pair
            of performance EVs developed to take on iconic sports cars like the Porsche 911.
            Powered by three electric motors, the Z Coupe claims a top speed of nearly{" "}
            <span style={S.highlight}>350km/h</span> and offers seating for four along
            with a generous boot, while the Racing version adds a carbon fibre aero package.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>DENZA Z COUPE — KEY NUMBERS</div>
            <p style={S.calloutText}>
              Three electric motors · Top speed ~350km/h · 4-seat layout with boot ·
              Racing variant adds carbon fibre aero package · World premiere at Goodwood 2026
            </p>
          </div>

          <h2 style={S.h2}>What Else Is on Show</h2>

          <p style={S.p}>
            The display will also include the European debut of the{" "}
            <span style={S.highlight}>Denza B5 SUV</span> and the{" "}
            <span style={S.highlight}>BYD Shark 6</span> dual-cab ute — both already
            sold in Australia. Goodwood will also mark the UK launch of the Denza Z9GT
            performance sedan, earmarked for Australian launch by early 2027, and the
            D9 DM-i people mover — a plug-in hybrid described as a first-class lounge
            on wheels, featuring reclining second-row seats with massage functionality
            and heating and ventilation across all seven seats.
          </p>

          {/* Image 2 — BYD Dolphin G */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/090_byd_dolphin_g.jpg"
              alt="BYD Dolphin G DM-i"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: BYD Media / BYD Dolphin G DM-i</p>
          </div>

          <h2 style={S.h2}>Yangwang Goes Hypercar</h2>

          <p style={S.p}>
            BYD&rsquo;s luxury offshoot Yangwang will showcase the{" "}
            <span style={S.highlight}>U9 Xtreme hypercar</span>, which claims a top
            speed of <span style={S.highlight}>496.22km/h</span>, alongside the U7
            luxury sedan in both electric and plug-in hybrid forms, and the U8L luxury SUV.
          </p>

          {/* Image 3 — Denza Z9 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/denza-z9-2-e2ix.jpeg"
              alt="Denza Z9 performance sedan"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: BYD Media / Denza Z9</p>
          </div>

          <hr style={S.divider} />

          <h2 style={S.h2}>The Scale of It</h2>

          <p style={S.p}>
            BYD&rsquo;s stand will cover{" "}
            <span style={S.highlight}>2,016 square metres</span> — the largest in
            Goodwood Festival of Speed history. That alone says everything about where
            the Chinese giant believes it stands in the global automotive landscape
            right now.
          </p>

          {/* Image 4 — Yangwang U9 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/yangwang-u9-na07-bagh.jpg"
              alt="Yangwang U9 Xtreme hypercar"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: BYD Media / Yangwang U9</p>
          </div>

          {/* Source */}
          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>SOURCE</span>
            <a
              href="https://www.carsales.com.au/editorial/details/byd-to-show-off-eight-new-models-at-goodwood-152307/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              carsales.com.au ↗
            </a>
          </div>

          {/* CTA */}
          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>Get deal alerts on new arrivals</div>
            <p style={S.ctaDesc}>
              Be first to know when clearance vehicles hit the market — updated weekly
            </p>
            <Link href="/coming-soon" style={S.ctaBtn}>Get free alerts →</Link>
          </div>

        </div>
      </article>

      {/* Related News */}
      <div style={{ background: "white", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>Related News</div>
            <Link href="/news" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>All news →</Link>
          </div>
          <div className="section-grid">
            {[
              {
                slug: "byd-goodwood-2026-eight-models-ko",
                title: "BYD, 굿우드에서 8개 신모델 공개 — 포르쉐 911 라이벌도 등장",
                category: "뉴스",
                date: "2026년 6월 23일",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/denza-z-2-rxk7.jpg",
              },
              {
                slug: "renault-megane-etech-2026-australia",
                title: "2026 Renault Megane E-Tech: A Complete Overhaul for Australia",
                category: "NEWS",
                date: "June 23, 2026",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/23664-megane-studiothomascortesi-4.jpg",
              },
            ].map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="news-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "#F5F5F0", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                      <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.8px", background: "rgba(204,218,71,0.12)", padding: "2px 8px", borderRadius: "10px" }}>{item.category}</span>
                      <span style={{ fontSize: "11px", color: "#999" }}>{item.date}</span>
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4 }}>{item.title}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Articles */}
      <div style={{ background: "#ECEEE7", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>Latest Articles</div>
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>All articles →</Link>
          </div>
          <div className="section-grid">
            {[
              {
                slug: "best-time-to-buy-a-car-australia",
                title: "The Best Time to Buy a Car in Australia",
                excerpt: "End of financial year, month end, and just before a new model drops — once you understand how dealerships operate, timing stops being guesswork and starts being strategy.",
                category: "Buying Guide",
                readTime: "7 min read",
                date: "June 2026",
                lang: "EN",
              },
              {
                slug: "end-of-month-car-deals-explained",
                title: "End of month car deals explained — secrets dealers will never tell you",
                excerpt: "Dealers face huge pressure from manufacturers at month end. Here's exactly how that pressure works — and how to use it to negotiate thousands off your next car.",
                category: "Insider Guide",
                readTime: "7 min read",
                date: "June 2026",
                lang: "EN",
              },
            ].map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="news-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "white", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", padding: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" }}>{item.category}</span>
                    <span style={{ fontSize: "10px", color: "#999", background: "#F5F5F0", padding: "2px 8px", borderRadius: "10px" }}>{item.lang}</span>
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4, marginBottom: "0.5rem" }}>{item.title}</div>
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.55, marginBottom: "0.75rem" }}>{item.excerpt}</div>
                  <div style={{ fontSize: "11px", color: "#aaa" }}>{item.readTime} · {item.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
