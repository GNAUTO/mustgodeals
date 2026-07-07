import { AS } from '../../../components/posts/article-styles';
import Image from "next/image";

const IMGS = [
  "https://www.topgear.com/sites/default/files/2026/05/Ferrari%20849%20Testarossa.jpg?w=976&h=549",
  "https://www.topgear.com/sites/default/files/styles/media_embed/public/2026/05/Ferrari%20849%20Testarossa%20%283%29.jpg",
  "https://www.topgear.com/sites/default/files/styles/media_embed/public/2026/05/Ferrari%20849%20Testarossa%20%282%29.jpg",
  "https://www.topgear.com/sites/default/files/styles/media_embed/public/2026/05/Ferrari%20849%20Testarossa%20%284%29.jpg",
  "https://www.topgear.com/sites/default/files/styles/media_embed/public/2026/05/Ferrari%20849%20Testarossa%20%285%29.jpg",
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
      <p style={AS.imgCaption}>Image: Ferrari Media</p>
    </div>
  );
}

export default function Ferrari849TestarosaFrankStephensonOpinionContent() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            <Image
              src={IMGS[0]}
              alt="2026 Ferrari 849 Testarossa design review"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Ferrari Media</p>
          </div>

          <p style={AS.p}>
            When Ferrari revives one of its most iconic nameplates, the pressure is enormous. The{" "}
            <span style={AS.highlight}>Ferrari 849 Testarossa</span> had that legacy to contend with,
            and according to{" "}
            <span style={AS.highlight}>Frank Stephenson</span>, one of the people who knows Ferrari{" "}
            <span style={AS.highlight}>design</span> better than almost anyone, it hasn&rsquo;t risen
            to the occasion. The original was one of the defining cars of the 1980s, a machine so
            visually distinctive it became a cultural shorthand for an entire era of excess and
            aspiration.
          </p>

          <h2 style={AS.h2}>The Weight of the Original</h2>

          <p style={AS.p}>
            Frank Stephenson spent years inside Ferrari and Maserati before going on to lead design
            at McLaren and MINI. He&rsquo;s responsible for some of the most celebrated car designs
            of the past three decades, which makes his opinion on the 849 worth taking seriously.
          </p>

          <p style={AS.p}>
            His view is clear: the 849&rsquo;s styling reaches for the drama of the original without
            having the same mechanical justification behind it. In his words, it&rsquo;s a car that
            had big shoes to fill and hasn&rsquo;t filled them.
          </p>

          <Img src={IMGS[1]} alt="2026 Ferrari 849 Testarossa design review side profile" />

          <h2 style={AS.h2}>What Made the First Testarossa Different</h2>

          <p style={AS.p}>
            Stephenson&rsquo;s central argument is that the original Testarossa&rsquo;s design
            wasn&rsquo;t arbitrary. The wide side strakes, the broad rear haunches, the flat
            profile, all of it existed because the car needed enormous side-mounted radiators to
            cool its flat-twelve engine. The design followed the engineering. That relationship
            between form and function is what gave the original its visual authority.
          </p>

          <Img src={IMGS[2]} alt="2026 Ferrari 849 Testarossa design review front" />

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>FERRARI 849 TESTAROSSA AT A GLANCE</div>
            <p style={AS.calloutText}>
              Engine: 6.5-litre naturally aspirated V12.
              Output: approximately 830 horsepower.
              The original 1984 Testarossa used a 4.9-litre flat-twelve producing 390 horsepower.
            </p>
          </div>

          <h2 style={AS.h2}>What Stephenson Actually Said</h2>

          <p style={AS.p}>
            The new car is technically impressive. A 6.5-litre V12 producing around 830 horsepower,
            a modern chassis, and performance numbers that would have seemed impossible when the
            original launched in 1984. But Stephenson&rsquo;s point isn&rsquo;t about performance.
            It&rsquo;s about whether the design tells an honest story about what the car is and how
            it works.
          </p>

          <p style={AS.p}>
            It&rsquo;s worth noting that Stephenson is not shy about criticism, including of his own
            work. His commentary tends to come from a place of genuine conviction rather than
            point-scoring. He argues the 849 borrows the visual language of the original without the
            engineering logic that created it, making the drama feel decorative rather than earned.
          </p>

          <Img src={IMGS[3]} alt="2026 Ferrari 849 Testarossa design review rear" />

          <h2 style={AS.h2}>Does the Name Matter?</h2>

          <p style={AS.p}>
            Whether you agree with Stephenson&rsquo;s assessment or not, it raises a question that&rsquo;s
            relevant beyond this particular car: when a manufacturer revives a legendary name, what
            does it actually owe to the original?
          </p>

          <p style={AS.p}>
            For some buyers, the 849 will be exactly what they want, a modern Ferrari with a famous
            badge and a magnificent engine. For others, the Testarossa name carries a weight that the
            new car simply doesn&rsquo;t match. Stephenson is firmly in the second camp.
          </p>

          <Img src={IMGS[4]} alt="2026 Ferrari 849 Testarossa design review interior" />

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.topgear.com/car-news/supercars/ferrari-849-testarossa"
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
            <p style={AS.ctaDesc}>Be first to know when clearance vehicles hit the market, updated weekly</p>
            <a href="/coming-soon" style={AS.ctaBtn}>Get free alerts →</a>
          </div>

    </>
  );
}
