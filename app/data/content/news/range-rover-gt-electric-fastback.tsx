import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/range_rover_gt/";

export default function RangeRoverGtElectricFastbackContent() {
  return (
    <>
      <p style={AS.p}>
        The 2027 Range Rover GT is the most radical model the brand has attempted, and it is
        arriving soon.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}range_rover_gt_1.jpg`}
          alt="2027 Range Rover GT electric fastback exterior front three quarter view"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>Photo: Jaguar Land Rover</p>
      </div>

      <p style={AS.p}>
        Range Rover has previewed the Range Rover GT for the first time, an electric grand
        tourer that will make its global debut later this year.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}range_rover_gt_2.jpg`}
          alt="Range Rover GT fastback silhouette side profile showing raised sedan shape"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Jaguar Land Rover</p>
      </div>

      <p style={AS.p}>
        The significance is in the shape. The GT will be the first Range Rover that is not an
        SUV, trading the brand's familiar upright silhouette for a high riding fastback that
        reads closer to a raised sedan than anything Range Rover has built before.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}range_rover_gt_3.jpg`}
          alt="Range Rover GT roofline and fastback design from rear quarter"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Jaguar Land Rover</p>
      </div>

      <p style={AS.p}>
        It is also the first JLR product to use the company's new EMA platform, which has been
        designed around battery electric powertrains while still leaving room for hybrids. The
        GT launches as an EV, with a hybrid powertrain planned later in its lifecycle.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}range_rover_gt_4.jpg`}
          alt="Range Rover GT exterior design detail and body styling"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Jaguar Land Rover</p>
      </div>

      <p style={AS.p}>
        Details beyond that remain thin. JLR has not published range, performance or off road
        figures, saying only that the GT will offer capability beyond what a conventional grand
        tourer manages once the sealed road ends. Range Rover managing director Martin Limpert
        described the car as combining electric performance, long distance refinement and all
        terrain ability, with an interior meant to preview the brand's idea of a modern grand
        tourer.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}range_rover_gt_5.jpg`}
          alt="Range Rover GT interior concept showing grand tourer cabin"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Jaguar Land Rover</p>
      </div>

      <p style={AS.p}>
        Prototypes are in the final stages of development, so the camouflage should come off
        before the end of the year, with global sales starting next year.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}range_rover_gt_6.jpg`}
          alt="Range Rover GT development prototype exterior view"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Jaguar Land Rover</p>
      </div>

      <p style={AS.p}>
        Australian timing is the open question. Local details have not been confirmed, but
        showroom arrival here looks more likely to fall around 2028 than next year.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}range_rover_gt_7.jpg`}
          alt="Range Rover GT rear styling and electric fastback design"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Jaguar Land Rover</p>
      </div>
    </>
  );
}
