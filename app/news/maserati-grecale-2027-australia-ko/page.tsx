import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "마세라티, 2027 그레칼레 SUV 라인업 호주 시장에 확대 출시 | MustGoDeals",
  description:
    "마세라티 2027년형 그레칼레가 V6 엔진 확대 적용과 폴고레 EV 성능 개선으로 업데이트됐다. 호주 출시는 2027년 1분기로 예정됐다.",
  keywords: [
    "마세라티 그레칼레 2027",
    "마세라티 호주",
    "그레칼레 V6 트로페오",
    "마세라티 폴고레 전기차",
    "호주 프리미엄 SUV 2027",
    "마세라티 그레칼레 가격",
  ],
  openGraph: {
    title: "마세라티, 2027 그레칼레 SUV 라인업 호주 시장에 확대 출시",
    description:
      "2027년형 그레칼레는 V6 엔진 라인업 확대와 폴고레 EV의 대폭 향상된 성능을 앞세워 2027년 초 호주 시장에 상륙한다.",
    type: "article",
    locale: "ko_KR",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/maserati-grecale-2027-australia-ko" },
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
          EN: "/news/maserati-grecale-2027-australia",
          KO: "/news/maserati-grecale-2027-australia-ko",
        }}
      />

      {/* Hero */}
      <div style={S.hero}>
        <div style={S.heroInner}>
          <div style={S.breadcrumb}>
            <Link href="/" style={S.breadcrumbLink}>홈</Link>
            <span>›</span>
            <Link href="/news" style={S.breadcrumbLink}>뉴스</Link>
            <span>›</span>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>마세라티 그레칼레 2027</span>
          </div>
          <div style={S.badge}>
            <span>뉴스</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 21일</span>
          </div>
          <h1 style={S.h1}>
            마세라티, 2027 그레칼레 SUV 라인업{" "}
            <span style={{ color: "#CCDA47" }}>호주 시장에 확대 출시</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals 편집팀</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>프리미엄 SUV · 전기차</span>
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
              src="https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg"
              alt="2027 마세라티 그레칼레 SUV"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Maserati Media</p>
          </div>

          <p style={S.p}>
            마세라티가 2027년형 그레칼레 SUV 라인업을 확대해 2027년 초 호주 시장에 공식 출시한다고
            발표했다. 이번 업데이트는 트윈터보 V6 엔진의 적용 범위 확대와 전기차 모델인 폴고레의
            대폭 개선된 성능이 핵심이다.
          </p>

          <p style={S.p}>
            2023년 호주 시장에 처음 선보인 그레칼레는 프리미엄 중형 SUV 시장 공략을 위한
            마세라티의 역점 모델이다. 2027년형은 첫 번째 주요 제품 업데이트로, 기존 플래그십인
            트로페오에만 탑재됐던 3.0리터 트윈터보 V6 엔진이 새롭게 추가되는 중급형 트림으로
            확대 적용되는 것이 핵심 변화다.
          </p>

          <h2 style={S.h2}>V6 엔진, 라인업 전반으로 확대</h2>

          <p style={S.p}>
            새로운 중급형 V6 구성은 최고출력 390kW, 최대토크 550Nm을 발휘한다. 트로페오의
            430kW보다는 낮지만, 마세라티는 이 모델의 정지 상태에서 100km/h까지 가속 시간을{" "}
            <span style={S.highlight}>4.1초</span>로 공표했다. 가격대를 고려할 때 동급 최고
            수준의 가속 성능이다.
          </p>

          <p style={S.p}>
            V6 엔진 적용 범위 확대는 출시 초기부터 꾸준히 제기됐던 지적, 즉 4기통 기본 모델들이
            마세라티 브랜드의 스포티한 정체성에 비해 성능이 부족하다는 비판을 해소하기 위한
            전략적 결정이다. 충분한 V6 퍼포먼스를 원하지만 최상위 트로페오 트림까지는 필요하지
            않은 구매자들에게 새로운 선택지를 제공하게 된다.
          </p>

          <h2 style={S.h2}>폴고레 EV, 실질적인 주행 가능 거리 확보</h2>

          <p style={S.p}>
            전기차 모델인 폴고레는 2027년형 업데이트에서 배터리 팩을 대폭 개선했다. 용량이
            기존 105kWh에서 118kWh로 늘어나 WLTP 기준 주행 가능 거리가 464km에서{" "}
            <span style={S.highlight}>약 535km</span>로 향상됐다. 마세라티는 고온 환경에서의
            항속 거리 감소 문제를 해소하기 위해 열관리 시스템도 새롭게 설계했다고 밝혔다.
          </p>

          <p style={S.p}>
            초기 폴고레 구매자 일부가 호주 여름철 고온 환경에서 주행 가능 거리가 현저히 줄어드는
            현상을 경험한 바 있어, 이번 열관리 개선이 호주 시장에서 특히 주목받고 있다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>폴고레 충전 성능 업데이트</div>
            <p style={S.calloutText}>
              2027년형 폴고레는 기존 150kW에서 대폭 향상된 350kW급 DC 급속 충전을 지원한다.
              호환 충전기 이용 시 배터리 잔량 20%에서 80%까지 약 18분 만에 충전이 가능하다.
            </p>
          </div>

          <h2 style={S.h2}>실내 업데이트 및 외관 변화</h2>

          <p style={S.p}>
            실내는 마세라티 터치 컨트롤 플러스 인포테인먼트 시스템이 새로운 프로세서 하드웨어로
            업데이트됐다. 반응 속도와 사용 편의성이 개선될 예정이며, 기존 모델에서 지적됐던
            응답 지연 문제도 해소될 것으로 기대된다. 아울러 친환경 소재 옵션과 확장된 앰비언트
            라이팅 팔레트가 추가됐다.
          </p>

          <p style={S.p}>
            외관은 전면 범퍼의 에어 인테이크 형상 변경과 새로운 LED 주간주행등 서명이 눈에 띄는
            정도로 변화가 절제됐다. 전체적인 실루엣은 기존 디자인을 계승하면서도 새로운 휠
            디자인으로 한층 세련된 인상을 부여했다.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>호주 출시 가격 및 일정</h2>

          <p style={S.p}>
            마세라티 호주 법인은 아직 2027년형 가격을 공개하지 않았다. 현행 그레칼레 라인업의
            호주 판매 가격은 2.0리터 4기통 GT 트림이{" "}
            <span style={S.highlight}>약 129,990달러(드라이브어웨이)</span>부터 시작해,
            최상위 V6 트로페오가 229,990달러에 달한다. 새롭게 추가되는 중급형 V6 모델은
            180,000~190,000달러 선으로 예상되나, 마세라티는 공식 발표 전까지 가격 공개를
            자제하고 있다.
          </p>

          <p style={S.p}>
            호주 고객 인도는 2027년 1분기부터 시작될 예정이며, 공식 가격 발표와 현지 공개 행사는
            2026년 하반기로 계획돼 있다. 2027년형 그레칼레는 포르쉐 마칸, BMW X3 M 컴페티션,
            메르세데스-벤츠 GLC 63 AMG, 알파로메오 스텔비오 쿼드리폴리오 등과 프리미엄 퍼포먼스
            중형 SUV 시장에서 맞붙는다.
          </p>

          {/* Source */}
          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>출처</span>
            <a
              href="https://www.carsales.com.au"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              carsales.com.au ↗
            </a>
          </div>

          {/* CTA */}
          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>신차 출시 알림 받기</div>
            <p style={S.ctaDesc}>
              최신 자동차 딜과 신차 소식을 매주 이메일로 받아보세요
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
                slug: "maserati-grecale-2027-australia",
                title: "Maserati expands Grecale SUV lineup for 2027 Australian market",
                category: "NEWS",
                date: "June 21, 2026",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg",
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

      {/* 최신 글 */}
      <div style={{ background: "#ECEEE7", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>최신 글</div>
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>전체 글 →</Link>
          </div>
          <div className="section-grid">
            {[
              {
                slug: "wolmal-jadongcha-dil-jongni",
                title: "월말 자동차 딜 총정리 — 딜러가 절대 말 안해주는 비밀",
                excerpt: "월말 마지막 3~5 영업일, 딜러에게 가장 강한 압박이 걸리는 시간. 이 타이밍과 협상 전술만 알면 수천 달러를 아낄 수 있습니다.",
                category: "한국어 가이드",
                readTime: "8분 읽기",
                date: "2026년 6월",
                lang: "KO",
              },
              {
                slug: "end-of-month-car-deals-explained",
                title: "End of month car deals explained — secrets dealers will never tell you",
                excerpt: "Dealers face huge pressure from manufacturers at month end. Here's exactly how that pressure works — and how to use it to negotiate thousands off your next car.",
                category: "Insider Guide",
                readTime: "7 min read",
                date: "June 2026",
                lang: "EN",
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
