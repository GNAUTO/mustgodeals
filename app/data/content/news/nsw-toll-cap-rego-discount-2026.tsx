import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function NswTollCapRegoDiscount2026Content() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.mynrma.com.au/-/media/nrmaheadless/open-road/2026/news/budget-news/toll-road-640x360.jpg"
              alt="Sydney toll road"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: NRMA</p>
          </div>

          <p style={AS.p}>
            NSW drivers are about to pay less to get around, with two cost-of-living measures
            confirmed in the state&rsquo;s 2026-27 budget, handed down by Treasurer Daniel
            Mookhey on June 23.
          </p>

          <h2 style={AS.h2}>Weekly Toll Cap Drops to $50</h2>

          <p style={AS.p}>
            From <span style={AS.highlight}>July 1</span>, the weekly cap on Sydney toll spending
            drops from $60 to $50. The cap stays in place until July 2027, and the change is
            expected to bring an extra <span style={AS.highlight}>200,000 drivers</span> into the
            eligible threshold, pushing the total number of motorists able to claim toll relief
            past 1.1 million. For those already claiming, the government estimates an additional{" "}
            <span style={AS.highlight}>$520 back</span> over the next 12 months.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>TOLL RELIEF. KEY NUMBERS</div>
            <p style={AS.calloutText}>
              Weekly cap: $60 → $50 from July 1 · Extra 200,000 drivers now eligible ·
              Total eligible motorists: 1.1M+ · Additional saving for existing claimants: ~$520/year ·
              $10 admin fee per notice: abolished.
            </p>
          </div>

          <p style={AS.p}>
            On top of the lower cap, the state is scrapping the $10 administration fee currently
            charged per toll relief notice, a change worth roughly{" "}
            <span style={AS.highlight}>$60 million annually</span> across the system. Much of
            that saving comes from a shift toward digital communication with toll account holders.
          </p>

          <h2 style={AS.h2}>Rego $100 Cheaper from September</h2>

          <p style={AS.p}>
            Vehicle registration is also getting cheaper. From{" "}
            <span style={AS.highlight}>September 1</span>, car owners will pay $100 less to renew
            their registration, while motorcycle owners save $80. The discount applies
            automatically to all renewal notices, no application required. The government
            estimates the combined saving across the state&rsquo;s{" "}
            <span style={AS.highlight}>4.4 million registered vehicles</span> at around
            $435 million.
          </p>

          {/* Image 2 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.mynrma.com.au/-/media/nrmaheadless/open-road/2026/travel/sydney-to-lithgow/pow-lookout-632x421.jpg"
              alt="NSW road infrastructure"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: NRMA</p>
          </div>

          <h2 style={AS.h2}>NRMA Welcomes Automated Relief</h2>

          <p style={AS.p}>
            NRMA spokesperson Peter Khoury welcomed the measures, particularly the shift to
            automated toll relief. &ldquo;Families are struggling to make ends meet and there
            aren&rsquo;t enough hours in the day,&rdquo; he said.{" "}
            &ldquo;Automating the toll relief system isn&rsquo;t just a good cost of living
            initiative, it means families have{" "}
            <span style={AS.highlight}>one less thing to worry about</span>.&rdquo;
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>$8.7B Roads Budget and Major Projects</h2>

          <p style={AS.p}>
            The budget also commits <span style={AS.highlight}>$8.7 billion</span> in capital
            expenditure to NSW roads for the coming year, up from $7.5 billion previously, with
            $60.2 billion allocated to transport infrastructure over the next four years. Major
            projects receiving funding include the Western Harbour Tunnel, the M6 Extension Stage
            One, and the Coffs Harbour bypass.
          </p>

          <p style={AS.p}>
            For Sydney commuters juggling tolls and registration costs alongside everything else,
            both changes land at a time when relief is clearly overdue.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.mynrma.com.au/open-road/news/budget-2026-toll-cap-rego"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              NRMA Open Road ↗
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
