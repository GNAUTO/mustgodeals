import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "What Is Stamp Duty on a Car in Australia? The Hidden Cost Most Buyers Don't See Coming | MustGoDeals",
  description:
    "Stamp duty is a state government tax applied to every car purchase in Australia — and the rates vary significantly by state. Here's what you need to know before you buy.",
  keywords: [
    "stamp duty car australia",
    "motor vehicle duty australia",
    "car stamp duty nsw",
    "car stamp duty queensland",
    "car stamp duty victoria",
    "driveaway price stamp duty australia",
    "car buying costs australia",
  ],
  openGraph: {
    title: "What Is Stamp Duty on a Car in Australia? The Hidden Cost Most Buyers Don't See Coming",
    description:
      "Every state sets its own rate. The same car bought in different states can attract very different stamp duty costs.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/blog/car-stamp-duty-australia-explained" },
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
    color: "white", fontSize: "38px", fontWeight: 500,
    lineHeight: 1.25, marginBottom: "1rem", letterSpacing: "-0.5px",
  } as React.CSSProperties,
  hereMeta: {
    display: "flex", gap: "1.25rem", alignItems: "center",
    flexWrap: "wrap" as const, marginTop: "1rem",
  } as React.CSSProperties,
  metaItem:   { fontSize: "12px", color: "rgba(255,255,255,0.4)" } as React.CSSProperties,
  article:    { maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" } as React.CSSProperties,
  body:       { fontSize: "16px", lineHeight: 1.8, color: "#2A2A2A" } as React.CSSProperties,
  h2: {
    fontSize: "24px", fontWeight: 600, color: "#1A1A1A",
    marginTop: "2.5rem", marginBottom: "1rem", letterSpacing: "-0.3px",
  } as React.CSSProperties,
  p:          { marginBottom: "1.25rem", color: "#333", lineHeight: 1.8 } as React.CSSProperties,
  callout: {
    background: "#1A1A1A", border: "1px solid rgba(204,218,71,0.3)",
    borderLeft: "4px solid #CCDA47", borderRadius: "8px",
    padding: "1.25rem 1.5rem", margin: "1.75rem 0",
  } as React.CSSProperties,
  calloutTitle: {
    color: "#CCDA47", fontSize: "12px", fontWeight: 600,
    letterSpacing: "1px", marginBottom: "0.5rem",
  } as React.CSSProperties,
  calloutText: { color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.7, margin: 0 } as React.CSSProperties,
  tipBox: {
    background: "white", border: "0.5px solid rgba(0,0,0,0.1)",
    borderRadius: "10px", padding: "1.25rem 1.5rem", margin: "1.5rem 0",
  } as React.CSSProperties,
  tipTitle: {
    fontSize: "13px", fontWeight: 600, color: "#8A9A10",
    marginBottom: "0.75rem", letterSpacing: "0.3px",
  } as React.CSSProperties,
  tipList: { paddingLeft: "1.25rem", margin: 0 } as React.CSSProperties,
  tipItem: { color: "#333", fontSize: "15px", lineHeight: 1.75, marginBottom: "0.4rem" } as React.CSSProperties,
  highlight: {
    background: "rgba(204,218,71,0.2)", color: "#1A1A1A",
    fontWeight: 600, padding: "1px 5px", borderRadius: "3px",
  } as React.CSSProperties,
  divider:    { border: "none", borderTop: "1px solid rgba(0,0,0,0.08)", margin: "2.5rem 0" } as React.CSSProperties,
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
          EN: "/blog/car-stamp-duty-australia-explained",
          KO: "/blog/car-stamp-duty-australia-explained-ko",
        }}
      />

      {/* Hero */}
      <div style={S.hero}>
        <div style={S.heroInner}>
          <div style={S.breadcrumb}>
            <Link href="/" style={S.breadcrumbLink}>Home</Link>
            <span>›</span>
            <Link href="/blog" style={S.breadcrumbLink}>Blog</Link>
            <span>›</span>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Stamp Duty Explained</span>
          </div>
          <div style={S.badge}>
            <span>Buying Guide</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 24, 2026</span>
          </div>
          <h1 style={S.h1}>
            What Is Stamp Duty on a Car in Australia? —{" "}
            <span style={{ color: "#CCDA47" }}>The Hidden Cost Most Buyers Don&rsquo;t See Coming</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>6 min read</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Costs · Stamp Duty · Buying Guide</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            One of the most common surprises for first-time car buyers in Australia is the final
            price. You&rsquo;ve negotiated hard, agreed on a number, and then the paperwork reveals
            a figure higher than expected. The culprit is usually{" "}
            <span style={S.highlight}>stamp duty</span> — a state government tax that applies to
            every car purchase, new or used.
          </p>

          <h2 style={S.h2}>What Is Stamp Duty?</h2>

          <p style={S.p}>
            Stamp duty, also known as motor vehicle duty or registration duty, is a tax imposed by
            state governments on the purchase of vehicles. It applies to both new and used cars.
            Think of it as a transfer tax — the cost of putting the vehicle in your name.
          </p>

          <p style={S.p}>
            The critical thing to understand is that{" "}
            <span style={S.highlight}>there is no national rate</span>. Every state and territory
            sets its own stamp duty rules, rates and thresholds. The same car bought in different
            states can attract very different stamp duty costs.
          </p>

          <h2 style={S.h2}>Rates by State</h2>

          <p style={S.p}>
            In <strong>NSW</strong>, stamp duty is{" "}
            <span style={S.highlight}>3%</span> on vehicles up to $44,999 and{" "}
            <span style={S.highlight}>5%</span> on vehicles $45,000 and above. On a $50,000 car,
            that works out to around <span style={S.highlight}>$1,600</span> in stamp duty alone.
          </p>

          <p style={S.p}>
            In <strong>Queensland</strong>, rates are based on engine type. Vehicles with 1–4
            cylinders pay $3 per $100 below $100,000, while 5–6 cylinder vehicles pay $3.50 per
            $100. Hybrids and EVs get the lowest rate at{" "}
            <span style={S.highlight}>$2 per $100</span>.
          </p>

          <p style={S.p}>
            <strong>Victoria</strong> calculates stamp duty on the higher of market value or
            purchase price, with different rates applying based on CO₂ emissions. Vehicles emitting
            under 120g/km qualify for a lower &ldquo;green&rdquo; rate.
          </p>

          <p style={S.p}>
            The <strong>Northern Territory</strong> uses a simple{" "}
            <span style={S.highlight}>flat rate of 3%</span> of the vehicle&rsquo;s dutiable value.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>EXAMPLE: $50,000 CAR IN NSW</div>
            <p style={S.calloutText}>
              Vehicle price: $50,000<br />
              Stamp duty rate: 5% (above $45,000 threshold)<br />
              Stamp duty payable: approx. <strong>$1,600</strong><br />
              This is on top of registration, CTP and dealer fees.
            </p>
          </div>

          <h2 style={S.h2}>Is It Included in the Driveaway Price?</h2>

          <p style={S.p}>
            When buying from a dealership, stamp duty is typically{" "}
            <span style={S.highlight}>included in the driveaway price</span>. For private sales,
            the buyer pays it directly to their state&rsquo;s transport authority when transferring
            registration.
          </p>

          <p style={S.p}>
            This is why it&rsquo;s essential to ask whether a quoted price is the vehicle price or
            driveaway. If it&rsquo;s just the vehicle price, stamp duty will be added on top.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>Electric Vehicles</h2>

          <p style={S.p}>
            Some states offer stamp duty concessions for EVs. The NT exempts EVs up to $50,000
            from stamp duty until June 2027. Queensland charges a lower rate for hybrids and EVs.
            The ACT applies lower rates to lower-emission vehicles. NSW and Tasmania have ended
            their EV stamp duty concessions.
          </p>

          <h2 style={S.h2}>Why It Matters Before You Budget</h2>

          <p style={S.p}>
            Stamp duty isn&rsquo;t negotiable. Unlike the car price, which you can work on with
            the dealer, stamp duty is{" "}
            <span style={S.highlight}>fixed by the state government</span>. That makes it essential
            to factor into your total budget before you start shopping — not after you&rsquo;ve
            already fallen in love with a car.
          </p>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>OFFICIAL STAMP DUTY CALCULATORS</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}><strong>NSW</strong> — Service NSW vehicle stamp duty calculator</li>
              <li style={S.tipItem}><strong>QLD</strong> — Queensland Government vehicle registration duty calculator</li>
              <li style={S.tipItem}><strong>VIC</strong> — State Revenue Office motor vehicle duty calculator</li>
              <li style={S.tipItem}><strong>NT</strong> — Territory Revenue Office (flat 3% rate)</li>
            </ul>
          </div>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>See what clearance deals are available now</div>
            <p style={S.ctaDesc}>End-of-month stock dealers need to move — updated every week</p>
            <Link href="/coming-soon" style={S.ctaBtn}>Get free alerts →</Link>
          </div>

        </div>
      </article>

      {/* Related Articles */}
      <div style={{ background: "white", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>Related Articles</div>
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>All articles →</Link>
          </div>
          <div className="section-grid">
            {[
              {
                slug: "car-stamp-duty-australia-explained-ko",
                title: "호주에서 차 살 때 스탬프 듀티란? — 아무도 알려주지 않는 숨겨진 비용",
                excerpt: "주마다 세율이 다르다. 같은 차라도 어느 주에서 사느냐에 따라 수천 달러 차이가 날 수 있다.",
                category: "구매 가이드",
                readTime: "6분",
                date: "2026년 6월 24일",
                lang: "KO",
              },
              {
                slug: "eofy-car-tax-benefits-australia",
                title: "Should You Buy a Car Before EOFY? A Guide for Australian ABN Holders",
                excerpt: "For Australian business owners with an ABN, buying a car before 30 June can deliver real tax advantages — but the rules are more nuanced than most people realise.",
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
                <div style={{ background: "#F5F5F0", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", padding: "1.25rem", height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" }}>{item.category}</span>
                    <span style={{ fontSize: "10px", color: "#999", background: "white", padding: "2px 8px", borderRadius: "10px" }}>{item.lang}</span>
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

      {/* Latest News */}
      <div style={{ background: "#ECEEE7", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>Latest News</div>
            <Link href="/news" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>All news →</Link>
          </div>
          <div className="section-grid">
            {[
              {
                slug: "australia-fuel-excise-relief-extended-july-2026",
                title: "Fuel Prices to Stay Lower for a Little Longer as Australia Extends Excise Relief",
                category: "NEWS",
                date: "June 24, 2026",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/7cb59eee-4c04-5d94-82a8-793a2e150000",
              },
              {
                slug: "mazda-6e-cx6e-orders-australia-2026",
                title: "Mazda 6e and CX-6e Clock Up Thousands of Orders Ahead of Australian Launch",
                category: "NEWS",
                date: "June 24, 2026",
                image: "https://www.mazda.com.au/4966d2/globalassets/vehicle-landing-pages/cx-6e/launch-vlp/assets/au41-p00005750_mazda_cx-6e_vlp_introduction_1300x650px.jpg",
              },
              {
                slug: "hyundai-i20-n-hybrid-nextgen",
                title: "Next-Gen Hyundai i20 N Is Coming — With Hybrid Power That Could Beat the i30 N",
                category: "NEWS",
                date: "June 23, 2026",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/i20-n-render.jpg",
              },
            ].map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="news-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "white", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "130px", objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "0.875rem" }}>
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

      <Footer />
    </div>
  );
}
