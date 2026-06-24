import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "마즈다 6e·CX-6e, 호주 출시 전 수천 건 사전 주문 돌파 | MustGoDeals",
  description:
    "마즈다 6e 세단 300대 사전 주문이 2주 만에 완판됐다. CX-6e SUV는 가격 발표도 전에 세단을 웃도는 관심을 받고 있다.",
  keywords: [
    "마즈다 6e 호주",
    "마즈다 cx-6e 호주",
    "마즈다 전기차 호주 2026",
    "마즈다 cx-6e 사전 주문",
    "마즈다 6e 출고일",
    "마즈다 전기차 가격",
  ],
  openGraph: {
    title: "마즈다 6e·CX-6e, 호주 출시 전 수천 건 사전 주문 돌파",
    description:
      "6e 300대 완판, CX-6e는 가격 발표 전부터 더 많은 관심. 마즈다의 호주 전기차 공세가 본격화됐다.",
    type: "article",
    locale: "ko_KR",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/mazda-6e-cx6e-orders-australia-2026-ko" },
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
          EN: "/news/mazda-6e-cx6e-orders-australia-2026",
          KO: "/news/mazda-6e-cx6e-orders-australia-2026-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>마즈다 6e·CX-6e 사전 주문</span>
          </div>
          <div style={S.badge}>
            <span>뉴스</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 24일</span>
          </div>
          <h1 style={S.h1}>
            마즈다 6e·CX-6e, 호주 출시 전{" "}
            <span style={{ color: "#CCDA47" }}>수천 건 사전 주문 돌파</span>
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

          <p style={S.p}>
            마즈다의 호주 전기차 공세가 본격적인 탄력을 받고 있다. 마즈다 6e 세단은 GT
            선착순 300명에게 Atenza로 무료 업그레이드($3,000 상당)를 제공하는 사전 주문 캠페인을
            진행했고,{" "}
            <span style={S.highlight}>300대 전량이 단 2주 만에 완판</span>됐다. 이제 CX-6e
            SUV가 같은 전략으로 출발선에 섰고, 초기 반응은 세단을 훨씬 웃돌 것으로 보인다.
          </p>

          {/* Image 1 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.mazda.com.au/4966d2/globalassets/vehicle-landing-pages/cx-6e/launch-vlp/assets/au41-p00005750_mazda_cx-6e_vlp_introduction_1300x650px.jpg"
              alt="마즈다 CX-6e SUV 호주"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Mazda Australia Media</p>
          </div>

          <h2 style={S.h2}>지금까지의 숫자</h2>

          <p style={S.p}>
            마즈다 오스트레일리아 세일즈 &amp; 마케팅 디렉터 자로드 기쉔은 6e 세단 300대 완판
            이후 CX-6e에 대한 딜러 현장 문의가 더 많다고 밝혔다. &ldquo;아직 가격도 발표하지
            않았는데, 딜러들은 세단 300대를 팔고 SUV에 대한 관심이 더 크다고 말하고
            있다&rdquo;며 &ldquo;세단 대 SUV 비율이 업계 평균 1:4인 만큼 CX-6e의 물량 잠재력은
            훨씬 크다&rdquo;고 했다.
          </p>

          <h2 style={S.h2}>차량 스펙은?</h2>

          <p style={S.p}>
            마즈다 6e는 온로드 비용 제외{" "}
            <span style={S.highlight}>$49,990부터</span> 시작하며, 첫 출고는 2026년 7월 예정이다.
            WLTP 기준{" "}
            <span style={S.highlight}>560km 주행거리</span>를 갖춘 전용 EV 플랫폼 기반 차량으로,
            기존 Mazda6보다 크고 넉넉한 공간과 높은 수준의 기술을 갖췄다.
          </p>

          <p style={S.p}>
            CX-6e SUV는 온로드 비용 제외{" "}
            <span style={S.highlight}>$53,990부터</span> 시작하며, 첫 출고는 2026년 9월부터다.
            78kWh LFP 배터리와 190kW 후륜 모터를 탑재했고, WLTP 기준{" "}
            <span style={S.highlight}>484km 주행거리</span>와 30~80% 급속충전 15분을 달성했다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>사전 주문 혜택</div>
            <p style={S.calloutText}>
              CX-6e GT 선착순 1,000명은 플래그십 Azami로 무료 업그레이드($3,000 절약) 혜택을
              받는다. 6e 세단을 2주 만에 완판시킨 바로 그 전략이다.
            </p>
          </div>

          {/* Image 2 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://www.mazda.com.au/4966d0/globalassets/vehicle-landing-pages/cx-6e/launch-vlp/assets/au41-p00005750_mazda_cx-6e_exterior_960x480px_01.jpg"
              alt="마즈다 CX-6e 외관"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Mazda Australia Media</p>
          </div>

          <h2 style={S.h2}>경쟁 모델 대비 가격</h2>

          <p style={S.p}>
            CX-6e의 시작가 $53,990은{" "}
            <span style={S.highlight}>테슬라 모델 Y 대비 약 $5,000</span>, BYD 실리온 7 대비
            $1,000, 지커 7X 대비 약 $4,000 저렴하다. 전국 140개 이상의 딜러 네트워크와 탄탄한
            기존 고객층을 보유한 마즈다 입장에서 이 가격대는 EV SUV 시장을 정면으로 공략하기에
            충분하다.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>왜 주목해야 하나</h2>

          <p style={S.p}>
            두 모델 모두 마즈다와 창안자동차의 합작으로 중국에서 생산된다. 비용 효율을 높이면서도
            마즈다 특유의 디자인과 드라이빙 감성을 유지하기 위한 현실적인 선택이다. 6e는{" "}
            <span style={S.highlight}>2026 세계 자동차 디자인 상</span>을 수상했으며, 초기 시승
            리뷰에서도 정숙성, 실내 품질, 가성비에 높은 평가를 받고 있다. CX-6e 수요가 이대로
            유지된다면, 올해 호주 EV 시장에서 가장 주목할 만한 출시 중 하나가 될 것이다.
          </p>

          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>출처</span>
            <a
              href="https://www.mazda.com.au/cars/cx-6e/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              mazda.com.au ↗
            </a>
          </div>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>신차 딜 알림 받기</div>
            <p style={S.ctaDesc}>
              매주 업데이트되는 클리어런스 딜 정보를 가장 먼저 받아보세요
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
                slug: "mazda-6e-cx6e-orders-australia-2026",
                title: "Mazda 6e and CX-6e Clock Up Thousands of Orders Ahead of Australian Launch",
                category: "NEWS",
                date: "June 24, 2026",
                image: "https://www.mazda.com.au/content/dam/mazda/australia/en/cars/cx-6e/overview/cx6e-overview-hero.jpg",
              },
              {
                slug: "hyundai-i20-n-hybrid-nextgen-ko",
                title: "차세대 현대 i20 N 확정 — 하이브리드 탑재로 i30 N을 넘어설 수도",
                category: "뉴스",
                date: "2026년 6월 23일",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/i20-n-render.jpg",
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
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>전체 아티클 →</Link>
          </div>
          <div className="section-grid">
            {[
              {
                slug: "why-buy-demo-car-australia-ko",
                title: "호주에서 데모카를 사야 하는 이유 — 신차보다 현명한 선택",
                excerpt: "신차와 거의 같은 퀄리티에 가격은 10~30% 낮다. 지금 회계연도 마감 시즌, 데모카 매물이 연중 가장 많이 나오는 시기다.",
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
