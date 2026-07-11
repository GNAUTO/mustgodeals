import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

const faqData = [
  {
    q: "Is a novated lease worth it on a $60,000 salary",
    a: "At $60,000 the marginal tax rate is 32.5% including Medicare Levy. The savings are real but smaller than at higher income levels. Whether it is worth it depends heavily on the vehicle price and whether you are buying an EV. Run a full quote before deciding.",
  },
  {
    q: "What happens to a novated lease if I change jobs",
    a: "The lease does not disappear. Your new employer may agree to take it on. If they do not, you make repayments from your after tax salary until you find an employer who will, or until you pay it out. Always factor job stability into the decision before signing.",
  },
  {
    q: "Does a novated lease save more money on an electric vehicle",
    a: "Yes, significantly. Eligible battery EVs and plug in hybrids under the LCT fuel efficient threshold are exempt from FBT under the Electric Car Discount. That eliminates the main cost that offsets the pre tax benefit on petrol and diesel vehicles. Verify current eligibility on ato.gov.au before purchasing.",
  },
  {
    q: "What is the balloon payment at the end of a novated lease",
    a: "The ATO sets minimum residual values. For a five year lease the minimum residual is 28.13% of the original purchase price. On a $45,000 car that is roughly $12,660. You can pay it out, refinance it, or use trade in value to cover it. It is deferred cost, not a gift.",
  },
  {
    q: "Can self employed people get a novated lease",
    a: "No. A novated lease requires an employer to make salary sacrifice deductions on your behalf. Sole traders, contractors, and company directors who do not receive PAYG salary cannot use this structure. ABN holders should look at chattel mortgage or commercial hire purchase instead.",
  },
  {
    q: "Are running costs like fuel and tyres included in a novated lease",
    a: "Yes, most novated leases are fully maintained packages that bundle fuel, registration, insurance, tyres, and servicing into the pre tax deduction. This means you pay for those costs before tax, which adds to the total saving beyond just the vehicle repayment.",
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

export default function NovatedLeaseWorthItAustraliaContent() {
  return (
    <>
      <p style={AS.p}>
        The honest answer is that a novated lease is worth it for some people and not for others.
        The problem is that the people selling them tend to show you the scenarios where it works
        best. This guide gives you the full picture so you can judge your own situation clearly.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>THE SHORT ANSWER</div>
        <p style={AS.calloutText}>
          Worth it if you earn $80,000 or more as a PAYG employee, drive regularly, and are buying
          an EV or PHEV. Probably not worth it if you earn under $60,000, drive very little, are
          self employed, or are likely to change jobs before the lease ends.
        </p>
      </div>

      <h2 style={AS.h2}>How your income level determines the saving</h2>

      <p style={AS.p}>
        A novated lease reduces your{" "}
        <span style={AS.highlight}>taxable income</span> by the value of your pre tax lease
        package. The actual dollar saving equals your marginal tax rate multiplied by the
        annual package cost.
      </p>

      <p style={AS.p}>
        At <span style={AS.highlight}>$75,000</span> your marginal rate is 32.5% (including the
        2% Medicare Levy). If your annual lease package is $14,000, you save approximately
        $4,550 per year in tax. Over a five year lease that is around $22,750.
      </p>

      <p style={AS.p}>
        At <span style={AS.highlight}>$110,000</span> the marginal rate jumps to 39%. The same
        $14,000 package saves approximately $5,460 per year, totalling $27,300 over five years.
        The car is identical. The saving is $4,550 larger simply because of the income bracket.
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>THE INCOME RULE OF THUMB</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>Under $45,000 — the saving is minimal, rarely worth the lease structure</li>
          <li style={AS.tipItem}>$45,000 to $80,000 — can work, especially for EVs, but run the numbers carefully</li>
          <li style={AS.tipItem}>$80,000 and above — typically strong case, especially with a fully maintained package</li>
          <li style={AS.tipItem}>$135,001 and above — 47% marginal rate makes the tax saving very significant</li>
        </ul>
      </div>

      <h2 style={AS.h2}>FBT and why most leases use the ECM method</h2>

      <p style={AS.p}>
        The tax benefit of salary sacrificing a car does not come for free. When your employer
        provides a car benefit, the ATO imposes{" "}
        <span style={AS.highlight}>Fringe Benefits Tax (FBT)</span>. Under the statutory formula,
        FBT is charged at 20% of the car&rsquo;s base value regardless of how much or how little
        you drive. That is a flat rate, not scaled by kilometres.
      </p>

      <p style={AS.p}>
        To neutralise this, most novated leases are structured using the{" "}
        <span style={AS.highlight}>Employee Contribution Method (ECM)</span>. Under ECM, you
        contribute a small portion of your after tax salary toward the vehicle costs. This
        reduces the FBT taxable value to zero. In practice it means a portion of your total
        repayment comes from post tax money, not pre tax. Your leasing company will model the
        split in the quote. Make sure you understand which part of your payment is pre tax and
        which part is post tax before signing.
      </p>

      <p style={AS.p}>
        A quote that does not mention FBT or ECM is incomplete. Ask directly how FBT is handled.
      </p>

      <h2 style={AS.h2}>Electric vehicles change the calculation entirely</h2>

      <p style={AS.p}>
        For eligible battery electric vehicles and plug in hybrid vehicles under the LCT
        fuel efficient threshold ($91,387 for 2025 to 2026), FBT is{" "}
        <span style={AS.highlight}>exempt entirely</span> under the Electric Car Discount. There
        is no FBT to offset with an ECM contribution. The entire lease package is pre tax.
      </p>

      <p style={AS.p}>
        This is why novated leasing has become the dominant way Australians acquire EVs through
        employers. The combination of pre tax repayments, pre tax running costs, and zero FBT
        exposure produces savings that are difficult to match through any other finance structure.
      </p>

      <p style={AS.p}>
        Policy conditions can change. Verify current eligibility at ato.gov.au before
        committing to a purchase.
      </p>

      <h2 style={AS.h2}>The balloon payment at the end of the lease</h2>

      <p style={AS.p}>
        At the end of a novated lease term you do not simply walk away with a paid off car.
        The ATO requires a minimum residual value to remain. For a five year lease, the minimum
        residual is <span style={AS.highlight}>28.13% of the original purchase price</span>. On
        a $45,000 vehicle that is approximately $12,660.
      </p>

      <p style={AS.p}>
        Your options at lease end are to pay it out in full, refinance it into a new lease, or
        sell or trade in the car and use the proceeds to cover it. If your car&rsquo;s market
        value has held up, a trade in typically handles the balloon comfortably. If the car
        depreciated faster than expected, you may need to top up the difference.
      </p>

      <p style={AS.p}>
        The balloon is not a hidden cost, but it is a deferred one. Factor it into your total
        cost calculation from the start.
      </p>

      <h2 style={AS.h2}>What happens if you change jobs</h2>

      <p style={AS.p}>
        A novated lease is portable, but not automatically. If you move to a new employer, that
        employer needs to agree to take on the salary sacrifice arrangement. Most corporate
        employers will, but smaller businesses or casual arrangements may not.
      </p>

      <p style={AS.p}>
        If no employer takes it on, you continue making repayments from your{" "}
        <span style={AS.highlight}>after tax salary</span> until you find one who will, or until
        the lease ends. The tax benefit disappears in that period. The lease is still valid, you
        just lose the pre tax advantage temporarily.
      </p>

      <p style={AS.p}>
        If you are in a role you are likely to leave within 12 to 24 months, think carefully
        before entering a three or five year lease.
      </p>

      <h2 style={AS.h2}>Who should and should not use a novated lease</h2>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>STRONG CASE FOR A NOVATED LEASE</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>Full time PAYG employee earning $80,000 or more</li>
          <li style={AS.tipItem}>Buying an eligible EV or plug in hybrid</li>
          <li style={AS.tipItem}>Planning to stay with the same employer for the lease term</li>
          <li style={AS.tipItem}>High annual kilometres (running costs on a fully maintained package add to savings)</li>
        </ul>
      </div>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>WEAK CASE FOR A NOVATED LEASE</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>Self employed, sole trader, or contractor without a PAYG employer</li>
          <li style={AS.tipItem}>Income under $60,000 (tax saving is limited)</li>
          <li style={AS.tipItem}>Likely to change jobs before the lease ends</li>
          <li style={AS.tipItem}>Planning to own the car for only one or two years</li>
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
        <Link href="/blog/novated-lease-vs-car-loan-australia" style={clusterCard}>
          <div style={clusterTitle}>Novated Lease vs Car Loan. Which Option Costs Less Over Five Years</div>
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
