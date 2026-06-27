import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function BydGoodwood2026EightModelsContent() {
  return (
    <>

          <p style={AS.p}>
            BYD is set to show off <span style={AS.highlight}>eight new models</span> at
            the 2026 Goodwood Festival of Speed, with debuts spanning its BYD, Denza, and
            Yangwang brands. The display will include world premieres as well as models
            already sold in other markets that are soon to launch in Europe.
          </p>

          {/* Image 1 — Denza Z hero */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/denza-z-2-rxk7.jpg"
              alt="Denza Z Coupe at Goodwood 2026"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: BYD Media / Denza Z</p>
          </div>

          <h2 style={AS.h2}>The Headline Act: Denza Z</h2>

          <p style={AS.p}>
            The headline attraction is the world debut of the{" "}
            <span style={AS.highlight}>Denza Z Coupe</span> and Denza Z Racing — a pair
            of performance EVs developed to take on iconic sports cars like the Porsche 911.
            Powered by three electric motors, the Z Coupe claims a top speed of nearly{" "}
            <span style={AS.highlight}>350km/h</span> and offers seating for four along
            with a generous boot, while the Racing version adds a carbon fibre aero package.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>DENZA Z COUPE — KEY NUMBERS</div>
            <p style={AS.calloutText}>
              Three electric motors · Top speed ~350km/h · 4-seat layout with boot ·
              Racing variant adds carbon fibre aero package · World premiere at Goodwood 2026
            </p>
          </div>

          <h2 style={AS.h2}>What Else Is on Show</h2>

          <p style={AS.p}>
            The display will also include the European debut of the{" "}
            <span style={AS.highlight}>Denza B5 SUV</span> and the{" "}
            <span style={AS.highlight}>BYD Shark 6</span> dual-cab ute — both already
            sold in Australia. Goodwood will also mark the UK launch of the Denza Z9GT
            performance sedan, earmarked for Australian launch by early 2027, and the
            D9 DM-i people mover — a plug-in hybrid described as a first-class lounge
            on wheels, featuring reclining second-row seats with massage functionality
            and heating and ventilation across all seven seats.
          </p>

          {/* Image 2 — BYD Dolphin G */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/090_byd_dolphin_g.jpg"
              alt="BYD Dolphin G DM-i"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: BYD Media / BYD Dolphin G DM-i</p>
          </div>

          <h2 style={AS.h2}>Yangwang Goes Hypercar</h2>

          <p style={AS.p}>
            BYD&rsquo;s luxury offshoot Yangwang will showcase the{" "}
            <span style={AS.highlight}>U9 Xtreme hypercar</span>, which claims a top
            speed of <span style={AS.highlight}>496.22km/h</span>, alongside the U7
            luxury sedan in both electric and plug-in hybrid forms, and the U8L luxury SUV.
          </p>

          {/* Image 3 — Denza Z9 */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/denza-z9-2-e2ix.jpeg"
              alt="Denza Z9 performance sedan"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: BYD Media / Denza Z9</p>
          </div>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>The Scale of It</h2>

          <p style={AS.p}>
            BYD&rsquo;s stand will cover{" "}
            <span style={AS.highlight}>2,016 square metres</span> — the largest in
            Goodwood Festival of Speed history. That alone says everything about where
            the Chinese giant believes it stands in the global automotive landscape
            right now.
          </p>

          {/* Image 4 — Yangwang U9 */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/yangwang-u9-na07-bagh.jpg"
              alt="Yangwang U9 Xtreme hypercar"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: BYD Media / Yangwang U9</p>
          </div>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.carsales.com.au/editorial/details/byd-to-show-off-eight-new-models-at-goodwood-152307/"
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
