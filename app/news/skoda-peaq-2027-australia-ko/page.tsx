import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "스코다 피크 공개 — 640km 항속, 7인승 전기 SUV 호주 상륙 예고 | MustGoDeals",
  description:
    "스코다가 역대 최대 SUV인 피크(Peaq)를 공개했다. 최대 640km 주행거리, V2L/V2H/V2G 양방향 충전, 7인승 — 기아 EV9의 강력한 대항마가 호주 시장에 온다.",
  keywords: [
    "스코다 피크 호주",
    "스코다 전기 SUV 2027",
    "skoda peaq 호주 출시",
    "7인승 전기차 호주",
    "기아 EV9 경쟁차",
    "스코다 피크 가격",
    "호주 전기 SUV 2027",
  ],
  openGraph: {
    title: "스코다 피크 공개 — 640km 항속, 7인승 전기 SUV 호주 상륙 예고",
    description:
      "스코다 역대 최대 SUV, 피크가 베일을 벗었다. 기아 EV9의 직접 경쟁 상대로 호주 출시가 확정됐다.",
    type: "article",
    locale: "ko_KR",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/skoda-peaq-2027-australia-ko" },
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
          EN: "/news/skoda-peaq-2027-australia",
          KO: "/news/skoda-peaq-2027-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>스코다 피크 2027</span>
          </div>
          <div style={S.badge}>
            <span>뉴스</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 25일</span>
          </div>
          <h1 style={S.h1}>
            스코다 피크 공개 —{" "}
            <span style={{ color: "#CCDA47" }}>640km 항속, 7인승 전기 SUV 호주 상륙 예고</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals 편집팀</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>신차 · 전기차 · 호주</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            스코다가 역대 가장 크고 야심 찬 신차의 베일을 벗었다. 목표는 단 하나 — 기아 EV9.
            새로운 <span style={S.highlight}>스코다 피크(Peaq)</span>는 풀사이즈 7인승 전기 SUV로
            호주 출시가 공식 확정됐다. 최대 640km의 주행거리와 함께, 가격 대비 스펙 경쟁력에서
            기존 강자들을 뒤흔들 가능성을 품고 있다는 이야기다.
          </p>

          {/* Image 1 — hero */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c4d60c30-2aac-5ab1-a8e5-57f962a50000"
              alt="2027 스코다 피크 전기 SUV"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Skoda Media</p>
          </div>

          <h2 style={S.h2}>이름의 의미</h2>

          <p style={S.p}>
            &ldquo;피크(Peaq)&rdquo;는 영어 &ldquo;peak(정점)&rdquo;에서 따온 이름이다. 스코다는
            이 작명에 진심이다. 피크는 코디악(Kodiaq) 위에 위치하며 스코다 전기차 라인업의
            꼭대기를 차지한다. 전장{" "}
            <span style={S.highlight}>4,874mm</span>, 휠베이스{" "}
            <span style={S.highlight}>2,965mm</span> — 스코다 역대 최대 SUV인 셈이다. BMW X7보다
            길고, 전체 길이에서 랜드크루저와 불과 몇 밀리미터 차이에 불과한 진짜 '빅 SUV'다.
          </p>

          {/* Image 2 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/a9e8672b-6b48-5de2-b6ab-f5319f250000"
              alt="스코다 피크 외관 디자인"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Skoda Media</p>
          </div>

          <h2 style={S.h2}>세 가지 파워트레인, 하나의 플랫폼</h2>

          <p style={S.p}>
            피크는 폭스바겐 그룹의 검증된{" "}
            <span style={S.highlight}>MEB 전기차 플랫폼</span>을 기반으로 한다. VW ID.4, 아우디
            Q4 e-tron, 스코다 에냐크(Enyaq)와 같은 뼈대 위에 만들어진 모델이다. 파워트레인은
            세 가지로 구성되며 주행거리와 성능에서 폭넓은 선택지를 제공한다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>파워트레인 라인업</div>
            <p style={S.calloutText}>
              <strong>피크 60</strong> — 63kWh 배터리 · 150kW 후륜구동 · 450km 이상<br /><br />
              <strong>피크 90</strong> — 91kWh 배터리 · 210kW 후륜구동 · 640km 이상<br /><br />
              <strong>피크 90x</strong> — 91kWh 배터리 · AWD · 220kW 합산 · 610km 이상
            </p>
          </div>

          <p style={S.p}>
            91kWh 모델 기준 DC 급속충전으로{" "}
            <span style={S.highlight}>10~80% 충전에 단 28분</span>이 걸린다. 점심 한 끼를 먹는
            동안 400km 가량의 주행거리를 채울 수 있다는 이야기이니, 장거리 가족 여행에서도 충분히
            현실적인 선택이 될 수 있는 셈이다.
          </p>

          {/* Image 3 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/5757844a-182f-59b5-b6e7-636b84e50000"
              alt="스코다 피크 실내"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Skoda Media</p>
          </div>

          <h2 style={S.h2}>7인승의 공간 활용</h2>

          <p style={S.p}>
            넓은 휠베이스는 실내 공간에 직결된다. 5인승 구성 시 트렁크 용량은{" "}
            <span style={S.highlight}>935리터</span> — 대부분의 왜건보다 크다. 3열을 세워
            7인승으로 활용할 때도 맨 뒷좌석 뒤에{" "}
            <span style={S.highlight}>299리터</span>가 남고, 앞쪽에는 충전 케이블 보관용{" "}
            <span style={S.highlight}>37리터 프렁크</span>도 있다.
          </p>

          <p style={S.p}>
            <span style={S.highlight}>V2L, V2H, V2G 양방향 충전</span>도 기본으로 지원된다.
            V2L(차량→기기 전력 공급)은 차에서 직접 전자기기를 충전하거나 전원으로 활용할 수
            있는 기능이고, V2H(차량→가정)와 V2G(차량→전력망)는 차를 가정용 보조 배터리나 전력망
            공급원으로 사용할 수 있게 해준다. 태양광 패널을 설치한 가정이라면 실질적인 에너지
            절감 수단이 될 수 있는 구조다.
          </p>

          {/* Image 4 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c076e739-c913-5682-95ce-f1cbd6450000"
              alt="스코다 피크 기술 사양"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Skoda Media</p>
          </div>

          <h2 style={S.h2}>기술이 만드는 차별점</h2>

          <p style={S.p}>
            실내에는 스코다 최초의{" "}
            <span style={S.highlight}>13.6인치 세로형 인포테인먼트 스크린</span>이 탑재된다.
            AR 헤드업 디스플레이는 내비게이션과 안전 정보를 전면 유리에 겹쳐 보여주고,
            Travel Assist 3.0은 스코다의 가장 진보된 반자율주행 시스템이다.
          </p>

          <p style={S.p}>
            파노라마 선루프는 9개 구역으로 나뉘어 각각 독립적으로 전기변색 조절이 가능하다.
            뒷자리 아이와 앞자리 운전자가 각자 원하는 밝기로 조절할 수 있다는 뜻 — 가족 차에서
            이런 세심함이 빛나는 순간이다.
          </p>

          <hr style={S.divider} />

          {/* Image 5 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/0149456a-07c6-5326-ac8d-279df2f50000"
              alt="스코다 피크 후면 디자인"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Skoda Media</p>
          </div>

          <h2 style={S.h2}>디자인: 모던 솔리드</h2>

          <p style={S.p}>
            스코다는 피크의 디자인 언어를 &ldquo;모던 솔리드(Modern Solid)&rdquo;라 부른다.
            공기저항계수 <span style={S.highlight}>0.249Cd</span>는 7인승 SUV 중 최고 수준의
            공기역학적 효율을 자랑한다. 플러시 도어 핸들, T자형 LED 라이팅 시그니처, 군더더기
            없는 측면 라인이 어우러진 디자인은 독일 경쟁 브랜드들의 복잡한 스타일링보다
            훨씬 오래 질리지 않는 선택이 될 것이다.
          </p>

          <h2 style={S.h2}>호주 출시와 가격 전망</h2>

          <p style={S.p}>
            스코다 호주 법인은 피크의 현지 출시를 확인했지만 구체적인 가격과 출시 시기는 아직
            공개하지 않았다. 스코다의 최근 현지화 가격 전략과 유럽 포지셔닝을 고려하면,
            시작 가격은 <span style={S.highlight}>$70,000대 초중반</span>이 될 것으로 보인다.
            호주 기준 $90,000대 이상에 시작하는 기아 EV9보다 의미 있게 낮은 가격이다.
          </p>

          <p style={S.p}>
            스코다가 이 스펙을 그 가격대에 가져올 수 있다면, 피크는 EV9과 경쟁하는 데 그치지
            않고 7인승 전기 SUV 세그먼트에서 &lsquo;가성비&rsquo;의 기준 자체를 다시 쓸 수도
            있는 이야기다.
          </p>

          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>출처</span>
            <a
              href="https://www.drive.com.au/news/2027-skoda-peaq-revealed-as-seven-seat-electric-family-suv/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              drive.com.au ↗
            </a>
          </div>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>전기차 클리어런스 딜 알림 받기</div>
            <p style={S.ctaDesc}>
              전기차 재고 출시 소식을 가장 먼저 받아보세요 — 매주 업데이트
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
                slug: "skoda-peaq-2027-australia",
                title: "Skoda Peaq Revealed: Seven-Seat Electric SUV with 640km Range Confirmed for Australia",
                category: "NEWS",
                date: "June 25, 2026",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c4d60c30-2aac-5ab1-a8e5-57f962a50000",
              },
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
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>최신 아티클</div>
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>전체 아티클 →</Link>
          </div>
          <div className="section-grid">
            {[
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
                slug: "eofy-car-tax-benefits-australia-ko",
                title: "회계연도 마감 전에 차를 사면 세금 혜택이 있을까? — ABN 사업자를 위한 가이드",
                excerpt: "Instant Asset Write-Off, Car Limit, 업무용 비율 — EOFY 전 차량 구매 시 실제로 적용되는 세금 규정을 정리했다.",
                category: "구매 가이드",
                readTime: "7분",
                date: "2026년 6월 24일",
                lang: "KO",
              },
              {
                slug: "why-buy-demo-car-australia-ko",
                title: "호주에서 데모카를 사야 하는 이유 — 신차보다 현명한 선택",
                excerpt: "신차와 거의 같은 퀄리티에 가격은 10~30% 낮다. 지금 회계연도 마감 시즌, 데모카 매물이 연중 가장 많이 나오는 시기다.",
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
