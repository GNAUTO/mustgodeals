import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Why Buying a Demo Car in Australia Makes More Sense Than You Think | MustGoDeals",
  description:
    "Demo cars offer near-new quality, full manufacturer warranty, and prices 10–30% below new. Here's why they're worth serious consideration — especially right now.",
  keywords: [
    "demo car australia",
    "buy demo car australia",
    "demo car vs new car australia",
    "demo car warranty australia",
    "demo car deals australia",
    "best time to buy demo car australia",
  ],
  openGraph: {
    title: "Why Buying a Demo Car in Australia Makes More Sense Than You Think",
    description:
      "Near-new quality, full warranty, 10–30% below new price. Demo cars are one of the best value plays in the Australian car market.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/blog/why-buy-demo-car-australia" },
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
          EN: "/blog/why-buy-demo-car-australia",
          KO: "/blog/why-buy-demo-car-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Why Buy a Demo Car</span>
          </div>
          <div style={S.badge}>
            <span>Buying Guide</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 24, 2026</span>
          </div>
          <h1 style={S.h1}>
            Why Buying a Demo Car in Australia{" "}
            <span style={{ color: "#CCDA47" }}>Makes More Sense Than You Think</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>7 min read</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Demo Cars · Buying Guide · Value</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            When most people go car shopping, they picture something brand new — zero kilometres,
            untouched, straight from the factory. That feeling is understandable. But spend a
            little time looking at the Australian car market and it becomes clear that demo cars
            offer something hard to ignore:{" "}
            <span style={S.highlight}>near-new quality at a significantly lower price</span>.
          </p>

          <h2 style={S.h2}>What Exactly Is a Demo Car?</h2>

          <p style={S.p}>
            A demo car is a vehicle that a dealership has registered and used for display or test
            drive purposes. It might have sat in the showroom for customers to inspect, or been
            used for test drives. Either way, it started life as a new car — the key difference
            is that it was registered in the dealership&rsquo;s name before being sold to a buyer.
          </p>

          <p style={S.p}>
            Kilometres vary, but most demo cars sit somewhere between{" "}
            <span style={S.highlight}>500km and 10,000km</span>. In the context of a car&rsquo;s
            lifespan, that&rsquo;s a negligible amount. And because the dealership has been
            responsible for its upkeep, the condition is typically very good.
          </p>

          <h2 style={S.h2}>The Biggest Reason: The Price</h2>

          <p style={S.p}>
            The most compelling argument for a demo car is straightforward — price. Compared to
            the same model and spec in new condition, demo cars are typically priced anywhere from{" "}
            <span style={S.highlight}>10 to 30 percent lower</span>. Depending on the vehicle,
            that gap can represent thousands or even tens of thousands of dollars.
          </p>

          <p style={S.p}>
            Why the difference? Once a car has been registered — even in a dealership&rsquo;s name
            — it can no longer be sold as new. That single fact is what drives the price down. Add
            in the pressure of month-end or financial year-end targets, when dealers are motivated
            to clear stock quickly, and the discount can stretch even further.
          </p>

          <h2 style={S.h2}>Near-New Quality, Same Warranty</h2>

          <p style={S.p}>
            The most common hesitation about demo cars is psychological — someone else has driven
            it. But the reality is that demo cars occupy a completely different category from
            typical used cars. They&rsquo;ve been maintained by the dealership, kept in good
            condition, and rarely subjected to hard use.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>WARRANTY NOTE</div>
            <p style={S.calloutText}>
              Most Australian brands extend their full manufacturer&rsquo;s warranty to demo
              vehicles, starting from the date the car was first registered. A brand offering a
              seven-year warranty on new cars will generally apply the same coverage to its demo
              stock. The financial protection is essentially the same — at a lower price.
            </p>
          </div>

          <h2 style={S.h2}>When Demo Cars Are Most Available</h2>

          <p style={S.p}>
            There&rsquo;s a window each year when demo car availability peaks in Australia:{" "}
            <span style={S.highlight}>June and July</span>, around the end of the financial year.
            Dealerships cycle through their display and test drive vehicles on a regular basis,
            and the financial year changeover is when the largest volume of demo stock hits the
            market.
          </p>

          <p style={S.p}>
            Month-end is another reliable trigger. When a dealership is pushing to meet sales
            targets, demo cars are often the first to get discounted. For buyers, it&rsquo;s one
            of the best times to negotiate.
          </p>

          <h2 style={S.h2}>What to Check Before You Buy</h2>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>DEMO CAR CHECKLIST</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>Ask for the full service history — reputable dealers keep records</li>
              <li style={S.tipItem}>Confirm the warranty start date and how much coverage remains</li>
              <li style={S.tipItem}>Check exterior and interior condition, especially steering wheel, driver&rsquo;s seat and door trims</li>
              <li style={S.tipItem}>Ask whether it was primarily a display or test drive vehicle</li>
              <li style={S.tipItem}>Compare the driveaway price against new stock of the same spec</li>
            </ul>
          </div>

          <hr style={S.divider} />

          <h2 style={S.h2}>Why Now Is a Good Time to Look</h2>

          <p style={S.p}>
            It&rsquo;s late June. The Australian financial year is days away from closing, and
            dealerships across the country are clearing demo stock to make way for new vehicles.
            The volume of available cars is at its annual peak, and dealer motivation to move them
            is high.
          </p>

          <p style={S.p}>
            Near-new quality, full warranty coverage, and a meaningfully lower price — demo cars
            offer all three at once. If you&rsquo;ve been considering a new car, it&rsquo;s worth
            taking a look at what&rsquo;s available in demo stock before you decide.
          </p>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>Get demo car alerts</div>
            <p style={S.ctaDesc}>Be first to know when demo stock hits the market — updated weekly</p>
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
                slug: "why-buy-demo-car-australia-ko",
                title: "호주에서 데모카를 사야 하는 이유 — 신차보다 현명한 선택",
                excerpt: "신차와 거의 같은 퀄리티에 가격은 10~30% 낮다. 지금 회계연도 마감 시즌, 데모카 매물이 연중 가장 많이 나오는 시기다.",
                category: "구매 가이드",
                readTime: "7분",
                date: "2026년 6월 24일",
                lang: "KO",
              },
              {
                slug: "how-to-negotiate-car-price-australia",
                title: "How to Negotiate a Car Price at an Australian Dealership — A Practical Guide That Actually Works",
                excerpt: "The price on the sticker is almost never the final price. Here's what to research beforehand, what not to say in the showroom, and the tactics that actually work.",
                category: "Buying Guide",
                readTime: "8 min read",
                date: "June 23, 2026",
                lang: "EN",
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
