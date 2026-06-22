import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "2027 BMW X5: One SUV, Five Ways to Power It | MustGoDeals",
  description:
    "The 2027 BMW X5 arrives with five powertrains in a single body — petrol, diesel, PHEV, electric, and hydrogen. Here's what we know ahead of the world premiere.",
  keywords: [
    "bmw x5 2027",
    "bmw x5 electric",
    "ix5 60 xdrive australia",
    "bmw x5 hydrogen",
    "bmw x5 phev",
    "bmw x5 australia 2027",
  ],
  openGraph: {
    title: "2027 BMW X5: One SUV, Five Ways to Power It",
    description:
      "Five powertrains in one body — petrol, diesel, PHEV, BEV, and hydrogen. The 2027 X5 is BMW's most ambitious model yet.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/bmw-x5-2027-five-powertrains" },
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
          EN: "/news/bmw-x5-2027-five-powertrains",
          KO: "/news/bmw-x5-2027-five-powertrains-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>BMW X5 2027</span>
          </div>
          <div style={S.badge}>
            <span>NEWS</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 22, 2026</span>
          </div>
          <h1 style={S.h1}>
            2027 BMW X5: One SUV,{" "}
            <span style={{ color: "#CCDA47" }}>Five Ways to Power It</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals Editorial</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Electric Vehicles · Technology</span>
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
              src="https://mediapool.bmwgroup.com/cache/P9/202606/P90645286/P90645286-the-new-bmw-x5-prototype-spartanburg-06-2026-2250px.jpg"
              alt="2027 BMW X5 prototype"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
            />
            <p style={S.imgCaption}>Image: BMW Group Media</p>
          </div>

          <p style={S.p}>
            BMW has confirmed the next-generation X5 is in its final stages of development,
            with a world premiere expected in the coming weeks. What makes this particular
            model unlike anything BMW has produced before is its powertrain lineup — the
            2027 X5 is the first BMW model built to house{" "}
            <span style={S.highlight}>five separate powertrains</span> in a single body:
            petrol, diesel, plug-in hybrid, battery-electric, and eventually a hydrogen
            fuel cell variant.
          </p>

          <h2 style={S.h2}>The Lineup</h2>

          <p style={S.p}>
            The X5 40 xDrive will produce <span style={S.highlight}>400 hp</span>, the
            X5 50e xDrive plug-in hybrid is rated at <span style={S.highlight}>490 hp</span>,
            and the iX5 60 xDrive electric comes in at{" "}
            <span style={S.highlight}>578 hp</span>. The X5 40 xDrive runs 0&ndash;62 mph
            in 5.4 seconds, the X5 50e xDrive in 5.0 seconds, and the iX5 60 xDrive in
            4.7 seconds.
          </p>

          <p style={S.p}>
            The electric iX5 is the headline act. According to leaked EPA and CARB
            certification data, the iX5 60 xDrive has a dual-motor AWD setup producing
            around 569 hp, with a 10&ndash;80% charging session expected to take about
            25 minutes on a compatible DC fast charger.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>IX5 CHARGING</div>
            <p style={S.calloutText}>
              Based on EPA and CARB certification data, the iX5 60 xDrive is expected to
              complete a 10&ndash;80% DC fast-charge in approximately 25 minutes — putting
              it on par with the best fast-charging EVs currently on sale.
            </p>
          </div>

          <h2 style={S.h2}>Hydrogen Comes Later</h2>

          <p style={S.p}>
            The hydrogen fuel cell version, the iX5 Hydrogen, is built in collaboration
            with Toyota and is scheduled for launch in{" "}
            <span style={S.highlight}>2028</span>. BMW and Toyota have been co-developing
            hydrogen fuel cell technology since 2013, and the iX5 Hydrogen represents the
            first passenger-car result of that partnership reaching the market.
          </p>

          <p style={S.p}>
            Hydrogen variants are likely to remain limited in volume at launch, tied closely
            to the availability of hydrogen refuelling infrastructure — a network that
            remains in early development in Australia.
          </p>

          <h2 style={S.h2}>Engineering Behind the Flexibility</h2>

          <p style={S.p}>
            Front and rear axle carrier mounting points are identical across the ICE, PHEV,
            and BEV versions — only the hardware bolted to them changes. This single-platform
            approach is central to BMW&rsquo;s Neue Klasse strategy, allowing the same
            production line to accommodate radically different drivetrains without retooling.
          </p>

          <p style={S.p}>
            BMW also targeted even front-to-rear weight distribution on every version, with
            the BEV battery sitting low between the axles. The result is a centre of gravity
            lower than the outgoing X5 across all powertrain variants — a meaningful gain
            for a vehicle that is now considerably heavier in its electric form.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>Australia Timing</h2>

          <p style={S.p}>
            The 2027 BMW X5 is expected to launch in the{" "}
            <span style={S.highlight}>October&ndash;December 2026</span> period. Australian
            pricing and variant details are yet to be confirmed, but the X5 has historically
            arrived in Australia within months of its global debut.
          </p>

          <p style={S.p}>
            The current X5 xDrive40i starts from $119,900 in Australia. With the expanded
            powertrain range and updated platform, a price increase across the lineup is
            widely expected, though BMW Australia has not yet commented on 2027 pricing.
          </p>

          {/* Source */}
          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>SOURCE</span>
            <a
              href="https://www.press.bmwgroup.com/global/article/detail/T0458432EN/on-the-finishing-straight:-the-new-bmw-x5-enters-its-final-test-phase"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              BMW Group Press ↗
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
                slug: "bmw-x5-2027-five-powertrains-ko",
                title: "2027 BMW X5: 하나의 SUV, 다섯 가지 파워트레인",
                category: "뉴스",
                date: "2026년 6월 22일",
                image: "https://mediapool.bmwgroup.com/cache/P9/202606/P90645286/P90645286-the-new-bmw-x5-prototype-spartanburg-06-2026-2250px.jpg",
              },
              {
                slug: "porsche-taycan-e-shift-2027",
                title: "Porsche Taycan gets simulated gear shifts — and it's more interesting than it sounds",
                category: "NEWS",
                date: "June 18, 2026",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/s26_0407.jpg",
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
