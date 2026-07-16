import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/freelander_8_interior/";

export default function Freelander8InteriorRevealContent() {
  return (
    <>
      <p style={AS.p}>
        Chery and Jaguar Land Rover have released official interior images of the Freelander 8,
        the first model to come from their joint manufacturing venture. The reveal shows the
        finished cabin in detail for the first time, covering seat design, materials, and the
        integrated technology configuration. A Chinese market debut is scheduled for the second
        half of 2026.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}freelander_8_interior_1.webp`}
          alt="Freelander 8 interior showing dual commander and passenger seat layout"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>Photo: Chery Jaguar Land Rover</p>
      </div>

      <h2 style={AS.h2}>Dual Seat Concept and Cabin Materials</h2>

      <p style={AS.p}>
        The interior is structured around two independently designated seat positions. The
        driver's seat carries the name Commander and is positioned at a raised height with
        a forward sight line. Controls are placed to keep the driver's hands near primary
        functions without requiring attention away from the road. The front passenger seat is
        designated <span style={AS.highlight}>L·A·D·Y</span> and is built around a separate
        feature set. Legroom at this position is{" "}
        <span style={AS.highlight}>1,200mm</span>, enough for a passenger of up to 1.9 metres
        to sit with legs extended. The passenger side also includes a full width remote display,
        a soft airflow climate outlet, a fragrance system described as drawing reference from
        English manor interiors, and a private storage compartment. The joint venture describes
        the combined result as a first class cabin concept.
      </p>

      <p style={AS.p}>
        Physical controls are finished with the Clous de Paris pattern, a repeating pyramid
        texture that originates in fine watchmaking. The centre control knob is produced from
        K9 optical crystal, machined to{" "}
        <span style={AS.highlight}>144 individually cut faces</span>. A dual ring ambient light
        band surrounds the knob and is capable of displaying{" "}
        <span style={AS.highlight}>256 colours</span>. The piece is described by Chery and
        Jaguar Land Rover as the Optical Grade Dual Floating Crystal Knob.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}freelander_8_interior_3.jpg`}
          alt="Freelander 8 cabin detail showing Clous de Paris physical controls and crystal knob"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Chery Jaguar Land Rover</p>
      </div>

      <h2 style={AS.h2}>Display Architecture and Driver Technology</h2>

      <p style={AS.p}>
        The dashboard is arranged around a structure the joint venture calls the T-shaped Bridge.
        Integrated into this framework are a{" "}
        <span style={AS.highlight}>46.3 inch 8K panoramic remote display</span> and a{" "}
        <span style={AS.highlight}>15.6 inch LED centre screen</span>. The two panels are
        unified within a single architectural layout rather than presented as separate additions.
      </p>

      <p style={AS.p}>
        Huawei ADS 5.0 intelligent driving assistance is fitted as standard across every trim
        level. The system handles highway and urban driving scenarios, covering object detection,
        path planning, and response to traffic events. Processing is handled by the{" "}
        <span style={AS.highlight}>Qualcomm Snapdragon 8397</span> automotive chip, which the
        Freelander 8 is among the first production vehicles in the world to deploy.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}freelander_8_interior_6.jpg`}
          alt="Freelander 8 T-shaped Bridge dashboard showing 46.3 inch 8K panoramic display"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Chery Jaguar Land Rover</p>
      </div>

      <h2 style={AS.h2}>Powertrain Platform and Market Context</h2>

      <p style={AS.p}>
        The Freelander 8 is built on an{" "}
        <span style={AS.highlight}>800V high-voltage platform</span>. The energy storage system
        is the Freevoy unit developed in collaboration with CATL, which supports both range
        extender operation and conventional hybrid modes. Terrain management is handled by
        the Huawei i-ATS intelligent all-terrain system, which coordinates with the vehicle's
        drive and suspension inputs.
      </p>

      <p style={AS.p}>
        The context surrounding this reveal carries weight beyond the product itself. Jaguar
        Land Rover this month stopped purchasing locally produced models through its China
        dealer network. The plant involved is the joint venture facility shared by Chery and
        Jaguar Land Rover, which has now directed its output toward the Freelander line. The
        Freelander 8 is the first model to come out of that refocused operation.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}freelander_8_interior_2.webp`}
          alt="Freelander 8 full interior overview showing Commander and L·A·D·Y seat positions"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Chery Jaguar Land Rover</p>
      </div>

      <p style={AS.p}>
        A Chinese market launch is planned for the second half of 2026. The current
        announcement covers only the Chinese market. No information on international
        availability has been provided by either Chery or Jaguar Land Rover.
      </p>
    </>
  );
}
