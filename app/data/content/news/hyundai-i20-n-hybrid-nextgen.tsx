import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function HyundaiI20NHybridNextgenContent() {
  return (
    <>

          <p style={AS.p}>
            Hyundai&rsquo;s global R&amp;D boss Manfred Harrer has confirmed a
            second-generation i20 N is coming{" "}
            <span style={AS.highlight}>&ldquo;sooner rather than later&rdquo;</span> and
            hinted it will feature an N Performance version of the Tucson&rsquo;s
            1.6-litre turbo-hybrid system.
          </p>

          {/* Image 1 */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/i20-n-render.jpg"
              alt="Next-gen Hyundai i20 N render"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Hyundai Media / AI Render</p>
          </div>

          <h2 style={AS.h2}>Why It&rsquo;s Happening</h2>

          <p style={AS.p}>
            Harrer said &ldquo;an i20 N for Europe is a must&rdquo; because the gap between
            the original model and the high-end IONIQ 5 and 6 Ns &ldquo;is too big.&rdquo;
            &ldquo;We need this entry-level back for our fans,&rdquo; he said. &ldquo;We
            are working intensively to do this sooner rather than later.&rdquo;
          </p>

          <h2 style={AS.h2}>What&rsquo;s Under the Bonnet</h2>

          <p style={AS.p}>
            Harrer confirmed the new i20 N would be &ldquo;hybridised&rdquo; and said it
            would make sense to use &ldquo;existing technology.&rdquo; The powertrain is
            expected to comprise a new iteration of the{" "}
            <span style={AS.highlight}>1.6-litre turbo-petrol engine</span> paired with a
            track-capable version of the latest Kia Seltos&rsquo; hybrid system.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>EXPECTED OUTPUTS</div>
            <p style={AS.calloutText}>
              Up to <strong>224kW and 380Nm</strong> — significantly more powerful than
              the outgoing i20 N and stronger than any current i30 N variant on sale today.
            </p>
          </div>

          {/* Image 2 */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/i20-n-shadow-edition-02-iot5.jpg"
              alt="Hyundai i20 N Shadow Edition"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Hyundai Media / i20 N Shadow Edition</p>
          </div>

          <h2 style={AS.h2}>How Far Along Is It?</h2>

          <p style={AS.p}>
            Harrer confirmed prototypes are already out testing and a long way into the
            development cycle, with a global debut &ldquo;not so far out.&rdquo; Odds are
            it&rsquo;ll debut sometime in{" "}
            <span style={AS.highlight}>late 2027</span> and go on sale in{" "}
            <span style={AS.highlight}>2028</span>.
          </p>

          {/* Image 3 */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/hyundai-brazil-spec-i20-1.jpg"
              alt="Hyundai i20 Brazil Spec"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Hyundai Media / i20 Brazil Spec</p>
          </div>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>What It Means for Australia</h2>

          <p style={AS.p}>
            The current i20 N has been a strong seller in Australia, sitting at an
            accessible price point for hot hatch buyers. The news comes less than a week
            after the local release of the{" "}
            <span style={AS.highlight}>2026 Hyundai i20 N Shadow Edition</span> — the last
            of the current generation. If the next model arrives with hybrid power outputs
            beyond the i30 N, it would shake up the hot hatch segment considerably.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.carsales.com.au/editorial/details/next-gen-hyundai-i20-n-confirmed-with-hybrid-power-152311/"
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
