import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

const IMGS = [
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/7522076d-30b2-59d8-8262-7b8934550000",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/lqapoa8dbnbz5nup3agn",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/1e000304-7655-5e71-81c1-5c8752150000",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/68a15138-b635-5956-b26d-b6b2f0750000",
];

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={AS.imgWrap}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="article-img"
        style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
      />
      <p style={AS.imgCaption}>Image: Peugeot Media</p>
    </div>
  );
}

export default function PeugeotAustraliaDistributionChange2026Content() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMGS[0]}
              alt="Peugeot Australia distribution change 2026"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Peugeot Media</p>
          </div>

          <p style={AS.p}>
            Peugeot&rsquo;s future in Australia is in flux after{" "}
            <span style={AS.highlight}>Inchcape</span>, the brand&rsquo;s independent importer,
            confirmed it will end its distribution partnership with the French marque. The move
            follows Inchcape&rsquo;s decision to drop Citroen from its Australian portfolio in
            November 2024, and leaves Peugeot searching for a new custodian in one of its
            longest-standing global markets.
          </p>

          <h2 style={AS.h2}>A Mutual Agreement, Not an Abrupt Split</h2>

          <p style={AS.p}>
            Inchcape cited its standard approach to portfolio management, saying the decision
            reflected a <span style={AS.highlight}>mutual agreement with Stellantis</span> rather
            than an abrupt split. A transition period of approximately 12 months is understood to
            be in place, during which Inchcape&rsquo;s 29-strong dealer network will continue
            selling existing stock and supporting customers with servicing, parts, and warranty
            coverage.
          </p>

          <Img src={IMGS[1]} alt="Peugeot dealer network Australia" />

          <h2 style={AS.h2}>Stellantis Vows to Keep Peugeot in Australia</h2>

          <p style={AS.p}>
            Stellantis, Peugeot&rsquo;s parent company, was quick to signal that the brand is not
            leaving Australia. A spokesperson confirmed the company intends to maintain continuity
            of distribution and is actively exploring future arrangements. One likely outcome is
            that Peugeot could be absorbed into{" "}
            <span style={AS.highlight}>Stellantis Australia&rsquo;s own importer umbrella</span>,
            sitting alongside Jeep, Fiat, Alfa Romeo, and Leapmotor.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>WHAT THIS MEANS FOR PEUGEOT OWNERS</div>
            <p style={AS.calloutText}>
              Existing owners: servicing, parts and warranty remain in place during the 12-month
              transition. New buyers: stock is still available through Inchcape&rsquo;s 29
              dealers while transition is underway. Future models: 308 facelift timeline is
              currently unclear.
            </p>
          </div>

          <h2 style={AS.h2}>Difficult Timing for the Brand</h2>

          <p style={AS.p}>
            The timing is awkward for the brand. Peugeot recorded{" "}
            <span style={AS.highlight}>1,350 new vehicle registrations</span> in Australia in
            2025, a drop of nearly 29 per cent on the prior year. A facelifted 308 hatchback was
            due to arrive in the first half of 2026, though its timeline is now unclear.
          </p>

          <Img src={IMGS[2]} alt="Peugeot 308 hatchback facelift" />

          <h2 style={AS.h2}>Nearly 100 Years of Australian History</h2>

          <p style={AS.p}>
            Peugeot&rsquo;s presence in Australia stretches back to the{" "}
            <span style={AS.highlight}>early 1900s</span>, making it one of the country&rsquo;s
            longest-running automotive brands. Whether that legacy continues under a new
            structure, or shrinks further before finding its footing again, depends on how quickly
            Stellantis can arrange what comes next.
          </p>

          <Img src={IMGS[3]} alt="Peugeot brand heritage Australia" />

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.drive.com.au/news/peugeot-australia-inchcape-distribution/"
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
