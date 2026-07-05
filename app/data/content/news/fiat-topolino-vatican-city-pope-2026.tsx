import { AS } from '../../../components/posts/article-styles';
import Image from "next/image";

const IMGS = [
  "https://www.topgear.com/sites/default/files/2026/07/fiat-governorate-of-the-vatican-city-state-for-sustainable-micromobility-credit-by-governatorato-s-c-v.jpg",
  "https://www.topgear.com/sites/default/files/2026/07/fiat-governorate-of-the-vatican-city-state-for-sustainable-micromobility-credit-by-governatorato-s-c-v-%284%29.jpg",
  "https://www.topgear.com/sites/default/files/2026/07/1-Fiat-Topolino-Vatican.jpg",
  "https://www.topgear.com/sites/default/files/2026/07/fiat-governorate-of-the-vatican-city-state-for-sustainable-micromobility-credit-by-governatorato-s-c-v-%281%29.jpg",
  "https://www.topgear.com/sites/default/files/2026/07/2-Fiat-Topolino-Vatican.jpg",
  "https://www.topgear.com/sites/default/files/2026/07/3-Fiat-Topolino-Vatican.jpg",
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
      <p style={AS.imgCaption}>Image: Fiat Media / Governatorato SCV</p>
    </div>
  );
}

export default function FiatTopolinoVaticanCityPope2026Content() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            <Image
              src={IMGS[0]}
              alt="Fiat Topolino Vatican City electric car"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Fiat Media / Governatorato SCV</p>
          </div>

          <p style={AS.p}>
            Vatican City has gone electric, and it has done so in about the most charming way
            possible. <span style={AS.highlight}>Fiat</span> has delivered{" "}
            <span style={AS.highlight}>20 Topolino quadricycles</span> to the Governorate of the{" "}
            <span style={AS.highlight}>Vatican City State</span>, along with a number of TRIS
            three-wheel electric delivery vehicles, as part of the Holy See&rsquo;s sustainability
            programme called{" "}
            <span style={AS.highlight}>Ecological Conversion 2030</span>.
          </p>

          <h2 style={AS.h2}>Why the Topolino?</h2>

          <p style={AS.p}>
            The choice of vehicle makes a certain amount of sense for Vatican City specifically. The
            world&rsquo;s smallest country covers just{" "}
            <span style={AS.highlight}>44 hectares</span> and has a population of under 1,000
            people. The Topolino&rsquo;s range is more than sufficient to cover the entire country
            several times over on a single charge, which is more than can be said for almost any
            other EV currently on the market relative to the territory it needs to cover.
          </p>

          <Img src={IMGS[1]} alt="Fiat Topolino Vatican City electric car fleet delivery" />

          <h2 style={AS.h2}>What Is the Fiat Topolino?</h2>

          <p style={AS.p}>
            The Topolino is a small two-seat electric quadricycle that Fiat revived a few years
            ago. It is powered by a{" "}
            <span style={AS.highlight}>5.4kWh battery</span>, tops out at{" "}
            <span style={AS.highlight}>45km/h</span>, and has a range of roughly{" "}
            <span style={AS.highlight}>75 kilometres</span>. It charges from a standard household
            socket in about four hours. It also produces 6kW, which is roughly the output of a
            decent lawnmower, and takes about ten seconds to reach its maximum speed. Importantly,
            it is also extremely cute.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>FIAT TOPOLINO KEY SPECS</div>
            <p style={AS.calloutText}>
              Battery: 5.4kWh. Top speed: 45km/h. Range: approx. 75km.
              Charge time: approx. 4 hours from a standard household socket.
              Output: 6kW. UK price: £8,995.
            </p>
          </div>

          <Img src={IMGS[2]} alt="Fiat Topolino Vatican City electric car parked" />

          <h2 style={AS.h2}>The TRIS Delivery Vehicles</h2>

          <p style={AS.p}>
            The accompanying TRIS vehicles are a modern take on the classic Piaggio Ape
            three-wheel delivery truck and can carry two standard Euro pallets in their flatbed
            tray, with a payload of up to{" "}
            <span style={AS.highlight}>420 kilograms</span> and a range of around{" "}
            <span style={AS.highlight}>90 kilometres</span> from a{" "}
            <span style={AS.highlight}>6.9kWh battery</span>. They will be used for last-mile
            delivery within the city-state.
          </p>

          <Img src={IMGS[3]} alt="Fiat Topolino Vatican City electric car side view" />

          <h2 style={AS.h2}>Vatican&rsquo;s Ecological Conversion 2030</h2>

          <p style={AS.p}>
            Vatican City is aiming to reduce the carbon footprint of its vehicle fleet as part of a
            broader environmental commitment, and the Topolino order is one of the more visible
            steps in that direction. One of the Topolinos was reportedly delivered personally by Top
            Gear, though further details on that particular chapter of automotive history are yet to
            be shared.
          </p>

          <Img src={IMGS[4]} alt="Fiat Topolino Vatican City electric car programme" />

          <p style={AS.p}>
            The UK price for a Topolino is{" "}
            <span style={AS.highlight}>£8,995</span>. Whether the Vatican negotiated a bulk
            discount on its order of 20 has not been confirmed.
          </p>

          <Img src={IMGS[5]} alt="Fiat Topolino Vatican City electric car fleet 2026" />

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.topgear.com/car-news/electric/pope-just-ordered-20-fiat-topolinos-vatican-city"
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
