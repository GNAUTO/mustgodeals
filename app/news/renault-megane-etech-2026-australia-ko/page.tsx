import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "2026 르노 메간 E-Tech: 완전히 달라진 호주 출시 예정 모델 | MustGoDeals",
  description:
    "2026 르노 메간 E-Tech가 67kWh LFP 배터리, WLTP 500km 주행거리, 165kW DC 급속충전, Google Gemini 탑재 인포테인먼트로 완전히 새로워졌다. 호주 출시는 2027년 상반기 예정.",
  keywords: [
    "르노 메간 E-Tech 2026",
    "르노 메간 호주",
    "메간 이테크 주행거리",
    "메간 LFP 배터리",
    "르노 전기차 호주",
    "메간 이테크 가격",
  ],
  openGraph: {
    title: "2026 르노 메간 E-Tech: 완전히 달라진 호주 출시 예정 모델",
    description:
      "500km 주행거리, 165kW 급속충전, Google Gemini — 완전히 달라진 메간 E-Tech가 2027년 초 호주에 상륙한다.",
    type: "article",
    locale: "ko_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/renault-megane-etech-2026-australia-ko" },
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
          EN: "/news/renault-megane-etech-2026-australia",
          KO: "/news/renault-megane-etech-2026-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>르노 메간 E-Tech 2026</span>
          </div>
          <div style={S.badge}>
            <span>뉴스</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 23일</span>
          </div>
          <h1 style={S.h1}>
            2026 르노 메간 E-Tech:{" "}
            <span style={{ color: "#CCDA47" }}>완전히 달라진 호주 출시 예정 모델</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals 편집팀</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>전기차 · 호주</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          {/* Image 1 — hero */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/23664-megane-studiothomascortesi-4.jpg"
              alt="2026 르노 메간 E-Tech"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Renault Media</p>
          </div>

          <p style={S.p}>
            2026 르노 메간 E-Tech가 새로운 디자인, 향상된 기술, 더 빠른 충전, 더 긴
            주행거리를 갖추고 대대적인 업그레이드를 마쳤다. 핵심은 새로 탑재된{" "}
            <span style={S.highlight}>67kWh LFP 배터리</span>다.
          </p>

          <h2 style={S.h2}>무엇이 바뀌었나</h2>

          <p style={S.p}>
            이번 업데이트의 핵심 변경사항은 날카로워진 새 디자인,{" "}
            <span style={S.highlight}>WLTP 기준 500km 주행거리</span>, 기존
            160kW/300Nm 모터를 유지하는 67kWh LFP 배터리,
            15&ndash;80% 충전에 단 24분이 걸리는{" "}
            <span style={S.highlight}>165kW DC 급속충전</span>, 그리고 2027년 상반기로
            예정된 호주 출시 일정이다.
          </p>

          <p style={S.p}>
            새 배터리는 이번 업데이트 전체의 중심축이다. 주행거리 향상과 충전 속도
            개선은 물론, 새로운 디자인까지 배터리 덕분이다. 신형 배터리 팩을
            수용하기 위해 차체 높이가 기존보다{" "}
            <span style={S.highlight}>20mm 높아졌다</span>.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>급속충전</div>
            <p style={S.calloutText}>
              165kW DC 급속충전으로 15&ndash;80%를 단 24분 만에 충전할 수 있다.
              구형 대비 35kW 향상된 수치로, 커피 한 잔 마시는 동안 약 300km를
              추가할 수 있는 수준이다.
            </p>
          </div>

          {/* Image 2 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/23660-megane-studiothomascortesi-17.jpg"
              alt="2026 르노 메간 E-Tech 실내"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Renault Media</p>
          </div>

          <h2 style={S.h2}>실내 기술 업그레이드</h2>

          <p style={S.p}>
            5도어 프렌치 크로스오버에는 원페달 드라이빙, 히트펌프, 12.3인치 디지털
            계기판, <span style={S.highlight}>Google Gemini</span>가 탑재된 12인치
            멀티미디어 스크린이 새롭게 적용됐다. 여기에 운전자 인식 기능, 주행 모드
            자동 선택 시스템(Smart Mode), 업그레이드된 지능형 어댑티브 크루즈
            컨트롤, 그리고 Safety Score·Safety Coach·Safety Monitor 등 안전 기능
            패키지도 추가됐다.
          </p>

          <h2 style={S.h2}>한 가지 아쉬운 점</h2>

          <p style={S.p}>
            0&ndash;100km/h 가속 시간은 기존 7.4초에서{" "}
            <span style={S.highlight}>7.6초</span>로 소폭 느려졌다. 그러나 WLTP
            주행거리는 46km 늘어났고, DC 충전 출력은 35kW 향상됐다. 대부분의
            구매자에게는 충분히 납득할 만한 트레이드오프다.
          </p>

          {/* Image 3 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/23658-megane-studiothomascortesi-13.jpg"
              alt="2026 르노 메간 E-Tech 외관 디테일"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Renault Media</p>
          </div>

          <hr style={S.divider} />

          <h2 style={S.h2}>호주 출시 일정</h2>

          <p style={S.p}>
            신형 메간 E-Tech는 올해 하반기 유럽에서 먼저 출시되며, 호주에는{" "}
            <span style={S.highlight}>2027년 상반기</span>에 상륙할 예정이다.
            현지 가격과 사양은 출시에 앞서 별도로 발표될 예정이다.
          </p>

          <p style={S.p}>
            현재 호주에서 판매 중인 메간 E-Tech는 $59,990 드라이브어웨이부터
            시작한다. 배터리 용량, 충전 속도, 기술 사양 전반의 대폭 업그레이드를
            감안하면 2026년형의 가격 인상은 불가피할 것으로 보인다.
          </p>

          {/* Source */}
          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>출처</span>
            <a
              href="https://www.carsales.com.au/editorial/details/2026-renault-megane-e-tech-gets-overhauled-152308/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              carsales.com.au ↗
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
                slug: "renault-megane-etech-2026-australia",
                title: "2026 Renault Megane E-Tech: A Complete Overhaul for Australia",
                category: "NEWS",
                date: "June 23, 2026",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/23664-megane-studiothomascortesi-4.jpg",
              },
              {
                slug: "kia-pv5-passenger-australia-2027-ko",
                title: "기아 PV5 패신저, 호주 최초의 전기 미니밴으로 온다",
                category: "뉴스",
                date: "2026년 6월 22일",
                image: "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/contents/pbv/5/freecoding/pv5-passenger/Usecase_KV_01_m.jpg",
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
