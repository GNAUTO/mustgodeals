import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StampDutyCalculator from "./StampDutyCalculator";

export const metadata: Metadata = {
  title: "Stamp Duty Calculator · All Australian States and Territories · MustGoDeals",
  description:
    "Free stamp duty calculator for car purchases across NSW, VIC, QLD, SA, WA, TAS, ACT and NT. Based on 2025 to 2026 official state revenue rates. Results update instantly.",
  openGraph: {
    title: "Australian Stamp Duty Calculator for Car Purchases",
    description:
      "Calculate stamp duty for your next car purchase across all 8 Australian states and territories. Includes EV concession rates.",
    url: "https://mustgodeals.com.au/tools/stamp-duty-calculator",
  },
  alternates: {
    canonical: "https://mustgodeals.com.au/tools/stamp-duty-calculator",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "Australian Car Stamp Duty Calculator",
  description:
    "Free calculator for motor vehicle stamp duty across all Australian states and territories, including EV concession rates.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  url: "https://mustgodeals.com.au/tools/stamp-duty-calculator",
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

const S = {
  page:    { minHeight: "100vh", background: "#FAFAFA" } as React.CSSProperties,
  hero:    { background: "#FAFAFA", padding: "2.5rem 1.5rem 2rem", borderBottom: "1px solid rgba(0,0,0,0.06)" } as React.CSSProperties,
  heroIn:  { maxWidth: "780px", margin: "0 auto" } as React.CSSProperties,
  calc:    { maxWidth: "780px", margin: "0 auto", padding: "2.5rem 1.5rem" } as React.CSSProperties,
  seo:     { maxWidth: "780px", margin: "0 auto", padding: "0 1.5rem 4rem" } as React.CSSProperties,
  h1:      { fontSize: "36px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "0.75rem", letterSpacing: "-0.5px" } as React.CSSProperties,
  badge:   { display: "inline-flex", alignItems: "center", gap: "6px", background: "#CCDA47", color: "#1A1A1A", fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "20px", marginBottom: "1rem", letterSpacing: "0.5px" } as React.CSSProperties,
  sub:     { fontSize: "15px", color: "#666", lineHeight: 1.6, maxWidth: "500px" } as React.CSSProperties,
  breadc:  { display: "flex", gap: "6px", alignItems: "center", fontSize: "12px", color: "rgba(0,0,0,0.35)", marginBottom: "1.25rem" } as React.CSSProperties,
  bLink:   { color: "rgba(0,0,0,0.35)", textDecoration: "none" } as React.CSSProperties,
  divider: { border: "none", borderTop: "0.5px solid rgba(0,0,0,0.08)", margin: "2.5rem 0" } as React.CSSProperties,
  h2:      { fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.6rem" } as React.CSSProperties,
  p:       { fontSize: "15px", color: "#444", lineHeight: 1.75, marginBottom: "1rem" } as React.CSSProperties,
  stateGrid: { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", marginTop: "1.5rem" } as React.CSSProperties,
  stateCard: { background: "white", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: "12px", padding: "18px 20px" } as React.CSSProperties,
  stateTitle: { fontSize: "14px", fontWeight: 700, color: "#1A1A1A", marginBottom: "6px" } as React.CSSProperties,
  stateText: { fontSize: "13px", color: "#666", lineHeight: 1.65 } as React.CSSProperties,
  relLinks: { display: "flex", flexDirection: "column" as const, gap: "10px", marginTop: "1.25rem" } as React.CSSProperties,
  relLink: { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "white", border: "0.5px solid rgba(0,0,0,0.1)", borderLeft: "3px solid #CCDA47", borderRadius: "8px", textDecoration: "none" } as React.CSSProperties,
};

const STATE_SUMMARIES = [
  {
    state: "New South Wales",
    rate: "3% up to $44,999 then 5% above",
    text: "NSW charges $3 per $100 on vehicles under $45,000 and $5 per $100 on the amount above that threshold. There is no separate luxury surcharge, making it straightforward to calculate. Revenue NSW provides an online calculator to verify the exact figure for your purchase.",
  },
  {
    state: "Victoria",
    rate: "$8.40 to $18.00 per $200 of value",
    text: "VIC uses a tiered rate per $200 of vehicle value, starting at $8.40 for vehicles up to $80,809 and rising to $18.00 for vehicles over $150,000. Electric vehicles and hybrids with combined emissions at or under 120g per km qualify for the flat green rate of $8.40 per $200.",
  },
  {
    state: "Queensland",
    rate: "$2 to $4 per $100 depending on engine",
    text: "QLD sets duty based on the number of cylinders. Electric and hybrid vehicles pay just $2 per $100, the lowest rate in the state. Four-cylinder vehicles pay $3 per $100. For vehicles priced over $100,000, a higher rate applies to the full dutiable value, not just the excess.",
  },
  {
    state: "South Australia",
    rate: "$4 per $100 above $3,000",
    text: "SA uses a short progressive scale that effectively settles at $60 plus $4 per $100 for any vehicle over $3,000. For most passenger cars, the calculation is straightforward. Commercial vehicles such as utilities have a lower rate schedule administered by RevenueSA.",
  },
  {
    state: "Western Australia",
    rate: "2.75% to 6.5% depending on price",
    text: "WA applies a sliding scale. Vehicles up to $25,000 pay 2.75% of value. Between $25,000 and $50,000, the rate rises linearly to 6.5%. Vehicles over $50,000 pay 6.5% of the full dutiable value, making WA one of the higher-cost states for premium vehicles.",
  },
  {
    state: "Tasmania",
    rate: "3% of vehicle value (minimum $20)",
    text: "Tasmania keeps it simple with a flat 3% rate on the full dutiable value for standard passenger vehicles, with a minimum charge of $20. The State Revenue Office Tasmania administers the duty at time of registration transfer.",
  },
  {
    state: "Australian Capital Territory",
    rate: "$2.50 to $4.83 per $100 by emissions band",
    text: "ACT links duty rates directly to a vehicle's carbon dioxide emissions. Zero emission vehicles pay the lowest rate. Standard petrol or diesel cars fall into higher bands. There are also three price tiers within each band, so both the vehicle price and its emissions classification determine the final duty.",
  },
  {
    state: "Northern Territory",
    rate: "3% flat rate",
    text: "The NT charges a simple flat rate of $3 per $100 of dutiable value on all motor vehicle transfers. The Territory Revenue Office administers the duty and offers an online calculator to confirm amounts for specific transactions.",
  },
];

export default function StampDutyCalculatorPage() {
  return (
    <div style={S.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />

      {/* Hero */}
      <div style={S.hero}>
        <div style={S.heroIn}>
          <div style={S.breadc}>
            <Link href="/" style={S.bLink}>Home</Link>
            <span>›</span>
            <span style={{ color: "rgba(0,0,0,0.5)" }}>Stamp Duty Calculator</span>
          </div>
          <div style={S.badge}>FREE TOOL</div>
          <h1 style={S.h1}>Stamp Duty Calculator</h1>
          <p style={S.sub}>
            Estimate vehicle stamp duty across all Australian states and territories.
            Rates update instantly as you type.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div style={S.calc}>
        <StampDutyCalculator />
      </div>

      {/* SEO content */}
      <div style={S.seo}>
        <hr style={S.divider} />

        <h2 style={S.h2}>About stamp duty on vehicles in Australia</h2>
        <p style={S.p}>
          Stamp duty on motor vehicles is a state and territory government charge applied whenever
          a vehicle is registered or transferred into a new owner's name. Every state sets its own
          rates and brackets, which means the duty on the same car can vary by thousands of dollars
          depending on where you register it. Understanding the amount before you sign is part of
          knowing your full drive-away cost.
        </p>
        <p style={S.p}>
          The duty is typically calculated on the dutiable value of the vehicle, which for new cars
          is the purchase price including GST. For used vehicles it may be the sale price or market
          value, whichever is higher. Some states offer reduced rates for electric vehicles or
          low-emission vehicles as part of broader EV transition incentives.
        </p>

        <hr style={S.divider} />

        <h2 style={S.h2}>Stamp duty rates by state</h2>
        <p style={{ ...S.p, marginBottom: "0" }}>
          An overview of how each state and territory calculates motor vehicle stamp duty. Rates
          shown are for passenger vehicles in the 2025 to 2026 financial year. Always verify the
          exact amount with your state revenue office before purchase.
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

        <h2 style={S.h2}>Stamp duty and vehicle choice</h2>
        <p style={S.p}>
          Demo cars and clearance vehicles can reduce your stamp duty exposure in two ways. First,
          the lower purchase price means a lower duty amount across all states. Second, in some
          states a vehicle that exceeds the luxury threshold when new may fall below it at its
          discounted demo price, eliminating a surcharge entirely. This is particularly relevant
          for Queensland where vehicles over $100,000 attract a higher rate on the full value.
        </p>
        <p style={S.p}>
          For buyers in Victoria, choosing a vehicle with combined emissions at or under 120g per
          km locks in the flat green rate of $8.40 per $200 regardless of purchase price. In the
          ACT, zero emission vehicles receive the lowest duty band across all price tiers.
        </p>

        <div style={S.relLinks}>
          <Link href="/blog/car-stamp-duty-australia-explained" style={S.relLink}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#7a8a00", letterSpacing: "0.08em", marginBottom: "4px" }}>BUYING GUIDE</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>
                What Is Stamp Duty on a Car in Australia
              </div>
            </div>
            <span style={{ color: "#CCDA47", fontSize: "18px", flexShrink: 0, marginLeft: "12px" }}>→</span>
          </Link>
          <Link href="/blog/buying-a-car-in-australia-guide" style={S.relLink}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#7a8a00", letterSpacing: "0.08em", marginBottom: "4px" }}>COMPLETE GUIDE</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>
                The Complete Guide to Buying a Car in Australia
              </div>
            </div>
            <span style={{ color: "#CCDA47", fontSize: "18px", flexShrink: 0, marginLeft: "12px" }}>→</span>
          </Link>
          <Link href="/blog/why-buy-demo-car-australia" style={S.relLink}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#7a8a00", letterSpacing: "0.08em", marginBottom: "4px" }}>BUYING GUIDE</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>
                Why Buying a Demo Car Can Lower Your Stamp Duty
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
