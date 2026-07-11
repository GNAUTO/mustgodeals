import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function BydWrongModelYearAustraliaFullRefundContent() {
  return (
    <>
      <p style={AS.p}>
        More than 1,200 Australian customers who contracted to buy 2026 model year BYD vehicles
        received cars built to 2025 specifications instead. After an investigation by ABC News brought
        the issue to public attention, BYD reversed its initial compensation offer and committed
        to full refunds for all 1,265 affected buyers.
      </p>

      <p style={AS.p}>
        The vehicles involved include both electric and plug-in hybrid models.
        Affected customers are spread across the country, with a concentration in Melbourne and Sydney.
      </p>

      {/* BYD logo */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", margin: "1.75rem 0 1.5rem", padding: "1rem 1.25rem", background: "#F8F8F4", borderRadius: "8px", border: "0.5px solid rgba(0,0,0,0.08)" }}>
        <Image
          src="/images/news/BYD Offers Full Refunds/BYD Logo images.png"
          alt="BYD Company logo"
          width={120}
          height={48}
          style={{ objectFit: "contain", flexShrink: 0 }}
        />
        <p style={{ fontSize: "11px", color: "#888", margin: 0, lineHeight: 1.5 }}>
          Image: BYD Company Ltd logo, Wikimedia Commons,{" "}
          <a
            href="https://creativecommons.org/licenses/by-sa/4.0/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#888" }}
          >
            CC BY SA 4.0
          </a>
        </p>
      </div>

      <h2 style={AS.h2}>From $1,100 to a Full Refund</h2>

      <p style={AS.p}>
        When customers first raised the discrepancy, BYD offered a payment of{" "}
        <span style={AS.highlight}>$1,100 per vehicle</span>, an amount roughly equivalent to the
        dealer delivery charge. Affected owners in Melbourne and Sydney were not satisfied with that
        response, pointing to potential resale value losses that the fixed payment did not come close
        to covering.
      </p>

      <p style={AS.p}>
        Following ABC News reporting on the matter, BYD announced it would offer{" "}
        <span style={AS.highlight}>full refunds to all 1,265 affected customers</span>. The company
        did not specify a deadline for the refund process, but the commitment covers the entire
        purchase price for any buyer who chooses to return their vehicle.
      </p>

      <h2 style={AS.h2}>What BYD Says Happened</h2>

      <p style={AS.p}>
        A BYD spokesperson described the situation as{" "}
        <span style={AS.highlight}>&ldquo;an administrative error&rdquo;</span>, attributing it to
        internal confusion between the date a vehicle left the factory and the date it was actually
        manufactured. The company maintains that the vehicles fully comply with Australian design
        rules and that the issue has no effect on warranty coverage or driving performance.
      </p>

      <p style={AS.p}>
        The mix-up appears to be linked to BYD&rsquo;s rapid growth in Australia. The brand recently
        overtook all but Toyota in monthly new vehicle sales, and to keep pace with demand the company
        had been using its own dedicated cargo vessels to speed up deliveries from Chinese factories.
        The accelerated logistics chain is understood to be the context in which the year discrepancy
        went undetected.
      </p>

      <h2 style={AS.h2}>Resale Value and Insurance</h2>

      <p style={AS.p}>
        Customers&rsquo; primary concern has been the effect on resale value. A car listed as a
        2025 model typically commands a lower price in the used market than an equivalent 2026 model,
        and buyers who contracted for the newer year argue the difference in value exceeds any fixed
        payment.
      </p>

      <p style={AS.p}>
        Insurers have indicated that a one-year difference in manufacture date is unlikely to
        significantly change premiums. However, insurance industry representatives have advised all
        affected customers to notify their insurer of the corrected model year, to ensure policy
        documentation accurately reflects the vehicle being covered.
      </p>

      <h2 style={AS.h2}>Regulators Weigh In</h2>

      <p style={AS.p}>
        A consumer policy researcher has argued the conduct may constitute misleading or deceptive
        behaviour under the Australian Consumer Law and has called on the Australian Competition
        and Consumer Commission to open a formal investigation. The ACCC has not confirmed whether
        it will do so, but has directed consumers to lodge complaints through their state or territory
        consumer protection agency and through the ACCC&rsquo;s own reporting process.
      </p>

      <p style={AS.p}>
        At the federal level, the assistant minister responsible for competition policy has flagged
        that the government is considering new penalty provisions for suppliers and manufacturers
        that fail to honour their obligations to repair, replace, or refund under Australian Consumer
        Law. The BYD situation is consistent with the type of case that prompted that review.
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>WHAT TO CHECK ON ANY NEW CAR DELIVERY</div>
        <ol style={AS.tipList}>
          <li style={AS.tipItem}>Compare the model year on the delivery documentation with the year stated in your purchase contract before you sign the handover papers</li>
          <li style={AS.tipItem}>Locate the VIN (the 17-character code on the dashboard near the windscreen or on the door frame) and ask the dealer to confirm the build date recorded against it</li>
          <li style={AS.tipItem}>If there is any discrepancy, raise it with the dealer in writing before taking the keys. Do not sign until the issue is resolved or the dealer provides a written commitment</li>
          <li style={AS.tipItem}>If your insurer has already issued a policy for the vehicle, notify them of the correct model year as soon as possible</li>
        </ol>
      </div>

      <div style={AS.sourceBox}>
        <span style={AS.sourceLabel}>SOURCE</span>
        <span style={{ fontSize: "13px", color: "#555" }}>ABC News Australia (exclusive reporting)</span>
      </div>
    </>
  );
}
