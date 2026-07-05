import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function AustraliaCarRecallsJune2026Content() {
  return (
    <>
      {/* Hero image */}
      <div style={AS.imgWrap}>
        <Image
          src="https://pressroom.toyota.com.au/-/media/toyota/pressroom/banners/2024/02/13/01/06/lnd_my24_0020_v001-copy.jpg"
          alt="Toyota Prado 2024 Australia"
              width={1200}
              height={675}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Image: Toyota Australia Media</p>
      </div>

      <p style={AS.p}>
        June 2026 has been a busy month for Australia&rsquo;s vehicle recall system. Across 27 days,{" "}
        <span style={AS.highlight}>nine manufacturers issued 11 separate recalls</span>, covering 16
        individual models. The list spans everything from Chinese newcomers to European stalwarts —
        and if you own any of the vehicles below, a free repair is waiting for you at your nearest
        authorised dealer.
      </p>

      <p style={AS.p}>
        This is your complete guide to every car recalled in Australia in June 2026, how to check
        if your vehicle is affected, and what to do next.
      </p>

      <h2 style={AS.h2}>Every June 2026 Recall at a Glance</h2>

      <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
        <table style={AS.table}>
          <thead>
            <tr>
              <th style={AS.th}>Date</th>
              <th style={AS.th}>Year</th>
              <th style={AS.th}>Make</th>
              <th style={AS.th}>Model</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["23 June 2026", "2023–2026", "Chery", "Tiggo 8 Pro Max"],
              ["18 June 2026", "2024–2025", "Volkswagen", "Polo, T-Roc, T-Cross"],
              ["18 June 2026", "2024–2026", "Hyundai", "Inster (AX)"],
              ["17 June 2026", "2015–2022", "Lexus", "RC F"],
              ["12 June 2026", "2024–2025", "Land Rover", "Range Rover"],
              ["5 June 2026", "2025", "Hyundai", "Palisade (LX3)"],
              ["5 June 2026", "2022–2024", "Nissan", "Qashqai"],
              ["3 June 2026", "2024–2025", "Lexus", "GX550, UX300e, UX300h"],
              ["3 June 2026", "2024–2025", "Toyota", "Prado (250 Series)"],
              ["2 June 2026", "2020–2023", "Kia", "Picanto"],
              ["2 June 2026", "2025", "Cupra", "Terramar"],
            ].map(([date, year, make, model], i) => (
              <tr key={i}>
                <td style={AS.td}>{date}</td>
                <td style={AS.td}>{year}</td>
                <td style={{ ...AS.td, fontWeight: 600 }}>{make}</td>
                <td style={AS.td}>{model}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={AS.h2}>What the Recalls Actually Mean</h2>

      <p style={AS.p}>
        Recalls don&rsquo;t always mean your car is about to break down — but they do mean a
        manufacturer has identified a defect serious enough to notify the government and fix it
        at no cost to you. Common triggers include faulty airbag inflators, software errors in
        safety systems, fuel leaks, or brake issues. In each case, the fix is free and mandatory
        for the manufacturer to carry out.
      </p>

      <p style={AS.p}>
        A few notable entries this month: the{" "}
        <span style={AS.highlight}>Volkswagen trio (Polo, T-Roc, T-Cross)</span> and{" "}
        <span style={AS.highlight}>Lexus RC F</span> covering models stretching back to 2015 —
        which means if you bought one second-hand, your vehicle could still be eligible. Age of
        purchase doesn&rsquo;t matter; what matters is the VIN and build date.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>IMPORTANT</div>
        <p style={AS.calloutText}>
          Even demo vehicles are subject to recalls. If a dealer is selling a demonstrator and it
          appears on the recall list, the dealer is legally required to complete the repair before
          handing the car over to the new owner.
        </p>
      </div>

      <h2 style={AS.h2}>How to Check If Your Car Is on the List</h2>

      <p style={AS.p}>
        The quickest way is the Australian Government&rsquo;s official recall database. You can
        search by make, model, or VIN (Vehicle Identification Number) — the 17-digit code stamped
        on your dashboard or door frame.
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>HOW TO CHECK YOUR VEHICLE</div>
        <ol style={AS.tipList}>
          <li style={AS.tipItem}>
            Go to{" "}
            <a
              href="https://www.vehiclerecalls.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1A1A1A", fontWeight: 600 }}
            >
              vehiclerecalls.gov.au
            </a>
          </li>
          <li style={AS.tipItem}>Select &ldquo;Vehicle&rdquo; from the product category</li>
          <li style={AS.tipItem}>Search by make/model or enter your VIN for an exact match</li>
          <li style={AS.tipItem}>If a recall is listed, contact your authorised dealer to book the repair</li>
        </ol>
      </div>

      <p style={AS.p}>
        Your manufacturer may also contact you directly by post or email — but don&rsquo;t wait
        for that letter. If you recognise your car in the table above, check the database and
        book in proactively. There&rsquo;s no cost to you, and in most cases the repair takes
        less than a day.
      </p>

      <h2 style={AS.h2}>What Happens Next</h2>

      <p style={AS.p}>
        Once a recall is registered, your authorised dealership receives the relevant parts and
        a technical service bulletin explaining the fix. You book an appointment, drop the car
        off, and the repair is completed under the manufacturer&rsquo;s obligation — no invoice,
        no labour charge, no parts cost.
      </p>

      <p style={AS.p}>
        If you&rsquo;re in the market for a used car or a demo vehicle, a quick recall check is
        a smart step before signing anything. An open recall doesn&rsquo;t necessarily mean you
        shouldn&rsquo;t buy the car — but it does mean the seller should complete the repair before
        delivery, or give you a clear timeline for when it will be done.
      </p>

      <div style={AS.sourceBox}>
        <span style={AS.sourceLabel}>SOURCE</span>
        <a
          href="https://www.drive.com.au/news/every-car-recalled-so-far-in-june-2026/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
        >
          drive.com.au ↗
        </a>
      </div>

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>Looking for a demo car deal?</div>
        <p style={AS.ctaDesc}>
          Demo cars must be recall-free before handover. Browse current stock from authorised dealers.
        </p>
        <Link href="/listings" style={AS.ctaBtn}>Browse demo listings →</Link>
      </div>
    </>
  );
}
