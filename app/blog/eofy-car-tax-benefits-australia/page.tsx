import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Should You Buy a Car Before EOFY? A Guide for Australian ABN Holders | MustGoDeals",
  description:
    "For Australian business owners with an ABN, buying a car before 30 June can deliver real tax advantages — but the rules are more nuanced than most people realise.",
  keywords: [
    "eofy car tax benefits australia",
    "buy car before eofy australia",
    "abn car tax deduction australia",
    "instant asset write-off car australia",
    "car depreciation small business australia",
    "eofy car deals australia 2026",
  ],
  openGraph: {
    title: "Should You Buy a Car Before EOFY? A Guide for Australian ABN Holders",
    description:
      "The instant asset write-off, the car limit, business-use percentage — what actually applies to your car purchase before 30 June.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/blog/eofy-car-tax-benefits-australia" },
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
  disclaimer: {
    background: "rgba(0,0,0,0.04)", border: "0.5px solid rgba(0,0,0,0.1)",
    borderRadius: "8px", padding: "1rem 1.25rem", margin: "2rem 0",
  } as React.CSSProperties,
  disclaimerText: { fontSize: "13px", color: "#888", lineHeight: 1.65, margin: 0 } as React.CSSProperties,
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
          EN: "/blog/eofy-car-tax-benefits-australia",
          KO: "/blog/eofy-car-tax-benefits-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>EOFY Car Tax Benefits</span>
          </div>
          <div style={S.badge}>
            <span>Buying Guide</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 24, 2026</span>
          </div>
          <h1 style={S.h1}>
            Should You Buy a Car Before EOFY? —{" "}
            <span style={{ color: "#CCDA47" }}>A Guide for Australian ABN Holders</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>7 min read</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Tax · EOFY · ABN · Buying Guide</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            Every June, Australian dealerships push hard on &ldquo;EOFY deals.&rdquo; For business
            owners with an ABN, there&rsquo;s a real question worth asking: does buying a car before
            30 June actually deliver a tax advantage? The answer is yes — but with some important
            caveats worth understanding before you sign anything.
          </p>

          <h2 style={S.h2}>The Instant Asset Write-Off</h2>

          <p style={S.p}>
            For the 2025–26 financial year, small businesses with aggregated turnover under{" "}
            <span style={S.highlight}>$10 million</span> can immediately deduct the full cost of
            eligible assets under <span style={S.highlight}>$20,000</span>, provided the asset is
            first used or installed ready for use by 30 June 2026.
          </p>

          <p style={S.p}>
            That&rsquo;s useful for tools, equipment and technology. For cars, however, the picture
            is more complicated.
          </p>

          <h2 style={S.h2}>Most Cars Don&rsquo;t Qualify for Instant Write-Off</h2>

          <p style={S.p}>
            Most passenger vehicles cost more than $20,000, which means they won&rsquo;t qualify
            for the instant asset write-off. Instead, they go into the small business depreciation
            pool, where they&rsquo;re depreciated at{" "}
            <span style={S.highlight}>15% in the first year</span> and{" "}
            <span style={S.highlight}>30% each year after</span>.
          </p>

          <p style={S.p}>
            So buying a car before 30 June doesn&rsquo;t mean you can deduct the full cost in one
            hit — it means you start depreciating it from this financial year instead of next.
          </p>

          <h2 style={S.h2}>The Car Limit</h2>

          <p style={S.p}>
            For 2025–26, the car limit is <span style={S.highlight}>$69,674</span>. Even if you
            spend more than this, the maximum you can use to calculate depreciation is $69,674. The
            maximum GST credit is also capped at{" "}
            <span style={S.highlight}>$6,334</span> — one-eleventh of the car limit — regardless
            of what you paid.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>2025–26 CAR LIMIT SUMMARY</div>
            <p style={S.calloutText}>
              Maximum depreciable amount: <strong>$69,674</strong><br />
              Maximum GST credit: <strong>$6,334</strong><br />
              These caps apply regardless of the actual purchase price.
            </p>
          </div>

          <h2 style={S.h2}>Business Use Percentage Matters</h2>

          <p style={S.p}>
            If you use the car for both business and personal purposes, you can only claim the
            business-use portion. A logbook showing{" "}
            <span style={S.highlight}>65% business use</span> means your deduction is calculated
            on 65% of the eligible cost.
          </p>

          <p style={S.p}>
            The ATO expects you to keep a logbook. Without one, any claim is difficult to
            substantiate.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>So What&rsquo;s the Real Advantage of Buying Before 30 June?</h2>

          <p style={S.p}>
            The tax benefit of buying before EOFY versus after is largely one of timing — you bring
            the deduction forward rather than creating a larger one. The bigger advantage is often
            the commercial one: dealerships are under the most pressure to clear stock before 30
            June, which means more negotiating room and more demo vehicles on the market.
          </p>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>QUICK SUMMARY FOR ABN HOLDERS</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>Instant write-off only applies to assets under $20,000 — most cars don&rsquo;t qualify</li>
              <li style={S.tipItem}>Cars over $20,000 go into the depreciation pool: 15% year 1, 30% each year after</li>
              <li style={S.tipItem}>Depreciation is capped at the car limit: $69,674 for 2025–26</li>
              <li style={S.tipItem}>Only the business-use percentage is deductible — keep a logbook</li>
              <li style={S.tipItem}>The real EOFY advantage is commercial: more stock, more motivated dealers</li>
            </ul>
          </div>

          <h2 style={S.h2}>One Critical Detail</h2>

          <p style={S.p}>
            The asset must be physically ready for use in your business before 30 June 2026. Simply
            paying for it or signing a contract is not enough — the vehicle must actually be{" "}
            <span style={S.highlight}>delivered and available for use</span>.
          </p>

          <div style={S.disclaimer}>
            <p style={S.disclaimerText}>
              This article is for general information purposes only and does not constitute tax
              advice. Individual circumstances vary significantly — speak with a registered tax
              agent or accountant before making any purchasing decisions based on tax considerations.
            </p>
          </div>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>Find EOFY clearance deals near you</div>
            <p style={S.ctaDesc}>Demo cars and run-out stock — updated every week before they&rsquo;re gone</p>
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
                slug: "eofy-car-tax-benefits-australia-ko",
                title: "회계연도 마감 전에 차를 사면 세금 혜택이 있을까? — ABN 사업자를 위한 가이드",
                excerpt: "Instant Asset Write-Off, Car Limit, 업무용 비율 — EOFY 전 차량 구매 시 실제로 적용되는 세금 규정을 정리했다.",
                category: "구매 가이드",
                readTime: "7분",
                date: "2026년 6월 24일",
                lang: "KO",
              },
              {
                slug: "why-buy-demo-car-australia",
                title: "Why Buying a Demo Car in Australia Makes More Sense Than You Think",
                excerpt: "Near-new quality, full manufacturer warranty, and prices 10–30% below new. Demo cars are one of the best value plays in the Australian car market.",
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
