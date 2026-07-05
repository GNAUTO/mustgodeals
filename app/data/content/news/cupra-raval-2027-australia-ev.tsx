import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMGS = [
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/0aa62438-5756-5c5b-a0d9-3511a7850000",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/9b00a424-2d0d-5340-a2d7-b6cf5cb50000",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/3498a33e-3f51-567d-b1d9-6f0dd2450000",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/4549b3cd-2351-57ad-89b9-a9858a350000",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/b84ba8c4-efb3-56c1-9a32-5f2551450000",
];

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={AS.imgWrap}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="article-img"
        style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
      />
      <p style={AS.imgCaption}>Image: Cupra Media</p>
    </div>
  );
}

export default function CupraRaval2027AustraliaEvContent() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            <Image
              src={IMGS[0]}
              alt="2027 Cupra Raval electric hatchback Australia"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Cupra Media</p>
          </div>

          <p style={AS.p}>
            Cupra has confirmed the{" "}
            <span style={AS.highlight}>Raval electric hatchback</span> is coming to{" "}
            <span style={AS.highlight}>Australia</span>, with local arrival expected sometime in{" "}
            <span style={AS.highlight}>2027</span> once right-hand drive production gets underway
            in Europe. The Raval is the smallest electric car Cupra has produced and the brand&rsquo;s
            first city car since it separated from Seat roughly a decade ago.
          </p>

          <h2 style={AS.h2}>A City Electric Hatchback With Hot Hatch Ambitions</h2>

          <p style={AS.p}>
            In terms of size, the Raval sits alongside the BYD Atto 1 and Volkswagen Polo,
            measuring <span style={AS.highlight}>4046mm long and 1784mm wide</span>. That puts it
            comfortably in Australia&rsquo;s light car segment, where it would compete with the
            BYD Dolphin, GAC Aion UT, and eventually replace the petrol Polo GTI as the
            Volkswagen Group&rsquo;s city performance offering.
          </p>

          <Img src={IMGS[1]} alt="2027 Cupra Raval electric hatchback Australia exterior" />

          <h2 style={AS.h2}>Pricing Expected Below $40,000 in Australia</h2>

          <p style={AS.p}>
            Pricing hasn&rsquo;t been confirmed for Australia, but Cupra Australia&rsquo;s head of
            product Jeff Shafer told Drive the model is locked in. Working from UK pricing as a
            guide, the entry point is likely to land{" "}
            <span style={AS.highlight}>below $40,000</span> before on-road costs, with performance
            VZ variants pushing into the high-$40,000 range.
          </p>

          <Img src={IMGS[2]} alt="2027 Cupra Raval electric hatchback Australia interior" />

          <h2 style={AS.h2}>Two Battery Options, Up to 440km Range</h2>

          <p style={AS.p}>
            The Raval shares its platform with the Volkswagen ID. Polo EV and is offered overseas
            in two battery configurations. The entry level uses a{" "}
            <span style={AS.highlight}>37kWh lithium-iron-phosphate pack</span> paired with either
            85kW or 100kW motors, offering around 300km of WLTP range. The larger option steps up
            to a <span style={AS.highlight}>52kWh nickel-manganese-cobalt battery</span> with
            motors producing 155kW, or 165kW in the flagship VZ grade, with WLTP range of up to
            440km.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>CUPRA RAVAL BATTERY AND RANGE</div>
            <p style={AS.calloutText}>
              Entry: 37kWh LFP battery, 85kW or 100kW motor, approx. 300km WLTP.
              Upper: 52kWh NMC battery, 155kW (or 165kW in VZ), up to 440km WLTP.
              DC fast charging: 130kW, 10 to 80 percent in 24 minutes.
            </p>
          </div>

          <Img src={IMGS[3]} alt="2027 Cupra Raval electric hatchback Australia VZ variant" />

          <h2 style={AS.h2}>Performance VZ Variants With Adaptive Suspension</h2>

          <p style={AS.p}>
            The performance-focused VZ and VZ Extreme variants come with{" "}
            <span style={AS.highlight}>adaptive suspension</span> and a limited-slip front
            differential, with the Extreme adding front bucket seats and a 10kW power bump.
            Equipment across the range includes a 12.9-inch infotainment touchscreen, a 10.25-inch
            digital instrument cluster, and synthetic leather seating.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>When Is the Cupra Raval Coming to Australia?</h2>

          <p style={AS.p}>
            Shafer noted that strong European demand is making it harder to pin down an exact local
            timeline. Right-hand drive production has not yet started, and final specifications,
            pricing, and timing for Australia will be confirmed closer to the end of the year. The
            best estimate remains sometime in{" "}
            <span style={AS.highlight}>2027</span>.
          </p>

          <Img src={IMGS[4]} alt="2027 Cupra Raval electric hatchback Australia launch" />

          <p style={AS.p}>
            Looking for an EV or demo car available now?{" "}
            <Link href="/listings" style={{ color: "#1A1A1A", fontWeight: 600, textDecoration: "underline" }}>
              Browse current listings at MustGoDeals
            </Link>.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.drive.com.au/news/cupra-raval-australia-confirmed/"
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
              Be first to know when clearance vehicles hit the market, updated weekly
            </p>
            <Link href="/coming-soon" style={AS.ctaBtn}>Get free alerts →</Link>
          </div>

    </>
  );
}
