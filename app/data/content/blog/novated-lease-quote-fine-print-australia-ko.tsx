import Link from 'next/link';
import SuitAvoid from '../../../components/posts/SuitAvoid';
import { AS } from '../../../components/posts/article-styles';

const faqData = [
  {
    q: "노베이티드 리스 견적이 실제로 경쟁력 있는지 어떻게 확인하나요",
    a: "동일한 차종과 모델의 드라이브어웨이 가격을 딜러에게 직접 받아 견적 안의 차량 가격과 비교하세요. 리스 업체에는 금융 비용, 관리 수수료, 보험료, 유지비를 항목별로 분리해 달라고 요청하세요. 이후 잔존가까지 포함한 전체 납입 총액을 동일 금액의 차량 대출 총상환액과 비교하면 실질적인 차이가 보입니다.",
  },
  {
    q: "노베이티드 리스가 항상 차량 대출보다 저렴한가요",
    a: "항상 그렇지는 않습니다. 세전 급여 혜택은 실재하지만, 리스에는 관리 수수료와 묶음 보험료가 포함되고, 차량 가격 자체가 직접 협상했을 때보다 높을 수 있습니다. 높은 소득 구간에서는 세금 절약이 이 비용을 넘는 경우가 많습니다. 낮은 소득 구간에서는 격차가 줄거나 역전될 수 있습니다. 월 납입금이 아니라 잔존가를 포함한 전체 기간 총비용으로 비교하세요.",
  },
  {
    q: "직장을 바꾸면 노베이티드 리스는 어떻게 되나요",
    a: "새 고용주가 급여 패키징 약정을 인수하지 않으면 세전 혜택은 즉시 중단됩니다. 인수가 확정되기 전까지는 세후 급여에서 상환해야 합니다. 리스 의무는 고용 상태와 무관하게 지속됩니다. 일부 업체는 약정 이전을 지원하지만 새 고용주의 동의가 필수입니다. 리스 기간 중 이직 가능성이 있다면 서명 전에 반드시 고려하세요.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const clusterBox: React.CSSProperties = { margin: "2rem 0" };
const clusterHeading: React.CSSProperties = { fontSize: "11px", fontWeight: 700, color: "#888", letterSpacing: "0.09em", textTransform: "uppercase" as const, marginBottom: "10px" };
const clusterCard: React.CSSProperties = {
  display: "flex", alignItems: "center", justifyContent: "space-between",
  background: "white", border: "0.5px solid rgba(0,0,0,0.09)",
  borderLeft: "3px solid #CCDA47", borderRadius: "8px",
  padding: "0.875rem 1.25rem", textDecoration: "none",
  marginBottom: "8px", gap: "12px",
};
const clusterTitle: React.CSSProperties = { fontSize: "14px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3 };
const clusterArrow: React.CSSProperties = { fontSize: "16px", color: "#CCDA47", flexShrink: 0 };

export default function NovatedLeaseQuoteFinePrintAustraliaKoContent() {
  return (
    <>
      <div style={AS.callout}>
        <div style={AS.calloutTitle}>이 글에서 다루는 것</div>
        <p style={AS.calloutText}>
          견적 안의 차량 가격이 직접 협상했을 때와 다를 수 있습니다.
          월 납입금에는 개별 비교가 어려운 여러 비용이 묶여 있습니다.
          견적이 보여주는 절약액은 거의 항상 아무것도 하지 않는 경우와 비교한 수치입니다.
        </p>
      </div>

      <p style={AS.p}>
        노베이티드 리스 견적은 좋아 보이도록 설계됩니다. 그게 업체의 목적입니다. 구매자의 목적이
        아닙니다. 견적서를 만드는 사람들은 리스 업체 소속이고, 절세 효과가 크게 보이는 견적이
        계약으로 연결됩니다. 이것이 기만은 아닙니다. 프레이밍입니다. 그 프레임은 3년에서
        5년짜리 납입 약정에 서명하기 전에 직접 확인해야 할 대상입니다.
      </p>

      <p style={AS.p}>
        온라인에서 찾을 수 있는 대부분의 가이드는 리스 업체가 작성한 것입니다. 구조는 정확하게
        설명하면서 불편한 세부 사항은 나중에 직접 발견하도록 남겨둡니다. 이 글은 견적이
        멈추는 지점에서 시작합니다.
      </p>

      <h2 style={AS.h2}>견적의 비교 대상은 당신의 실제 대안이 아닙니다</h2>

      <p style={AS.p}>
        노베이티드 리스 견적에서 보여주는 절약액은 거의 항상 아무것도 하지 않는 경우와의 비교입니다.
        차 없이 받는 실수령액과 세전 급여로 리스 차량을 운용할 때의 실수령액을 나란히 놓습니다.
        비교 대상이 제로이기 때문에 차이가 크게 보입니다.
      </p>

      <p style={AS.p}>
        노베이티드 리스와 차 없는 상황 중에서 고르는 사람은 거의 없습니다. 대부분은 노베이티드
        리스와 차량 대출, 또는 자기 자금 구매 중에서 결정합니다. 그 실제 대안과 비교하면 차이가
        줄어듭니다. 세전 혜택은 실재하지만, 리스에는 이자와 관리 수수료, 묶음 비용이 포함되어
        있어 단순 대출과는 다른 총비용 구조를 갖습니다.{" "}
        <Link href="/blog/novated-lease-vs-car-loan-australia-ko">
          노베이티드 리스와 차량 대출의 5년 총비용 비교
        </Link>
        에서 실제 수치를 확인할 수 있습니다.
      </p>

      <p style={AS.p}>
        견적을 절약액으로 읽기 전에 자신의 실제 대안이 무엇인지 먼저 정하세요.
        그 비교만이 의사결정에 의미 있는 숫자입니다.
      </p>

      <h2 style={AS.h2}>견적 안의 차량 가격이 당신의 가격이 아닐 수 있습니다</h2>

      <p style={AS.p}>
        노베이티드 리스 견적에서 사용하는 차량 가격은 리스 업체가 딜러 네트워크와 협상한
        플릿 가격입니다. 이 가격이 일반 구매자가 딜러와 직접 협상했을 때보다 낮은 경우도
        있습니다. 항상 그런 것은 아닙니다. 독립적으로 확인하지 않으면 어느 쪽인지 알 수
        없습니다.
      </p>

      <p style={AS.p}>
        견적을 출발점으로 받아들이기 전에 동일한 제조사, 모델, 트림의{" "}
        <span style={AS.highlight}>드라이브어웨이 가격</span>을 딜러에게 직접 받아보세요.
        견적의 플릿 가격이 더 낮다면 그것은 실질적인 장점입니다. 더 높다면 금융 구조 이야기가
        시작되기 전에 이미 차 가격에서 손해를 보고 있는 것입니다.
      </p>

      <p style={AS.p}>
        5년 리스 안에서 차량 가격이 200만 원 높으면 잔존가, 월 납입금, 절세 효과 등 모든
        수치에 연쇄적으로 영향을 줍니다. 확인할 가치가 충분히 있습니다.
      </p>

      <h2 style={AS.h2}>월 납입금은 여러 항목이 한 번에 묶인 금액입니다</h2>

      <p style={AS.p}>
        풀 메인터넌스 노베이티드 리스의 납입금은 차량 금융, 관리 수수료, 보험, 등록비, 연료 또는
        충전 비용, 타이어, 정비를 하나의 숫자로 합산합니다. 이 단순함이 이 상품의 핵심
        매력입니다. 급여 명세서에 세전으로 처리되는 항목 하나가 전부를 커버합니다.
      </p>

      <p style={AS.p}>
        동시에 이 묶음 구조는 비교를 어렵게 만드는 지점입니다. 월 납입금 수치를 보았을 때,
        안에 포함된 보험료가 시장 대비 경쟁력이 있는지, 연료 한도가 실제 주행 패턴에 맞는지,
        관리 수수료가 다른 업체 대비 어느 수준인지는 알 수 없습니다.
      </p>

      <p style={AS.p}>
        서명 전에 항목별 내역서를 요청하세요. 구체적으로는 차량 금융 비용, 월 관리 수수료
        금액, 보험료, 연간 유지비 가정치를 각각 분리해 달라고 하세요. 항목마다 시장과 별도로
        비교할 수 있습니다. 항목화를 거부하는 업체는 각 비용이 무엇인지 모르는 상태에서
        서명하도록 요청하는 것입니다.
      </p>

      <h2 style={AS.h2}>실질 이자율은 단순 비교가 어렵습니다</h2>

      <p style={AS.p}>
        노베이티드 리스는 차량 대출처럼 표준화된 연이율을 사용하지 않습니다. 금융 비용은
        머니 팩터나 플랫 레이트로 표현되는 경우가 많고, 계산 방식은 업체마다 다릅니다.
        견적 사이에서, 또는 리스와 대출 사이에서 이율을 비교하려면 동일한 기준으로 환산하는
        과정이 필요합니다.
      </p>

      <p style={AS.p}>
        실용적인 검증 방법은 이율 표시가 아니라 전체 기간 총납입액입니다. 세전과 세후를
        합한 리스 기간 전체의 급여 공제액에 만기 잔존가를 더한 숫자가 총비용입니다.
        동일 금액을 동일 기간 동안 차량 대출로 빌렸을 때의 총상환액과 비교하면 공정한
        그림이 나옵니다.
      </p>

      <h2 style={AS.h2}>잔존가는 별도로 준비해야 할 목돈입니다</h2>

      <p style={AS.p}>
        노베이티드 리스 만기에는{" "}
        <span style={AS.highlight}>잔존 지불금</span>이 발생합니다. 이 금액은 만기 시점의
        실제 중고차 시세가 아니라 국세청(ATO)이 차량 표준 내용연수 기준으로 정한 수치입니다.
        5년 리스의 경우 ATO 최소 잔존 비율은 원 구매 가격의{" "}
        <span style={AS.highlight}>28.13%</span>입니다. 5만 5,000달러짜리 차량이라면
        약 1만 5,470달러입니다.
      </p>

      <p style={AS.p}>
        잔존가는 견적서에 기재됩니다. 보통 문서 후반부에 위치합니다. 하지만 이 금액을
        만기에 별도로 마련해야 한다는 점이 항상 충분히 강조되지는 않습니다. 저축에서 지불하거나,
        새 리스로 재금융하거나, 차량 트레이드인 가치로 충당하는 방법이 있습니다. 만기 시점의
        시장 가치가 ATO 잔존가보다 낮다면 차액을 별도 부담해야 합니다.
      </p>

      <p style={AS.p}>
        이 목돈을 처음부터 계획에 포함시키세요. 이연된 절약이 아니라 이연된 비용입니다.
      </p>

      <h2 style={AS.h2}>고용주가 바뀌면 약정도 바뀝니다</h2>

      <p style={AS.p}>
        노베이티드 리스의 세전 혜택은 고용주가 급여에서 패키징 공제를 대신 처리해주기 때문에
        성립합니다. 그 고용주를 떠나면 약정은 자동으로 따라오지 않습니다.
      </p>

      <p style={AS.p}>
        세전 혜택이 계속되려면 새 고용주가 급여 패키징에 동의해야 합니다. 대기업은 대부분
        가능합니다. 소규모 사업장은 그렇지 않은 경우가 많습니다. 새 약정이 확정되기 전까지
        납입금은 세후 급여에서 나갑니다. 리스 의무는 고용 상태와 무관하게 유지됩니다.
      </p>

      <p style={AS.p}>
        리스 기간 중 이직 가능성이 현실적으로 존재한다면 그 확률이 결정의 일부가 되어야
        합니다.{" "}
        <Link href="/blog/novated-lease-worth-it-australia-ko">
          노베이티드 리스가 실제로 이득인지
        </Link>
        는 고용 연속성을 얼마나 확신할 수 있느냐에 따라 크게 달라집니다.
      </p>

      <h2 style={AS.h2}>세금 외에도 영향을 미치는 리포터블 프린지 베네핏</h2>

      <p style={AS.p}>
        노베이티드 리스는 프린지 베네핏(부가급여)으로 분류됩니다. FBT가 부과되지 않는 경우,
        즉 2025년부터 2026년 기준 럭셔리 카 텍스 기준액($91,387) 이하의 적격 배터리 전기차를
        리스하는 경우에도, 해당 혜택의 가치는 급여 명세서에{" "}
        <span style={AS.highlight}>리포터블 프린지 베네핏 금액</span>으로 기재됩니다.
      </p>

      <p style={AS.p}>
        ATO는 HECS 및 HELP 부채의 의무 상환액을 계산할 때 과세 소득보다 넓은 개념인 상환
        소득을 사용합니다. 리포터블 프린지 베네핏이 여기에 합산됩니다. 2025년부터 2026년
        기준 의무 상환 시작 소득은 6만 7,000달러입니다. 과세 급여가 그 이하라도 노베이티드
        리스로 인해 상환 소득 기준을 초과할 수 있습니다. 이 금액은 일부 가족 수당과
        메디케어 레비 서차지 기준에도 영향을 줍니다.
      </p>

      <p style={AS.p}>
        구체적인 영향은 소득 수준과 개인 상황에 따라 다릅니다. 학자금 부채가 있거나 소득
        기준 지원을 받고 있다면 서명 전에 등록 세무사에게 확인하세요. 차량 선택 자체도
        이 결과에 영향을 줍니다.{" "}
        <Link href="/blog/fuel-type-guide-australia-ko">
          연료 유형별 실제 소유 비용 비교 가이드
        </Link>
        를 참고해 차량 결정 전에 전체 그림을 확인해 두세요.
      </p>

      <SuitAvoid
        suits="정규직 PAYG 고소득자이며 정기적으로 운전하고, 리스 전 기간 동안 현재 고용주에게 재직할 가능성이 높은 경우. 럭셔리 카 텍스 기준 이하의 적격 배터리 전기차를 선택하면 FBT가 면제되어 전체 패키지가 세전으로 처리됩니다."
        avoid="절세 효과가 제한적인 낮은 소득 구간, 리스 기간 중 이직 가능성이 있는 경우, 만기 잔존가를 별도로 마련하기 어려운 경우. 묶음 차량 가격이 직접 협상 가격보다 높다면 재검토가 필요합니다."
        lang="KO"
      />

      <hr style={AS.divider} />

      <h2 style={AS.h2}>자주 묻는 질문</h2>

      {faqData.map(({ q, a }, i) => (
        <div key={i} style={{ marginBottom: "1.5rem" }}>
          <h3 style={AS.h3}>{q}</h3>
          <p style={AS.p}>{a}</p>
        </div>
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={AS.disclaimer}>
        <p style={AS.disclaimerText}>
          이 글은 일반 정보 제공 목적으로 작성되었으며 세무 또는 재무 조언이 아닙니다.
          개인별 결과는 소득, 리스 구조, 고용주 참여 여부, 개인 상황에 따라 다를 수 있습니다.
          이 내용을 기반으로 결정을 내리기 전에 공인 세무사 또는 재무 어드바이저와 상담하세요.
        </p>
      </div>

      <div style={clusterBox}>
        <div style={clusterHeading}>관련 가이드</div>
        <Link href="/blog/novated-lease-vs-car-loan-australia-ko" style={clusterCard}>
          <div style={clusterTitle}>노베이티드 리스 대 일반 차량 대출. 총비용 비교 가이드</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/novated-lease-worth-it-australia-ko" style={clusterCard}>
          <div style={clusterTitle}>노베이티드 리스, 정말 이득일까. 연봉과 상황별 정직한 답변</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/novated-lease-australia-ko" style={clusterCard}>
          <div style={clusterTitle}>노베이티드 리스 완전 정리. 구조, 절약 방법, 주의사항</div>
          <div style={clusterArrow}>→</div>
        </Link>
      </div>

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>지금 나와 있는 데모카 딜을 확인해 보세요</div>
        <p style={AS.ctaDesc}>월말 재고 정리 딜러 차량, 매주 업데이트됩니다</p>
        <Link href="/listings" style={AS.ctaBtn}>데모카 딜 보러 가기 →</Link>
      </div>
    </>
  );
}
