import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "The Best Time to Buy a Car in Australia | MustGoDeals",
  description:
    "End of financial year, month end, and just before a new model drops — once you understand how Australian dealerships operate, timing stops being guesswork and starts being strategy.",
  keywords: [
    "best time to buy a car australia",
    "when to buy a car australia",
    "end of financial year car deals australia",
    "end of month car deals australia",
    "demo car deals australia",
    "car buying timing australia",
    "new model car discount australia",
  ],
  openGraph: {
    title: "The Best Time to Buy a Car in Australia",
    description:
      "End of financial year, month end, and just before a new model drops — once you understand how dealerships operate, timing stops being guesswork.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/blog/best-time-to-buy-a-car-australia" },
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
  table: {
    width: "100%", borderCollapse: "collapse" as const,
    margin: "1.5rem 0", fontSize: "14px",
    border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden",
  } as React.CSSProperties,
  th: {
    background: "#1A1A1A", color: "#CCDA47", padding: "10px 14px",
    textAlign: "left" as const, fontWeight: 600, fontSize: "12px", letterSpacing: "0.3px",
  } as React.CSSProperties,
  td: {
    padding: "10px 14px", borderBottom: "1px solid rgba(0,0,0,0.07)",
    color: "#333", fontSize: "14px", verticalAlign: "top" as const,
  } as React.CSSProperties,
};

export default function Page() {
  return (
    <div style={S.page}>
      <Navbar />
      <BlogLangTabs
        current="EN"
        links={{
          EN: "/blog/best-time-to-buy-a-car-australia",
          KO: "/blog/best-time-to-buy-a-car-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Best Time to Buy</span>
          </div>
          <div style={S.badge}>
            <span>Buying Guide</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 2026</span>
          </div>
          <h1 style={S.h1}>
            The Best Time to Buy a Car{" "}
            <span style={{ color: "#CCDA47" }}>in Australia</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>7 min read</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Timing · Strategy · Buying Guide</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            If you&rsquo;re thinking about buying a car, chances are you&rsquo;ve asked yourself
            this question: is now the right time, or should I wait a little longer? The good news
            is there&rsquo;s a fairly clear answer. Once you understand how Australian dealerships
            operate, timing stops being guesswork and starts being strategy.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>IF YOU&rsquo;RE READING THIS RIGHT NOW — END OF JUNE IS YOUR WINDOW</div>
            <p style={S.calloutText}>
              Today is June 22. There are just 8 days left until June 30 — the end of the
              Australian financial year. For dealerships, this date is far more than just the end
              of a month. It&rsquo;s when annual sales figures are locked in and manufacturer
              incentives are determined. Dealer flexibility on pricing peaks at this time of year.
              If you&rsquo;ve been sitting on the fence, now is the time to pick up the phone and
              check what&rsquo;s available.
            </p>
          </div>

          <h2 style={S.h2}>The Year in Buying: A Month-by-Month Guide</h2>

          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Period</th>
                <th style={S.th}>What&rsquo;s Happening</th>
                <th style={S.th}>Good Time to Buy?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["January",      "Post-holiday slow season, fewer buyers",      "Good"],
                ["Feb–March",    "End of Q1, stock clearance",                  "Good"],
                ["April–May",    "Quiet months, no major events",               "Average"],
                ["June",         "End of financial year, biggest discounts",    "★ Best"],
                ["July–August",  "New stock arriving, new models incoming",     "Average"],
                ["September",    "End of Q3, stock clearance",                  "Good"],
                ["Oct–November", "Quiet months",                                "Average"],
                ["December",     "Year-end promotions, stock clearance",        "Good"],
              ].map(([period, desc, rating], i) => (
                <tr key={i} style={{ background: rating.includes("Best") ? "rgba(204,218,71,0.07)" : i % 2 === 0 ? "white" : "#FAFAF8" }}>
                  <td style={{ ...S.td, fontWeight: rating.includes("Best") ? 600 : 400 }}>{period}</td>
                  <td style={S.td}>{desc}</td>
                  <td style={{ ...S.td, color: rating.includes("Best") ? "#8A9A10" : rating === "Good" ? "#555" : "#999", fontWeight: rating.includes("Best") ? 700 : 400 }}>{rating}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={S.h2}>Why the Last 3–5 Days of the Month Matter Most</h2>

          <p style={S.p}>
            Dealership sales targets reset every month. In the final 3–5 days, it becomes clear
            whether a dealer is going to hit their number or not — and that pressure changes
            everything. Deals that were knocked back at the start of the month have a way of
            getting approved at the end. Dealers who wouldn&rsquo;t budge on price suddenly find
            room to move. If you can time your visit to those final days, you&rsquo;re walking in
            with maximum leverage.
          </p>

          <p style={S.p}>
            The mechanism behind this is the{" "}
            <span style={S.highlight}>stair-step bonus</span> — a manufacturer incentive structure
            where hitting a monthly sales target unlocks a large payment applied retroactively
            across every vehicle sold that month. The last one or two cars can determine whether
            that entire bonus is triggered, which means a dealer will often sacrifice margin to
            close a deal rather than miss the threshold entirely.
          </p>

          <h2 style={S.h2}>Just Before a New Model Drops — Hidden Opportunity</h2>

          <p style={S.p}>
            When a new model is announced, existing stock becomes a headache for dealers. They
            need to clear the lot before the new cars arrive, and that urgency translates directly
            into better deals for buyers. Models like the Toyota RAV4 and Mazda CX-5 regularly
            see strong discounts on outgoing stock in the lead-up to a facelift or full model
            change.
          </p>

          <p style={S.p}>
            If you don&rsquo;t need the latest version, this is one of the smartest ways to buy.
            Dealers will often reach out proactively during this window — &ldquo;if you decide
            this month, I can offer you something special&rdquo; — which is a strong signal that
            the outgoing stock is costing them money every week it sits unsold.
          </p>

          <h2 style={S.h2}>Demo Cars — Peak Stock Hits in June and July</h2>

          <p style={S.p}>
            Every year around the end of the financial year, dealership demo vehicles flood the
            used car market. These cars often have minimal kilometres and have been well maintained,
            but they&rsquo;re priced{" "}
            <span style={S.highlight}>10–15% below new</span>. If you want near-new quality
            without the new-car price tag, June and July is when to look. Ask the dealer
            specifically whether any demos are available in the model you want — they won&rsquo;t
            always volunteer this information.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>What You Can Do Right Now</h2>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>PRE-JUNE 30 ACTION LIST</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>Research fair market pricing for the model you want (Carsales and Drive are good starting points)</li>
              <li style={S.tipItem}>Book a dealership visit or call before June 30</li>
              <li style={S.tipItem}>Review your finance options before you go (bank vs dealer finance)</li>
              <li style={S.tipItem}>Ask specifically about demo stock</li>
              <li style={S.tipItem}>
                When negotiating, try this line:{" "}
                <strong>&ldquo;What&rsquo;s the best price you can do on this one?&rdquo;</strong>{" "}
                — say it casually, and let the dealer make the first move
              </li>
            </ul>
          </div>

          <p style={S.p}>
            No matter how good the timing is, an unprepared buyer will still miss out. Now that
            you know when to go, make sure you&rsquo;re ready when you get there.
          </p>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>Get month-end deal alerts</div>
            <p style={S.ctaDesc}>Clearance vehicles dealers need to move — delivered to your inbox every week</p>
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
                slug: "best-time-to-buy-a-car-australia-ko",
                title: "호주에서 자동차를 가장 싸게 살 수 있는 시기",
                excerpt: "회계연도 마감, 월말, 신형 출시 직전. 호주 딜러십이 움직이는 방식을 이해하면 타이밍은 운이 아니라 전략이 된다.",
                category: "구매 가이드",
                readTime: "7분 읽기",
                date: "2026년 6월",
                lang: "KO",
              },
              {
                slug: "end-of-month-car-deals-explained",
                title: "End of Month Car Deals Explained — Secrets Dealers Will Never Tell You",
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
                slug: "maserati-grecale-2027-australia",
                title: "Maserati expands Grecale SUV lineup for 2027 Australian market",
                category: "NEWS",
                date: "June 21, 2026",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg",
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
