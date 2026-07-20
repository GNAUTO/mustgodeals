import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function CheryStockman1000PreordersContent() {
  return (
    <>
      <p style={AS.p}>
        Australia's first diesel plug in hybrid ute is pulling serious buyer interest months
        ahead of its Q4 2026 launch.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src="/images/news/chery_stockman.jpg"
          alt="Chery Stockman diesel plug in hybrid dual cab ute exterior"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>Photo: Chery Australia</p>
      </div>

      <p style={AS.p}>
        Chery Australia says it has logged more than 5000 expressions of interest and over 1000
        firm preorders for the Stockman, and it has done that before anyone has seen a price or
        a full spec sheet.
      </p>

      <p style={AS.p}>
        The number matters because of what the Stockman is. It is set to be the first diesel
        plug in hybrid dual cab sold in Australia, pairing a 2.5 litre turbo diesel with a plug
        in hybrid system. Chery quotes a combined{" "}
        <span style={AS.highlight}>350kW and 800Nm</span>, with up to{" "}
        <span style={AS.highlight}>100km of electric only range</span>. That range figure sits
        on the older NEDC test cycle though, which reads more generously than the WLTP numbers
        most buyers are used to, so it is worth discounting a little when you line it up against
        rivals.
      </p>

      <p style={AS.p}>
        On paper it is built for the way Australians actually use a ute. Chery has confirmed{" "}
        <span style={AS.highlight}>3500kg of braked towing</span>, full 4x4, all terrain tyres
        as standard and 247mm of ground clearance. The torque figure lands ahead of both the
        BYD Shark 6 Performance and the GWM Cannon Alpha PHEV, and the peak power matches the
        Shark 6.
      </p>

      <p style={AS.p}>
        It arrives into a segment that is filling up fast. The Stockman will be the fifth plug
        in hybrid ute on sale here, behind the BYD Shark 6, the GWM Cannon Alpha PHEV, the
        Ford Ranger PHEV and the JAC Hunter. The Hunter currently sets the floor on price,
        landing under 50,000 dollars before on road costs.
      </p>

      <p style={AS.p}>
        What is still missing is the thing that decides whether those 1000 preorders turn into
        1000 sales. Chery has not put a price on the Stockman yet, and grades and final specs
        are still to come. A petrol plug in hybrid version is expected to follow in 2027.
      </p>

      <p style={AS.p}>
        The Stockman reaches Australian showrooms in the fourth quarter of 2026.
      </p>
    </>
  );
}
