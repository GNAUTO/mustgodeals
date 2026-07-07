import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function NswPoliceHighPerformanceFleet2026Content() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            <Image
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/62ed299e-8f70-5cc3-a037-459f6e650000"
              alt="NSW Police high-performance fleet"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Drive.com.au</p>
          </div>

          <p style={AS.p}>
            NSW Police will purchase a fleet of high-performance rapid-response vehicles as part
            of a <span style={AS.highlight}>$94.3 million investment</span> announced in the
            latest state budget, earmarked for a newly established Armed Response Command.
          </p>

          <h2 style={AS.h2}>What the New Command Involves</h2>

          <p style={AS.p}>
            The new division will comprise <span style={AS.highlight}>250 officers</span> with
            long-arm capability, 28 civilian staff, a Specialist Operation Centre, and an
            as-yet-unspecified number of high-performance vehicles. What those vehicles will be
            remains unclear, NSW Police has confirmed it is unable to share details at this
            stage, with the new command still being set up.
          </p>

          {/* Image 2 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/6429f21d-b039-52dd-beda-684f92b50000"
              alt="NSW Police patrol vehicles"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Drive.com.au</p>
          </div>

          <h2 style={AS.h2}>Current Fleet. and What Came Before</h2>

          <p style={AS.p}>
            Currently, the force relies on <span style={AS.highlight}>BMW 5 Series diesel sedans</span>{" "}
            and <span style={AS.highlight}>BMW X5 petrol SUVs</span> for Highway Patrol duties.
            In recent years it also operated Chrysler 300 SRT V8 sedans, though those have since
            exited the fleet following the end of that model&rsquo;s production. Whether the Armed
            Response Command will continue with BMW products or opt for something faster remains
            to be seen.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>CURRENT NSW POLICE FLEET</div>
            <p style={AS.calloutText}>
              BMW 5 Series diesel sedan · BMW X5 petrol SUV (Highway Patrol), Chrysler 300 SRT
              V8 previously in service, now retired following end of production.
            </p>
          </div>

          <h2 style={AS.h2}>Why the Command Was Created</h2>

          <p style={AS.p}>
            The Armed Response Command was first announced in February 2026, following the Bondi
            Beach terror attacks that took place in Sydney on{" "}
            <span style={AS.highlight}>14 December 2025</span>. NSW Police Commissioner Mal
            Lanyon said at the time that the unit would mirror rapid response models already
            operating across parts of Europe.
          </p>

          <p style={AS.p}>
            &ldquo;In the aftermath of the Bondi Beach terror attacks, it is essential that we
            are able to provide an enhanced rapid response with long-arm capability,&rdquo;
            Commissioner Lanyon said. &ldquo;Our priority is not only ensuring the community is
            safe, but that people also feel safe, while providing a deterrence to anyone who wants
            to do harm.&rdquo;
          </p>

          <hr style={AS.divider} />

          {/* Image 3 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/takoqaeyembhyyjpzlls"
              alt="NSW Police Armed Response Command"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Drive.com.au</p>
          </div>

          <h2 style={AS.h2}>The Question Car Enthusiasts Are Asking</h2>

          <p style={AS.p}>
            For car enthusiasts, the question of which vehicles NSW Police will choose is an
            intriguing one, and an answer is expected once the command centre is fully operational.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.drive.com.au/news/nsw-police-high-performance-fleet-armed-response-command/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              Drive.com.au ↗
            </a>
          </div>

          {/* CTA */}
          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>Get deal alerts on new arrivals</div>
            <p style={AS.ctaDesc}>
              Be first to know when clearance vehicles hit the market, updated weekly
            </p>
            <Link href="/coming-soon" style={AS.ctaBtn}>Get free alerts →</Link>
          </div>

    </>
  );
}
