import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "기아 PV5 패신저, 호주 최초의 전기 미니밴으로 온다 | MustGoDeals",
  description:
    "기아 오스트레일리아가 PV5 패신저 전기 미니밴의 2026년 4분기 현지 출시를 공식 확인했다. 호주 최초의 전기 미니밴으로, 390km 주행거리와 $60,000 안팎의 가격이 예상된다.",
  keywords: [
    "기아 PV5 패신저",
    "전기 미니밴 호주",
    "기아 PV5 호주",
    "기아 PV5 가격",
    "전기차 호주 2026",
    "기아 PV5 주행거리",
  ],
  openGraph: {
    title: "기아 PV5 패신저, 호주 최초의 전기 미니밴으로 온다",
    description:
      "7인승, 390km 주행거리, $60,000 안팎. PV5 패신저가 2026년 4분기 호주 시장에 상륙한다.",
    type: "article",
    locale: "ko_AU",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/kia-pv5-passenger-australia-2027-ko" },
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
          EN: "/news/kia-pv5-passenger-australia-2027",
          KO: "/news/kia-pv5-passenger-australia-2027-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>기아 PV5 패신저</span>
          </div>
          <div style={S.badge}>
            <span>뉴스</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 22일</span>
          </div>
          <h1 style={S.h1}>
            기아 PV5 패신저, 호주 최초의{" "}
            <span style={{ color: "#CCDA47" }}>전기 미니밴</span>으로 온다
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
              src="https://www.kia.com/content/dam/kwcms/kme/global/en/assets/contents/pbv/5/freecoding/pv5-passenger/Usecase_KV_01_m.jpg"
              alt="기아 PV5 패신저 전기 미니밴"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Kia Media</p>
          </div>

          <p style={S.p}>
            기아 오스트레일리아가 PV5 패신저 전기 미니밴의 현지 출시를 공식 확인했다.
            출시 시기는 <span style={S.highlight}>2026년 4분기(10&ndash;12월)</span>로,
            호주 시장에 등장하는 최초의 전기 미니밴이 된다. 오랫동안 이 세그먼트를
            지배해온 카니발(디젤·하이브리드)과 나란히 서게 되지만, 방향성은 전혀
            다르다 — 무공해, 낮은 유지비, 그리고 실용적인 실내 설계가 핵심이다.
          </p>

          <h2 style={S.h2}>어떤 차인가</h2>

          <p style={S.p}>
            PV5 패신저는 기아의 전용{" "}
            <span style={S.highlight}>E-GMP.S 플랫폼</span> 위에 올라선 7인승 3열
            전기 밴이다. 올해 초 $55,990에 출시된 PV5 카고와 플랫폼을 공유한다.
            전장 4,695mm, 전폭 1,895mm, 전고 1,905mm로, 카니발보다 약 400mm 짧지만
            150mm가량 더 높다.
          </p>

          <p style={S.p}>
            7개 좌석은 <span style={S.highlight}>2+2+3 배열</span>이며, 2열 두 좌석이
            오른쪽으로 오프셋되어 좌측 슬라이딩 도어 쪽으로 3열까지 통로가 확보된다 —
            도로변에서 탑승할 때 특히 편리한 구조다. 실내에는 7.5인치 디지털
            클러스터와 12.9인치 인포테인먼트 스크린이 탑재되며, 애플 카플레이와
            안드로이드 오토가 기본이다.
          </p>

          <h2 style={S.h2}>주행거리와 충전</h2>

          <p style={S.p}>
            PV5 전 라인업은 전륜구동 단일 모터(
            <span style={S.highlight}>120kW, 250Nm</span>)를 공유한다. 한국 시장
            7인승 PV5 패신저의 공인 주행거리는 358km이며, 호주 사양 PV5 카고가
            WLTP 기준 416km를 기록한다는 점을 감안하면 패신저는 현지 튜닝 후{" "}
            <span style={S.highlight}>390km 안팎</span>이 될 것으로 예상된다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>급속충전</div>
            <p style={S.calloutText}>
              DC 급속충전으로 10&ndash;80%를 채우는 데 약 30분이 소요된다.
              고속도로 휴게소 한 번 정차만으로 약 280km를 추가할 수 있는 셈이다.
            </p>
          </div>

          <h2 style={S.h2}>가격은 얼마나?</h2>

          <p style={S.p}>
            기아 오스트레일리아는 아직 현지 가격을 공개하지 않았지만, 해외 시장
            데이터가 참고가 된다. 한국 시장 PV5 패신저 시작가는 호주 달러 기준 약{" "}
            <span style={S.highlight}>A$42,400</span> 수준이며, PV5 카고는 현지에서
            $55,990에 출시됐다. 카고와 패신저 간 가격 차이가 다른 시장과 비슷하게
            형성된다면, PV5 패신저는 온로드 비용 전{" "}
            <span style={S.highlight}>$60,000 안팎</span>에 출시될 가능성이 높다 —
            $75,990부터 시작하는 폭스바겐 ID. Buzz보다 훨씬 낮은 가격이다.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>호주 시장에서 주목받는 이유</h2>

          <p style={S.p}>
            호주 미니밴 시장은 오랫동안 기아 카니발과 토요타 하이에이스의 영역이었다.
            PV5 패신저는 이 둘을 정면으로 대체하려는 차가 아니다 — 더 짧고, 더 가볍고,
            도심 친화적이다. 하지만 전기차 프리미엄 없이 전동화를 원하는 가족,
            셔틀 운영자, 플릿 바이어에게는 타이밍이 맞는 선택지가 될 수 있다.
          </p>

          <p style={S.p}>
            정확한 가격과 사양, 최종 주행거리는 4분기 출시에 앞서 공개될 예정이다.
          </p>

          {/* Source */}
          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>출처</span>
            <a
              href="https://www.kia.com/eu/pbv/vehicles/pv5-passenger/discover/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              Kia PV5 Passenger ↗
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
                slug: "kia-pv5-passenger-australia-2027",
                title: "Kia PV5 Passenger: Australia's First Electric People Mover Is Coming",
                category: "NEWS",
                date: "June 22, 2026",
                image: "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/contents/pbv/5/freecoding/pv5-passenger/Usecase_KV_01_m.jpg",
              },
              {
                slug: "bmw-x5-2027-five-powertrains-ko",
                title: "2027 BMW X5: 하나의 SUV, 다섯 가지 파워트레인",
                category: "뉴스",
                date: "2026년 6월 22일",
                image: "https://mediapool.bmwgroup.com/cache/P9/202606/P90645286/P90645286-the-new-bmw-x5-prototype-spartanburg-06-2026-2250px.jpg",
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
