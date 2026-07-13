import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const BASE = "/images/news/land_rover_defender_2027";

const IMGS = [
  `${BASE}/10fa9603-bc1f-5dee-a235-f7e7cb650000.avif`,
  `${BASE}/4ca26a72-ed10-50f8-af03-745dccb50000.avif`,
  `${BASE}/4e74292e-3f20-5d81-b9fd-ff5155f50000.avif`,
  `${BASE}/8e442f7c-5bab-5672-8d88-58bfa8a50000.avif`,
  `${BASE}/9896fe04-af84-5b5e-88fe-1fe910950000.avif`,
  `${BASE}/a958e6f7-19b2-5a3c-88e9-80786ca50000.avif`,
  `${BASE}/afcbdfe9-7b74-5ce3-9f11-b84f36350000.avif`,
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
      <p style={AS.imgCaption}>Image: Land Rover Media</p>
    </div>
  );
}

const groupHead: React.CSSProperties = {
  padding: "8px 14px",
  fontWeight: 700,
  fontSize: "11px",
  letterSpacing: "0.08em",
  background: "#1A1A1A",
  color: "#CCDA47",
};

const newBadge: React.CSSProperties = {
  display: "inline-block",
  background: "#CCDA47",
  color: "#1A1A1A",
  fontSize: "10px",
  fontWeight: 700,
  padding: "1px 6px",
  borderRadius: "3px",
  marginLeft: "8px",
  letterSpacing: "0.05em",
};

export default function LandRoverDefender2027AustraliaPriceContent() {
  return (
    <>
      {/* Hero image */}
      <div style={AS.imgWrap}>
        <Image
          src={IMGS[0]}
          alt="2027 Land Rover Defender exterior"
          width={1200}
          height={675}
          className="article-img"
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Image: Land Rover Media</p>
      </div>

      <p style={AS.p}>
        Land Rover has opened Australian ordering for the 2027 Defender, introducing the new
        Vertex flagship trim and applying price increases of up to{" "}
        <span style={AS.highlight}>$8,400</span> across the lineup. Entry now starts at
        $102,800 for the Defender 90 S D250, with first deliveries expected later in 2026.
      </p>

      <p style={AS.p}>
        The 2027 update is the most substantive product expansion the Defender has received
        since its Australian launch. A new body configuration, a conversational AI voice
        system, fresh colour options, and two new option packs round out the changes alongside
        the price movement.
      </p>

      <h2 style={AS.h2}>Price increases across the range</h2>

      <p style={AS.p}>
        Most 2027 Defender variants carry price increases in the range of $4,400 to $8,400
        compared to their 2026 equivalents. The entry grade, the 90 S D250 Auto, rises by{" "}
        <span style={AS.highlight}>$4,400</span> to reach $102,800.
      </p>

      <Img src={IMGS[1]} alt="2027 Land Rover Defender front exterior view" />

      <p style={AS.p}>
        At the performance end of the lineup, the Defender Octa Black sees a more modest
        increase of just $500, settling at $314,300. The Octa represents the Defender at its
        most extreme, with a 4.4 litre twin turbocharged V8 producing 467kW and a
        competition-derived suspension system developed for demanding off-road conditions.
      </p>

      <h2 style={AS.h2}>Vertex joins the Defender lineup</h2>

      <p style={AS.p}>
        The headline addition for 2027 is the{" "}
        <span style={AS.highlight}>Vertex</span> trim, a new grade positioned above the
        existing X specification. Built on the Defender X platform, Vertex arrives in 90 and
        110 body styles and represents the most comprehensively specified non-Octa Defender
        available in Australia.
      </p>

      <Img src={IMGS[2]} alt="2027 Land Rover Defender Vertex trim" />

      <p style={AS.p}>
        Distinguishing the Vertex visually are body colour lower cladding panels and 22 inch
        satin grey alloy wheels. Rather than drawing from the standard Defender colour palette,
        Vertex buyers choose from a curated set of six finishes: Fuji White, Santorini Black,
        Woolstone Green, Borasco Grey, Carpathian Grey, and a Patagonia White Matte Wrap.
      </p>

      <p style={AS.p}>
        Pricing for Vertex opens at <span style={AS.highlight}>$171,800</span> for the 110
        D350 Auto, rising to $176,800 for the 90 P425 Auto and $181,000 for the 110 P425 Auto.
        All three variants are new additions to the Australian lineup with no direct predecessor.
      </p>

      <h2 style={AS.h2}>Australia keeps both V8 engines</h2>

      <p style={AS.p}>
        Land Rover has confirmed that Australia retains the{" "}
        <span style={AS.highlight}>5.0 litre supercharged V8</span> in the V8-grade Defenders
        for 2027. The engine has been withdrawn from European markets but continues here,
        reflecting consistent demand for the character and output the naturally aspirated V8
        delivers in a segment where electrification has not yet displaced performance intent.
      </p>

      <Img src={IMGS[3]} alt="2027 Land Rover Defender Octa performance SUV" />

      <p style={AS.p}>
        The same retention policy applies at the Octa level. Europe has reduced the
        twin turbocharged 4.4 litre V8 output in the Octa from 467kW to 397kW, but the
        Australian specification holds at the full{" "}
        <span style={AS.highlight}>467kW and 750Nm</span> output. Land Rover Australia
        confirmed the decision reflects customer expectations in this market.
      </p>

      <h2 style={AS.h2}>New 6-seat layout for the Defender 110</h2>

      <p style={AS.p}>
        The Defender 110 gains a new seating configuration for 2027. The six-seat option
        replaces the standard second-row bench with a pair of captain chairs, creating a
        lounge-style middle row with a usable centre floor space. This joins the existing
        five-seat and seven-seat options on the 110, covering a wider range of family and
        commercial use cases in the one body style.
      </p>

      <h2 style={AS.h2}>Hey Land Rover voice system arrives across the range</h2>

      <p style={AS.p}>
        All 2027 Defender models receive Land Rover&rsquo;s new conversational AI voice
        system, activated by the phrase <span style={AS.highlight}>&ldquo;Hey Land Rover&rdquo;</span>.
        The system moves beyond fixed command recognition to understand natural language
        requests, allowing drivers to manage navigation, climate, and media settings without
        using specific trigger phrases.
      </p>

      <Img src={IMGS[4]} alt="2027 Land Rover Defender interior with updated technology" />

      <p style={AS.p}>
        The voice interface is integrated into the updated Pivi Pro infotainment platform
        that underpins all 2027 Defender technology. Land Rover says the system has been
        developed to respond accurately to Australian English accents and regional phrasing.
      </p>

      <h2 style={AS.h2}>Namib Orange and colour updates</h2>

      <p style={AS.p}>
        A new exterior colour named <span style={AS.highlight}>Namib Orange</span> joins the
        palette for 2027, available across S, X-Dynamic SE, X-Dynamic HSE, and X grades in
        all body styles. The warm earth tone broadens an exterior range that has historically
        favoured cooler and more neutral finishes.
      </p>

      <p style={AS.p}>
        Elsewhere in the colour range, the Defender Octa gains{" "}
        <span style={AS.highlight}>Woolstone Green</span> as a new option. The 110 Trophy
        Edition replaces the outgoing Keswick Green with{" "}
        <span style={AS.highlight}>Santorini Black</span> as its hero colour, while the
        Deep Sandglow Yellow carries forward unchanged.
      </p>

      <Img src={IMGS[5]} alt="2027 Land Rover Defender in new colour option" />

      <h2 style={AS.h2}>Technology Pack and Extended Exterior Pack</h2>

      <p style={AS.p}>
        Two new option packs expand equipment choices for 2027 Defender buyers.
      </p>

      <p style={AS.p}>
        The <span style={AS.highlight}>Technology Pack</span>, available on S, X-Dynamic SE,
        and X-Dynamic HSE grades, adds a home charging socket, head-up display, Meridian
        surround sound system, and a digital rear-view mirror in a single bundle. It combines
        features that previously required individual selection.
      </p>

      <p style={AS.p}>
        The <span style={AS.highlight}>Extended Exterior Pack</span> is offered on
        X-Dynamic SE, X-Dynamic HSE, Hard Top, and 130 V8 models. It includes specific front
        and rear bumper treatments, a new rear spoiler design, and a spare wheel cover. A
        standalone roof-mount light pod and taildoor gear carrier are also available as
        individual accessories for 2027.
      </p>

      <h2 style={AS.h2}>Sales leadership through mid-2026</h2>

      <p style={AS.p}>
        Land Rover confirmed that the Defender is the best-selling luxury large SUV in
        Australia year to date through the first half of 2026, with{" "}
        <span style={AS.highlight}>1,911 units</span> delivered. That puts it ahead of the
        BMW X5 on 1,769, Lexus RX on 1,182, Mercedes-Benz GLE on 1,054, and Porsche Cayenne
        on 1,036.
      </p>

      <Img src={IMGS[6]} alt="2027 Land Rover Defender lineup exterior" />

      <p style={AS.p}>
        The gap to second place is 142 units over six months. Both the Defender and the
        BMW X5, which transitions to a new generation in late 2026, are expected to compete
        closely through the 2027 model year.
      </p>

      <hr style={AS.divider} />

      <h2 style={AS.h2}>2027 Defender pricing in Australia</h2>

      <div style={{ overflowX: "auto", margin: "16px 0 8px" }}>
        <table style={AS.table}>
          <thead>
            <tr>
              <th style={{ ...AS.th, width: "70%" }}>Variant</th>
              <th style={{ ...AS.th, textAlign: "right" }}>Price (MLP)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2} style={groupHead}>DEFENDER 90</td>
            </tr>
            <tr>
              <td style={AS.td}>90 S D250 Auto</td>
              <td style={AS.tdRight}>$102,800</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>
                Vertex 90 P425 Auto
                <span style={newBadge}>NEW</span>
              </td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>$176,800</td>
            </tr>

            <tr>
              <td colSpan={2} style={groupHead}>DEFENDER HARD TOP 110</td>
            </tr>
            <tr>
              <td style={AS.td}>Hard Top 110 S D250 Auto</td>
              <td style={AS.tdRight}>$107,800</td>
            </tr>

            <tr>
              <td colSpan={2} style={groupHead}>DEFENDER 110</td>
            </tr>
            <tr>
              <td style={AS.td}>110 S D250 Auto</td>
              <td style={AS.tdRight}>$107,800</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>
                Vertex 110 D350 Auto
                <span style={newBadge}>NEW</span>
              </td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>$171,800</td>
            </tr>
            <tr>
              <td style={AS.td}>
                Vertex 110 P425 Auto
                <span style={newBadge}>NEW</span>
              </td>
              <td style={AS.tdRight}>$181,000</td>
            </tr>

            <tr>
              <td colSpan={2} style={groupHead}>DEFENDER 130</td>
            </tr>
            <tr>
              <td style={AS.td}>130 S D250 Auto</td>
              <td style={AS.tdRight}>$115,800</td>
            </tr>

            <tr>
              <td colSpan={2} style={groupHead}>DEFENDER OCTA</td>
            </tr>
            <tr>
              <td style={AS.td}>Octa Auto</td>
              <td style={AS.tdRight}>$308,800</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>Octa Black Auto</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>$314,300</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: "12px", color: "#999", marginTop: "6px", marginBottom: "24px", lineHeight: 1.6 }}>
        All prices are manufacturer list prices and exclude on-road costs. Complete variant
        pricing is available at landrover.com/en-au.
      </p>

      {/* Source */}
      <div style={AS.sourceBox}>
        <span style={AS.sourceLabel}>SOURCE</span>
        <a
          href="https://media.landrover.com/en-AU"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
        >
          Land Rover Media Australia ↗
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
