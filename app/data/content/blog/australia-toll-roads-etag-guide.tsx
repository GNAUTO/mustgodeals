import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function AustraliaTollRoadsEtagGuideContent() {
  return (
    <>
      <p style={AS.p}>
        Australia has no cash toll booths. Not a single one. No lanes where you slow down,
        wind your window and hand over coins. If you drive onto a toll road expecting a booth
        at the end, you will drive straight through, never pay, and eventually receive a fine
        in the post. It happens to thousands of international visitors and new arrivals every
        year because nobody told them how the system actually works.
      </p>

      <p style={AS.p}>
        This is how{' '}
        <span style={AS.highlight}>Australian toll roads</span> work, what the difference is
        between a tag and a pass, what happens with a rental car, and what the consequences
        are if you ignore an unpaid toll.
      </p>

      <h2 style={AS.h2}>Every Toll Road in Australia Is Fully Electronic</h2>

      <p style={AS.p}>
        Overhead gantries fitted with cameras read your number plate as you pass underneath.
        There is no way to pay at the point of travel. The system matches your plate to an
        account and deducts the toll automatically. If your plate is not linked to an account,
        the system flags it as unpaid and generates a notice to the address on file with the
        vehicle registration.
      </p>

      <p style={AS.p}>
        Sydney has one of the densest networks of toll roads in Australia. Major routes include:
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>SYDNEY TOLL ROADS (KEY ROUTES)</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>M2 Hills Motorway</li>
          <li style={AS.tipItem}>M4 Western Motorway</li>
          <li style={AS.tipItem}>M5 South Western Motorway</li>
          <li style={AS.tipItem}>M7 Western Sydney Orbital</li>
          <li style={AS.tipItem}>WestConnex (M8 and tunnel sections)</li>
          <li style={AS.tipItem}>NorthConnex (Pennant Hills Road tunnel)</li>
          <li style={AS.tipItem}>Eastern Distributor (airport access)</li>
          <li style={AS.tipItem}>Sydney Harbour Bridge and Sydney Harbour Tunnel (southbound only)</li>
        </ul>
      </div>

      <p style={AS.p}>
        If you are driving from the airport into the city or heading west on any major motorway,
        there is a very high probability you will pass through at least one toll point.
      </p>

      <h2 style={AS.h2}>Tag vs Pass: Which One Do You Need?</h2>

      <p style={AS.p}>
        There are two ways to have a legitimate account linked to your number plate.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>TAG</div>
        <p style={AS.calloutText}>
          A small electronic device that mounts on the inside of your windscreen. When you pass
          a gantry, the device communicates directly with the overhead sensor and the toll is
          deducted from your linked account instantly. Tags are issued by providers such as
          Linkt (the main provider across NSW, VIC, and QLD) and are the right choice if you
          use toll roads regularly. Account holders get the lowest per-trip rate.
        </p>
      </div>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>PASS</div>
        <p style={AS.calloutText}>
          A temporary account linked to your number plate, without any physical device in the car.
          The gantry camera reads your plate, matches it to the pass account, and charges the trip.
          Passes are designed for short-term use: visitors, people in a rental, or residents who
          rarely use toll roads. You can register a pass up to 30 days before your first trip or
          within 72 hours after using a tolled road. After 72 hours the window closes and the
          charges become overdue notices.
        </p>
      </div>

      <p style={AS.p}>
        The key difference is cost per trip. Tag holders pay the standard toll rate. Pass users
        typically pay a small additional video processing fee per trip, since the system uses
        camera matching rather than the direct tag signal. For occasional use the difference is
        minor. For daily commuters, a tag pays for itself quickly.
      </p>

      <h2 style={AS.h2}>Rental Cars Require Specific Attention</h2>

      <p style={AS.p}>
        This is where visitors most commonly get caught out. Here is what you need to know
        before you drive a rental car anywhere near a tolled road:
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>RENTAL CAR TOLL RULES</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>
            <strong>Most major rental fleets already have a tag fitted.</strong> Hertz, Avis,
            Budget, Europcar and others typically include a Linkt or equivalent tag in their
            vehicles. When you pass a gantry, the rental company&rsquo;s account is charged and
            they then pass the toll cost to you, plus a daily administration fee ranging from
            roughly $3.30 to $5.50 per day for any day you use a tolled road.
          </li>
          <li style={AS.tipItem}>
            <strong>Do not bring your own personal tag into a rental car.</strong> Gantry sensors
            can detect both the tag inside the windscreen and the number plate. If the rental
            company&rsquo;s tag and your personal tag both respond to the same gantry, you can
            be billed twice for the same trip. Check with the rental company before placing your
            own tag anywhere near the windscreen.
          </li>
          <li style={AS.tipItem}>
            <strong>If the rental car has no tag fitted</strong>, you are responsible for
            registering a pass linked to the rental car&rsquo;s number plate before you use any
            toll road. If you do not, the toll notice is sent to the rental company and they will
            charge you the toll amount plus an administration fee of at least $30, sometimes more
            depending on the company&rsquo;s terms.
          </li>
        </ul>
      </div>

      <h2 style={AS.h2}>What Happens If You Do Not Pay</h2>

      <p style={AS.p}>
        Unpaid tolls do not disappear. The charges escalate in stages, and the process moves
        quickly:
      </p>

      <table style={AS.table}>
        <thead>
          <tr>
            <th style={AS.th}>Stage</th>
            <th style={AS.th}>Timeframe</th>
            <th style={AS.th}>What Gets Added</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={AS.td}>Toll notice issued</td>
            <td style={AS.td}>Days 1 to 14</td>
            <td style={AS.td}>Original toll plus a video matching fee</td>
          </tr>
          <tr>
            <td style={AS.td}>Administration fee added</td>
            <td style={AS.td}>Days 15 to 35</td>
            <td style={AS.td}>Additional administration charge on top</td>
          </tr>
          <tr>
            <td style={AS.td}>Enforcement fee added</td>
            <td style={AS.td}>Day 36 onwards</td>
            <td style={AS.td}>Enforcement fee escalates total significantly</td>
          </tr>
          <tr>
            <td style={AS.td}>Debt collection or rego action</td>
            <td style={AS.td}>Extended non-payment</td>
            <td style={AS.td}>Referral to Revenue NSW, possible registration suspension</td>
          </tr>
        </tbody>
      </table>

      <p style={AS.p}>
        A $6 toll that goes unpaid long enough can result in a debt many times the original
        amount. Revenue NSW has the authority to place a block on your vehicle&rsquo;s registration
        renewal until outstanding tolls are cleared.
      </p>

      <h2 style={AS.h2}>What Changed in July 2026</h2>

      <p style={AS.p}>
        From July 2026, Transurban and the NSW Government began transitioning toll notices
        from paper mail to digital delivery via email and SMS. If your account or vehicle
        registration details include a current email address or mobile number, you will receive
        any unpaid toll notices digitally, often faster than a letter would arrive.
      </p>

      <p style={AS.p}>
        For short-term visitors and new residents, this matters. If the contact details on file
        are outdated, a notice may go undelivered without you realising. Registering a current
        email address with Service NSW or your Linkt account reduces the risk of a notice being
        missed entirely.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>SEPARATELY: TOLL COST RELIEF FOR NSW RESIDENTS</div>
        <p style={AS.calloutText}>
          If you are a regular toll road commuter in NSW, a weekly cap and rego discount scheme
          introduced in 2026 may reduce your overall spend. That is a separate topic from
          the account setup covered here.{' '}
          <Link href="/news/nsw-toll-cap-rego-discount-2026" style={{ color: '#CCDA47', textDecoration: 'underline', fontWeight: 600 }}>
            Read the NSW toll cap and rego discount article for the full detail.
          </Link>
        </p>
      </div>

      <h2 style={AS.h2}>Quick Setup Guide</h2>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>IF YOU ARE NEW TO AUSTRALIA OR VISITING</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>
            <strong>Renting a car:</strong> Ask the rental company at pickup whether the vehicle
            has a tag fitted and what their daily toll admin fee is. If no tag, register a Linkt
            pass at linkt.com.au using the rental car&rsquo;s number plate before you drive.
          </li>
          <li style={AS.tipItem}>
            <strong>Your own vehicle, occasional use:</strong> Register a Linkt pass or casual
            account. No physical device required. Use a credit card and your number plate.
          </li>
          <li style={AS.tipItem}>
            <strong>Regular commuter:</strong> Order a Linkt tag online. It arrives by post within
            a few business days and mounts on the inside of your windscreen with a self-adhesive
            strip.
          </li>
          <li style={AS.tipItem}>
            <strong>Check existing notices:</strong> If you think you may have already driven on
            a toll road unregistered, check for any outstanding notices at Revenue NSW
            (revenue.nsw.gov.au) before fees escalate.
          </li>
        </ul>
      </div>

      <hr style={AS.divider} />

      <p style={AS.p}>
        The Australian toll road system works well once you understand it. The problem is that
        it assumes you already know there are no booths. For anyone arriving from a country
        where you stop and pay at a barrier, the entirely invisible, camera-based system is easy
        to miss until the notice arrives.
      </p>

      <div style={AS.disclaimer}>
        <p style={AS.disclaimerText}>
          Toll rates, pass fees, and escalation timelines are based on Linkt, Transurban, and
          Revenue NSW published guidelines and are subject to change. Administration fees charged
          by rental car companies vary by provider and contract terms. Always verify current figures
          directly with the relevant provider before travel. This article is general information
          only and does not constitute legal or financial advice.
        </p>
      </div>

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>New to Australia and looking for a car?</div>
        <p style={AS.ctaDesc}>Browse demo and clearance stock from Australian dealerships</p>
        <Link href="/listings" style={AS.ctaBtn}>View current listings →</Link>
      </div>
    </>
  );
}
