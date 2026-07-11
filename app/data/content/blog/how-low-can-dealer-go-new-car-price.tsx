import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much can you realistically negotiate off a new car in Australia?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "There is no universal figure. Front margins vary by brand, segment, and how long the vehicle has been in stock. The more useful frame is not how much to cut the price but where the dealer's motivation to deal actually comes from — manufacturer volume bonuses, floorplan carrying costs, and end of period target pressure all matter more than the headline sticker gap."
      }
    },
    {
      "@type": "Question",
      "name": "Do dealers actually have room to move on price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, but the room is often smaller on the front end of the deal than buyers expect. The real flexibility tends to sit in timing, inventory age, backend arrangements, and whether the dealer is chasing a manufacturer volume bonus. A dealer who cannot move on the car price may still offer meaningful value through inclusions, accessories, or a favourable finance rate."
      }
    },
    {
      "@type": "Question",
      "name": "What is floorplan financing and why does it matter to buyers?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Floorplan financing is the arrangement by which dealers borrow money from a finance company to hold stock. They pay interest on every vehicle sitting in their yard. The longer a car stays unsold, the more that carrying cost erodes the dealer's margin. This is why older yard stock and registered demos carry more room to negotiate than a car that arrived last week."
      }
    },
    {
      "@type": "Question",
      "name": "When is the best time to buy a car to get the best price?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The final three to five business days of each calendar month consistently produce the most movement, because dealers are closing against manufacturer sales targets. Quarter end and financial year end in June compound this pressure further. Timing your visit deliberately around these windows is often more effective than negotiating skill alone."
      }
    },
    {
      "@type": "Question",
      "name": "What questions should I ask at a dealership to get a better deal?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Ask how long the vehicle has been on the yard. Ask whether it is a demo or an unregistered new vehicle. Ask for the drive away price as a single total. Ask what the delivery timeframe is for a new order compared to taking in-stock vehicles. These questions signal that you understand how the deal works, which changes the dynamic more than asking for a lower number."
      }
    },
    {
      "@type": "Question",
      "name": "Are demo and clearance cars worth negotiating on differently?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A registered demo or long-yard vehicle is accruing floorplan interest costs for the dealer every day it sits. The dealer's motivation to move it is structurally greater than on a new order that has not arrived yet. These vehicles also come with a fixed depreciation profile and can offer genuine savings if you are flexible on colour and specification."
      }
    }
  ]
};

const clusterCard: React.CSSProperties = {
  display: "block",
  borderLeft: "3px solid #CCDA47",
  padding: "10px 16px",
  background: "white",
  borderRadius: "6px",
  marginBottom: "10px",
  textDecoration: "none",
  color: "#1A1A1A",
};

const clusterMeta: React.CSSProperties = {
  fontSize: "10px",
  color: "#8A9A10",
  fontWeight: 600,
  letterSpacing: "0.7px",
  textTransform: "uppercase",
  marginBottom: "4px",
};

const clusterTitle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 600,
  color: "#1A1A1A",
  lineHeight: 1.4,
};

export default function HowLowCanDealerGoNewCarPriceContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p style={AS.p}>
        The question gets asked at every dealership, but it rarely gets an honest
        answer. How far can a dealer actually move on the price of a new car? The
        truthful response is that the answer depends far less on the sticker figure
        than on a handful of structural factors most buyers never consider.
      </p>

      <p style={AS.p}>
        Understanding those factors is worth more than any single percentage, because
        it tells you where to look, when to ask, and which questions actually open
        doors that straight bargaining usually closes.
      </p>

      <h2 style={AS.h2}>The front margin on a new car is thinner than most buyers think</h2>

      <p style={AS.p}>
        A common assumption is that a dealership buys a car at a wholesale figure
        and sells it at retail, pocketing a generous margin on every transaction.
        On most volume segment vehicles, the gap between a dealer&rsquo;s invoice
        price and the manufacturer recommended retail price is surprisingly narrow.
      </p>

      <p style={AS.p}>
        That does not mean there is no room. It means that if you focus your energy
        entirely on cutting the drive away price through persistence alone, you are
        working with a smaller lever than you realise. A dealer who moves a few
        hundred dollars on a vehicle under $50,000 may have genuinely reached the
        limit of what the front end of the deal allows. The room does not disappear
        — but it comes from somewhere else.
      </p>

      <h2 style={AS.h2}>Where the real room comes from</h2>

      <p style={AS.p}>
        Three forces create the conditions where a dealer can concede meaningfully
        without destroying their own margin.
      </p>

      <p style={AS.p}>
        The first is <span style={AS.highlight}>manufacturer volume bonuses</span>.
        Car brands set monthly and quarterly sales targets for every dealership.
        When a dealer meets those targets, they receive a bonus payment from the
        manufacturer. A single sale at the end of a performance period can be the
        one that triggers that payment. That changes what a dealer can afford to
        concede on the front margin without taking a loss on the deal overall.
      </p>

      <p style={AS.p}>
        The second is <span style={AS.highlight}>floorplan financing</span>. Dealers
        do not buy their stock outright. They borrow against it from a finance
        company and pay interest on every vehicle sitting on their lot. A car that
        does not sell is not neutral to a dealer. It is a daily carrying cost. The
        longer a vehicle stays on the yard, the more that cost erodes whatever margin
        the dealer forecast when the car arrived.
      </p>

      <p style={AS.p}>
        The third is the <span style={AS.highlight}>back end of the deal</span>.
        Finance arrangements, insurance products, paint protection, extended
        warranties, and accessories carry significantly higher margins than the
        vehicle itself. A dealer who reduces the car price may recover part of
        that concession through a finance arrangement or an accessory bundle.
        Understanding this does not mean refusing everything the finance office
        offers. It means knowing what each element is worth so you can assess
        the total deal rather than just the headline number.
      </p>

      <h2 style={AS.h2}>Demo and yard stock changes the calculation entirely</h2>

      <p style={AS.p}>
        New cars ordered to specification are one category. Vehicles already
        sitting in the yard — particularly those registered as demonstrators —
        are a completely different conversation.
      </p>

      <p style={AS.p}>
        A demo car has been registered in the dealer&rsquo;s name. It has kilometres
        on it. From the dealer&rsquo;s perspective, it is an asset that is depreciating
        and accumulating floorplan interest every single day it sits unsold. The
        motivation to move it is structurally greater than the motivation to sell
        a new order that has not yet arrived.
      </p>

      <p style={AS.p}>
        The same logic applies to new vehicles that have been in stock for several
        months. These are not problem cars. They are often simply vehicles in a
        colour or specification that was not as popular as forecast. The longer they
        sit, the more the economics shift in a buyer&rsquo;s favour.
      </p>

      <Link href="/blog/what-is-a-dealer-clearance-car-australia" style={clusterCard}>
        <div style={clusterMeta}>Buying Guide</div>
        <div style={clusterTitle}>What Is a Dealer Clearance Car and Why Is It Cheaper</div>
      </Link>

      <Link href="/blog/why-buy-demo-car-australia" style={clusterCard}>
        <div style={clusterMeta}>Buying Guide</div>
        <div style={clusterTitle}>Why Buy a Demo Car in Australia</div>
      </Link>

      <h2 style={AS.h2}>Timing creates room that negotiating skill alone cannot</h2>

      <p style={AS.p}>
        The structure of dealer incentives means timing matters as much as what
        you say at the desk. The final three to five business days of each calendar
        month is when a dealer&rsquo;s sensitivity to closing a deal is highest.
        Sales targets are measured monthly. A dealer who is two or three units
        short of a target has different priorities on the 28th than on the 5th.
      </p>

      <p style={AS.p}>
        The same logic applies at a larger scale to quarter end and the end of the
        financial year in June. At that point, dealerships often carry the combined
        weight of monthly, quarterly, and annual targets simultaneously. This does
        not guarantee a discount. But it creates conditions where a concession that
        would not have been approved earlier in the period suddenly becomes possible.
      </p>

      <p style={AS.p}>
        Dealerships operate on a calendar that most buyers ignore. Aligning your
        visit to that calendar is one of the most straightforward advantages a
        prepared buyer can use.
      </p>

      <h2 style={AS.h2}>Questions that shift the balance more than asking for less</h2>

      <p style={AS.p}>
        Asking for a lower price is the least effective way to get one. Asking
        questions that reveal you understand the structure of the deal tends to
        produce better outcomes.
      </p>

      <p style={AS.p}>
        Ask how long the vehicle has been on the yard. Ask whether it is a demo
        or an unregistered new vehicle. Ask for the total drive away price as a
        single figure rather than discussing components separately. Ask what the
        delivery timeframe is for a new order placed today, compared to taking
        the in-stock vehicle in front of you.
      </p>

      <p style={AS.p}>
        These questions serve two purposes. They give you information that is
        directly useful in assessing the deal. And they signal to the dealer that
        you are a prepared buyer who understands how the transaction works. That
        changes the tone of the conversation in a way that asking for a lower number
        does not.
      </p>

      <p style={AS.p}>
        On-road costs vary by state and vehicle value. Stamp duty alone can
        represent several thousand dollars on top of the advertised price. Use
        the{" "}
        <Link href="/tools/stamp-duty-calculator" style={{ color: "#5A7A10", fontWeight: 600 }}>
          stamp duty calculator
        </Link>{" "}
        to understand the full cost before you sit down at the desk.
      </p>

      <h2 style={AS.h2}>What this means for a real purchase decision</h2>

      <p style={AS.p}>
        The dealer who cannot move on the sticker is not necessarily telling you
        the full story. The front margin on a new vehicle is real but often limited.
        The forces that create genuine room — inventory age, performance period
        pressure, manufacturer bonus windows, and backend flexibility — are
        structural and operate on a schedule.
      </p>

      <p style={AS.p}>
        A buyer who understands that schedule and asks the right questions about
        the specific vehicle in front of them is better positioned than one who
        simply pushes harder on a number. The same car, bought at a different
        time with a different set of questions, can represent a meaningfully
        different outcome.
      </p>

      <p style={AS.p}>
        If you want to see what clearance and demo stock currently looks like in
        the market, the{" "}
        <Link href="/listings/2025-kia-seltos-gt-line-demo" style={{ color: "#5A7A10", fontWeight: 600 }}>
          2025 Kia Seltos GT-Line Demo listing
        </Link>{" "}
        is an example of the kind of vehicle where these dynamics apply directly.
      </p>

      {/* FAQ Section */}
      <h2 style={AS.h2}>Frequently asked questions</h2>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          How much can you realistically negotiate off a new car in Australia?
        </p>
        <p style={AS.p}>
          There is no universal figure. The more useful frame is not how much to
          cut the price but where the dealer&rsquo;s motivation to deal actually
          comes from. Manufacturer volume bonuses, floorplan carrying costs, and
          end of period target pressure all matter more than the headline sticker gap.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          Do dealers have actual room to move on price?
        </p>
        <p style={AS.p}>
          Yes, though the room on the front end of a deal is often smaller than buyers
          expect. The real flexibility tends to sit in timing, inventory age, and whether
          the dealer is chasing a manufacturer volume bonus. A dealer who cannot move on
          the car price may still offer meaningful value through inclusions or a
          favourable finance arrangement.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          What is floorplan financing?
        </p>
        <p style={AS.p}>
          Dealers borrow money from a finance company to hold their stock and pay interest
          on every vehicle sitting on their lot. The longer a car stays unsold, the more
          that carrying cost erodes the dealer&rsquo;s margin. This is why older yard
          stock and registered demos tend to carry more room to negotiate.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          When is the best time to buy a car for the best price?
        </p>
        <p style={AS.p}>
          The final three to five business days of each calendar month consistently
          produce the most movement. Quarter end and June financial year end compound
          this pressure further. Timing your visit deliberately is often more effective
          than negotiating harder on the wrong day.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          What questions should I ask at a dealership to get a better deal?
        </p>
        <p style={AS.p}>
          Ask how long the vehicle has been on the yard. Ask whether it is a demo or
          an unregistered new vehicle. Ask for the drive away price as a single total.
          These questions signal that you understand how the deal works, which changes
          the dynamic more than asking for a lower number.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          Are demo and clearance cars worth negotiating on differently?
        </p>
        <p style={AS.p}>
          Yes. A registered demo or long-yard vehicle is accruing floorplan interest
          costs for the dealer every day it sits. The dealer&rsquo;s motivation to
          move it is structurally greater than on a new order that has not arrived yet.
          These vehicles offer genuine savings if you are flexible on colour and specification.
        </p>
      </div>

      <hr style={AS.divider} />

      {/* Related Articles */}
      <h2 style={AS.h2}>Related reading</h2>
      <Link href="/blog/buying-a-car-in-australia-guide" style={clusterCard}>
        <div style={clusterMeta}>Complete Guide</div>
        <div style={clusterTitle}>The Complete Guide to Buying a Car in Australia</div>
      </Link>
      <Link href="/blog/best-time-to-buy-a-car-australia" style={clusterCard}>
        <div style={clusterMeta}>Buying Guide</div>
        <div style={clusterTitle}>The Best Time to Buy a Car in Australia</div>
      </Link>
      <Link href="/blog/how-to-negotiate-car-price-australia" style={clusterCard}>
        <div style={clusterMeta}>Buying Guide</div>
        <div style={clusterTitle}>How to Negotiate a Car Price at an Australian Dealership</div>
      </Link>

      {/* CTA */}
      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>See current clearance and demo stock</div>
        <p style={AS.ctaDesc}>
          Browse vehicles where these dynamics apply right now, updated regularly
        </p>
        <Link href="/listings" style={AS.ctaBtn}>View listings →</Link>
      </div>
    </>
  );
}
