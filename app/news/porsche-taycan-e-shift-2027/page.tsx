import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Porsche Taycan gets simulated gear shifts — and it's more interesting than it sounds | MustGoDeals",
  description:
    "The 2027 Taycan's E-Shift system simulates an 8-speed DCT with paddle shifters and a virtual rev limiter. Here's what it is, how to get it, and what else changes for MY27.",
  keywords: [
    "porsche taycan 2027",
    "taycan e-shift",
    "porsche e-shift system",
    "simulated gear shifts ev",
    "porsche taycan turbo gt nurburgring",
    "electric car gear shifts australia",
    "taycan my27 australia",
  ],
  openGraph: {
    title: "Porsche Taycan gets simulated gear shifts — and it's more interesting than it sounds",
    description:
      "E-Shift gives the 2027 Taycan eight virtual gears, paddle shifters, and a rev limiter. Here's the full breakdown.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/porsche-taycan-e-shift-2027" },
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

const RELATED_NEWS = [
  {
    slug: "porsche-taycan-e-shift-2027-ko",
    title: "포르쉐 타이칸, 가상 변속기를 달다 — 전기차가 기어를 흉내 내는 이유",
    category: "뉴스",
    date: "2026년 6월 18일",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/s26_0407.jpg",
  },
  {
    slug: "maserati-grecale-2027-australia",
    title: "Maserati expands Grecale SUV lineup for 2027 Australian market",
    category: "NEWS",
    date: "June 21, 2026",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg",
  },
  {
    slug: "maserati-grecale-2027-australia-ko",
    title: "마세라티, 2027 그레칼레 SUV 라인업 호주 시장에 확대 출시",
    category: "뉴스",
    date: "2026년 6월 21일",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg",
  },
];

const LATEST_ARTICLES = [
  {
    slug: "end-of-month-car-deals-explained",
    title: "End of month car deals explained — secrets dealers will never tell you",
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
];

export default function Page() {
  return (
    <div style={S.page}>
      <Navbar />
      <BlogLangTabs
        current="EN"
        links={{
          EN: "/news/porsche-taycan-e-shift-2027",
          KO: "/news/porsche-taycan-e-shift-2027-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Porsche Taycan E-Shift</span>
          </div>
          <div style={S.badge}>
            <span>NEWS</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 18, 2026</span>
          </div>
          <h1 style={S.h1}>
            Porsche Taycan gets simulated gear shifts —{" "}
            <span style={{ color: "#CCDA47" }}>and it&rsquo;s more interesting than it sounds</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals Editorial</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Electric Vehicles · Technology</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          {/* Main image */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/s26_0407.jpg"
              alt="2027 Porsche Taycan E-Shift"
              className="article-img"
              style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Porsche Media</p>
          </div>

          <p style={S.p}>
            Electric cars don&rsquo;t have gears. No clutch, no gearbox, no ratios to hunt through
            on a mountain road. Just one continuous surge of torque from standstill to redline.
            Clean. Simple. Efficient.
          </p>

          <p style={S.p}>
            And, for some drivers, a little flat.
          </p>

          <p style={S.p}>
            Porsche knows this. Which is why the 2027 Taycan now offers E-Shift &mdash; an optional
            system that gives the electric sedan a simulated eight-speed dual-clutch transmission.
            Paddle shifters, a virtual rev counter, and all.
          </p>

          <h2 style={S.h2}>What E-Shift actually does</h2>

          <p style={S.p}>
            E-Shift uses the Taycan&rsquo;s electric motor control system to map its power output
            across eight virtual gear ratios. Each &ldquo;gear&rdquo; has its own rev range, its own
            engine braking character, and its own shift sensation &mdash; delivered through the
            steering column via new paddle shifters. Pull the right paddle and the car
            &ldquo;upshifts&rdquo;: the virtual tacho needle drops, the motor torque curve follows
            a different gradient, and the whole thing feels distinctly more purposeful than simply
            flooring the accelerator.
          </p>

          <p style={S.p}>
            Hover near the virtual redline and a shift light illuminates in the instrument cluster.
            Let it sit there too long and a virtual rev limiter cuts in &mdash; giving you an actual
            reason to keep one eye on the rev counter for the first time in an EV. It&rsquo;s a
            clever piece of engineering that answers the question &ldquo;why would you want this?&rdquo;
            before most people think to ask it.
          </p>

          <p style={S.p}>
            Each trim level gets its own sound character to accompany the shifts. The Turbo S sounds
            like a thoroughbred sports car hunting through the gears. The base Taycan is more
            restrained. Porsche has tuned the personality of each variant, not just the mechanism.
          </p>

          {/* Image 2 — after E-Shift explanation */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/s26_0406.jpg"
              alt="Porsche Taycan E-Shift paddle shifter detail"
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Porsche Media</p>
          </div>

          <h2 style={S.h2}>The Hyundai connection</h2>

          <p style={S.p}>
            If this concept sounds familiar, that&rsquo;s because Hyundai got there first.
            The N e-Shift system &mdash; already fitted to the Ioniq 5 N and Ioniq 6 N &mdash;
            does something very similar, simulating a manual gearbox to add interaction and drama
            to what would otherwise be a flat power delivery. Porsche&rsquo;s engineers publicly
            praised the Hyundai system at a press briefing, calling it a &ldquo;genuinely
            interesting solution.&rdquo;
          </p>

          <p style={S.p}>
            A few weeks later, they announced E-Shift. Draw your own conclusions.
          </p>

          <p style={S.p}>
            Whether you read this as healthy competition or automotive borrowing, what it does
            confirm is a broader industry consensus: driving engagement isn&rsquo;t purely about
            speed. The physical act of a gear change &mdash; even a simulated one &mdash; connects
            a driver to a machine in a way that a single linear torque curve simply doesn&rsquo;t.
          </p>

          <h2 style={S.h2}>How to get it — and who gets it free</h2>

          <p style={S.p}>
            On most Taycan variants &mdash; the sedan, Cross Turismo, and Sport Turismo &mdash;
            E-Shift is part of an optional package that includes the <span style={S.highlight}>GT
            Sport steering wheel</span>: the flat-bottomed, Alcantara-wrapped unit that houses the
            paddle shifters themselves. It&rsquo;s a meaningful cost addition, but buyers
            configuring a sporting Taycan were likely already considering that wheel.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>TURBO GT: E-SHIFT STANDARD</div>
            <p style={S.calloutText}>
              The Taycan Turbo GT ships with E-Shift as standard equipment. Fitted with the Manthey
              Performance Kit, the Turbo GT lapped the Nürburgring Nordschleife in{" "}
              <strong style={{ color: "#CCDA47" }}>6:55.553</strong> &mdash; placing it among the
              fastest road cars ever recorded around the circuit.
            </p>
          </div>

          <h2 style={S.h2}>What else changes for MY27</h2>

          <p style={S.p}>
            The simulated gearbox draws most of the attention, but the 2027 Taycan brings several
            other genuine improvements worth knowing about.
          </p>

          <p style={S.p}>
            The <span style={S.highlight}>105kWh Performance Battery Plus</span> &mdash; previously
            a higher-trim exclusive &mdash; is now standard across the entire Taycan range. Entry-level
            buyers get meaningfully more battery than they would have before, without having to
            specify up. That&rsquo;s a real win for the segment.
          </p>

          {/* Image 3 — after battery/infotainment */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/s26_0400.jpg"
              alt="2027 Porsche Taycan interior infotainment"
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Porsche Media</p>
          </div>

          <p style={S.p}>
            Inside, Porsche has replaced the previous infotainment with a new Porsche Digital
            Interaction system. It runs on updated hardware &mdash; addressing the response lag that
            drew occasional criticism in earlier models &mdash; and adds an AI-powered voice
            assistant and over-the-air update capability. Wireless charging jumps to
            <span style={S.highlight}> 15W</span>, which is a small but noticeable upgrade for
            a car that spends long stretches on the road.
          </p>

          <hr style={S.divider} />

          {/* Image 4 — before conclusion */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/s26_0408.jpg"
              alt="2027 Porsche Taycan exterior"
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Porsche Media</p>
          </div>

          <h2 style={S.h2}>Australia: timing and pricing</h2>

          <p style={S.p}>
            Porsche Australia hasn&rsquo;t confirmed a local launch date for the MY27 Taycan.
            Based on Porsche&rsquo;s typical model year rollout, expect deliveries to commence in
            late 2026 or early 2027. The current Taycan range starts from approximately
            <span style={S.highlight}> $183,000 drive away</span> for the base model &mdash; and
            pricing will almost certainly nudge upward for the new model year, as it has for
            every generation.
          </p>

          <p style={S.p}>
            Whether Australian buyers will embrace E-Shift is the interesting question. Given how
            enthusiastically local Taycan buyers have historically specified their cars &mdash; often
            ticking every performance box available &mdash; it would be surprising if the GT Sport
            wheel package didn&rsquo;t become one of the most common options on Australian-spec
            cars. The simulated gearbox might sound like a novelty. In practice, it&rsquo;s likely
            to be the feature buyers remember most.
          </p>

          {/* Source */}
          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>SOURCE</span>
            <a
              href="https://www.carsales.com.au/editorial/details/porsche-taycan-gets-simulated-gear-shifts-152274/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              carsales.com.au ↗
            </a>
          </div>

          {/* CTA */}
          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>Stay ahead of every new launch</div>
            <p style={S.ctaDesc}>New model alerts and clearance deals delivered to your inbox weekly</p>
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
            {RELATED_NEWS.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="news-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "#F5F5F0", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
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

      {/* Latest Articles */}
      <div style={{ background: "#ECEEE7", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>Latest Articles</div>
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>All articles →</Link>
          </div>
          <div className="section-grid">
            {LATEST_ARTICLES.map((item) => (
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
