import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

const faqData = [
  {
    q: "What is the real difference between a hybrid and a PHEV",
    a: "A hybrid cannot be plugged in. It charges its small battery through braking and the engine alone. A PHEV has a larger battery you charge from a power point and can travel 40 to 80 km on electricity before switching to petrol. If you charge regularly, a PHEV uses far less fuel day to day. If you cannot charge it, the extra battery weight makes it less efficient than a plain hybrid and you are essentially driving a heavy petrol car.",
  },
  {
    q: "Should I buy an electric car now or wait",
    a: "If you have home or workplace charging and your budget is under $91,387, buying now makes financial sense. The FBT exemption for eligible BEVs through a novated lease continues until at least 31 March 2027, making this a time-limited window on significant tax savings. If you live in an apartment with no charging access, or regularly need to drive more than 400 km in a single day, waiting for denser infrastructure or longer-range models is the more practical call.",
  },
  {
    q: "How is an EREV different from a PHEV",
    a: "In a PHEV, the combustion engine can drive the wheels directly when battery power runs out or at higher speeds. In an EREV, the engine never turns the wheels under any circumstances. It runs only as a generator producing electricity for the motors. The result is that an EREV always drives like a pure electric vehicle regardless of battery state, with consistent power delivery throughout. The trade-off is that EREVs are a newer and smaller category with very limited Australian resale history.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const clusterBox: React.CSSProperties = { margin: "2rem 0" };
const clusterHeading: React.CSSProperties = { fontSize: "11px", fontWeight: 700, color: "#888", letterSpacing: "0.09em", textTransform: "uppercase" as const, marginBottom: "10px" };
const clusterCard: React.CSSProperties = {
  display: "flex", alignItems: "center", justifyContent: "space-between",
  background: "white", border: "0.5px solid rgba(0,0,0,0.09)",
  borderLeft: "3px solid #CCDA47", borderRadius: "8px",
  padding: "0.875rem 1.25rem", textDecoration: "none",
  marginBottom: "8px", gap: "12px",
};
const clusterTitle: React.CSSProperties = { fontSize: "14px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3 };
const clusterArrow: React.CSSProperties = { fontSize: "16px", color: "#CCDA47", flexShrink: 0 };

const sectionTag: React.CSSProperties = {
  display: "inline-block", background: "#1A1A1A", color: "#CCDA47",
  fontSize: "10px", fontWeight: 700, letterSpacing: "0.8px",
  padding: "3px 8px", borderRadius: "4px", marginBottom: "0.75rem",
};

export default function FuelTypeGuideAustraliaContent() {
  return (
    <>
      <p style={AS.p}>
        The choice between seven different powertrain types comes down to fewer variables than most
        buyers expect. Your daily commute distance, whether you can charge at home or work, and how
        you use the car on weekends will narrow the field to one or two options before you even
        look at a brochure.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>THE SHORT ANSWER</div>
        <p style={AS.calloutText}>
          Most city commuters will find a hybrid or PHEV is the lowest friction default.
          If you can charge at home or at work, a battery electric vehicle produces the strongest
          long term financial case, particularly through a novated lease.
          For towing, heavy loads, or long regional distances, diesel is still the most capable choice.
        </p>
      </div>

      <p style={AS.p}>
        Stamp duty is calculated on the vehicle purchase price and varies by state. Before
        comparing total cost of ownership across fuel types, it is worth running the numbers
        on your specific purchase.{" "}
        <Link href="/tools/stamp-duty-calculator" style={{ color: "#8A9922", fontWeight: 600 }}>
          Our stamp duty calculator
        </Link>{" "}
        covers all Australian states and territories.
      </p>

      <hr style={AS.divider} />

      {/* ── PETROL ── */}
      <h2 style={AS.h2}>Petrol</h2>
      <div style={sectionTag}>HOW IT WORKS</div>
      <p style={AS.p}>
        A petrol engine burns unleaded fuel to turn the wheels directly. There is no additional
        battery or electric motor involved. Everything you spend on fuel goes toward moving the car.
      </p>
      <h3 style={AS.h3}>Strengths and weaknesses in Australia</h3>
      <p style={AS.p}>
        Petrol is still the default because it has the lowest upfront cost, the widest model
        selection, and the deepest used car market of any powertrain. When something breaks,
        any mechanic in any town can fix it. The weakness is the running cost. Fuel expenses
        per kilometre are the highest of any liquid-fuelled option, and petrol vehicles do not
        qualify for the FBT exemptions that benefit EV buyers. Resale pressure is also
        building gradually as hybrid and electric supply increases.
      </p>
      <h3 style={AS.h3}>Who it suits</h3>
      <p style={AS.p}>
        Buyers who need the lowest possible purchase price. People in regional areas where
        charging infrastructure is genuinely sparse and servicing options for newer technology
        are limited. Anyone who values maximum model choice at an accessible price point.
      </p>
      <h3 style={AS.h3}>Who should avoid it</h3>
      <p style={AS.p}>
        Anyone driving more than 20,000 km per year where fuel costs compound quickly.
        Employees whose employers offer novated lease benefits on electric vehicles,
        where a petrol car leaves significant tax savings on the table.
      </p>

      <hr style={AS.divider} />

      {/* ── DIESEL ── */}
      <h2 style={AS.h2}>Diesel</h2>
      <div style={sectionTag}>HOW IT WORKS</div>
      <p style={AS.p}>
        Diesel fuel ignites through compression rather than a spark plug. The process extracts
        more energy per litre than petrol, which translates to better efficiency at sustained
        load and lower fuel consumption on open highways.
      </p>
      <h3 style={AS.h3}>Strengths and weaknesses in Australia</h3>
      <p style={AS.p}>
        Diesel excels at exactly the things Australia demands more than most countries. Long
        distances between towns, regular towing of caravans or trailers, and high annual
        kilometre counts all favour diesel. The weakness that catches urban buyers out is the
        diesel particulate filter. This component captures soot from combustion and burns it
        off during extended highway driving. Short urban commutes give the filter no opportunity
        to regenerate properly, which leads to blockages that are expensive to clear.
        Servicing costs for diesel are also slightly higher than petrol. Global tightening
        of emission standards adds some long term resale uncertainty.
      </p>
      <h3 style={AS.h3}>Who it suits</h3>
      <p style={AS.p}>
        Drivers who tow boats, caravans, or trailers regularly. Anyone covering more than
        30,000 km per year, especially on highways. Regional and rural buyers who need
        the longest possible range between fill-ups and the best payload capacity.
      </p>
      <h3 style={AS.h3}>Who should avoid it</h3>
      <p style={AS.p}>
        City commuters whose daily driving is mostly short trips under 30 km round trip.
        Buyers in major urban centres who rarely venture onto open highways. The DPF risk
        alone makes diesel a poor fit for pure urban use.
      </p>

      <hr style={AS.divider} />

      {/* ── HYBRID ── */}
      <h2 style={AS.h2}>Hybrid (HEV)</h2>
      <div style={sectionTag}>HOW IT WORKS</div>
      <p style={AS.p}>
        A hybrid pairs a petrol engine with a small battery that charges itself through
        regenerative braking and the engine. You never plug it in. It operates exactly
        like a petrol car from the driver's perspective.
      </p>
      <h3 style={AS.h3}>Strengths and weaknesses in Australia</h3>
      <p style={AS.p}>
        Hybrid sales in Australia have grown sharply because the proposition is straightforward.
        You get meaningfully better fuel economy in urban driving with no change to how you
        refuel or where you can go. Regenerative braking also reduces brake pad wear, lowering
        servicing costs over time. The fuel saving is strongest in city traffic where braking
        is frequent. On open highways the battery contributes less and the efficiency advantage
        over a comparable petrol engine shrinks. Towing ratings are generally lower than diesel
        equivalents. The hybrid drivetrain is more complex than a pure petrol unit, though
        reliability has been strong across the major brands.
      </p>
      <h3 style={AS.h3}>Who it suits</h3>
      <p style={AS.p}>
        City and suburban commuters who cannot or do not want to plug in. Apartment dwellers
        with no charging access who still want lower fuel costs. Buyers who want a proven,
        low-maintenance alternative to pure petrol without any infrastructure dependency.
      </p>
      <h3 style={AS.h3}>Who should avoid it</h3>
      <p style={AS.p}>
        Anyone who needs significant towing capacity. Buyers who drive primarily on open
        highways where the efficiency advantage is modest and a diesel or petrol may offer
        similar real-world economy.
      </p>

      <hr style={AS.divider} />

      {/* ── PHEV ── */}
      <h2 style={AS.h2}>Plug-in Hybrid (PHEV)</h2>
      <div style={sectionTag}>HOW IT WORKS</div>
      <p style={AS.p}>
        A PHEV is a hybrid with a much larger battery that you charge from a power point.
        It covers 40 to 80 km on electricity alone before the petrol engine takes over,
        meaning most daily commutes run on electricity while long trips use petrol as a fallback.
      </p>
      <h3 style={AS.h3}>Strengths and weaknesses in Australia</h3>
      <p style={AS.p}>
        The average Australian commutes well under 50 km per day. A driver who charges overnight
        can run most daily trips without touching petrol at all, while retaining complete freedom
        for weekend travel or regional drives with no range concern. That is a genuinely appealing
        combination. The weakness is the dependency on charging access. Without regular charging,
        a PHEV is carrying a heavy battery it is not using, which makes it less efficient than
        a plain hybrid. The FBT exemption for PHEVs ended on 1 April 2025. New PHEV novated
        leases now attract full FBT the same as petrol vehicles. Binding leases entered before
        that date retain the benefit until lease expiry, subject to no material changes to the
        lease terms.
      </p>
      <h3 style={AS.h3}>Who it suits</h3>
      <p style={AS.p}>
        Drivers with reliable home or workplace charging whose daily commute is under 60 km.
        Anyone who wants minimal petrol consumption day to day but is not ready to commit
        to a pure electric vehicle. Those with existing binding novated lease agreements
        from before April 2025 who retained the FBT benefit.
      </p>
      <h3 style={AS.h3}>Who should avoid it</h3>
      <p style={AS.p}>
        Apartment residents with no charging access. Buyers who intend to use a novated lease
        and were counting on FBT savings that no longer apply. Anyone whose driving is
        predominantly long regional distances where the electric range depletes quickly
        and the vehicle's weight works against efficiency.
      </p>

      <hr style={AS.divider} />

      {/* ── EREV ── */}
      <h2 style={AS.h2}>EREV (Extended Range Electric Vehicle)</h2>
      <div style={sectionTag}>HOW IT WORKS</div>
      <p style={AS.p}>
        An EREV is a battery electric vehicle with a small petrol engine onboard that acts
        solely as a generator. The engine never drives the wheels under any circumstances.
        It produces electricity to extend the battery range when needed.
      </p>
      <h3 style={AS.h3}>Strengths and weaknesses in Australia</h3>
      <p style={AS.p}>
        An EREV always drives like a pure electric vehicle. The power delivery is smooth
        and consistent whether the battery is full or depleted, because the motor is always
        in control. For drivers who want EV driving characteristics but are uncomfortable
        with current public charging infrastructure, the generator removes the range concern
        without the compromises of a conventional hybrid drivetrain. The category has arrived
        in Australia in mid 2026 with a very small number of available models. Resale data
        is essentially non-existent, which makes depreciation risk genuinely hard to assess.
        The choice will expand over the next 12 to 18 months as more manufacturers bring
        EREV variants to market, but early buyers are working with limited benchmarks.
      </p>
      <h3 style={AS.h3}>Who it suits</h3>
      <p style={AS.p}>
        EV converts who regularly drive distances beyond current BEV comfortable range and
        want electric driveability without range compromise. Early adopters who understand
        and accept the resale uncertainty of a new category. Buyers who plan to hold the
        vehicle for several years rather than trading within two to three.
      </p>
      <h3 style={AS.h3}>Who should avoid it</h3>
      <p style={AS.p}>
        Buyers who want predictable resale values backed by established market data.
        Anyone who needs a vehicle available for prompt delivery from a wide dealer network.
        The limited model availability means compromising on specification or waiting for
        stock that may not arrive on a clear timeline.
      </p>
      <p style={AS.p}>
        Because EREV resale data is thin, buying a lightly used demonstrator carries more
        uncertainty than with established categories. Understanding exactly when the
        manufacturer warranty clock started matters more here than with a mainstream petrol
        or hybrid.{" "}
        <Link href="/blog/demo-car-warranty-start-australia" style={{ color: "#8A9922", fontWeight: 600 }}>
          Our demo car warranty guide
        </Link>{" "}
        explains what to check and confirm before signing.
      </p>

      <hr style={AS.divider} />

      {/* ── BEV ── */}
      <h2 style={AS.h2}>Battery Electric (BEV)</h2>
      <div style={sectionTag}>HOW IT WORKS</div>
      <p style={AS.p}>
        A BEV runs entirely on a battery pack recharged from a power point or public fast
        charger. There is no combustion engine, no fuel tank, and no exhaust system.
      </p>
      <h3 style={AS.h3}>Strengths and weaknesses in Australia</h3>
      <p style={AS.p}>
        The running cost case for a BEV is the strongest of any powertrain. Electricity
        costs per kilometre are a fraction of petrol at current rates. Scheduled servicing
        is minimal because there is no engine oil, no spark plugs, and regenerative braking
        significantly reduces brake wear. For PAYG employees, eligible BEVs under the
        LCT fuel-efficient threshold ($91,387 for 2025 to 2026) remain exempt from Fringe
        Benefits Tax through a novated lease until at least 31 March 2027. That FBT exemption,
        combined with pre-tax repayments and pre-tax running costs, produces the largest
        tax-advantaged car ownership saving available to Australian employees. The constraint
        is home charging. Without a reliable overnight charge point, public charging costs
        erode the fuel saving and add inconvenience. Range is also a practical limit for
        drives exceeding 400 km without a planned fast charge stop, though fast charger
        coverage is improving on major routes.
      </p>
      <h3 style={AS.h3}>Who it suits</h3>
      <p style={AS.p}>
        Drivers with home or reliable workplace charging whose daily distances sit well within
        the vehicle's range. PAYG employees with access to a salary sacrifice arrangement
        where the novated lease FBT exemption delivers maximum value. City-based buyers
        with predictable routines and access to overnight charging.
      </p>
      <h3 style={AS.h3}>Who should avoid it</h3>
      <p style={AS.p}>
        Apartment residents with no home charging and no employer charging access.
        Buyers who regularly tow, as most BEVs are not rated for significant towing
        and range reduces sharply under load. Anyone whose daily driving regularly
        exceeds 400 km in a single stretch without a planned charge stop.
      </p>
      <p style={AS.p}>
        For a detailed breakdown of how much a novated lease actually saves on an eligible
        electric vehicle at different income levels,{" "}
        <Link href="/blog/novated-lease-worth-it-australia" style={{ color: "#8A9922", fontWeight: 600 }}>
          see our novated lease guide
        </Link>
        .
      </p>

      <hr style={AS.divider} />

      {/* ── HYDROGEN ── */}
      <h2 style={AS.h2}>Hydrogen (FCEV)</h2>
      <div style={sectionTag}>HOW IT WORKS</div>
      <p style={AS.p}>
        A hydrogen fuel cell vehicle uses a chemical reaction between hydrogen and oxygen
        to produce electricity that powers the motor. The only byproduct is water vapour.
        Refuelling takes roughly the same time as a petrol fill.
      </p>
      <h3 style={AS.h3}>The honest position in Australia right now</h3>
      <p style={AS.p}>
        Hydrogen is not a practical choice for private buyers in Australia at this point.
        Refuelling stations exist in a handful of locations concentrated around specific
        fleet corridors. For the vast majority of Australians, there is no accessible place
        to refuel a hydrogen vehicle near where they live or work. Purchase prices are high
        and model availability is extremely limited. Infrastructure investment may change
        this picture over the coming decade, but the general consumer market is not
        the target audience for hydrogen today.
      </p>
      <h3 style={AS.h3}>Who it suits</h3>
      <p style={AS.p}>
        Commercial fleet operators who operate within defined corridors where hydrogen
        infrastructure has been established. Buyers who have direct access to a hydrogen
        refuelling facility as part of their fleet arrangement.
      </p>
      <h3 style={AS.h3}>Who should avoid it</h3>
      <p style={AS.p}>
        Any private buyer without a guaranteed fuelling solution. Hydrogen should not
        be on the shortlist for general consumer use in Australia in 2026.
      </p>

      <hr style={AS.divider} />

      {/* ── SUMMARY TABLE ── */}
      <h2 style={AS.h2}>Which fuel type for which life</h2>

      <div style={{ overflowX: "auto" }}>
        <table style={{ ...AS.table, minWidth: "540px" }}>
          <thead>
            <tr>
              <th style={AS.th}>Your situation</th>
              <th style={AS.th}>First choice</th>
              <th style={AS.th}>Second choice</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={AS.td}>City commute under 40 km daily, home charging available</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>BEV</td>
              <td style={AS.td}>PHEV</td>
            </tr>
            <tr>
              <td style={AS.td}>City commute, no charging access at home or work</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>Hybrid</td>
              <td style={AS.td}>Petrol</td>
            </tr>
            <tr>
              <td style={AS.td}>Long highway commute over 80 km each way daily</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>Diesel</td>
              <td style={AS.td}>Hybrid</td>
            </tr>
            <tr>
              <td style={AS.td}>Weekend road trips with city use during the week</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>PHEV</td>
              <td style={AS.td}>Hybrid</td>
            </tr>
            <tr>
              <td style={AS.td}>Regular towing or heavy loads</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>Diesel</td>
              <td style={AS.td}>Petrol</td>
            </tr>
            <tr>
              <td style={AS.td}>Apartment resident, no charging possible</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>Hybrid</td>
              <td style={AS.td}>Petrol</td>
            </tr>
            <tr>
              <td style={AS.td}>PAYG employee using a novated lease</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>BEV</td>
              <td style={AS.td}>EREV</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={AS.divider} />

      <h2 style={AS.h2}>Frequently Asked Questions</h2>

      {faqData.map(({ q, a }, i) => (
        <div key={i} style={{ marginBottom: "1.5rem" }}>
          <h3 style={AS.h3}>{q}</h3>
          <p style={AS.p}>{a}</p>
        </div>
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={AS.disclaimer}>
        <p style={AS.disclaimerText}>
          This article is general information only and does not constitute financial or tax advice.
          FBT thresholds, LCT rates, and exemption conditions are subject to change. Verify current
          figures at ato.gov.au before making purchasing or salary sacrifice decisions.
          Consult a registered tax agent for advice specific to your circumstances.
        </p>
      </div>

      <div style={clusterBox}>
        <div style={clusterHeading}>Related Guides</div>
        <Link href="/blog/novated-lease-worth-it-australia" style={clusterCard}>
          <div style={clusterTitle}>Is a Novated Lease Worth It in Australia</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/demo-car-warranty-start-australia" style={clusterCard}>
          <div style={clusterTitle}>When Does a Demo Car Warranty Actually Start in Australia</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/tools/stamp-duty-calculator" style={clusterCard}>
          <div style={clusterTitle}>Calculate Stamp Duty on Your Next Car</div>
          <div style={clusterArrow}>→</div>
        </Link>
      </div>

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>See what clearance deals are available now</div>
        <p style={AS.ctaDesc}>End of month stock dealers need to move, updated every week</p>
        <Link href="/coming-soon" style={AS.ctaBtn}>Get free alerts →</Link>
      </div>
    </>
  );
}
