import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Maserati expands Grecale SUV lineup for 2027 Australian market | MustGoDeals",
  description:
    "Maserati's 2027 Grecale gains wider V6 availability and an updated Folgore EV with improved range and faster charging. Australian deliveries expected Q1 2027.",
  keywords: [
    "maserati grecale 2027",
    "maserati australia",
    "grecale v6 trofeo",
    "maserati folgore ev range",
    "premium suv australia 2027",
    "maserati grecale price australia",
  ],
  openGraph: {
    title: "Maserati expands Grecale SUV lineup for 2027 Australian market",
    description:
      "The 2027 Grecale gets wider V6 spread and a significantly upgraded Folgore EV — arriving in Australia in early 2027.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/maserati-grecale-2027-australia" },
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
          EN: "/news/maserati-grecale-2027-australia",
          KO: "/news/maserati-grecale-2027-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Maserati Grecale 2027</span>
          </div>
          <div style={S.badge}>
            <span>NEWS</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 21, 2026</span>
          </div>
          <h1 style={S.h1}>
            Maserati expands Grecale SUV lineup for{" "}
            <span style={{ color: "#CCDA47" }}>2027 Australian market</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals Editorial</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Premium SUV · Electric Vehicles</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          {/* Hero image */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg"
              alt="2027 Maserati Grecale SUV"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Maserati Media</p>
          </div>

          <p style={S.p}>
            Maserati has confirmed the expanded 2027 Grecale SUV lineup will arrive in Australia
            in early 2027, bringing a wider spread of the twin-turbocharged V6 engine and
            significant updates to the all-electric Folgore variant.
          </p>

          <p style={S.p}>
            The Grecale, which first arrived in Australia in 2023 as the brand&rsquo;s entry
            into the premium mid-size SUV segment, receives its first major product update for
            2027. The headline change is the broader availability of the 3.0-litre twin-turbo
            V6 engine — previously exclusive to the range-topping Trofeo — across a new
            mid-range configuration.
          </p>

          <h2 style={S.h2}>V6 power spreads down the range</h2>

          <p style={S.p}>
            The new mid-range V6 configuration produces 390kW and 550Nm, compared to the
            Trofeo&rsquo;s 430kW output. Maserati claims 0&ndash;100km/h in{" "}
            <span style={S.highlight}>4.1 seconds</span> for this new variant, making it one
            of the quickest SUVs available in Australia at its expected price point.
          </p>

          <p style={S.p}>
            The V6 engine expansion addresses one of the consistent criticisms levelled at the
            Grecale since launch: that the four-cylinder base models felt underpowered relative
            to the asking price and Maserati&rsquo;s sporting identity. Buyers who want the
            Maserati sound and performance character without committing to the full Trofeo
            specification now have a middle path.
          </p>

          <h2 style={S.h2}>Folgore EV gains meaningful range</h2>

          <p style={S.p}>
            The all-electric Folgore receives an updated battery pack for 2027, with capacity
            increasing from 105kWh to 118kWh. Maserati claims WLTP range improves from 464 to
            approximately <span style={S.highlight}>535 kilometres</span> in the standard
            configuration — a meaningful step for a market where real-world EV range in warm
            climates has been a persistent concern.
          </p>

          <p style={S.p}>
            Revised thermal management is also part of the update. Maserati says the system
            has been specifically tuned for warmer operating conditions, which should address
            the range degradation in summer temperatures that some early Australian Folgore
            owners reported.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>FOLGORE CHARGING UPDATE</div>
            <p style={S.calloutText}>
              The 2027 Folgore gains DC fast-charging compatibility up to 350kW, up from 150kW
              on the outgoing model. Maserati claims a 20–80% charge in approximately
              18 minutes on a compatible charger.
            </p>
          </div>

          <h2 style={S.h2}>Updated interior and technology</h2>

          <p style={S.p}>
            Interior changes across the Grecale range centre on a revised Maserati Touch Control
            Plus infotainment system, now running on updated processor hardware. Response times
            and interface fluidity — two common criticisms of earlier models — should improve
            as a result.
          </p>

          <p style={S.p}>
            New sustainable material options join the upholstery lineup, including recycled
            fabric and natural fibre choices under Maserati&rsquo;s sustainability programme,
            alongside an expanded ambient lighting system with a broader colour palette.
          </p>

          <p style={S.p}>
            Externally the changes are restrained: a revised front bumper with updated air
            intake geometry and new LED daytime running light signatures are the most visible
            changes, alongside new wheel designs available across the range.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>Australian pricing and timing</h2>

          <p style={S.p}>
            Maserati Australia has not confirmed 2027 pricing. The current Grecale lineup starts
            from approximately{" "}<span style={S.highlight}>$129,990 drive away</span> for the
            GT, rising to $229,990 for the Trofeo V6. The new mid-range V6 variant is expected
            to sit around $180,000&ndash;$190,000, though Maserati has declined to confirm
            figures ahead of the official announcement.
          </p>

          <p style={S.p}>
            First customer deliveries in Australia are expected in the{" "}
            <span style={S.highlight}>first quarter of 2027</span>. An Australian reveal event
            and official pricing announcement are planned for later in 2026.
          </p>

          <p style={S.p}>
            The 2027 Grecale competes in Australia against the Porsche Macan, BMW X3 M
            Competition, Mercedes-Benz GLC 63 AMG, and Alfa Romeo Stelvio Quadrifoglio in
            the premium performance mid-size SUV segment.
          </p>

          {/* Source */}
          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>SOURCE</span>
            <a
              href="https://www.carsales.com.au"
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
                slug: "maserati-grecale-2027-australia-ko",
                title: "마세라티, 2027 그레칼레 SUV 라인업 호주 시장에 확대 출시",
                category: "뉴스",
                date: "2026년 6월 21일",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg",
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
                slug: "end-of-month-car-deals-explained",
                title: "End of month car deals explained — secrets dealers will never tell you",
                excerpt: "Dealers face huge pressure from manufacturers at month end. Here's exactly how that pressure works — and how to use it to negotiate thousands off your next car.",
                category: "Insider Guide",
                readTime: "7 min read",
                date: "June 2026",
                lang: "EN",
              },
              {
                slug: "wolmal-jadongcha-dil-jongni",
                title: "월말 자동차 딜 총정리 — 딜러가 절대 말 안해주는 비밀",
                excerpt: "월말 마지막 3~5 영업일, 딜러에게 가장 강한 압박이 걸리는 시간. 이 타이밍과 협상 전술만 알면 수천 달러를 아낄 수 있습니다.",
                category: "한국어 가이드",
                readTime: "8분 읽기",
                date: "2026년 6월",
                lang: "KO",
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
