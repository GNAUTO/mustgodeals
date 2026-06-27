import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Mazda Explains Sudden Sales Dip in Australia — New Models on the Way | MustGoDeals",
  description:
    "Mazda has slipped to 6th–7th in Australia's sales rankings — its lowest position in 15 years. May sales fell 27.4%, but the brand says a CX-5 changeover and incoming EVs will reverse the slide.",
  keywords: [
    "mazda australia sales 2026",
    "mazda cx-5 new model australia",
    "mazda australia ranking 2026",
    "mazda sales drop australia",
    "mazda 6e cx-6e australia",
    "mazda vinesh bhindi",
  ],
  openGraph: {
    title: "Mazda Explains Sudden Sales Dip in Australia — New Models on the Way",
    description:
      "Mazda slips to 6th–7th in Australia for the first time in 15 years. A CX-5 changeover caused the dip — but the fix is already inbound.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/mazda-sales-dip-australia-2026" },
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
          EN: "/news/mazda-sales-dip-australia-2026",
          KO: "/news/mazda-sales-dip-australia-2026-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Mazda Sales Dip Australia 2026</span>
          </div>
          <div style={S.badge}>
            <span>NEWS</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 27, 2026</span>
          </div>
          <h1 style={S.h1}>
            Mazda Explains Sudden Sales Dip in Australia —{" "}
            <span style={{ color: "#CCDA47" }}>New Models on the Way</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals Editorial</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Mazda · Australia · Sales</span>
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
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c8ff5774-14aa-519c-9dc3-281f4db50000"
              alt="Mazda Australia sales 2026"
              style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Mazda</p>
          </div>

          <p style={S.p}>
            If you&rsquo;ve been tracking Australia&rsquo;s monthly sales charts lately, you&rsquo;ve
            probably noticed something unusual: Mazda is missing from its usual perch in the top five.
            For a brand that has dominated mid-table Australian sales for the better part of two decades,
            slipping to sixth or seventh is a headline in itself — and{" "}
            <span style={S.highlight}>it&rsquo;s the brand&rsquo;s lowest ranking in 15 years</span>.
          </p>

          <p style={S.p}>
            May 2026 told the story in numbers:{" "}
            <span style={S.highlight}>5,636 units sold — down 27.4% year-on-year</span>. April
            wasn&rsquo;t much better, with 5,698 units and a 14.3% year-on-year decline. In the time
            it took rivals to gain ground, Mazda found itself being overtaken by Toyota, BYD, Kia,
            Hyundai, and Ford — brands that were either growing aggressively or simply holding steady
            while Mazda stalled.
          </p>

          <h2 style={S.h2}>So What&rsquo;s Actually Going On?</h2>

          <p style={S.p}>
            The answer, according to Mazda Australia Managing Director Vinesh Bhindi, is straightforward:
            a classic model changeover gap. The CX-5 — Mazda&rsquo;s number-one selling model and one
            of Australia&rsquo;s most popular mid-size SUVs — is in the middle of a transition from
            outgoing to all-new. Old stock is running thin, and the replacement hasn&rsquo;t landed
            in showrooms yet.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>WHAT BHINDI SAID</div>
            <p style={S.calloutText}>
              &ldquo;Runout CX-5, our number-one seller, the new one coming in probably the latter
              half of this month.&rdquo; On the ranking slide: &ldquo;Ranking has never been
              something I wake up and worry about.&rdquo;
            </p>
          </div>

          {/* Image 2 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/d270eb1a-01ec-534e-80d4-e6a599250000"
              alt="Mazda CX-5 Australia"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Mazda</p>
          </div>

          <h2 style={S.h2}>The CX-5 Is Still Doing the Heavy Lifting</h2>

          <p style={S.p}>
            Despite the headline numbers, the CX-5 hasn&rsquo;t actually collapsed. In April, the
            model still shifted{" "}
            <span style={S.highlight}>1,230 units</span>, and May came in at{" "}
            <span style={S.highlight}>1,368 units</span> — only about 6% below where it was at the
            start of the year. That&rsquo;s a meaningful distinction: this isn&rsquo;t a model
            falling out of favour with buyers. It&rsquo;s a supply issue, not a demand issue.
          </p>

          <p style={S.p}>
            Bhindi says Mazda is still on track to hit its{" "}
            <span style={S.highlight}>annual target of 25,000 CX-5 sales</span>. Of those, around
            9,000 have already been delivered under the outgoing model. The remaining 16,000 units
            will be sourced entirely from the new generation — meaning the next CX-5 needs to run
            hot right out of the gate, and Bhindi is confident it will.
          </p>

          <h2 style={S.h2}>The Rest of the Lineup — Mixed Picture</h2>

          <p style={S.p}>
            Beyond the CX-5 transition, some of Mazda&rsquo;s volume models are genuinely struggling.
            The Mazda 3 — one of the brand&rsquo;s longest-running stalwarts in Australia — is{" "}
            <span style={S.highlight}>down 26% with 3,356 units</span> year to date. The ageing
            CX-3 compact SUV is off{" "}
            <span style={S.highlight}>21.4% at 3,776 units</span>, while the BT-50 ute has
            dropped{" "}
            <span style={S.highlight}>21% to 5,021 units</span> in a segment that continues to be
            dominated by the HiLux and Ranger.
          </p>

          {/* Image 3 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/0b7efb06-a814-5858-b977-f62687250000"
              alt="Mazda MX-5 Australia"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Mazda</p>
          </div>

          <p style={S.p}>
            The one bright spot? The MX-5. The iconic two-seat roadster is up a remarkable{" "}
            <span style={S.highlight}>48.1%, with 1,623 units</span> sold so far this year.
            It&rsquo;s a niche car in volume terms, but the trajectory says something about buyer
            enthusiasm when a Mazda model is firing on all cylinders — pun very much intended.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>The Electric Counter-Punch</h2>

          <p style={S.p}>
            Beyond the CX-5 refresh, Mazda has its first serious EV play underway. The Mazda 6e
            sedan and CX-6e SUV have already generated{" "}
            <span style={S.highlight}>more than 2,000 combined pre-orders</span> — remarkable for
            a brand that has largely sat on the sidelines of Australia&rsquo;s EV surge. The 6e
            sedan&rsquo;s initial 300-unit pre-order allocation sold out in two weeks; the CX-6e SUV
            is seeing even greater interest despite pricing not yet being confirmed.
          </p>

          {/* Image 4 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/8fd86744-09c5-5dc8-bf99-59124b850000"
              alt="Mazda EV lineup Australia 2026"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Mazda</p>
          </div>

          <p style={S.p}>
            That&rsquo;s an encouraging signal for a brand entering the EV space later than most
            of its rivals. Mazda&rsquo;s approach — design-led, premium-feeling, and built around
            usable everyday range — appears to be resonating with buyers who want an EV that
            doesn&rsquo;t feel like a compromise.
          </p>

          <h2 style={S.h2}>The Outlook</h2>

          <p style={S.p}>
            Mazda&rsquo;s second half of 2026 is shaping up to be a genuine rebound story — if
            things go to plan. The new CX-5 arriving imminently will restore the brand&rsquo;s
            most important weapon to the grid. The 6e and CX-6e will open a new front for buyers
            who have never seriously considered Mazda before. And the MX-5, quietly having its
            best year in ages, is a reminder that Mazda still makes cars that people genuinely
            want, not just need.
          </p>

          <p style={S.p}>
            Whether that&rsquo;s enough to claw back a top-five position before year&rsquo;s end
            remains to be seen. But if Bhindi&rsquo;s confidence is anything to go by, the
            brand isn&rsquo;t losing sleep over a rankings slide that — to a large degree — it
            created on purpose by letting the old CX-5 run out.
          </p>

          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>SOURCE</span>
            <a
              href="https://www.drive.com.au/news/mazda-explains-sudden-sales-dip-in-australia/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              drive.com.au ↗
            </a>
          </div>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>Looking for a demo car deal?</div>
            <p style={S.ctaDesc}>
              Model changeover time is when dealers are most motivated to move stock. Browse what&rsquo;s available now.
            </p>
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
                slug: "mazda-sales-dip-australia-2026-ko",
                title: "마쯔다, 호주 판매 15년 만에 최저 — 신형 CX-5·전기차로 반등 노린다",
                category: "뉴스",
                date: "2026년 6월 27일",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c8ff5774-14aa-519c-9dc3-281f4db50000",
              },
              {
                slug: "mazda-6e-cx6e-orders-australia-2026",
                title: "Mazda 6e and CX-6e Clock Up Thousands of Orders Ahead of Australian Launch",
                category: "NEWS",
                date: "June 24, 2026",
                image: "https://www.mazda.com.au/4966d2/globalassets/vehicle-landing-pages/cx-6e/launch-vlp/assets/au41-p00005750_mazda_cx-6e_vlp_introduction_1300x650px.jpg",
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
