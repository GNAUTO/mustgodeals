import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function AustraliaNewRoadRulesJuly2026Content() {
  return (
    <>
      <p style={AS.p}>
        A round of{' '}
        <span style={AS.highlight}>new road rules took effect across Australia on 1 July 2026</span>,
        with each state introducing its own changes covering speeding fines, e-scooter
        regulation, motorcycle safety gear, toll costs, and learner driver requirements.
        Here is what changed, state by state.
      </p>

      {/* Image 1 */}
      <div style={AS.imgWrap}>
        <Image
          src="/images/news/australia-speed-sign-60kmh.jpg"
          alt="Australian 60km/h speed limit sign"
              width={1200}
              height={675}
          className="article-img"
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
        />
        <p style={AS.imgCaption}>Photo: Bidgee / Wikimedia Commons (CC BY 3.0)</p>
      </div>

      <h2 style={AS.h2}>New South Wales</h2>

      <p style={AS.p}>
        NSW has introduced{' '}
        <span style={AS.highlight}>mandatory protective gear for learner and provisional motorcycle riders</span>.
        From 1 July, L, P1, and P2 licence holders must wear approved protective
        gloves at all times when riding. Learner riders additionally must wear an
        approved high-visibility vest or jacket. The rules do not apply to fully
        licensed riders, though the gear is still recommended.
      </p>

      <p style={AS.p}>
        On roadwork speed limits, the state has also updated its rules to require
        temporary reduced speed limits to be removed outside active construction
        hours when it is safe to do so, addressing a longstanding complaint about
        empty worksites running reduced limits around the clock.
      </p>

      <p style={AS.p}>
        From{' '}
        <span style={AS.highlight}>6 July 2026</span>, the weekly toll cap for NSW
        motorists drops from{' '}
        <span style={AS.highlight}>$60 to $50</span>. The reduced cap applies for
        12 months. From September 2026, a one-off registration discount applies
        automatically: <span style={AS.highlight}>$100 for passenger vehicles</span>{' '}
        and <span style={AS.highlight}>$80 for motorcycles</span>. No application
        is required.
      </p>

      <h2 style={AS.h2}>Victoria</h2>

      <p style={AS.p}>
        Victoria has not introduced new traffic offences, but has strengthened the
        consequences of leaving existing fines unpaid. Changes to the infringement
        enforcement system mean that{' '}
        <span style={AS.highlight}>
          costs escalate more steeply for fines not paid by their initial due date
        </span>
        . The practical effect is to increase the total financial penalty for anyone
        who lets an infringement sit beyond the first payment deadline.
      </p>

      {/* Image 2 */}
      <div style={AS.imgWrap}>
        <Image
          src="/images/news/australia-road-speed-sign.jpg"
          alt="Australian rural road speed sign"
              width={1200}
              height={675}
          className="article-img"
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
        />
        <p style={AS.imgCaption}>Photo: Mattinbgn / Wikimedia Commons (CC BY 3.0)</p>
      </div>

      <h2 style={AS.h2}>Queensland: Major E-Scooter and E-Bike Overhaul</h2>

      <p style={AS.p}>
        Queensland has introduced the most significant{' '}
        <span style={AS.highlight}>state road law changes</span> in this round,
        targeting electric scooters and e-bikes with a comprehensive new framework.
        Police now have the power to{' '}
        <span style={AS.highlight}>seize and destroy non-compliant devices</span> on
        the spot. Random breath testing applies to riders, with a blood alcohol
        limit of <span style={AS.highlight}>0.05</span>.
      </p>

      <p style={AS.p}>
        Under the new rules, e-scooters and e-bikes may only be ridden on roads with
        a posted speed limit of{' '}
        <span style={AS.highlight}>60km/h or lower</span>, or in designated bicycle
        lanes. The maximum speed on roads is{' '}
        <span style={AS.highlight}>25km/h</span>, dropping to{' '}
        <span style={AS.highlight}>12km/h on footpaths</span> and when passing
        pedestrians.
      </p>

      <p style={AS.p}>
        From{' '}
        <span style={AS.highlight}>31 August 2026</span>, riders must be at least 16
        years old and hold a valid driver&rsquo;s licence or learner&rsquo;s permit.
        Where a rider under that age is caught in violation, parents or guardians
        can be issued the fine.
      </p>

      <h2 style={AS.h2}>South Australia: Speeding Fines Revised Upward</h2>

      <p style={AS.p}>
        South Australia has increased its speeding fines across all bands. The
        new amounts are now some of the highest in the country for mid-range
        and serious excess speed offences.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>SA SPEEDING FINES FROM 1 JULY 2026</div>
        <p style={AS.calloutText}>
          Less than 10km/h over: $215{'\n'}
          10{'–'}20km/h over: $484{'\n'}
          20{'–'}30km/h over: $998{'\n'}
          30{'–'}45km/h over: $1,793{'\n'}
          More than 45km/h over: $2,018{'\n'}
          Drink driving (BAC below 0.08): $904
        </p>
      </div>

      <p style={AS.p}>
        The drink-driving fine of{' '}
        <span style={AS.highlight}>$904 applies to a BAC reading below 0.08</span>.
        Higher readings attract more serious charges beyond a simple infringement.
      </p>

      <h2 style={AS.h2}>Western Australia</h2>

      <p style={AS.p}>
        Western Australia has no major changes in effect from 1 July. The state is,
        however, considering a significant overhaul of its learner driver requirements.
        Proposals under review include doubling the minimum learner period from{' '}
        <span style={AS.highlight}>6 to 12 months</span>, increasing mandatory
        supervised driving hours from{' '}
        <span style={AS.highlight}>50 to 80 hours</span> (with at least 10 at night),
        and extending the provisional licence period from 2 to 3 years. None of
        these have been enacted yet.
      </p>

      <h2 style={AS.h2}>ACT and Tasmania</h2>

      <p style={AS.p}>
        Neither the Australian Capital Territory nor Tasmania introduced significant
        new road rules this round. Both territories have applied standard
        inflation-indexed increases to existing penalty amounts, meaning some fines
        are marginally higher, but there are no structural changes to traffic law.
      </p>

      {/* Source */}
      <div style={AS.sourceBox}>
        <span style={AS.sourceLabel}>SOURCE</span>
        <a
          href="https://www.carsales.com.au/editorial/details/new-road-rules-now-in-effect-152395/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}
        >
          carsales.com.au &#8599;
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
