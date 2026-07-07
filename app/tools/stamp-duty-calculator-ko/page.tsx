import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import StampDutyCalculator from "../stamp-duty-calculator/StampDutyCalculator";

export const metadata: Metadata = {
  title: "스탬프 듀티 계산기 · 호주 전 주 차량 구매세 · MustGoDeals",
  description:
    "NSW, VIC, QLD, SA, WA, TAS, ACT, NT 전 주의 차량 스탬프 듀티를 무료로 계산하세요. 2025 to 2026 공식 요율 기준. 입력 즉시 결과가 업데이트됩니다.",
  openGraph: {
    title: "호주 차량 스탬프 듀티 계산기",
    description: "호주 8개 주 및 준주 차량 구매 시 스탬프 듀티를 계산하세요. 전기차 할인 요율 포함.",
    url: "https://mustgodeals.com.au/tools/stamp-duty-calculator-ko",
  },
  alternates: {
    canonical: "https://mustgodeals.com.au/tools/stamp-duty-calculator-ko",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebApplication",
  name: "호주 차량 스탬프 듀티 계산기",
  description: "호주 전 주 차량 구매 스탬프 듀티 무료 계산기. 전기차 할인 요율 포함.",
  applicationCategory: "FinanceApplication",
  operatingSystem: "Any",
  url: "https://mustgodeals.com.au/tools/stamp-duty-calculator-ko",
  inLanguage: "ko",
  offers: { "@type": "Offer", price: "0", priceCurrency: "AUD" },
  publisher: { "@type": "Organization", name: "MustGoDeals", url: "https://mustgodeals.com.au" },
};

const S = {
  page:   { minHeight: "100vh", background: "#FAFAFA" } as React.CSSProperties,
  hero:   { background: "#FAFAFA", padding: "2.5rem 1.5rem 2rem", borderBottom: "1px solid rgba(0,0,0,0.06)" } as React.CSSProperties,
  heroIn: { maxWidth: "780px", margin: "0 auto" } as React.CSSProperties,
  calc:   { maxWidth: "780px", margin: "0 auto", padding: "2.5rem 1.5rem" } as React.CSSProperties,
  seo:    { maxWidth: "780px", margin: "0 auto", padding: "0 1.5rem 4rem" } as React.CSSProperties,
  h1:     { fontSize: "36px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.2, marginBottom: "0.75rem", letterSpacing: "-0.5px" } as React.CSSProperties,
  badge:  { display: "inline-flex", alignItems: "center", gap: "6px", background: "#CCDA47", color: "#1A1A1A", fontSize: "11px", fontWeight: 700, padding: "4px 12px", borderRadius: "20px", marginBottom: "1rem", letterSpacing: "0.5px" } as React.CSSProperties,
  sub:    { fontSize: "15px", color: "#666", lineHeight: 1.7, maxWidth: "500px" } as React.CSSProperties,
  breadc: { display: "flex", gap: "6px", alignItems: "center", fontSize: "12px", color: "rgba(0,0,0,0.35)", marginBottom: "1.25rem" } as React.CSSProperties,
  bLink:  { color: "rgba(0,0,0,0.35)", textDecoration: "none" } as React.CSSProperties,
  divider:{ border: "none", borderTop: "0.5px solid rgba(0,0,0,0.08)", margin: "2.5rem 0" } as React.CSSProperties,
  h2:     { fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.6rem" } as React.CSSProperties,
  p:      { fontSize: "15px", color: "#444", lineHeight: 1.8, marginBottom: "1rem" } as React.CSSProperties,
  grid:   { display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "16px", marginTop: "1.5rem" } as React.CSSProperties,
  card:   { background: "white", border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: "12px", padding: "18px 20px" } as React.CSSProperties,
  ct:     { fontSize: "14px", fontWeight: 700, color: "#1A1A1A", marginBottom: "6px" } as React.CSSProperties,
  cr:     { fontSize: "12px", color: "#7a8a00", fontWeight: 600, marginBottom: "6px" } as React.CSSProperties,
  cp:     { fontSize: "13px", color: "#666", lineHeight: 1.65 } as React.CSSProperties,
  relLinks: { display: "flex", flexDirection: "column" as const, gap: "10px", marginTop: "1.25rem" } as React.CSSProperties,
  relLink:  { display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 18px", background: "white", border: "0.5px solid rgba(0,0,0,0.1)", borderLeft: "3px solid #CCDA47", borderRadius: "8px", textDecoration: "none" } as React.CSSProperties,
};

const STATE_SUMMARIES_KO = [
  { state: "뉴 사우스 웨일스 (NSW)", rate: "$45,000 미만 3%, 초과 5%", text: "NSW는 차량 가격이 $44,999 이하면 3%, $45,000 이상이면 초과분에 5%를 더합니다. Revenue NSW 공식 계산기에서 정확한 금액을 확인할 수 있습니다." },
  { state: "빅토리아 (VIC)", rate: "$200당 $8.40 에서 $18.00", text: "VIC는 차량 가격 구간별 $200당 요율을 적용합니다. CO2 배출량 120g/km 이하 친환경 차량은 가격과 관계없이 $8.40/$200 단일 요율이 적용됩니다." },
  { state: "퀸즐랜드 (QLD)", rate: "엔진 실린더 수별 $2~$4/$100", text: "QLD는 실린더 수에 따라 요율이 달라집니다. 전기차 및 하이브리드는 $2/$100로 가장 낮습니다. $100,000 초과 차량은 전체 가격에 높은 요율이 적용됩니다." },
  { state: "사우스 오스트레일리아 (SA)", rate: "$3,000 초과분에 $4/$100", text: "SA는 단계별 누진 구조로, 대부분의 차량은 $60 기본에 $3,000 초과분에 대해 $4/$100가 적용됩니다. RevenueSA에서 요율을 확인할 수 있습니다." },
  { state: "웨스턴 오스트레일리아 (WA)", rate: "2.75% 에서 최대 6.5%", text: "WA는 슬라이딩 요율을 적용합니다. $25,000 이하 2.75%, $50,000 초과 시 전체 가격에 6.5%를 적용합니다. 고가 차량에 유독 세금 부담이 높습니다." },
  { state: "태즈매니아 (TAS)", rate: "일률 3% (최소 $20)", text: "TAS는 승용차 기준 차량 가격 전체에 3% 단일 요율을 적용합니다. 최소 납부액은 $20입니다. State Revenue Office Tasmania에서 관리합니다." },
  { state: "오스트레일리안 캐피털 테리토리 (ACT)", rate: "배출량 등급별 $2.50~$4.83/$100", text: "ACT는 CO2 배출량 등급에 따라 요율이 결정됩니다. 무배출 전기차는 가장 낮은 요율이 적용되며, 차량 가격 구간도 세 단계로 나뉩니다." },
  { state: "노던 테리토리 (NT)", rate: "일률 3%", text: "NT는 차량 가격 전체에 $3/$100 단일 요율을 적용합니다. Territory Revenue Office에서 관리하며 공식 계산기를 제공합니다." },
];

export default function StampDutyCalculatorKoPage() {
  return (
    <div style={S.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Navbar langLinks={{ current: "KO", links: { EN: "/tools/stamp-duty-calculator", KO: "/tools/stamp-duty-calculator-ko" } }} />

      {/* Hero */}
      <div style={S.hero}>
        <div style={S.heroIn}>
          <div style={S.breadc}>
            <Link href="/" style={S.bLink}>홈</Link>
            <span>›</span>
            <span style={{ color: "rgba(0,0,0,0.5)" }}>스탬프 듀티 계산기</span>
          </div>
          <div style={S.badge}>무료 도구</div>
          <h1 style={S.h1}>스탬프 듀티 계산기</h1>
          <p style={S.sub}>
            호주 전 주 및 준주의 차량 구매 스탬프 듀티를 계산합니다.
            입력 즉시 결과가 업데이트됩니다.
          </p>
        </div>
      </div>

      {/* Calculator */}
      <div style={S.calc}>
        <StampDutyCalculator lang="KO" />
      </div>

      {/* SEO 콘텐츠 */}
      <div style={S.seo}>
        <hr style={S.divider} />

        <h2 style={S.h2}>호주 차량 스탬프 듀티란</h2>
        <p style={S.p}>
          스탬프 듀티는 차량을 구매하거나 명의 이전할 때 주정부가 부과하는 세금입니다.
          각 주마다 요율과 계산 방식이 다르기 때문에 같은 차량이라도 어느 주에서 등록하느냐에 따라
          수천 달러 차이가 날 수 있습니다. 드라이브어웨이 가격을 정확히 파악하려면 사전에 스탬프
          듀티를 확인하는 것이 중요합니다.
        </p>
        <p style={S.p}>
          신차는 GST 포함 구매 가격을, 중고차는 판매 가격과 시장 가치 중 높은 금액을 기준으로
          계산합니다. 일부 주에서는 전기차 또는 저배출 차량에 할인된 요율을 적용합니다.
        </p>

        <hr style={S.divider} />

        <h2 style={S.h2}>주별 스탬프 듀티 요율</h2>
        <p style={{ ...S.p, marginBottom: "0" }}>
          2025 to 2026 회계연도 기준 각 주의 승용차 스탬프 듀티 요율 개요입니다.
          구매 전 반드시 해당 주 revenue office에서 정확한 금액을 확인하세요.
        </p>

        <div style={S.grid}>
          {STATE_SUMMARIES_KO.map((s) => (
            <div key={s.state} style={S.card}>
              <div style={S.ct}>{s.state}</div>
              <div style={S.cr}>{s.rate}</div>
              <div style={S.cp}>{s.text}</div>
            </div>
          ))}
        </div>

        <hr style={S.divider} />

        <h2 style={S.h2}>데모카와 스탬프 듀티의 관계</h2>
        <p style={S.p}>
          데모카와 클리어런스 차량은 두 가지 방식으로 스탬프 듀티 부담을 줄일 수 있습니다.
          첫째, 낮은 구매 가격 자체가 과세 기준을 낮춥니다. 둘째, 퀸즐랜드처럼 $100,000
          초과 시 높은 요율을 전체 가격에 적용하는 주에서는 데모카 가격이 임계점 아래로 내려와
          높은 요율을 피할 수 있습니다. 빅토리아에서는 CO2 배출량이 120g/km 이하인 차량을
          선택하면 가격에 관계없이 가장 낮은 친환경 요율이 적용됩니다.
        </p>

        <div style={S.relLinks}>
          <Link href="/blog/car-stamp-duty-australia-explained-ko" style={S.relLink}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#7a8a00", letterSpacing: "0.08em", marginBottom: "4px" }}>구매 가이드</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>호주에서 차 살 때 스탬프 듀티란</div>
            </div>
            <span style={{ color: "#CCDA47", fontSize: "18px", flexShrink: 0, marginLeft: "12px" }}>→</span>
          </Link>
          <Link href="/blog/buying-a-car-in-australia-guide-ko" style={S.relLink}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#7a8a00", letterSpacing: "0.08em", marginBottom: "4px" }}>종합 가이드</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>호주에서 차 구매하기 완벽 가이드</div>
            </div>
            <span style={{ color: "#CCDA47", fontSize: "18px", flexShrink: 0, marginLeft: "12px" }}>→</span>
          </Link>
          <Link href="/blog/why-buy-demo-car-australia-ko" style={S.relLink}>
            <div>
              <div style={{ fontSize: "10px", fontWeight: 700, color: "#7a8a00", letterSpacing: "0.08em", marginBottom: "4px" }}>구매 가이드</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A" }}>데모카를 사면 스탬프 듀티도 줄어드는 이유</div>
            </div>
            <span style={{ color: "#CCDA47", fontSize: "18px", flexShrink: 0, marginLeft: "12px" }}>→</span>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
}
