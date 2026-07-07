import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function Mazda6eCx6eOrdersAustralia2026Content() {
  return (
    <>

          <p style={AS.p}>
            Mazda&rsquo;s electric push in Australia is gathering real momentum. The Mazda 6e sedan
            launched with a limited pre-order offer, the first 300 customers to order a GT would
            receive a free upgrade to the Atenza, worth $3,000, and all{" "}
            <span style={AS.highlight}>300 units sold out within two weeks</span>. Now the CX-6e
            SUV is following the same playbook, and early signs suggest demand could be even stronger.
          </p>

          {/* Image 1 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.mazda.com.au/4966d2/globalassets/vehicle-landing-pages/cx-6e/launch-vlp/assets/au41-p00005750_mazda_cx-6e_vlp_introduction_1300x650px.jpg"
              alt="Mazda CX-6e SUV Australia"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Mazda Australia Media</p>
          </div>

          <h2 style={AS.h2}>The Numbers So Far</h2>

          <p style={AS.p}>
            Mazda Australia&rsquo;s Director of Sales and Marketing Jarrod Gieschen said dealers had
            already exceeded 300 pre-orders for the 6e sedan and reported even greater interest in
            the upcoming CX-6e SUV. &ldquo;We obviously haven&rsquo;t announced pricing yet, but
            the dealers are saying we&rsquo;ve sold these 300 cars and we&rsquo;ve actually got more
            interest in the SUV, waiting for pricing,&rdquo; Gieschen said. &ldquo;If you look at
            the industry, it&rsquo;s about a one to four ratio for sedans to SUVs, so it probably
            makes sense that this vehicle has a lot more volume potential.&rdquo;
          </p>

          <h2 style={AS.h2}>What You&rsquo;re Actually Getting</h2>

          <p style={AS.p}>
            The Mazda 6e is priced from{" "}
            <span style={AS.highlight}>$49,990 before on-road costs</span>, with first deliveries
            due in July 2026. It&rsquo;s bigger, roomier, higher-tech and more luxurious than the
            previous Mazda6, built on a dedicated EV platform and offering a claimed{" "}
            <span style={AS.highlight}>560km WLTP driving range</span>.
          </p>

          <p style={AS.p}>
            The CX-6e SUV is priced from{" "}
            <span style={AS.highlight}>$53,990 before on-road costs</span>, with first deliveries
            expected from September 2026. It&rsquo;s powered by a 78kWh LFP battery and a 190kW
            rear-mounted motor, with a claimed{" "}
            <span style={AS.highlight}>484km WLTP range</span> and 30–80% charging in as little as
            15 minutes.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>PRE-ORDER OFFER</div>
            <p style={AS.calloutText}>
              The first 1,000 customers to pre-order the CX-6e GT will receive a free upgrade to
              the Azami, saving $3,000, the same offer that sold out the 6e sedan allocation in
              two weeks.
            </p>
          </div>

          {/* Image 2 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.mazda.com.au/4966d0/globalassets/vehicle-landing-pages/cx-6e/launch-vlp/assets/au41-p00005750_mazda_cx-6e_exterior_960x480px_01.jpg"
              alt="Mazda CX-6e Exterior"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Mazda Australia Media</p>
          </div>

          <h2 style={AS.h2}>How It Stacks Up</h2>

          <p style={AS.p}>
            The CX-6e&rsquo;s $53,990 starting price undercuts the{" "}
            <span style={AS.highlight}>Tesla Model Y by around $5,000</span>, the BYD Sealion 7 by
            $1,000, and the Zeekr 7X by almost $4,000. For a brand with over 140 dealerships across
            Australia and a strong existing customer base, that price positioning gives it a genuine
            shot at the top-selling EV SUV segment.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>Why It Matters</h2>

          <p style={AS.p}>
            Both models are built through Mazda&rsquo;s joint venture with Changan in China, a
            pragmatic decision that keeps costs down without compromising on the design and driving
            feel Mazda is known for. The 6e was named{" "}
            <span style={AS.highlight}>2026 World Car Design of the Year</span>, and early drive
            reviews have praised both cars for their refinement, cabin quality, and value. If the
            CX-6e demand holds, Mazda could be looking at one of the stronger EV launches Australia
            has seen this year.
          </p>

          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.mazda.com.au/cars/cx-6e/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              mazda.com.au ↗
            </a>
          </div>

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
