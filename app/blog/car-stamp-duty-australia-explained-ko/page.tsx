import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "호주에서 차 살 때 스탬프 듀티란? — 아무도 알려주지 않는 숨겨진 비용 | MustGoDeals",
  description:
    "호주에서 자동차를 구매할 때 반드시 알아야 할 스탬프 듀티. 주마다 세율이 다르고, 협상도 불가능한 고정 비용이다.",
  keywords: [
    "호주 자동차 스탬프 듀티",
    "호주 차량 취득세",
    "NSW 자동차 스탬프 듀티",
    "호주 드라이브어웨이 가격",
    "호주 자동차 구매 비용",
    "QLD 차량 스탬프 듀티",
    "호주 전기차 스탬프 듀티",
  ],
  openGraph: {
    title: "호주에서 차 살 때 스탬프 듀티란? — 아무도 알려주지 않는 숨겨진 비용",
    description:
      "주마다 세율이 다르다. 같은 차라도 어느 주에서 사느냐에 따라 수천 달러 차이가 날 수 있다.",
    type: "article",
    locale: "ko_KR",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/blog/car-stamp-duty-australia-explained-ko" },
};

const S = {
  page:       { minHeight: "100vh", background: "#F5F5F0" } as React.CSSProperties,
  hero:       { background: "#1A1A1A", padding: "3rem 2rem 2.5rem" } as React.CSSProperties,
  heroInner:  { maxWidth: "780px", margin: "0 auto" } as React.CSSProperties,
  badge: {
    display: "inline-flex", alignItems: "center", gap: "6px",
    background: "rgba(204,218,71,0.15)", border: "1px solid #CCDA47",
    color: "#CCDA47", fontSize: "11px", padding: "4px 14px",
    borderRadius: "20px", marginBottom: "1.25rem", letterSpacing: "0.5px",
  } as React.CSSProperties,
  h1: {
    color: "white", fontSize: "38px", fontWeight: 500,
    lineHeight: 1.25, marginBottom: "1rem", letterSpacing: "-0.5px",
  } as React.CSSProperties,
  hereMeta: {
    display: "flex", gap: "1.25rem", alignItems: "center",
    flexWrap: "wrap" as const, marginTop: "1rem",
  } as React.CSSProperties,
  metaItem:   { fontSize: "12px", color: "rgba(255,255,255,0.4)" } as React.CSSProperties,
  article:    { maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" } as React.CSSProperties,
  body:       { fontSize: "16px", lineHeight: 1.8, color: "#2A2A2A" } as React.CSSProperties,
  h2: {
    fontSize: "24px", fontWeight: 600, color: "#1A1A1A",
    marginTop: "2.5rem", marginBottom: "1rem", letterSpacing: "-0.3px",
  } as React.CSSProperties,
  p:          { marginBottom: "1.25rem", color: "#333", lineHeight: 1.8 } as React.CSSProperties,
  callout: {
    background: "#1A1A1A", border: "1px solid rgba(204,218,71,0.3)",
    borderLeft: "4px solid #CCDA47", borderRadius: "8px",
    padding: "1.25rem 1.5rem", margin: "1.75rem 0",
  } as React.CSSProperties,
  calloutTitle: {
    color: "#CCDA47", fontSize: "12px", fontWeight: 600,
    letterSpacing: "1px", marginBottom: "0.5rem",
  } as React.CSSProperties,
  calloutText: { color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.7, margin: 0 } as React.CSSProperties,
  tipBox: {
    background: "white", border: "0.5px solid rgba(0,0,0,0.1)",
    borderRadius: "10px", padding: "1.25rem 1.5rem", margin: "1.5rem 0",
  } as React.CSSProperties,
  tipTitle: {
    fontSize: "13px", fontWeight: 600, color: "#8A9A10",
    marginBottom: "0.75rem", letterSpacing: "0.3px",
  } as React.CSSProperties,
  tipList: { paddingLeft: "1.25rem", margin: 0 } as React.CSSProperties,
  tipItem: { color: "#333", fontSize: "15px", lineHeight: 1.75, marginBottom: "0.4rem" } as React.CSSProperties,
  highlight: {
    background: "rgba(204,218,71,0.2)", color: "#1A1A1A",
    fontWeight: 600, padding: "1px 5px", borderRadius: "3px",
  } as React.CSSProperties,
  divider:    { border: "none", borderTop: "1px solid rgba(0,0,0,0.08)", margin: "2.5rem 0" } as React.CSSProperties,
  ctaBox: {
    background: "#1A1A1A", borderRadius: "12px",
    padding: "2rem", textAlign: "center" as const, margin: "3rem 0",
  } as React.CSSProperties,
  ctaTitle:   { color: "white", fontSize: "20px", fontWeight: 500, marginBottom: "0.5rem" } as React.CSSProperties,
  ctaDesc:    { color: "rgba(255,255,255,0.5)", fontSize: "14px", marginBottom: "1.25rem" } as React.CSSProperties,
  ctaBtn: {
    display: "inline-block", background: "#CCDA47", color: "#1A1A1A",
    padding: "12px 28px", borderRadius: "8px", fontSize: "14px",
    fontWeight: 600, textDecoration: "none",
  } as React.CSSProperties,
  breadcrumb: {
    display: "flex", gap: "6px", alignItems: "center",
    fontSize: "12px", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem",
  } as React.CSSProperties,
  breadcrumbLink: { color: "rgba(255,255,255,0.35)", textDecoration: "none" } as React.CSSProperties,
};

export default function Page() {
  return (
    <div style={S.page}>
      <Navbar />
      <BlogLangTabs
        current="KO"
        links={{
          EN: "/blog/car-stamp-duty-australia-explained",
          KO: "/blog/car-stamp-duty-australia-explained-ko",
        }}
      />

      {/* Hero */}
      <div style={S.hero}>
        <div style={S.heroInner}>
          <div style={S.breadcrumb}>
            <Link href="/" style={S.breadcrumbLink}>홈</Link>
            <span>›</span>
            <Link href="/blog" style={S.breadcrumbLink}>블로그</Link>
            <span>›</span>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>스탬프 듀티 설명</span>
          </div>
          <div style={S.badge}>
            <span>구매 가이드</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 24일</span>
          </div>
          <h1 style={S.h1}>
            호주에서 차 살 때 스탬프 듀티란? —{" "}
            <span style={{ color: "#CCDA47" }}>아무도 알려주지 않는 숨겨진 비용</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>6분</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>비용 · 스탬프 듀티 · 구매 가이드</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            호주에서 차를 처음 사는 사람들이 가장 많이 놀라는 순간이 있다. 딜러에게 최종 견적을
            받았는데, 생각보다 훨씬 높은 금액이 나오는 것이다. 차량 가격에 포함되지 않은 항목들
            — 그 중에서 가장 큰 부분을 차지하는 것이 바로{" "}
            <span style={S.highlight}>스탬프 듀티(Stamp Duty)</span>다.
          </p>

          <h2 style={S.h2}>스탬프 듀티란?</h2>

          <p style={S.p}>
            스탬프 듀티는 주정부가 자동차 구매에 부과하는 세금으로, 신차와 중고차 모두에 적용된다.
            한국의 취득세와 비슷한 개념이다. 흔히 &ldquo;드라이브어웨이 가격&rdquo;이라고 하면
            이 스탬프 듀티가 포함된 가격을 말한다.
          </p>

          <p style={S.p}>
            중요한 점은 —{" "}
            <span style={S.highlight}>호주에는 전국 통일 세율이 없다</span>. 주마다 계산 방식과
            세율이 전혀 다르다. 같은 차를 사더라도 어느 주에서 사느냐에 따라 수백에서 수천 달러
            차이가 날 수 있다.
          </p>

          <h2 style={S.h2}>주별 스탬프 듀티 요율</h2>

          <p style={S.p}>
            <strong>NSW</strong>는 $44,999 이하 차량에{" "}
            <span style={S.highlight}>3%</span>, $45,000 이상에{" "}
            <span style={S.highlight}>5%</span>를 부과한다. 예를 들어 $50,000짜리 차를 NSW에서
            사면 스탬프 듀티만 약 <span style={S.highlight}>$1,600</span> 수준이 된다.
          </p>

          <p style={S.p}>
            <strong>QLD</strong>는 엔진 타입과 가격에 따라 세율이 나뉜다. 1~4기통 차량은
            $100,000 이하 기준 $100당 $3, 5~6기통은 $3.50이 적용된다. 하이브리드·전기차는{" "}
            <span style={S.highlight}>$100당 $2</span>로 가장 낮다.
          </p>

          <p style={S.p}>
            <strong>VIC</strong>는 차량 시장가격 또는 구매가격 중 높은 쪽을 기준으로 계산하며,
            CO₂ 배출량에 따라 세율이 달라진다. 120g/km 이하 친환경 차량은 낮은 세율이 적용된다.
          </p>

          <p style={S.p}>
            <strong>NT</strong>는 차량 가격의{" "}
            <span style={S.highlight}>3% 단일 세율</span>로 가장 단순하게 계산된다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>계산 예시 — NSW에서 $50,000 차량 구매</div>
            <p style={S.calloutText}>
              차량 가격: $50,000<br />
              적용 세율: 5% ($45,000 초과)<br />
              스탬프 듀티: 약 <strong>$1,600</strong><br />
              이 외에 등록비, CTP 보험료, 딜러 수수료가 별도 추가된다.
            </p>
          </div>

          <h2 style={S.h2}>드라이브어웨이 가격에 포함돼 있다</h2>

          <p style={S.p}>
            신차를 딜러에서 구매할 경우 스탬프 듀티는 보통{" "}
            <span style={S.highlight}>드라이브어웨이 가격에 포함</span>되어 있다. 중고차를 개인
            간 거래로 살 경우에는 구매자가 직접 해당 주의 교통당국에 납부해야 한다.
          </p>

          <p style={S.p}>
            딜러에서 차를 살 때 &ldquo;드라이브어웨이 가격이냐, 차량 가격이냐&rdquo;를 반드시
            확인해야 하는 이유가 여기에 있다. 차량 가격만 협상하고 나중에 스탬프 듀티를 따로
            내야 한다면 예상보다 훨씬 많은 금액이 나올 수 있다.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>전기차는 다르다</h2>

          <p style={S.p}>
            일부 주에서는 전기차에 스탬프 듀티 혜택을 제공한다. NT는 $50,000 이하 전기차에
            2027년 6월까지 면제 혜택을 제공하고, QLD는 하이브리드·전기차에 낮은 세율을 적용한다.
            ACT는 배출량이 낮은 차량일수록 낮은 세율이 적용된다. 단, NSW와 TAS는 기존 전기차
            스탬프 듀티 혜택이 종료됐다.
          </p>

          <h2 style={S.h2}>차 사기 전에 꼭 계산해봐야 하는 이유</h2>

          <p style={S.p}>
            스탬프 듀티는 협상이 되지 않는다. 차량 가격은 딜러와 흥정할 수 있지만, 스탬프 듀티는{" "}
            <span style={S.highlight}>주정부가 정한 금액을 그대로</span> 내야 한다. 그렇기
            때문에 예산을 세울 때 반드시 포함해서 계산해야 한다.
          </p>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>주별 공식 스탬프 듀티 계산기</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}><strong>NSW</strong> — Service NSW 차량 스탬프 듀티 계산기</li>
              <li style={S.tipItem}><strong>QLD</strong> — Queensland Government 차량 등록 세금 계산기</li>
              <li style={S.tipItem}><strong>VIC</strong> — State Revenue Office 자동차 세금 계산기</li>
              <li style={S.tipItem}><strong>NT</strong> — Territory Revenue Office (단일 3% 요율)</li>
            </ul>
          </div>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>지금 나온 클리어런스 딜 확인하기</div>
            <p style={S.ctaDesc}>딜러가 처분해야 하는 재고 차량 — 매주 업데이트</p>
            <Link href="/coming-soon" style={S.ctaBtn}>무료 알림 신청 →</Link>
          </div>

        </div>
      </article>

      {/* Related Articles */}
      <div style={{ background: "white", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>관련 아티클</div>
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>전체 아티클 →</Link>
          </div>
          <div className="section-grid">
            {[
              {
                slug: "car-stamp-duty-australia-explained",
                title: "What Is Stamp Duty on a Car in Australia? The Hidden Cost Most Buyers Don't See Coming",
                excerpt: "Stamp duty is a state government tax applied to every car purchase in Australia — and the rates vary significantly by state.",
                category: "Buying Guide",
                readTime: "6 min read",
                date: "June 24, 2026",
                lang: "EN",
              },
              {
                slug: "eofy-car-tax-benefits-australia-ko",
                title: "회계연도 마감 전에 차를 사면 세금 혜택이 있을까? — ABN 사업자를 위한 가이드",
                excerpt: "Instant Asset Write-Off, Car Limit, 업무용 비율 — EOFY 전 차량 구매 시 실제로 적용되는 세금 규정을 정리했다.",
                category: "구매 가이드",
                readTime: "7분",
                date: "2026년 6월 24일",
                lang: "KO",
              },
              {
                slug: "how-to-negotiate-car-price-australia-ko",
                title: "호주 딜러십에서 자동차 가격을 깎는 법 — 현장에서 통하는 실전 가이드",
                excerpt: "쇼룸에 들어서기 전 준비해야 할 것들, 절대 먼저 말하면 안 되는 것, 딜러를 움직이게 만드는 협상 전술까지.",
                category: "구매 가이드",
                readTime: "8분",
                date: "2026년 6월 23일",
                lang: "KO",
              },
            ].map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="news-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "#F5F5F0", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", padding: "1.25rem", height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" }}>{item.category}</span>
                    <span style={{ fontSize: "10px", color: "#999", background: "white", padding: "2px 8px", borderRadius: "10px" }}>{item.lang}</span>
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4, marginBottom: "0.5rem" }}>{item.title}</div>
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.55, marginBottom: "0.75rem" }}>{item.excerpt}</div>
                  <div style={{ fontSize: "11px", color: "#aaa" }}>{item.readTime} · {item.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Latest News */}
      <div style={{ background: "#ECEEE7", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>최신 뉴스</div>
            <Link href="/news" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>전체 뉴스 →</Link>
          </div>
          <div className="section-grid">
            {[
              {
                slug: "australia-fuel-excise-relief-extended-july-2026-ko",
                title: "호주 유류세 인하 연장 — 7월도 리터당 16센트 저렴하게",
                category: "뉴스",
                date: "2026년 6월 24일",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/7cb59eee-4c04-5d94-82a8-793a2e150000",
              },
              {
                slug: "mazda-6e-cx6e-orders-australia-2026-ko",
                title: "마즈다 6e·CX-6e, 호주 출시 전 수천 건 사전 주문 돌파",
                category: "뉴스",
                date: "2026년 6월 24일",
                image: "https://www.mazda.com.au/4966d2/globalassets/vehicle-landing-pages/cx-6e/launch-vlp/assets/au41-p00005750_mazda_cx-6e_vlp_introduction_1300x650px.jpg",
              },
              {
                slug: "hyundai-i20-n-hybrid-nextgen-ko",
                title: "차세대 현대 i20 N 확정 — 하이브리드 탑재로 i30 N을 넘어설 수도",
                category: "뉴스",
                date: "2026년 6월 23일",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/i20-n-render.jpg",
              },
            ].map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="news-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "white", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "130px", objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "0.875rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                      <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.8px", background: "rgba(204,218,71,0.12)", padding: "2px 8px", borderRadius: "10px" }}>{item.category}</span>
                      <span style={{ fontSize: "11px", color: "#999" }}>{item.date}</span>
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4 }}>{item.title}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
