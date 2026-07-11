import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

const card: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "white",
  border: "0.5px solid rgba(0,0,0,0.09)",
  borderLeft: "3px solid #CCDA47",
  borderRadius: "8px",
  padding: "1rem 1.25rem",
  textDecoration: "none",
  marginBottom: "10px",
  gap: "12px",
};

const cardMeta: React.CSSProperties = {
  fontSize: "10px",
  color: "#8A9A10",
  fontWeight: 600,
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  marginBottom: "4px",
};

const cardTitle: React.CSSProperties = {
  fontSize: "15px",
  fontWeight: 600,
  color: "#1A1A1A",
  lineHeight: 1.35,
  marginBottom: "3px",
};

const cardTime: React.CSSProperties = {
  fontSize: "12px",
  color: "#aaa",
};

const arrow: React.CSSProperties = {
  fontSize: "18px",
  color: "#CCDA47",
  flexShrink: 0,
};

function ArticleCard({ href, category, title, readTime }: { href: string; category: string; title: string; readTime: string }) {
  return (
    <Link href={href} style={card}>
      <div>
        <div style={cardMeta}>{category}</div>
        <div style={cardTitle}>{title}</div>
        <div style={cardTime}>{readTime}</div>
      </div>
      <div style={arrow}>→</div>
    </Link>
  );
}

export default function BuyingACarInAustraliaGuideContent() {
  return (
    <>
      <p style={AS.p}>
        Buying a car in Australia involves more moving parts than most people expect. The purchase
        price is only part of the picture. Stamp duty, LCT, GST, registration, CTP insurance, and
        dealer delivery fees all stack on top before you drive away. On the other side of the
        equation, buyers who understand how dealerships operate — including the pressure points
        that create genuine discounts — consistently pay less for the same car.
      </p>

      <p style={AS.p}>
        This guide connects the individual buying guides published on MustGoDeals into a single
        reference. Each section covers one part of the purchase process, with links to the
        full article where you want more detail.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>THE SHORT VERSION</div>
        <p style={AS.calloutText}>
          Demo and clearance cars offer 10 to 30 percent off new. Stamp duty and LCT add to the
          bill regardless of what you buy. Novated leases and EOFY timing can reduce that bill
          significantly. Month-end and financial year-end are when dealers are most motivated to
          negotiate. Know these four things before you set foot in a showroom.
        </p>
      </div>

      <h2 style={AS.h2}>Choosing the Right Vehicle</h2>

      <p style={AS.p}>
        The first decision most buyers face is whether to buy new, demo, or used. In the
        Australian market, demo and clearance vehicles represent a middle ground that is often
        overlooked. These are vehicles that have been registered by the dealership, typically
        with low kilometres, and are sold at a meaningful discount to new. The manufacturer
        warranty typically carries over in full.
      </p>

      <p style={AS.p}>
        Clearance stock, also called runout stock, refers to vehicles that a dealer needs to move
        before a new model arrives or a financial period closes. Dealers are motivated, prices
        are negotiable, and the vehicles are often identical to new in every practical sense.
      </p>

      <ArticleCard
        href="/blog/why-buy-demo-car-australia"
        category="Buying Guide"
        title="Why Buying a Demo Car in Australia Makes More Sense Than You Think"
        readTime="7 min read"
      />
      <ArticleCard
        href="/blog/what-is-a-dealer-clearance-car-australia"
        category="Buying Guide"
        title="What Is a Dealer Clearance Car and Why Is It Cheaper?"
        readTime="6 min read"
      />

      <h2 style={AS.h2}>Taxes and On-Road Costs</h2>

      <p style={AS.p}>
        Australia applies several taxes on top of a vehicle's purchase price. Stamp duty is a
        state government charge, and it varies significantly by state. On a $60,000 car in NSW,
        you might pay around $2,000 in stamp duty alone. Victoria and Queensland have different
        rates again. It is not optional and it is rarely discussed upfront.
      </p>

      <p style={AS.p}>
        If you are buying a vehicle above the luxury car tax threshold, the federal government
        adds LCT on top. For fuel-efficient vehicles, the 2025 to 2026 threshold sits at around
        $91,000. For other vehicles, it is around $80,000. The rate is 33 percent on the amount
        above the threshold. One of the lesser-known advantages of buying a demo car is that a
        vehicle that previously exceeded the threshold may now sit below it, eliminating the
        LCT entirely.
      </p>

      <p style={AS.p}>
        ABN holders have additional considerations. If your vehicle is used for business purposes,
        you may be able to claim the GST component back. A demo car bought for business use can
        deliver GST savings on top of the price discount.
      </p>

      <Link
        href="/tools/stamp-duty-calculator"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(204,218,71,0.09)", border: "0.5px solid rgba(204,218,71,0.35)", borderRadius: "10px", padding: "14px 18px", textDecoration: "none", marginBottom: "10px", gap: "12px" }}
      >
        <div>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#7a8a00", letterSpacing: "0.08em", marginBottom: "4px" }}>FREE TOOL</div>
          <div style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3 }}>Stamp Duty Calculator for All Australian States</div>
          <div style={{ fontSize: "12px", color: "#888", marginTop: "3px" }}>Enter your state and vehicle price to get an instant estimate</div>
        </div>
        <div style={{ fontSize: "20px", color: "#CCDA47", flexShrink: 0 }}>→</div>
      </Link>

      <ArticleCard
        href="/blog/car-stamp-duty-australia-explained"
        category="Buying Guide"
        title="What Is Stamp Duty on a Car in Australia? The Hidden Cost Most Buyers Don't See Coming"
        readTime="6 min read"
      />
      <ArticleCard
        href="/blog/luxury-car-tax-australia"
        category="Buying Guide"
        title="Luxury Car Tax in Australia. What It Is and How It Affects Your Next Car Purchase"
        readTime="8 min read"
      />
      <ArticleCard
        href="/blog/business-car-gst-demo-car-australia"
        category="Business"
        title="Running a Business in Australia? Here's What a Demo Car Actually Saves You"
        readTime="5 min read"
      />

      <h2 style={AS.h2}>Finance and Tax Strategies</h2>

      <p style={AS.p}>
        A novated lease is a salary packaging arrangement where your employer deducts your car
        payments from your pre-tax salary. For employees on higher marginal tax rates, the
        effective saving can be substantial. The calculation involves the Fringe Benefits Tax,
        which offsets some of the pre-tax advantage, but for many buyers it still represents a
        net gain. Electric vehicles currently attract an FBT exemption, making novated leasing
        particularly attractive for EV purchases.
      </p>

      <p style={AS.p}>
        For ABN holders, the timing of a car purchase can affect how much you can claim in the
        current financial year. The Instant Asset Write-Off, the car limit, and the rules around
        business-use percentage all interact. Buying before June 30 can lock in deductions that
        would otherwise fall into the next financial year.
      </p>

      <ArticleCard
        href="/blog/novated-lease-australia"
        category="Buying Guide"
        title="What Is a Novated Lease and Is It Worth It in Australia?"
        readTime="8 min read"
      />
      <ArticleCard
        href="/blog/novated-lease-worth-it-australia"
        category="Buying Guide"
        title="Is a Novated Lease Worth It in Australia"
        readTime="8 min read"
      />
      <ArticleCard
        href="/blog/novated-lease-vs-car-loan-australia"
        category="Buying Guide"
        title="Novated Lease vs Car Loan. Which Option Costs Less Over Five Years"
        readTime="8 min read"
      />
      <ArticleCard
        href="/blog/eofy-car-tax-benefits-australia"
        category="Buying Guide"
        title="Should You Buy a Car Before EOFY? A Guide for Australian ABN Holders"
        readTime="7 min read"
      />

      <h2 style={AS.h2}>When to Buy and How to Negotiate</h2>

      <p style={AS.p}>
        Dealership pricing is not fixed. The price on the sticker is a starting point, and
        experienced buyers treat it that way. The single most important factor in getting a
        lower price is timing. Dealers operate against monthly sales targets set by the
        manufacturer. In the final three to five business days of each month, the pressure to
        close deals is at its highest. Discounts that would not have been approved earlier in
        the month are suddenly possible.
      </p>

      <p style={AS.p}>
        Beyond timing, preparation matters. Knowing the drive-away price, not just the drive-away
        price minus on-road costs, understanding what comparable vehicles are selling for, and
        being willing to walk away all shift leverage toward the buyer. Dealers will offer a price,
        but that is rarely the floor.
      </p>

      <ArticleCard
        href="/blog/best-time-to-buy-a-car-australia"
        category="Buying Guide"
        title="The Best Time to Buy a Car in Australia"
        readTime="7 min read"
      />
      <ArticleCard
        href="/blog/how-to-negotiate-car-price-australia"
        category="Buying Guide"
        title="How to Negotiate a Car Price at an Australian Dealership"
        readTime="8 min read"
      />
      <ArticleCard
        href="/blog/end-of-month-car-deals-explained"
        category="Insider Guide"
        title="End of Month Car Deals Explained. Secrets Dealers Won't Tell You"
        readTime="7 min read"
      />
      <ArticleCard
        href="/blog/how-low-can-dealer-go-new-car-price"
        category="Buying Guide"
        title="How Low Can a Dealer Go on a New Car Price in Australia"
        readTime="8 min read"
      />

      <h2 style={AS.h2}>Road Rules Worth Knowing Before You Drive</h2>

      <p style={AS.p}>
        Once you have the car, there are a few Australian road rules that catch new or recent
        arrivals off guard. NSW applies double demerit points during certain public holiday
        periods. This is commonly misunderstood as a doubled fine, but the fine stays the same.
        Only the demerit points double. Losing a licence during a holiday period is a real risk
        if you are already close to the limit.
      </p>

      <p style={AS.p}>
        Australia also has no cash toll booths. Every toll road in the country operates on a
        camera system that reads your number plate. Without an e-tag or a registered pass, you
        will still be charged, but with an added fee on top. Rental cars have their own billing
        arrangements that are worth understanding before you pick up the keys.
      </p>

      <ArticleCard
        href="/blog/nsw-driving-fines-school-zone-double-demerit"
        category="NSW Road Rules"
        title="NSW Double Demerit Fines. Most Drivers Get This Wrong"
        readTime="6 min read"
      />
      <ArticleCard
        href="/blog/australia-toll-roads-etag-guide"
        category="Living in Australia"
        title="Australia Has No Toll Booths. Here's What That Means."
        readTime="7 min read"
      />
      <ArticleCard
        href="/news/australia-new-road-rules-july-2026"
        category="Road Rules"
        title="New Road Rules July 2026. What Changed Across Australia"
        readTime="5 min read"
      />

      <hr style={AS.divider} />

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>Ready to find a deal?</div>
        <div style={AS.ctaDesc}>
          Browse current clearance and demo vehicles available now from Australian dealerships.
        </div>
        <Link href="/listings" style={AS.ctaBtn}>
          View demo car listings →
        </Link>
      </div>
    </>
  );
}
