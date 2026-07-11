import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

const faqData = [
  {
    q: "Can I use a novated lease on a demo or used car",
    a: "Yes. Novated leases apply to new, demo, and most used vehicles. The leasing company purchases the car on your behalf regardless of whether it is new or pre-owned. Residual values and FBT calculations are based on the purchase price paid, so a lower priced clearance vehicle results in smaller repayments and a smaller balloon payment.",
  },
  {
    q: "Does stamp duty still apply when I buy through a novated lease",
    a: "Yes. Stamp duty is a state government charge on the vehicle purchase and applies regardless of how you finance the car. It is typically capitalised into the total lease amount. Use the stamp duty calculator to estimate your state-specific cost before finalising a budget.",
  },
  {
    q: "Is the interest rate on a novated lease higher than a car loan",
    a: "Often yes. Novated lease interest rates are frequently higher than a standard secured car loan. However the pre tax treatment of repayments can still make the total out of pocket cost lower for employees on higher marginal tax rates. Compare total after tax cost across both options, not just the headline rate.",
  },
  {
    q: "What happens to the management fees if I pay out the lease early",
    a: "Early termination fees vary by provider. Some lease contracts include break costs that can be significant. Review the early exit clauses before signing, particularly if you think you may change jobs, change vehicles, or pay it out ahead of schedule.",
  },
  {
    q: "Can I negotiate the residual value on a novated lease",
    a: "No. The ATO sets minimum residual values that leasing companies must apply. For a five year term the minimum is 28.13% of the original cost price. Providers cannot set a lower residual than this. You can set a higher residual, but that increases the balloon payment.",
  },
  {
    q: "Which is better for buying an EV, a novated lease or a car loan",
    a: "For full time PAYG employees, a novated lease is almost always better for eligible EVs due to the FBT exemption under the Electric Car Discount. The exemption means the entire lease package including running costs is pre tax. A car loan offers none of that. Verify current eligibility at ato.gov.au.",
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

export default function NovatedLeaseVsCarLoanAustraliaContent() {
  return (
    <>
      <p style={AS.p}>
        Both options get you the same car. The difference is how much you actually pay to have
        it, and over what period. A car loan is straightforward. A novated lease is more
        complex, and whether that complexity pays off depends on your income, your employment
        situation, and the vehicle you are choosing.
      </p>

      <h2 style={AS.h2}>The structural difference between the two</h2>

      <p style={AS.p}>
        A <span style={AS.highlight}>car loan</span> is simple: you borrow money, buy the car,
        and repay the loan with after tax income. The interest is the only additional cost beyond
        the purchase price, and you own the car outright at the end.
      </p>

      <p style={AS.p}>
        A <span style={AS.highlight}>novated lease</span> is salary packaging. Your employer
        makes payments to the leasing company and deducts the cost from your gross salary before
        income tax is calculated. You effectively pay for the car with pre tax dollars. At the
        end of the term you face a residual payment, not outright ownership.
      </p>

      <p style={AS.p}>
        The tax saving is real, but it comes with additional complexity: management fees, FBT
        handling via ECM contributions, a balloon payment at the end, and a structure that is
        tied to your employment.
      </p>

      <h2 style={AS.h2}>Side by side cost comparison</h2>

      <p style={AS.p}>
        The following table compares a $45,000 vehicle financed over five years for a PAYG
        employee earning $90,000 per year. All figures are approximate and intended to illustrate
        the structural difference, not provide a precise quote.
      </p>

      <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
        <table style={AS.table}>
          <thead>
            <tr>
              <th style={AS.th}> </th>
              <th style={AS.th}>Car Loan</th>
              <th style={AS.th}>Novated Lease</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={AS.td}>Vehicle price</td>
              <td style={AS.tdRight}>$45,000</td>
              <td style={AS.tdRight}>$45,000</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>Finance term</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>5 years</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>5 years</td>
            </tr>
            <tr>
              <td style={AS.td}>Tax treatment</td>
              <td style={AS.tdRight}>After tax</td>
              <td style={AS.tdRight}>Pre tax (salary sacrifice)</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>Marginal tax saving</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>None</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>Approx $19,000 to $23,000</td>
            </tr>
            <tr>
              <td style={AS.td}>Management fees (5 yr)</td>
              <td style={AS.tdRight}>None</td>
              <td style={AS.tdRight}>Approx $900 to $1,500</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>Balloon payment at end</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>None (car paid off)</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>Approx $12,660 (28.13%)</td>
            </tr>
            <tr>
              <td style={AS.td}>Car ownership at end of term</td>
              <td style={AS.tdRight}>Full ownership</td>
              <td style={AS.tdRight}>After residual payment</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={AS.p}>
        The tax saving on the novated lease is the dominant figure. Even after accounting for
        management fees and the balloon payment, most employees on $80,000 and above come out
        meaningfully ahead compared to a car loan. The gap widens for higher earners and narrows
        for lower earners.
      </p>

      <h2 style={AS.h2}>What the novated lease quote often does not show clearly</h2>

      <p style={AS.p}>
        Novated lease quotes are designed to look attractive. Here are the items that are
        sometimes buried or understated.
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>COSTS THAT ARE EASY TO OVERLOOK</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>Management fees charged by the leasing company, typically $15 to $25 per month or $900 to $1,500 over five years</li>
          <li style={AS.tipItem}>The balloon payment of 28.13% of purchase price at lease end (approx $12,660 on a $45,000 car)</li>
          <li style={AS.tipItem}>The ECM post tax contribution, which is part of your total payment but not pre tax</li>
          <li style={AS.tipItem}>Early exit fees if you terminate the lease, change jobs, or pay it out ahead of schedule</li>
        </ul>
      </div>

      <p style={AS.p}>
        None of these make the novated lease a bad deal. They just need to be in your
        calculation from the start.
      </p>

      <h2 style={AS.h2}>Demo and clearance cars through a novated lease</h2>

      <p style={AS.p}>
        This is the combination most buyers do not know about. Novated leases work on{" "}
        <span style={AS.highlight}>demo, clearance, and most used vehicles</span>, not just new
        cars. The leasing company purchases the vehicle on your behalf regardless of whether
        it is brand new or a registered demo with 3,000 kilometres on the clock.
      </p>

      <p style={AS.p}>
        The financial benefit of this is direct. The entire novated lease structure, including
        the pre tax repayments, fully maintained running costs, and FBT handling, applies
        identically to a clearance vehicle. But because the purchase price is lower, everything
        that flows from it is smaller too.
      </p>

      <p style={AS.p}>
        Consider a $55,000 new SUV versus a $45,000 demo version of the same model. Through a
        novated lease on the clearance vehicle: the monthly repayments are lower, the balloon
        payment is lower (28.13% of $45,000 versus $55,000), and the FBT taxable base value
        used in the ECM calculation is lower. The tax saving is proportionally similar, but
        applied to a cheaper car. Both savings stack.
      </p>

      <p style={AS.p}>
        Check with your leasing provider to confirm vehicle eligibility. Most do qualify, but
        some providers have restrictions on vehicle age or registration status.
      </p>

      <h2 style={AS.h2}>Stamp duty applies either way</h2>

      <p style={AS.p}>
        One cost that does not go away under a novated lease is{" "}
        <span style={AS.highlight}>stamp duty</span>. This is a state government charge applied
        to the vehicle purchase price and is payable regardless of how you finance the car.
        In a novated lease it is typically capitalised into the total leased amount. On a
        $45,000 car in NSW, stamp duty adds approximately $1,350. Use the{" "}
        <Link href="/tools/stamp-duty-calculator" style={{ color: "#8A9A10", fontWeight: 600, textDecoration: "none" }}>
          stamp duty calculator
        </Link>{" "}
        to estimate your state specific cost before building your budget.
      </p>

      <h2 style={AS.h2}>When a car loan is the better choice</h2>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>SITUATIONS WHERE A CAR LOAN WINS</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>Self employed, ABN holder, or contractor without a PAYG employer</li>
          <li style={AS.tipItem}>Income under $60,000 where the tax saving is limited</li>
          <li style={AS.tipItem}>Planning to change jobs within 12 to 24 months</li>
          <li style={AS.tipItem}>Buying a vehicle for fewer than two to three years</li>
          <li style={AS.tipItem}>Prefer simplicity and full ownership at the end of the term</li>
        </ul>
      </div>

      <h2 style={AS.h2}>When a novated lease is the better choice</h2>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>SITUATIONS WHERE A NOVATED LEASE WINS</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>Full time PAYG employee earning $80,000 or more</li>
          <li style={AS.tipItem}>Buying an eligible EV or plug in hybrid (FBT exempt)</li>
          <li style={AS.tipItem}>Planning to stay with the same employer for three to five years</li>
          <li style={AS.tipItem}>Buying a demo or clearance vehicle at a reduced purchase price</li>
          <li style={AS.tipItem}>High annual kilometres with a fully maintained package</li>
        </ul>
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
          Individual outcomes vary depending on income, lease structure, and personal circumstances.
          Consult a registered tax agent or financial adviser before making decisions based on this content.
        </p>
      </div>

      <div style={clusterBox}>
        <div style={clusterHeading}>Related Guides</div>
        <Link href="/blog/novated-lease-australia" style={clusterCard}>
          <div style={clusterTitle}>What Is a Novated Lease and Is It Worth It in Australia</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/novated-lease-worth-it-australia" style={clusterCard}>
          <div style={clusterTitle}>Is a Novated Lease Worth It in Australia</div>
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
