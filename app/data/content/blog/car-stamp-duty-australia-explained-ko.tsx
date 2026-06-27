import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function CarStampDutyAustraliaExplainedKoContent() {
  return (
    <>

          <p style={AS.p}>
            호주에서 차를 처음 사는 사람들이 가장 많이 놀라는 순간이 있다. 딜러에게 최종 견적을
            받았는데, 생각보다 훨씬 높은 금액이 나오는 것이다. 차량 가격에 포함되지 않은 항목들
            — 그 중에서 가장 큰 부분을 차지하는 것이 바로{" "}
            <span style={AS.highlight}>스탬프 듀티(Stamp Duty)</span>다.
          </p>

          <h2 style={AS.h2}>스탬프 듀티란?</h2>

          <p style={AS.p}>
            스탬프 듀티는 주정부가 자동차 구매에 부과하는 세금으로, 신차와 중고차 모두에 적용된다.
            한국의 취득세와 비슷한 개념이다. 흔히 &ldquo;드라이브어웨이 가격&rdquo;이라고 하면
            이 스탬프 듀티가 포함된 가격을 말한다.
          </p>

          <p style={AS.p}>
            중요한 점은 —{" "}
            <span style={AS.highlight}>호주에는 전국 통일 세율이 없다</span>. 주마다 계산 방식과
            세율이 전혀 다르다. 같은 차를 사더라도 어느 주에서 사느냐에 따라 수백에서 수천 달러
            차이가 날 수 있다.
          </p>

          <h2 style={AS.h2}>주별 스탬프 듀티 요율</h2>

          <p style={AS.p}>
            <strong>NSW</strong>는 $44,999 이하 차량에{" "}
            <span style={AS.highlight}>3%</span>, $45,000 이상에{" "}
            <span style={AS.highlight}>5%</span>를 부과한다. 예를 들어 $50,000짜리 차를 NSW에서
            사면 스탬프 듀티만 약 <span style={AS.highlight}>$1,600</span> 수준이 된다.
          </p>

          <p style={AS.p}>
            <strong>QLD</strong>는 엔진 타입과 가격에 따라 세율이 나뉜다. 1~4기통 차량은
            $100,000 이하 기준 $100당 $3, 5~6기통은 $3.50이 적용된다. 하이브리드·전기차는{" "}
            <span style={AS.highlight}>$100당 $2</span>로 가장 낮다.
          </p>

          <p style={AS.p}>
            <strong>VIC</strong>는 차량 시장가격 또는 구매가격 중 높은 쪽을 기준으로 계산하며,
            CO₂ 배출량에 따라 세율이 달라진다. 120g/km 이하 친환경 차량은 낮은 세율이 적용된다.
          </p>

          <p style={AS.p}>
            <strong>NT</strong>는 차량 가격의{" "}
            <span style={AS.highlight}>3% 단일 세율</span>로 가장 단순하게 계산된다.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>계산 예시 — NSW에서 $50,000 차량 구매</div>
            <p style={AS.calloutText}>
              차량 가격: $50,000<br />
              적용 세율: 5% ($45,000 초과)<br />
              스탬프 듀티: 약 <strong>$1,600</strong><br />
              이 외에 등록비, CTP 보험료, 딜러 수수료가 별도 추가된다.
            </p>
          </div>

          <h2 style={AS.h2}>드라이브어웨이 가격에 포함돼 있다</h2>

          <p style={AS.p}>
            신차를 딜러에서 구매할 경우 스탬프 듀티는 보통{" "}
            <span style={AS.highlight}>드라이브어웨이 가격에 포함</span>되어 있다. 중고차를 개인
            간 거래로 살 경우에는 구매자가 직접 해당 주의 교통당국에 납부해야 한다.
          </p>

          <p style={AS.p}>
            딜러에서 차를 살 때 &ldquo;드라이브어웨이 가격이냐, 차량 가격이냐&rdquo;를 반드시
            확인해야 하는 이유가 여기에 있다. 차량 가격만 협상하고 나중에 스탬프 듀티를 따로
            내야 한다면 예상보다 훨씬 많은 금액이 나올 수 있다.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>전기차는 다르다</h2>

          <p style={AS.p}>
            일부 주에서는 전기차에 스탬프 듀티 혜택을 제공한다. NT는 $50,000 이하 전기차에
            2027년 6월까지 면제 혜택을 제공하고, QLD는 하이브리드·전기차에 낮은 세율을 적용한다.
            ACT는 배출량이 낮은 차량일수록 낮은 세율이 적용된다. 단, NSW와 TAS는 기존 전기차
            스탬프 듀티 혜택이 종료됐다.
          </p>

          <h2 style={AS.h2}>차 사기 전에 꼭 계산해봐야 하는 이유</h2>

          <p style={AS.p}>
            스탬프 듀티는 협상이 되지 않는다. 차량 가격은 딜러와 흥정할 수 있지만, 스탬프 듀티는{" "}
            <span style={AS.highlight}>주정부가 정한 금액을 그대로</span> 내야 한다. 그렇기
            때문에 예산을 세울 때 반드시 포함해서 계산해야 한다.
          </p>

          <div style={AS.tipBox}>
            <div style={AS.tipTitle}>주별 공식 스탬프 듀티 계산기</div>
            <ul style={AS.tipList}>
              <li style={AS.tipItem}><strong>NSW</strong> — Service NSW 차량 스탬프 듀티 계산기</li>
              <li style={AS.tipItem}><strong>QLD</strong> — Queensland Government 차량 등록 세금 계산기</li>
              <li style={AS.tipItem}><strong>VIC</strong> — State Revenue Office 자동차 세금 계산기</li>
              <li style={AS.tipItem}><strong>NT</strong> — Territory Revenue Office (단일 3% 요율)</li>
            </ul>
          </div>

          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>지금 나온 클리어런스 딜 확인하기</div>
            <p style={AS.ctaDesc}>딜러가 처분해야 하는 재고 차량 — 매주 업데이트</p>
            <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</Link>
          </div>

    </>
  );
}
