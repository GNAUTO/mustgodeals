import { AS } from '../../../components/posts/article-styles';

export default function AussieSpeedingFinesNotDeliberateNavmanSurveyContent() {
  return (
    <>
      <p style={AS.p}>
        A new survey commissioned by Navman found that inattention is the leading cause of
        speeding fines among Australian drivers, not deliberate law breaking. Of those who
        received a fine during 2025, 26% attributed it to simply not paying attention at
        the time. That figure was the highest single reason recorded across all responses.
      </p>

      <h2 style={AS.h2}>What the survey found</h2>

      <p style={AS.p}>
        When the three most passive causes are combined, they account for nearly half of
        all responses. Drivers were not choosing to speed. They missed a sign, drove into
        an area they did not know, or let their attention drift.
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>WHY DRIVERS SAID THEY RECEIVED A SPEEDING FINE</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>26% said they were not paying attention</li>
          <li style={AS.tipItem}>19% said they missed a speed sign due to poor sizing, confusing placement, or bad positioning</li>
          <li style={AS.tipItem}>17% said they were driving in an unfamiliar area</li>
          <li style={AS.tipItem}>Around 20% said they were matching the pace of surrounding traffic</li>
          <li style={AS.tipItem}>17% said they were running late</li>
          <li style={AS.tipItem}>6% cited a medical or personal emergency</li>
        </ul>
      </div>

      <p style={AS.p}>
        Only 12% of those surveyed acknowledged that they had deliberately exceeded the
        speed limit when they received their fine. That number is considerably smaller than
        the share who described circumstances that had more to do with environment and
        awareness than with intent.
      </p>

      <h2 style={AS.h2}>Why the finding matters now</h2>

      <p style={AS.p}>
        Speed enforcement across Australia has been increasing, and the start of a new
        school term brings additional reduced zones into residential and suburban areas.
        Navman pointed to this period as one where staying actively focused on the road
        and monitoring speed limit signage is more important than at other times of year.
      </p>

      <p style={AS.p}>
        The survey results suggest that a significant portion of fines issued are not the
        result of drivers choosing to ignore the law. A speed limit that drops on an
        unfamiliar stretch of road, a sign obscured by a parked vehicle or poorly lit at
        night, or a moment of distraction inside the car can each produce a fine without
        the driver ever making a conscious decision to exceed the limit.
      </p>

      <p style={AS.p}>
        The practical implication is that most drivers can reduce their fine risk not by
        changing their attitude toward speed laws, which most already follow, but by
        staying alert to limit changes in real time and treating unfamiliar roads as
        zones where the posted limit may be lower than expected.
      </p>
    </>
  );
}
