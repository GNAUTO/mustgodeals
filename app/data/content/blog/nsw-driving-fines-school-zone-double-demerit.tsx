import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function NswDrivingFinesSchoolZoneDoubleDemeritContent() {
  return (
    <>
      <p style={AS.p}>
        Most drivers think double demerit periods mean double the fine. They don&rsquo;t.
        The fine stays exactly the same. What doubles is the number of{' '}
        <span style={AS.highlight}>demerit points</span> recorded against your licence.
        That distinction matters more than most people realise, especially when school zones
        are involved.
      </p>

      <h2 style={AS.h2}>The Misunderstanding That Catches Drivers Out</h2>

      <p style={AS.p}>
        During a double demerit period, if you&rsquo;re caught using your phone while driving
        in NSW, you&rsquo;ll still pay $423. The fine does not change. But instead of 5 demerit
        points being recorded, you&rsquo;ll cop 10. For a P2 driver with a threshold of just
        7 points before licence suspension, that single offence ends their driving privilege on
        the spot.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>QUICK EXAMPLE: MOBILE PHONE OFFENCE</div>
        <p style={AS.calloutText}>
          Standard period: $423 fine, 5 demerit points.{' '}
          Double demerit period: $423 fine, 10 demerit points.{' '}
          The money leaving your account is identical. The hit to your licence record is not.
        </p>
      </div>

      <p style={AS.p}>
        Common offences affected by double demerit periods in NSW include speeding,
        mobile phone use, not wearing a seatbelt, and running a red light. The fine printed
        on the notice stays the same year-round. Only the point tally changes.
      </p>

      <h2 style={AS.h2}>Which States Actually Apply Double Demerits?</h2>

      <p style={AS.p}>
        Not every state uses this system. In Australia, only three jurisdictions apply double
        demerit periods:
      </p>

      <table style={AS.table}>
        <thead>
          <tr>
            <th style={AS.th}>State / Territory</th>
            <th style={AS.th}>Double Demerits?</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={AS.td}>NSW</td><td style={AS.td}>Yes — public holiday periods</td></tr>
          <tr><td style={AS.td}>ACT</td><td style={AS.td}>Yes — public holiday periods</td></tr>
          <tr><td style={AS.td}>WA</td><td style={AS.td}>Yes — public holiday periods</td></tr>
          <tr><td style={AS.td}>VIC, QLD, SA, TAS, NT</td><td style={AS.td}>No</td></tr>
        </tbody>
      </table>

      <p style={AS.p}>
        If you drive across a state border during a NSW double demerit period, the rules
        that apply are those of the state you are physically driving in at the time.
      </p>

      <h2 style={AS.h2}>2026 NSW Double Demerit Periods</h2>

      <p style={AS.p}>
        Double demerit periods in NSW typically coincide with major public holiday long weekends,
        when traffic volumes and fatality risk are highest. The confirmed periods for 2026
        are published by Transport for NSW before each event. Based on the 2026 public holiday
        calendar, the expected periods are:
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>2026 EXPECTED DOUBLE DEMERIT PERIODS (NSW)</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>Australia Day: 24 to 27 January 2026</li>
          <li style={AS.tipItem}>Easter: 2 to 6 April 2026</li>
          <li style={AS.tipItem}>Anzac Day: 24 to 27 April 2026</li>
          <li style={AS.tipItem}>King&rsquo;s Birthday: 6 to 8 June 2026</li>
          <li style={AS.tipItem}>Labour Day: 3 to 6 October 2026</li>
          <li style={AS.tipItem}>Christmas and New Year: 24 December 2026 to 1 January 2027</li>
        </ul>
        <p style={{ ...AS.tipItem, marginTop: '0.75rem', marginBottom: 0, color: '#888', fontSize: '12px' }}>
          Confirm exact start and end times at the Transport for NSW website before each period.
        </p>
      </div>

      <h2 style={AS.h2}>Why School Zone Fines Hit Harder</h2>

      <p style={AS.p}>
        School zones operate at a 40 km/h limit and apply on school days during two windows:
        8:00 to 9:30 am and 2:30 to 4:00 pm. Outside those hours, on weekends, public holidays,
        or during school holidays, the reduced limit does not apply and the zone functions as a
        normal road.
      </p>

      <p style={AS.p}>
        The reason school zone speeding fines sting is that the penalties are approximately
        double the standard amount. The demerit point tally is the same as regular speeding,
        but the fine itself is roughly twice as high. During a double demerit period, those
        points then double on top.
      </p>

      <table style={AS.table}>
        <thead>
          <tr>
            <th style={AS.th}>Speed Over Limit</th>
            <th style={AS.th}>Standard Fine</th>
            <th style={AS.th}>School Zone Fine</th>
            <th style={AS.th}>Demerit Points</th>
            <th style={AS.th}>Double Demerit Points</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={AS.td}>1 to 10 km/h</td>
            <td style={AS.td}>$143</td>
            <td style={AS.td}>$271</td>
            <td style={AS.td}>1 pt</td>
            <td style={AS.td}>2 pts</td>
          </tr>
          <tr>
            <td style={AS.td}>10 to 20 km/h</td>
            <td style={AS.td}>$365</td>
            <td style={AS.td}>$746</td>
            <td style={AS.td}>3 pts</td>
            <td style={AS.td}>6 pts</td>
          </tr>
          <tr>
            <td style={AS.td}>20 to 30 km/h</td>
            <td style={AS.td}>$631</td>
            <td style={AS.td}>$1,284</td>
            <td style={AS.td}>4 pts</td>
            <td style={AS.td}>8 pts</td>
          </tr>
          <tr>
            <td style={AS.td}>30 to 45 km/h</td>
            <td style={AS.td}>$1,302</td>
            <td style={AS.td}>$2,660</td>
            <td style={AS.td}>5 pts</td>
            <td style={AS.td}>10 pts</td>
          </tr>
          <tr>
            <td style={AS.td}>45 km/h and over</td>
            <td style={AS.td}>$3,026</td>
            <td style={AS.td}>$3,780+</td>
            <td style={AS.td}>6 pts</td>
            <td style={AS.td}>12 pts</td>
          </tr>
        </tbody>
      </table>

      <p style={AS.p}>
        A P2 driver doing 15 km/h over in a school zone during an Easter double demerit period
        will receive a $746 fine and 6 demerit points in a single moment. Their entire annual
        point threshold used up before they reach the next intersection.
      </p>

      <h2 style={AS.h2}>How Many Points Before You Lose Your Licence?</h2>

      <p style={AS.p}>
        Demerit points in NSW accumulate over a rolling three-year period. The thresholds vary
        significantly based on your licence class:
      </p>

      <table style={AS.table}>
        <thead>
          <tr>
            <th style={AS.th}>Licence Type</th>
            <th style={AS.th}>Suspension Threshold</th>
            <th style={AS.th}>Rolling Period</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={AS.td}>Unrestricted (full)</td><td style={AS.td}>13 points</td><td style={AS.td}>3 years</td></tr>
          <tr><td style={AS.td}>P2 provisional</td><td style={AS.td}>7 points</td><td style={AS.td}>3 years</td></tr>
          <tr><td style={AS.td}>P1 provisional</td><td style={AS.td}>4 points</td><td style={AS.td}>3 years</td></tr>
          <tr><td style={AS.td}>Learner</td><td style={AS.td}>4 points</td><td style={AS.td}>3 years</td></tr>
        </tbody>
      </table>

      <p style={AS.p}>
        Points do not reset at a fixed calendar date. Each infringement is stamped with its
        own date, and only falls off three years from that specific offence date.
      </p>

      <h2 style={AS.h2}>Practical Steps If You Receive a Fine</h2>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>WHAT YOU CAN DO</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>
            <strong>Request a review within 28 days.</strong> Revenue NSW accepts online applications
            at service.nsw.gov.au. A review does not guarantee a reduced outcome but puts your
            case in front of an officer.
          </li>
          <li style={AS.tipItem}>
            <strong>Apply for a caution if your record is clean.</strong> If you were travelling
            less than 10 km/h over the limit and have held an unblemished driving record for the
            past 10 years, you may be eligible to have the fine converted to a formal caution
            with no demerit points.
          </li>
          <li style={AS.tipItem}>
            <strong>Check your demerit point balance.</strong> You can view your current tally
            through a Service NSW account at any time.
          </li>
          <li style={AS.tipItem}>
            <strong>Consider a good behaviour period.</strong> If you are close to the threshold,
            you may be able to elect a 12-month good behaviour period instead of immediate suspension.
          </li>
        </ul>
      </div>

      <hr style={AS.divider} />

      <p style={AS.p}>
        The broader lesson is straightforward. During double demerit periods, your bank balance
        takes the same hit. Your licence record takes twice the hit. In a school zone, the fine
        is already higher before doubling factors are applied. The compounding effect catches
        drivers off guard because most people have not done the actual maths.
      </p>

      <div style={AS.disclaimer}>
        <p style={AS.disclaimerText}>
          Fine amounts and demerit point values are based on Transport for NSW and Revenue NSW
          guidelines and are indicative only. Figures are subject to change and should be
          independently verified at the time of any offence. This article is general information
          only and does not constitute legal advice. For legal guidance on a specific infringement,
          consult a qualified traffic law practitioner.
        </p>
      </div>

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>Looking for a new car?</div>
        <p style={AS.ctaDesc}>Browse demo and clearance stock from Australian dealerships</p>
        <Link href="/listings" style={AS.ctaBtn}>View current listings →</Link>
      </div>
    </>
  );
}
