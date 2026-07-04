import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function AustraliaNewRoadRulesJuly2026KoContent() {
  return (
    <>
      <p style={AS.p}>
        2026년 7월 1일부로{' '}
        <span style={AS.highlight}>호주 전역에서 새 도로 교통법규가 시행</span>됐다.
        주별로 내용이 다르다. 과속 벌금 인상, 전동킥보드 대대적 규제, 오토바이
        보호장구 의무화, 통행료 상한 인하까지, 영향을 받는 항목이 광범위하다.
        주별로 정리했다.
      </p>

      {/* 이미지 1 */}
      <div style={AS.imgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/news/australia-speed-sign-60kmh.jpg"
          alt="호주 시속 60km 제한 표지판"
          className="article-img"
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
        />
        <p style={AS.imgCaption}>Photo: Bidgee / Wikimedia Commons (CC BY 3.0)</p>
      </div>

      <h2 style={AS.h2}>뉴사우스웨일스(NSW)</h2>

      <p style={AS.p}>
        NSW는{' '}
        <span style={AS.highlight}>학습(L)·임시(P1·P2) 면허 오토바이 운전자의 보호장구 착용을 의무화</span>했다.
        7월 1일부터 L·P1·P2 소지자는 주행 시 반드시 승인된 보호 장갑을 착용해야 한다.
        학습 면허(L) 운전자는 여기에 더해 야광(high-visibility) 조끼 또는 재킷까지
        필수다. 정식 면허 소지자에게는 적용되지 않지만 착용을 권장한다.
      </p>

      <p style={AS.p}>
        로드워크(도로 공사 구간) 제한속도에 관해서도 변경이 있었다. 공사가
        실제로 진행되지 않는 시간대에는 안전하다고 판단될 경우 임시 감속 표지를
        제거해야 한다는 의무 규정이 신설됐다. 빈 공사 현장에 24시간 내내 제한속도가
        유지되던 관행에 대응한 조치다.
      </p>

      <p style={AS.p}>
        통행료 관련: <span style={AS.highlight}>7월 6일부터 주간 통행료 상한이 $60에서 $50로 인하</span>된다.
        12개월간 적용된다. 9월부터는 자동으로 등록비 일회성 할인이 적용된다.
        승용차는{' '}
        <span style={AS.highlight}>$100, 오토바이는 $80</span>이며 별도 신청 없이
        자동 처리된다.
      </p>

      <h2 style={AS.h2}>빅토리아(VIC)</h2>

      <p style={AS.p}>
        빅토리아주는 새로운 교통 위반 항목을 신설한 것은 아니다. 다만 기존 벌금을
        초기 납부 기한 내에 내지 않을 경우{' '}
        <span style={AS.highlight}>추가 비용이 더 가파르게 누적되도록</span>{' '}
        단속 체계를 강화했다. 실질적으로는 벌금 미납 시의 총 부담액이 늘어나는 구조다.
      </p>

      {/* 이미지 2 */}
      <div style={AS.imgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/news/australia-road-speed-sign.jpg"
          alt="호주 지방 도로 속도 표지판"
          className="article-img"
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
        />
        <p style={AS.imgCaption}>Photo: Mattinbgn / Wikimedia Commons (CC BY 3.0)</p>
      </div>

      <h2 style={AS.h2}>퀸즐랜드(QLD): 전동킥보드·전동자전거 대대적 규제</h2>

      <p style={AS.p}>
        이번 개정에서 가장 큰 변화를 맞은 곳은 퀸즐랜드다. 전동킥보드와 전동자전거에
        대한 포괄적인 신규 규제 체계가 7월 1일부터 발효됐다. 경찰은{' '}
        <span style={AS.highlight}>규정 미달 기기를 현장에서 압수하고 폐기</span>할 수 있는 권한을
        갖게 됐으며, 무작위 음주 측정도 도입됐다. 혈중알코올농도(BAC){' '}
        <span style={AS.highlight}>0.05</span> 제한이 적용된다.
      </p>

      <p style={AS.p}>
        주행 가능 구역은{' '}
        <span style={AS.highlight}>제한속도 60km/h 이하 도로</span> 또는 자전거 전용
        도로로 제한된다. 도로 주행 최고 속도는{' '}
        <span style={AS.highlight}>25km/h</span>, 보행로 및 보행자 옆 통과 시에는{' '}
        <span style={AS.highlight}>12km/h</span>로 제한된다.
      </p>

      <p style={AS.p}>
        <span style={AS.highlight}>8월 31일부터</span>는 최소 16세 이상에 유효한
        운전면허(임시면허 포함)를 소지해야만 탑승 가능하다. 미성년자가 규정을
        위반할 경우 부모 또는 보호자에게 벌금이 부과될 수 있다.
      </p>

      <h2 style={AS.h2}>사우스오스트레일리아(SA): 과속 벌금 대폭 인상</h2>

      <p style={AS.p}>
        SA는 모든 속도 초과 구간에 걸쳐 벌금을 올렸다. 중간 및 고속 구간 기준으로는
        호주 전체를 통틀어 가장 높은 수준에 해당한다.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>SA 과속 벌금 (2026년 7월 1일 기준)</div>
        <p style={AS.calloutText}>
          10km/h 미만 초과: $215{'\n'}
          10{'–'}20km/h 초과: $484{'\n'}
          20{'–'}30km/h 초과: $998{'\n'}
          30{'–'}45km/h 초과: $1,793{'\n'}
          45km/h 초과: $2,018{'\n'}
          음주운전(BAC 0.08 미만): $904
        </p>
      </div>

      <p style={AS.p}>
        음주운전 벌금{' '}
        <span style={AS.highlight}>$904는 BAC 0.08 미만에 해당하는 단순 위반 기준</span>이다.
        수치가 높을수록 단순 벌금이 아닌 더 중한 처벌 대상이 된다.
      </p>

      <h2 style={AS.h2}>웨스턴오스트레일리아(WA)</h2>

      <p style={AS.p}>
        WA는 이번 7월 개정에서 실질적인 변경 사항이 없다. 다만 학습 면허 제도의
        대대적 개편이 검토 중이다. 현재 논의 중인 내용은 학습 면허 최소 기간
        6개월을{' '}
        <span style={AS.highlight}>12개월로 두 배 연장</span>, 감독 운전 시간을
        50시간에서{' '}
        <span style={AS.highlight}>80시간(야간 10시간 포함)으로 확대</span>,
        임시 면허 기간을 2년에서 3년으로 늘리는 방안 등이다. 아직 확정된 것은 아니다.
      </p>

      <h2 style={AS.h2}>ACT·태즈매니아(TAS)</h2>

      <p style={AS.p}>
        호주 수도 특별구(ACT)와 태즈매니아는 이번에 큰 변화가 없다. 두 지역 모두
        기존 벌금에 물가 연동 인상만 적용했으며, 교통법 구조 자체에 변동은 없다.
      </p>

      {/* 출처 */}
      <div style={AS.sourceBox}>
        <span style={AS.sourceLabel}>출처</span>
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
        <div style={AS.ctaTitle}>신규 매물 알림 받기</div>
        <p style={AS.ctaDesc}>
          클리어런스 매물이 올라오면 가장 먼저 알려드립니다. 매주 업데이트
        </p>
        <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 &rarr;</Link>
      </div>
    </>
  );
}
