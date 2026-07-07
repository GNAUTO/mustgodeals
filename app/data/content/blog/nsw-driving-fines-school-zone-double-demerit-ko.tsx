import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function NswDrivingFinesSchoolZoneDoubleDemeritKoContent() {
  return (
    <>
      <p style={AS.p}>
        더블 데메리트 기간에 벌금도 2배가 된다고 알고 있는 운전자가 많다. 이건 오해다.
        벌금 금액은 그대로다. 달라지는 건 오직{' '}
        <span style={AS.highlight}>벌점(demerit point)</span>뿐이다. 이 차이가 왜 중요한지,
        스쿨존까지 겹치면 어떤 일이 벌어지는지 구체적으로 살펴보자.
      </p>

      <h2 style={AS.h2}>많은 운전자가 오해하는 것</h2>

      <p style={AS.p}>
        NSW에서 더블 데메리트 기간 중 운전 중 휴대폰 사용으로 적발되면 $423의 벌금을 낸다.
        평소와 똑같은 금액이다. 하지만 평소 5점이었던 벌점은 10점으로 뛴다. P2 면허 소지자의
        정지 기준이 7점이라는 점을 감안하면, 이 위반 하나로 즉시 면허가 정지된다는 뜻이다.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>예시: 운전 중 휴대폰 사용</div>
        <p style={AS.calloutText}>
          평상시: $423 벌금 / 5 벌점.{' '}
          더블 데메리트 기간: $423 벌금 / 10 벌점.{' '}
          지갑에서 나가는 돈은 같다. 면허에 남는 흔적은 두 배다.
        </p>
      </div>

      <p style={AS.p}>
        더블 데메리트 기간에 적용되는 대표 위반 항목은 과속, 휴대폰 사용, 안전벨트 미착용,
        신호 위반 등이다. 고지서에 찍히는 벌금액은 1년 내내 동일하다. 바뀌는 건 벌점 숫자뿐이다.
      </p>

      <h2 style={AS.h2}>더블 데메리트를 시행하는 주는 어디인가</h2>

      <p style={AS.p}>
        호주 전체가 더블 데메리트를 적용하는 건 아니다. 이 제도를 운영하는 곳은 세 개 주·준주뿐이다.
      </p>

      <table style={AS.table}>
        <thead>
          <tr>
            <th style={AS.th}>주 / 준주</th>
            <th style={AS.th}>더블 데메리트 적용 여부</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={AS.td}>NSW</td><td style={AS.td}>적용 (공휴일 기간)</td></tr>
          <tr><td style={AS.td}>ACT</td><td style={AS.td}>적용 (공휴일 기간)</td></tr>
          <tr><td style={AS.td}>WA</td><td style={AS.td}>적용 (공휴일 기간)</td></tr>
          <tr><td style={AS.td}>VIC, QLD, SA, TAS, NT</td><td style={AS.td}>미적용</td></tr>
        </tbody>
      </table>

      <p style={AS.p}>
        NSW 더블 데메리트 기간에 타주를 운전하고 있다면, 그 주의 규정이 적용된다.
        반대로 NSW 안에 있으면 타주에서 왔더라도 NSW 벌점 기준이 그대로 적용된다.
      </p>

      <h2 style={AS.h2}>2026년 NSW 더블 데메리트 기간</h2>

      <p style={AS.p}>
        더블 데메리트 기간은 주요 공휴일 연휴와 맞물린다. Transport for NSW가 각 행사 전에
        공식 기간을 발표한다. 2026년 공휴일 일정을 기준으로 예상되는 기간은 다음과 같다.
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>2026년 NSW 더블 데메리트 예상 기간</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>오스트레일리아 데이: 1월 24일(토) ~ 1월 27일(화)</li>
          <li style={AS.tipItem}>부활절 연휴: 4월 2일(목) ~ 4월 6일(월)</li>
          <li style={AS.tipItem}>안작 데이: 4월 24일(금) ~ 4월 27일(월)</li>
          <li style={AS.tipItem}>킹스 버스데이: 6월 6일(토) ~ 6월 8일(월)</li>
          <li style={AS.tipItem}>레이버 데이: 10월 3일(토) ~ 10월 6일(화)</li>
          <li style={AS.tipItem}>크리스마스·새해: 12월 24일(목) ~ 2027년 1월 1일(금)</li>
        </ul>
        <p style={{ ...AS.tipItem, marginTop: '0.75rem', marginBottom: 0, color: '#888', fontSize: '12px' }}>
          정확한 시작·종료 시각은 Transport for NSW 공식 사이트에서 각 기간 전에 반드시 확인할 것.
        </p>
      </div>

      <h2 style={AS.h2}>스쿨존 벌금이 더 비싼 이유</h2>

      <p style={AS.p}>
        스쿨존은 제한속도 40km/h가 적용되며, 학기 중 평일 등교 시간(오전 8:00~9:30)과
        하교 시간(오후 2:30~4:00)에만 작동한다. 방학, 주말, 공휴일에는 일반 도로와 동일하게
        취급된다.
      </p>

      <p style={AS.p}>
        스쿨존 과속 벌금이 부담스러운 이유는 일반 도로의 약 2배 수준이기 때문이다. 벌점 자체는
        일반 과속과 동일하지만, 벌금액이 크게 높다. 여기에 더블 데메리트 기간까지 겹치면
        벌점이 두 배로 뛴다.
      </p>

      <table style={AS.table}>
        <thead>
          <tr>
            <th style={AS.th}>초과 속도</th>
            <th style={AS.th}>일반 벌금</th>
            <th style={AS.th}>스쿨존 벌금</th>
            <th style={AS.th}>벌점</th>
            <th style={AS.th}>더블 데메리트</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={AS.td}>1~10 km/h</td>
            <td style={AS.td}>$143</td>
            <td style={AS.td}>$271</td>
            <td style={AS.td}>1점</td>
            <td style={AS.td}>2점</td>
          </tr>
          <tr>
            <td style={AS.td}>10~20 km/h</td>
            <td style={AS.td}>$365</td>
            <td style={AS.td}>$746</td>
            <td style={AS.td}>3점</td>
            <td style={AS.td}>6점</td>
          </tr>
          <tr>
            <td style={AS.td}>20~30 km/h</td>
            <td style={AS.td}>$631</td>
            <td style={AS.td}>$1,284</td>
            <td style={AS.td}>4점</td>
            <td style={AS.td}>8점</td>
          </tr>
          <tr>
            <td style={AS.td}>30~45 km/h</td>
            <td style={AS.td}>$1,302</td>
            <td style={AS.td}>$2,660</td>
            <td style={AS.td}>5점</td>
            <td style={AS.td}>10점</td>
          </tr>
          <tr>
            <td style={AS.td}>45 km/h 초과</td>
            <td style={AS.td}>$3,026</td>
            <td style={AS.td}>$3,780~</td>
            <td style={AS.td}>6점</td>
            <td style={AS.td}>12점</td>
          </tr>
        </tbody>
      </table>

      <p style={AS.p}>
        예를 들어 P2 면허 소지자가 부활절 연휴 더블 데메리트 기간 중 스쿨존에서 15 km/h를
        초과했다면 $746 벌금에 6점을 한 번에 받는 셈이다. P2 기준 정지 한도(7점)를 단숨에
        소진하는 것이다.
      </p>

      <h2 style={AS.h2}>벌점 몇 점이면 면허가 정지되나</h2>

      <p style={AS.p}>
        NSW의 벌점은 3년 롤링 기간을 기준으로 누적된다. 면허 종류에 따라 정지 기준이 다르다.
      </p>

      <table style={AS.table}>
        <thead>
          <tr>
            <th style={AS.th}>면허 종류</th>
            <th style={AS.th}>정지 기준</th>
            <th style={AS.th}>누적 기간</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={AS.td}>무제한(정식) 면허</td><td style={AS.td}>13점</td><td style={AS.td}>3년</td></tr>
          <tr><td style={AS.td}>P2 임시 면허</td><td style={AS.td}>7점</td><td style={AS.td}>3년</td></tr>
          <tr><td style={AS.td}>P1 임시 면허</td><td style={AS.td}>4점</td><td style={AS.td}>3년</td></tr>
          <tr><td style={AS.td}>학습 면허 (L)</td><td style={AS.td}>4점</td><td style={AS.td}>3년</td></tr>
        </tbody>
      </table>

      <p style={AS.p}>
        벌점은 일정 날짜에 일괄 초기화되지 않는다. 각 위반 날짜로부터 정확히 3년 후에 해당
        벌점만 소멸된다. 자신의 현재 벌점 잔여량은 Service NSW 계정에서 언제든 확인할 수 있다.
      </p>

      <h2 style={AS.h2}>벌금을 받았다면 할 수 있는 것들</h2>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>실용적인 대응 방법</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>
            <strong>28일 이내 이의제기 신청.</strong> Revenue NSW의 온라인 서비스(service.nsw.gov.au)를
            통해 검토 요청을 할 수 있다. 결과를 보장하지는 않지만, 담당 직원이 재검토하는 절차다.
          </li>
          <li style={AS.tipItem}>
            <strong>10년 무사고 운전자라면 경고(Caution)로 전환 신청 가능.</strong> 10 km/h 미만
            초과 위반이고, 최근 10년간 벌점 기록이 없는 경우 벌금 없이 경고 처리로 전환을
            요청할 수 있다.
          </li>
          <li style={AS.tipItem}>
            <strong>정지 대신 &lsquo;선행 운전 기간&rsquo; 선택.</strong> 면허 정지 한도에 근접했다면,
            즉시 정지 대신 12개월 선행 운전 기간(good behaviour period)을 선택할 수 있다.
            이 기간 중 추가 위반이 없으면 정지를 면한다.
          </li>
        </ul>
      </div>

      <hr style={AS.divider} />

      <p style={AS.p}>
        정리하면 이렇다. 더블 데메리트 기간에 벌금은 그대로다. 하지만 면허에 남는 벌점은 두 배다.
        스쿨존 적용 구간이라면 벌금도 두 배다. 이 두 가지가 겹치면 운전 경력과 면허에 미치는
        타격이 생각보다 훨씬 크다. 숫자를 실제로 계산해본 사람이 많지 않기 때문에, 막상 고지서를
        받고 나서야 그 무게를 실감하는 경우가 대부분이다.
      </p>

      <div style={AS.disclaimer}>
        <p style={AS.disclaimerText}>
          이 글의 벌금액과 벌점 정보는 Transport for NSW 및 Revenue NSW의 공식 기준을 바탕으로
          작성됐으며 참고용입니다. 금액과 규정은 변경될 수 있으므로, 실제 위반 발생 시에는
          최신 정보를 공식 채널에서 직접 확인하시기 바랍니다. 이 글은 법적 조언이 아닙니다.
          특정 위반에 대한 법적 대응이 필요한 경우 교통 전문 변호사의 조언을 구하시기 바랍니다.
        </p>
      </div>

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>새 차를 고민 중이라면</div>
        <p style={AS.ctaDesc}>호주 딜러십의 데모카 및 클리어런스 재고를 한눈에</p>
        <Link href="/listings" style={AS.ctaBtn}>매물 보러 가기 →</Link>
      </div>
    </>
  );
}
