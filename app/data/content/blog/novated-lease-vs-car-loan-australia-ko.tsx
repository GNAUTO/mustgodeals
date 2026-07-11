import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

const faqData = [
  {
    q: "데모카나 중고차도 노베이티드 리스로 구매할 수 있나요",
    a: "네. 노베이티드 리스는 신차뿐 아니라 데모카와 대부분의 중고차에도 적용됩니다. 리스 회사가 차량을 구매하는 방식이므로 신차 여부와 무관하게 구조가 동일하게 작동합니다. 잔존가치와 FBT 기준가는 실제 구매가 기준으로 산정되므로 저렴한 클리어런스 차량은 월 납입금과 잔존가치가 모두 낮아집니다.",
  },
  {
    q: "노베이티드 리스로 사도 스탬프 듀티를 내야 하나요",
    a: "네. 스탬프 듀티는 차량 구매 금액에 부과되는 주정부 세금으로, 금융 방식과 무관하게 적용됩니다. 노베이티드 리스에서는 보통 전체 리스 금액에 포함되어 처리됩니다. 스탬프 듀티 계산기에서 주별 예상 금액을 미리 확인해두는 것이 좋습니다.",
  },
  {
    q: "노베이티드 리스 금리가 일반 차량 대출보다 높나요",
    a: "대체로 그렇습니다. 노베이티드 리스의 이자율은 일반 담보 차량 대출보다 높은 경우가 많습니다. 그러나 납입금 전체를 세전으로 처리하기 때문에 고소득자의 경우 실제 세후 총비용은 차량 대출보다 ���게 나올 수 있습니다. 금리 숫자만 비교하지 말고 세후 총비용 기준으로 비교해야 합니다.",
  },
  {
    q: "중도 해지 시 비용이 발생하나요",
    a: "네. 리스 계약을 조기에 해지하면 위약금이 발생할 수 있으며, 이 금액은 계약서마다 다릅니다. 이직, 차량 변경, 조기 납부 등 계획이 있을 경우 계약 전에 중도 해지 조항을 반드시 확인해야 합니다.",
  },
  {
    q: "잔존가치를 협상할 수 있나요",
    a: "ATO가 최소 잔존가치를 규정하기 때문에 리스 회사가 이보다 낮게 설정할 수 없습니다. 5년 계약의 최소 잔존가치는 구매가의 28.13%입니다. 잔존가치를 더 높게 설정하는 것은 가���하지만, 그러면 만기 시 납부해야 할 금액이 더 커집니다.",
  },
  {
    q: "전기차를 살 때 노베이티드 리스와 차량 대출 중 어느 쪽이 나은가요",
    a: "PAYG 직장인이라면 대부분의 경우 노베이티드 리스가 유리합니다. Electric Car Discount에 따라 적격 전기차와 플러그인 하이브리드는 FBT가 전액 면제되기 때문에 리스 패키지 전체가 세전으로 처리됩니다. 차량 대출에는 이 혜택이 없습니다. 최신 적용 요건은 ato.gov.au에서 확인하세요.",
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

export default function NovatedLeaseVsCarLoanAustraliaKoContent() {
  return (
    <>
      <p style={AS.p}>
        두 방식 모두 같은 차를 손에 넣는다. 차이는 실제로 얼마를 내느냐다. 차량 대출은 단순하다.
        노베이티드 리스는 복잡하다. 그 복잡성이 값을 하느냐는 소득 수준, 고용 상황, 구매하는
        차량에 달려 있다.
      </p>

      <h2 style={AS.h2}>두 방식의 구조적 차이</h2>

      <p style={AS.p}>
        <span style={AS.highlight}>차량 대출</span>은 단순하다. 은행에서 돈을 빌려 차를 사고,
        세후 급여로 원금과 이자를 갚는다. 대출이 끝나면 차는 온전히 내 소유가 된다.
      </p>

      <p style={AS.p}>
        <span style={AS.highlight}>노베이티드 리스</span>는 salary packaging이다. 고용주가
        리스 회사에 납입금을 지불하고 세전 급여에서 그 금액을 공제한다. 소득세가 계산되기 전에
        차량 비용이 빠져나가는 구조다. 계약 만료 시에는 차량 소유권이 자동으로 이전되지 않고
        잔존가치를 납부해야 한다.
      </p>

      <p style={AS.p}>
        세전 처리의 혜택은 실질적이지만, 그에 따른 복잡성도 있다. 관리 수수료, ECM 기여금,
        만기 시 잔존가치, 고용 상태와 연동된 구조가 모두 고려 대상이다.
      </p>

      <h2 style={AS.h2}>총비용 비교표</h2>

      <p style={AS.p}>
        아래 표는 연봉 $90,000의 PAYG 직장인이 $45,000짜리 차를 5년간 운용하는 경우를
        비교한 것이다. 모든 수치는 구조적 차이��� 설명하기 위한 근사치이며 정확한 견적은
        아니다.
      </p>

      <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
        <table style={AS.table}>
          <thead>
            <tr>
              <th style={AS.th}> </th>
              <th style={AS.th}>차량 대출</th>
              <th style={AS.th}>노베이티드 리스</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={AS.td}>차량 가격</td>
              <td style={AS.tdRight}>$45,000</td>
              <td style={AS.tdRight}>$45,000</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>납입 기간</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>5년</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>5년</td>
            </tr>
            <tr>
              <td style={AS.td}>세금 처리</td>
              <td style={AS.tdRight}>세후 납부</td>
              <td style={AS.tdRight}>세전 salary sacrifice</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>한계세율 절세 효과</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>없음</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>약 $19,000 to $23,000</td>
            </tr>
            <tr>
              <td style={AS.td}>관리 수수료 (5년)</td>
              <td style={AS.tdRight}>없음</td>
              <td style={AS.tdRight}>약 $900 to $1,500</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>만기 잔존가치</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>없음 (완납)</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>약 $12,660 (28.13%)</td>
            </tr>
            <tr>
              <td style={AS.td}>만기 후 소유권</td>
              <td style={AS.tdRight}>완전 소유</td>
              <td style={AS.tdRight}>잔존가치 납부 후</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p style={AS.p}>
        노베이티드 리스에서 결정적인 숫자는 절세 금액이다. 관리 수수료와 잔존가치를 고려해도
        연봉 $80,000 이상의 직장인 대부분은 차량 대출보다 실질 총비용��� 낮게 나온��. 고소득일수록
        격차는 벌어지고, 저소득��수록 좁아지는 구조다.
      </p>

      <h2 style={AS.h2}>노베이티드 리스 견적서에서 잘 안 보이는 것들</h2>

      <p style={AS.p}>
        노베이티드 리스 견적은 유리한 수치를 앞세우는 경향��� 있다. 아래 항목들이 묻히거나
        과소평가되기 쉬운 비용이다.
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>놓치기 쉬운 비용 항목</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>리��� 회사가 부과하는 관리 수수료, 월 $15 to $25 수준, 5년이면 $900 to $1,500</li>
          <li style={AS.tipItem}>만기 잔존가치. 구매가의 28.13% ($45,000 차량 기준 약 $12,660)</li>
          <li style={AS.tipItem}>ECM 기여금은 세후 납부다. 전체 납입금이 세전으로 처리되는 것은 아니다</li>
          <li style={AS.tipItem}>이직, 차량 변경, 조기 납부 시 발생할 수 있는 중도 해지 수수료</li>
        </ul>
      </div>

      <p style={AS.p}>
        이 항목들이 노베이티드 리스를 나쁜 선택으로 만드는 건 아니다. 다만 처음부터
        총비용 계산에 포함해야 한다.
      </p>

      <h2 style={AS.h2}>데모카와 클리어런스 차량을 노베이티드 리스로 구매할 때</h2>

      <p style={AS.p}>
        대부분의 구매자가 모르는 조합이다. 노베이티드 리스는{" "}
        <span style={AS.highlight}>데모카, 클리어런스 차량, 대부분의 중고차</span>에도
        적용된다. 신차가 아니어도 리스 구조는 동일하게 작동한다.
      </p>

      <p style={AS.p}>
        이 조합의 경제적 이점은 직접적이다. 세전 납입금, 유지비 세전 처리, FBT 관리 구조가
        클리어런스 차량에도 똑같이 적용된다. 구매가가 낮아지면 거기서 파생되는 모든 것이
        함께 작아진다.
      </p>

      <p style={AS.p}>
        예를 들어 $55,000짜리 신차 SUV와 같은 모델의 $45,000짜리 데모카를 비교해보자.
        클리어런스 차량을 노베이티드 리스로 구매하면 월 납입금이 낮고, 잔존가치도 낮으며
        ($55,000 기준 28.13% 대비 $45,000 기준 28.13%), ECM 계산의 기준이 되는 FBT
        과세 기준가도 낮다. 클리어런스 할인과 노베이티드 리스 절세 효과, 두 가지 혜택이
        동시에 적용된다.
      </p>

      <p style={AS.p}>
        차량 적격 여부는 리스 제공자에게 확인하는 것이 좋다. 대부분 가능하지만 일부 제공자는
        차량 연식이나 등록 상태에 제한을 두기도 한다.
      </p>

      <h2 style={AS.h2}>스탬프 듀티는 어느 방식이든 납부해야 한다</h2>

      <p style={AS.p}>
        노베이티드 리스라도 사라지지 않는 비용이 있다.{" "}
        <span style={AS.highlight}>스탬프 듀티</span>는 차량 ��매가에 부과되는 주정부 세금으로
        금융 방식과 무관하게 부과된다. 노베이티드 리스에서는 보통 전체 리스 금액에 포함되어
        처리된다. $45,000 차��을 NSW에서 구매한다면 스탬프 듀티는 약 $1,350이다.{" "}
        <Link href="/tools/stamp-duty-calculator" style={{ color: "#8A9A10", fontWeight: 600, textDecoration: "none" }}>
          스탬프 듀티 계산기
        </Link>
        에서 주별 예상 금액을 미리 확인하고 예산에 반영해두는 것이 좋다.
      </p>

      <h2 style={AS.h2}>차량 대출이 더 나은 경우</h2>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>차량 대출이 유리한 상황</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>자영업자, ABN 사업자, PAYG 고용주가 없는 계약직</li>
          <li style={AS.tipItem}>연봉 $60,000 미만으로 절세 금액이 제한적</li>
          <li style={AS.tipItem}>12 to 24개월 내 이직 가능성이 있는 경우</li>
          <li style={AS.tipItem}>2 to 3년 이내에 차량을 처분할 계획</li>
          <li style={AS.tipItem}>만기 후 완전 소유권을 선호하는 경우</li>
        </ul>
      </div>

      <h2 style={AS.h2}>노베이티드 리스가 더 나은 경우</h2>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>노베이티드 리스가 유리한 상황</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>연봉 $80,000 이상의 PAYG 정규직 직장인</li>
          <li style={AS.tipItem}>FBT 면제 대상 전기차 또는 플러그인 하이브리드 구매</li>
          <li style={AS.tipItem}>같은 고용주 아래 3 to 5��간 근무 예정</li>
          <li style={AS.tipItem}>데모카나 클리어런스 차량을 낮은 구매가로 취득하는 경우</li>
          <li style={AS.tipItem}>주행거리가 많고 풀 메인테넌스 패키지를 활용할 수 있는 경우</li>
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
          <div style={clusterTitle}>노베이티드 리스란 무엇인가</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/novated-lease-worth-it-australia-ko" style={clusterCard}>
          <div style={clusterTitle}>노베이티드 리스가 실제로 이득일까. 상황별 정직한 답변</div>
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
