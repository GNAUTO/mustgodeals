import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Kia PV5 Passenger: Australia's First Electric People Mover Is Coming | MustGoDeals",
  description:
    "Kia Australia confirms the PV5 Passenger electric people mover arrives in Q4 2026 — the first EV people mover on the local market, with 390km of expected range and pricing around $60,000.",
  keywords: [
    "kia pv5 passenger australia",
    "electric people mover australia",
    "kia pv5 2026",
    "kia pv5 price australia",
    "electric minivan australia",
    "kia pv5 range",
  ],
  openGraph: {
    title: "Kia PV5 Passenger: Australia's First Electric People Mover Is Coming",
    description:
      "The PV5 Passenger arrives in Australia Q4 2026 — seven seats, ~390km range, and expected pricing around $60,000.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/kia-pv5-passenger-australia-2027" },
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
          EN: "/news/kia-pv5-passenger-australia-2027",
          KO: "/news/kia-pv5-passenger-australia-2027-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Kia PV5 Passenger</span>
          </div>
          <div style={S.badge}>
            <span>NEWS</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 22, 2026</span>
          </div>
          <h1 style={S.h1}>
            Kia PV5 Passenger: Australia&rsquo;s First{" "}
            <span style={{ color: "#CCDA47" }}>Electric People Mover</span> Is Coming
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals Editorial</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Electric Vehicles · Australia</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          {/* Image 1 — hero */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.kia.com/content/dam/kwcms/kme/global/en/assets/contents/pbv/5/freecoding/pv5-passenger/Usecase_KV_01_m.jpg"
              alt="Kia PV5 Passenger electric people mover"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Kia Media</p>
          </div>

          <p style={S.p}>
            Kia Australia has confirmed the PV5 Passenger electric people mover is coming to
            Australia in the <span style={S.highlight}>fourth quarter of 2026</span>, making
            it the first electric people mover available in the local market. It will sit
            alongside the diesel and hybrid Carnival — a segment the Carnival has dominated
            for years — but with a very different pitch: zero emissions, lower running costs,
            and a clever cabin layout.
          </p>

          <h2 style={S.h2}>What It Is</h2>

          <p style={S.p}>
            The PV5 Passenger is a seven-seat, three-row electric van built on Kia&rsquo;s
            dedicated <span style={S.highlight}>E-GMP.S platform</span> — the same
            underpinning the PV5 Cargo that launched in Australia from $55,990 earlier this
            year. It measures 4,695mm long, 1,895mm wide, and 1,905mm tall, making it nearly
            400mm shorter than a Carnival, though it sits about 150mm taller.
          </p>

          <p style={S.p}>
            Seven seats are arranged in a{" "}
            <span style={S.highlight}>2+2+3 configuration</span>, with the two second-row
            seats offset to allow walkthrough access to the third row from the left-hand
            sliding door — a practical touch for kerbside boarding. Inside, a 7.5-inch
            digital instrument cluster pairs with a 12.9-inch infotainment touchscreen running
            Android Automotive OS, with Apple CarPlay and Android Auto as standard.
          </p>

          <h2 style={S.h2}>Range and Charging</h2>

          <p style={S.p}>
            All PV5s share a single-motor, front-wheel-drive setup producing{" "}
            <span style={S.highlight}>120kW and 250Nm</span>. In South Korea, the
            seven-seat PV5 Passenger claims 358km of range, and given that Kia quotes
            416km WLTP for the Australian-spec Cargo variant, the Passenger is expected
            to land around <span style={S.highlight}>390km</span> locally after tuning.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>FAST CHARGING</div>
            <p style={S.calloutText}>
              DC fast charging from 10 to 80 percent takes approximately 30 minutes —
              enough to add around 280km of range during a typical motorway stop.
            </p>
          </div>

          <h2 style={S.h2}>What Will It Cost?</h2>

          <p style={S.p}>
            Kia hasn&rsquo;t confirmed Australian pricing yet, but the numbers from other
            markets give a useful reference point. The Korean-market PV5 Passenger starts
            from around <span style={S.highlight}>A$42,400</span>, while the PV5 Cargo
            launched locally at $55,990. If the gap between Cargo and Passenger pricing
            follows a similar pattern to what&rsquo;s been seen elsewhere, expect the
            PV5 Passenger to land somewhere in the{" "}
            <span style={S.highlight}>$60,000 range</span> before on-road costs — well
            below the Volkswagen ID. Buzz, which starts at $75,990.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>Why It Matters for Australia</h2>

          <p style={S.p}>
            The people mover segment in Australia has long been the domain of the Kia Carnival
            and Toyota HiAce. The PV5 Passenger doesn&rsquo;t try to replace them outright —
            it&rsquo;s shorter, lighter, and more urban-focused. But for families, shuttle
            operators, and fleet buyers looking to electrify without paying EV premium prices,
            it arrives at the right time.
          </p>

          <p style={S.p}>
            Exact pricing, specifications, and final range figures will be confirmed closer
            to the fourth-quarter launch.
          </p>

          {/* Source */}
          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>SOURCE</span>
            <a
              href="https://www.kia.com/eu/pbv/vehicles/pv5-passenger/discover/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              Kia PV5 Passenger ↗
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
                slug: "kia-pv5-passenger-australia-2027-ko",
                title: "기아 PV5 패신저, 호주 최초의 전기 미니밴으로 온다",
                category: "뉴스",
                date: "2026년 6월 22일",
                image: "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/contents/pbv/5/freecoding/pv5-passenger/Usecase_KV_01_m.jpg",
              },
              {
                slug: "bmw-x5-2027-five-powertrains",
                title: "2027 BMW X5: One SUV, Five Ways to Power It",
                category: "NEWS",
                date: "June 22, 2026",
                image: "https://mediapool.bmwgroup.com/cache/P9/202606/P90645286/P90645286-the-new-bmw-x5-prototype-spartanburg-06-2026-2250px.jpg",
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
