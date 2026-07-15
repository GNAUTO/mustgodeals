import Link from 'next/link';
import SuitAvoid from '../../../components/posts/SuitAvoid';
import { AS } from '../../../components/posts/article-styles';

const faqData = [
  {
    q: "How do I verify whether a novated lease quote is genuinely competitive",
    a: "Get a separate driveaway price directly from a dealer for the same make, model, and variant. Ask the lease provider for an itemised breakdown showing the finance cost, management fee, insurance premium, and running cost allowance as separate figures. Then add up every payment over the full term including the residual, and compare that total against a car loan for the same purchase price.",
  },
  {
    q: "Is a novated lease always cheaper than a car loan",
    a: "Not always. The pre tax salary benefit is real, but a lease typically carries a management fee, bundled insurance, and potentially a higher vehicle price than you would negotiate independently. At higher income levels the tax advantage usually outweighs these costs. At lower income levels the gap narrows or reverses. Compare total cost over the full term including the residual, not just the monthly repayment figure.",
  },
  {
    q: "What happens to a novated lease if I change employers",
    a: "The pre tax benefit stops unless your new employer agrees to continue the salary packaging arrangement. Until that is confirmed, repayments come from after tax salary. The lease obligation continues regardless of your employment situation. Some providers assist with transferring the arrangement, but the new employer must agree to participate. If changing roles is a realistic possibility within the lease term, factor it into the decision before signing.",
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

export default function NovatedLeaseQuoteFinePrintAustraliaContent() {
  return (
    <>
      <div style={AS.callout}>
        <div style={AS.calloutTitle}>WHAT THIS GUIDE COVERS</div>
        <p style={AS.calloutText}>
          The vehicle price in a quote may not match what you could negotiate directly with a dealer.
          The monthly payment bundles several costs that are difficult to compare individually.
          The saving shown is almost always calculated against doing nothing, not against a car loan or cash purchase.
        </p>
      </div>

      <p style={AS.p}>
        A novated lease quote is designed to look good. That is its job, not yours. The people
        who produce them work for leasing companies, and a quote that shows a large tax saving
        converts. This is not deception. It is framing. The frame matters when you are committing
        to three to five years of payments.
      </p>

      <p style={AS.p}>
        Most guides available online are written by lease providers. They explain the mechanics
        accurately and leave the inconvenient details for you to discover later. This guide
        starts where the quote stops.
      </p>

      <h2 style={AS.h2}>The comparison in the quote is not your comparison</h2>

      <p style={AS.p}>
        The saving shown in a novated lease quote is almost always calculated by comparing the
        lease against buying nothing at all. Your take home pay without a car versus your take
        home pay with one funded through pre tax salary. The gap looks significant because the
        alternative used is zero.
      </p>

      <p style={AS.p}>
        Almost nobody is deciding between a novated lease and having no car. Most people are
        choosing between a novated lease and buying the same vehicle with a car loan, or from
        savings. When you run that comparison instead, the gap narrows. The pre tax advantage
        is real, but a lease typically carries interest, a management fee, and bundled service
        costs that a straightforward loan does not.{" "}
        <Link href="/blog/novated-lease-vs-car-loan-australia">
          A full breakdown of novated lease versus car loan total costs
        </Link>{" "}
        shows what the numbers look like across a five year term.
      </p>

      <p style={AS.p}>
        Before reading a quote as a saving, identify what you would actually do instead.
        That is the only comparison that should drive the decision.
      </p>

      <h2 style={AS.h2}>The vehicle price inside the quote may not be your price</h2>

      <p style={AS.p}>
        The vehicle price used in a novated lease quote is negotiated between the leasing
        company and their dealer contacts. Fleet pricing is sometimes below what a retail
        buyer would pay walking into the same dealership. It is not always. You have no way
        to know which applies to your quote without checking independently.
      </p>

      <p style={AS.p}>
        Before accepting the quote as a starting point, request a{" "}
        <span style={AS.highlight}>driveaway price</span> directly from a dealer for the exact
        same make, model, and variant. If the fleet price in the quote is lower, that is a
        real advantage. If it is higher, you are paying a premium on the car before the finance
        structure even enters the picture.
      </p>

      <p style={AS.p}>
        A $2,000 higher purchase price inside a five year lease ripples through every
        calculation downstream including the residual value, the repayment size, and the
        tax saving the quote is displaying. It is worth the time to verify.
      </p>

      <h2 style={AS.h2}>The monthly payment bundles several things at once</h2>

      <p style={AS.p}>
        A fully maintained novated lease payment combines vehicle finance, a management fee,
        insurance, registration, fuel or charging costs, tyres, and servicing into a single
        number. That simplicity is the product's main appeal. One pre tax line item on your
        pay slip covers everything.
      </p>

      <p style={AS.p}>
        The same bundling is where comparison becomes difficult. When you see a monthly
        repayment figure, it is not easy to tell whether the insurance premium inside it is
        competitive, whether the fuel allowance matches your actual driving pattern, or what
        the management fee is relative to other providers in the market.
      </p>

      <p style={AS.p}>
        Ask for an itemised breakdown before signing. Specifically request the vehicle finance
        cost, the management fee as a dollar amount per month, the insurance premium, and the
        assumed annual running cost allowance. Each of those can be priced against the market
        separately. A provider that declines to itemise is asking you to sign without knowing
        what you are paying for each component.
      </p>

      <h2 style={AS.h2}>The effective interest rate is not straightforward to compare</h2>

      <p style={AS.p}>
        Novated leases do not use a standardised annual percentage rate the way a car loan
        does. The financing cost is often expressed as a money factor or a flat rate, and
        calculation methods vary between providers. Comparing rates between quotes, or between
        a lease and a loan, requires converting these figures to a consistent basis.
      </p>

      <p style={AS.p}>
        The practical test is total payments over the full term, not the rate label. Add every
        dollar that leaves your salary over the lease period across both the pre tax and post
        tax portions, then add the residual value payment at the end. That total is your cost.
        Compare it against the full repayment on a car loan for the same amount over the same
        period and you have a fair picture.
      </p>

      <h2 style={AS.h2}>The residual value is a lump sum that needs planning</h2>

      <p style={AS.p}>
        At the end of a novated lease, a{" "}
        <span style={AS.highlight}>residual payment</span> is due. This amount is set by the
        ATO based on the vehicle's standard effective life, not on what the car is actually
        worth in the used market at that point. For a five year lease the ATO minimum residual
        is <span style={AS.highlight}>28.13%</span> of the original purchase price. On a
        $55,000 vehicle that is approximately $15,470.
      </p>

      <p style={AS.p}>
        The residual appears in the quote, usually near the end of the document. What is not
        always emphasised is that this amount must be funded separately when the lease ends.
        You can pay it from savings, refinance it into a new lease, or use trade in value if
        the car is worth more than the ATO figure. If the market value at the end of the term
        is below the residual, you are in a shortfall position.
      </p>

      <p style={AS.p}>
        Factor this lump sum into your planning from the beginning. It is deferred cost,
        not a deferred saving.
      </p>

      <h2 style={AS.h2}>Changing employers changes the arrangement</h2>

      <p style={AS.p}>
        The pre tax benefit of a novated lease exists because your employer makes salary
        packaging deductions on your behalf. If you leave that employer, the arrangement
        does not follow you automatically.
      </p>

      <p style={AS.p}>
        Your new employer must agree to participate in salary packaging for the pre tax
        benefit to continue. Some employers do, particularly larger organisations. Many
        smaller ones do not. Until a new arrangement is confirmed, repayments come from
        after tax salary. The lease obligation continues regardless of your employment
        situation.
      </p>

      <p style={AS.p}>
        If there is a realistic chance you will change roles within the lease term, that
        probability needs to be part of the decision.{" "}
        <Link href="/blog/novated-lease-worth-it-australia">
          Whether a novated lease is worth it in the first place
        </Link>{" "}
        depends significantly on how stable your employment is likely to be across the
        full term.
      </p>

      <h2 style={AS.h2}>The reportable fringe benefit that affects more than tax</h2>

      <p style={AS.p}>
        A novated lease is classified as a fringe benefit. Even when FBT is not payable,
        as is the case for eligible battery electric vehicles under the luxury car tax
        threshold ($91,387 for 2025 to 2026), the value of the benefit still appears on
        your income statement as a{" "}
        <span style={AS.highlight}>reportable fringe benefit amount</span>.
      </p>

      <p style={AS.p}>
        The ATO uses a broader definition of income when calculating compulsory HECS and
        HELP debt repayments. Reportable fringe benefits are added back into this figure.
        For 2025 to 2026, the compulsory repayment threshold is $67,000. A novated lease
        can push your repayment income above that threshold even if your taxable salary
        sits below it. The same reportable amount can also affect eligibility for some
        family payments and the Medicare Levy Surcharge assessment.
      </p>

      <p style={AS.p}>
        The specific impact depends on your income and personal circumstances. If you carry
        student debt or receive income tested payments, confirm the effect with a registered
        tax agent before signing. The vehicle you choose also shapes this outcome.{" "}
        <Link href="/blog/fuel-type-guide-australia">
          How different fuel types compare across real Australian ownership scenarios
        </Link>{" "}
        is worth reading before the vehicle decision is made.
      </p>

      <SuitAvoid
        suits="Higher income PAYG employees who drive regularly and expect to stay with their employer for the full lease term. The case is strongest for eligible battery EVs under the luxury car tax threshold, where FBT does not apply and the entire package runs pre tax."
        avoid="Lower income earners where the tax saving is limited, employees with a realistic chance of changing employers within the term, and anyone who cannot fund the residual at maturity. Worth reconsidering if the bundled vehicle price is higher than a direct dealer quote."
        lang="EN"
      />

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
          Individual outcomes depend on income, lease structure, employer participation, and personal
          circumstances. Consult a registered tax agent or financial adviser before making decisions
          based on this content.
        </p>
      </div>

      <div style={clusterBox}>
        <div style={clusterHeading}>Related Guides</div>
        <Link href="/blog/novated-lease-vs-car-loan-australia" style={clusterCard}>
          <div style={clusterTitle}>Novated Lease vs Car Loan. Which Option Costs Less Over Five Years</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/novated-lease-worth-it-australia" style={clusterCard}>
          <div style={clusterTitle}>Is a Novated Lease Worth It in Australia</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/novated-lease-australia" style={clusterCard}>
          <div style={clusterTitle}>How a Novated Lease Works. The Complete Structure Explained</div>
          <div style={clusterArrow}>→</div>
        </Link>
      </div>

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>See what clearance deals are available now</div>
        <p style={AS.ctaDesc}>End of month stock dealers need to move, updated every week</p>
        <Link href="/listings" style={AS.ctaBtn}>Browse demo car deals →</Link>
      </div>
    </>
  );
}
