import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/ferrari_luce/";

export default function FerrariLuceFirstElectricCarFiveSeatsContent() {
  return (
    <>
      <p style={AS.p}>
        Ferrari has revealed the Luce, its first fully electric car, built around five seats and
        a hatchback body rather than the midship supercar format the brand has used for decades.
        The exterior and interior were designed by LoveFrom, the studio led by Jony Ive and Marc Newson.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}ferrari_luce_1.jpg`}
          alt="Ferrari Luce exterior in red, front three quarter view"
          width={1784}
          height={1004}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>Image: Ferrari official media</p>
      </div>

      <h2 style={AS.h2}>Form and Packaging</h2>

      <p style={AS.p}>
        The Luce carries a shape that has no precedent in Ferrari's production history. Its profile
        is a tall, upright one box silhouette with rear hinged doors and seating for five. Circular
        rear lamps reference details from earlier Ferrari models, but the overall form bears no
        resemblance to anything the company has built before.
      </p>

      <p style={AS.p}>
        Ferrari began developing the concept in 2019. The engineering team concluded early that
        adapting an existing midship platform to electric power offered no genuine advantage.
        Swapping an engine and fuel tank for battery cells and motors does not recover the
        weight distribution or inertia characteristics that make a midship layout useful.
        The team designed the Luce from a clean sheet. Ninety five percent of its components are new.
        The battery pack is integrated into the body structure, contributing directly to torsional rigidity.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}ferrari_luce_2.jpg`}
          alt="Ferrari Luce side and rear profile"
          width={1784}
          height={1004}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Image: Ferrari official media</p>
      </div>

      <p style={AS.p}>
        Ferrari also evaluated an electric version of the F80 during development. That approach
        was dropped after testing showed the battery would be exhausted within two thirds of a
        lap of the Nordschleife. The packaging and aerodynamic compromises involved made it an
        unsuitable foundation.
      </p>

      <p style={AS.p}>
        The body is built from 75 percent recycled aluminium. Ferrari says the Luce produces the
        lowest aerodynamic drag of any car it has manufactured, though no drag coefficient figure
        has been released. Rear wheels measure 24 inches in diameter; front wheels measure 23 inches.
        The car uses separate subframes for the first time in Ferrari production history,
        connected to the body through elastomer bushes to reduce noise and vibration transmission.
      </p>

      <h2 style={AS.h2}>Powertrain</h2>

      <p style={AS.p}>
        The Luce uses a <span style={AS.highlight}>122 kWh battery</span> and four electric motors,
        two at each axle. Front axle output is 282 horsepower. Rear axle output is 831 horsepower.
        Combined peak output reaches <span style={AS.highlight}>1,036 horsepower</span>.
        Rear wheel torque stands at 5,900 lb ft. The front motors spin to a maximum of 30,000 rpm.
      </p>

      <p style={AS.p}>
        A new vehicle control unit updates its target values 200 times per second and performs
        individual wheel control across all three axes. Sound in the cabin is generated from
        the natural frequencies produced by the rear inverters, without synthesised audio.
      </p>

      <h2 style={AS.h2}>Interior and Design</h2>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}ferrari_luce_3.webp`}
          alt="Ferrari Luce interior showing dashboard and steering wheel"
          width={892}
          height={502}
          style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Image: Ferrari official media</p>
      </div>

      <p style={AS.p}>
        The three spoke steering wheel is milled from recycled aluminium and assembled from
        19 CNC machined components. The dashboard spans the full cabin width as a single piece
        of machined aluminium rather than stamped sheet metal. Physical climate controls are
        retained. The speedometer uses a conventional analogue needle.
      </p>

      <p style={AS.p}>
        The centre console is built around a glass panel developed by Corning. The car key
        docks into a dedicated recess in the console and uses an e-ink display. A custom
        typeface named LF Maranello was created specifically for the car.
      </p>

      <p style={AS.p}>
        Ferrari has confirmed that six cylinder, eight cylinder, and twelve cylinder models
        will continue in production alongside the Luce. The company has not described the
        Luce as a replacement for any existing model line.
      </p>
    </>
  );
}
