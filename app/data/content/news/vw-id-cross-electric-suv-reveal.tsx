import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/volkswagen_id_cross/";

export default function VwIdCrossElectricSuvRevealContent() {
  return (
    <>
      <p style={AS.p}>
        Volkswagen has revealed the ID. Cross, a five door five seat electric crossover built on
        the same platform as the ID.Polo. The model slots below the ID.4 in the Volkswagen lineup
        and is positioned as the brand's entry point into electric SUVs. UK pricing starts below
        £25,000, placing it among the more affordable new electric vehicles to carry a mainstream
        European badge.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_id_cross_1.webp`}
          alt="Volkswagen ID. Cross electric subcompact SUV exterior front three quarter view"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <h2 style={AS.h2}>What the ID. Cross Is</h2>

      <p style={AS.p}>
        The ID. Cross shares its underpinnings with the ID.Polo and uses a raised crossover body
        rather than a conventional car silhouette. It seats five passengers across two rows, has
        five doors, and sends drive exclusively to the front wheels. Volkswagen has not announced
        a four wheel drive variant. The proportions place it in the subcompact electric crossover
        category alongside models that prioritise interior space and boot capacity within a
        compact external footprint.
      </p>

      <p style={AS.p}>
        Volkswagen is pitching the ID. Cross directly against the Renault 4, the Kia EV2, the
        Ford Puma Gen E, and the BYD Atto 2. Each of those models shares a broadly similar brief:
        a practical raised body at an accessible price point for an electric vehicle. The segment
        has expanded quickly across Europe, and the ID. Cross marks Volkswagen's first dedicated
        entry into it.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_id_cross_4.webp`}
          alt="Volkswagen ID. Cross electric crossover side profile and rear view"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <h2 style={AS.h2}>Battery Options and Range</h2>

      <p style={AS.p}>
        Two battery sizes are offered from launch. The entry configuration uses a{" "}
        <span style={AS.highlight}>37 kWh pack</span> available in 114 hp and 133 hp states of
        tune, with a claimed range of around{" "}
        <span style={AS.highlight}>315 km</span>. The larger option pairs a{" "}
        <span style={AS.highlight}>52 kWh battery</span> with a{" "}
        <span style={AS.highlight}>208 hp</span> motor, pushing the claimed range to
        approximately <span style={AS.highlight}>435 km</span>. Both configurations are front
        wheel drive. Volkswagen has not published AC or DC charging speed targets for either
        battery at this stage.
      </p>

      <p style={AS.p}>
        The range figures are Volkswagen's own claims under the WLTP testing cycle and have not
        been independently verified. Real world results will vary depending on driving conditions,
        ambient temperature, and the use of accessories such as heating and air conditioning.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_id_cross_11.webp`}
          alt="Volkswagen ID. Cross interior physical button controls and infotainment display"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <h2 style={AS.h2}>Inside and What It Costs</h2>

      <p style={AS.p}>
        Boot capacity is <span style={AS.highlight}>475 litres</span>, with a{" "}
        <span style={AS.highlight}>25 litre frunk</span> providing additional storage at the
        front. Physical buttons have returned to the interior, a direction Volkswagen has applied
        across its most recent model introductions. The move follows sustained customer criticism
        of the touch only surfaces used on earlier MEB platform vehicles, where adjusting climate
        and audio settings required navigating on screen menus while driving.
      </p>

      <p style={AS.p}>
        UK pricing begins below £25,000. No pricing or availability timeline for Australia has
        been confirmed by Volkswagen. The brand has not indicated whether a right hand drive
        programme is planned for the ID. Cross.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_id_cross_15.webp`}
          alt="Volkswagen ID. Cross electric SUV exterior design detail and rear styling"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <p style={AS.p}>
        The ID. Cross arrives as Volkswagen works to address persistent criticism that its electric
        vehicle lineup has been priced beyond the reach of mainstream buyers. Competing offerings
        from Chinese manufacturers have applied significant pressure on price, and the brand's
        electric volumes in markets including Australia have remained modest. The ID. Cross
        represents the most direct response yet to that pressure at the lower end of the range.
      </p>
    </>
  );
}
