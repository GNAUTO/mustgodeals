import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Skoda Peaq Revealed: Seven-Seat Electric SUV with 640km Range Confirmed for Australia | MustGoDeals",
  description:
    "Skoda has unveiled its largest SUV ever — the Peaq. A seven-seat electric SUV with up to 640km range, V2L/V2H/V2G capability, and a confirmed Australian launch.",
  keywords: [
    "skoda peaq australia",
    "skoda peaq 2027",
    "skoda electric suv australia",
    "skoda peaq range",
    "skoda peaq seven seat",
    "kia ev9 competitor australia",
    "skoda peaq price australia",
  ],
  openGraph: {
    title: "Skoda Peaq Revealed: Seven-Seat Electric SUV with 640km Range Confirmed for Australia",
    description:
      "Skoda's largest-ever SUV arrives as a direct Kia EV9 rival — with up to 640km range and bidirectional charging.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/skoda-peaq-2027-australia" },
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
          EN: "/news/skoda-peaq-2027-australia",
          KO: "/news/skoda-peaq-2027-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Skoda Peaq 2027</span>
          </div>
          <div style={S.badge}>
            <span>NEWS</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 25, 2026</span>
          </div>
          <h1 style={S.h1}>
            Skoda Peaq Revealed: Seven-Seat Electric SUV with 640km Range{" "}
            <span style={{ color: "#CCDA47" }}>Confirmed for Australia</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals Editorial</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>New Models · Electric · Australia</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            Skoda has just pulled the covers off its biggest, most ambitious product yet — and it
            has its sights set squarely on the Kia EV9. The{" "}
            <span style={S.highlight}>Skoda Peaq</span> is a full-size, seven-seat electric SUV
            confirmed for Australian buyers, bringing up to 640km of claimed range and a
            specification sheet that punches well above what the price tag is expected to be.
          </p>

          {/* Image 1 — hero */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c4d60c30-2aac-5ab1-a8e5-57f962a50000"
              alt="2027 Skoda Peaq electric SUV"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Skoda Media</p>
          </div>

          <h2 style={S.h2}>What&rsquo;s in a Name?</h2>

          <p style={S.p}>
            The name &ldquo;Peaq&rdquo; is borrowed from the English word &ldquo;peak&rdquo; —
            and Skoda means it literally. This is the brand&rsquo;s largest SUV ever, sitting above
            the Kodiaq in the lineup and representing the high point of the Czech brand&rsquo;s
            growing electric portfolio. At <span style={S.highlight}>4,874mm long</span> with a
            wheelbase of <span style={S.highlight}>2,965mm</span>, it&rsquo;s a genuinely
            substantial machine — longer than a BMW X7, and only a handful of millimetres shy of a
            full-size Land Cruiser in overall length.
          </p>

          {/* Image 2 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/a9e8672b-6b48-5de2-b6ab-f5319f250000"
              alt="Skoda Peaq exterior design"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Skoda Media</p>
          </div>

          <h2 style={S.h2}>Three Powertrains, One Platform</h2>

          <p style={S.p}>
            Built on Volkswagen Group&rsquo;s proven{" "}
            <span style={S.highlight}>MEB electric platform</span> — the same architecture
            underpinning the VW ID.4, Audi Q4 e-tron, and Skoda&rsquo;s own Enyaq — the Peaq
            launches with three powertrain options that cover a wide spread of range and performance.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>POWERTRAIN LINEUP</div>
            <p style={S.calloutText}>
              <strong>Peaq 60</strong> — 63kWh battery · 150kW rear-wheel drive · 450km+ range<br /><br />
              <strong>Peaq 90</strong> — 91kWh battery · 210kW rear-wheel drive · 640km+ range<br /><br />
              <strong>Peaq 90x</strong> — 91kWh battery · AWD · 220kW combined · 610km+ range
            </p>
          </div>

          <p style={S.p}>
            DC fast charging on the 91kWh models takes the battery from{" "}
            <span style={S.highlight}>10 to 80 per cent in just 28 minutes</span>. That&rsquo;s a
            meaningful number for family road trips, putting roughly 400km of range back in the
            battery during a lunch break.
          </p>

          {/* Image 3 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/5757844a-182f-59b5-b6e7-636b84e50000"
              alt="Skoda Peaq interior"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Skoda Media</p>
          </div>

          <h2 style={S.h2}>Space for Seven — and Then Some</h2>

          <p style={S.p}>
            The Peaq&rsquo;s wheelbase pays dividends inside. In five-seat configuration, boot
            space reaches <span style={S.highlight}>935 litres</span> — more than most wagons.
            Fold the third row up for seven passengers and you still have{" "}
            <span style={S.highlight}>299 litres</span> behind the rearmost seats. There&rsquo;s
            also a <span style={S.highlight}>37-litre frunk</span> (front boot) for cables and
            small items.
          </p>

          <p style={S.p}>
            Bidirectional charging — <span style={S.highlight}>V2L, V2H, and V2G</span> — comes
            standard. V2L (Vehicle-to-Load) lets you power devices directly from the car. V2H
            (Vehicle-to-Home) and V2G (Vehicle-to-Grid) take things further, allowing the Peaq to
            act as a home battery backup or feed power back into the electricity grid. For a family
            living in a home with solar panels, this is a genuinely useful feature.
          </p>

          {/* Image 4 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c076e739-c913-5682-95ce-f1cbd6450000"
              alt="Skoda Peaq technology features"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Skoda Media</p>
          </div>

          <h2 style={S.h2}>Technology Inside and Out</h2>

          <p style={S.p}>
            Inside, the Peaq debuts Skoda&rsquo;s first{" "}
            <span style={S.highlight}>13.6-inch portrait-oriented infotainment screen</span> — a
            significant step up in screen real estate for the brand. There&rsquo;s also an
            augmented reality head-up display that projects navigation and safety information onto
            the road ahead, and Travel Assist 3.0, Skoda&rsquo;s most capable suite of semi-autonomous
            driving aids to date.
          </p>

          <p style={S.p}>
            The panoramic sunroof is split into nine individually dimmable zones with
            electrochromic glass — meaning different passengers can adjust the tint over their
            section without affecting the rest of the cabin. It&rsquo;s the kind of thoughtful
            feature that a family with kids and glare-sensitive adults will genuinely appreciate.
          </p>

          <hr style={S.divider} />

          {/* Image 5 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/0149456a-07c6-5326-ac8d-279df2f50000"
              alt="Skoda Peaq rear design"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Skoda Media</p>
          </div>

          <h2 style={S.h2}>Design: Modern Solid</h2>

          <p style={S.p}>
            Skoda is calling the Peaq&rsquo;s design language &ldquo;Modern Solid&rdquo; — and the
            numbers back up the description. A drag coefficient of just{" "}
            <span style={S.highlight}>0.249Cd</span> makes it among the most aerodynamically
            efficient seven-seat SUVs on the market. Flush door handles, T-shaped LED lighting
            signatures front and rear, and a clean, uncluttered flanks complete a look that should
            age better than the busier styling of some German rivals.
          </p>

          <h2 style={S.h2}>What to Expect in Australia</h2>

          <p style={S.p}>
            Skoda Australia has confirmed the Peaq is coming but hasn&rsquo;t published a local
            price or launch date. Based on the brand&rsquo;s recent pricing strategy and the Peaq&rsquo;s
            positioning in Europe, a starting price in the{" "}
            <span style={S.highlight}>low-to-mid $70,000s</span> seems realistic — which would
            place it meaningfully below the Kia EV9, which starts above $90,000 in Australia.
          </p>

          <p style={S.p}>
            If Skoda can land this SUV at that price point with the specification it&rsquo;s
            showing, the Peaq won&rsquo;t just compete with the EV9 — it could redefine what value
            looks like in the seven-seat electric segment.
          </p>

          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>SOURCE</span>
            <a
              href="https://www.drive.com.au/news/2027-skoda-peaq-revealed-as-seven-seat-electric-family-suv/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              drive.com.au ↗
            </a>
          </div>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>Get EV clearance deal alerts</div>
            <p style={S.ctaDesc}>
              Be first to know when electric vehicles hit the clearance market — updated weekly
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
                slug: "skoda-peaq-2027-australia-ko",
                title: "스코다 피크 공개 — 640km 항속, 7인승 전기 SUV 호주 상륙 예고",
                category: "뉴스",
                date: "2026년 6월 25일",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c4d60c30-2aac-5ab1-a8e5-57f962a50000",
              },
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
                slug: "novated-lease-australia",
                title: "What Is a Novated Lease — And Is It Worth It in Australia?",
                excerpt: "Pre-tax salary deduction, FBT, EV exemptions — the complete guide to novated leasing for Australian employees.",
                category: "Buying Guide",
                readTime: "8 min read",
                date: "June 25, 2026",
                lang: "EN",
              },
              {
                slug: "eofy-car-tax-benefits-australia",
                title: "Should You Buy a Car Before EOFY? A Guide for Australian ABN Holders",
                excerpt: "For Australian business owners with an ABN, buying a car before 30 June can deliver real tax advantages.",
                category: "Buying Guide",
                readTime: "7 min read",
                date: "June 24, 2026",
                lang: "EN",
              },
              {
                slug: "why-buy-demo-car-australia",
                title: "Why Buying a Demo Car in Australia Makes More Sense Than You Think",
                excerpt: "Near-new quality, full warranty, 10–30% below new price. Demo cars are one of the best value plays in the Australian car market.",
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
