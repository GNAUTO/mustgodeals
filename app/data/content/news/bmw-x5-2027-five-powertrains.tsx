import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function BmwX52027FivePowertrainsContent() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            <Image
              src="https://mediapool.bmwgroup.com/cache/P9/202606/P90645286/P90645286-the-new-bmw-x5-prototype-spartanburg-06-2026-2250px.jpg"
              alt="2027 BMW X5 prototype"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: BMW Group Media</p>
          </div>

          <p style={AS.p}>
            BMW has confirmed the next-generation X5 is in its final stages of development,
            with a world premiere expected in the coming weeks. What makes this particular
            model unlike anything BMW has produced before is its powertrain lineup, the
            2027 X5 is the first BMW model built to house{" "}
            <span style={AS.highlight}>five separate powertrains</span> in a single body:
            petrol, diesel, plug-in hybrid, battery-electric, and eventually a hydrogen
            fuel cell variant.
          </p>

          <h2 style={AS.h2}>The Lineup</h2>

          <p style={AS.p}>
            The X5 40 xDrive will produce <span style={AS.highlight}>400 hp</span>, the
            X5 50e xDrive plug-in hybrid is rated at <span style={AS.highlight}>490 hp</span>,
            and the iX5 60 xDrive electric comes in at{" "}
            <span style={AS.highlight}>578 hp</span>. The X5 40 xDrive runs 0&ndash;62 mph
            in 5.4 seconds, the X5 50e xDrive in 5.0 seconds, and the iX5 60 xDrive in
            4.7 seconds.
          </p>

          <p style={AS.p}>
            The electric iX5 is the headline act. According to leaked EPA and CARB
            certification data, the iX5 60 xDrive has a dual-motor AWD setup producing
            around 569 hp, with a 10&ndash;80% charging session expected to take about
            25 minutes on a compatible DC fast charger.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>IX5 CHARGING</div>
            <p style={AS.calloutText}>
              Based on EPA and CARB certification data, the iX5 60 xDrive is expected to
              complete a 10&ndash;80% DC fast-charge in approximately 25 minutes, putting
              it on par with the best fast-charging EVs currently on sale.
            </p>
          </div>

          <h2 style={AS.h2}>Hydrogen Comes Later</h2>

          <p style={AS.p}>
            The hydrogen fuel cell version, the iX5 Hydrogen, is built in collaboration
            with Toyota and is scheduled for launch in{" "}
            <span style={AS.highlight}>2028</span>. BMW and Toyota have been co-developing
            hydrogen fuel cell technology since 2013, and the iX5 Hydrogen represents the
            first passenger-car result of that partnership reaching the market.
          </p>

          <p style={AS.p}>
            Hydrogen variants are likely to remain limited in volume at launch, tied closely
            to the availability of hydrogen refuelling infrastructure, a network that
            remains in early development in Australia.
          </p>

          <h2 style={AS.h2}>Engineering Behind the Flexibility</h2>

          <p style={AS.p}>
            Front and rear axle carrier mounting points are identical across the ICE, PHEV,
            and BEV versions, only the hardware bolted to them changes. This single-platform
            approach is central to BMW&rsquo;s Neue Klasse strategy, allowing the same
            production line to accommodate radically different drivetrains without retooling.
          </p>

          <p style={AS.p}>
            BMW also targeted even front-to-rear weight distribution on every version, with
            the BEV battery sitting low between the axles. The result is a centre of gravity
            lower than the outgoing X5 across all powertrain variants, a meaningful gain
            for a vehicle that is now considerably heavier in its electric form.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>Australia Timing</h2>

          <p style={AS.p}>
            The 2027 BMW X5 is expected to launch in the{" "}
            <span style={AS.highlight}>October&ndash;December 2026</span> period. Australian
            pricing and variant details are yet to be confirmed, but the X5 has historically
            arrived in Australia within months of its global debut.
          </p>

          <p style={AS.p}>
            The current X5 xDrive40i starts from $119,900 in Australia. With the expanded
            powertrain range and updated platform, a price increase across the lineup is
            widely expected, though BMW Australia has not yet commented on 2027 pricing.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.press.bmwgroup.com/global/article/detail/T0458432EN/on-the-finishing-straight:-the-new-bmw-x5-enters-its-final-test-phase"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              BMW Group Press ↗
            </a>
          </div>

          {/* CTA */}
          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>Get deal alerts on new arrivals</div>
            <p style={AS.ctaDesc}>
              Be first to know when clearance vehicles hit the market, updated weekly
            </p>
            <Link href="/coming-soon" style={AS.ctaBtn}>Get free alerts →</Link>
          </div>

    </>
  );
}
