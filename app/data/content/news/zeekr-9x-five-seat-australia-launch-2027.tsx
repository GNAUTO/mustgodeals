import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/zeekr_9x/";

export default function Zeekr9xFiveSeatAustraliaLaunch2027Content() {
  return (
    <>
      <p style={AS.p}>
        Zeekr has added a five-seat configuration to the 9X ahead of the model's Australian launch,
        expanding the SUV lineup that previously offered seven and six-seat arrangements only.
        The addition comes as the brand moves closer to confirming a local introduction date.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}zeekr_9x_1.avif`}
          alt="2027 Zeekr 9X exterior in white, front three-quarter view"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>Image: Zeekr</p>
      </div>

      <h2 style={AS.h2}>Five-Seat Variant</h2>

      <p style={AS.p}>
        The five-seat 9X uses the same body structure as the existing multi-row variants but
        reconfigures the second row for two individual captain chairs with a floor console between
        them. This layout prioritises rear passenger comfort over total capacity and positions the
        9X alongside premium European SUVs that offer similar seating arrangements as a paid option.
      </p>

      <p style={AS.p}>
        The exterior dimensions remain unchanged at{" "}
        <span style={AS.highlight}>4,869 mm long, 1,930 mm wide, and 1,685 mm tall</span>,
        with a 2,998 mm wheelbase. That wheelbase figure gives the second row more legroom than most
        comparable five-seat SUVs in the segment.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}zeekr_9x_2.avif`}
          alt="2027 Zeekr 9X five-seat interior showing second row captain chairs"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Image: Zeekr</p>
      </div>

      <h2 style={AS.h2}>Powertrain</h2>

      <p style={AS.p}>
        The 9X is built on Zeekr's SEA platform and uses a dual motor all-wheel drive setup.
        Combined output sits at <span style={AS.highlight}>544 kW with 710 Nm of torque</span>,
        with a claimed 0 to 100 km/h time of 3.8 seconds. The 100 kWh battery supports
        DC fast charging at up to <span style={AS.highlight}>200 kW</span>.
        CLTC range is rated at 620 km, though real-world WLTP figures will be lower and are
        expected to be confirmed closer to the Australian launch.
      </p>

      <p style={AS.p}>
        A rear-wheel-drive single-motor variant with a smaller 75 kWh battery is also part of
        the lineup internationally, though its Australian availability has not been confirmed.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}zeekr_9x_3.avif`}
          alt="2027 Zeekr 9X side profile showing roofline and wheel design"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "380px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Image: Zeekr</p>
      </div>

      <h2 style={AS.h2}>Australia Launch</h2>

      <p style={AS.p}>
        Zeekr entered the Australian market in 2025 with the 001 electric shooting brake and the X
        small crossover. The 9X has been on the product roadmap since then. No confirmed on-sale
        date or pricing has been released for Australia, but the addition of the five-seat variant
        broadens the model's appeal before its local debut.
      </p>

      <p style={AS.p}>
        The brand has established a small but growing dealer network in major cities. Servicing
        capacity and parts supply will be key factors for buyers considering the 9X given its
        size and price point relative to the 001.
      </p>
    </>
  );
}
