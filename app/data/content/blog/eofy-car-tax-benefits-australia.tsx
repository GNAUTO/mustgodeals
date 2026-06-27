import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function EofyCarTaxBenefitsAustraliaContent() {
  return (
    <>

          <p style={AS.p}>
            Every June, Australian dealerships push hard on &ldquo;EOFY deals.&rdquo; For business
            owners with an ABN, there&rsquo;s a real question worth asking: does buying a car before
            30 June actually deliver a tax advantage? The answer is yes — but with some important
            caveats worth understanding before you sign anything.
          </p>

          <h2 style={AS.h2}>The Instant Asset Write-Off</h2>

          <p style={AS.p}>
            For the 2025–26 financial year, small businesses with aggregated turnover under{" "}
            <span style={AS.highlight}>$10 million</span> can immediately deduct the full cost of
            eligible assets under <span style={AS.highlight}>$20,000</span>, provided the asset is
            first used or installed ready for use by 30 June 2026.
          </p>

          <p style={AS.p}>
            That&rsquo;s useful for tools, equipment and technology. For cars, however, the picture
            is more complicated.
          </p>

          <h2 style={AS.h2}>Most Cars Don&rsquo;t Qualify for Instant Write-Off</h2>

          <p style={AS.p}>
            Most passenger vehicles cost more than $20,000, which means they won&rsquo;t qualify
            for the instant asset write-off. Instead, they go into the small business depreciation
            pool, where they&rsquo;re depreciated at{" "}
            <span style={AS.highlight}>15% in the first year</span> and{" "}
            <span style={AS.highlight}>30% each year after</span>.
          </p>

          <p style={AS.p}>
            So buying a car before 30 June doesn&rsquo;t mean you can deduct the full cost in one
            hit — it means you start depreciating it from this financial year instead of next.
          </p>

          <h2 style={AS.h2}>The Car Limit</h2>

          <p style={AS.p}>
            For 2025–26, the car limit is <span style={AS.highlight}>$69,674</span>. Even if you
            spend more than this, the maximum you can use to calculate depreciation is $69,674. The
            maximum GST credit is also capped at{" "}
            <span style={AS.highlight}>$6,334</span> — one-eleventh of the car limit — regardless
            of what you paid.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>2025–26 CAR LIMIT SUMMARY</div>
            <p style={AS.calloutText}>
              Maximum depreciable amount: <strong>$69,674</strong><br />
              Maximum GST credit: <strong>$6,334</strong><br />
              These caps apply regardless of the actual purchase price.
            </p>
          </div>

          <h2 style={AS.h2}>Business Use Percentage Matters</h2>

          <p style={AS.p}>
            If you use the car for both business and personal purposes, you can only claim the
            business-use portion. A logbook showing{" "}
            <span style={AS.highlight}>65% business use</span> means your deduction is calculated
            on 65% of the eligible cost.
          </p>

          <p style={AS.p}>
            The ATO expects you to keep a logbook. Without one, any claim is difficult to
            substantiate.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>So What&rsquo;s the Real Advantage of Buying Before 30 June?</h2>

          <p style={AS.p}>
            The tax benefit of buying before EOFY versus after is largely one of timing — you bring
            the deduction forward rather than creating a larger one. The bigger advantage is often
            the commercial one: dealerships are under the most pressure to clear stock before 30
            June, which means more negotiating room and more demo vehicles on the market.
          </p>

          <div style={AS.tipBox}>
            <div style={AS.tipTitle}>QUICK SUMMARY FOR ABN HOLDERS</div>
            <ul style={AS.tipList}>
              <li style={AS.tipItem}>Instant write-off only applies to assets under $20,000 — most cars don&rsquo;t qualify</li>
              <li style={AS.tipItem}>Cars over $20,000 go into the depreciation pool: 15% year 1, 30% each year after</li>
              <li style={AS.tipItem}>Depreciation is capped at the car limit: $69,674 for 2025–26</li>
              <li style={AS.tipItem}>Only the business-use percentage is deductible — keep a logbook</li>
              <li style={AS.tipItem}>The real EOFY advantage is commercial: more stock, more motivated dealers</li>
            </ul>
          </div>

          <h2 style={AS.h2}>One Critical Detail</h2>

          <p style={AS.p}>
            The asset must be physically ready for use in your business before 30 June 2026. Simply
            paying for it or signing a contract is not enough — the vehicle must actually be{" "}
            <span style={AS.highlight}>delivered and available for use</span>.
          </p>

          <div style={AS.disclaimer}>
            <p style={AS.disclaimerText}>
              This article is for general information purposes only and does not constitute tax
              advice. Individual circumstances vary significantly — speak with a registered tax
              agent or accountant before making any purchasing decisions based on tax considerations.
            </p>
          </div>

          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>Find EOFY clearance deals near you</div>
            <p style={AS.ctaDesc}>Demo cars and run-out stock — updated every week before they&rsquo;re gone</p>
            <Link href="/coming-soon" style={AS.ctaBtn}>Get free alerts →</Link>
          </div>

    </>
  );
}
