import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

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

export default function BuyNewCarRunOutModelContent() {
  return (
    <>
      <div style={AS.callout}>
        <div style={AS.calloutTitle}>WHO THIS IS FOR</div>
        <p style={AS.calloutText}>
          If you plan to keep a car for a long time, the final model year before a full model
          change is the most sensible choice. It is the most refined the car will ever be,
          the discount is at its largest, and the options are at their most generous.
        </p>
      </div>

      <p style={AS.p}>
        This is advice worth considering for anyone who buys a car and keeps it for ten or
        fifteen years. When choosing a new car, selecting the final model year before a full
        model change, the run out, gives you a considerably better car for the same budget.
        Below is why, along with an explanation of why the one drawback people commonly raise
        does not apply to those who keep their cars a long time.
      </p>

      <h2 style={AS.h2}>It is the most thoroughly refined version of the car</h2>

      <p style={AS.p}>
        The first point worth making is refinement. A model is produced over several years,
        and throughout that time the manufacturer gradually resolves the faults and shortcomings
        that appeared early on. The niggles and design compromises a first year car carries are,
        by the final year, largely sorted. In other words, the model immediately before a full
        change is the most developed and most complete version of that generation. The longer
        you intend to keep the car, the more that refinement is worth.
      </p>

      <h2 style={AS.h2}>The options are at their most generous</h2>

      <p style={AS.p}>
        Option availability also favours the final year. Mid life model years often see options
        reshuffled as the range is revised, which can leave the configuration awkward. The final
        year tends to do the opposite, loading the options on to help clear stock. Features
        previously offered only as extras are frequently included as standard, and well equipped
        limited editions often appear at sensible prices. The result is a better specified car
        for the same money.
      </p>

      <h2 style={AS.h2}>The price is at its best</h2>

      <p style={AS.p}>
        The value is also strongest at this point. With a full model change approaching, a
        dealer needs to clear existing stock to make room for the incoming model. Naturally,
        this is when discounts are at their largest. In Australia this is known as the run out
        sale, and there is no better time to buy than just before the model year changes over.
      </p>

      <h2 style={AS.h2}>How to think about depreciation</h2>

      <p style={AS.p}>
        There is, of course, a common concern. Buy the final model year, the argument goes,
        and the moment the new model arrives yours becomes the old generation and depreciates
        quickly. It is a fair point. When the new model launches, the existing car becomes a
        generation old and its used value falls accordingly. However, this only genuinely
        matters for those who intend to resell within a few years, since they carry that
        difference at resale. For those who keep a car for ten or fifteen years and run it
        until the end of its life, the situation is different. With no intention to resell,
        the speed of depreciation makes little difference. The drawback most people worry
        about effectively disappears for the long term owner. That is precisely why those
        who keep their cars longest stand to benefit most from buying the final model year.
      </p>

      <h2 style={AS.h2}>Two things worth confirming</h2>

      <p style={AS.p}>
        A few points are worth checking before you commit. First, confirm the build date
        against the compliance date. Some final year stock has been stored for a considerable
        period after being manufactured. The registration may be new while the actual build
        date is more than a year old, in which case the tyres and battery will have aged
        accordingly, and the listed year may work against you should you ever sell. If the
        discount reflects this, there is no issue. If it does not, it is reasonable to ask
        for a further reduction. Second, consider whether the incoming model offers a
        meaningful advance in safety or efficiency. On a car you will keep for fifteen years,
        going without a new safety system or a hybrid option for that entire period is worth
        weighing carefully. Once these two points are settled, the final model year is the
        wisest choice a long term owner can make.
      </p>

      <p style={AS.p}>
        While many wait for the new model, choosing the most complete final model year is a
        thoroughly sound decision. The longer you keep it, the clearer its value becomes.
      </p>

      <div style={clusterBox}>
        <div style={clusterHeading}>Related Guides</div>
        <Link href="/blog/best-time-to-buy-a-car-australia" style={clusterCard}>
          <div style={clusterTitle}>The Best Time to Buy a Car in Australia</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/how-to-negotiate-car-price-australia" style={clusterCard}>
          <div style={clusterTitle}>How to Negotiate a Car Price at a Dealership in Australia</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/what-is-a-dealer-clearance-car-australia" style={clusterCard}>
          <div style={clusterTitle}>What Is a Dealer Clearance Car in Australia</div>
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
