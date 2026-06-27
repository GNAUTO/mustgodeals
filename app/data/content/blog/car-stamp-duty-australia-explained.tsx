import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function CarStampDutyAustraliaExplainedContent() {
  return (
    <>

          <p style={AS.p}>
            One of the most common surprises for first-time car buyers in Australia is the final
            price. You&rsquo;ve negotiated hard, agreed on a number, and then the paperwork reveals
            a figure higher than expected. The culprit is usually{" "}
            <span style={AS.highlight}>stamp duty</span> — a state government tax that applies to
            every car purchase, new or used.
          </p>

          <h2 style={AS.h2}>What Is Stamp Duty?</h2>

          <p style={AS.p}>
            Stamp duty, also known as motor vehicle duty or registration duty, is a tax imposed by
            state governments on the purchase of vehicles. It applies to both new and used cars.
            Think of it as a transfer tax — the cost of putting the vehicle in your name.
          </p>

          <p style={AS.p}>
            The critical thing to understand is that{" "}
            <span style={AS.highlight}>there is no national rate</span>. Every state and territory
            sets its own stamp duty rules, rates and thresholds. The same car bought in different
            states can attract very different stamp duty costs.
          </p>

          <h2 style={AS.h2}>Rates by State</h2>

          <p style={AS.p}>
            In <strong>NSW</strong>, stamp duty is{" "}
            <span style={AS.highlight}>3%</span> on vehicles up to $44,999 and{" "}
            <span style={AS.highlight}>5%</span> on vehicles $45,000 and above. On a $50,000 car,
            that works out to around <span style={AS.highlight}>$1,600</span> in stamp duty alone.
          </p>

          <p style={AS.p}>
            In <strong>Queensland</strong>, rates are based on engine type. Vehicles with 1–4
            cylinders pay $3 per $100 below $100,000, while 5–6 cylinder vehicles pay $3.50 per
            $100. Hybrids and EVs get the lowest rate at{" "}
            <span style={AS.highlight}>$2 per $100</span>.
          </p>

          <p style={AS.p}>
            <strong>Victoria</strong> calculates stamp duty on the higher of market value or
            purchase price, with different rates applying based on CO₂ emissions. Vehicles emitting
            under 120g/km qualify for a lower &ldquo;green&rdquo; rate.
          </p>

          <p style={AS.p}>
            The <strong>Northern Territory</strong> uses a simple{" "}
            <span style={AS.highlight}>flat rate of 3%</span> of the vehicle&rsquo;s dutiable value.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>EXAMPLE: $50,000 CAR IN NSW</div>
            <p style={AS.calloutText}>
              Vehicle price: $50,000<br />
              Stamp duty rate: 5% (above $45,000 threshold)<br />
              Stamp duty payable: approx. <strong>$1,600</strong><br />
              This is on top of registration, CTP and dealer fees.
            </p>
          </div>

          <h2 style={AS.h2}>Is It Included in the Driveaway Price?</h2>

          <p style={AS.p}>
            When buying from a dealership, stamp duty is typically{" "}
            <span style={AS.highlight}>included in the driveaway price</span>. For private sales,
            the buyer pays it directly to their state&rsquo;s transport authority when transferring
            registration.
          </p>

          <p style={AS.p}>
            This is why it&rsquo;s essential to ask whether a quoted price is the vehicle price or
            driveaway. If it&rsquo;s just the vehicle price, stamp duty will be added on top.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>Electric Vehicles</h2>

          <p style={AS.p}>
            Some states offer stamp duty concessions for EVs. The NT exempts EVs up to $50,000
            from stamp duty until June 2027. Queensland charges a lower rate for hybrids and EVs.
            The ACT applies lower rates to lower-emission vehicles. NSW and Tasmania have ended
            their EV stamp duty concessions.
          </p>

          <h2 style={AS.h2}>Why It Matters Before You Budget</h2>

          <p style={AS.p}>
            Stamp duty isn&rsquo;t negotiable. Unlike the car price, which you can work on with
            the dealer, stamp duty is{" "}
            <span style={AS.highlight}>fixed by the state government</span>. That makes it essential
            to factor into your total budget before you start shopping — not after you&rsquo;ve
            already fallen in love with a car.
          </p>

          <div style={AS.tipBox}>
            <div style={AS.tipTitle}>OFFICIAL STAMP DUTY CALCULATORS</div>
            <ul style={AS.tipList}>
              <li style={AS.tipItem}><strong>NSW</strong> — Service NSW vehicle stamp duty calculator</li>
              <li style={AS.tipItem}><strong>QLD</strong> — Queensland Government vehicle registration duty calculator</li>
              <li style={AS.tipItem}><strong>VIC</strong> — State Revenue Office motor vehicle duty calculator</li>
              <li style={AS.tipItem}><strong>NT</strong> — Territory Revenue Office (flat 3% rate)</li>
            </ul>
          </div>

          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>See what clearance deals are available now</div>
            <p style={AS.ctaDesc}>End-of-month stock dealers need to move — updated every week</p>
            <Link href="/coming-soon" style={AS.ctaBtn}>Get free alerts →</Link>
          </div>

    </>
  );
}
