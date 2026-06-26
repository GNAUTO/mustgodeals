import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "Luxury Car Tax in Australia — What It Is and How It Affects Your Next Car Purchase | MustGoDeals",
  description:
    "If you're buying an Audi, BMW, or Mercedes in Australia, the Luxury Car Tax (LCT) could add thousands to the price. Here's exactly how it works and how to legally reduce your exposure.",
  keywords: [
    "luxury car tax australia",
    "LCT australia",
    "luxury car tax threshold 2025 2026",
    "lct on demo cars australia",
    "fuel efficient vehicle lct threshold",
    "how to avoid luxury car tax australia",
    "premium car buying australia",
  ],
  openGraph: {
    title: "Luxury Car Tax in Australia — What It Is and How It Affects Your Next Car Purchase",
    description:
      "LCT can add thousands to the cost of a premium car in Australia. Know the 2025–26 thresholds, the maths, and how demo cars can legally eliminate the tax entirely.",
    type: "article",
    locale: "en_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/blog/luxury-car-tax-australia" },
};

const S = {
  page:      { minHeight: "100vh", background: "#F5F5F0" } as React.CSSProperties,
  hero:      { background: "#1A1A1A", padding: "3rem 2rem 2.5rem" } as React.CSSProperties,
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
  metaItem:  { fontSize: "12px", color: "rgba(255,255,255,0.4)" } as React.CSSProperties,
  article:   { maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" } as React.CSSProperties,
  body:      { fontSize: "16px", lineHeight: 1.8, color: "#2A2A2A" } as React.CSSProperties,
  h2: {
    fontSize: "24px", fontWeight: 600, color: "#1A1A1A",
    marginTop: "2.5rem", marginBottom: "1rem", letterSpacing: "-0.3px",
  } as React.CSSProperties,
  p:         { marginBottom: "1.25rem", color: "#333", lineHeight: 1.8 } as React.CSSProperties,
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
  tipList:  { paddingLeft: "1.25rem", margin: 0 } as React.CSSProperties,
  tipItem:  { color: "#333", fontSize: "15px", lineHeight: 1.75, marginBottom: "0.4rem" } as React.CSSProperties,
  highlight: {
    background: "rgba(204,218,71,0.2)", color: "#1A1A1A",
    fontWeight: 600, padding: "1px 5px", borderRadius: "3px",
  } as React.CSSProperties,
  divider:   { border: "none", borderTop: "1px solid rgba(0,0,0,0.08)", margin: "2.5rem 0" } as React.CSSProperties,
  ctaBox: {
    background: "#1A1A1A", borderRadius: "12px",
    padding: "2rem", textAlign: "center" as const, margin: "3rem 0",
  } as React.CSSProperties,
  ctaTitle:  { color: "white", fontSize: "20px", fontWeight: 500, marginBottom: "0.5rem" } as React.CSSProperties,
  ctaDesc:   { color: "rgba(255,255,255,0.5)", fontSize: "14px", marginBottom: "1.25rem" } as React.CSSProperties,
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
    margin: "1.5rem 0", fontSize: "14px", borderRadius: "8px", overflow: "hidden",
  } as React.CSSProperties,
  th: {
    padding: "10px 14px", textAlign: "left" as const, background: "#1A1A1A",
    color: "#CCDA47", fontWeight: 600, fontSize: "12px", letterSpacing: "0.5px",
  } as React.CSSProperties,
  td: {
    padding: "10px 14px", borderBottom: "0.5px solid rgba(0,0,0,0.07)",
    color: "#333", background: "white",
  } as React.CSSProperties,
  tdRight: {
    padding: "10px 14px", borderBottom: "0.5px solid rgba(0,0,0,0.07)",
    textAlign: "right" as const, fontWeight: 600, color: "#1A1A1A", background: "white",
  } as React.CSSProperties,
};

export default function Page() {
  return (
    <div style={S.page}>
      <Navbar />
      <BlogLangTabs
        current="EN"
        links={{
          EN: "/blog/luxury-car-tax-australia",
          KO: "/blog/luxury-car-tax-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>Luxury Car Tax</span>
          </div>
          <div style={S.badge}>
            <span>Buying Guide</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>June 26, 2026</span>
          </div>
          <h1 style={S.h1}>
            Luxury Car Tax in Australia —{" "}
            <span style={{ color: "#CCDA47" }}>What It Is and How It Affects Your Purchase</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>8 min read</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>Tax · LCT · Premium Vehicles</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            If you&apos;re shopping for an Audi, BMW, or Mercedes in Australia, you&apos;ve probably noticed that the
            sticker price is often higher than you&apos;d expect. Part of that comes down to a tax that kicks in
            the moment a vehicle exceeds a certain price threshold — the{" "}
            <span style={S.highlight}>Luxury Car Tax (LCT)</span>. It&apos;s one of those costs that catches buyers off
            guard, but once you understand how it works, you can plan around it. This guide breaks down exactly
            what LCT is, how much it adds to your purchase, and how to legally minimise your exposure.
          </p>

          <h2 style={S.h2}>What Is the Luxury Car Tax?</h2>

          <p style={S.p}>
            The Luxury Car Tax is a federal government tax applied to the sale of vehicles above a set price
            threshold. It was introduced in 1999 alongside the GST, with the intention of placing an additional
            tax burden on high-value vehicle purchases. Importantly, LCT is separate from GST — it sits on top
            of it.
          </p>

          <p style={S.p}>
            In practice, the dealership pays LCT to the ATO and passes that cost directly onto the buyer through
            the vehicle price. If you&apos;re buying a car above the threshold, you&apos;re paying it — whether
            it&apos;s itemised on the invoice or not.
          </p>

          <p style={S.p}>
            The mechanics are straightforward: only the amount <em>above</em> the threshold gets taxed, not the
            full vehicle price. But at a rate of <span style={S.highlight}>33%</span>, that slice adds up fast.
          </p>

          <h2 style={S.h2}>The 2025–26 LCT Thresholds</h2>

          <p style={S.p}>
            The LCT threshold is adjusted every financial year. For 2025–26, there are two separate thresholds
            depending on the vehicle&apos;s fuel efficiency:
          </p>

          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>Vehicle Type</th>
                <th style={{ ...S.th, textAlign: "right" }}>LCT Threshold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={S.td}>Standard vehicles</td>
                <td style={S.tdRight}>$80,567</td>
              </tr>
              <tr>
                <td style={{ ...S.td, borderBottom: "none" }}>Fuel-efficient vehicles (7L/100km or less)</td>
                <td style={{ ...S.tdRight, borderBottom: "none" }}>$91,387</td>
              </tr>
            </tbody>
          </table>

          <p style={S.p}>
            These figures are GST-inclusive. Once the vehicle price crosses its applicable threshold, 33% LCT
            applies to every dollar above that line.
          </p>

          <h2 style={S.h2}>How Much Does It Actually Add?</h2>

          <p style={S.p}>
            Let&apos;s run the numbers on a real example. Say you&apos;re buying a vehicle with a GST-inclusive
            price of $95,000. Using the standard threshold of $80,567, the taxable amount is $14,433. Apply the
            33% rate and you get an LCT bill of approximately <span style={S.highlight}>$4,763</span>.
          </p>

          <div style={S.callout}>
            <p style={S.calloutTitle}>WORKED EXAMPLE</p>
            <p style={S.calloutText}>
              Vehicle price: $95,000 − LCT threshold: $80,567 = Taxable amount: $14,433<br />
              $14,433 × 33% = <strong>LCT payable: $4,763</strong>
            </p>
          </div>

          <p style={S.p}>
            Most dealerships will have already folded this into the driveaway price — which is exactly why
            driveaway pricing matters. Always ask whether a quoted price is driveaway, and if so, confirm that
            LCT is included. If it isn&apos;t, you&apos;re in for a surprise at the paperwork stage.
          </p>

          <h2 style={S.h2}>Demo Cars and LCT — A Key Difference</h2>

          <p style={S.p}>
            Here&apos;s where it gets genuinely useful for buyers. LCT is calculated on the <em>sale price</em> of
            the vehicle. That means if you buy a demo car at a price below the LCT threshold, you pay zero LCT —
            even if the same car would attract thousands in tax when sold new.
          </p>

          <div style={S.callout}>
            <p style={S.calloutTitle}>DEMO CAR SCENARIO</p>
            <p style={S.calloutText}>
              An Audi model with a new price of $88,000 is available as a demonstrator for{" "}
              <strong>$78,500</strong>. That&apos;s below the standard LCT threshold of $80,567.
              Result: <strong>zero LCT payable</strong>.
            </p>
          </div>

          <p style={S.p}>
            This is one of the most overlooked advantages of buying a demonstrator. You&apos;re not just getting a
            discount on the car — you&apos;re potentially eliminating a tax that would have added thousands to the
            new-car equivalent. That&apos;s a structural saving, not just a negotiated one.
          </p>

          <h2 style={S.h2}>The Fuel-Efficient Threshold Is Worth Knowing</h2>

          <p style={S.p}>
            If you&apos;re considering a hybrid or electric vehicle, the higher threshold of{" "}
            <span style={S.highlight}>$91,387</span> applies — provided the vehicle consumes 7 litres per 100km
            or less on the combined cycle. That&apos;s roughly $11,000 more headroom than the standard threshold
            before LCT kicks in.
          </p>

          <p style={S.p}>
            Given that most premium brands now offer hybrid variants — Audi&apos;s e-tron range, the BMW iX,
            Volvo EX90 — this threshold difference can be a meaningful factor in your model choice. A hybrid
            version of a vehicle that would otherwise attract LCT might sit cleanly below the fuel-efficient
            threshold.
          </p>

          <h2 style={S.h2}>Legitimate Ways to Reduce Your LCT Exposure</h2>

          <p style={S.p}>
            LCT is a lawful tax, but there are legitimate strategies that can reduce or eliminate it. Here&apos;s
            what actually works:
          </p>

          <div style={S.tipBox}>
            <p style={S.tipTitle}>FOUR APPROACHES THAT WORK</p>
            <ul style={S.tipList}>
              <li style={S.tipItem}>
                <strong>Buy a demo car</strong> — If the demo price falls below the threshold, there&apos;s no LCT at all.
                Same factory warranty, significantly lower tax burden.
              </li>
              <li style={S.tipItem}>
                <strong>Choose a fuel-efficient vehicle</strong> — Hybrid or EV models qualify for the higher $91,387 threshold,
                giving you more room before LCT applies.
              </li>
              <li style={S.tipItem}>
                <strong>Use a novated lease</strong> — LCT still applies, but structuring the full vehicle cost as pre-tax
                salary reduces your effective after-tax outlay. Combining a novated lease with an LCT-efficient
                vehicle compounds the saving.
              </li>
              <li style={S.tipItem}>
                <strong>Manage your option pack</strong> — Options are included in the LCT calculation. If the base vehicle
                sits just below the threshold, check with your dealer which options push it over — and whether
                any can be added post-sale or dropped entirely.
              </li>
            </ul>
          </div>

          <h2 style={S.h2}>When LCT Can Be Refunded</h2>

          <p style={S.p}>
            There are limited circumstances under which LCT paid at the point of sale can be claimed back. These
            include:
          </p>

          <div style={S.tipBox}>
            <p style={S.tipTitle}>LCT REFUND SCENARIOS</p>
            <ul style={S.tipList}>
              <li style={S.tipItem}><strong>Export</strong> — If the vehicle is exported from Australia, the LCT can be refunded.</li>
              <li style={S.tipItem}><strong>Primary production use</strong> — Vehicles used in primary industry (farming, agriculture) may qualify.</li>
              <li style={S.tipItem}><strong>Disability-modified vehicles</strong> — Certain modifications for disabled drivers attract concessional treatment.</li>
            </ul>
          </div>

          <p style={S.p}>
            Most private buyers won&apos;t qualify for a refund, but if you&apos;re purchasing for business purposes, it&apos;s
            worth a conversation with your accountant before settlement.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>The Bottom Line</h2>

          <p style={S.p}>
            The Luxury Car Tax is one of those costs that&apos;s easy to ignore until you&apos;re sitting at the
            dealership wondering why the number doesn&apos;t match what you expected. At 33% on the amount above
            the threshold, it can add thousands to the final price of any premium vehicle.
          </p>

          <p style={S.p}>
            The good news is that with a little planning — buying a demo, choosing a fuel-efficient model, or
            structuring through a novated lease — you can significantly reduce that exposure, or eliminate it
            altogether. Always start by asking for the driveaway price, confirming whether LCT is included, and
            checking which threshold applies to your vehicle of choice.
          </p>

          <p style={S.p}>
            Know the rules, and they work for you. That&apos;s what smart buying looks like.
          </p>

          <div style={S.ctaBox}>
            <p style={S.ctaTitle}>Find a Demo Car Below the LCT Threshold</p>
            <p style={S.ctaDesc}>Browse demo listings where the price — and the tax — works in your favour.</p>
            <Link href="/listings" style={S.ctaBtn}>Browse Demo Listings</Link>
          </div>

        </div>
      </article>

      <Footer />
    </div>
  );
}
