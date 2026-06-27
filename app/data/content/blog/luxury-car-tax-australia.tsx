import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function LuxuryCarTaxAustraliaContent() {
  return (
    <>

          <p style={AS.p}>
            If you&apos;re shopping for an Audi, BMW, or Mercedes in Australia, you&apos;ve probably noticed that the
            sticker price is often higher than you&apos;d expect. Part of that comes down to a tax that kicks in
            the moment a vehicle exceeds a certain price threshold — the{" "}
            <span style={AS.highlight}>Luxury Car Tax (LCT)</span>. It&apos;s one of those costs that catches buyers off
            guard, but once you understand how it works, you can plan around it. This guide breaks down exactly
            what LCT is, how much it adds to your purchase, and how to legally minimise your exposure.
          </p>

          <h2 style={AS.h2}>What Is the Luxury Car Tax?</h2>

          <p style={AS.p}>
            The Luxury Car Tax is a federal government tax applied to the sale of vehicles above a set price
            threshold. It was introduced in 1999 alongside the GST, with the intention of placing an additional
            tax burden on high-value vehicle purchases. Importantly, LCT is separate from GST — it sits on top
            of it.
          </p>

          <p style={AS.p}>
            In practice, the dealership pays LCT to the ATO and passes that cost directly onto the buyer through
            the vehicle price. If you&apos;re buying a car above the threshold, you&apos;re paying it — whether
            it&apos;s itemised on the invoice or not.
          </p>

          <p style={AS.p}>
            The mechanics are straightforward: only the amount <em>above</em> the threshold gets taxed, not the
            full vehicle price. But at a rate of <span style={AS.highlight}>33%</span>, that slice adds up fast.
          </p>

          <h2 style={AS.h2}>The 2025–26 LCT Thresholds</h2>

          <p style={AS.p}>
            The LCT threshold is adjusted every financial year. For 2025–26, there are two separate thresholds
            depending on the vehicle&apos;s fuel efficiency:
          </p>

          <table style={AS.table}>
            <thead>
              <tr>
                <th style={AS.th}>Vehicle Type</th>
                <th style={{ ...AS.th, textAlign: "right" }}>LCT Threshold</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={AS.td}>Standard vehicles</td>
                <td style={AS.tdRight}>$80,567</td>
              </tr>
              <tr>
                <td style={{ ...AS.td, borderBottom: "none" }}>Fuel-efficient vehicles (7L/100km or less)</td>
                <td style={{ ...AS.tdRight, borderBottom: "none" }}>$91,387</td>
              </tr>
            </tbody>
          </table>

          <p style={AS.p}>
            These figures are GST-inclusive. Once the vehicle price crosses its applicable threshold, 33% LCT
            applies to every dollar above that line.
          </p>

          <h2 style={AS.h2}>How Much Does It Actually Add?</h2>

          <p style={AS.p}>
            Let&apos;s run the numbers on a real example. Say you&apos;re buying a vehicle with a GST-inclusive
            price of $95,000. Using the standard threshold of $80,567, the taxable amount is $14,433. Apply the
            33% rate and you get an LCT bill of approximately <span style={AS.highlight}>$4,763</span>.
          </p>

          <div style={AS.callout}>
            <p style={AS.calloutTitle}>WORKED EXAMPLE</p>
            <p style={AS.calloutText}>
              Vehicle price: $95,000 − LCT threshold: $80,567 = Taxable amount: $14,433<br />
              $14,433 × 33% = <strong>LCT payable: $4,763</strong>
            </p>
          </div>

          <p style={AS.p}>
            Most dealerships will have already folded this into the driveaway price — which is exactly why
            driveaway pricing matters. Always ask whether a quoted price is driveaway, and if so, confirm that
            LCT is included. If it isn&apos;t, you&apos;re in for a surprise at the paperwork stage.
          </p>

          <h2 style={AS.h2}>Demo Cars and LCT — A Key Difference</h2>

          <p style={AS.p}>
            Here&apos;s where it gets genuinely useful for buyers. LCT is calculated on the <em>sale price</em> of
            the vehicle. That means if you buy a demo car at a price below the LCT threshold, you pay zero LCT —
            even if the same car would attract thousands in tax when sold new.
          </p>

          <div style={AS.callout}>
            <p style={AS.calloutTitle}>DEMO CAR SCENARIO</p>
            <p style={AS.calloutText}>
              An Audi model with a new price of $88,000 is available as a demonstrator for{" "}
              <strong>$78,500</strong>. That&apos;s below the standard LCT threshold of $80,567.
              Result: <strong>zero LCT payable</strong>.
            </p>
          </div>

          <p style={AS.p}>
            This is one of the most overlooked advantages of buying a demonstrator. You&apos;re not just getting a
            discount on the car — you&apos;re potentially eliminating a tax that would have added thousands to the
            new-car equivalent. That&apos;s a structural saving, not just a negotiated one.
          </p>

          <h2 style={AS.h2}>The Fuel-Efficient Threshold Is Worth Knowing</h2>

          <p style={AS.p}>
            If you&apos;re considering a hybrid or electric vehicle, the higher threshold of{" "}
            <span style={AS.highlight}>$91,387</span> applies — provided the vehicle consumes 7 litres per 100km
            or less on the combined cycle. That&apos;s roughly $11,000 more headroom than the standard threshold
            before LCT kicks in.
          </p>

          <p style={AS.p}>
            Given that most premium brands now offer hybrid variants — Audi&apos;s e-tron range, the BMW iX,
            Volvo EX90 — this threshold difference can be a meaningful factor in your model choice. A hybrid
            version of a vehicle that would otherwise attract LCT might sit cleanly below the fuel-efficient
            threshold.
          </p>

          <h2 style={AS.h2}>Legitimate Ways to Reduce Your LCT Exposure</h2>

          <p style={AS.p}>
            LCT is a lawful tax, but there are legitimate strategies that can reduce or eliminate it. Here&apos;s
            what actually works:
          </p>

          <div style={AS.tipBox}>
            <p style={AS.tipTitle}>FOUR APPROACHES THAT WORK</p>
            <ul style={AS.tipList}>
              <li style={AS.tipItem}>
                <strong>Buy a demo car</strong> — If the demo price falls below the threshold, there&apos;s no LCT at all.
                Same factory warranty, significantly lower tax burden.
              </li>
              <li style={AS.tipItem}>
                <strong>Choose a fuel-efficient vehicle</strong> — Hybrid or EV models qualify for the higher $91,387 threshold,
                giving you more room before LCT applies.
              </li>
              <li style={AS.tipItem}>
                <strong>Use a novated lease</strong> — LCT still applies, but structuring the full vehicle cost as pre-tax
                salary reduces your effective after-tax outlay. Combining a novated lease with an LCT-efficient
                vehicle compounds the saving.
              </li>
              <li style={AS.tipItem}>
                <strong>Manage your option pack</strong> — Options are included in the LCT calculation. If the base vehicle
                sits just below the threshold, check with your dealer which options push it over — and whether
                any can be added post-sale or dropped entirely.
              </li>
            </ul>
          </div>

          <h2 style={AS.h2}>When LCT Can Be Refunded</h2>

          <p style={AS.p}>
            There are limited circumstances under which LCT paid at the point of sale can be claimed back. These
            include:
          </p>

          <div style={AS.tipBox}>
            <p style={AS.tipTitle}>LCT REFUND SCENARIOS</p>
            <ul style={AS.tipList}>
              <li style={AS.tipItem}><strong>Export</strong> — If the vehicle is exported from Australia, the LCT can be refunded.</li>
              <li style={AS.tipItem}><strong>Primary production use</strong> — Vehicles used in primary industry (farming, agriculture) may qualify.</li>
              <li style={AS.tipItem}><strong>Disability-modified vehicles</strong> — Certain modifications for disabled drivers attract concessional treatment.</li>
            </ul>
          </div>

          <p style={AS.p}>
            Most private buyers won&apos;t qualify for a refund, but if you&apos;re purchasing for business purposes, it&apos;s
            worth a conversation with your accountant before settlement.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>The Bottom Line</h2>

          <p style={AS.p}>
            The Luxury Car Tax is one of those costs that&apos;s easy to ignore until you&apos;re sitting at the
            dealership wondering why the number doesn&apos;t match what you expected. At 33% on the amount above
            the threshold, it can add thousands to the final price of any premium vehicle.
          </p>

          <p style={AS.p}>
            The good news is that with a little planning — buying a demo, choosing a fuel-efficient model, or
            structuring through a novated lease — you can significantly reduce that exposure, or eliminate it
            altogether. Always start by asking for the driveaway price, confirming whether LCT is included, and
            checking which threshold applies to your vehicle of choice.
          </p>

          <p style={AS.p}>
            Know the rules, and they work for you. That&apos;s what smart buying looks like.
          </p>

          <div style={AS.ctaBox}>
            <p style={AS.ctaTitle}>Find a Demo Car Below the LCT Threshold</p>
            <p style={AS.ctaDesc}>Browse demo listings where the price — and the tax — works in your favour.</p>
            <Link href="/listings" style={AS.ctaBtn}>Browse Demo Listings</Link>
          </div>

    </>
  );
}
