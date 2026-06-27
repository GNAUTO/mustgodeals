import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "마쯔다, 호주 판매 15년 만에 최저 — 신형 CX-5·전기차로 반등 노린다 | MustGoDeals",
  description:
    "마쯔다가 호주 판매 순위에서 6~7위까지 밀려나며 15년 만에 최저 성적을 기록했다. 5월 판매는 27.4% 급감했지만, 신형 CX-5 출시와 전기차 라인업 확대로 하반기 반등을 자신하고 있다.",
  keywords: [
    "마쯔다 호주 판매 2026",
    "마쯔다 CX-5 신형 호주",
    "마쯔다 호주 순위 2026",
    "mazda australia sales 2026",
    "마쯔다 6e CX-6e 호주",
    "마쯔다 판매 감소",
  ],
  openGraph: {
    title: "마쯔다, 호주 판매 15년 만에 최저 — 신형 CX-5·전기차로 반등 노린다",
    description:
      "15년 만에 최저 순위로 밀려난 마쯔다. 원인은 CX-5 세대교체 공백이었고, 해결책은 이미 준비 중이다.",
    type: "article",
    locale: "ko_KR",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/mazda-sales-dip-australia-2026-ko" },
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
          EN: "/news/mazda-sales-dip-australia-2026",
          KO: "/news/mazda-sales-dip-australia-2026-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>마쯔다 호주 판매 2026</span>
          </div>
          <div style={S.badge}>
            <span>뉴스</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 27일</span>
          </div>
          <h1 style={S.h1}>
            마쯔다, 호주 판매 15년 만에 최저 —{" "}
            <span style={{ color: "#CCDA47" }}>신형 CX-5·전기차로 반등 노린다</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals 편집팀</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>마쯔다 · 호주 · 판매</span>
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
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c8ff5774-14aa-519c-9dc3-281f4db50000"
              alt="마쯔다 호주 판매 2026"
              style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Mazda</p>
          </div>

          <p style={S.p}>
            최근 호주 월간 판매 순위를 유심히 살펴봤다면 뭔가 낯선 광경을 마주했을 것이다.
            오랫동안 상위권을 지켜온 마쯔다가 보이지 않는다. 20년 가까이 호주 중위권 판매를
            꽉 쥐고 있던 브랜드가 6~7위로 밀려났다는 건, 그 자체로 하나의 뉴스다 —{" "}
            <span style={S.highlight}>15년 만에 가장 낮은 순위</span>다.
          </p>

          <p style={S.p}>
            숫자가 말해준다. 2026년 5월, 마쯔다는{" "}
            <span style={S.highlight}>5,636대를 판매하며 전년 동기 대비 27.4% 감소</span>했다.
            4월도 마찬가지였다. 5,698대, 전년 대비 14.3% 줄었다. 그 사이 토요타, BYD, 기아,
            현대, 포드가 차례로 앞질러 나갔다 — 일부는 공격적으로 성장하고, 일부는 그냥
            제자리를 지켰을 뿐인데도 마쯔다가 뒤처진 셈이다.
          </p>

          <h2 style={S.h2}>실제로 무슨 일이 일어난 걸까</h2>

          <p style={S.p}>
            마쯔다 호주 대표 비네시 빈디(Vinesh Bhindi)의 설명은 간결하다. 전형적인 모델
            교체기 공백이다. 마쯔다의 최다 판매 모델이자 호주에서 가장 잘 팔리는 중형 SUV
            중 하나인 CX-5가 구형과 신형 사이 전환기에 놓여 있다. 재고는 바닥났고,
            신형은 아직 전국 딜러십에 깔리지 않은 상황이다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>빈디의 발언</div>
            <p style={S.calloutText}>
              &ldquo;CX-5 재고 정리가 진행 중이고, 신형은 이달 하순쯤 들어올 것 같습니다.&rdquo;
              순위 하락에 대해선: &ldquo;순위는 제가 아침에 일어나서 걱정하는 주제가 아닙니다.&rdquo;
            </p>
          </div>

          {/* Image 2 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/d270eb1a-01ec-534e-80d4-e6a599250000"
              alt="마쯔다 CX-5 호주"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Mazda</p>
          </div>

          <h2 style={S.h2}>CX-5는 여전히 주력이다</h2>

          <p style={S.p}>
            헤드라인 수치만 보면 CX-5가 무너진 것처럼 보이지만, 실상은 다르다. 4월에도{" "}
            <span style={S.highlight}>1,230대</span>가 팔렸고, 5월엔{" "}
            <span style={S.highlight}>1,368대</span>로 연초 대비 6% 줄어드는 데 그쳤다.
            중요한 차이가 있다 — 이건 소비자들이 CX-5에 등을 돌린 게 아니라는 뜻이다.
            수요 문제가 아니라 공급 문제인 셈이다.
          </p>

          <p style={S.p}>
            빈디는 올해{" "}
            <span style={S.highlight}>CX-5 연간 목표 2만 5천 대</span>는 여전히 달성
            가능하다고 밝혔다. 이미 약 9,000대는 구형으로 납차됐고, 나머지 1만 6천 대는
            신형에서 전부 채워야 한다. 신형 CX-5가 출시와 동시에 불이 붙어야 한다는
            얘기고, 빈디는 그에 대해 자신감을 보이고 있다.
          </p>

          <h2 style={S.h2}>나머지 라인업 — 복잡한 그림</h2>

          <p style={S.p}>
            CX-5 교체기 공백 외에도, 일부 볼륨 모델들은 실질적인 부진을 겪고 있다.
            마쯔다3은 연초부터 5월까지{" "}
            <span style={S.highlight}>3,356대로 26% 감소</span>했고,
            노후화된 CX-3는{" "}
            <span style={S.highlight}>3,776대로 21.4% 줄었다</span>. BT-50 픽업트럭도
            HiLux와 Ranger가 지배하는 세그먼트에서{" "}
            <span style={S.highlight}>21% 빠진 5,021대</span>에 그쳤다.
          </p>

          {/* Image 3 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/0b7efb06-a814-5858-b977-f62687250000"
              alt="마쯔다 MX-5 호주"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Mazda</p>
          </div>

          <p style={S.p}>
            그나마 빛나는 예외는 MX-5다. 2인승 로드스터가{" "}
            <span style={S.highlight}>48.1% 급등, 1,623대</span>를 기록했다.
            볼륨 기준으론 틈새시장이지만, 마쯔다 모델이 제대로 불을 붙였을 때 어떤
            반응이 나오는지를 여실히 보여주는 수치다 — 말 그대로, 그리고 비유적으로도.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>전기차라는 반격</h2>

          <p style={S.p}>
            CX-5 신형 외에도, 마쯔다는 처음으로 진지한 EV 공세를 펼치고 있다. 마쯔다
            6e 세단과 CX-6e SUV가 이미{" "}
            <span style={S.highlight}>합산 2,000건 이상의 사전 계약</span>을 달성했다 —
            호주의 전기차 붐을 사실상 관망만 해온 브랜드치고는 놀라운 수치다. 6e 세단의
            초도 300대 물량은 2주 만에 완판됐고, 가격도 확정되지 않은 CX-6e SUV는
            더 큰 관심을 받고 있다.
          </p>

          {/* Image 4 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/8fd86744-09c5-5dc8-bf99-59124b850000"
              alt="마쯔다 전기차 라인업 호주 2026"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>Image: Mazda</p>
          </div>

          <p style={S.p}>
            경쟁사 대부분보다 늦게 EV 시장에 뛰어든 브랜드로선 고무적인 신호다.
            디자인 중심, 프리미엄한 질감, 실용적인 일상 주행 가능 거리 — 마쯔다의 EV 접근법은
            타협 없는 전기차를 원하는 소비자들에게 먹히고 있는 것이다.
          </p>

          <h2 style={S.h2}>앞으로의 전망</h2>

          <p style={S.p}>
            계획대로 된다면 마쯔다의 2026년 하반기는 진짜 반등 이야기가 될 수 있다.
            곧 출시될 신형 CX-5는 브랜드의 가장 강력한 무기를 다시 전선에 세운다.
            6e와 CX-6e는 마쯔다를 한 번도 진지하게 고려하지 않았던 소비자들에게
            새로운 접점을 만든다. 그리고 MX-5는 — 조용히 몇 년 만에 최고의 해를
            보내며 — 마쯔다가 여전히 사람들이 진심으로 원하는 차를 만든다는 사실을
            증명하고 있다.
          </p>

          <p style={S.p}>
            연말 전에 5위 안에 다시 들어올 수 있을지는 두고 볼 일이다. 하지만 빈디의
            자신감을 보면, 이 브랜드는 스스로 만든 CX-5 공백 때문에 생긴 순위 하락을
            두고 밤잠을 설치고 있지는 않은 것이 분명하다.
          </p>

          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>출처</span>
            <a
              href="https://www.drive.com.au/news/mazda-explains-sudden-sales-dip-in-australia/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              drive.com.au ↗
            </a>
          </div>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>데모카 특가를 찾고 계신가요?</div>
            <p style={S.ctaDesc}>
              모델 교체 시기는 딜러들이 재고를 정리하려는 의지가 가장 강한 때입니다. 지금 나와 있는 매물을 확인해보세요.
            </p>
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
                slug: "mazda-sales-dip-australia-2026",
                title: "Mazda Explains Sudden Sales Dip in Australia — New Models on the Way",
                category: "NEWS",
                date: "June 27, 2026",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c8ff5774-14aa-519c-9dc3-281f4db50000",
              },
              {
                slug: "mazda-6e-cx6e-orders-australia-2026-ko",
                title: "마쯔다 6e·CX-6e, 호주 출시 앞두고 수천 건 사전 계약 달성",
                category: "뉴스",
                date: "2026년 6월 24일",
                image: "https://www.mazda.com.au/4966d2/globalassets/vehicle-landing-pages/cx-6e/launch-vlp/assets/au41-p00005750_mazda_cx-6e_vlp_introduction_1300x650px.jpg",
              },
              {
                slug: "australia-fuel-excise-relief-extended-july-2026-ko",
                title: "호주 유류세 인하 연장 — 당분간 주유비 부담 줄어든다",
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
                title: "호주에서 데모카를 사는 게 생각보다 훨씬 합리적인 이유",
                excerpt: "거의 새 차 수준의 품질, 완전한 워런티, 새 차 대비 10~30% 저렴한 가격. 데모카는 호주 자동차 시장에서 가장 가성비 좋은 선택 중 하나다.",
                category: "구매 가이드",
                readTime: "7분 읽기",
                date: "2026년 6월 24일",
                lang: "KO",
              },
              {
                slug: "how-to-negotiate-car-price-australia-ko",
                title: "호주 딜러십에서 차값 깎는 법 — 실제로 통하는 실전 가이드",
                excerpt: "스티커에 적힌 가격이 최종 가격인 경우는 거의 없다. 사전에 무엇을 조사해야 하는지, 실전에서 통하는 협상 전술은 무엇인지 알아본다.",
                category: "구매 가이드",
                readTime: "8분 읽기",
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
