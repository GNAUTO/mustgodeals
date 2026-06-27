import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function KiaPv5PassengerAustralia2027Content() {
  return (
    <>

          {/* Image 1 — hero */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.kia.com/content/dam/kwcms/kme/global/en/assets/contents/pbv/5/freecoding/pv5-passenger/Usecase_KV_01_m.jpg"
              alt="Kia PV5 Passenger electric people mover"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Kia Media</p>
          </div>

          <p style={AS.p}>
            Kia Australia has confirmed the PV5 Passenger electric people mover is coming to
            Australia in the <span style={AS.highlight}>fourth quarter of 2026</span>, making
            it the first electric people mover available in the local market. It will sit
            alongside the diesel and hybrid Carnival — a segment the Carnival has dominated
            for years — but with a very different pitch: zero emissions, lower running costs,
            and a clever cabin layout.
          </p>

          <h2 style={AS.h2}>What It Is</h2>

          <p style={AS.p}>
            The PV5 Passenger is a seven-seat, three-row electric van built on Kia&rsquo;s
            dedicated <span style={AS.highlight}>E-GMP.S platform</span> — the same
            underpinning the PV5 Cargo that launched in Australia from $55,990 earlier this
            year. It measures 4,695mm long, 1,895mm wide, and 1,905mm tall, making it nearly
            400mm shorter than a Carnival, though it sits about 150mm taller.
          </p>

          <p style={AS.p}>
            Seven seats are arranged in a{" "}
            <span style={AS.highlight}>2+2+3 configuration</span>, with the two second-row
            seats offset to allow walkthrough access to the third row from the left-hand
            sliding door — a practical touch for kerbside boarding. Inside, a 7.5-inch
            digital instrument cluster pairs with a 12.9-inch infotainment touchscreen running
            Android Automotive OS, with Apple CarPlay and Android Auto as standard.
          </p>

          <h2 style={AS.h2}>Range and Charging</h2>

          <p style={AS.p}>
            All PV5s share a single-motor, front-wheel-drive setup producing{" "}
            <span style={AS.highlight}>120kW and 250Nm</span>. In South Korea, the
            seven-seat PV5 Passenger claims 358km of range, and given that Kia quotes
            416km WLTP for the Australian-spec Cargo variant, the Passenger is expected
            to land around <span style={AS.highlight}>390km</span> locally after tuning.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>FAST CHARGING</div>
            <p style={AS.calloutText}>
              DC fast charging from 10 to 80 percent takes approximately 30 minutes —
              enough to add around 280km of range during a typical motorway stop.
            </p>
          </div>

          <h2 style={AS.h2}>What Will It Cost?</h2>

          <p style={AS.p}>
            Kia hasn&rsquo;t confirmed Australian pricing yet, but the numbers from other
            markets give a useful reference point. The Korean-market PV5 Passenger starts
            from around <span style={AS.highlight}>A$42,400</span>, while the PV5 Cargo
            launched locally at $55,990. If the gap between Cargo and Passenger pricing
            follows a similar pattern to what&rsquo;s been seen elsewhere, expect the
            PV5 Passenger to land somewhere in the{" "}
            <span style={AS.highlight}>$60,000 range</span> before on-road costs — well
            below the Volkswagen ID. Buzz, which starts at $75,990.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>Why It Matters for Australia</h2>

          <p style={AS.p}>
            The people mover segment in Australia has long been the domain of the Kia Carnival
            and Toyota HiAce. The PV5 Passenger doesn&rsquo;t try to replace them outright —
            it&rsquo;s shorter, lighter, and more urban-focused. But for families, shuttle
            operators, and fleet buyers looking to electrify without paying EV premium prices,
            it arrives at the right time.
          </p>

          <p style={AS.p}>
            Exact pricing, specifications, and final range figures will be confirmed closer
            to the fourth-quarter launch.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.kia.com/eu/pbv/vehicles/pv5-passenger/discover/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              Kia PV5 Passenger ↗
            </a>
          </div>

          {/* CTA */}
          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>Get deal alerts on new arrivals</div>
            <p style={AS.ctaDesc}>
              Be first to know when clearance vehicles hit the market — updated weekly
            </p>
            <Link href="/coming-soon" style={AS.ctaBtn}>Get free alerts →</Link>
          </div>

    </>
  );
}
