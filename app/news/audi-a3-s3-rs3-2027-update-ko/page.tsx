import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "2027 아우디 A3·S3·RS3 업데이트 — 더 커진 스크린, 줄어든 버튼, 완전히 달라진 실내 | MustGoDeals",
  description:
    "아우디가 A3 전 라인업에 커브드 디지털 스테이지 콕핏을 도입했다. 파노라믹 듀얼 스크린, 에어컨 버튼 통합, 강화된 주행 보조 시스템. 유럽 출시 2026년 9월.",
  keywords: [
    "2027 아우디 A3 호주",
    "아우디 A3 S3 RS3 업데이트",
    "아우디 디지털 스테이지 A3",
    "아우디 A3 2027 실내",
    "아우디 커브드 디스플레이",
    "아우디 S3 2027",
    "아우디 RS3 2027",
  ],
  openGraph: {
    title: "2027 아우디 A3·S3·RS3 업데이트 — 더 커진 스크린, 줄어든 버튼, 완전히 달라진 실내",
    description:
      "A5·A6의 디지털 스테이지 아키텍처가 A3까지 내려왔다. 파노라믹 커브드 디스플레이, 에어컨 버튼 통합, 트레인드 파킹 기능 추가.",
    type: "article",
    locale: "ko_KR",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/audi-a3-s3-rs3-2027-update-ko" },
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
          EN: "/news/audi-a3-s3-rs3-2027-update",
          KO: "/news/audi-a3-s3-rs3-2027-update-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>아우디 A3 S3 RS3 2027</span>
          </div>
          <div style={S.badge}>
            <span>뉴스</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 26일</span>
          </div>
          <h1 style={S.h1}>
            2027 아우디 A3·S3·RS3 업데이트 —{" "}
            <span style={{ color: "#CCDA47" }}>더 커진 스크린, 줄어든 버튼, 완전히 달라진 실내</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals 편집팀</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>신차 · 아우디 · 실내 기술</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            아우디가 A3 전 라인업 — A3, S3, RS3 — 의 실내를 대폭 손봤다. A5와 A6에 먼저 적용된 커브드{" "}
            <span style={S.highlight}>디지털 스테이지(Digital Stage)</span> 콕핏 아키텍처가 이번에 A3까지 내려온 것이다. 유럽 출시는{" "}
            <span style={S.highlight}>2026년 9월</span>로 예정돼 있으며, 호주 출시 시기는 아직 미확정이다.
          </p>

          {/* Image 1 — hero */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/dd218bf3-401e-53e2-a2c4-ed4470650000"
              alt="2027 아우디 A3 외관"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Audi Media</p>
          </div>

          <h2 style={S.h2}>업데이트 전부터 이미 잘 팔리고 있다</h2>

          <p style={S.p}>
            타이밍도 나쁘지 않다. 아우디 호주의 A3 판매량은 2026년 들어 확연히 살아났다. 올해 1~5월에만{" "}
            <span style={S.highlight}>875대</span>가 판매됐는데, 이는 전년 동기 대비{" "}
            <span style={S.highlight}>72.9% 증가</span>한 수치다. 이미 잘 팔리는 모델이 실내까지 업그레이드되는 셈이니, 2027년 호주 출시 이후의 반응이 더욱 기대되는 이야기다.
          </p>

          <h2 style={S.h2}>디지털 스테이지, A3에 상륙</h2>

          {/* Image 2 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/8722ab7e-f699-5137-abba-0ea691650000"
              alt="2027 아우디 A3 디지털 스테이지 실내"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Audi Media</p>
          </div>

          <p style={S.p}>
            이번 업데이트의 핵심은{" "}
            <span style={S.highlight}>파노라믹 디스플레이</span>다. 단일 곡면 유리 아래{" "}
            <span style={S.highlight}>11.9인치 버추얼 콕핏</span>과{" "}
            <span style={S.highlight}>12.8인치 MMI 터치스크린</span>이 통합됐다. 현행 A3의 12.3인치 디지털 클러스터 + 10.1인치 인포테인먼트 조합에서 크게 커진 것이며, 두 화면이 별개의 유닛이 아닌 하나의 연속된 곡면으로 이어지는 방식이다.
          </p>

          <p style={S.p}>
            이 디지털 스테이지 아키텍처는 A5, A6, Q5, Q7에서 먼저 선보인 것인데, 이제 아우디의 엔트리 모델에까지 적용됐다. 최근 신형 A6에 앉아본 적이 있다면, 업데이트된 A3 실내는 익숙하게 느껴질 것이다 — 그리고 그건 분명히 칭찬이 맞다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>스크린 업그레이드 한눈에 보기</div>
            <p style={S.calloutText}>
              현행 A3: 12.3&quot; 디지털 클러스터 + 10.1&quot; MMI 터치스크린<br /><br />
              2027 A3: <strong>11.9&quot; 버추얼 콕핏 + 12.8&quot; MMI</strong> — 단일 곡면 유리 통합
            </p>
          </div>

          <h2 style={S.h2}>버튼은 줄었다 — 하지만 전부는 아니다</h2>

          {/* Image 3 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/a9714015-d81f-5f4b-800f-a4168f650000"
              alt="2027 아우디 A3 실내 컨트롤"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Audi Media</p>
          </div>

          <p style={S.p}>
            에어컨 조작 버튼이 센터콘솔에서 사라지고 MMI 터치스크린 하단 스트립으로 통합됐다. 센터 에어벤트도 아래쪽으로 위치가 바뀌었다. 반응이 엇갈릴 수 있는 변화지만, 아우디는 드라이브 모드 선택, 비상등 등 자주 쓰는 물리 버튼을 센터 스택에 남겨뒀다. 경쟁사들이 올인 터치로 갔다가 역풍을 맞은 것을 학습한 듯 보인다. 대시보드 장식 인레이(Decorative Inlay)는 더 넓어졌으며, 탄소섬유와 디나미카 마이크로파이버 트림이 선택지에 추가됐다.
          </p>

          <h2 style={S.h2}>파워트레인은 그대로 — S3에 시각적 차별화 추가</h2>

          {/* Image 4 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/7caa7427-b88e-5625-bedd-d03481150000"
              alt="2027 아우디 S3 외관 디자인"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Audi Media</p>
          </div>

          <p style={S.p}>
            파워트레인은 전 모델 변화 없다. A3는 <span style={S.highlight}>201hp 터보 4기통</span>, S3는{" "}
            <span style={S.highlight}>328hp</span>, 그리고 RS3는 팬들이 절대 포기 못하는{" "}
            <span style={S.highlight}>394hp 5기통 터보</span>를 그대로 유지한다. S3에는 고유한 주간주행등(DRL) 시그니처가 추가돼 일반 A3와 외관상 구분이 명확해졌다. 오랫동안 필요했던 변화다.
          </p>

          <h2 style={S.h2}>운전자 보조 시스템, 한 단계 더</h2>

          {/* Image 5 */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/6bf32766-9dd7-5817-b4af-5a244f750000"
              alt="2027 아우디 A3 첨단 운전자 보조 기술"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Audi Media</p>
          </div>

          <p style={S.p}>
            첨단 운전자 보조 시스템(ADAS)도 강화됐다. 신호등을 인식하고 자동으로 정지·출발하는 기능이 추가됐고, 고속도로에서 방향지시등을 작동시키면 차선을 자동으로 변경하는 기능도 탑재됐다. 가장 눈에 띄는 건{" "}
            <span style={S.highlight}>트레인드 파킹(Trained Parking)</span>이다. 최대 5개의 주차 동작을 기억했다가 이후 자동으로 반복 실행하는 기능으로, 매일 같은 좁은 공간에 주차하는 운전자에게 실용적인 이야기다.
          </p>

          <p style={S.p}>
            <span style={S.highlight}>MyAudi 앱</span>을 통해 주차 브레이크, 라이트, 도어, 창문 상태를 스마트폰으로 원격 확인할 수 있는 기능도 추가됐다. 장거리 출발 전에 "문 잠갔나?" 확인이 이제 앱 하나로 가능한 셈이다.
          </p>

          <h2 style={S.h2}>유럽 가격과 호주에서의 기대</h2>

          <p style={S.p}>
            유럽 기준으로 A3 스포트백은{" "}
            <span style={S.highlight}>€31,850</span>부터, S3는{" "}
            <span style={S.highlight}>€57,200</span>부터, RS3는{" "}
            <span style={S.highlight}>€68,500</span>부터 시작한다. 호주 가격은 현지 출시에 가까워지면 발표될 예정이다. 현재 A3의 판매 흐름을 보면, 호주 출시가 늦어질 이유는 없어 보인다.
          </p>

          <p style={S.p}>
            이미 잘 팔리고 있던 모델이 실내를 한 단계 끌어올렸다. 엔트리 아우디를 경험한다는 것이, 이번 업데이트 이후로는 이전과 다른 의미를 갖게 될 것이다.
          </p>

          <hr style={S.divider} />

          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>출처</span>
            <a
              href="https://www.drive.com.au/news/2027-audi-a3-s3-and-rs3-updated-with-interior-redesign-fewer-buttons/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              drive.com.au ↗
            </a>
          </div>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>신형 출시 전 현행 A3 데모카 확인하기</div>
            <p style={S.ctaDesc}>업데이트 모델이 들어오면 현행 세대 데모카는 빠르게 소진됩니다</p>
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
                slug: "audi-a3-s3-rs3-2027-update",
                title: "2027 Audi A3, S3 and RS3 Updated — Bigger Screens, Fewer Buttons, and a Redesigned Interior",
                category: "NEWS",
                date: "June 26, 2026",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/dd218bf3-401e-53e2-a2c4-ed4470650000",
              },
              {
                slug: "hyundai-i30-sedan-2027-australia-ko",
                title: "2027 현대 i30 세단 공개 — 더 커지고, 하이브리드 중심으로, 내년 호주 상륙",
                category: "뉴스",
                date: "2026년 6월 26일",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/e67acf95-dd06-5ea8-a53b-d688c8c50000",
              },
              {
                slug: "skoda-peaq-2027-australia-ko",
                title: "스코다 피크 공개 — 640km 항속, 7인승 전기 SUV 호주 상륙 예고",
                category: "뉴스",
                date: "2026년 6월 25일",
                image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c4d60c30-2aac-5ab1-a8e5-57f962a50000",
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
                slug: "why-buy-demo-car-australia-ko",
                title: "호주에서 데모카를 사야 하는 이유 — 신차보다 현명한 선택",
                excerpt: "신차와 거의 같은 퀄리티에 가격은 10~30% 낮다. 데모카가 세금 구조상으로도 유리한 이유.",
                category: "구매 가이드",
                readTime: "7분",
                date: "2026년 6월 24일",
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
