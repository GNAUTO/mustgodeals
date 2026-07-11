import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What new road rules took effect in Australia in July 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "New road rules took effect from 1 July 2026. Key changes include: NSW making protective gloves mandatory for learner and P-plate motorcycle riders; QLD giving police power to seize and destroy non-compliant electric scooters on the spot; SA increasing speeding fines across all bands with the highest fine reaching $2,018; and NSW reducing its weekly toll cap from $60 to $50 from 6 July 2026."
      }
    },
    {
      "@type": "Question",
      "name": "What are Queensland's new electric scooter rules from July 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "From 1 July 2026, Queensland police can seize and destroy non-compliant electric scooters and e-bikes on the spot. Riders face random breath testing with a 0.05 BAC limit. Scooters can only be ridden on roads with a 60km/h or lower speed limit, at a maximum 25km/h on roads or 12km/h on footpaths. From 31 August 2026, riders must be at least 16 and hold a valid licence."
      }
    },
    {
      "@type": "Question",
      "name": "What are the new speeding fines in South Australia from 1 July 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "South Australia's new speeding fines from 1 July 2026 are: under 10km/h over the limit $215; 10 to 20km/h over $484; 20 to 30km/h over $998; 30 to 45km/h over $1,793; over 45km/h over the limit $2,018. A drink driving infringement (BAC below 0.08) carries a $904 fine."
      }
    },
    {
      "@type": "Question",
      "name": "What changed for NSW drivers in July 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "NSW introduced three changes in July 2026. Learner (L) and provisional (P1 and P2) motorcycle riders must now wear approved protective gloves at all times when riding, with L-plate riders also required to wear a high-visibility vest or jacket. The weekly toll cap for NSW motorists dropped from $60 to $50 from 6 July 2026. From September 2026, a one-off $100 registration discount for passenger vehicles and $80 for motorcycles applies automatically."
      }
    },
    {
      "@type": "Question",
      "name": "Did Victoria introduce new road rules in July 2026?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Victoria did not introduce new traffic offences in July 2026, but strengthened consequences for unpaid fines. The infringement enforcement system now escalates costs more steeply for fines not paid by their initial due date. This increases the total financial penalty for anyone who lets an infringement sit past the first payment deadline."
      }
    },
    {
      "@type": "Question",
      "name": "Are the July 2026 road rule changes the same in every Australian state?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Each state introduced its own changes. Queensland made the most significant changes with its electric scooter overhaul. South Australia increased speeding fines. NSW introduced motorcycle gear requirements and reduced its toll cap. Victoria tightened unpaid fine escalation. Western Australia had no new rules take effect in July, though learner driver reforms are under review. ACT and Tasmania applied standard inflation-linked fine increases only."
      }
    }
  ]
};

const clusterCard: React.CSSProperties = {
  display: "block",
  borderLeft: "3px solid #CCDA47",
  padding: "10px 16px",
  background: "white",
  borderRadius: "6px",
  marginBottom: "10px",
  textDecoration: "none",
  color: "#1A1A1A",
};

const clusterMeta: React.CSSProperties = {
  fontSize: "10px",
  color: "#8A9A10",
  fontWeight: 600,
  letterSpacing: "0.7px",
  textTransform: "uppercase",
  marginBottom: "4px",
};

const clusterTitle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 600,
  color: "#1A1A1A",
  lineHeight: 1.4,
};

export default function AustraliaNewRoadRulesJuly2026Content() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Freshness badge */}
      <p style={{ fontSize: "12px", color: "#999", marginBottom: "1rem", marginTop: "-0.5rem" }}>
        Last updated July 11, 2026
      </p>

      <p style={AS.p}>
        A round of{' '}
        <span style={AS.highlight}>new road rules took effect across Australia on 1 July 2026</span>,
        with each state introducing its own changes covering speeding fines, electric scooter
        regulation, motorcycle safety gear, toll costs, and learner driver requirements.
        Here is what changed, state by state.
      </p>

      {/* Quick-answer summary box */}
      <div style={{ ...AS.tipBox, borderLeft: "4px solid #CCDA47" }}>
        <div style={AS.tipTitle}>KEY CHANGES FROM 1 JULY 2026</div>
        <ul style={{ ...AS.tipList, marginTop: "4px" }}>
          <li style={AS.tipItem}><strong>NSW</strong> — Learner and P-plate motorcycle riders must wear protective gloves</li>
          <li style={AS.tipItem}><strong>NSW</strong> — Weekly toll cap drops from $60 to $50 from 6 July</li>
          <li style={AS.tipItem}><strong>QLD</strong> — Police can seize and destroy non-compliant electric scooters on the spot</li>
          <li style={AS.tipItem}><strong>QLD</strong> — Riders must hold a licence from 31 August 2026</li>
          <li style={AS.tipItem}><strong>SA</strong> — Speeding fines increased across all bands, up to $2,018 for serious excess speed</li>
          <li style={AS.tipItem}><strong>VIC</strong> — Unpaid fine costs escalate more steeply past the initial payment deadline</li>
        </ul>
      </div>

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

      <h2 style={AS.h2}>Queensland. Electric Scooters and Electric Bikes Face Major New Rules</h2>

      <p style={AS.p}>
        Queensland has introduced the most significant{' '}
        <span style={AS.highlight}>state road law changes</span> in this round,
        targeting electric scooters and electric bikes with a comprehensive new framework.
        Police now have the power to{' '}
        <span style={AS.highlight}>seize and destroy non-compliant devices</span> on
        the spot. Random breath testing applies to riders, with a blood alcohol
        limit of <span style={AS.highlight}>0.05</span>.
      </p>

      <p style={AS.p}>
        Under the new rules, electric scooters and electric bikes may only be ridden on roads with
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

      <h2 style={AS.h2}>South Australia. Speeding Fines Revised Upward</h2>

      <p style={AS.p}>
        South Australia has increased its speeding fines across all bands. The
        new amounts are now some of the highest in the country for mid-range
        and serious excess speed offences.
      </p>

      <div style={{ overflowX: "auto", margin: "16px 0 8px" }}>
        <table style={AS.table}>
          <thead>
            <tr>
              <th style={{ ...AS.th, width: "65%" }}>Speed over limit</th>
              <th style={{ ...AS.th, textAlign: "right" }}>Fine (from 1 July 2026)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={AS.td}>Under 10km/h over the limit</td>
              <td style={AS.tdRight}>$215</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>10 to 20km/h over the limit</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>$484</td>
            </tr>
            <tr>
              <td style={AS.td}>20 to 30km/h over the limit</td>
              <td style={AS.tdRight}>$998</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>30 to 45km/h over the limit</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>$1,793</td>
            </tr>
            <tr>
              <td style={AS.td}>Over 45km/h over the limit</td>
              <td style={AS.tdRight}>$2,018</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>Drink driving (BAC under 0.08)</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>$904</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={AS.p}>
        The drink driving fine of{' '}
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

      {/* FAQ Section */}
      <h2 style={AS.h2}>Frequently asked questions</h2>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          What new road rules took effect in Australia in July 2026?
        </p>
        <p style={AS.p}>
          From 1 July 2026, NSW mandated protective gloves for learner and P-plate motorcycle riders.
          Queensland gave police power to seize non-compliant electric scooters on the spot.
          South Australia increased speeding fines across all bands to as high as $2,018.
          NSW also reduced its weekly toll cap from $60 to $50 from 6 July.
          Each state introduced its own changes.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          What are Queensland&rsquo;s new electric scooter rules?
        </p>
        <p style={AS.p}>
          From 1 July 2026, Queensland police can seize and destroy non-compliant electric
          scooters on the spot. A 0.05 BAC limit applies. Scooters are limited to roads with
          a 60km/h or lower speed limit at a maximum of 25km/h, or 12km/h on footpaths.
          From 31 August 2026, riders must be at least 16 and hold a valid licence.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          What are South Australia&rsquo;s new speeding fines from July 2026?
        </p>
        <p style={AS.p}>
          SA&rsquo;s new fines range from $215 for under 10km/h over the limit up to $2,018
          for more than 45km/h over. Mid-range offences at 20 to 30km/h over now attract $998.
          A drink driving infringement at BAC under 0.08 carries a $904 fine.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          What changed for NSW drivers in July 2026?
        </p>
        <p style={AS.p}>
          Three changes affect NSW drivers. Learner and P-plate motorcycle riders must
          now wear protective gloves, with L-plate riders also needing a high-visibility
          vest or jacket. The weekly toll cap dropped from $60 to $50 from 6 July. From
          September 2026, a $100 one-off registration discount for passenger vehicles
          and $80 for motorcycles applies automatically.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          Did Victoria introduce new road rules in July 2026?
        </p>
        <p style={AS.p}>
          Victoria did not create new traffic offences, but tightened the cost structure
          for unpaid infringements. Fines not paid by their initial due date now escalate
          more steeply, increasing the total penalty for anyone who lets a fine sit unpaid.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          Are the July 2026 road rule changes the same in every Australian state?
        </p>
        <p style={AS.p}>
          No. Each state introduced different changes. Queensland made the most significant
          shift with its electric scooter overhaul. SA raised speeding fines. NSW changed
          motorcycle gear rules and its toll cap. VIC tightened unpaid fine escalation.
          WA had no new rules take effect in July. ACT and Tasmania applied inflation
          increases only.
        </p>
      </div>

      <hr style={AS.divider} />

      {/* Internal links */}
      <h2 style={AS.h2}>Related road rules guides</h2>

      <Link href="/blog/nsw-driving-fines-school-zone-double-demerit" style={clusterCard}>
        <div style={clusterMeta}>NSW Road Rules</div>
        <div style={clusterTitle}>NSW Double Demerit Fines. Most Drivers Get This Wrong</div>
      </Link>

      <Link href="/blog/australia-toll-roads-etag-guide" style={clusterCard}>
        <div style={clusterMeta}>Living in Australia</div>
        <div style={clusterTitle}>Australia Has No Toll Booths. Here Is What That Means for Every Driver</div>
      </Link>

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
