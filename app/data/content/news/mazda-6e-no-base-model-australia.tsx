import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function Mazda6eNoBaseModelAustraliaContent() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/a7707aea-83a0-5a72-b6aa-990fa9d50000"
              alt="Mazda 6e electric sedan"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Mazda Media</p>
          </div>

          <p style={AS.p}>
            Mazda Australia has confirmed it has no plans to introduce a cheaper base model
            beneath the current GT grade for its 6e electric sedan — at least in the near term.
          </p>

          <h2 style={AS.h2}>Where the 6e Sits in the Market</h2>

          <p style={AS.p}>
            Currently priced from <span style={AS.highlight}>$49,990</span> before on-road
            costs, the Mazda 6e sits as Australia&rsquo;s most affordable rear-wheel-drive
            electric sedan following the discontinuation of the BYD Seal Dynamic. It is also
            level with the front-wheel-drive Kia EV4 Air as the cheapest electric sedan on
            the market.
          </p>

          {/* Image 2 */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/2c71b633-ce6c-56ce-a8df-53a355350000"
              alt="Mazda 6e interior"
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Mazda Media</p>
          </div>

          <h2 style={AS.h2}>GT vs Atenza — What You Get</h2>

          <p style={AS.p}>
            The 6e is offered in two grades — E35 GT and E35 Atenza — both sharing the same
            electric motor and battery pack. The <span style={AS.highlight}>$3,000 step</span> to
            the Atenza at $52,990 adds genuine leather upholstery, synthetic suede trim, and a
            two-tone leather steering wheel. Both grades come standard with a panoramic glass
            roof, heated and ventilated front seats, a heated steering wheel, augmented-reality
            head-up display, and a 14-speaker Sony audio system.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>GT STANDARD EQUIPMENT</div>
            <p style={AS.calloutText}>
              Panoramic glass roof · Heated &amp; ventilated front seats · Heated steering wheel ·
              AR head-up display · 14-speaker Sony audio — all from $49,990 before on-road costs.
            </p>
          </div>

          {/* Image 3 */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/24cb4100-4f97-54b1-80c8-72b215c50000"
              alt="Mazda 6e exterior detail"
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Mazda Media</p>
          </div>

          <h2 style={AS.h2}>What Mazda Said</h2>

          <p style={AS.p}>
            Mazda Australia national manager for product and business strategy Daniel Wakelam
            said a stripped-back entry grade was not really under consideration.{" "}
            <span style={AS.highlight}>&ldquo;The GT&rsquo;s very well specced as it is,&rdquo;</span>{" "}
            he noted, adding that the brand would always look at options if they became available.
          </p>

          <p style={AS.p}>
            Managing director Vinesh Bhindi echoed that sentiment, pointing to Mazda&rsquo;s
            historical pattern of customers gravitating toward mid-to-high grades at launch. He
            left the door open to future changes based on customer feedback, but indicated the
            two-grade lineup is the right starting point for now.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>Fleet Buyers Could Change the Equation</h2>

          <p style={AS.p}>
            Fleet customers could eventually open the door to broader grade options. Bhindi noted
            growing interest from businesses looking to shift their vehicle portfolios toward EVs,
            driven in part by new <span style={AS.highlight}>carbon footprint reporting requirements</span>.
            For now, however, the private buyer remains the priority.
          </p>

          {/* Image 4 */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/61e420dc-dbac-590a-acad-7f452ed50000"
              alt="Mazda 6e charging"
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Mazda Media</p>
          </div>

          <p style={AS.p}>
            For Australian buyers, the 6e&rsquo;s GT grade offers strong value at its price
            point — but those looking for an even more accessible entry into Mazda&rsquo;s EV
            lineup may need to wait.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.drive.com.au/news/mazda-6e-no-cheap-base-model-australia/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              Drive.com.au ↗
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
