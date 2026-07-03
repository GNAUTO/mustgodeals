import { AS } from '../../../components/posts/article-styles';

export default function NswRoadworkSpeedLimitsOutsideWorkHoursContent() {
  return (
    <>

          <p style={AS.p}>
            New South Wales has introduced a law requiring roadwork{" "}
            <span style={AS.highlight}>speed limit signs to be removed</span> outside of active
            work hours. Under the new rules, when no workers are present on site and it is not
            designated work time, operators must take down temporary speed restrictions if it is
            safe to do so. The change is aimed at reducing unnecessary congestion on NSW roads and
            delivering on a Minns Labor government{" "}
            <span style={AS.highlight}>election commitment</span>.
          </p>

          <h2 style={AS.h2}>What the New Rule Requires</h2>

          <p style={AS.p}>
            Previously, temporary speed limit signs erected for roadwork zones could remain in
            place around the clock, even when no construction activity was taking place. Drivers
            faced reduced speed limits through worksites at night, on weekends, and during other
            periods when workers had left the site.
          </p>

          <p style={AS.p}>
            The new legislation changes that. Roadwork operators are now legally required to remove
            or cover speed limit signs when workers are not present on site, provided it is safe to
            do so. The &ldquo;safe to do so&rdquo; qualifier is important: if hazards remain on the
            road surface or the physical layout of the worksite still poses a risk, a reduced speed
            limit can remain in effect regardless of whether workers are present.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>WHAT CHANGES UNDER THE NEW LAW</div>
            <p style={AS.calloutText}>
              Before: Temporary speed limit signs could remain in place 24 hours a day, 7 days a week, regardless of whether workers were on site.
              After: Signs must be removed or covered outside work hours when no workers are present, if it is safe to do so.
              Unchanged: Safety requirements remain in place. If a genuine hazard exists, lower limits can still apply at any time.
            </p>
          </div>

          <h2 style={AS.h2}>Minister Aitchison on the Change</h2>

          <p style={AS.p}>
            NSW Minister for Roads Jenny Aitchison said the reform was a direct response to
            community frustration with speed limits that applied long after workers had gone home.
            She emphasised that the change does not weaken road safety standards and that the
            obligation to maintain a safe environment on and around worksites remains fully intact.
          </p>

          <p style={AS.p}>
            Aitchison framed the reform as a practical measure: speed limit signs that are present
            when there is no active work or hazard to justify them erode driver compliance over
            time, which can actually reduce the effectiveness of legitimate speed restrictions.
            Removing signs when they are not needed is intended to make the remaining restrictions
            more meaningful to drivers.
          </p>

          <h2 style={AS.h2}>A Minns Government Election Commitment</h2>

          <p style={AS.p}>
            The Minns Labor government flagged this change during the lead-up to the 2023 NSW state
            election. The policy was positioned as a commonsense measure to ease frustration among
            motorists who regularly encountered reduced speed zones on otherwise clear roads with no
            sign of any active construction.
          </p>

          <p style={AS.p}>
            NSW is not alone in looking at this issue. Several other Australian states have already
            moved toward similar requirements, or have guidelines encouraging contractors to remove
            temporary signage outside active work periods. The NSW change brings formal legal
            obligation to what had previously been left to contractor discretion.
          </p>

          <h2 style={AS.h2}>What It Means for Drivers</h2>

          <p style={AS.p}>
            In practice, drivers should begin to see fewer instances of reduced speed limits on
            routes where roadwork is underway but no workers are visible. Whether the change has a
            meaningful impact on travel times will depend on how consistently the requirement is
            enforced and how quickly contractors adapt their sign management practices.
          </p>

          <p style={AS.p}>
            Enforcement of the new obligation sits with the relevant road authority and Transport
            for NSW. Details on penalties for non-compliance have not been widely publicised at
            this stage.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>SOURCE</span>
            <a
              href="https://www.drive.com.au/news/roadwork-speed-limits-canned-outside-work-hours-in-nsw/"
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
            <p style={AS.ctaDesc}>Be first to know when clearance vehicles hit the market, updated weekly</p>
            <a href="/coming-soon" style={AS.ctaBtn}>Get free alerts →</a>
          </div>

    </>
  );
}
