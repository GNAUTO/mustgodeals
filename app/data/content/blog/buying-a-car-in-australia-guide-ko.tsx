import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

const card: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "white",
  border: "0.5px solid rgba(0,0,0,0.09)",
  borderLeft: "3px solid #CCDA47",
  borderRadius: "8px",
  padding: "1rem 1.25rem",
  textDecoration: "none",
  marginBottom: "10px",
  gap: "12px",
};

const cardMeta: React.CSSProperties = {
  fontSize: "10px",
  color: "#8A9A10",
  fontWeight: 600,
  letterSpacing: "0.8px",
  textTransform: "uppercase",
  marginBottom: "4px",
};

const cardTitle: React.CSSProperties = {
  fontSize: "15px",
  fontWeight: 600,
  color: "#1A1A1A",
  lineHeight: 1.35,
  marginBottom: "3px",
};

const cardTime: React.CSSProperties = {
  fontSize: "12px",
  color: "#aaa",
};

const arrow: React.CSSProperties = {
  fontSize: "18px",
  color: "#CCDA47",
  flexShrink: 0,
};

function ArticleCard({ href, category, title, readTime }: { href: string; category: string; title: string; readTime: string }) {
  return (
    <Link href={href} style={card}>
      <div>
        <div style={cardMeta}>{category}</div>
        <div style={cardTitle}>{title}</div>
        <div style={cardTime}>{readTime}</div>
      </div>
      <div style={arrow}>→</div>
    </Link>
  );
}

export default function BuyingACarInAustraliaGuideKoContent() {
  return (
    <>
      <p style={AS.p}>
        호주에서 차를 사는 일은 대부분의 사람이 생각하는 것보다 복잡합니다. 구매 가격은 시작점에
        불과합니다. 스탬프 듀티, LCT(럭셔리 카 택스), GST, 등록비, CTP 보험, 딜러 납차 비용이
        모두 쌓입니다. 반면, 딜러십이 어떻게 움직이는지 이해하는 구매자, 특히 어떤 시점에 어떤
        압박이 할인으로 이어지는지 아는 구매자는 같은 차를 훨씬 저렴하게 삽니다.
      </p>

      <p style={AS.p}>
        이 가이드는 MustGoDeals에 게시된 각 구매 가이드를 주제별로 묶어 한곳에서 볼 수 있도록
        정리한 종합 목차입니다. 각 섹션은 해당 주제를 요약하고, 더 깊이 읽고 싶은 분을 위해
        상세 글로 연결합니다.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>핵심 요약</div>
        <p style={AS.calloutText}>
          데모카와 클리어런스 차량은 신차 대비 10~30% 저렴합니다. 스탬프 듀티와 LCT는 어떤 차를
          사든 추가로 붙습니다. 노베이티드 리스와 EOFY 타이밍으로 세금 부담을 줄일 수 있습니다.
          월말과 회계연도 마감 시점이 딜러가 가장 적극적으로 협상하는 때입니다. 쇼룸에 들어가기
          전에 이 네 가지를 알아두세요.
        </p>
      </div>

      <h2 style={AS.h2}>어떤 차를 살 것인가</h2>

      <p style={AS.p}>
        많은 구매자가 신차, 데모카, 중고차 중 하나를 선택해야 하는 상황에 놓입니다. 호주 시장에서
        데모카와 클리어런스 차량은 종종 간과되는 중간 선택지입니다. 딜러십 명의로 등록된 후
        낮은 주행거리로 할인된 가격에 판매되는 차들이며, 제조사 보증은 대부분 그대로 유지됩니다.
      </p>

      <p style={AS.p}>
        클리어런스 재고는 신형 모델 출시 전이나 재무 마감 시점에 딜러가 처분해야 하는 차량을
        말합니다. 딜러는 빨리 팔아야 하고, 가격은 협상 가능하며, 차량 상태는 신차와 사실상 동일한
        경우가 많습니다.
      </p>

      <ArticleCard
        href="/blog/why-buy-demo-car-australia-ko"
        category="구매 가이드"
        title="호주에서 데모카를 사야 하는 이유. 신차보다 현명한 선택"
        readTime="7분"
      />
      <ArticleCard
        href="/blog/what-is-a-dealer-clearance-car-australia-ko"
        category="구매 가이드"
        title="딜러 급처분 차량이란 무엇이고 왜 더 저렴한가?"
        readTime="6분"
      />

      <h2 style={AS.h2}>세금과 실제 구매 비용</h2>

      <p style={AS.p}>
        호주는 차량 구매 가격 위에 여러 세금을 부과합니다. 스탬프 듀티는 주정부가 징수하며
        주마다 세율이 다릅니다. NSW에서 6만 달러 차량을 구매하면 스탬프 듀티로만 약 2,000달러가
        추가될 수 있습니다. 빅토리아와 퀸즐랜드는 또 다른 기준을 적용합니다. 선택 사항이 아니며,
        대부분 구매 전에 제대로 설명되지 않습니다.
      </p>

      <p style={AS.p}>
        연방 정부의 럭셔리 카 택스(LCT)는 일정 금액 이상 차량에 부과됩니다. 2025~2026년 기준
        연비 효율 차량은 약 9만 1천 달러, 일반 차량은 약 8만 달러 이상부터 LCT가 적용됩니다.
        세율은 한도 초과분의 33%입니다. 데모카를 구매하면 신차 기준으로는 LCT 대상이었던 차량이
        현재 가격 기준으로 한도 아래로 내려오는 경우가 있어 세금을 완전히 피할 수 있습니다.
      </p>

      <p style={AS.p}>
        ABN 소지자는 추가 고려 사항이 있습니다. 업무용으로 차량을 사용하는 경우 GST를 환급받을
        수 있고, 데모카를 사업용으로 구매하면 가격 할인에 더해 GST 절세 효과도 얻을 수 있습니다.
      </p>

      <Link
        href="/tools/stamp-duty-calculator"
        style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(204,218,71,0.09)", border: "0.5px solid rgba(204,218,71,0.35)", borderRadius: "10px", padding: "14px 18px", textDecoration: "none", marginBottom: "10px", gap: "12px" }}
      >
        <div>
          <div style={{ fontSize: "10px", fontWeight: 700, color: "#7a8a00", letterSpacing: "0.08em", marginBottom: "4px" }}>무료 계산기</div>
          <div style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3 }}>스탬프 듀티 계산기 (전 주 지원)</div>
          <div style={{ fontSize: "12px", color: "#888", marginTop: "3px" }}>주와 차량 가격을 입력하면 즉시 계산됩니다</div>
        </div>
        <div style={{ fontSize: "20px", color: "#CCDA47", flexShrink: 0 }}>→</div>
      </Link>

      <ArticleCard
        href="/blog/car-stamp-duty-australia-explained-ko"
        category="구매 가이드"
        title="호주에서 차 살 때 스탬프 듀티란. 아무도 알려주지 않는 숨겨진 비용"
        readTime="6분"
      />
      <ArticleCard
        href="/blog/luxury-car-tax-australia-ko"
        category="구매 가이드"
        title="호주 럭셔리 카 택스(LCT), 얼마나 내야 할까? 프리미엄 차 사기 전에 꼭 알아야 할 것"
        readTime="8분"
      />
      <ArticleCard
        href="/blog/business-car-gst-demo-car-australia-ko"
        category="비즈니스"
        title="사업자라면 알아야 할 것, 데모카로 절약되는 실제 금액"
        readTime="5분"
      />

      <h2 style={AS.h2}>금융과 세금 절약 전략</h2>

      <p style={AS.p}>
        노베이티드 리스는 고용주가 세전 급여에서 차량 관련 비용을 공제하는 급여 패키징 방식입니다.
        높은 한계세율을 적용받는 직원이라면 실질적인 절약 효과가 큽니다. FBT(부가이익세)와의
        상계 관계를 이해해야 하지만, 많은 구매자에게 여전히 순이익이 됩니다. 현재 전기차는
        FBT 면제 혜택이 적용되어 EV 구매 시 노베이티드 리스가 특히 유리합니다.
      </p>

      <p style={AS.p}>
        ABN 소지자라면 차량 구매 시점이 세금 공제에 영향을 미칩니다. Instant Asset Write-Off,
        차량 한도, 업무용 비율 등의 규정이 서로 맞물립니다. 6월 30일 이전에 구매하면 다음
        회계연도로 넘어갔을 공제를 현재 연도에 적용할 수 있습니다.
      </p>

      <ArticleCard
        href="/blog/novated-lease-australia-ko"
        category="구매 가이드"
        title="노베이티드 리스, 진짜 이득일까? 호주 직장인이라면 알아야 할 모든 것"
        readTime="8분"
      />
      <ArticleCard
        href="/blog/novated-lease-worth-it-australia-ko"
        category="구매 가이드"
        title="노베이티드 리스가 실제로 이득일까. 상황별 정직한 답변"
        readTime="8분"
      />
      <ArticleCard
        href="/blog/novated-lease-vs-car-loan-australia-ko"
        category="구매 가이드"
        title="노베이티드 리스 대 일반 차량 대출. 총비용 비교"
        readTime="8분"
      />
      <ArticleCard
        href="/blog/eofy-car-tax-benefits-australia-ko"
        category="구매 가이드"
        title="회계연도 마감 전에 차를 사면 세금 혜택이 있을까. ABN 사업자를 위한 가이드"
        readTime="7분"
      />

      <h2 style={AS.h2}>언제, 어떻게 사야 할까</h2>

      <p style={AS.p}>
        딜러십 가격은 고정이 아닙니다. 스티커 가격은 출발점이며, 경험 있는 구매자는 그렇게
        접근합니다. 낮은 가격을 얻는 데 가장 중요한 요소는 타이밍입니다. 딜러는 제조사가
        설정한 월간 판매 목표에 따라 움직입니다. 매월 마지막 3~5 영업일에 거래를 성사시키려는
        압박이 가장 강합니다. 그 시점에서는 이전에는 승인되지 않았을 할인이 가능해집니다.
      </p>

      <p style={AS.p}>
        타이밍 외에 준비가 중요합니다. 드라이브어웨이 가격 이해, 유사 차량 시세 파악, 그리고
        필요하다면 자리를 뜰 수 있는 자세가 구매자에게 협상 주도권을 가져다줍니다. 딜러가
        제시하는 가격이 최저가인 경우는 드뭅니다.
      </p>

      <ArticleCard
        href="/blog/best-time-to-buy-a-car-australia-ko"
        category="구매 가이드"
        title="호주에서 자동차를 가장 싸게 살 수 있는 시기"
        readTime="7분"
      />
      <ArticleCard
        href="/blog/how-to-negotiate-car-price-australia-ko"
        category="구매 가이드"
        title="호주 딜러십에서 자동차 가격을 깎는 법. 현장에서 통하는 실전 가이드"
        readTime="8분"
      />
      <ArticleCard
        href="/blog/wolmal-jadongcha-dil-jongni"
        category="한국어 가이드"
        title="월말 자동차 딜 총정리. 딜러가 절대 말 안해주는 비밀"
        readTime="8분"
      />
      <ArticleCard
        href="/blog/how-low-can-dealer-go-new-car-price-ko"
        category="구매 가이드"
        title="딜러가 신차 가격을 얼마나 내릴 수 있나. 업계 구조로 보는 진짜 답"
        readTime="8분"
      />

      <h2 style={AS.h2}>알아두면 좋은 도로 법규</h2>

      <p style={AS.p}>
        차를 구매한 후에는 호주의 도로 법규 중 새로 온 분들이 자주 당황하는 항목들이 있습니다.
        NSW는 특정 공휴일 연휴 기간에 더블 데메리트 포인트를 적용합니다. 벌금이 2배가 된다고
        오해하는 경우가 많은데, 벌금은 그대로이고 벌점만 2배가 됩니다. 이미 벌점이 많은
        운전자라면 연휴 기간에 면허가 정지될 수 있습니다.
      </p>

      <p style={AS.p}>
        호주에는 현금 납부가 가능한 톨게이트 창구가 없습니다. 모든 유료도로는 번호판 카메라로
        운영됩니다. E-Tag나 등록된 패스가 없어도 요금이 청구되지만, 추가 수수료가 붙습니다.
        렌터카를 이용하는 경우 별도의 청구 방식이 있으므로 사전에 확인하는 것이 좋습니다.
      </p>

      <ArticleCard
        href="/blog/nsw-driving-fines-school-zone-double-demerit-ko"
        category="NSW 도로법규"
        title="더블 데메리트 기간, 벌금이 2배가 되는 게 아닙니다"
        readTime="6분"
      />
      <ArticleCard
        href="/blog/australia-toll-roads-etag-guide-ko"
        category="호주 생활 정보"
        title="호주에는 톨게이트 창구가 없습니다. 처음 오신 분들을 위한 완전 정리"
        readTime="7분"
      />

      <hr style={AS.divider} />

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>실제 매물을 확인하세요</div>
        <div style={AS.ctaDesc}>
          호주 딜러십에서 현재 판매 중인 클리어런스 및 데모카 매물을 지금 바로 확인하세요.
        </div>
        <Link href="/listings" style={AS.ctaBtn}>
          데모카 매물 보러가기 →
        </Link>
      </div>
    </>
  );
}
