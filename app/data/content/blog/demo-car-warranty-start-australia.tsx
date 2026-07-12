import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Does a demo car warranty transfer to the new owner?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The manufacturer warranty follows the vehicle, not the original registrant. When you buy a demo, you receive whatever remains of the warranty coverage as calculated from the original registration date. The transfer is automatic in most cases, but confirm with the brand that no additional steps are required to register yourself as the current owner for warranty purposes."
      }
    },
    {
      "@type": "Question",
      "name": "Do any brands offer warranty resets for demo purchases in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A small number of brands and certified pre-owned programs do offer warranty extensions or resets for demonstrator purchases. These are not industry standard. You need to ask the specific dealer and confirm the offer directly with the brand before relying on it. Do not assume the program exists based on what applied to a different make."
      }
    },
    {
      "@type": "Question",
      "name": "How do you confirm a demo car has never been registered?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ask the dealer for an NEVDIS (National Exchange of Vehicle and Driver Information System) report for the vehicle. This is the authoritative record of Australian registration history. If the report shows no prior registration, the car has never been registered in any state or territory. Ask the dealer to confirm this in writing on the contract. Verbal assurances alone are not sufficient."
      }
    }
  ]
};

export default function DemoCarWarrantyStartAustraliaContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Summary box */}
      <div style={AS.callout}>
        <div style={AS.calloutTitle}>THE SHORT ANSWER</div>
        <p style={AS.calloutText}>
          Manufacturer warranties begin on the date a vehicle is first registered, not the date you buy it.
          A demo registered six months ago means six months of coverage already gone.
          Western Australia is an exception where the time component typically resets at purchase.
        </p>
      </div>

      <p style={AS.p}>
        That six month old demo just cost you six months of warranty. Most buyers never notice.
      </p>

      <p style={AS.p}>
        The price on a demo car accounts for kilometres and age. The warranty position rarely gets the same
        attention. Yet it is one of the most consequential numbers in the deal. Understanding exactly when
        the clock starts changes what the vehicle is actually worth.
      </p>

      <p style={AS.p}>
        Across Australia, manufacturer warranties are tied to registration dates, not to purchase dates.
        Once a car is registered in any name, the warranty period begins. For demo buyers, that means
        coverage has been running since the day the dealership put the vehicle on its books.
      </p>

      <h2 style={AS.h2}>The Registration Date Is What Counts</h2>

      <p style={AS.p}>
        When a dealership registers a car as a demonstrator, the manufacturer warranty starts on that date.
        By the time you sign a contract to buy it, that coverage has already been reducing. A demo that
        has been registered for eight months comes with eight fewer months of remaining warranty than a
        brand new vehicle of the same model.
      </p>

      <p style={AS.p}>
        The kilometre limit also reduces. If the warranty covers five years or 100,000 km, and the demo
        has covered 6,000 km in eight months, you are starting with 94,000 km and roughly four years
        and four months of coverage remaining. Both figures matter and both are worth requesting in
        writing before you commit.
      </p>

      <p style={AS.p}>
        This is standard practice across most major brands operating in Australia. It is not buried
        in fine print. Ask the dealer for the first registration date and do the arithmetic yourself.
      </p>

      <h2 style={AS.h2}>Western Australia Works Differently</h2>

      <p style={AS.p}>
        Western Australia has consumer protection provisions that alter this equation for buyers in
        that state. Under WA regulations, buyers receive the full statutory warranty period from the
        date of purchase rather than from the original registration date. The kilometre limit still
        reduces based on what the vehicle has already covered, but the time component resets to the
        date you take delivery.
      </p>

      <p style={AS.p}>
        Some brands also apply purchase-date warranty terms in WA as part of their own state-specific
        policy, which may go further than the statutory minimum. These policies can vary by manufacturer
        and are not always published clearly. If you are buying a demo in WA, ask the dealer to confirm
        both the state-level entitlement and the brand-specific policy in writing. The two can align or
        diverge depending on who made the car.
      </p>

      <div style={AS.disclaimer}>
        <p style={AS.disclaimerText}>
          State-level consumer protection regulations can change. Confirm the current rules with Consumer
          Protection WA or a licensed vehicle dealer before relying on any general guidance.
        </p>
      </div>

      <h2 style={AS.h2}>Unregistered Demos Are a Different Calculation</h2>

      <p style={AS.p}>
        Not every demo comes with prior registration. Some dealers run vehicles on trade plates, which
        are temporary dealer plates used to move or demonstrate a car without formally registering it.
        If a vehicle has operated only on trade plates and has never been registered in any state, there
        is no registration history to speak of. You become the first registered owner and the warranty
        starts on the date you register it.
      </p>

      <p style={AS.p}>
        That distinction is worth money. Two demo cars with identical kilometres, identical specification,
        and identical presentation could have very different warranty positions depending solely on whether
        one was ever formally registered. Always ask whether the vehicle carries any prior registration
        and request confirmation through an NEVDIS report if the dealer's answer is verbal only.
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>HOW TO CHECK</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>Ask for the NEVDIS report. It shows the full Australian registration history of the vehicle</li>
          <li style={AS.tipItem}>A car with no NEVDIS registration entries has never been formally registered in Australia</li>
          <li style={AS.tipItem}>Trade plate use does not appear in NEVDIS records</li>
        </ul>
      </div>

      <h2 style={AS.h2}>Self-Registered Stock Is Its Own Category</h2>

      <p style={AS.p}>
        Dealerships sometimes register vehicles in their own name without using them as demos in any
        practical sense. This typically occurs near the end of a sales reporting period when manufacturers
        assess volume performance based on registration counts rather than buyer deliveries. The car sits
        in the yard with minimal or no kilometres, but the warranty has been running since the registration
        date.
      </p>

      <p style={AS.p}>
        These vehicles are often sold to buyers as demo cars or ex-demonstrator stock. The price
        reflects the negligible kilometre count, which looks attractive. The warranty position reflects
        the date, which may be several months old. The kilometres make the car look fresher than it
        is from a coverage perspective.
      </p>

      <p style={AS.p}>
        A car with 300 km registered four months ago is not the same as a car with 300 km registered
        four weeks ago. Ask for the registration date regardless of how low the odometer reads.
      </p>

      <h2 style={AS.h2}>What to Confirm Before You Sign</h2>

      <p style={AS.p}>
        The information you need exists. Dealers have it. Most will provide it without being pressed,
        but the request needs to be explicit and the confirmation needs to be in writing.
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>BEFORE YOU SIGN</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>Get the first registration date in writing. Ask for the rego papers or an NEVDIS report</li>
          <li style={AS.tipItem}>Ask the dealer to state the remaining warranty period and remaining km allowance in the contract itself, not just verbally</li>
          <li style={AS.tipItem}>Ask specifically whether the brand offers any warranty reset or extension program for demonstrator purchases</li>
          <li style={AS.tipItem}>Check when the current registration expires. Rego due within weeks of purchase is an additional cost to factor in</li>
          <li style={AS.tipItem}>If buying in WA, ask the dealer to confirm in writing whether the brand applies purchase date warranty terms in that state</li>
        </ul>
      </div>

      <p style={AS.p}>
        If you want a broader picture of what to look for before buying any demo,{" "}
        <Link href="/blog/why-buy-demo-car-australia" style={{ color: "#1A1A1A", fontWeight: 600 }}>
          our guide to buying demo cars in Australia
        </Link>{" "}
        covers the full picture from price to condition checks.
      </p>

      <hr style={AS.divider} />

      <h2 style={AS.h2}>The Discount Should Account for What You Lose</h2>

      <p style={AS.p}>
        Every month of warranty consumed by prior registration is a month of mechanical coverage you no
        longer have. If something goes wrong in month seven of ownership and the warranty ran out at
        month six, the repair comes out of your pocket. That exposure belongs in the price negotiation
        before you sign, not as a conversation you have afterward.
      </p>

      <p style={AS.p}>
        Frame it plainly. The registration date was eight months ago. The warranty is eight months
        shorter than new. That is a concrete, documentable reduction in the value of the vehicle.
        A dealer who cannot move on price may still be able to move on inclusions, accessories, or
        a warranty extension through the brand.
      </p>

      <p style={AS.p}>
        For a clear breakdown of how much room dealers actually have on demo stock and when they are
        most motivated to move,{" "}
        <Link href="/blog/how-low-can-dealer-go-new-car-price" style={{ color: "#1A1A1A", fontWeight: 600 }}>
          see how low a dealer can go on a new car price in Australia
        </Link>.
      </p>

      <hr style={AS.divider} />

      <h2 style={AS.h2}>Frequently Asked Questions</h2>

      <h3 style={AS.h3}>Does a demo car warranty transfer to the new owner?</h3>
      <p style={AS.p}>
        Yes. The manufacturer warranty follows the vehicle, not the original registrant. When you
        buy a demo, you receive whatever remains of the coverage as calculated from the original
        registration date. The transfer is automatic in most cases. Confirm with the brand that
        no additional steps are needed to register yourself as the current owner for warranty purposes.
      </p>

      <h3 style={AS.h3}>Do any brands offer warranty resets for demo purchases?</h3>
      <p style={AS.p}>
        A small number of brands and certified pre-owned programs offer warranty extensions or resets
        for demonstrator purchases. These are not standard across the industry. Ask the dealer and
        confirm directly with the brand before relying on it. Do not assume the program exists based
        on what applied to a different brand.
      </p>

      <h3 style={AS.h3}>How do you confirm a demo has never been registered?</h3>
      <p style={AS.p}>
        Ask the dealer for the NEVDIS report for the vehicle. This is the authoritative record of
        Australian registration history across all states and territories. If the report shows no
        prior registration entries, the car has never been formally registered anywhere in Australia.
        Ask the dealer to confirm this in writing on the purchase contract. Verbal assurances alone
        are not a reliable basis for a warranty claim later.
      </p>

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>Get demo car alerts</div>
        <p style={AS.ctaDesc}>Be first to know when demo stock hits the market, updated weekly</p>
        <Link href="/coming-soon" style={AS.ctaBtn}>Get free alerts</Link>
      </div>
    </>
  );
}
