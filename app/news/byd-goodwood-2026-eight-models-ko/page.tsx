import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "BYD, 굿우드에서 8개 신모델 공개 — 포르쉐 911 라이벌도 등장 | MustGoDeals",
  description:
    "BYD가 2026 굿우드 페스티벌 오브 스피드에서 8개 신모델을 공개한다. 포르쉐 911 라이벌 덴자 Z 쿠페 세계 최초 공개, 양왕 U9 익스트림 하이퍼카까지.",
  keywords: [
    "BYD 굿우드 2026",
    "덴자 Z 쿠페",
    "BYD 신모델 2026",
    "덴자 Z9GT 호주",
    "양왕 U9 하이퍼카",
    "굿우드 페스티벌 오브 스피드 2026",
  ],
  openGraph: {
    title: "BYD, 굿우드에서 8개 신모델 공개 — 포르쉐 911 라이벌도 등장",
    description:
      "8개 모델, 3개 브랜드, 덴자 Z 세계 최초 공개. BYD의 굿우드 부스는 행사 역사상 최대 규모다.",
    type: "article",
    locale: "ko_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/byd-goodwood-2026-eight-models-ko" },
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
          EN: "/news/byd-goodwood-2026-eight-models",
          KO: "/news/byd-goodwood-2026-eight-models-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>BYD 굿우드 2026</span>
          </div>
          <div style={S.badge}>
            <span>뉴스</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 23일</span>
          </div>
          <h1 style={S.h1}>
            BYD, 굿우드에서 8개 신모델 공개 —{" "}
            <span style={{ color: "#CCDA47" }}>포르쉐 911 라이벌도 등장</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals 편집팀</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>전기차 · 퍼포먼스</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            BYD가 2026 굿우드 페스티벌 오브 스피드에서{" "}
            <span style={S.highlight}>8개의 신모델</span>을 선보인다. BYD, 덴자(Denza),
            양왕(Yangwang) 세 브랜드에 걸쳐 세계 최초 공개 모델과 유럽 출시 예정 모델이
            함께 등장할 예정이다.
          </p>

          {/* Image 1 — Denza Z hero */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/denza-z-2-rxk7.jpg"
              alt="굿우드 2026 덴자 Z 쿠페"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: BYD Media / Denza Z</p>
          </div>

          <h2 style={S.h2}>메인 이벤트: 덴자 Z</h2>

          <p style={S.p}>
            이번 행사의 하이라이트는{" "}
            <span style={S.highlight}>덴자 Z 쿠페</span>와 덴자 Z 레이싱의 세계
            최초 공개다. 포르쉐 911을 겨냥해 개발된 두 모델은 3개의 전기 모터를
            탑재하며, Z 쿠페는 최고속도 약{" "}
            <span style={S.highlight}>350km/h</span>를 자랑한다. 4인승에 넉넉한
            트렁크까지 갖췄고, 레이싱 버전에는 카본 파이버 에어로 패키지가 추가된다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>덴자 Z 쿠페 — 핵심 제원</div>
            <p style={S.calloutText}>
              전기 모터 3개 · 최고속도 약 350km/h · 4인승 + 트렁크 ·
              레이싱 버전: 카본 파이버 에어로 패키지 · 굿우드 2026 세계 최초 공개
            </p>
          </div>

          <h2 style={S.h2}>그 외 공개 모델들</h2>

          <p style={S.p}>
            호주에서 이미 판매 중인{" "}
            <span style={S.highlight}>덴자 B5 SUV</span>와{" "}
            <span style={S.highlight}>BYD 샤크 6</span> 듀얼캡 유트도 유럽 데뷔를
            앞두고 있다. 또한 2027년 초 호주 출시가 예정된 덴자 Z9GT 퍼포먼스 세단의
            영국 론칭도 굿우드에서 이뤄진다. D9 DM-i 미니밴도 함께 공개되는데,
            플러그인 하이브리드 모델로 2열 마사지 시트와 전 좌석 열선·통풍을 갖췄다.
          </p>

          {/* Image 2 — BYD Dolphin G */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/090_byd_dolphin_g.jpg"
              alt="BYD 돌핀 G DM-i"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: BYD Media / BYD Dolphin G DM-i</p>
          </div>

          <h2 style={S.h2}>양왕의 하이퍼카</h2>

          <p style={S.p}>
            BYD의 럭셔리 브랜드 양왕은 최고속도{" "}
            <span style={S.highlight}>496.22km/h</span>를 주장하는{" "}
            <span style={S.highlight}>U9 익스트림 하이퍼카</span>를 전기·플러그인
            하이브리드 두 가지 버전의 U7 럭셔리 세단, U8L 럭셔리 SUV와 함께 선보인다.
          </p>

          {/* Image 3 — Denza Z9 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/denza-z9-2-e2ix.jpeg"
              alt="덴자 Z9 퍼포먼스 세단"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: BYD Media / Denza Z9</p>
          </div>

          <hr style={S.divider} />

          <h2 style={S.h2}>규모로 증명하는 자신감</h2>

          <p style={S.p}>
            BYD의 전시 부스 면적은{" "}
            <span style={S.highlight}>2,016㎡</span>로, 굿우드 페스티벌 오브 스피드
            역사상 최대 규모다. 숫자 하나가 이 브랜드의 현재 위치를 말해준다.
          </p>

          {/* Image 4 — Yangwang U9 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/yangwang-u9-na07-bagh.jpg"
              alt="양왕 U9 익스트림 하이퍼카"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: BYD Media / Yangwang U9</p>
          </div>

          {/* Source */}
          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>출처</span>
            <a
              href="https://www.carsales.com.au/editorial/details/byd-to-show-off-eight-new-models-at-goodwood-152307/"
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
                slug: "byd-goodwood-2026-eight-models",
                title: "BYD Is Bringing Eight New Models to Goodwood — Including a Porsche 911 Rival",
                category: "NEWS",
                date: "June 23, 2026",
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
