import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function BusinessCarGstDemoCarAustraliaContent() {
  return (
    <>

          <p style={AS.p}>
            If you run a business in Australia and you&rsquo;re due for a car upgrade, there&rsquo;s
            a decision most owners eventually run into. Buy new and absorb the depreciation hit on
            day one, or find something that already took that hit for you.
          </p>

          <p style={AS.p}>
            This is where demo cars quietly make a lot of sense, and almost nobody talks about it
            properly.
          </p>

          <h2 style={AS.h2}>The First-Year Depreciation Someone Else Absorbed</h2>

          <p style={AS.p}>
            Start with the obvious. A demo car has already lost most of the value it&rsquo;s ever
            going to lose in year one. New cars typically drop{" "}
            <span style={AS.highlight}>15 to 20 percent</span> the moment they&rsquo;re registered.
            A demo car with a few thousand kilometres on the clock has already absorbed that drop,
            but it&rsquo;s still essentially new. Same warranty, same condition, same smell of new
            leather. You&rsquo;re just not the one paying for that first year of depreciation.
          </p>

          <h2 style={AS.h2}>Claiming GST Twice</h2>

          <p style={AS.p}>
            Then there&rsquo;s GST. If you&rsquo;re registered for GST and the car is used for
            business purposes, you can generally claim the GST back on the purchase price, up to
            the car limit threshold the ATO sets each financial year. That applies whether the car
            is new or a demo.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>THE DOUBLE SAVING</div>
            <p style={AS.calloutText}>
              Since a demo car is already discounted from new, you&rsquo;re claiming GST on a
              smaller number to begin with. Your upfront cash outlay drops twice — once from the
              discount, once from the GST claim.
            </p>
          </div>

          <h2 style={AS.h2}>Depreciation Deductions: Lower Starting Point, Same Principle</h2>

          <p style={AS.p}>
            Depreciation deductions work the same way. Whether you&rsquo;re using the instant
            asset write-off or standard depreciation schedules, the deduction is calculated on
            what you paid — not the original new price. A car bought for{" "}
            <span style={AS.highlight}>$20,000 less than new</span> still depreciates from that
            lower starting point, but the difference between buying new and buying a demo rarely
            shows up as a meaningful tax disadvantage. You&rsquo;re saving more upfront than
            you&rsquo;d ever claw back in extra depreciation on a new car.
          </p>

          <h2 style={AS.h2}>Full Warranty, No Haggling</h2>

          <p style={AS.p}>
            Most demo cars carry the full manufacturer warranty from the original registration
            date — not from when you bought it — but the difference is usually a matter of weeks.
            You&rsquo;re not buying a used car in the traditional sense. You&rsquo;re buying a
            barely driven one that{" "}
            <span style={AS.highlight}>a dealer needs off their books</span> before the end of
            the month or the end of a reporting period.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>The Bottom Line for Business Owners</h2>

          <p style={AS.p}>
            For business owners who don&rsquo;t have time to haggle or chase down private sellers,
            that&rsquo;s the real value. You get a near-new car, full warranty, GST eligibility,
            and a price that already reflects the first year of depreciation someone else absorbed.
          </p>

          <p style={AS.p}>
            None of this replaces proper advice from your accountant, who&rsquo;ll know your
            specific structure and how the numbers apply to you. But if a car upgrade is on the
            list this year, it&rsquo;s worth at least asking the question:{" "}
            <span style={AS.highlight}>new, or a demo that&rsquo;s done the work for you already</span>.
          </p>

          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>Browse current demo listings</div>
            <p style={AS.ctaDesc}>
              Near-new cars, full warranty, already discounted — updated as new stock arrives
            </p>
            <Link href="/listings" style={AS.ctaBtn}>View listings →</Link>
          </div>

    </>
  );
}
