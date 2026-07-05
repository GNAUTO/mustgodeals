import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function MaseratiGrecale2027AustraliaContent() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            <Image
              src="https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg"
              alt="2027 Maserati Grecale SUV"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Maserati Media</p>
          </div>

          <p style={AS.p}>
            Maserati has confirmed the expanded 2027 Grecale SUV lineup will arrive in Australia
            in early 2027, bringing a wider spread of the twin-turbocharged V6 engine and
            significant updates to the all-electric Folgore variant.
          </p>

          <p style={AS.p}>
            The Grecale, which first arrived in Australia in 2023 as the brand&rsquo;s entry
            into the premium mid-size SUV segment, receives its first major product update for
            2027. The headline change is the broader availability of the 3.0-litre twin-turbo
            V6 engine — previously exclusive to the range-topping Trofeo — across a new
            mid-range configuration.
          </p>

          <h2 style={AS.h2}>V6 power spreads down the range</h2>

          <p style={AS.p}>
            The new mid-range V6 configuration produces 390kW and 550Nm, compared to the
            Trofeo&rsquo;s 430kW output. Maserati claims 0&ndash;100km/h in{" "}
            <span style={AS.highlight}>4.1 seconds</span> for this new variant, making it one
            of the quickest SUVs available in Australia at its expected price point.
          </p>

          <p style={AS.p}>
            The V6 engine expansion addresses one of the consistent criticisms levelled at the
            Grecale since launch: that the four-cylinder base models felt underpowered relative
            to the asking price and Maserati&rsquo;s sporting identity. Buyers who want the
            Maserati sound and performance character without committing to the full Trofeo
            specification now have a middle path.
          </p>

          <h2 style={AS.h2}>Folgore EV gains meaningful range</h2>

          <p style={AS.p}>
            The all-electric Folgore receives an updated battery pack for 2027, with capacity
            increasing from 105kWh to 118kWh. Maserati claims WLTP range improves from 464 to
            approximately <span style={AS.highlight}>535 kilometres</span> in the standard
            configuration — a meaningful step for a market where real-world EV range in warm
            climates has been a persistent concern.
          </p>

          <p style={AS.p}>
            Revised thermal management is also part of the update. Maserati says the system
            has been specifically tuned for warmer operating conditions, which should address
            the range degradation in summer temperatures that some early Australian Folgore
            owners reported.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>FOLGORE CHARGING UPDATE</div>
            <p style={AS.calloutText}>
              The 2027 Folgore gains DC fast-charging compatibility up to 350kW, up from 150kW
              on the outgoing model. Maserati claims a 20–80% charge in approximately
              18 minutes on a compatible charger.
            </p>
          </div>

          <h2 style={AS.h2}>Updated interior and technology</h2>

          <p style={AS.p}>
            Interior changes across the Grecale range centre on a revised Maserati Touch Control
            Plus infotainment system, now running on updated processor hardware. Response times
            and interface fluidity — two common criticisms of earlier models — should improve
            as a result.
          </p>

          <p style={AS.p}>
            New sustainable material options join the upholstery lineup, including recycled
            fabric and natural fibre choices under Maserati&rsquo;s sustainability programme,
            alongside an expanded ambient lighting system with a broader colour palette.
          </p>

          <p style={AS.p}>
            Externally the changes are restrained: a revised front bumper with updated air
            intake geometry and new LED daytime running light signatures are the most visible
            changes, alongside new wheel designs available across the range.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>Australian pricing and timing</h2>

          <p style={AS.p}>
            Maserati Australia has not confirmed 2027 pricing. The current Grecale lineup starts
            from approximately{" "}<span style={AS.highlight}>$129,990 drive away</span> for the
            GT, rising to $229,990 for the Trofeo V6. The new mid-range V6 variant is expected
            to sit around $180,000&ndash;$190,000, though Maserati has declined to confirm
            figures ahead of the official announcement.
          </p>

          <p style={AS.p}>
            First customer deliveries in Australia are expected in the{" "}
            <span style={AS.highlight}>first quarter of 2027</span>. An Australian reveal event
            and official pricing announcement are planned for later in 2026.
          </p>

          <p style={AS.p}>
            The 2027 Grecale competes in Australia against the Porsche Macan, BMW X3 M
            Competition, Mercedes-Benz GLC 63 AMG, and Alfa Romeo Stelvio Quadrifoglio in
            the premium performance mid-size SUV segment.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.carsales.com.au"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              carsales.com.au ↗
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
