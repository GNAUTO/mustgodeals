import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "2027 Hyundai i30 Sedan Revealed — Bigger, Hybrid-Focused, and Coming to Australia Next Year | MustGoDeals",
  description:
    "Hyundai's eighth-generation i30 Sedan grows significantly in size, ditches the 1.6 turbo petrol in favour of an upgraded hybrid system, and arrives in Australia in the first half of 2027.",
  keywords: [
    "2027 hyundai i30 sedan australia",
    "hyundai i30 sedan hybrid",
    "hyundai elantra 2027 australia",
    "i30 sedan nves australia",
    "hyundai i30 sedan price australia",
    "pleos connect hyundai",
    "i30 sedan vs camry hybrid",
  ],
  openGraph: {
    title: "2027 Hyundai i30 Sedan Revealed — Bigger, Hybrid-Focused, and Coming to Australia Next Year",
    description:
      "The eighth-generation i30 Sedan is larger, drops the 1.6T petrol, and upgrades the hybrid to 117kW. Australian arrival confirmed for first half of 2027.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/hyundai-i30-sedan-2027-australia" },
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
          EN: "/news/hyundai-i30-sedan-2027-australia",
          KO: "/news/hyundai-i30-sedan-2027-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Hyundai i30 Sedan 2027</span>
          </div>
          <div style={S.badge}>
            <span>NEWS</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 26, 2026</span>
          </div>
          <h1 style={S.h1}>
            2027 Hyundai i30 Sedan Revealed —{" "}
            <span style={{ color: "#CCDA47" }}>Bigger, Hybrid-Focused, and Coming to Australia Next Year</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals Editorial</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>New Models · Hybrid · Hyundai</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            Hyundai has lifted the covers on the eighth-generation i30 Sedan — and if you&apos;re in the market
            for a well-specced, fuel-efficient family sedan, this one&apos;s worth watching. The new model is
            bigger, more technologically advanced, and arriving in Australia in the{" "}
            <span style={S.highlight}>first half of 2027</span>.
          </p>

          {/* Image 1 — hero */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/e67acf95-dd06-5ea8-a53b-d688c8c50000"
              alt="2027 Hyundai i30 Sedan exterior"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Hyundai</p>
          </div>

          <h2 style={S.h2}>The Name Stays — for Australia, at Least</h2>

          <p style={S.p}>
            Most markets know this car as the Elantra. In Korea, it&apos;s sold as the Avante. But Australia has
            always done things its own way, and Hyundai Australia is retaining the{" "}
            <span style={S.highlight}>i30 Sedan</span> nameplate — a badge that carries genuine recognition
            after years of steady sales here. Don&apos;t let the global naming confusion put you off; this is
            the same car, and it&apos;s shaping up to be a serious one.
          </p>

          <h2 style={S.h2}>Bigger in Every Direction</h2>

          <p style={S.p}>
            The numbers tell a clear story. The eighth-generation i30 Sedan grows meaningfully in every
            dimension, pushing it into territory that blurs the line between small car and mid-sizer.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>DIMENSIONS VS CURRENT MODEL</div>
            <p style={S.calloutText}>
              Length: 4,765mm <span style={{ color: "#CCDA47" }}>(+55mm)</span><br />
              Width: 1,855mm <span style={{ color: "#CCDA47" }}>(+30mm)</span><br />
              Height: 1,425mm <span style={{ color: "#CCDA47" }}>(+5mm)</span><br />
              Wheelbase: 2,750mm <span style={{ color: "#CCDA47" }}>(+30mm)</span>
            </p>
          </div>

          <p style={S.p}>
            That wheelbase growth translates directly into rear passenger space, and the wider body gives the
            interior a more premium feel. At this size, the i30 Sedan is stepping into Toyota Camry Hybrid
            territory — and Hyundai knows it.
          </p>

          <h2 style={S.h2}>Hybrid Is Now the Focus</h2>

          {/* Image 2 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/51876aef-b2be-5fbb-9042-bda115c50000"
              alt="2027 Hyundai i30 Sedan hybrid powertrain"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Hyundai</p>
          </div>

          <p style={S.p}>
            The outgoing car&apos;s 1.6L turbocharged petrol has been dropped entirely. In its place, Hyundai
            has upgraded the <span style={S.highlight}>1.6L hybrid system</span> to a combined output of{" "}
            <span style={S.highlight}>117kW</span> — up from 104kW in the current model. A 2.0L naturally
            aspirated petrol producing 110kW continues in Korea, but its Australian availability hasn&apos;t
            been confirmed.
          </p>

          <p style={S.p}>
            With Australia&apos;s New Vehicle Efficiency Standard (NVES) creating tangible incentives for
            manufacturers to prioritise low-emission vehicles, the hybrid is widely expected to carry the
            Australian lineup. The system itself has been overhauled: revised transmission architecture, a more
            powerful drive motor, increased battery capacity, and improved regenerative braking all combine to
            deliver better real-world efficiency and a more responsive drive.
          </p>

          <p style={S.p}>
            A new <span style={S.highlight}>Predictive Drive Control</span> feature uses your navigation
            destination to anticipate road conditions ahead — adjusting energy recuperation and drive modes
            before you encounter a descent, a tight corner, or stop-start traffic. It&apos;s genuinely
            intelligent, not just a marketing claim. Pair that with <span style={S.highlight}>Stay Mode</span>{" "}
            — which uses the high-voltage battery to keep the air conditioning and infotainment running with
            the engine off — and you have a hybrid system that feels designed for Australian conditions.
          </p>

          <h2 style={S.h2}>Inside: Screens Get Serious</h2>

          {/* Image 3 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/189cea45-88be-5008-a6ae-d9ad31f50000"
              alt="2027 Hyundai i30 Sedan interior"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Hyundai</p>
          </div>

          <p style={S.p}>
            The cabin is where the generational step is most obvious. Hyundai&apos;s new{" "}
            <span style={S.highlight}>Pleos Connect</span> infotainment system — built on Android Automotive
            OS, first seen on the Ioniq 3 — arrives with a choice of{" "}
            <span style={S.highlight}>12.9-inch or 14.6-inch</span> touchscreen. The current car tops out at
            10.25 inches. A slim freestanding digital instrument cluster completes the screen-heavy dashboard,
            though Hyundai has sensibly retained physical buttons for climate and media functions — a welcome
            pushback against the all-touch trend.
          </p>

          <p style={S.p}>
            The gear selector has moved to a{" "}
            <span style={S.highlight}>column-mounted stalk</span> — a first for the Australian i30 Sedan — with
            a combined headlight, indicator, and wiper stalk on the opposite side. It frees up significant
            console space and gives the interior a cleaner, more premium feel.
          </p>

          <h2 style={S.h2}>Design: Art of Steel</h2>

          {/* Image 4 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/21a3a84f-8c94-5008-b54b-8fcb19350000"
              alt="2027 Hyundai i30 Sedan Art of Steel design"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Hyundai</p>
          </div>

          <p style={S.p}>
            Hyundai calls the new design language <span style={S.highlight}>&ldquo;Art of Steel&rdquo;</span> —
            and the execution is clean without being anonymous. Flush door handles, a distinctive{" "}
            <span style={S.highlight}>H-shaped lighting signature</span> front and rear, and taut body
            surfaces give the new i30 Sedan a presence the outgoing model occasionally lacked. It looks like a
            car worth its price, which matters in a segment where first impressions count.
          </p>

          <h2 style={S.h2}>When Can You Expect It?</h2>

          <p style={S.p}>
            Korean sales open in <span style={S.highlight}>September 2026</span>. Australian deliveries are
            expected in the <span style={S.highlight}>first half of 2027</span>. Pricing hasn&apos;t been
            announced, but if Hyundai can position the hybrid at or below the entry Toyota Camry Hybrid, the
            i30 Sedan will be one of the most compelling value propositions in the segment. A future{" "}
            <span style={S.highlight}>i30 Sedan N</span> performance variant is also expected, potentially
            with Hyundai&apos;s new 2.5L turbocharged engine.
          </p>

          <p style={S.p}>
            One to watch — especially if you&apos;re considering a demo when the current generation clears out.
          </p>

          <hr style={S.divider} />

          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>SOURCE</span>
            <a
              href="https://www.drive.com.au/news/2027-hyundai-i30-sedan-revealed-expected-in-australia-next-year/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              drive.com.au ↗
            </a>
          </div>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>Get demo car alerts before they&apos;re gone</div>
            <p style={S.ctaDesc}>Current-gen i30 Sedan demos won&apos;t last once the new model lands</p>
            <Link href="/listings" style={S.ctaBtn}>Browse demo listings →</Link>
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
                slug: "hyundai-i30-sedan-2027-australia-ko",
                title: "2027 현대 i30 세단 공개 — 더 커지고, 하이브리드 중심으로, 내년 호주 상륙",
                category: "뉴스",
                date: "2026년 6월 26일",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/e67acf95-dd06-5ea8-a53b-d688c8c50000",
              },
              {
                slug: "skoda-peaq-2027-australia",
                title: "Skoda Peaq Revealed: Seven-Seat Electric SUV with 640km Range Confirmed for Australia",
                category: "NEWS",
                date: "June 25, 2026",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c4d60c30-2aac-5ab1-a8e5-57f962a50000",
              },
              {
                slug: "australia-fuel-excise-relief-extended-july-2026",
                title: "Fuel Prices to Stay Lower for a Little Longer as Australia Extends Excise Relief",
                category: "NEWS",
                date: "June 24, 2026",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/7cb59eee-4c04-5d94-82a8-793a2e150000",
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

      {/* Related Articles */}
      <div style={{ background: "#ECEEE7", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>Latest Articles</div>
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>All articles →</Link>
          </div>
          <div className="section-grid">
            {[
              {
                slug: "luxury-car-tax-australia",
                title: "Luxury Car Tax in Australia — What It Is and How It Affects Your Next Car Purchase",
                excerpt: "LCT can add thousands to the cost of a premium vehicle. Know the 2025–26 thresholds and how a demo car can legally eliminate the tax.",
                category: "Buying Guide",
                readTime: "8 min read",
                date: "June 26, 2026",
                lang: "EN",
              },
              {
                slug: "novated-lease-australia",
                title: "What Is a Novated Lease — And Is It Worth It in Australia?",
                excerpt: "Pre-tax salary deduction, FBT, EV exemptions — the complete guide to novated leasing for Australian employees.",
                category: "Buying Guide",
                readTime: "8 min read",
                date: "June 25, 2026",
                lang: "EN",
              },
              {
                slug: "why-buy-demo-car-australia",
                title: "Why Buying a Demo Car in Australia Makes More Sense Than You Think",
                excerpt: "Near-new quality, full warranty, and prices 10–30% below new. Demo cars are one of the best value plays in the Australian car market.",
                category: "Buying Guide",
                readTime: "7 min read",
                date: "June 24, 2026",
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
