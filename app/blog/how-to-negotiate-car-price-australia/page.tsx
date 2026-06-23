import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "How to Negotiate a Car Price at an Australian Dealership | MustGoDeals",
  description:
    "A practical negotiation guide for Australian car buyers — what to research beforehand, what not to say in the showroom, and the tactics that actually get dealers to move on price.",
  keywords: [
    "how to negotiate car price australia",
    "car negotiation tips australia",
    "buying a car at a dealership australia",
    "car price negotiation tactics",
    "how to get a better deal on a car australia",
    "dealership negotiation guide",
  ],
  openGraph: {
    title: "How to Negotiate a Car Price at an Australian Dealership — A Practical Guide That Actually Works",
    description:
      "The price on the sticker is almost never the final price. Here's how to negotiate it down.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/blog/how-to-negotiate-car-price-australia" },
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
          EN: "/blog/how-to-negotiate-car-price-australia",
          KO: "/blog/how-to-negotiate-car-price-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Negotiate a Car Price</span>
          </div>
          <div style={S.badge}>
            <span>Buying Guide</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 23, 2026</span>
          </div>
          <h1 style={S.h1}>
            How to Negotiate a Car Price at an Australian Dealership —{" "}
            <span style={{ color: "#CCDA47" }}>A Practical Guide That Actually Works</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>8 min read</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Negotiation · Buying Guide · Strategy</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            If you&rsquo;ve bought a car in Australia, chances are you&rsquo;ve had this thought
            afterwards: &ldquo;I probably could have paid less.&rdquo; You&rsquo;re probably right.
            The price on the sticker — or the first number a salesperson quotes — is almost never
            the final price. The question is how to negotiate it down.
          </p>

          <h2 style={S.h2}>Understand What the Dealer Wants</h2>

          <p style={S.p}>
            Good negotiation starts with understanding the other side. Dealership salespeople work
            in a variety of different structures, but in many cases there are monthly sales targets
            and performance incentives involved. That means closing deals matters — especially as
            the end of the month approaches. Knowing this changes how and when you negotiate.
          </p>

          <p style={S.p}>
            The closer it gets to{" "}
            <span style={S.highlight}>month end, quarter end, or the end of the financial year</span>,
            the more motivated a dealer is likely to be. A buyer who understands this dynamic walks
            into the showroom with an advantage.
          </p>

          <h2 style={S.h2}>Do Your Homework Before You Go</h2>

          <p style={S.p}>
            Walking into a dealership unprepared is the single biggest mistake buyers make. Before
            you visit, make sure you know at least three things.
          </p>

          <p style={S.p}>
            First, the market price for the car you want. Use Carsales, Drive, or RedBook to check
            what the same make, model, year and condition is actually selling for. You need to know
            whether the dealer&rsquo;s price is above, at, or below market before you can negotiate
            effectively.
          </p>

          <p style={S.p}>
            Second, what the competition looks like. Saying &ldquo;I&rsquo;m also looking at a
            couple of other options&rdquo; carries real weight — but only if it&rsquo;s true. Know
            what comparable models are priced at so you can back it up.
          </p>

          <p style={S.p}>
            Third, the difference between the vehicle price and the driveaway price. In Australia,
            on-top costs like registration, stamp duty and CTP insurance can add up significantly.
            Always clarify whether the price being quoted is the vehicle price or driveaway, so
            you&rsquo;re comparing apples to apples.
          </p>

          <h2 style={S.h2}>What Not to Do in the Showroom</h2>

          <p style={S.p}>
            <strong>Don&rsquo;t reveal your budget first.</strong> When a salesperson asks
            &ldquo;what are you looking to spend?&rdquo;, giving a specific number hands them the
            upper hand. A dealer won&rsquo;t work down to your budget — they&rsquo;ll work up to it.
          </p>

          <p style={S.p}>
            <strong>Don&rsquo;t bring up finance too early either.</strong> If you&rsquo;re
            planning to use dealer finance, keep that conversation until after the vehicle price is
            largely settled. Dealers can use finance margin to offset discounts on the car, which
            makes the overall picture harder to read.
          </p>

          <h2 style={S.h2}>Negotiation Tactics That Actually Work</h2>

          <p style={S.p}>
            The goal is to get the dealer to move first. The most effective opening line is simple:
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>THE OPENING LINE</div>
            <p style={S.calloutText}>
              <strong>&ldquo;What&rsquo;s the best price you can do on this one?&rdquo;</strong>
              <br /><br />
              Say it casually, and wait. This signals that price matters to you and that
              you&rsquo;re weighing up your options — without revealing anything about your budget.
              Once the dealer puts a number on the table, the real negotiation begins.
            </p>
          </div>

          <p style={S.p}>
            If they come down on price, don&rsquo;t accept immediately. Pause, think it over, then
            ask about extras — free first service, accessories thrown in, an extended warranty,
            floor mats. Cash discounts aren&rsquo;t the only way to get value.
          </p>

          <h2 style={S.h2}>If You Have a Trade-In, Negotiate It Separately</h2>

          <p style={S.p}>
            Never let the trade-in and the new car price get bundled into one conversation. Dealers
            prefer it that way because it makes the numbers harder to track. Get the new car price
            agreed first, then bring in the trade-in. That way you can see clearly what you&rsquo;re
            getting on both sides.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>When Negotiation Stalls</h2>

          <p style={S.p}>
            If the dealer stops moving, be willing to walk. Standing up and saying
            &ldquo;I&rsquo;ll think about it and come back&rdquo; is one of the most effective
            moves in the playbook. Dealers often find more flexibility the moment a buyer heads for
            the door. Just make sure you mean it — walking out works best when it&rsquo;s genuine.
          </p>

          <h2 style={S.h2}>Your Pre-Visit Checklist</h2>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>BEFORE YOU WALK IN</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>Check the market price on Carsales before you go</li>
              <li style={S.tipItem}>Research 1–2 comparable models as genuine alternatives</li>
              <li style={S.tipItem}>Confirm whether quotes are vehicle price or driveaway</li>
              <li style={S.tipItem}>Don&rsquo;t reveal your budget first</li>
              <li style={S.tipItem}>Open with: <strong>&ldquo;What&rsquo;s the best price you can do on this one?&rdquo;</strong></li>
              <li style={S.tipItem}>Keep finance discussions until after the car price is settled</li>
              <li style={S.tipItem}>Negotiate trade-in separately from the new car</li>
            </ul>
          </div>

          <p style={S.p}>
            The same car, bought on the same day, can cost two buyers very different amounts.
            Preparation is the difference.
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
                slug: "how-to-negotiate-car-price-australia-ko",
                title: "호주 딜러십에서 자동차 가격을 깎는 법 — 현장에서 통하는 실전 가이드",
                excerpt: "쇼룸에 들어서기 전 준비해야 할 것들, 절대 먼저 말하면 안 되는 것, 딜러를 움직이게 만드는 협상 전술까지.",
                category: "구매 가이드",
                readTime: "8분",
                date: "2026년 6월 23일",
                lang: "KO",
              },
              {
                slug: "best-time-to-buy-a-car-australia",
                title: "The Best Time to Buy a Car in Australia",
                excerpt: "End of financial year, month end, and just before a new model drops — once you understand how dealerships operate, timing stops being guesswork.",
                category: "Buying Guide",
                readTime: "7 min read",
                date: "June 2026",
                lang: "EN",
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
                slug: "hyundai-i20-n-hybrid-nextgen",
                title: "Next-Gen Hyundai i20 N Is Coming — With Hybrid Power That Could Beat the i30 N",
                category: "NEWS",
                date: "June 23, 2026",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/i20-n-render.jpg",
              },
              {
                slug: "byd-goodwood-2026-eight-models",
                title: "BYD Is Bringing Eight New Models to Goodwood — Including a Porsche 911 Rival",
                category: "NEWS",
                date: "June 23, 2026",
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
