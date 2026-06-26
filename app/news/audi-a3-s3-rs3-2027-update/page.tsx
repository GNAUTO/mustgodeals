import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "2027 Audi A3, S3 and RS3 Updated — Bigger Screens, Fewer Buttons, and a Redesigned Interior | MustGoDeals",
  description:
    "Audi has refreshed the entire A3 lineup with a curved Digital Stage cockpit, larger screens, revised controls, and strengthened driver assistance. European launch confirmed for September 2026.",
  keywords: [
    "2027 audi a3 australia",
    "audi a3 s3 rs3 update",
    "audi digital stage a3",
    "audi a3 2027 interior",
    "audi a3 curved display",
    "audi s3 2027 australia",
    "audi rs3 2027 update",
  ],
  openGraph: {
    title: "2027 Audi A3, S3 and RS3 Updated — Bigger Screens, Fewer Buttons, and a Redesigned Interior",
    description:
      "The entire Audi A3 lineup gets the Digital Stage curved cockpit from the A5 and A6. Fewer physical buttons, a panoramic dual-screen display, and upgraded driver assistance across the board.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/audi-a3-s3-rs3-2027-update" },
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
          EN: "/news/audi-a3-s3-rs3-2027-update",
          KO: "/news/audi-a3-s3-rs3-2027-update-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Audi A3 S3 RS3 2027</span>
          </div>
          <div style={S.badge}>
            <span>NEWS</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 26, 2026</span>
          </div>
          <h1 style={S.h1}>
            2027 Audi A3, S3 and RS3 Updated —{" "}
            <span style={{ color: "#CCDA47" }}>Bigger Screens, Fewer Buttons, and a Redesigned Interior</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals Editorial</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>New Models · Audi · Interior Tech</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            Audi has given the entire A3 family — A3, S3, and RS3 — a significant interior overhaul, bringing
            the curved Digital Stage cockpit architecture down from the A5 and A6 into its entry-level lineup.
            The update launches in Europe in <span style={S.highlight}>September 2026</span>, with Audi
            Australia yet to confirm local timing.
          </p>

          {/* Image 1 — hero */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/dd218bf3-401e-53e2-a2c4-ed4470650000"
              alt="2027 Audi A3 exterior"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Audi Media</p>
          </div>

          <h2 style={S.h2}>Momentum in Australia — Before the Update Even Lands</h2>

          <p style={S.p}>
            The timing of this refresh couldn&apos;t be better for Audi Australia. A3 sales have surged in 2026,
            with <span style={S.highlight}>875 units sold</span> in the first five months of the year —
            a remarkable <span style={S.highlight}>72.9% increase</span> year-on-year. The new interior will
            give the already-popular model a compelling reason to keep that momentum going into 2027.
          </p>

          <h2 style={S.h2}>Digital Stage Comes to the A3</h2>

          {/* Image 2 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/8722ab7e-f699-5137-abba-0ea691650000"
              alt="2027 Audi A3 Digital Stage interior"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Audi Media</p>
          </div>

          <p style={S.p}>
            The centrepiece of the update is the{" "}
            <span style={S.highlight}>Panoramic Display</span> — a curved, single-glass unit housing both a{" "}
            <span style={S.highlight}>11.9-inch Virtual Cockpit</span> instrument display and a{" "}
            <span style={S.highlight}>12.8-inch MMI touchscreen</span>. That&apos;s a significant step up from
            the current car&apos;s 12.3-inch digital cluster and 10.1-inch infotainment screen, and the two
            now flow together under one seamless piece of glass rather than sitting as separate units.
          </p>

          <p style={S.p}>
            This is the same Digital Stage architecture Audi debuted in the A5, A6, Q5, and Q7, now cascading
            down to the brand&apos;s most accessible model. If you&apos;ve sat in a new A6 recently, the A3&apos;s
            cabin will feel instantly familiar — and that&apos;s very much a compliment.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>SCREEN UPGRADE AT A GLANCE</div>
            <p style={S.calloutText}>
              Current A3: 12.3&quot; digital cluster + 10.1&quot; MMI touchscreen<br /><br />
              2027 A3: <strong>11.9&quot; Virtual Cockpit + 12.8&quot; MMI</strong> — unified under curved glass
            </p>
          </div>

          <h2 style={S.h2}>Fewer Buttons — But Not Completely</h2>

          {/* Image 3 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/a9714015-d81f-5f4b-800f-a4168f650000"
              alt="2027 Audi A3 interior controls"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Audi Media</p>
          </div>

          <p style={S.p}>
            Climate controls have been pulled off the centre console and integrated into a strip beneath the
            MMI touchscreen — a move that will divide opinion. The centre air vents have also relocated
            downward. However, Audi has kept physical buttons for drive mode selection, hazard lights, and a
            handful of frequently used functions in the centre stack. It&apos;s a more pragmatic approach than
            the all-touch interiors that drew criticism in some rivals — Audi seems to have learned from the
            industry&apos;s overcorrection. The decorative inlay spanning the dashboard has also been widened,
            with options including carbon fibre and Dinamica microfibre trim.
          </p>

          <h2 style={S.h2}>Powertrains Stay — S3 Gets a Visual Distinction</h2>

          {/* Image 4 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/7caa7427-b88e-5625-bedd-d03481150000"
              alt="2027 Audi S3 exterior design"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Audi Media</p>
          </div>

          <p style={S.p}>
            Under the bonnet, nothing changes. The A3 carries its{" "}
            <span style={S.highlight}>201hp turbocharged four-cylinder</span>, the S3 retains its{" "}
            <span style={S.highlight}>328hp</span> unit, and the RS3 keeps its beloved{" "}
            <span style={S.highlight}>394hp five-cylinder turbo</span> — the engine enthusiasts would riot over
            if Audi ever dared remove it. The S3 does gain a unique daytime running light signature to
            visually differentiate it from the standard A3, a touch that&apos;s been a long time coming.
          </p>

          <h2 style={S.h2}>Smarter Behind the Wheel</h2>

          {/* Image 5 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/6bf32766-9dd7-5817-b4af-5a244f750000"
              alt="2027 Audi A3 driver assistance technology"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Audi Media</p>
          </div>

          <p style={S.p}>
            The driver assistance suite has been meaningfully upgraded. Traffic light recognition now pairs
            with automatic stop and go — the car reads upcoming signals and responds without driver input in
            stop-start traffic. On the highway, the system can execute automatic lane changes when you
            activate the indicator. And a new <span style={S.highlight}>Trained Parking</span> feature lets
            the car memorise up to five parking manoeuvres, then repeat them autonomously — useful if you park
            in the same garage every day and the space is tight.
          </p>

          <p style={S.p}>
            Remote monitoring gets a boost too: the{" "}
            <span style={S.highlight}>MyAudi app</span> now lets you check the status of the parking brake,
            lights, doors, and windows from your phone. Small feature, but genuinely useful before a long trip.
          </p>

          <h2 style={S.h2}>European Pricing and What to Expect Here</h2>

          <p style={S.p}>
            In Europe, the A3 Sportback starts from{" "}
            <span style={S.highlight}>€31,850</span>, the S3 from{" "}
            <span style={S.highlight}>€57,200</span>, and the RS3 from{" "}
            <span style={S.highlight}>€68,500</span>. Australian pricing will be set closer to local launch,
            which Audi Australia hasn&apos;t yet confirmed — though given the model&apos;s strong sales
            trajectory here, expect it to arrive in 2027.
          </p>

          <p style={S.p}>
            The updated A3 is a car that was already selling well in Australia getting meaningfully better.
            The interior refresh brings the entry-Audi experience much closer to the brand&apos;s more expensive
            models — and if the pricing stays competitive, that&apos;s a compelling package for anyone
            considering the premium small car segment.
          </p>

          <hr style={S.divider} />

          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>SOURCE</span>
            <a
              href="https://www.drive.com.au/news/2027-audi-a3-s3-and-rs3-updated-with-interior-redesign-fewer-buttons/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              drive.com.au ↗
            </a>
          </div>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>Current A3 demo cars won&apos;t last long</div>
            <p style={S.ctaDesc}>
              Once the updated model lands, current-gen A3 demos will move fast — see what&apos;s available now
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
                slug: "audi-a3-s3-rs3-2027-update-ko",
                title: "2027 아우디 A3·S3·RS3 업데이트 — 더 커진 스크린, 줄어든 버튼, 완전히 달라진 실내",
                category: "뉴스",
                date: "2026년 6월 26일",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/dd218bf3-401e-53e2-a2c4-ed4470650000",
              },
              {
                slug: "hyundai-i30-sedan-2027-australia",
                title: "2027 Hyundai i30 Sedan Revealed — Bigger, Hybrid-Focused, and Coming to Australia Next Year",
                category: "NEWS",
                date: "June 26, 2026",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/e67acf95-dd06-5ea8-a53b-d688c8c50000",
              },
              {
                slug: "skoda-peaq-2027-australia",
                title: "Skoda Peaq Revealed: Seven-Seat Electric SUV with 640km Range Confirmed for Australia",
                category: "NEWS",
                date: "June 25, 2026",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c4d60c30-2aac-5ab1-a8e5-57f962a50000",
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
                slug: "why-buy-demo-car-australia",
                title: "Why Buying a Demo Car in Australia Makes More Sense Than You Think",
                excerpt: "Near-new quality, full warranty, and prices 10–30% below new. Demo cars are one of the best value plays in the Australian car market.",
                category: "Buying Guide",
                readTime: "7 min read",
                date: "June 24, 2026",
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
