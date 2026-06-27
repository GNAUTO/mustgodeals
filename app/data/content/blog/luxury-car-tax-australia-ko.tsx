import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function LuxuryCarTaxAustraliaKoContent() {
  return (
    <>

          <p style={AS.p}>
            아우디, BMW, 메르세데스. 호주에서 프리미엄 브랜드 차를 사려고 가격을 알아보다 보면 예상보다 훨씬 높은 금액에 당황하는 경우가 있다. 단순히 차가 비싼 게 아니라, 일정 금액을 넘는 순간 별도의 세금이 붙기 때문이다. 바로{" "}
            <span style={AS.highlight}>럭셔리 카 택스(Luxury Car Tax, LCT)</span>다. 이 글에서는 LCT가 무엇인지, 얼마나 내야 하는지, 그리고 어떻게 하면 합법적으로 부담을 줄일 수 있는지를 정리했다.
          </p>

          <h2 style={AS.h2}>LCT란 무엇인가</h2>

          <p style={AS.p}>
            럭셔리 카 택스(LCT)는 호주 연방정부가 일정 가격 이상의 차량 판매에 부과하는 세금이다. 1999년에 도입됐고, 고가 차량 구매에 추가적인 세 부담을 지우는 것이 목적이다. GST(소비세)와는 별개로 부과되며, 딜러십이 대신 납부하고 차량 가격에 반영하는 방식으로 소비자에게 전가된다.
          </p>

          <p style={AS.p}>
            쉽게 말하면, 차 값이 일정 기준을 넘으면 그 초과분에 대해 추가로 세금을 내야 하는 구조다.
          </p>

          <h2 style={AS.h2}>2025~2026 기준 LCT 한도</h2>

          <p style={AS.p}>
            LCT 부과 기준은 매년 조정된다. 2025~2026 회계연도 기준으로 두 가지 한도가 있다.
          </p>

          <table style={AS.table}>
            <thead>
              <tr>
                <th style={AS.th}>차량 유형</th>
                <th style={{ ...AS.th, textAlign: "right" }}>LCT 한도</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={AS.td}>일반 차량</td>
                <td style={AS.tdRight}>$80,567</td>
              </tr>
              <tr>
                <td style={{ ...AS.td, borderBottom: "none" }}>연비 효율 차량 (7L/100km 이하)</td>
                <td style={{ ...AS.tdRight, borderBottom: "none" }}>$91,387</td>
              </tr>
            </tbody>
          </table>

          <p style={AS.p}>
            이 금액은 GST 포함 가격 기준이다. 차량 가격이 한도를 넘는 순간부터 초과분에 대해 <span style={AS.highlight}>33%의 LCT</span>가 부과된다.
          </p>

          <h2 style={AS.h2}>실제로 얼마나 붙나</h2>

          <p style={AS.p}>
            숫자로 보면 더 직관적이다. 예를 들어 GST 포함 가격이 $95,000인 차량을 산다고 가정하자. 일반 차량 기준 LCT 한도인 $80,567을 초과한 금액은 $14,433이다. 여기에 33%를 곱하면 LCT는 약 <span style={AS.highlight}>$4,763</span>이 된다.
          </p>

          <div style={AS.callout}>
            <p style={AS.calloutTitle}>계산 예시</p>
            <p style={AS.calloutText}>
              차량 가격 $95,000 − LCT 한도 $80,567 = 초과분 $14,433<br />
              $14,433 × 33% = <strong>LCT $4,763</strong>
            </p>
          </div>

          <p style={AS.p}>
            결국 소비자가 실제로 내는 금액은 차량 가격 $95,000에 LCT $4,763이 더해진 셈이다. 딜러십 가격표에 이미 포함된 경우가 대부분이지만, 드라이브어웨이 가격 기준으로 반드시 확인하는 것이 좋다.
          </p>

          <h2 style={AS.h2}>데모카와 LCT — 중요한 차이</h2>

          <p style={AS.p}>
            여기서 데모카 구매자에게 중요한 포인트가 하나 있다. LCT는 차량 판매 가격 기준으로 부과된다. 즉, 같은 차라도 데모카로 구입하면 신차보다 낮은 가격에 거래되기 때문에 LCT 부담이 줄어들거나 아예 한도 이하로 내려갈 수 있다.
          </p>

          <div style={AS.callout}>
            <p style={AS.calloutTitle}>데모카 절세 시나리오</p>
            <p style={AS.calloutText}>
              신차 가격 $88,000인 아우디 모델이 데모카로 <strong>$78,500</strong>에 나왔다면 — 일반 차량 LCT 한도 $80,567 <strong>아래</strong>다. LCT 전혀 없음.
            </p>
          </div>

          <p style={AS.p}>
            신차 대비 가격 할인에 세금 절감까지, 데모카가 단순히 저렴한 게 아니라 세금 구조상으로도 유리한 이유가 여기에 있다.
          </p>

          <h2 style={AS.h2}>연비 효율 차량 한도를 활용하라</h2>

          <p style={AS.p}>
            하이브리드나 전기차처럼 연비가 좋은 차량은 LCT 한도가 더 높다. 2025~2026년 기준 <span style={AS.highlight}>$91,387</span>까지는 LCT가 붙지 않는다. 일반 차량 한도보다 약 $11,000 높은 셈이다.
          </p>

          <p style={AS.p}>
            프리미엄 브랜드에서도 하이브리드 모델이 늘어나고 있는 추세를 감안하면, EV 또는 하이브리드 선택이 LCT 절감 측면에서도 유리한 선택지가 될 수 있다. 아우디 e-tron, BMW iX, 볼보 EX90 같은 모델들이 이 범주에 해당한다.
          </p>

          <h2 style={AS.h2}>LCT를 피하거나 줄이는 합법적인 방법</h2>

          <p style={AS.p}>
            LCT는 법적으로 부과되는 세금이지만, 구매 방식에 따라 부담을 줄일 수 있는 여지가 있다.
          </p>

          <div style={AS.stepBox}>
            <span style={AS.stepNum}>①</span>
            <div>
              <strong style={{ color: "#1A1A1A", fontSize: "15px" }}>데모카 선택</strong>
              <p style={{ ...AS.p, marginBottom: 0, marginTop: "4px" }}>
                동일 모델이라도 데모카 가격이 LCT 한도 아래라면 세금 자체가 사라진다. 합법적이고 가장 현실적인 방법이다.
              </p>
            </div>
          </div>

          <div style={AS.stepBox}>
            <span style={AS.stepNum}>②</span>
            <div>
              <strong style={{ color: "#1A1A1A", fontSize: "15px" }}>연비 효율 차량 선택</strong>
              <p style={{ ...AS.p, marginBottom: 0, marginTop: "4px" }}>
                하이브리드나 EV는 한도가 더 높아 같은 가격대에서 LCT 부담이 줄어든다.
              </p>
            </div>
          </div>

          <div style={AS.stepBox}>
            <span style={AS.stepNum}>③</span>
            <div>
              <strong style={{ color: "#1A1A1A", fontSize: "15px" }}>노베이티드 리스 활용</strong>
              <p style={{ ...AS.p, marginBottom: 0, marginTop: "4px" }}>
                노베이티드 리스로 차량을 구입하는 경우, LCT는 여전히 적용되지만 전체 차량 비용을 세전으로 처리하는 구조상 실질 부담이 줄어드는 효과가 있다.
              </p>
            </div>
          </div>

          <div style={AS.stepBox}>
            <span style={AS.stepNum}>④</span>
            <div>
              <strong style={{ color: "#1A1A1A", fontSize: "15px" }}>옵션 구성 조정</strong>
              <p style={{ ...AS.p, marginBottom: 0, marginTop: "4px" }}>
                차량 기본가는 한도 이하지만 옵션을 추가하면 초과하는 경우가 있다. 어떤 옵션이 LCT 과세 기준에 포함되는지 딜러에게 확인하고, 불필요한 옵션을 조정하면 한도 이하로 맞출 수 있는 여지가 생기기도 한다.
              </p>
            </div>
          </div>

          <h2 style={AS.h2}>LCT 환급이 되는 경우도 있다</h2>

          <p style={AS.p}>
            LCT는 일정 조건을 충족하면 환급받을 수 있다. 주로 해당되는 경우는 이렇다.
          </p>

          <div style={AS.tipBox}>
            <p style={AS.tipTitle}>LCT 환급 가능 케이스</p>
            <ul style={AS.tipList}>
              <li style={AS.tipItem}><strong>수출 목적 구매</strong> — 차량을 호주 밖으로 수출하는 경우</li>
              <li style={AS.tipItem}><strong>농업용 차량</strong> — 1차 산업 종사자가 업무용으로 구입하는 경우</li>
              <li style={AS.tipItem}><strong>장애인 관련 개조 차량</strong> — 특정 조건 충족 시</li>
            </ul>
          </div>

          <p style={AS.p}>
            일반 소비자에게 해당되는 경우는 많지 않지만, 비즈니스 목적 구매라면 세무사와 함께 환급 가능성을 확인하는 것이 좋다.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>결론</h2>

          <p style={AS.p}>
            LCT는 프리미엄 차량 구매자가 반드시 이해해야 하는 세금이다. 모르고 지나치면 예상보다 수천 달러를 더 내는 상황이 생길 수 있고, 잘 알고 활용하면 데모카 선택 하나로 세금 자체를 피할 수도 있다.
          </p>

          <p style={AS.p}>
            프리미엄 브랜드 차량을 고려하고 있다면, 드라이브어웨이 가격에 LCT가 포함됐는지, 연비 효율 한도 적용 대상인지를 먼저 확인하는 것이 현명한 구매의 시작이다.
          </p>

          <div style={AS.ctaBox}>
            <p style={AS.ctaTitle}>LCT 한도 이하의 데모카 찾기</p>
            <p style={AS.ctaDesc}>세금 없이 프리미엄 차를 구입할 수 있는 데모카 매물을 확인하세요.</p>
            <Link href="/listings" style={AS.ctaBtn}>데모카 매물 보기</Link>
          </div>

    </>
  );
}
