import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/vw_polo_gti/";

export default function VwIdPoloGtiElectricHitOrMissContent() {
  return (
    <>
      <p style={AS.p}>
        The Volkswagen ID.Polo GTI has arrived as the most powerful production Polo ever built.
        Volkswagen describes the driving character as closer to the current Golf GTI than to any
        petrol Polo GTI that preceded it. That is a significant claim for a small electric car,
        and it has already produced sharply divided reactions from those who have seen it up close.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_polo_gti_4.webp`}
          alt="Volkswagen ID.Polo GTI electric hot hatch exterior front three quarter view in red"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <h2 style={AS.h2}>What the ID.Polo GTI Brings to the Segment</h2>

      <p style={AS.p}>
        The ID.Polo GTI is powered by a single front motor producing{" "}
        <span style={AS.highlight}>166 kW and 290 Nm of torque</span>, with a claimed 0 to 100
        km/h time of <span style={AS.highlight}>6.8 seconds</span>. A 52.2 kWh battery
        supports a WLTP range of up to <span style={AS.highlight}>484 km</span>. Drive goes
        to the front axle, with an electronically controlled front differential lock fitted as
        standard. Volkswagen traces that front wheel drive layout directly back to the original
        1976 GTI, a lineage the brand is leaning into hard with this model.
      </p>

      <p style={AS.p}>
        Physical buttons are back inside, a deliberate reversal from the touch-heavy interiors
        VW has pushed in recent years. The exterior styling has also been given more presence
        than previous Polo generations, with GTI-specific details throughout.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_polo_gti_1.webp`}
          alt="VW ID.Polo GTI interior showing physical buttons and sport steering wheel"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <h2 style={AS.h2}>The Case for Concern</h2>

      <p style={AS.p}>
        The sceptical position rests on a recent track record that has not been kind to electric
        performance cars in this class. Several models that generated serious pre-launch excitement
        went on to disappoint with steering that communicated little, driving character that felt
        processed and distant, and real-world range that made any kind of enthusiastic use
        impractical. The Alpine A290 and others fell into this category for some observers.
        The one consistent exception cited is the Hyundai Ioniq 5 N, which is widely regarded
        as the only electric performance car to have genuinely met the expectations it created.
      </p>

      <p style={AS.p}>
        The concern with the ID.Polo GTI is that Volkswagen appears to have opted for caution
        rather than conviction. A car built this carefully around broad appeal risks ending up
        as a polished and efficient commuter wearing a GTI badge, competent in every measurable
        way but short on the driving involvement that the name is supposed to promise.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_polo_gti_3.webp`}
          alt="VW ID.Polo GTI rear view showing GTI badging and red brake calipers"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <h2 style={AS.h2}>The Case for Optimism</h2>

      <p style={AS.p}>
        Those more positive about the ID.Polo GTI start with a useful point of reference: the
        petrol Polo GTI it replaces was never a particularly exciting machine to begin with.
        It was refined, composed, and easy to live with, but it rarely stirred the kind of
        feeling that the GTI name implies. Against that baseline, the electric model's restored
        physical controls, stronger visual identity, and more purposeful design already represent
        a step forward.
      </p>

      <p style={AS.p}>
        Early ride quality observations have also been encouraging, described as preferable to
        the Alpine A290 even where the Volkswagen's top speed falls short of the French car's
        figure. What the optimists are most interested in is a direct three-way comparison
        between the ID.Polo GTI, the Alpine A290, and the Mini JCW Electric. That test, when
        it arrives, should clarify where the new Volkswagen actually stands in the emerging
        electric hot hatch class.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_polo_gti_2.webp`}
          alt="VW ID.Polo GTI side profile showing sporty stance and alloy wheel design"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <p style={AS.p}>
        The ID.Polo GTI enters a segment with limited established competition and a lot of
        unresolved questions about what electric performance should feel like at this price
        point. European sales begin in 2026. International availability, including timing for
        right hand drive markets, has not been confirmed by Volkswagen.
      </p>
    </>
  );
}
