import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Mazda 6e and CX-6e Clock Up Thousands of Orders Ahead of Australian Launch | MustGoDeals",
  description:
    "The Mazda 6e sold its initial 300-unit pre-order allocation in two weeks. Now the CX-6e SUV is seeing even stronger demand — and it hasn't even been priced yet.",
  keywords: [
    "mazda 6e australia",
    "mazda cx-6e australia",
    "mazda ev australia 2026",
    "mazda cx-6e pre-order",
    "mazda 6e delivery date australia",
    "mazda electric car australia",
  ],
  openGraph: {
    title: "Mazda 6e and CX-6e Clock Up Thousands of Orders Ahead of Australian Launch",
    description:
      "300 pre-orders for the 6e sold out in two weeks. The CX-6e SUV is seeing even more interest — and pricing hasn't even been announced yet.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/mazda-6e-cx6e-orders-australia-2026" },
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
          EN: "/news/mazda-6e-cx6e-orders-australia-2026",
          KO: "/news/mazda-6e-cx6e-orders-australia-2026-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Mazda 6e &amp; CX-6e Orders</span>
          </div>
          <div style={S.badge}>
            <span>NEWS</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 24, 2026</span>
          </div>
          <h1 style={S.h1}>
            Mazda 6e and CX-6e Clock Up Thousands of Orders —{" "}
            <span style={{ color: "#CCDA47" }}>Ahead of Australian Launch</span>
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

          <p style={S.p}>
            Mazda&rsquo;s electric push in Australia is gathering real momentum. The Mazda 6e sedan
            launched with a limited pre-order offer — the first 300 customers to order a GT would
            receive a free upgrade to the Atenza, worth $3,000 — and all{" "}
            <span style={S.highlight}>300 units sold out within two weeks</span>. Now the CX-6e
            SUV is following the same playbook, and early signs suggest demand could be even stronger.
          </p>

          {/* Image 1 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.mazda.com.au/4966d2/globalassets/vehicle-landing-pages/cx-6e/launch-vlp/assets/au41-p00005750_mazda_cx-6e_vlp_introduction_1300x650px.jpg"
              alt="Mazda CX-6e SUV Australia"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Mazda Australia Media</p>
          </div>

          <h2 style={S.h2}>The Numbers So Far</h2>

          <p style={S.p}>
            Mazda Australia&rsquo;s Director of Sales and Marketing Jarrod Gieschen said dealers had
            already exceeded 300 pre-orders for the 6e sedan and reported even greater interest in
            the upcoming CX-6e SUV. &ldquo;We obviously haven&rsquo;t announced pricing yet, but
            the dealers are saying we&rsquo;ve sold these 300 cars and we&rsquo;ve actually got more
            interest in the SUV, waiting for pricing,&rdquo; Gieschen said. &ldquo;If you look at
            the industry, it&rsquo;s about a one to four ratio for sedans to SUVs, so it probably
            makes sense that this vehicle has a lot more volume potential.&rdquo;
          </p>

          <h2 style={S.h2}>What You&rsquo;re Actually Getting</h2>

          <p style={S.p}>
            The Mazda 6e is priced from{" "}
            <span style={S.highlight}>$49,990 before on-road costs</span>, with first deliveries
            due in July 2026. It&rsquo;s bigger, roomier, higher-tech and more luxurious than the
            previous Mazda6, built on a dedicated EV platform and offering a claimed{" "}
            <span style={S.highlight}>560km WLTP driving range</span>.
          </p>

          <p style={S.p}>
            The CX-6e SUV is priced from{" "}
            <span style={S.highlight}>$53,990 before on-road costs</span>, with first deliveries
            expected from September 2026. It&rsquo;s powered by a 78kWh LFP battery and a 190kW
            rear-mounted motor, with a claimed{" "}
            <span style={S.highlight}>484km WLTP range</span> and 30–80% charging in as little as
            15 minutes.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>PRE-ORDER OFFER</div>
            <p style={S.calloutText}>
              The first 1,000 customers to pre-order the CX-6e GT will receive a free upgrade to
              the Azami, saving $3,000 — the same offer that sold out the 6e sedan allocation in
              two weeks.
            </p>
          </div>

          {/* Image 2 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.mazda.com.au/4966d0/globalassets/vehicle-landing-pages/cx-6e/launch-vlp/assets/au41-p00005750_mazda_cx-6e_exterior_960x480px_01.jpg"
              alt="Mazda CX-6e Exterior"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Mazda Australia Media</p>
          </div>

          <h2 style={S.h2}>How It Stacks Up</h2>

          <p style={S.p}>
            The CX-6e&rsquo;s $53,990 starting price undercuts the{" "}
            <span style={S.highlight}>Tesla Model Y by around $5,000</span>, the BYD Sealion 7 by
            $1,000, and the Zeekr 7X by almost $4,000. For a brand with over 140 dealerships across
            Australia and a strong existing customer base, that price positioning gives it a genuine
            shot at the top-selling EV SUV segment.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>Why It Matters</h2>

          <p style={S.p}>
            Both models are built through Mazda&rsquo;s joint venture with Changan in China — a
            pragmatic decision that keeps costs down without compromising on the design and driving
            feel Mazda is known for. The 6e was named{" "}
            <span style={S.highlight}>2026 World Car Design of the Year</span>, and early drive
            reviews have praised both cars for their refinement, cabin quality, and value. If the
            CX-6e demand holds, Mazda could be looking at one of the stronger EV launches Australia
            has seen this year.
          </p>

          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>SOURCE</span>
            <a
              href="https://www.mazda.com.au/cars/cx-6e/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              mazda.com.au ↗
            </a>
          </div>

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
                slug: "mazda-6e-cx6e-orders-australia-2026-ko",
                title: "마즈다 6e·CX-6e, 호주 출시 전 수천 건 사전 주문 돌파",
                category: "뉴스",
                date: "2026년 6월 24일",
                image: "https://www.mazda.com.au/content/dam/mazda/australia/en/cars/cx-6e/overview/cx6e-overview-hero.jpg",
              },
              {
                slug: "hyundai-i20-n-hybrid-nextgen",
                title: "Next-Gen Hyundai i20 N Is Coming — With Hybrid Power That Could Beat the i30 N",
                category: "NEWS",
                date: "June 23, 2026",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/i20-n-render.jpg",
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
                slug: "why-buy-demo-car-australia",
                title: "Why Buying a Demo Car in Australia Makes More Sense Than You Think",
                excerpt: "Near-new quality, full warranty, 10–30% below new price. Demo cars are one of the best value plays in the Australian car market.",
                category: "Buying Guide",
                readTime: "7 min read",
                date: "June 24, 2026",
                lang: "EN",
              },
              {
                slug: "how-to-negotiate-car-price-australia",
                title: "How to Negotiate a Car Price at an Australian Dealership — A Practical Guide That Actually Works",
                excerpt: "The price on the sticker is almost never the final price. Here's what to research beforehand and the tactics that actually work.",
                category: "Buying Guide",
                readTime: "8 min read",
                date: "June 23, 2026",
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
