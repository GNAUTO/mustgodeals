import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "호주 딜러십에서 자동차 가격을 깎는 법 — 현장에서 통하는 실전 가이드 | MustGoDeals",
  description:
    "쇼룸에 들어서기 전 준비해야 할 것들, 절대 먼저 말하면 안 되는 것, 딜러를 움직이게 만드는 협상 전술까지. 호주 자동차 구매자를 위한 실전 협상 가이드.",
  keywords: [
    "호주 자동차 가격 협상",
    "딜러십 협상 방법",
    "호주 차 구매 팁",
    "자동차 네고 방법",
    "호주 딜러십 협상 전략",
    "드라이브어웨이 가격 협상",
  ],
  openGraph: {
    title: "호주 딜러십에서 자동차 가격을 깎는 법 — 현장에서 통하는 실전 가이드",
    description:
      "쇼룸에서 제시되는 가격은 협상의 출발점일 뿐이다. 어떻게 깎느냐가 관건이다.",
    type: "article",
    locale: "ko_KR",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/blog/how-to-negotiate-car-price-australia-ko" },
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
          EN: "/blog/how-to-negotiate-car-price-australia",
          KO: "/blog/how-to-negotiate-car-price-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>자동차 가격 협상</span>
          </div>
          <div style={S.badge}>
            <span>구매 가이드</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 23일</span>
          </div>
          <h1 style={S.h1}>
            호주 딜러십에서 자동차 가격을 깎는 법 —{" "}
            <span style={{ color: "#CCDA47" }}>현장에서 통하는 실전 가이드</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>8분</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>협상 · 구매 가이드 · 전략</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            호주에서 차를 사본 사람이라면 한 번쯤 이런 생각을 해봤을 것이다.
            &lsquo;좀 더 깎을 수 있었는데.&rsquo; 실제로 그렇다. 딜러십 쇼룸에서 제시되는
            가격은 대부분 협상의 출발점일 뿐, 최종 가격이 아니다. 문제는 어떻게 협상하느냐다.
          </p>

          <h2 style={S.h2}>딜러가 원하는 것을 먼저 이해해라</h2>

          <p style={S.p}>
            협상은 상대를 이해하는 것에서 시작된다. 호주 딜러십 영업사원은 저마다 다른 근무
            환경에서 일하지만, 많은 경우 월별 판매 목표와 연동된 인센티브 구조가 존재한다.
            차를 팔아야 수입이 생기고, 목표를 채워야 보너스가 나오는 구조가 있다는 이야기다.
            이 사실을 이해하면 협상의 타이밍과 방식이 달라진다.
          </p>

          <p style={S.p}>
            딜러는 거래를 성사시키고 싶어한다. 특히{" "}
            <span style={S.highlight}>월말, 분기말</span>이 다가올수록 그 압박은 커진다.
            구매자가 이 사실을 알고 방문하는 것과 모르고 방문하는 것은 결과가 다를 수밖에 없다.
          </p>

          <h2 style={S.h2}>방문 전 반드시 해야 할 준비</h2>

          <p style={S.p}>
            쇼룸에 들어서기 전에 숙제가 필요하다. 적어도 세 가지는 파악해두어야 한다.
          </p>

          <p style={S.p}>
            첫째, 원하는 차종의 시장 가격이다. Carsales, Drive, RedBook을 통해 같은 모델,
            같은 연식, 비슷한 조건의 차량이 실제로 얼마에 거래되는지 확인한다. 딜러가 제시하는
            가격이 시장보다 높은지 낮은지 판단할 수 있어야 한다.
          </p>

          <p style={S.p}>
            둘째, 경쟁 모델의 가격이다. &ldquo;다른 브랜드도 보고 있다&rdquo;는 말은 실제로
            효과가 있다. 단, 근거 없이 말하면 역효과가 난다. 실제로 비교 대상이 있어야 한다.
          </p>

          <p style={S.p}>
            셋째, 드라이브어웨이 가격과 온로드 비용의 차이다. 호주에서는 차량 가격 외에
            등록비, 스탬프 듀티, CTP 보험 등이 추가된다. 딜러가 제시하는 가격이 차량 가격인지,
            드라이브어웨이 가격인지 먼저 확인해야 같은 조건으로 비교할 수 있다.
          </p>

          <h2 style={S.h2}>쇼룸에서 절대 먼저 하지 말아야 할 것</h2>

          <p style={S.p}>
            <strong>예산을 먼저 말하지 마라.</strong> &ldquo;얼마까지 생각하세요?&rdquo;라는
            질문에 구체적인 금액을 먼저 답하는 순간, 협상의 주도권은 딜러에게 넘어간다.
            딜러는 그 예산에 맞춰 가격을 조정하는 것이 아니라, 그 예산 한도까지 최대한
            끌어올리려 한다.
          </p>

          <p style={S.p}>
            <strong>파이낸스 이야기도 너무 일찍 꺼내지 않는 게 좋다.</strong> 딜러 파이낸스를
            이용할 계획이라면, 차량 가격 협상이 어느 정도 마무리된 후에 꺼내는 것이 유리하다.
            딜러는 파이낸스 수익으로 차량 할인을 상쇄할 수 있기 때문이다.
          </p>

          <h2 style={S.h2}>실제로 효과 있는 협상 방법</h2>

          <p style={S.p}>
            가격 협상의 핵심은 딜러가 먼저 카드를 꺼내게 만드는 것이다. 이때 가장 효과적인
            한 마디가 있다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>협상의 시작</div>
            <p style={S.calloutText}>
              <strong>&ldquo;이 차, 베스트프라이스로 해주실 수 있어요?&rdquo;</strong>
              <br /><br />
              단순해 보이지만, 이 질문은 딜러에게 두 가지를 동시에 전달한다. 가격에 관심이
              있다는 것, 그리고 다른 선택지도 보고 있다는 뉘앙스다. 딜러가 숫자를 제시하면
              그때부터 실질적인 협상이 시작된다.
            </p>
          </div>

          <p style={S.p}>
            딜러가 가격을 내리면, 바로 수락하지 않는 것이 좋다. 잠깐 생각하는 척하면서 추가
            조건을 요청한다. 액세서리 추가, 서비스 패키지 포함, 첫 번째 서비스 무료 등 현금
            할인 대신 다른 방식으로 가치를 얻을 수 있는 경우가 많다.
          </p>

          <h2 style={S.h2}>트레이드인이 있다면 따로 협상해라</h2>

          <p style={S.p}>
            기존 차량을 트레이드인할 계획이라면, 신차 가격 협상과 트레이드인 가격 협상을
            반드시 분리해서 진행해야 한다. 딜러는 두 가지를 묶어서 협상하려 하는데, 이렇게
            되면 어디서 얼마가 오가는지 파악하기 어려워진다. 신차 가격을 먼저 확정하고,
            그 다음에 트레이드인 가격을 논의하는 순서가 유리하다.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>협상이 막힌다면</h2>

          <p style={S.p}>
            딜러가 더 이상 움직이지 않는다면, 자리를 떠날 준비를 해라.
            &ldquo;조금 더 생각해볼게요&rdquo;라는 말과 함께 일어서면, 딜러가 추가 조건을
            제시하는 경우가 적지 않다. 실제로 일어서는 것이 핵심이다. 단, 진심으로 그 차를
            원한다면 너무 강하게 밀어붙이다가 딜이 깨지는 것도 주의해야 한다.
          </p>

          <h2 style={S.h2}>지금 당장 써먹을 수 있는 체크리스트</h2>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>쇼룸 들어가기 전 확인</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>방문 전 Carsales에서 같은 모델 시장가 확인</li>
              <li style={S.tipItem}>비교 대상 모델 1~2개 미리 조사</li>
              <li style={S.tipItem}>드라이브어웨이 가격 기준으로 비교</li>
              <li style={S.tipItem}>예산은 먼저 말하지 않기</li>
              <li style={S.tipItem}><strong>&ldquo;베스트프라이스로 해주실 수 있어요?&rdquo;</strong> 한 마디로 시작</li>
              <li style={S.tipItem}>파이낸스 이야기는 차량 가격 확정 후에</li>
              <li style={S.tipItem}>트레이드인은 신차 협상과 분리</li>
            </ul>
          </div>

          <p style={S.p}>
            준비된 구매자는 다르다. 같은 차를 같은 날 사더라도, 얼마나 준비했느냐에 따라
            결과가 달라진다.
          </p>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>신차 딜 알림 받기</div>
            <p style={S.ctaDesc}>매주 업데이트되는 클리어런스 딜 정보를 가장 먼저 받아보세요</p>
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
                slug: "how-to-negotiate-car-price-australia",
                title: "How to Negotiate a Car Price at an Australian Dealership — A Practical Guide That Actually Works",
                excerpt: "The price on the sticker is almost never the final price. Here's how to negotiate it down.",
                category: "Buying Guide",
                readTime: "8 min read",
                date: "June 23, 2026",
                lang: "EN",
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
              {
                slug: "wolmal-jadongcha-dil-jongni",
                title: "월말 자동차 딜 총정리 — 딜러가 절대 말 안해주는 비밀",
                excerpt: "월말 마지막 3~5 영업일, 딜러에게 가장 강한 압박이 걸리는 시간. 이 타이밍과 협상 전술만 알면 수천 달러를 아낄 수 있습니다.",
                category: "한국어 가이드",
                readTime: "8분 읽기",
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
