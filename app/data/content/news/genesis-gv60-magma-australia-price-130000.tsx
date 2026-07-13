import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/Genesis GV60 Magma price/";

export default function GenesisGv60MagmaAustraliaPrice130000Content() {
  return (
    <>
      <p style={AS.p}>
        Genesis has launched the GV60 Magma in Australia at{" "}
        <span style={AS.highlight}>$130,000 before on-road costs</span>, making it the first model
        to carry the brand's new Magma performance sub-brand. It sits well above the standard GV60
        range and positions itself against a small group of high-output electric SUVs.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}2c8e99eb-eb87-5c68-b28b-2e4071550000.avif`}
          alt="Genesis GV60 Magma in Magma Orange exterior, front three quarter view"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>Image: Genesis Australia</p>
      </div>

      <h2 style={AS.h2}>Price and Positioning</h2>

      <p style={AS.p}>
        The GV60 Magma AWD is priced at $130,000 before on-road costs. The entry GV60 Advanced RWD
        sits at $88,300, which means the Magma carries a premium of roughly{" "}
        <span style={AS.highlight}>47 percent</span> over the base variant. Against the Hyundai
        Ioniq 5 N, which shares much of its underpinning, the GV60 Magma costs{" "}
        <span style={AS.highlight}>$15,000 more</span>.
      </p>

      <table style={AS.table}>
        <thead>
          <tr>
            <th style={AS.th}>Variant</th>
            <th style={{ ...AS.th, textAlign: "right" }}>Price (before on-road)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={AS.td}>GV60 Advanced RWD</td>
            <td style={AS.tdRight}>$88,300</td>
          </tr>
          <tr>
            <td style={AS.td}>GV60 Magma AWD</td>
            <td style={AS.tdRight}>$130,000</td>
          </tr>
        </tbody>
      </table>

      <h2 style={AS.h2}>Performance</h2>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}30d5b285-1abe-5280-bdf8-d64f2f750000.avif`}
          alt="Genesis GV60 Magma rear view showing spoiler and diffuser"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Image: Genesis Australia</p>
      </div>

      <p style={AS.p}>
        The GV60 Magma uses a dual motor all-wheel drive system. In boost mode, peak output
        reaches <span style={AS.highlight}>478 kW and 790 Nm</span>. Standard driving delivers
        448 kW and 740 Nm. Genesis claims a 0 to 100 km/h time of{" "}
        <span style={AS.highlight}>3.4 seconds</span>, which matches the Ioniq 5 N on acceleration
        while producing 20 Nm more torque.
      </p>

      <p style={AS.p}>
        The 84 kWh battery carries a WLTP range claim of 425 km. Driver-focused technology
        includes a virtual gear shift function, drift mode, large brakes, an electronically
        controlled limited-slip differential, and adaptive suspension. These systems share
        a significant amount with those found in the Ioniq 5 N.
      </p>

      <p style={AS.p}>
        Visually the GV60 Magma sits lower than the standard GV60 and runs on 21 inch wheels.
        Aerodynamic additions include a rear spoiler, a revised rear bumper, and front spats.
        Magma Orange is available exclusively on this model.
      </p>

      <h2 style={AS.h2}>Equipment and Warranty</h2>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}349c16f6-fafe-566e-8e63-1b64c1650000.avif`}
          alt="Genesis GV60 Magma interior showing OLED display and sport seats"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "380px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Image: Genesis Australia</p>
      </div>

      <p style={AS.p}>
        Inside, a 27 inch OLED wide display integrates the instrument cluster and infotainment
        screen. Wireless Apple CarPlay and Android Auto are standard. The GV60 Magma receives
        power-adjustable sport seats with suede and leather trim, a distinction from the Ioniq 5 N
        and Ioniq 6 N which use manually adjusted seats. A 17 speaker Bang and Olufsen audio
        system, head-up display, digital rear-view mirror, heated and ventilated front seats,
        and heated outer rear seats complete the main equipment list.
      </p>

      <p style={AS.p}>
        Warranty coverage matches the rest of the Genesis range in Australia. The GV60 Magma
        comes with a <span style={AS.highlight}>five year unlimited kilometre warranty</span>{" "}
        and complimentary scheduled servicing for the same period.
      </p>
    </>
  );
}
