import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function HowToNegotiateCarPriceAustraliaContent() {
  return (
    <>

          <p style={AS.p}>
            If you&rsquo;ve bought a car in Australia, chances are you&rsquo;ve had this thought
            afterwards: &ldquo;I probably could have paid less.&rdquo; You&rsquo;re probably right.
            The price on the sticker — or the first number a salesperson quotes — is almost never
            the final price. The question is how to negotiate it down.
          </p>

          <h2 style={AS.h2}>Understand What the Dealer Wants</h2>

          <p style={AS.p}>
            Good negotiation starts with understanding the other side. Dealership salespeople work
            in a variety of different structures, but in many cases there are monthly sales targets
            and performance incentives involved. That means closing deals matters — especially as
            the end of the month approaches. Knowing this changes how and when you negotiate.
          </p>

          <p style={AS.p}>
            The closer it gets to{" "}
            <span style={AS.highlight}>month end, quarter end, or the end of the financial year</span>,
            the more motivated a dealer is likely to be. A buyer who understands this dynamic walks
            into the showroom with an advantage.
          </p>

          <h2 style={AS.h2}>Do Your Homework Before You Go</h2>

          <p style={AS.p}>
            Walking into a dealership unprepared is the single biggest mistake buyers make. Before
            you visit, make sure you know at least three things.
          </p>

          <p style={AS.p}>
            First, the market price for the car you want. Use Carsales, Drive, or RedBook to check
            what the same make, model, year and condition is actually selling for. You need to know
            whether the dealer&rsquo;s price is above, at, or below market before you can negotiate
            effectively.
          </p>

          <p style={AS.p}>
            Second, what the competition looks like. Saying &ldquo;I&rsquo;m also looking at a
            couple of other options&rdquo; carries real weight — but only if it&rsquo;s true. Know
            what comparable models are priced at so you can back it up.
          </p>

          <p style={AS.p}>
            Third, the difference between the vehicle price and the driveaway price. In Australia,
            on-top costs like registration, stamp duty and CTP insurance can add up significantly.
            Always clarify whether the price being quoted is the vehicle price or driveaway, so
            you&rsquo;re comparing apples to apples.
          </p>

          <h2 style={AS.h2}>What Not to Do in the Showroom</h2>

          <p style={AS.p}>
            <strong>Don&rsquo;t reveal your budget first.</strong> When a salesperson asks
            &ldquo;what are you looking to spend?&rdquo;, giving a specific number hands them the
            upper hand. A dealer won&rsquo;t work down to your budget — they&rsquo;ll work up to it.
          </p>

          <p style={AS.p}>
            <strong>Don&rsquo;t bring up finance too early either.</strong> If you&rsquo;re
            planning to use dealer finance, keep that conversation until after the vehicle price is
            largely settled. Dealers can use finance margin to offset discounts on the car, which
            makes the overall picture harder to read.
          </p>

          <h2 style={AS.h2}>Negotiation Tactics That Actually Work</h2>

          <p style={AS.p}>
            The goal is to get the dealer to move first. The most effective opening line is simple:
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>THE OPENING LINE</div>
            <p style={AS.calloutText}>
              <strong>&ldquo;What&rsquo;s the best price you can do on this one?&rdquo;</strong>
              <br /><br />
              Say it casually, and wait. This signals that price matters to you and that
              you&rsquo;re weighing up your options — without revealing anything about your budget.
              Once the dealer puts a number on the table, the real negotiation begins.
            </p>
          </div>

          <p style={AS.p}>
            If they come down on price, don&rsquo;t accept immediately. Pause, think it over, then
            ask about extras — free first service, accessories thrown in, an extended warranty,
            floor mats. Cash discounts aren&rsquo;t the only way to get value.
          </p>

          <h2 style={AS.h2}>If You Have a Trade-In, Negotiate It Separately</h2>

          <p style={AS.p}>
            Never let the trade-in and the new car price get bundled into one conversation. Dealers
            prefer it that way because it makes the numbers harder to track. Get the new car price
            agreed first, then bring in the trade-in. That way you can see clearly what you&rsquo;re
            getting on both sides.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>When Negotiation Stalls</h2>

          <p style={AS.p}>
            If the dealer stops moving, be willing to walk. Standing up and saying
            &ldquo;I&rsquo;ll think about it and come back&rdquo; is one of the most effective
            moves in the playbook. Dealers often find more flexibility the moment a buyer heads for
            the door. Just make sure you mean it — walking out works best when it&rsquo;s genuine.
          </p>

          <h2 style={AS.h2}>Your Pre-Visit Checklist</h2>

          <div style={AS.tipBox}>
            <div style={AS.tipTitle}>BEFORE YOU WALK IN</div>
            <ul style={AS.tipList}>
              <li style={AS.tipItem}>Check the market price on Carsales before you go</li>
              <li style={AS.tipItem}>Research 1–2 comparable models as genuine alternatives</li>
              <li style={AS.tipItem}>Confirm whether quotes are vehicle price or driveaway</li>
              <li style={AS.tipItem}>Don&rsquo;t reveal your budget first</li>
              <li style={AS.tipItem}>Open with: <strong>&ldquo;What&rsquo;s the best price you can do on this one?&rdquo;</strong></li>
              <li style={AS.tipItem}>Keep finance discussions until after the car price is settled</li>
              <li style={AS.tipItem}>Negotiate trade-in separately from the new car</li>
            </ul>
          </div>

          <p style={AS.p}>
            The same car, bought on the same day, can cost two buyers very different amounts.
            Preparation is the difference.
          </p>

          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>Get month-end deal alerts</div>
            <p style={AS.ctaDesc}>Clearance vehicles dealers need to move — delivered to your inbox every week</p>
            <Link href="/coming-soon" style={AS.ctaBtn}>Get free alerts →</Link>
          </div>

    </>
  );
}
