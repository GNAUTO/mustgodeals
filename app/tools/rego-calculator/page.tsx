import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RegoCalculator from "./RegoCalculator";

export const metadata: Metadata = {
  title: "Rego Calculator · Annual Registration Cost for All Australian States · MustGoDeals",
  description:
    "Free vehicle registration cost calculator for all 8 Australian states and territories. Instantly estimate your annual rego renewal using 2026 to 2027 official rates for NSW, VIC, QLD, SA, WA, TAS, ACT and NT.",
  openGraph: {
    title: "Australian Vehicle Registration Cost Calculator",
    description:
      "Calculate your annual rego cost for any Australian state. Includes weight based fees for NSW, cylinder based rates for QLD, and EV registration incentives.",
    url: "https://mustgodeals.com.au/tools/rego-calculator",
  },
  alternates: {
    canonical: "https://mustgodeals.com.au/tools/rego-calculator",
  },
};

const webAppLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Australian Vehicle Registration Cost Calculator",
  description:
    "Free annual rego cost estimator for all 8 Australian states and territories. Supports weight based, cylinder based, and emission based fee structures. Includes EV registration incentives.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  url: "https://mustgodeals.com.au/tools/rego-calculator",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "AUD",
  },
  publisher: {
    "@type": "Organization",
    name: "MustGoDeals",
    url: "https://mustgodeals.com.au",
  },
};

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is included in vehicle registration in Australia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Registration costs vary by state. In Victoria the Transport Accident Commission charge is bundled into the annual renewal. In Tasmania the MAIB insurance premium is included. In NSW, Queensland, SA, WA, ACT and NT, compulsory third party insurance is a separate payment to a licensed insurer.",
      },
    },
    {
      "@type": "Question",
      name: "Which state has the cheapest vehicle registration in Australia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Northern Territory has the lowest base registration fee, with a standard 4-cylinder vehicle paying $219 per year. For electric vehicles the NT offers free registration until 30 June 2027. Queensland and Tasmania bundle certain charges into the annual renewal, so the all-up cost depends on what is included in your state.",
      },
    },
    {
      "@type": "Question",
      name: "Is 6 month registration cheaper per month than 12 months?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Annual registration is generally cheaper per month in most states. States that allow shorter registration periods often apply a small premium for the convenience of a shorter term. Where both options are available, renewing annually will save money over the course of the year.",
      },
    },
    {
      "@type": "Question",
      name: "How do I find my vehicle's tare weight for the rego calculator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tare weight is the unladen weight of a vehicle with a standard amount of fuel and all fluids, but no passengers or cargo. It is listed on the compliance plate (usually inside the driver door frame), in the owner manual, and in the manufacturer specifications online. NSW, WA, SA and ACT all use tare weight to determine annual registration fees.",
      },
    },
    {
      "@type": "Question",
      name: "Which Australian states offer cheaper rego for electric vehicles?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The Northern Territory offers free registration for battery electric vehicles and plug in hybrids until 30 June 2027. The ACT charges significantly less for zero emission vehicles under the AAA emission category. Queensland applies the EV or 3 cylinder tier which is the lowest rate available in that state.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use this calculator for a motorbike or caravan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "This calculator is designed for standard passenger and light vehicles. Motorcycles, heavy vehicles, trailers, caravans and farm vehicles are subject to different fee structures in most states. Use your state's official registration portal for accurate estimates for non-standard vehicle types.",
      },
    },
  ],
};

const S = {
  page:      { minHeight: "100vh", background: "#FAFAFA" } as React.CSSProperties,
  hero:      { background: "#FAFAFA", padding: "2.5rem 1.5rem 2rem", borderBottom: "1px solid rgba(0,0,0,0.06)" } as React.CSSProperties,
  heroIn:    { maxWidth: "780px", margin: "0 auto" } as React.CSSProperties,
  calc:      { maxWidth: "780px", margin: "0 auto", padding: "2.5rem 1.5rem" } as React.CSSProperties,
  seo:       { maxWidth: "780px", margin: "0 auto", padding: "0 1.5rem 4rem" } as React.CSSProperties,
  h1:        { fontSize: "36px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "0.75rem", letterSpacing: "-0.5px" } as React.CSSProperties,
  badge:     { display: "inline-flex", alignItems: "center", gap: "6px", background: "#CCDA47", color: "#1A1A1A", fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "20px", marginBottom: "1rem", letterSpacing: "0.5px" } as React.CSSProperties,
  sub:       { fontSize: "15px", color: "#666", lineHeight: 1.6, maxWidth: "520px" } as React.CSSProperties,
  breadc:    { display: "flex", gap: "6px", alignItems: "center", fontSize: "12px", color: "rgba(0,0,0,0.35)", marginBottom: "1.25rem" } as React.CSSProperties,
  bLink:     { color: "rgba(0,0,0,0.35)", textDecoration: "none" } as React.CSSProperties,
  divider:   { border: "none", borderTop: "0.5px solid rgba(0,0,0,0.08)", margin: "2.5rem 0" } as React.CSSProperties,
  h2:        { fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.6rem" } as React.CSSProperties,
  p:         { fontSize: "15px", color: "#444", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  stateGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", marginTop: "1.5rem" } as React.CSSProperties,
  stateCard: { background: "white", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: "12px", padding: "18px 20px" } as React.CSSProperties,
  stateTitle: { fontSize: "14px", fontWeight: 700, color: "#1A1A1A", marginBottom: "6px" } as React.CSSProperties,
  stateText: { fontSize: "13px", color: "#666", lineHeight: 1.65 } as React.CSSProperties,
  faqItem:   { marginBottom: "1.5rem" } as React.CSSProperties,
  faqQ:      { fontSize: "15px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.4rem" } as React.CSSProperties,
  faqA:      { fontSize: "14px", color: "#555", lineHeight: 1.75 } as React.CSSProperties,
  relLinks:  { display: "flex", flexDirection: "column" as const, gap: "10px", marginTop: "1.25rem" } as React.CSSProperties,
  relLink:   { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "white", border: "0.5px solid rgba(0,0,0,0.1)", borderLeft: "3px solid #CCDA47", borderRadius: "8px", textDecoration: "none" } as React.CSSProperties,
};

const STATE_SUMMARIES = [
  {
    state: "New South Wales",
    rate:  "Weight based fee, around $391 to $675 plus $84 base",
    text:  "New South Wales calculates registration using a fixed base fee of $84 plus a Motor Vehicle Tax that depends on tare weight. A typical 1350kg sedan pays around $475 per year before the green slip CTP insurance. Tare weight is listed on your compliance plate.",
  },
  {
    state: "Victoria",
    rate:  "Rego fee plus TAC charge, around $895 metro",
    text:  "Victoria combines the registration fee and Transport Accident Commission charge into a single renewal payment. TAC is included in your rego total. Most metropolitan vehicles pay around $895 per year. The $100 EV discount ended in January 2026 and all vehicles now pay the standard rate.",
  },
  {
    state: "Queensland",
    rate:  "Cylinder based fee plus $67.25, from $370 for EVs",
    text:  "Queensland bases registration fees on engine cylinder count. A standard 4-cylinder vehicle pays $452.70 per year. Electric vehicles use the lowest cylinder tier at $370.35. CTP insurance is a separate compulsory payment and is not included in this amount.",
  },
  {
    state: "South Australia",
    rate:  "Weight based fee, around $520 to $790 metro",
    text:  "South Australia uses a weight based registration fee. A typical metro sedan weighing around 1350kg pays approximately $675 per year before CTP insurance, which starts from around $262 for metropolitan private vehicles. Country residents pay around 85% of the metro rate.",
  },
  {
    state: "Western Australia",
    rate:  "$28.64 per 100kg tare weight plus $6.60",
    text:  "Western Australia calculates the vehicle licence fee using a formula of $28.64 per 100kg of tare weight plus a $6.60 prescribed fee. A 1500kg vehicle costs around $436 to licence. Motor Injury Insurance is a separate compulsory payment.",
  },
  {
    state: "Tasmania",
    rate:  "All inclusive, around $602 to $810 depending on cylinders",
    text:  "Tasmania bundles the registration fee, motor tax and mandatory MAIB accident insurance into a single annual renewal payment. A typical 4-cylinder vehicle pays around $640 per year with the MAIB component already included. There are no separate CTP payments in Tasmania.",
  },
  {
    state: "Australian Capital Territory",
    rate:  "Emission based fee, $382 to $623 by vehicle type",
    text:  "The ACT links registration fees directly to vehicle emissions. Zero emission electric vehicles pay significantly less under the AAA category, from $382 per year. Standard petrol and diesel vehicles pay a higher rate based on their CO2 classification. This structure was introduced in July 2024.",
  },
  {
    state: "Northern Territory",
    rate:  "Engine displacement based, $130 to $350",
    text:  "The Northern Territory charges registration based on engine displacement, from $130 for engines up to 1500cc to $350 for engines over 3000cc. Battery electric vehicles and plug in hybrids are exempt from registration fees until 30 June 2027, making NT the most EV friendly state for rego costs.",
  },
];

const FAQ_ITEMS = [
  {
    q: "What is included in vehicle registration in Australia?",
    a: "Registration costs vary by state. In Victoria the Transport Accident Commission charge is bundled into the annual renewal. In Tasmania the MAIB insurance premium is included. In NSW, Queensland, SA, WA, ACT and NT, compulsory third party insurance is a separate payment made directly to a licensed insurer.",
  },
  {
    q: "Which state has the cheapest vehicle registration?",
    a: "The Northern Territory has the lowest base registration fee, with a standard 4-cylinder vehicle paying $219 per year. For electric vehicles the NT offers free registration until 30 June 2027. Queensland and Tasmania bundle certain charges into the annual renewal, so comparing states requires factoring in what is and is not included.",
  },
  {
    q: "Is 6 month registration cheaper per month than 12 months?",
    a: "Annual registration is generally cheaper per month in most states. States that allow shorter registration periods often apply a small premium for the shorter term. Where both options are available, renewing annually saves money over the course of the year.",
  },
  {
    q: "How do I find my vehicle's tare weight?",
    a: "Tare weight is the unladen weight of a vehicle with a standard amount of fuel and all fluids, but without passengers or cargo. It is listed on the compliance plate (usually inside the driver door frame), in the owner manual, and in the manufacturer specifications. NSW, WA, SA and ACT all use tare weight to determine annual registration fees.",
  },
  {
    q: "Which states offer cheaper rego for electric vehicles?",
    a: "The Northern Territory offers free registration for battery electric vehicles and plug in hybrids until 30 June 2027. The ACT charges significantly less for zero emission vehicles under the AAA emission category. Queensland applies the EV rate which is the lowest cylinder tier available in that state.",
  },
  {
    q: "Can I use this calculator for a motorbike or caravan?",
    a: "This calculator is designed for standard passenger and light vehicles. Motorcycles, heavy vehicles, trailers, caravans and farm vehicles are subject to different fee structures in most states. Use your state's official registration portal for accurate estimates for non-standard vehicle types.",
  },
];

export default function RegoCalculatorPage() {
  return (
    <div style={S.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
      />
      <Navbar />

      {/* Hero */}
      <div style={S.hero}>
        <div style={S.heroIn}>
          <div style={S.breadc}>
            <Link href="/" style={S.bLink}>Home</Link>
            <span>›</span>
            <Link href="/tools" style={S.bLink}>Tools</Link>
            <span>›</span>
            <span style={{ color: "rgba(0,0,0,0.5)" }}>Rego Calculator</span>
          </div>
          <div style={S.badge}>FREE TOOL</div>
          <h1 style={S.h1}>Rego Calculator</h1>
          <p style={S.sub}>
            Estimate your annual vehicle registration cost for any Australian state or territory.
            Rates update instantly as you make selections.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div style={S.calc}>
        <RegoCalculator />
      </div>

      {/* SEO content */}
      <div style={S.seo}>
        <hr style={S.divider} />

        <h2 style={S.h2}>How vehicle registration costs work in Australia</h2>
        <p style={S.p}>
          Vehicle registration fees in Australia are set by state and territory governments and
          vary considerably from one state to the next. There is no single national rego fee.
          Some states use the tare weight of your vehicle to calculate the fee, while others use
          engine cylinder count or CO2 emissions. Victoria and Tasmania bundle compulsory accident
          insurance into the annual renewal, while other states charge it separately.
        </p>
        <p style={S.p}>
          This calculator covers the registration component for standard private passenger vehicles.
          For states that charge CTP insurance separately, the calculator lets you see an estimated
          range for that additional cost. Always confirm the exact amount with your state's
          registration authority before renewing.
        </p>

        <hr style={S.divider} />

        <h2 style={S.h2}>Registration fees by state</h2>
        <p style={{ ...S.p, marginBottom: "0" }}>
          An overview of how each state and territory calculates annual vehicle registration.
          Amounts shown are for standard passenger vehicles in the 2026 to 2027 financial year.
          Always verify the exact amount with your state registration authority before renewing.
        </p>

        <div style={S.stateGrid}>
          {STATE_SUMMARIES.map((s) => (
            <div key={s.state} style={S.stateCard}>
              <div style={S.stateTitle}>{s.state}</div>
              <div style={{ ...S.stateText, color: "#7a8a00", fontWeight: 600, marginBottom: "6px", fontSize: "12px" }}>
                {s.rate}
              </div>
              <div style={S.stateText}>{s.text}</div>
            </div>
          ))}
        </div>

        <hr style={S.divider} />

        <h2 style={S.h2}>Frequently asked questions</h2>
        {FAQ_ITEMS.map((item) => (
          <div key={item.q} style={S.faqItem}>
            <div style={S.faqQ}>{item.q}</div>
            <div style={S.faqA}>{item.a}</div>
          </div>
        ))}

        <hr style={S.divider} />

        <div style={S.relLinks}>
          <Link href="/tools/stamp-duty-calculator" style={S.relLink}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#7a8a00", letterSpacing: "0.08em", marginBottom: "4px" }}>FREE TOOL</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>
                Stamp Duty Calculator
              </div>
            </div>
            <span style={{ color: "#CCDA47", fontSize: "18px", flexShrink: 0, marginLeft: "12px" }}>→</span>
          </Link>
          <Link href="/blog/end-of-month-car-deals-explained" style={S.relLink}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#7a8a00", letterSpacing: "0.08em", marginBottom: "4px" }}>BUYING GUIDE</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>
                End of Month Car Deals Explained
              </div>
            </div>
            <span style={{ color: "#CCDA47", fontSize: "18px", flexShrink: 0, marginLeft: "12px" }}>→</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
