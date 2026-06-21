import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "End of Month Car Deals Explained — Secrets Dealers Will Never Tell You | MustGoDeals",
  description:
    "Australian car dealerships face enormous pressure from manufacturers at month end. Here's exactly how that pressure works — and how everyday buyers can use it to negotiate thousands off their next car.",
  keywords: [
    "end of month car deals australia",
    "car dealer negotiation tips",
    "holdback dealer australia",
    "stair step bonus car dealership",
    "how to negotiate car price australia",
    "best time to buy car australia",
    "month end car deals",
  ],
  openGraph: {
    title: "End of Month Car Deals Explained — Secrets Dealers Will Never Tell You",
    description:
      "Dealerships face huge manufacturer pressure at month end. Here's how the system works and how to use it to get a better deal on your next car in Australia.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: {
    canonical: "/blog/end-of-month-car-deals-explained",
  },
};

const S = {
  page: { minHeight: "100vh", background: "#F5F5F0" } as React.CSSProperties,
  hero: { background: "#1A1A1A", padding: "3rem 2rem 2.5rem" } as React.CSSProperties,
  heroInner: { maxWidth: "780px", margin: "0 auto" } as React.CSSProperties,
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
  metaItem: { fontSize: "12px", color: "rgba(255,255,255,0.4)" } as React.CSSProperties,
  article: { maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" } as React.CSSProperties,
  body: { fontSize: "16px", lineHeight: 1.8, color: "#2A2A2A" } as React.CSSProperties,
  h2: {
    fontSize: "24px", fontWeight: 600, color: "#1A1A1A",
    marginTop: "2.5rem", marginBottom: "1rem", letterSpacing: "-0.3px",
  } as React.CSSProperties,
  h3: {
    fontSize: "18px", fontWeight: 600, color: "#1A1A1A",
    marginTop: "1.75rem", marginBottom: "0.75rem",
  } as React.CSSProperties,
  p: { marginBottom: "1.25rem", color: "#333", lineHeight: 1.8 } as React.CSSProperties,
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
  divider: { border: "none", borderTop: "1px solid rgba(0,0,0,0.08)", margin: "2.5rem 0" } as React.CSSProperties,
  ctaBox: {
    background: "#1A1A1A", borderRadius: "12px",
    padding: "2rem", textAlign: "center" as const, margin: "3rem 0",
  } as React.CSSProperties,
  ctaTitle: { color: "white", fontSize: "20px", fontWeight: 500, marginBottom: "0.5rem" } as React.CSSProperties,
  ctaDesc: { color: "rgba(255,255,255,0.5)", fontSize: "14px", marginBottom: "1.25rem" } as React.CSSProperties,
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
      <BlogLangTabs current="EN" links={{ EN: "/blog/end-of-month-car-deals-explained", KO: "/blog/wolmal-jadongcha-dil-jongni" }} />

      {/* Hero */}
      <div style={S.hero}>
        <div style={S.heroInner}>
          <div style={S.breadcrumb}>
            <Link href="/" style={S.breadcrumbLink}>Home</Link>
            <span>›</span>
            <Link href="/" style={S.breadcrumbLink}>Blog</Link>
            <span>›</span>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>End of Month Deals</span>
          </div>
          <div style={S.badge}>
            <span>Insider Guide</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 2026</span>
          </div>
          <h1 style={S.h1}>
            End of month car deals explained —{" "}
            <span style={{ color: "#CCDA47" }}>secrets dealers will never tell you</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>7 min read</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Timing · Negotiation · Dealer Tactics</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            If you&rsquo;ve ever bought a car in Australia and wondered whether you could have paid
            less, the answer is almost certainly yes. Not because you&rsquo;re a bad negotiator —
            but because the car industry runs on a system most buyers have never heard of. And
            dealers have no reason to explain it to you.
          </p>

          <p style={S.p}>
            I spent nearly a decade working in automotive retail. I&rsquo;ve seen the pressure that
            rolls through a dealership in the final days of every month. I&rsquo;ve watched sales
            managers scramble, seen deals approved at the last minute that would never have flown
            a week earlier. Now I want to tell you exactly what&rsquo;s happening — and how you
            can use it.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>THE SHORT VERSION</div>
            <p style={S.calloutText}>
              Manufacturers pay dealerships bonus incentives for hitting monthly sales targets.
              In the final 3–5 business days of each month, dealers are under enormous pressure
              to close every deal possible. That pressure is your negotiating power — if you
              show up at the right time.
            </p>
          </div>

          <h2 style={S.h2}>Why dealers must sell before month end</h2>

          <p style={S.p}>
            Here&rsquo;s something most Australians don&rsquo;t know: car manufacturers don&rsquo;t
            just sell vehicles to dealerships. They set monthly sales targets, and they incentivise
            dealerships to hit them with bonuses that can be worth tens of thousands of dollars.
            These bonuses come in a few forms.
          </p>

          <h3 style={S.h3}>Holdback — the hidden payment</h3>
          <p style={S.p}>
            Built into every new car sale is something called a <strong>holdback</strong>. When a
            dealership sells a vehicle, the manufacturer quietly reimburses them a percentage of
            the vehicle&rsquo;s wholesale price — typically 2–3%. On a $50,000 car, that&rsquo;s
            between $1,000 and $1,500 that the dealership receives regardless of what price they
            sold it to you for.
          </p>
          <p style={S.p}>
            This is why a dealer can sometimes offer a price that appears to be below cost — they&rsquo;re
            not actually losing money. They&rsquo;re being compensated elsewhere. The holdback is
            invisible to buyers, but it&rsquo;s very real to the dealer. It&rsquo;s the hidden floor
            beneath the negotiation.
          </p>

          <h3 style={S.h3}>Stair-step bonuses — where it gets interesting</h3>
          <p style={S.p}>
            Many manufacturers structure their dealer incentives so that hitting a specific monthly
            target unlocks a large bonus payment — applied retroactively across{" "}
            <em>every vehicle sold that month</em>, not just the ones above the target. This is
            called a <strong>stair-step bonus</strong>, and it completely changes the economics at
            month end.
          </p>
          <p style={S.p}>
            Here&rsquo;s a real-world example. Say a Toyota dealership&rsquo;s monthly target is
            30 vehicles. If they hit that target, they receive an extra{" "}
            <span style={S.highlight}>$500 per unit</span> — that&rsquo;s $15,000 in bonus
            payments. If they sell only 29, they receive nothing. With 3 days left in the month
            and 28 cars sold, that dealership is staring at the difference between $14,000 and
            zero dollars. At that point, they will do almost anything to close two more deals —
            including giving you a price they would have flatly refused a week earlier.
          </p>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>MANUFACTURER INCENTIVE TERMS — PLAIN ENGLISH</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}><strong>Holdback:</strong> A hidden rebate (2–3% of wholesale price) paid to dealers by the manufacturer after each sale</li>
              <li style={S.tipItem}><strong>Stair-step bonus:</strong> A large payment triggered when a dealer hits a monthly sales target — applied to every car sold that month</li>
              <li style={S.tipItem}><strong>Floorplan assistance:</strong> Manufacturer subsidy covering the cost of keeping unsold vehicles in the dealer&rsquo;s yard</li>
              <li style={S.tipItem}><strong>Demo allowance:</strong> Additional margin given to dealers when they sell demonstrator vehicles</li>
            </ul>
          </div>

          <h2 style={S.h2}>The golden timing window</h2>

          <p style={S.p}>
            Knowing that dealers face end-of-month pressure is one thing. Knowing exactly when to
            show up is another. Not all days in the final week are equal.
          </p>

          <h3 style={S.h3}>Last 3–5 business days</h3>
          <p style={S.p}>
            This is when the pressure becomes real and visible inside the dealership. The sales
            manager starts running the numbers. Everyone on the floor knows exactly where the
            team sits relative to target. Conversations that were impossible two weeks ago
            — bigger discounts, waived on-road costs, free accessories — start becoming possible.
          </p>

          <h3 style={S.h3}>Weekday afternoons beat weekends</h3>
          <p style={S.p}>
            On a Saturday, the showroom is busy. A salesperson handling multiple customers at once
            feels less pressure to close any individual deal. A{" "}
            <span style={S.highlight}>Tuesday or Wednesday afternoon</span>, with a quiet floor
            and two days left in the month? That&rsquo;s a completely different conversation. The
            salesperson knows today might be one of their last real chances to add a unit to the
            monthly tally.
          </p>

          <h3 style={S.h3}>Quarter-end and year-end stack the pressure even higher</h3>
          <p style={S.p}>
            If you can time your visit to coincide with the end of a financial quarter (March, June,
            September, December) or end of financial year (June in Australia), you&rsquo;re stacking
            multiple incentive cycles on top of each other. These periods often produce the best
            deals of the year. Dealers are simultaneously chasing monthly, quarterly, and annual
            targets — all at once.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>TIMING PRIORITY ORDER</div>
            <p style={S.calloutText}>
              End of financial year (June) &gt; End of quarter &gt; Last 3 business days of month &gt; Any weekday afternoon in final week
            </p>
          </div>

          <h2 style={S.h2}>What dealers will never tell you</h2>

          <p style={S.p}>
            Beyond timing, there&rsquo;s a layer of information that dealers hold and buyers don&rsquo;t —
            and it works against you at every stage of the process. Here are the things most
            salespeople will never bring up unless you ask.
          </p>

          <h3 style={S.h3}>Aged stock is costing them money every week</h3>
          <p style={S.p}>
            Every vehicle sitting in a dealership&rsquo;s yard costs money. Dealers borrow money
            from a lender (called a floorplan facility) to fund their inventory, and they pay
            interest on every unsold car. A vehicle that&rsquo;s been there for 90 days or more
            is an active financial burden. Ask how long a vehicle has been in stock. If it&rsquo;s
            been sitting for a while, the dealer has strong motivation to move it — motivation
            that is entirely separate from their monthly target pressure.
          </p>

          <h3 style={S.h3}>Demo cars are often the best value in the market</h3>
          <p style={S.p}>
            A demonstrator vehicle — used for test drives by the dealership — typically has
            fewer than 3,000 kilometres on the clock and comes with the full manufacturer
            warranty intact from date of first registration. Dealers often discount demos by{" "}
            <span style={S.highlight}>10–15% from the new car price</span> just to clear them.
            But they rarely advertise this aggressively, because they&rsquo;d prefer to sell you
            a brand-new vehicle. If you&rsquo;re open to a demo, ask specifically whether any
            are available in the model you want.
          </p>

          <h3 style={S.h3}>Finance commissions are built into your interest rate</h3>
          <p style={S.p}>
            When a dealer helps you arrange car finance through their preferred lender, they
            typically receive a commission based on the interest rate written into your contract.
            The higher the rate, the more the dealer earns. This doesn&rsquo;t make dealer
            finance inherently bad — but it does mean you should never walk in without knowing
            your options. Get a pre-approval from your bank or a credit union before your visit.
            Even if you ultimately use dealer finance, arriving with a competing offer gives you
            real leverage to ask for a lower rate.
          </p>

          <h3 style={S.h3}>The trade-in trap</h3>
          <p style={S.p}>
            If you&rsquo;re trading in an existing vehicle, dealers will often try to negotiate
            the trade-in value and the new car price simultaneously — moving numbers around
            between columns to make both appear better than they actually are. Keep them completely
            separate. Agree on the new car driveaway price first. Then, and only then, discuss
            your trade-in. Get an independent valuation from RedBook or Carsales before you go.
          </p>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>PRE-VISIT CHECKLIST</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>Check the driveaway price on RedBook.com.au for your target vehicle</li>
              <li style={S.tipItem}>Get quotes from at least 2–3 dealerships for the same make and model</li>
              <li style={S.tipItem}>Ask how long the specific vehicle has been in stock</li>
              <li style={S.tipItem}>Get a bank or credit union pre-approval before visiting</li>
              <li style={S.tipItem}>Get an independent trade-in valuation if applicable</li>
              <li style={S.tipItem}>Visit on a weekday afternoon in the last 5 days of the month</li>
            </ul>
          </div>

          <h2 style={S.h2}>Step-by-step negotiation strategy</h2>

          <p style={S.p}>
            You don&rsquo;t need to be aggressive or confrontational to get a better deal. You
            just need to be more prepared than the average buyer — which, given everything above,
            is now entirely possible.
          </p>

          <h3 style={S.h3}>Step 1 — Always negotiate the driveaway price</h3>
          <p style={S.p}>
            The driveaway price is the total on-road cost: vehicle price plus registration, stamp
            duty, CTP insurance, and any dealer delivery fee. This is the only number that
            matters. Never negotiate on weekly repayments or monthly instalments — these can be
            manipulated too easily by adjusting the loan term. Anchor every conversation to the
            total driveaway cost.
          </p>

          <h3 style={S.h3}>Step 2 — Let them make the first offer</h3>
          <p style={S.p}>
            Resist the urge to name a number first. Ask: &ldquo;What&rsquo;s your best price on
            this vehicle, driveaway?&rdquo; Then be quiet. The pause is your ally. Most buyers
            feel uncomfortable with silence and fill it with concessions. Don&rsquo;t.
          </p>

          <h3 style={S.h3}>Step 3 — Use competing quotes as leverage</h3>
          <p style={S.p}>
            If the same make and model is available at multiple dealerships in your area, collect
            quotes from each of them before committing. Tell every dealer you&rsquo;re comparing
            prices. Dealers dislike losing a sale to a competitor far more than they dislike
            giving a discount. This one step alone can unlock savings that would never appear
            otherwise.
          </p>

          <h3 style={S.h3}>Step 4 — Be willing to walk away</h3>
          <p style={S.p}>
            This is the most powerful move available to a buyer, and also the hardest one to
            execute. If the number doesn&rsquo;t work, tell the salesperson you need to think
            about it and leave. In the final days of the month, dealers frequently call back
            with improved offers. If they don&rsquo;t call, you simply go to the next dealership.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>How to counter common dealer tactics</h2>

          <h3 style={S.h3}>&ldquo;Let me talk to my manager&rdquo;</h3>
          <p style={S.p}>
            This is almost always theatre. The back-and-forth between salesperson and manager is
            designed to wear you down through time pressure and manufactured effort. If it happens
            more than once, ask to speak directly to the finance manager or general sales manager.
            Cut out the middleman and have the real conversation.
          </p>

          <h3 style={S.h3}>The four-square worksheet</h3>
          <p style={S.p}>
            Some dealerships present a grid that mixes the vehicle price, trade-in value, deposit,
            and monthly repayments into a single document. This deliberately obscures the actual
            deal by letting numbers shift between boxes. Refuse to engage with it. Focus only
            on the total driveaway price, and discuss all other elements separately.
          </p>

          <h3 style={S.h3}>Artificial urgency</h3>
          <p style={S.p}>
            &ldquo;This price is only valid today.&rdquo; &ldquo;We have another buyer looking at
            this exact car.&rdquo; These lines are designed to stop you from thinking clearly and
            comparing options. Remember: the urgency is running in the other direction. End-of-month
            pressure is on the dealer, not on you. You can always come back tomorrow. They may not
            be able to afford to lose the deal.
          </p>

          <h3 style={S.h3}>After-sale add-ons</h3>
          <p style={S.p}>
            After you&rsquo;ve agreed on a price, many dealers will move you into the finance
            office where you&rsquo;ll be offered rust protection, paint sealant, extended
            warranties, tyre and rim insurance, and more. These products carry very high margins.
            You can negotiate them down significantly, or decline them entirely. If you want an
            extended warranty, research third-party options before your visit — they&rsquo;re
            often substantially cheaper.
          </p>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>QUESTIONS TO ASK BEFORE YOU SIGN</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>&ldquo;What is the total driveaway price, all-inclusive?&rdquo;</li>
              <li style={S.tipItem}>&ldquo;How long has this specific vehicle been in your yard?&rdquo;</li>
              <li style={S.tipItem}>&ldquo;Do you have any demonstrators available in this model?&rdquo;</li>
              <li style={S.tipItem}>&ldquo;Is this your best price, or is there any flexibility?&rdquo;</li>
              <li style={S.tipItem}>&ldquo;Can you match [competitor dealership] who offered me $X driveaway?&rdquo;</li>
              <li style={S.tipItem}>&ldquo;What interest rate are you offering, and can you do better?&rdquo;</li>
            </ul>
          </div>

          <h2 style={S.h2}>The bottom line</h2>

          <p style={S.p}>
            Car dealers aren&rsquo;t villains. Most are people doing a difficult job inside a
            system built on information asymmetry. The fact that you didn&rsquo;t know about
            holdbacks, stair-step bonuses, aged stock carrying costs, or finance commissions
            isn&rsquo;t your fault. It&rsquo;s just the way the industry works — and the way
            it has always worked.
          </p>

          <p style={S.p}>
            But now you know. Timing matters enormously — show up in the last week of the month,
            on a weekday afternoon if you can. Preparation matters — know the driveaway price,
            have a competing quote ready, get your finance pre-approved, and understand what
            your trade-in is worth before you step through the door.
          </p>

          <p style={S.p}>
            Most Australian car buyers leave money on the table — not because they aren&rsquo;t
            smart, but because they simply didn&rsquo;t have the information. Now you do.
          </p>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>Get month-end deal alerts</div>
            <p style={S.ctaDesc}>Clearance vehicles dealers need to move — delivered to your inbox every week</p>
            <Link href="/coming-soon" style={S.ctaBtn}>Get free alerts →</Link>
          </div>

        </div>
      </article>

      {/* Related Guides */}
      <div style={{ background: "white", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>Related Articles</div>
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>All articles →</Link>
          </div>
          <div className="news-grid">
            {[
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
                <div style={{ background: "#F5F5F0", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", padding: "1.25rem" }}>
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
          <div className="news-grid">
            {[
              {
                slug: "maserati-grecale-2027-australia",
                title: "Maserati expands Grecale SUV lineup for 2027 Australian market",
                category: "NEWS",
                date: "June 21, 2026",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg",
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
