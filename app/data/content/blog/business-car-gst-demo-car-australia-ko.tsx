import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function BusinessCarGstDemoCarAustraliaKoContent() {
  return (
    <>

          <p style={AS.p}>
            사업을 운영하다 보면 차를 바꿔야 할 시점이 온다. 그때 대부분 비슷한 고민에
            부딪힌다. 신차를 사서 첫해 감가를 그대로 떠안을지, 아니면 그 감가를 이미 누군가
            대신 떠안은 차를 찾을지.
          </p>

          <p style={AS.p}>
            여기서 데모카가 의외로 합리적인 선택지가 된다. 근데 이 부분을 제대로 설명해주는
            곳이 거의 없다.
          </p>

          <h2 style={AS.h2}>첫해 감가, 누군가 이미 흡수했다</h2>

          <p style={AS.p}>
            기본부터 보자. 데모카는 이미 가장 큰 감가폭을 1년 차에 흡수한 상태다. 신차는
            등록되는 순간 보통{" "}
            <span style={AS.highlight}>15에서 20퍼센트</span>가 빠진다. 주행거리 몇 천
            킬로미터 정도인 데모카는 그 감가를 이미 겪었지만, 사실상 신차나 다름없다.
            보증도 같고, 상태도 같고, 새 가죽 냄새도 그대로다. 단지 첫해 감가를 직접
            부담하지 않을 뿐이다.
          </p>

          <h2 style={AS.h2}>GST를 두 번 아끼는 구조</h2>

          <p style={AS.p}>
            다음은 GST다. GST 등록 사업자고 차량을 사업 목적으로 사용한다면, ATO가 매
            회계연도 정하는 차량 한도 내에서 구매가에 대한 GST를 환급받을 수 있다. 신차든
            데모카든 동일하게 적용된다.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>이중 절약의 원리</div>
            <p style={AS.calloutText}>
              데모카는 이미 신차보다 가격이 낮기 때문에, 그만큼 더 낮은 금액에 대해 GST를
              청구하게 된다. 결국 초기 현금 지출이 두 번 줄어드는 셈이다 — 할인된 가격에서
              한 번, GST 환급에서 또 한 번.
            </p>
          </div>

          <h2 style={AS.h2}>감가상각 공제: 낮은 출발점, 같은 원리</h2>

          <p style={AS.p}>
            감가상각 공제도 같은 원리로 작동한다. 즉시상각이든 일반 감가상각 일정이든,
            공제는 실제 지불한 금액 기준으로 계산되지 신차 원가 기준이 아니다. 신차보다{" "}
            <span style={AS.highlight}>2만 달러 싸게 산 차</span>도 그 낮은 금액부터 감가가
            시작되지만, 신차와 데모카 사이의 감가상각 차이가 세금상 의미 있는 불이익으로
            이어지는 경우는 거의 없다. 신차를 살 때보다 추가로 청구할 수 있는 감가상각
            금액보다, 애초에 절약하는 구매가가 훨씬 크다.
          </p>

          <h2 style={AS.h2}>보증 그대로, 협상 없이</h2>

          <p style={AS.p}>
            대부분의 데모카는 구매 시점이 아니라 최초 등록일 기준으로 제조사 보증이
            적용되지만, 그 차이는 보통 몇 주 수준이다. 일반적인 의미의 중고차를 사는 게
            아니다. 거의 안 탄 차를,{" "}
            <span style={AS.highlight}>딜러가 월말이나 보고 기간 종료 전에 처분해야 하는</span>{" "}
            시점에 사는 것이다.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>사업자한테 진짜 중요한 것</h2>

          <p style={AS.p}>
            직접 협상하거나 개인 판매자를 일일이 찾아다닐 시간이 없는 사업자한테는 이게
            진짜 가치다. 거의 신차에 가까운 상태, 보증, GST 환급 자격, 그리고 누군가 이미
            떠안은 첫해 감가가 반영된 가격까지 한 번에 얻는다.
          </p>

          <p style={AS.p}>
            물론 이건 회계사의 정확한 조언을 대신하지 않는다. 사업 구조에 따라 적용되는
            숫자는 다를 수 있다. 하지만 올해 차량 교체를 고려 중이라면, 신차로 갈지 아니면{" "}
            <span style={AS.highlight}>누군가 이미 손해를 본 데모카로 갈지</span>는 한 번쯤
            따져볼 가치가 있다.
          </p>

          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>현재 데모카 매물 보기</div>
            <p style={AS.ctaDesc}>
              거의 신차, 보증 포함, 이미 할인된 가격 — 새 매물이 들어오는 즉시 업데이트
            </p>
            <Link href="/listings" style={AS.ctaBtn}>매물 보러가기 →</Link>
          </div>

    </>
  );
}
