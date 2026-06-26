import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "2027 현대 i30 세단 공개 — 더 커지고, 하이브리드 중심으로, 내년 호주 상륙 | MustGoDeals",
  description:
    "현대가 8세대 i30 세단을 공개했다. 전장 4,765mm로 커지고 1.6T 가솔린은 삭제, 117kW 하이브리드 중심으로 재편. 호주는 2027년 상반기 출시 예정.",
  keywords: [
    "2027 현대 i30 세단",
    "현대 i30 세단 하이브리드",
    "현대 아반떼 2027 호주",
    "i30 세단 NVES 호주",
    "플레오스 커넥트",
    "i30 세단 캠리 하이브리드",
    "호주 현대 신차",
  ],
  openGraph: {
    title: "2027 현대 i30 세단 공개 — 더 커지고, 하이브리드 중심으로, 내년 호주 상륙",
    description:
      "8세대 i30 세단은 전장 +55mm 성장, 1.6T 삭제, 117kW 하이브리드로 재편. 호주 2027년 상반기 출시 예정.",
    type: "article",
    locale: "ko_KR",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/hyundai-i30-sedan-2027-australia-ko" },
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
          EN: "/news/hyundai-i30-sedan-2027-australia",
          KO: "/news/hyundai-i30-sedan-2027-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>현대 i30 세단 2027</span>
          </div>
          <div style={S.badge}>
            <span>뉴스</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 26일</span>
          </div>
          <h1 style={S.h1}>
            2027 현대 i30 세단 공개 —{" "}
            <span style={{ color: "#CCDA47" }}>더 커지고, 하이브리드 중심으로, 내년 호주 상륙</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals 편집팀</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>신차 · 하이브리드 · 현대</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            현대자동차가 8세대 i30 세단을 공개했다. 덩치는 커졌고, 파워트레인은 하이브리드 중심으로 재편됐으며, 실내는 한 세대 이상 앞서 나간 느낌이다. 호주 출시는{" "}
            <span style={S.highlight}>2027년 상반기</span>로 예정돼 있다.
          </p>

          {/* Image 1 — hero */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/e67acf95-dd06-5ea8-a53b-d688c8c50000"
              alt="2027 현대 i30 세단 외관"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Hyundai</p>
          </div>

          <h2 style={S.h2}>이름은 그대로 — 호주만의 i30 세단</h2>

          <p style={S.p}>
            글로벌 시장에서는 엘란트라(Elantra), 한국에서는 아반떼(Avante)라는 이름으로 팔리지만, 호주는 오랫동안 써온{" "}
            <span style={S.highlight}>i30 세단</span> 뱃지를 그대로 유지한다. 호주에서 쌓아온 브랜드 인지도를 포기할 이유가 없다는 판단이다. 어디서 팔리든 차는 같다 — 그리고 이번 세대는 꽤 진지하게 봐야 할 이야기다.
          </p>

          <h2 style={S.h2}>전 방향으로 성장한 차체</h2>

          <p style={S.p}>
            수치부터 확인하자. 8세대 i30 세단은 모든 방향으로 커졌다. 단순히 커진 게 아니라, 준중형과 중형 세단의 경계를 허무는 수준으로 성장한 셈이다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>현행 대비 제원 변화</div>
            <p style={S.calloutText}>
              전장: 4,765mm <span style={{ color: "#CCDA47" }}>(+55mm)</span><br />
              전폭: 1,855mm <span style={{ color: "#CCDA47" }}>(+30mm)</span><br />
              전고: 1,425mm <span style={{ color: "#CCDA47" }}>(+5mm)</span><br />
              휠베이스: 2,750mm <span style={{ color: "#CCDA47" }}>(+30mm)</span>
            </p>
          </div>

          <p style={S.p}>
            휠베이스 30mm 연장은 뒷좌석 레그룸에 직결된다. 넓어진 전폭은 실내 공간감에도 영향을 미친다. 이 크기면 토요타 캠리 하이브리드 영역에 발을 들이는 것이고, 현대도 그 사실을 잘 알고 있는 것으로 보인다.
          </p>

          <h2 style={S.h2}>하이브리드가 주인공이 됐다</h2>

          {/* Image 2 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/51876aef-b2be-5fbb-9042-bda115c50000"
              alt="2027 현대 i30 세단 하이브리드 파워트레인"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Hyundai</p>
          </div>

          <p style={S.p}>
            현행 모델의 핵심이었던 1.6L 터보 가솔린이 삭제됐다. 대신 <span style={S.highlight}>1.6L 하이브리드 시스템</span>이 업그레이드돼 시스템 합산 출력{" "}
            <span style={S.highlight}>117kW</span>를 발휘한다. 현행 104kW 대비 13kW 향상된 수치다. 한국 시장에는 110kW 2.0L 자연흡기 가솔린도 제공되지만, 호주 출시 여부는 미정인 상태다.
          </p>

          <p style={S.p}>
            호주의 신차 배출가스 기준(NVES)이 저공해 차량 판매를 장려하는 구조인 만큼, 호주 라인업은 하이브리드 중심으로 구성될 가능성이 높다. 하이브리드 시스템 자체도 손을 많이 봤다. 변속기 구조 개선, 구동 모터 출력 향상, 배터리 용량 증가, 회생제동 효율 향상이 패키지로 묶여 적용됐다.
          </p>

          <p style={S.p}>
            새로 추가된 <span style={S.highlight}>예측 드라이브 컨트롤</span>은 내비게이션 목적지를 분석해 경로 상의 내리막, 코너, 정체 구간을 미리 파악하고 에너지 회수와 드라이브 모드를 사전에 조정한다. 마케팅 문구가 아니라, 실제로 작동하는 기능이다. 여기에 <span style={S.highlight}>스테이 모드</span>는 엔진을 끈 상태에서도 고전압 배터리로 에어컨과 인포테인먼트를 유지해준다. 시드니의 여름 주차장에서 유용한 기능이다.
          </p>

          <h2 style={S.h2}>실내: 스크린이 진지해졌다</h2>

          {/* Image 3 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/189cea45-88be-5008-a6ae-d9ad31f50000"
              alt="2027 현대 i30 세단 실내"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Hyundai</p>
          </div>

          <p style={S.p}>
            실내는 세대 교체감이 가장 뚜렷한 부분이다. 아이오닉 3에서 처음 선보인 안드로이드 오토모티브 OS 기반의{" "}
            <span style={S.highlight}>플레오스 커넥트(Pleos Connect)</span>가 도입되며, 터치스크린은{" "}
            <span style={S.highlight}>12.9인치 또는 14.6인치</span> 중 선택 가능하다. 현행 모델 최대 10.25인치에서 대폭 확대된 셈이다. 슬림한 프리스탠딩 디지털 클러스터가 조합되며, 에어컨과 미디어 물리 버튼도 일부 유지됐다. 터치 올인원 트렌드에서 한발 물러선 현명한 결정이다.
          </p>

          <p style={S.p}>
            기어 셀렉터는 <span style={S.highlight}>칼럼 마운티드 스토크</span> 방식으로 바뀌었다. 호주 i30 세단에서는 처음 적용되는 방식으로, 반대편에는 헤드라이트·방향지시등·와이퍼 통합 스토크가 자리한다. 센터콘솔 공간이 대폭 확보되면서 실내 분위기가 한층 고급스러워진 인상이다.
          </p>

          <h2 style={S.h2}>디자인: Art of Steel</h2>

          {/* Image 4 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/21a3a84f-8c94-5008-b54b-8fcb19350000"
              alt="2027 현대 i30 세단 Art of Steel 디자인"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Hyundai</p>
          </div>

          <p style={S.p}>
            현대가 &ldquo;<span style={S.highlight}>Art of Steel</span>&rdquo;이라 부르는 디자인 언어가 적용됐다. 플러시 도어 핸들, 전후 H자형 라이팅 시그니처, 팽팽하게 정리된 차체 면이 특징이다. 이전 세대에서 아쉬웠던 존재감이 이번엔 확실히 보완됐다. 가격 이상의 차로 보이는 것, 이 세그먼트에서는 결코 작은 부분이 아닌 이야기다.
          </p>

          <h2 style={S.h2}>언제 살 수 있나</h2>

          <p style={S.p}>
            한국 출시는 <span style={S.highlight}>2026년 9월</span>로 예정돼 있다. 호주는{" "}
            <span style={S.highlight}>2027년 상반기</span> 출시가 예상된다. 가격은 아직 미발표 상태지만, 하이브리드 모델이 캠리 하이브리드 진입 가격과 비슷하거나 낮게 나온다면 이 세그먼트에서 가장 매력적인 선택지 중 하나가 될 것이다. 향후{" "}
            <span style={S.highlight}>i30 세단 N</span> 퍼포먼스 모델도 출시 예정이며, 신형 2.5L 터보 엔진 탑재 가능성이 거론되고 있다.
          </p>

          <p style={S.p}>
            신형이 들어오기 전, 현행 세대 데모카 매물이 어떻게 움직이는지 지켜보는 것도 나쁘지 않은 전략이다.
          </p>

          <hr style={S.divider} />

          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>출처</span>
            <a
              href="https://www.drive.com.au/news/2027-hyundai-i30-sedan-revealed-expected-in-australia-next-year/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              drive.com.au ↗
            </a>
          </div>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>신형 출시 전 현행 데모카 알림받기</div>
            <p style={S.ctaDesc}>신형이 들어오면 현행 데모카는 빠르게 소진됩니다</p>
            <Link href="/listings" style={S.ctaBtn}>데모카 매물 보기 →</Link>
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
                slug: "hyundai-i30-sedan-2027-australia",
                title: "2027 Hyundai i30 Sedan Revealed — Bigger, Hybrid-Focused, and Coming to Australia Next Year",
                category: "NEWS",
                date: "June 26, 2026",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/e67acf95-dd06-5ea8-a53b-d688c8c50000",
              },
              {
                slug: "skoda-peaq-2027-australia-ko",
                title: "스코다 피크 공개 — 640km 항속, 7인승 전기 SUV 호주 상륙 예고",
                category: "뉴스",
                date: "2026년 6월 25일",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c4d60c30-2aac-5ab1-a8e5-57f962a50000",
              },
              {
                slug: "australia-fuel-excise-relief-extended-july-2026-ko",
                title: "호주 연료세 인하 연장 — 7월에도 주유비 부담 완화 지속",
                category: "뉴스",
                date: "2026년 6월 24일",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/7cb59eee-4c04-5d94-82a8-793a2e150000",
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

      {/* Related Articles */}
      <div style={{ background: "#ECEEE7", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>관련 아티클</div>
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>전체 아티클 →</Link>
          </div>
          <div className="section-grid">
            {[
              {
                slug: "luxury-car-tax-australia-ko",
                title: "호주 럭셔리 카 택스(LCT), 얼마나 내야 할까?",
                excerpt: "아우디, BMW, 메르세데스 구매 전 반드시 알아야 할 LCT. 데모카로 세금을 줄이는 합법적인 방법까지.",
                category: "구매 가이드",
                readTime: "8분",
                date: "2026년 6월 26일",
                lang: "KO",
              },
              {
                slug: "novated-lease-australia-ko",
                title: "노베이티드 리스, 진짜 이득일까? 호주 직장인이라면 알아야 할 모든 것",
                excerpt: "세전 급여 공제, FBT, 전기차 면제 혜택까지 — 노베이티드 리스가 내 상황에 맞는지 판단하는 가이드.",
                category: "구매 가이드",
                readTime: "8분",
                date: "2026년 6월 25일",
                lang: "KO",
              },
              {
                slug: "why-buy-demo-car-australia-ko",
                title: "호주에서 데모카를 사야 하는 이유 — 신차보다 현명한 선택",
                excerpt: "신차와 거의 같은 퀄리티에 가격은 10~30% 낮다. 데모카가 세금 구조상으로도 유리한 이유.",
                category: "구매 가이드",
                readTime: "7분",
                date: "2026년 6월 24일",
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
