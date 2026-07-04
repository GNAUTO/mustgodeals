import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function Ferrari12CilindriManualeContent() {
  return (
    <>
      <p style={AS.p}>
        Ferrari has revealed the{' '}
        <span style={AS.highlight}>12Cilindri Manuale</span>, a limited-edition
        variant of its naturally aspirated V12 grand tourer fitted with a
        six-speed open-gate manual gearbox. The catch: the clutch pedal and
        gear lever are not mechanically connected to the drivetrain. This is a
        by-wire system, and understanding that distinction is the entire story.
      </p>

      {/* Image 1 */}
      <div style={AS.imgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/news/ferrari-12cilindri-front.jpg"
          alt="Ferrari 12Cilindri front"
          className="article-img"
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
        />
        <p style={AS.imgCaption}>
          Photo: TTTNIS / Wikimedia Commons (CC0). Standard 12Cilindri shown; Manuale badge and interior details will differ.
        </p>
      </div>

      <h2 style={AS.h2}>What &ldquo;By-Wire&rdquo; Actually Means</h2>

      <p style={AS.p}>
        The{' '}
        <span style={AS.highlight}>Ferrari 12Cilindri Manuale</span> uses the
        same eight-speed dual-clutch transmission as the standard car. The
        open-gate lever and clutch pedal are connected electronically, not
        physically. When the driver moves the gear lever or presses the clutch,
        sensors read the input and the car&rsquo;s control systems execute the
        shift through the DCT. At no point does your hand or foot directly
        engage a mechanical component.
      </p>

      <p style={AS.p}>
        Ferrari calls this a{' '}
        <span style={AS.highlight}>
          &ldquo;by-wire&rdquo; manual transmission
        </span>
        . The experience is designed to replicate the tactile rhythm of a
        traditional manual: the weight of the lever through a gate, the feel
        of the clutch pedal biting, the connection between driver input and
        engine response. A single button switches the car between full manual
        mode and automatic. In automatic, the DCT operates as normal.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>12CILINDRI MANUALE — KEY FACTS</div>
        <p style={AS.calloutText}>
          6.5L naturally aspirated V12 · 820hp · 500lb-ft · 0-100km/h 2.9 sec (skilled driver) ·
          By-wire 6-speed gate over 8-speed DCT · 1,499 units · Tailor Made only · from €590,000
        </p>
      </div>

      {/* Image 2 */}
      <div style={AS.imgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/news/ferrari-12cilindri-rear.jpg"
          alt="Ferrari 12Cilindri rear"
          className="article-img"
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
        />
        <p style={AS.imgCaption}>
          Photo: TTTNIS / Wikimedia Commons (CC0). Standard 12Cilindri shown; Manuale specification will differ.
        </p>
      </div>

      <h2 style={AS.h2}>The Performance Case for Doing It This Way</h2>

      <p style={AS.p}>
        A traditional mechanical manual fitted to a 820hp V12 would introduce
        genuine performance compromises. Shift times would increase. A
        conventional clutch able to handle the torque load at this power level
        would require a heavy, stiff pedal. The by-wire approach avoids both
        problems by keeping the DCT as the actual transmission while using
        electronics to create the manual driving experience.
      </p>

      <p style={AS.p}>
        The result is that the{' '}
        <span style={AS.highlight}>
          Manuale matches the standard 12Cilindri&rsquo;s 0-100km/h time of
          2.9 seconds
        </span>{' '}
        in the hands of a skilled driver. Ferrari&rsquo;s own engineers note
        the qualifier: the gap between an experienced and inexperienced driver
        operating the by-wire clutch will be larger than with a pure automatic.
        The system rewards familiarity. That is, arguably, the point.
      </p>

      <p style={AS.p}>
        The engine itself is unchanged: a{' '}
        <span style={AS.highlight}>6.5-litre naturally aspirated V12</span>{' '}
        producing 820 horsepower and 500lb-ft of torque. The soundtrack at
        high revs from this configuration remains one of the few things in the
        current automotive landscape that is genuinely difficult to replicate
        with anything else.
      </p>

      {/* Image 3 */}
      <div style={AS.imgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/news/ferrari-12cilindri-rosso-imola.jpg"
          alt="Ferrari 12Cilindri in Rosso Imola"
          className="article-img"
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
        />
        <p style={AS.imgCaption}>
          Photo: Mr.choppers / Wikimedia Commons (CC BY-SA 4.0). Standard 12Cilindri in Rosso Imola shown; Manuale details will differ.
        </p>
      </div>

      <h2 style={AS.h2}>Exclusivity by Design</h2>

      <p style={AS.p}>
        Production is capped at{' '}
        <span style={AS.highlight}>1,499 units</span>, and every car is
        built exclusively through Ferrari&rsquo;s{' '}
        <span style={AS.highlight}>Tailor Made</span> personalisation
        programme. There are no standard specification options. Each car is
        individually configured by the buyer, covering exterior colour,
        interior materials, stitching, and any number of bespoke details.
      </p>

      <p style={AS.p}>
        Pricing starts at{' '}
        <span style={AS.highlight}>€590,000</span>, which is €190,000 above
        the base 12Cilindri at €400,000. The premium covers the by-wire
        transmission engineering, the exclusivity of the limited run, and
        presumably the Tailor Made entry fee built into the process. At this
        price point, the conversation is no longer about value in any
        conventional sense.
      </p>

      <h2 style={AS.h2}>The Timing Is Hard to Ignore</h2>

      <p style={AS.p}>
        Ferrari announced the Manuale shortly after the reveal of the{' '}
        <span style={AS.highlight}>Ferrari Luce</span>, its first fully
        electric model. The proximity of those two announcements has drawn
        comment across the industry. Ferrari has been careful to position
        the Manuale as a response to genuine customer demand, and that is
        almost certainly true. Whether it also functions as a statement
        about the continued relevance of the internal combustion engine at
        the top of the market is a question Ferrari has left unanswered.
      </p>

      <p style={AS.p}>
        What is clear is that the{' '}
        <span style={AS.highlight}>Ferrari manual V12</span> combination
        now exists in production form, however unconventional the mechanical
        interpretation. For the buyers who will take one of the 1,499
        examples, the philosophical debate about whether it counts as a
        &ldquo;real&rdquo; manual is unlikely to matter much at ten-tenths
        on a mountain road.
      </p>

      {/* Source */}
      <div style={AS.sourceBox}>
        <span style={AS.sourceLabel}>SOURCE</span>
        <a
          href="https://www.topgear.com/car-news/supercars/new-12cilindri-manuale-a-v12-ferrari-a-manual-gearbox"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}
        >
          topgear.com &#8599;
        </a>
      </div>

      {/* CTA */}
      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>Get deal alerts on new arrivals</div>
        <p style={AS.ctaDesc}>
          Be first to know when clearance vehicles hit the market, updated weekly
        </p>
        <Link href="/coming-soon" style={AS.ctaBtn}>Get free alerts &rarr;</Link>
      </div>
    </>
  );
}
