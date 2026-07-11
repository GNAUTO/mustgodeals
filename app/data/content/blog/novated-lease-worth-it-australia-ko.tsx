import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

const faqData = [
  {
    q: "연봉 $60,000이면 노베이티드 리스가 이득인가요",
    a: "연봉 $60,000의 한계세율은 Medicare Levy 포함 32.5%입니다. 절세 효과는 있지만 고소득 구간보다 작습니다. 전기차 여부와 차량 가격대에 따라 결론이 달라지므로, 결정 전에 정확한 견적을 받아보는 것이 중요합니다.",
  },
  {
    q: "이직하면 노베이티드 리스는 어떻게 되나요",
    a: "리스 계약 자체는 유지됩니다. 새 고용주가 salary sacrifice 구조를 인수하면 세전 혜택이 이어집니다. 인수하지 않으면 세후 급여로 직접 납부해야 하며, 이 기간에는 세전 혜택이 사라집니다. 계약 전 고용 안정성을 반드시 따져봐야 하는 이유입니다.",
  },
  {
    q: "전기차를 노베이티드 리스로 사면 왜 더 유리한가요",
    a: "LCT 연비 기준 이하의 배터리 전기차와 플러그인 하이브리드는 Electric Car Discount에 따라 FBT가 전액 면제됩니다. 세전 공제에 FBT 부담까지 없어지니 일반 내연기관 차량보다 훨씬 큰 절세 효과를 냅니다. 최신 적용 요건은 계약 전 ato.gov.au에서 확인하세요.",
  },
  {
    q: "잔존가치(balloon payment)란 무엇인가요",
    a: "ATO가 최소 잔존가치를 규정합니다. 5년 계약의 경우 구매가의 28.13%가 최소 잔존가치입니다. $45,000짜리 차라면 약 $12,660이 됩니다. 계약 만료 시 이 금액을 일시불로 납부하거나, 차량을 매각 또는 교환해 충당하거나, 재금융을 받아야 합니다.",
  },
  {
    q: "자영업자나 프리랜서도 노베이티드 리스를 이용할 수 있나요",
    a: "아닙니다. 노베이티드 리스는 고용주가 급여에서 세전으로 공제해주는 구조가 필수입니다. PAYG 급여를 받는 직장인이 아니라면 이 구조 자체가 성립하지 않습니다. ABN 사업자는 Chattel Mortgage나 Commercial Hire Purchase를 알아보는 편이 현실적입니다.",
  },
  {
    q: "기름값, 타이어비 같은 유지비도 세전 처리가 되나요",
    a: "대부분의 노베이티드 리스는 연료비, 등록비, 보험료, 타이어, 정비비를 모두 포함하는 풀 메인테넌스 패키지로 운용됩니다. 이 모든 항목이 세전 공제 대상이 되므로, 차량 할부금 외에도 유지비 전체에서 추가 절세 효과를 얻을 수 있습니다.",
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

export default function NovatedLeaseWorthItAustraliaKoContent() {
  return (
    <>
      <p style={AS.p}>
        노베이티드 리스가 이득인지 물어보면 대부분 &ldquo;상황에 따라 다르다&rdquo;는 답이 돌아온다.
        문제는, 리스를 판매하는 쪽은 유리한 시나리오만 보여주는 경향이 있다는 것이다. 이 글은
        유리한 경우와 불리한 경우를 구체적인 숫자와 함께 정직하게 풀어낸다.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>한 줄 결론</div>
        <p style={AS.calloutText}>
          연봉 $80,000 이상의 PAYG 직장인이 정기적으로 차를 운용하거나 전기차를 구매하는 경우라면
          대체로 이득이다. 연봉 $60,000 미만, 주행거리가 적거나, 자영업자이거나, 계약 기간 내
          이직 가능성이 높은 경우라면 다시 생각해볼 필요가 있다.
        </p>
      </div>

      <h2 style={AS.h2}>연봉 구간이 절세 금액을 결정한다</h2>

      <p style={AS.p}>
        노베이티드 리스는 연간 리스 패키지만큼 과세 소득을 낮춘다. 실제 절세 금액은
        한계세율(marginal tax rate)에 패키지 비용을 곱한 값이다. 한계세율이 높을수록 같은 차로
        더 많이 아끼는 셈이다.
      </p>

      <p style={AS.p}>
        연봉 <span style={AS.highlight}>$75,000</span>이라면 Medicare Levy 포함 한계세율은 32.5%.
        연간 패키지가 $14,000이면 세금 절감액은 약 $4,550, 5년이면 약 $22,750이다.
      </p>

      <p style={AS.p}>
        연봉 <span style={AS.highlight}>$110,000</span>이면 한계세율이 39%로 오른다. 같은 $14,000
        패키지로 연간 $5,460, 5년 합산 약 $27,300을 아끼는 이야기다. 차는 동일하지만 소득 구간
        하나 차이로 절세액이 $4,550 더 커진다.
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>연봉별 판단 기준</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>$45,000 미만 — 절세 효과 미미, 리스 구조가 불필요한 경우 많음</li>
          <li style={AS.tipItem}>$45,000 ~ $80,000 — 전기차라면 검토 가치 있음, 일반 차량은 꼼꼼히 따져볼 것</li>
          <li style={AS.tipItem}>$80,000 이상 — 대부분 유리, 풀 메인테넌스 패키지일수록 효과 커짐</li>
          <li style={AS.tipItem}>$135,001 이상 — 한계세율 47%, 절세 금액이 가장 크게 나오는 구간</li>
        </ul>
      </div>

      <h2 style={AS.h2}>FBT와 ECM. 대부분의 리스가 이 방식으로 설계된다</h2>

      <p style={AS.p}>
        고용주가 직원에게 차량 혜택을 제공하면 ATO는{" "}
        <span style={AS.highlight}>FBT(Fringe Benefits Tax)</span>를 부과한다. 법정 산식에 따르면
        FBT는 차량 기준가의 20%로, 주행거리와 관계없이 고정된 비율이다.
      </p>

      <p style={AS.p}>
        이를 상쇄하기 위해 대부분의 노베이티드 리스는{" "}
        <span style={AS.highlight}>ECM(Employee Contribution Method)</span> 구조를 사용한다.
        세후 급여의 일부를 직원이 직접 납부해 FBT 과세 금액을 0으로 만드는 방식이다. 실질적으로는
        월 납입금의 일부가 세전, 일부가 세후로 납부된다. 견적서에 이 비율이 명확히 표시되어 있는지
        반드시 확인해야 한다.
      </p>

      <p style={AS.p}>
        FBT 처리 방식을 언급하지 않는 견적은 불완전한 견적이다.
      </p>

      <h2 style={AS.h2}>전기차는 계산 자체가 달라진다</h2>

      <p style={AS.p}>
        LCT 연비 기준 가격 이하($91,387, 2025 to 2026 기준)의 배터리 전기차와 플러그인
        하이브리드는 Electric Car Discount에 따라{" "}
        <span style={AS.highlight}>FBT가 전액 면제</span>된다. ECM 기여금 자체가 필요 없다는
        의미다. 리스 패키지 전체가 세전으로 처리된다.
      </p>

      <p style={AS.p}>
        이것이 호주에서 노베이티드 리스가 전기차 구매 수단으로 급속히 자리 잡은 이유다. 세전 공제에
        FBT 부담 없음, 유지비까지 세전 처리가 가능하니 다른 어떤 금융 구조로도 쉽게 따라오기
        어려운 절세 효과를 만들어낸다.
      </p>

      <p style={AS.p}>
        정책 조건은 언제든 변경될 수 있다. 계약 전 ato.gov.au에서 최신 요건을 확인하는 것이
        필수적인 이유다.
      </p>

      <h2 style={AS.h2}>계약 만료 시 잔존가치(balloon payment)</h2>

      <p style={AS.p}>
        리스 기간이 끝난다고 차량이 자동으로 내 소유가 되는 것은 아니다. ATO는 최소 잔존가치를
        규정하며, 5년 계약의 경우 구매가의{" "}
        <span style={AS.highlight}>28.13%</span>가 남는다. $45,000짜리 차라면 약 $12,660이다.
      </p>

      <p style={AS.p}>
        계약 만료 시 선택지는 세 가지다. 일시불로 납부하거나, 차량을 매각 또는 트레이드인해
        충당하거나, 새 리스로 재금융하는 방법이다. 차량 시세가 잘 유지됐다면 트레이드인으로
        대부분 커버된다. 예상보다 감가가 빨랐다면 부족분을 직접 채워야 한다.
      </p>

      <p style={AS.p}>
        잔존가치는 숨겨진 비용이 아니라 유예된 비용이다. 처음부터 총비용 계산에 포함해야 한다.
      </p>

      <h2 style={AS.h2}>이직하면 어떻게 되나</h2>

      <p style={AS.p}>
        노베이티드 리스는 이전 가능하지만, 자동으로 이전되지는 않는다. 새 고용주가 salary
        sacrifice 구조를 인수해야 세전 혜택이 이어진다. 대기업은 대부분 인수하지만 소규모
        사업체나 계약직 형태는 그렇지 않은 경우도 많다.
      </p>

      <p style={AS.p}>
        고용주가 인수하지 않으면 그 기간 동안{" "}
        <span style={AS.highlight}>세후 급여로 직접 납부</span>해야 한다. 리스 자체는 유효하지만
        세전 혜택만 사라지는 것이다. 12 to 24개월 이내에 이직 가능성이 있다면 3 to 5년 리스
        계약은 신중하게 접근해야 한다.
      </p>

      <h2 style={AS.h2}>누가 유리하고 누가 불리한가</h2>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>노베이티드 리스가 유리한 경우</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>연봉 $80,000 이상의 PAYG 정규직 직장인</li>
          <li style={AS.tipItem}>적격 전기차 또는 플러그인 하이브리드 구매 예정</li>
          <li style={AS.tipItem}>리스 기간 동안 같은 고용주 아래서 근무할 가능성이 높음</li>
          <li style={AS.tipItem}>연간 주행거리가 많고 풀 메인테넌스 패키지를 활용할 수 있음</li>
        </ul>
      </div>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>노베이티드 리스가 불리한 경우</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>자영업자, 솔 트레이더, PAYG 급여가 없는 계약직</li>
          <li style={AS.tipItem}>연봉 $60,000 미만, 절세 금액이 구조 비용을 상쇄하기 어려움</li>
          <li style={AS.tipItem}>계약 기간 내 이직 가능성이 높은 경우</li>
          <li style={AS.tipItem}>1 to 2년 내 차량을 처분할 계획이 있는 경우</li>
        </ul>
      </div>

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
          이 글은 일반 정보 제공 목적이며 세무 또는 재무 조언이 아닙니다. 개인 상황에 따라
          결과가 다를 수 있으므로 세무사나 재무 상담사와 상의하시기 바랍니다.
        </p>
      </div>

      <div style={clusterBox}>
        <div style={clusterHeading}>관련 가이드</div>
        <Link href="/blog/novated-lease-australia-ko" style={clusterCard}>
          <div style={clusterTitle}>노베이티드 리스란 무엇인가. 개념부터 절세 원리까지</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/novated-lease-vs-car-loan-australia-ko" style={clusterCard}>
          <div style={clusterTitle}>노베이티드 리스 대 일반 차량 대출. 총비용 비교</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/tools/stamp-duty-calculator" style={clusterCard}>
          <div style={clusterTitle}>내 차 스탬프 듀티 계산하기</div>
          <div style={clusterArrow}>→</div>
        </Link>
      </div>

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>지금 나온 클리어런스 딜 확인하기</div>
        <p style={AS.ctaDesc}>딜러가 처분해야 하는 재고 차량, 매주 업데이트</p>
        <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</Link>
      </div>
    </>
  );
}
