import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "2027 BMW X5: 하나의 SUV, 다섯 가지 파워트레인 | MustGoDeals",
  description:
    "2027 BMW X5는 가솔린, 디젤, PHEV, 순수 전기, 수소까지 다섯 가지 파워트레인을 하나의 차체에 담은 BMW 최초의 모델이다. 세계 최초 공개를 앞둔 현재까지 알려진 정보를 정리했다.",
  keywords: [
    "BMW X5 2027",
    "iX5 전기차",
    "BMW X5 호주",
    "BMW X5 수소",
    "BMW X5 플러그인 하이브리드",
    "2027 BMW X5 가격",
  ],
  openGraph: {
    title: "2027 BMW X5: 하나의 SUV, 다섯 가지 파워트레인",
    description:
      "하나의 차체에 다섯 가지 파워트레인. 가솔린, 디젤, PHEV, 순수 전기, 수소까지 — BMW 역사상 가장 복잡한 X5가 온다.",
    type: "article",
    locale: "ko_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/bmw-x5-2027-five-powertrains-ko" },
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
    color: "white", fontWeight: 500, lineHeight: 1.25,
    marginBottom: "1rem", letterSpacing: "-0.5px",
  } as React.CSSProperties,
  hereMeta: {
    display: "flex", gap: "1.25rem", alignItems: "center",
    flexWrap: "wrap" as const, marginTop: "1rem",
  } as React.CSSProperties,
  metaItem:   { fontSize: "12px", color: "rgba(255,255,255,0.4)" } as React.CSSProperties,
  article:    { maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" } as React.CSSProperties,
  body:       { fontSize: "16px", lineHeight: 1.8, color: "#2A2A2A" } as React.CSSProperties,
  h2: {
    fontSize: "22px", fontWeight: 600, color: "#1A1A1A",
    marginTop: "2.25rem", marginBottom: "0.875rem", letterSpacing: "-0.3px",
  } as React.CSSProperties,
  p:          { marginBottom: "1.25rem", color: "#333", lineHeight: 1.8 } as React.CSSProperties,
  callout: {
    background: "#1A1A1A", border: "1px solid rgba(204,218,71,0.3)",
    borderLeft: "4px solid #CCDA47", borderRadius: "8px",
    padding: "1.25rem 1.5rem", margin: "1.75rem 0",
  } as React.CSSProperties,
  calloutTitle: {
    color: "#CCDA47", fontSize: "11px", fontWeight: 600,
    letterSpacing: "1px", marginBottom: "0.5rem",
  } as React.CSSProperties,
  calloutText: { color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.7, margin: 0 } as React.CSSProperties,
  highlight: {
    background: "rgba(204,218,71,0.18)", color: "#1A1A1A",
    fontWeight: 600, padding: "1px 5px", borderRadius: "3px",
  } as React.CSSProperties,
  imgWrap:    { margin: "2rem 0", borderRadius: "10px", overflow: "hidden", border: "0.5px solid rgba(0,0,0,0.08)" } as React.CSSProperties,
  imgCaption: { fontSize: "12px", color: "#999", textAlign: "center" as const, padding: "8px 0 0" } as React.CSSProperties,
  divider:    { border: "none", borderTop: "1px solid rgba(0,0,0,0.08)", margin: "2.25rem 0" } as React.CSSProperties,
  sourceBox: {
    background: "white", border: "0.5px solid rgba(0,0,0,0.1)",
    borderRadius: "8px", padding: "1rem 1.25rem",
    display: "flex", alignItems: "center", gap: "0.75rem", margin: "2rem 0",
  } as React.CSSProperties,
  sourceLabel: { fontSize: "11px", color: "#999", flex: "none" } as React.CSSProperties,
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
          EN: "/news/bmw-x5-2027-five-powertrains",
          KO: "/news/bmw-x5-2027-five-powertrains-ko",
        }}
      />

      {/* Hero */}
      <div style={S.hero}>
        <div style={S.heroInner}>
          <div style={S.breadcrumb}>
            <Link href="/" style={S.breadcrumbLink}>Home</Link>
            <span>›</span>
            <Link href="/news" style={S.breadcrumbLink}>뉴스</Link>
            <span>›</span>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>BMW X5 2027</span>
          </div>
          <div style={S.badge}>
            <span>뉴스</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 22일</span>
          </div>
          <h1 style={S.h1}>
            2027 BMW X5: 하나의 SUV,{" "}
            <span style={{ color: "#CCDA47" }}>다섯 가지 파워트레인</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals 편집팀</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>전기차 · 테크놀로지</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          {/* Hero image */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://mediapool.bmwgroup.com/cache/P9/202606/P90645286/P90645286-the-new-bmw-x5-prototype-spartanburg-06-2026-2250px.jpg"
              alt="2027 BMW X5 프로토타입"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
            />
            <p style={S.imgCaption}>Image: BMW Group Media</p>
          </div>

          <p style={S.p}>
            BMW가 차세대 X5의 최종 개발 단계를 공식 확인했다. 세계 최초 공개는 수 주 안에
            이뤄질 전망이다. 이번 모델이 주목받는 이유는 단 하나 — 2027 X5는 하나의 차체에{" "}
            <span style={S.highlight}>다섯 가지 파워트레인</span>을 모두 품은 BMW 최초의
            모델이다. 가솔린, 디젤, 플러그인 하이브리드, 순수 전기, 그리고 수소 연료전지까지.
          </p>

          <h2 style={S.h2}>라인업 한눈에 보기</h2>

          <p style={S.p}>
            X5 40 xDrive는 <span style={S.highlight}>400마력</span>, X5 50e xDrive
            플러그인 하이브리드는 <span style={S.highlight}>490마력</span>, iX5 60 xDrive
            전기 모델은 <span style={S.highlight}>578마력</span>을 발휘한다.
            0&ndash;100km/h 가속은 X5 40 xDrive가 5.4초, X5 50e xDrive가 5.0초,
            iX5 60 xDrive가 4.7초다.
          </p>

          <p style={S.p}>
            라인업의 핵심은 전기 모델 iX5다. EPA 및 CARB 인증 데이터에 따르면
            iX5 60 xDrive는 전후 듀얼모터 AWD 시스템으로 약 569마력을 발휘하며,
            10&ndash;80% 급속충전은 약 25분이 소요될 것으로 예상된다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>iX5 충전 성능</div>
            <p style={S.calloutText}>
              EPA·CARB 인증 데이터 기준, iX5 60 xDrive는 DC 급속충전기에서
              10&ndash;80% 충전을 약 25분 만에 완료할 것으로 예상된다.
              현재 출시된 최상위권 EV와 동등한 수준이다.
            </p>
          </div>

          <h2 style={S.h2}>수소는 2028년에</h2>

          <p style={S.p}>
            수소 연료전지 모델 iX5 Hydrogen은 토요타와의 협업으로 개발되며{" "}
            <span style={S.highlight}>2028년 출시 예정</span>이다. BMW와 토요타는
            2013년부터 수소 연료전지 기술을 공동 개발해왔으며, iX5 Hydrogen은
            그 협력의 첫 번째 양산 승용차 결과물이다.
          </p>

          <p style={S.p}>
            수소 모델은 출시 초기 생산 물량이 제한될 가능성이 높다. 특히 호주의 경우
            수소 충전 인프라가 아직 초기 단계에 머물러 있어, 실질적인 보급까지는
            상당한 시간이 필요할 것으로 보인다.
          </p>

          <h2 style={S.h2}>다섯 가지를 하나로 — 엔지니어링의 묘수</h2>

          <p style={S.p}>
            내연기관, PHEV, 순수 전기 모델 모두 전후 액슬 캐리어 마운팅 포인트가
            동일하다. 장착되는 하드웨어만 다를 뿐, 기본 구조는 하나다. 이 단일 플랫폼
            전략은 BMW의 Neue Klasse 방향성과 맞닿아 있으며, 동일한 생산 라인에서
            전혀 다른 파워트레인을 조립하는 것을 가능하게 한다.
          </p>

          <p style={S.p}>
            BMW는 모든 파워트레인 버전에서 전후 중량 배분 균형을 목표로 했으며,
            전기 모델의 배터리는 무게 중심을 낮추기 위해 액슬 사이 낮은 위치에
            배치된다. 결과적으로 전기 모델이 기존 X5보다 상당히 무거움에도 불구하고,
            모든 파워트레인 버전에서 구형 대비 낮아진 무게 중심을 달성했다는 것이
            BMW의 설명이다.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>호주 출시는 언제?</h2>

          <p style={S.p}>
            2027 BMW X5는 <span style={S.highlight}>2026년 10월&ndash;12월</span> 사이
            출시가 예상된다. 호주 사양과 가격은 아직 공개되지 않았지만, X5는 전통적으로
            글로벌 데뷔 후 수개월 내 호주 시장에 상륙해왔다.
          </p>

          <p style={S.p}>
            현재 호주에서 판매 중인 X5 xDrive40i의 시작 가격은 약 $119,900이다.
            확장된 파워트레인 라인업과 신규 플랫폼 적용을 감안하면 전반적인 가격 인상이
            예상되지만, BMW 호주는 아직 2027년형 가격에 대해 공식 입장을 밝히지
            않은 상태다.
          </p>

          {/* Source */}
          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>출처</span>
            <a
              href="https://www.press.bmwgroup.com/global/article/detail/T0458432EN/on-the-finishing-straight:-the-new-bmw-x5-enters-its-final-test-phase"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              BMW Group Press ↗
            </a>
          </div>

          {/* CTA */}
          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>신차 딜 알림 받기</div>
            <p style={S.ctaDesc}>
              재고 정리 차량이 나오면 가장 먼저 알려드립니다 — 매주 업데이트
            </p>
            <Link href="/coming-soon" style={S.ctaBtn}>무료 알림 신청 →</Link>
          </div>

        </div>
      </article>

      {/* Related News */}
      <div style={{ background: "white", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>관련 뉴스</div>
            <Link href="/news" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>전체 뉴스 →</Link>
          </div>
          <div className="section-grid">
            {[
              {
                slug: "bmw-x5-2027-five-powertrains",
                title: "2027 BMW X5: One SUV, Five Ways to Power It",
                category: "NEWS",
                date: "June 22, 2026",
                image: "https://mediapool.bmwgroup.com/cache/P9/202606/P90645286/P90645286-the-new-bmw-x5-prototype-spartanburg-06-2026-2250px.jpg",
              },
              {
                slug: "porsche-taycan-e-shift-2027-ko",
                title: "포르쉐 타이칸, 가상 변속기를 달다 — 전기차가 기어를 흉내 내는 이유",
                category: "뉴스",
                date: "2026년 6월 18일",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/s26_0407.jpg",
              },
            ].map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="news-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "#F5F5F0", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "1rem" }}>
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

      {/* Latest Articles */}
      <div style={{ background: "#ECEEE7", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>최신 아티클</div>
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>전체 보기 →</Link>
          </div>
          <div className="section-grid">
            {[
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
                <div style={{ background: "white", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", padding: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" }}>{item.category}</span>
                    <span style={{ fontSize: "10px", color: "#999", background: "#F5F5F0", padding: "2px 8px", borderRadius: "10px" }}>{item.lang}</span>
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

      <Footer />
    </div>
  );
}
