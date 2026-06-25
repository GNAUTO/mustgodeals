import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "What Is a Novated Lease — And Is It Worth It in Australia? | MustGoDeals",
  description:
    "A novated lease lets you pay for a car with pre-tax salary. Here's exactly how it works, how much you can save, and whether it's the right move for your situation.",
  keywords: [
    "novated lease australia",
    "novated lease how it works",
    "novated lease tax savings australia",
    "novated lease ev australia",
    "fbt novated lease",
    "is novated lease worth it australia",
    "pre-tax car australia",
  ],
  openGraph: {
    title: "What Is a Novated Lease — And Is It Worth It in Australia?",
    description:
      "Pre-tax salary deduction, FBT, EV exemptions — the complete guide to novated leasing for Australian employees.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/blog/novated-lease-australia" },
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
          EN: "/blog/novated-lease-australia",
          KO: "/blog/novated-lease-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Novated Lease Explained</span>
          </div>
          <div style={S.badge}>
            <span>Buying Guide</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 25, 2026</span>
          </div>
          <h1 style={S.h1}>
            What Is a Novated Lease —{" "}
            <span style={{ color: "#CCDA47" }}>And Is It Worth It in Australia?</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>8 min read</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Finance · Tax · Novated Lease · Buying Guide</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            If you&rsquo;ve ever mentioned buying a car around Australian colleagues, chances are
            someone brought up novated leasing. &ldquo;You can save heaps on tax,&rdquo; they said
            — and then couldn&rsquo;t really explain how. This guide cuts through the jargon and
            tells you exactly what a novated lease is, how much you can actually save, and whether
            it&rsquo;s worth it for your situation.
          </p>

          <h2 style={S.h2}>What Is a Novated Lease?</h2>

          <p style={S.p}>
            A novated lease is a three-way car finance arrangement between you, your employer, and
            a leasing company. You choose the car, the leasing company purchases it, and your
            employer makes the repayments on your behalf — deducting the cost from your{" "}
            <span style={S.highlight}>pre-tax salary</span>.
          </p>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>THE THREE PARTIES</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}><strong>You</strong> — choose the car and apply through HR</li>
              <li style={S.tipItem}><strong>Your employer</strong> — pays the lease and deducts it from your gross salary</li>
              <li style={S.tipItem}><strong>The leasing company</strong> — buys the vehicle and manages running costs</li>
            </ul>
          </div>

          <p style={S.p}>
            What makes it powerful is the pre-tax deduction. Instead of buying a car with money
            you&rsquo;ve already paid income tax on, you&rsquo;re effectively using pre-tax dollars
            — which means the government is subsidising part of your car costs.
          </p>

          <h2 style={S.h2}>How the Tax Saving Works</h2>

          <p style={S.p}>
            Australia&rsquo;s income tax is progressive. The more you earn, the higher the rate on
            each additional dollar. That&rsquo;s exactly where novated leasing creates its advantage.
          </p>

          <p style={S.p}>
            Say you earn <span style={S.highlight}>$90,000</span> a year — a marginal tax rate of
            34.5% (including Medicare Levy). If your novated lease package costs $15,000 annually,
            your taxable income drops to $75,000. That&rsquo;s roughly{" "}
            <span style={S.highlight}>$5,175 back in your pocket each year</span>, just from the
            tax difference.
          </p>

          <p style={S.p}>
            And it&rsquo;s not just the car payment. Running costs — fuel, insurance, registration,
            tyres, servicing — can all be bundled into the lease and paid pre-tax. For a five-year
            lease on a $45,000 car, total savings compared to a standard purchase typically land
            between <span style={S.highlight}>$15,000 and $18,000</span> for someone on $85,000 a year.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>SAVINGS EXAMPLE</div>
            <p style={S.calloutText}>
              Income: $90,000 · Marginal rate: 34.5%<br />
              Annual lease package: $15,000 pre-tax<br />
              Tax saving: approx. <strong>$5,175/year</strong><br />
              5-year lease on $45,000 car: approx. <strong>$15,000–$18,000</strong> total saving
            </p>
          </div>

          <h2 style={S.h2}>FBT — The Variable You Can&rsquo;t Ignore</h2>

          <p style={S.p}>
            Here&rsquo;s where it gets more nuanced. When an employer provides a car benefit, the
            ATO charges <span style={S.highlight}>Fringe Benefits Tax (FBT)</span>. How your lease
            handles FBT determines how much you actually save.
          </p>

          <p style={S.p}>
            <strong>Higher kilometres = lower FBT.</strong> The ATO&rsquo;s statutory formula
            reduces the taxable value as annual kilometres increase. If you drive a lot, your FBT
            liability shrinks accordingly.
          </p>

          <p style={S.p}>
            <strong>ECM (Employee Contribution Method).</strong> You contribute a portion of
            after-tax salary toward the car costs, directly reducing the FBT taxable amount. Most
            leasing companies will model this out for you at the quote stage — make sure they do.
          </p>

          <p style={S.p}>
            Don&rsquo;t skip this part. A novated lease that hasn&rsquo;t accounted for FBT
            properly can look great on paper and disappoint in practice.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>EVs Change the Equation</h2>

          <p style={S.p}>
            Since 2022, eligible electric vehicles and plug-in hybrids under the luxury car tax
            threshold have been{" "}
            <span style={S.highlight}>exempt from FBT entirely</span>. Stack that on top of the
            pre-tax salary deduction and the savings become significant — which is why novated
            leasing has surged in popularity among EV buyers.
          </p>

          <p style={S.p}>
            If you&rsquo;re considering an EV, this is arguably the best time to run the numbers.
            Just keep in mind that policy conditions can change, so verify current eligibility
            before you sign.
          </p>

          <h2 style={S.h2}>Is It Right for You?</h2>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>NOVATED LEASING WORKS WELL IF YOU</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>Earn $70,000+ (higher tax bracket = bigger savings)</li>
              <li style={S.tipItem}>Drive regularly throughout the year</li>
              <li style={S.tipItem}>Are considering an EV or PHEV</li>
            </ul>
          </div>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>IT MAY NOT SUIT YOU IF</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>You&rsquo;re likely to change jobs during the lease term (transferable, but adds complexity)</li>
              <li style={S.tipItem}>You&rsquo;re self-employed or a contractor — no employer means no novated lease</li>
              <li style={S.tipItem}>Your annual kilometres are low — FBT liability eats into the benefit</li>
            </ul>
          </div>

          <h2 style={S.h2}>The Bottom Line</h2>

          <p style={S.p}>
            Novated leasing is a legitimate and often underused tax advantage for Australian
            employees. Done right, it can save you tens of thousands over a lease term — especially
            on an EV. But it rewards people who take the time to understand the FBT component
            before signing, not after.
          </p>

          <p style={S.p}>
            If your employer supports it and the numbers stack up for your income and driving
            habits, it&rsquo;s absolutely worth a proper quote.
          </p>

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
                slug: "novated-lease-australia-ko",
                title: "노베이티드 리스, 진짜 이득일까? 호주 직장인이라면 알아야 할 모든 것",
                excerpt: "세전 급여 공제, FBT, 전기차 면제 혜택까지 — 호주 직장인을 위한 노베이티드 리스 완전 가이드.",
                category: "구매 가이드",
                readTime: "8분",
                date: "2026년 6월 25일",
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
                slug: "car-stamp-duty-australia-explained",
                title: "What Is Stamp Duty on a Car in Australia? The Hidden Cost Most Buyers Don't See Coming",
                excerpt: "Stamp duty is a state government tax applied to every car purchase in Australia — and the rates vary significantly by state.",
                category: "Buying Guide",
                readTime: "6 min read",
                date: "June 24, 2026",
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
