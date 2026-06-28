import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function PolestarUsBanConnectedVehicleRuleContent() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.topgear.com/sites/default/files/2026/06/5193-694911-1-5%20%281%29.jpg?w=892&h=502"
              alt="Polestar vehicle"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Polestar Media</p>
          </div>

          <p style={AS.p}>
            Polestar has confirmed it will no longer be able to sell new vehicles in the
            United States from the 2027 model year, after the US Department of Commerce&rsquo;s
            Bureau of Industry and Security formally banned the brand under the new{" "}
            <span style={AS.highlight}>Connected Vehicle Rule</span>.
          </p>

          <h2 style={AS.h2}>Why Polestar Was Targeted</h2>

          <p style={AS.p}>
            The rule targets vehicles with hardware or software linked to China or Russia,
            citing national security risks. Polestar, owned by Chinese automotive giant{" "}
            <span style={AS.highlight}>Geely</span>, builds its 2, 4, and new 5 saloon in
            China — placing all three squarely in the crosshairs of the regulation. Even the
            Polestar 3 SUV, which is manufactured in the United States, will not be exempt
            from the ban.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>BIS STATEMENT</div>
            <p style={AS.calloutText}>
              &ldquo;Companies from China or Russia may be compelled to share data or allow
              remote access to connected vehicles in the United States,&rdquo; the Bureau of
              Industry and Security stated, making the sale of such vehicles an unacceptable
              security risk.
            </p>
          </div>

          <h2 style={AS.h2}>What Happens to US Customers</h2>

          <p style={AS.p}>
            Polestar has confirmed it will continue to sell existing stock of the 3 and 4 in
            the US until supplies run out, and has committed to ongoing service support for
            existing customers after its market exit. The US currently accounts for just{" "}
            <span style={AS.highlight}>six per cent</span> of Polestar&rsquo;s global retail
            sales — limiting the financial impact of the exit on the brand overall.
          </p>

          <h2 style={AS.h2}>What&rsquo;s Next for Polestar</h2>

          <p style={AS.p}>
            CEO Michael Lohscheller struck a forward-looking tone in response, pointing to
            Europe as the brand&rsquo;s primary growth engine and confirming expansion plans
            across Southeast Asia, Eastern Europe, Latin America, and Canada. He also confirmed
            a new <span style={AS.highlight}>high-riding estate variant of the Polestar 4</span>{" "}
            is planned for the second half of 2026, followed by an all-new Polestar 2 in 2027,
            and the upcoming Polestar 7 compact SUV thereafter.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>What This Means for Australia</h2>

          <p style={AS.p}>
            For Australian buyers, the ban has no direct impact — Polestar continues to operate
            freely in this market. However, the development signals a broader shift in how Western
            governments are approaching Chinese-linked automotive technology, a trend that may
            eventually shape which vehicles are available globally.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.topgear.com/car-news/electric/polestar-banned-us-market-connected-vehicle-rule"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              Top Gear ↗
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
