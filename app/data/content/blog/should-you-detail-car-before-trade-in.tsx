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

export default function ShouldYouDetailCarBeforeTradeInContent() {
  return (
    <>
      <div style={AS.callout}>
        <div style={AS.calloutTitle}>THE SHORT VERSION</div>
        <p style={AS.calloutText}>
          If you are selling to a dealer, paying for a full detail is money down the drain.
          They redo it themselves for a fraction of the price. Give it a quick clean yourself
          and pocket the difference.
        </p>
      </div>

      <p style={AS.p}>
        No. At least not a paid one. If you are selling or trading your car to a dealer, a
        professional detail is money you will not see again. Give it a proper clean yourself
        and leave it at that.
      </p>

      <h2 style={AS.h2}>What the dealer does the second they buy your car</h2>

      <p style={AS.p}>
        Every car a dealer takes in gets reconditioned before it goes back on the lot, and
        yeah, that includes a detail. But they do it through a shop they have a standing deal
        with, at a rate nowhere near what you pay walking in off the street. Detailed or not,
        they are doing it again. So the detail you paid full price for just gets redone on the
        cheap, and you spent money on a job that was always going to happen.
      </p>

      <h2 style={AS.h2}>And they will not pay you back for it</h2>

      <p style={AS.p}>
        No dealer looks at your detailing receipt and bumps up the offer. The number comes
        from age, model, kilometres, condition and what the car is worth wholesale.
        Reconditioning cost is already sitting inside the figure they hand you, so dropping
        a few hundred dollars on a detail does not earn a cent of it back.
      </p>

      <h2 style={AS.h2}>What actually moves the number</h2>

      <p style={AS.p}>
        Here is the part worth doing though. A filthy car really can cost you, not because
        it is dirty, but because dirt hides condition and a dealer just assumes the worst.
        Stained seats, rubbish in the door pockets, a grimy dash, it all reads as a car
        that had a hard life, so they pad the reconditioning estimate to be safe and that
        padding comes straight off your offer. A clean car takes that away. And you can do
        it yourself in an afternoon. Wash it, vacuum it, bin your junk, wipe the dash,
        empty the boot. That is where it ends. Paying a pro for paint correction and a full
        interior extraction before a trade is just covering the dealer's job with your money.
      </p>

      <h2 style={AS.h2}>Selling privately is the exception</h2>

      <p style={AS.p}>
        All of this assumes there is a dealer in the middle. Sell privately and it flips.
        A private buyer is going on their own eyes and their own gut, and a car that looks
        looked after pulls a higher price and sells quicker, so a detail can pay for itself
        there. The rule only holds when the dealer is the one doing the reconditioning for you.
      </p>

      <p style={AS.p}>
        Clean it yourself, keep your money, and let the dealer spend theirs.
      </p>

      <div style={clusterBox}>
        <div style={clusterHeading}>Related Guides</div>
        <Link href="/blog/how-to-negotiate-car-price-australia" style={clusterCard}>
          <div style={clusterTitle}>How to Negotiate a Car Price at a Dealership in Australia</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/best-time-to-buy-a-car-australia" style={clusterCard}>
          <div style={clusterTitle}>The Best Time to Buy a Car in Australia</div>
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
