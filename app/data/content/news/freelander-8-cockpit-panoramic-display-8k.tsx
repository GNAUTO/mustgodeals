import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/Freelander/";

export default function Freelander8CockpitPanoramicDisplay8kContent() {
  return (
    <>
      <p style={AS.p}>
        Freelander has released interior details for the Freelander 8, the debut model from the
        brand reborn under a joint venture between Chery and Jaguar Land Rover. The focal point of
        the reveal is a{" "}
        <span style={AS.highlight}>46.3-inch panoramic intelligent display</span> spanning the full
        width of the dashboard, paired with a technology stack developed in collaboration with
        Huawei, CATL, and Qualcomm.
      </p>

      {/* Exterior hero */}
      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}e59bbee78987-43-e1783590439397-800x452.png`}
          alt="Freelander 8 exterior in deep purple paint under a night sky"
          width={800}
          height={452}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>Image: Freelander official media</p>
      </div>

      <h2 style={AS.h2}>The 46.3-Inch Panoramic Display</h2>

      <p style={AS.p}>
        The screen measures 1.2 metres across, which Freelander says is{" "}
        <span style={AS.highlight}>300 millimetres wider</span> than the nearest competitor
        in its segment. Resolution is 8K, a figure the company describes as four times the pixel
        count of a standard 4K panel. Peak brightness reaches{" "}
        <span style={AS.highlight}>1,000 nits</span>, and Freelander claims the combination of
        that size and brightness level makes it the only all-weather ultra-high-definition display
        of its kind currently in production.
      </p>

      {/* Instrument cluster showing vehicle data */}
      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}e59bbee78987-45-edited.webp`}
          alt="Freelander 8 panoramic instrument cluster showing tyre pressure and vehicle data"
          width={1100}
          height={515}
          style={{ width: "100%", height: "340px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Image: Freelander official media</p>
      </div>

      {/* Cockpit teaser through steering wheel */}
      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}e59bbee78987-44-edited.webp`}
          alt="Freelander 8 cockpit view through steering wheel showing panoramic display in low light"
          width={1100}
          height={619}
          style={{ width: "100%", height: "380px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Image: Freelander official media</p>
      </div>

      <h2 style={AS.h2}>Cabin Layout and Dimensions</h2>

      <p style={AS.p}>
        The Freelander 8 is a large SUV built around a{" "}
        <span style={AS.highlight}>2+2+2 six-seat configuration</span>. The body measures
        5,118 millimetres in length, 2,050 millimetres wide, and 1,898 millimetres tall, with a
        3,040-millimetre wheelbase. An outdoor-oriented tow package is available as an option,
        rated to a{" "}
        <span style={AS.highlight}>maximum of 2,000 kilograms</span>. Interior design draws from
        the Concept 97 show car, carrying its proportions and surface language into production.
      </p>

      <h2 style={AS.h2}>Snapdragon 8397, Huawei ADS 4.1 and 896-Line LiDAR</h2>

      <p style={AS.p}>
        Every trim level receives a{" "}
        <span style={AS.highlight}>Qualcomm Snapdragon 8397 automotive processor</span> as
        standard. Compared with the previous 8295 platform, the chip delivers three times the
        CPU performance, approximately three times the GPU performance, and twelve times the
        neural processing output. That NPU step-up underpins on-board AI features across
        infotainment, driver monitoring, and autonomous functions.
      </p>

      <p style={AS.p}>
        All variants also come fitted with{" "}
        <span style={AS.highlight}>Huawei Qiankun ADS 4.1</span> as the standard intelligent
        driving system, with the architecture designed to support over-the-air upgrades as the
        platform evolves. Sensor hardware includes an{" "}
        <span style={AS.highlight}>896-line LiDAR unit</span> for environment mapping.
        CATL supplies the battery system across the lineup.
      </p>

      {/* Display clock closeup */}
      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}e59bbee78987-46-edited-768x432.webp`}
          alt="Freelander 8 panoramic display right section showing digital clock in bold font"
          width={768}
          height={432}
          style={{ width: "100%", height: "320px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Image: Freelander official media</p>
      </div>

      <h2 style={AS.h2}>Launch Timing and Trims</h2>

      <p style={AS.p}>
        The Freelander 8 is scheduled to reach the market in the{" "}
        <span style={AS.highlight}>second half of 2026</span>. Three trim levels are expected at
        launch: Pro, Max, and Max+. Exterior colour options were announced at an earlier reveal
        event. Further specification details, including powertrain output and pricing, have not
        yet been confirmed.
      </p>

      <div style={AS.sourceBox}>
        <span style={AS.sourceLabel}>SOURCE</span>
        <span style={{ fontSize: "13px", color: "#555" }}>carnewschina.com</span>
      </div>
    </>
  );
}
