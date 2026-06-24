import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "호주에서 데모카를 사야 하는 이유 — 신차보다 현명한 선택 | MustGoDeals",
  description:
    "신차와 거의 같은 퀄리티에 가격은 10~30% 낮다. 보증도 동일하게 적용된다. 지금 회계연도 마감 시즌, 데모카 매물이 연중 가장 많이 나오는 시기다.",
  keywords: [
    "호주 데모카",
    "데모카 구매 호주",
    "데모카 신차 차이",
    "호주 데모카 보증",
    "데모카 장단점",
    "호주 회계연도 자동차 딜",
  ],
  openGraph: {
    title: "호주에서 데모카를 사야 하는 이유 — 신차보다 현명한 선택",
    description:
      "신차 퀄리티, 동일한 보증, 10~30% 낮은 가격. 데모카는 호주 자동차 시장에서 가장 현명한 선택 중 하나다.",
    type: "article",
    locale: "ko_KR",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/blog/why-buy-demo-car-australia-ko" },
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
          EN: "/blog/why-buy-demo-car-australia",
          KO: "/blog/why-buy-demo-car-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>데모카를 사야 하는 이유</span>
          </div>
          <div style={S.badge}>
            <span>구매 가이드</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 24일</span>
          </div>
          <h1 style={S.h1}>
            호주에서 데모카를 사야 하는 이유 —{" "}
            <span style={{ color: "#CCDA47" }}>신차보다 현명한 선택</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>7분</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>데모카 · 구매 가이드 · 가성비</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            차를 살 때 많은 사람들이 &lsquo;새 차&rsquo;에 집착한다. 아무도 타지 않은 차,
            0킬로미터의 차. 그 기분은 이해할 수 있다. 하지만 호주 자동차 시장을 조금만 들여다보면,
            데모카가 얼마나 현명한 선택인지 금방 알게 된다.{" "}
            <span style={S.highlight}>신차와 거의 같은 퀄리티에, 가격은 훨씬 낮은</span> — 이게
            데모카의 본질이다.
          </p>

          <h2 style={S.h2}>데모카란 정확히 무엇인가</h2>

          <p style={S.p}>
            데모카(Demo Car)는 딜러십이 전시 또는 시승 목적으로 등록해서 운용한 차량이다.
            쇼룸에 전시된 차이거나, 고객 시승용으로 사용된 차량이 여기에 해당한다. 새 차로
            출고됐지만, 딜러십 이름으로 먼저 등록됐다는 점이 일반 신차와의 차이다.
          </p>

          <p style={S.p}>
            주행거리는 보통{" "}
            <span style={S.highlight}>500km에서 많게는 10,000km</span> 사이다. 신차를 기준으로
            보면 미미한 수준이고, 차량 관리는 딜러십이 직접 해왔기 때문에 상태가 좋은 경우가
            대부분이다.
          </p>

          <h2 style={S.h2}>가장 큰 이유 — 가격 차이</h2>

          <p style={S.p}>
            데모카의 가장 강력한 장점은 가격이다. 동일한 모델, 동일한 사양의 신차와 비교했을 때
            보통{" "}
            <span style={S.highlight}>10%에서 30% 저렴하게</span> 구입할 수 있다. 차량 가격대에
            따라 이 차이는 수천 달러에서 수만 달러까지 벌어지기도 한다.
          </p>

          <p style={S.p}>
            왜 이렇게 차이가 나는 걸까? 딜러십 이름으로라도 한 번 등록된 차량은 더 이상 신차로
            팔 수 없다. 이 하나의 사실이 가격을 낮추는 핵심이다. 여기에 회계연도 마감이나
            월말처럼 재고를 빠르게 처리해야 하는 시기가 겹치면, 할인폭은 더 커지는 경향이 있다.
          </p>

          <h2 style={S.h2}>신차와 비슷한 퀄리티, 그대로인 보증</h2>

          <p style={S.p}>
            데모카를 꺼리는 가장 흔한 이유는 &lsquo;이미 누가 탄 차&rsquo;라는 심리적 거부감이다.
            하지만 현실적으로 데모카의 상태는 일반 중고차와 차원이 다르다. 딜러십이 직접 관리한
            차량이고, 정기적인 점검이 이루어졌으며, 혹독한 사용 환경에 노출된 경우도 드물다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>보증 안내</div>
            <p style={S.calloutText}>
              대부분의 호주 브랜드는 데모카에도 신차와 동일한 제조사 보증을 제공한다.
              7년 보증을 제공하는 브랜드라면, 데모카도 출고 시점부터 동일한 7년 보증이 적용된다.
              신차와 본질적으로 같은 안전망을 가지면서 가격만 낮은 셈이다.
            </p>
          </div>

          <h2 style={S.h2}>데모카가 가장 많이 나오는 시기</h2>

          <p style={S.p}>
            호주에서 데모카 매물이 집중되는 시기가 있다. 바로{" "}
            <span style={S.highlight}>6월과 7월</span> — 회계연도가 바뀌는 시점이다.
            딜러십은 새로운 회계연도를 앞두고 기존 데모카를 정리하고 새 전시 차량을 들여오는
            사이클을 반복한다. 이 시기에 시장에 나오는 데모카 물량이 연중 가장 많다.
          </p>

          <p style={S.p}>
            월말도 마찬가지다. 판매 목표를 채워야 하는 딜러십 입장에서 데모카는 빠르게 처리하고
            싶은 재고다. 구매자 입장에서는 협상력이 가장 높아지는 순간이기도 하다.
          </p>

          <h2 style={S.h2}>데모카를 살 때 확인해야 할 것들</h2>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>데모카 체크리스트</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>서비스 기록 요청 — 언제 어떤 점검을 받았는지 확인</li>
              <li style={S.tipItem}>보증 잔여 기간 확인 — 출고일 기준으로 보증이 시작됨</li>
              <li style={S.tipItem}>스티어링 휠, 운전석, 도어 트림 등 마모 상태 직접 확인</li>
              <li style={S.tipItem}>전시용인지, 시승용인지 딜러에게 직접 문의</li>
              <li style={S.tipItem}>동일 사양 신차의 드라이브어웨이 가격과 비교</li>
            </ul>
          </div>

          <hr style={S.divider} />

          <h2 style={S.h2}>지금이 데모카를 사기 좋은 이유</h2>

          <p style={S.p}>
            지금은 6월 말이다. 호주 회계연도 마감이 코앞이고, 딜러십마다 데모카 재고 정리가
            한창이다. 평소보다 더 많은 물량이 나와 있고, 딜러의 협상 유연성도 가장 높은 시기다.
          </p>

          <p style={S.p}>
            신차의 퀄리티와 보증, 중고차의 가격 — 데모카는 이 두 가지를 동시에 가져갈 수 있는
            선택지다. 새 차를 고려하고 있다면, 결정하기 전에 데모카 재고를 한 번 살펴볼 것을
            권한다.
          </p>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>데모카 알림 받기</div>
            <p style={S.ctaDesc}>매주 업데이트되는 데모카 재고 정보를 가장 먼저 받아보세요</p>
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
                slug: "why-buy-demo-car-australia",
                title: "Why Buying a Demo Car in Australia Makes More Sense Than You Think",
                excerpt: "Near-new quality, full warranty, 10–30% below new price. Demo cars are one of the best value plays in the Australian car market.",
                category: "Buying Guide",
                readTime: "7 min read",
                date: "June 24, 2026",
                lang: "EN",
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
              {
                slug: "best-time-to-buy-a-car-australia-ko",
                title: "호주에서 자동차를 가장 싸게 살 수 있는 시기",
                excerpt: "회계연도 마감, 월말, 신형 출시 직전. 호주 딜러십이 움직이는 방식을 이해하면 타이밍은 운이 아니라 전략이 된다.",
                category: "구매 가이드",
                readTime: "7분 읽기",
                date: "2026년 6월",
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
                slug: "hyundai-i20-n-hybrid-nextgen-ko",
                title: "차세대 현대 i20 N 확정 — 하이브리드 탑재로 i30 N을 넘어설 수도",
                category: "뉴스",
                date: "2026년 6월 23일",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/i20-n-render.jpg",
              },
              {
                slug: "byd-goodwood-2026-eight-models-ko",
                title: "BYD, 굿우드에서 8개 신모델 공개 — 포르쉐 911 라이벌도 등장",
                category: "뉴스",
                date: "2026년 6월 23일",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/denza-z-2-rxk7.jpg",
              },
              {
                slug: "renault-megane-etech-2026-australia-ko",
                title: "2026 르노 메간 E-Tech: 완전히 달라진 호주 출시 예정 모델",
                category: "뉴스",
                date: "2026년 6월 23일",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/23664-megane-studiothomascortesi-4.jpg",
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
