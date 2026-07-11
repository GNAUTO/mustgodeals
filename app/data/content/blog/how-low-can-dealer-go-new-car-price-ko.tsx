import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "호주에서 신차 가격을 얼마나 깎을 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "정해진 비율이 없다. 중요한 것은 할인 폭이 아니라 딜러가 왜 움직일 수 있는가 하는 구조적 이유다. 제조사 판매목표 달성 보너스, 재고 금융비용, 성과 마감 시점의 압박이 스티커 가격의 표면 마진보다 훨씬 큰 영향을 미친다."
      }
    },
    {
      "@type": "Question",
      "name": "딜러는 정말로 가격을 내릴 여지가 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "있다. 다만 딜의 프론트엔드에서 움직일 수 있는 폭은 소비자의 예상보다 좁은 경우가 많다. 진짜 유연성은 타이밍, 재고 체류기간, 그리고 딜러가 제조사 보너스를 쫓고 있는지 여부에서 나온다. 차 가격을 못 내리는 딜러도 액세서리나 금융 조건으로 의미 있는 가치를 줄 수 있다."
      }
    },
    {
      "@type": "Question",
      "name": "플로어플랜 금융이란 무엇인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "딜러가 재고를 확보할 때 금융사에서 차입해 이자를 내는 구조다. 야드에 차가 팔리지 않고 머무는 동안 이자가 쌓이며, 기간이 길수록 딜러의 마진을 갉아먹는다. 오래된 재고 차량과 데모카에 협상 여지가 더 많은 이유가 바로 이것이다."
      }
    },
    {
      "@type": "Question",
      "name": "신차를 가장 싸게 살 수 있는 시기는 언제인가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "매월 마지막 3~5영업일이 가장 효과적이다. 딜러가 제조사 월간 판매목표 마감을 앞두고 있기 때문이다. 분기말과 6월 회계연도 마감이 겹칠 때는 이 압박이 더 강해진다. 같은 조건이라면 방문 타이밍이 협상력만큼 중요하다."
      }
    },
    {
      "@type": "Question",
      "name": "딜러십에서 어떤 질문을 해야 더 좋은 조건을 얻을 수 있나요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "이 차가 야드에 얼마나 있었는지, 데모카인지 미등록 신차인지, 드라이브 어웨이 총액이 얼마인지를 물어라. 이런 질문은 구매자가 거래 구조를 이해하고 있다는 신호를 보내며, 단순히 가격을 낮춰달라고 요청하는 것보다 훨씬 대화를 유리하게 만든다."
      }
    },
    {
      "@type": "Question",
      "name": "데모카와 클리어런스 차량은 협상 방식이 다른가요?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "그렇다. 등록된 데모카나 야드 장기 재고 차량은 딜러에게 매일 금융비용이 발생하고 있는 자산이다. 아직 도착하지 않은 신차 주문보다 딜러가 빨리 처분하려는 동기가 구조적으로 크다. 색상과 사양에 유연하다면 실질적인 절감을 기대할 수 있다."
      }
    }
  ]
};

const clusterCard: React.CSSProperties = {
  display: "block",
  borderLeft: "3px solid #CCDA47",
  padding: "10px 16px",
  background: "white",
  borderRadius: "6px",
  marginBottom: "10px",
  textDecoration: "none",
  color: "#1A1A1A",
};

const clusterMeta: React.CSSProperties = {
  fontSize: "10px",
  color: "#8A9A10",
  fontWeight: 600,
  letterSpacing: "0.7px",
  textTransform: "uppercase",
  marginBottom: "4px",
};

const clusterTitle: React.CSSProperties = {
  fontSize: "14px",
  fontWeight: 600,
  color: "#1A1A1A",
  lineHeight: 1.4,
};

export default function HowLowCanDealerGoNewCarPriceKoContent() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <p style={AS.p}>
        딜러십에서 이 질문을 안 해본 소비자는 거의 없다. 실제로 얼마나 내려줄 수 있는 거야?
        그런데 이 질문에 솔직한 답을 해주는 딜러는 드물다. 진실은 스티커 가격보다
        그 뒤에 있는 구조적 요소들에 달려 있다는 것이다. 소비자 대부분이 신경 쓰지 않는
        바로 그 지점에서 협상력이 결정된다.
      </p>

      <p style={AS.p}>
        그 구조를 이해하는 것이 어떤 특정 할인율보다 가치 있다. 어디를 봐야 하고,
        언제 물어봐야 하고, 어떤 질문이 문을 여는지가 보이기 때문이다.
      </p>

      <h2 style={AS.h2}>신차 프론트 마진은 생각보다 얇다</h2>

      <p style={AS.p}>
        많은 소비자는 딜러가 신차를 도매가로 사서 소매가로 팔며 넉넉한 마진을 챙긴다고
        생각한다. 현실은 다르다. 볼륨 세그먼트 차량 대부분에서 딜러의 인보이스 가격과
        제조사 권장 소비자 가격 사이의 갭은 놀라울 만큼 좁다.
      </p>

      <p style={AS.p}>
        이것이 협상 여지가 없다는 뜻은 아니다. 드라이브 어웨이 가격을 깎는 것에만
        집중하면 레버리지가 생각보다 작다는 의미다. $50,000 미만 차량에서 몇 백
        달러를 움직인 딜러는 프론트엔드에서 줄 수 있는 거의 모든 것을 줬을 수도 있다.
        여지가 사라진 게 아니라 다른 곳에 있는 것이다.
      </p>

      <h2 style={AS.h2}>진짜 여지는 다른 곳에서 나온다</h2>

      <p style={AS.p}>
        딜러가 마진을 훼손하지 않고도 가격을 양보할 수 있는 구조적 조건은 세 가지다.
      </p>

      <p style={AS.p}>
        첫째는 <span style={AS.highlight}>제조사 판매목표 달성 보너스</span>다.
        자동차 브랜드는 딜러십마다 월간, 분기별 판매목표를 설정하고, 달성 시 보너스를
        지급한다. 성과 마감이 임박한 시점에서 단 한 대의 계약이 그 보너스를 터뜨릴
        수도 있다. 그 상황에서 딜러는 프론트 마진에서 훨씬 더 많이 양보하고도
        전체적으로 손해를 안 보는 구조가 된다.
      </p>

      <p style={AS.p}>
        둘째는 <span style={AS.highlight}>플로어플랜 금융</span>이다. 딜러는 재고를
        자기 돈으로 사지 않는다. 금융사로부터 차입해 이자를 낸다. 야드에 팔리지 않고
        있는 차는 딜러에게 매일 비용이 발생하는 자산이다. 재고가 오래 있을수록
        기대했던 마진이 금융비용으로 사라진다.
      </p>

      <p style={AS.p}>
        셋째는 <span style={AS.highlight}>딜의 백엔드</span>다. 금융, 보험,
        페인트 프로텍션, 연장 보증, 액세서리는 차량 자체보다 마진이 훨씬 높다.
        차 가격을 내린 딜러가 금융 조건이나 옵션 패키지로 그 차이를 메울 수 있다.
        이를 이해한다는 것은 딜러가 제안하는 모든 것을 거부해야 한다는 뜻이 아니다.
        각 항목의 가치를 알고 총액 기준으로 딜을 평가하라는 이야기다.
      </p>

      <h2 style={AS.h2}>데모카와 야드 재고는 계산이 완전히 다르다</h2>

      <p style={AS.p}>
        사양에 맞춰 주문하는 신차와, 이미 야드에 있는 재고 차량은 전혀 다른 협상
        테이블이다. 특히 데모카로 등록된 차량은 더욱 그렇다.
      </p>

      <p style={AS.p}>
        데모카는 딜러 이름으로 등록됐고 주행거리가 있다. 딜러 입장에서 이 차는
        매일 감가상각이 일어나고 플로어플랜 이자가 쌓이는 자산이다. 아직 도착하지
        않은 신차 주문보다 빨리 처분하려는 동기가 구조적으로 훨씬 강할 수밖에 없다.
      </p>

      <p style={AS.p}>
        야드에 몇 달째 있는 신차도 마찬가지다. 이 차들이 문제 있는 게 아니라
        단순히 색상이나 사양이 수요 예측보다 인기가 없었던 것이다. 체류 기간이
        길어질수록 구조적으로 구매자에게 유리해지는 셈이다.
      </p>

      <Link href="/blog/what-is-a-dealer-clearance-car-australia" style={clusterCard}>
        <div style={clusterMeta}>Buying Guide</div>
        <div style={clusterTitle}>딜러 클리어런스 차량이란 무엇이고 왜 더 저렴한가</div>
      </Link>

      <Link href="/blog/why-buy-demo-car-australia" style={clusterCard}>
        <div style={clusterMeta}>Buying Guide</div>
        <div style={clusterTitle}>호주에서 데모카를 사야 하는 이유</div>
      </Link>

      <h2 style={AS.h2}>언제 가느냐가 얼마를 얻느냐를 결정한다</h2>

      <p style={AS.p}>
        딜러 인센티브 구조상 타이밍은 협상 스킬만큼 중요하다. 매달 마지막
        3~5영업일은 딜러가 계약을 마감하려는 압박이 가장 강한 시기다.
        목표가 28일에 달성되느냐 5일에 달성되느냐는 딜러에게 완전히 다른
        문제다. 이 차이가 협상 테이블에서 실제로 드러난다.
      </p>

      <p style={AS.p}>
        같은 논리가 분기말, 그리고 6월 회계연도 마감에는 더 강하게 적용된다.
        월간, 분기, 연간 목표가 동시에 마감되는 시점이기 때문이다. 할인을
        보장하지는 않지만, 그 이전에는 승인되지 않았을 조건이 갑자기
        가능해지는 환경이 만들어진다.
      </p>

      <p style={AS.p}>
        딜러는 대부분의 소비자가 무시하는 달력 위에서 움직이고 있다. 그 달력에
        맞춰 방문 시기를 조율하는 것은 준비된 구매자가 쓸 수 있는 가장
        단순하고 효과적인 수단이다.
      </p>

      <h2 style={AS.h2}>할인을 요청하는 것보다 효과적인 질문들</h2>

      <p style={AS.p}>
        가격을 낮춰달라고 요청하는 것은 가장 효과가 적은 방법이다. 거래 구조를
        이해하고 있음을 드러내는 질문이 훨씬 좋은 결과를 낸다.
      </p>

      <p style={AS.p}>
        이 차가 야드에 얼마나 있었는지 물어라. 데모카인지 미등록 신차인지 확인하라.
        드라이브 어웨이 총액을 하나의 숫자로 요청하라. 지금 신차를 주문하면 언제
        받을 수 있는지, 이 재고 차량을 지금 가져가는 것과 비교하면 어떤지 물어라.
      </p>

      <p style={AS.p}>
        이런 질문은 두 가지 역할을 한다. 딜을 평가하는 데 직접 유용한 정보를
        얻는다. 그리고 딜러에게 구매자가 거래 구조를 이해하는 사람이라는 신호를
        보낸다. 이것이 단순히 가격을 깎아달라는 것보다 대화를 바꾸는 이유다.
      </p>

      <p style={AS.p}>
        광고 가격 외에 취득세와 등록비 등 온로드 비용이 수천 달러 더해질 수 있다.{" "}
        <Link href="/tools/stamp-duty-calculator" style={{ color: "#5A7A10", fontWeight: 600 }}>
          스탬프 듀티 계산기
        </Link>
        로 딜러에 앉기 전에 총비용을 먼저 파악해 두는 것이 좋다.
      </p>

      <h2 style={AS.h2}>실제 구매 결정에서 이것이 의미하는 것</h2>

      <p style={AS.p}>
        가격을 못 내려주는 딜러가 반드시 진실만 말하고 있는 건 아니다. 신차의
        프론트 마진은 실재하지만 종종 제한적이다. 진짜 여지를 만드는 힘,
        즉 재고 체류 기간, 성과 마감 시점의 압박, 제조사 보너스 구간,
        백엔드 유연성은 모두 구조적이고 일정을 따른다.
      </p>

      <p style={AS.p}>
        그 일정을 이해하고 눈앞의 차량에 맞는 올바른 질문을 하는 구매자는,
        단순히 더 강하게 밀어붙이는 구매자보다 구조적으로 유리한 위치에 있다.
        같은 차를 다른 타이밍에, 다른 질문으로 사면 결과가 달라질 수 있다.
      </p>

      <p style={AS.p}>
        클리어런스 및 데모카 시장이 지금 어떤지 보고 싶다면{" "}
        <Link href="/listings/2025-kia-seltos-gt-line-demo" style={{ color: "#5A7A10", fontWeight: 600 }}>
          2025 기아 셀토스 GT-Line 데모 매물
        </Link>
        이 이런 동학이 실제로 적용되는 예시다.
      </p>

      {/* FAQ Section */}
      <h2 style={AS.h2}>자주 묻는 질문</h2>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          호주에서 신차 가격을 얼마나 깎을 수 있나요?
        </p>
        <p style={AS.p}>
          정해진 비율이 없다. 제조사 판매목표 달성 보너스, 재고 금융비용,
          성과 마감 시점의 압박이 표면적인 마진 갭보다 훨씬 큰 영향을 미친다.
          얼마를 깎을 수 있는지보다 딜러가 왜 움직일 수 있는지를 이해하는 것이 더 유용하다.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          딜러는 실제로 가격을 내릴 여지가 있나요?
        </p>
        <p style={AS.p}>
          있다. 다만 프론트엔드에서 움직일 수 있는 폭은 소비자의 예상보다 좁은
          경우가 많다. 진짜 유연성은 타이밍, 재고 체류기간, 그리고 딜러가 제조사
          보너스를 쫓고 있는지 여부에서 나온다.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          플로어플랜 금융이란 무엇인가요?
        </p>
        <p style={AS.p}>
          딜러가 재고를 확보할 때 금융사로부터 차입해 이자를 내는 구조다.
          야드에 팔리지 않는 차는 매일 비용이 쌓이는 자산이다. 오래된 재고와
          데모카에 협상 여지가 더 많은 이유가 여기 있다.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          신차를 가장 싸게 살 수 있는 시기는 언제인가요?
        </p>
        <p style={AS.p}>
          매달 마지막 3~5영업일이 가장 효과적이다. 분기말과 6월 회계연도 마감이
          겹칠 때는 압박이 더 강해진다. 방문 타이밍을 조율하는 것이
          협상 스킬만큼 중요할 수 있다.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          딜러십에서 어떤 질문을 해야 더 좋은 조건을 얻을 수 있나요?
        </p>
        <p style={AS.p}>
          이 차가 야드에 얼마나 있었는지, 데모카인지 미등록 신차인지,
          드라이브 어웨이 총액이 얼마인지를 물어라. 이런 질문이 단순히 가격을
          낮춰달라고 요청하는 것보다 훨씬 대화를 유리하게 만든다.
        </p>
      </div>

      <div style={{ marginBottom: "24px" }}>
        <p style={{ ...AS.p, fontWeight: 600, marginBottom: "6px" }}>
          데모카와 클리어런스 차량은 협상 방식이 다른가요?
        </p>
        <p style={AS.p}>
          그렇다. 등록된 데모카나 야드 장기 재고 차량은 딜러에게 매일 금융비용이
          발생하는 자산이다. 아직 도착하지 않은 신차 주문보다 처분 동기가 구조적으로
          크다. 색상과 사양에 유연하다면 실질적인 절감을 기대할 수 있다.
        </p>
      </div>

      <hr style={AS.divider} />

      {/* Related Articles */}
      <h2 style={AS.h2}>관련 글</h2>
      <Link href="/blog/buying-a-car-in-australia-guide" style={clusterCard}>
        <div style={clusterMeta}>Complete Guide</div>
        <div style={clusterTitle}>호주에서 차 사는 완벽 가이드</div>
      </Link>
      <Link href="/blog/best-time-to-buy-a-car-australia" style={clusterCard}>
        <div style={clusterMeta}>Buying Guide</div>
        <div style={clusterTitle}>호주에서 자동차를 사기 가장 좋은 시기</div>
      </Link>
      <Link href="/blog/how-to-negotiate-car-price-australia" style={clusterCard}>
        <div style={clusterMeta}>Buying Guide</div>
        <div style={clusterTitle}>호주 딜러십에서 자동차 가격 협상하는 법</div>
      </Link>

      {/* CTA */}
      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>현재 클리어런스 및 데모카 매물 보기</div>
        <p style={AS.ctaDesc}>
          이런 구조가 실제로 적용되는 차량을 지금 확인해 보세요
        </p>
        <Link href="/listings" style={AS.ctaBtn}>매물 보기 →</Link>
      </div>
    </>
  );
}
