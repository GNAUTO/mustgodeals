import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function JasTenseiHondaNsxRestommodContent() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.topgear.com/sites/default/files/images/big-read/carousel/2026/06/b710d556570aa46ccb60b98c44f49bbd/NSX%20Resurrection%20%2811%29.jpg"
              alt="JAS Tensei Honda NSX restomod"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: JAS Motorsport / Top Gear</p>
          </div>

          <p style={AS.p}>
            The Honda NSX is getting a second life, and this time it comes with{" "}
            <span style={AS.highlight}>Honda&rsquo;s blessing</span>.
          </p>

          <h2 style={AS.h2}>Who Built It and Why</h2>

          <p style={AS.p}>
            Milan-based JAS, which has run Honda&rsquo;s works race programs for three decades
            including the Civic in WTCC and BTCC, has unveiled its take on the legendary NSX.
            It&rsquo;s called the <span style={AS.highlight}>Tensei</span>, Japanese for
            reincarnation, and it&rsquo;s not a tribute build or a tuner special. It&rsquo;s a
            ground-up restomod that starts with a donor NSX shell and rebuilds almost everything
            underneath it.
          </p>

          <p style={AS.p}>
            JAS boss Mads Fischer says Honda itself gave the project its blessing. Modern
            emissions and safety regulations make it impossible for a manufacturer to build a car
            like the original NSX today, but because the Tensei is based on an existing shell,
            it only needs to meet far older{" "}
            <span style={AS.highlight}>Euro 1 standards</span>.
          </p>

          {/* Image 2 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.topgear.com/sites/default/files/images/big-read/carousel/2026/06/b710d556570aa46ccb60b98c44f49bbd/NSX%20Resurrection%20%2810%29.jpg"
              alt="JAS Tensei exterior side profile"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: JAS Motorsport / Top Gear</p>
          </div>

          <h2 style={AS.h2}>Pininfarina Design, Instantly Recognisable</h2>

          <p style={AS.p}>
            Pininfarina handled the exterior design, working closely with JAS to keep the
            silhouette instantly recognisable while tightening the proportions. The
            pop-up headlights stay, as does the signature rear wing hoop and side air intakes
            all functionally improved over the 1991 original. Carbon fibre panels now sit over
            what remains of the original aluminium structure.
          </p>

          {/* Image 3 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.topgear.com/sites/default/files/images/big-read/carousel/2026/06/b710d556570aa46ccb60b98c44f49bbd/NSX%20Resurrection%20%286%29.jpg"
              alt="JAS Tensei front detail"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: JAS Motorsport / Top Gear</p>
          </div>

          <h2 style={AS.h2}>420bhp Judd V6. No VTEC Required</h2>

          <p style={AS.p}>
            Power comes from a heavily reworked version of Honda&rsquo;s original V6, now bored
            out to <span style={AS.highlight}>3.5 litres</span> by British engine specialist
            Judd. It revs to 8,500rpm and produces{" "}
            <span style={AS.highlight}>420bhp</span>, a jump of roughly 140bhp over the
            standard NSX. The famous VTEC system has been dropped, as it wasn&rsquo;t considered
            reliable at the new engine&rsquo;s higher rev range. Drive goes through a fully
            re-engineered six-speed manual gearbox to the rear wheels only.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>TENSEI POWERTRAIN</div>
            <p style={AS.calloutText}>
              3.5L Judd V6 · 420bhp · 8,500rpm redline · 6-speed manual · RWD, 
              up ~140bhp on the original NSX. VTEC deleted.
            </p>
          </div>

          <hr style={AS.divider} />

          {/* Image 4 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.topgear.com/sites/default/files/styles/media_embed/public/2026/06/NSX%20Resurrection%20%283%29.jpg"
              alt="JAS Tensei interior"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: JAS Motorsport / Top Gear</p>
          </div>

          <h2 style={AS.h2}>Interior: Old Soul, New Finish</h2>

          <p style={AS.p}>
            Inside, JAS kept much of the original dashboard, console, and door cards, 
            reupholstered and finished with aluminium trim. Buyers can choose between a modern
            semi-digital instrument display or a faithful recreation of the original&rsquo;s
            six-dial yellow-needle gauges.
          </p>

          <h2 style={AS.h2}>35 Cars, £770,000, Bring Your Own NSX</h2>

          <p style={AS.p}>
            Only <span style={AS.highlight}>35 examples</span> will be built, a nod to the
            NSX&rsquo;s upcoming 35th anniversary. Customers must supply a donor car and pay{" "}
            <span style={AS.highlight}>£770,000</span> plus tax and the cost of the donor
            vehicle.
          </p>

          {/* Image 5 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.topgear.com/sites/default/files/styles/media_embed/public/2026/06/NSX%20Resurrection.jpg"
              alt="JAS Tensei rear"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: JAS Motorsport / Top Gear</p>
          </div>

          <p style={AS.p}>
            For anyone who grew up idolising the original NSX, the Tensei is about as close as
            it gets to having it built exactly the way Honda might have, if modern regulations
            had never gotten in the way.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.topgear.com/car-news/jas-tensei-honda-nsx-restomod"
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
              Be first to know when clearance vehicles hit the market, updated weekly
            </p>
            <Link href="/coming-soon" style={AS.ctaBtn}>Get free alerts →</Link>
          </div>

    </>
  );
}
