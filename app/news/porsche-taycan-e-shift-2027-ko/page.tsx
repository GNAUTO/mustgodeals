import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "포르쉐 타이칸, 가상 변속기를 달다 — 전기차가 기어를 흉내 내는 이유 | MustGoDeals",
  description:
    "2027년형 타이칸의 E-Shift 시스템은 패들 시프터와 가상 레브 리미터를 갖춘 8단 DCT를 시뮬레이션한다. 작동 원리와 MY27의 주요 변경사항을 정리했다.",
  keywords: [
    "포르쉐 타이칸 2027",
    "타이칸 E-Shift",
    "포르쉐 이시프트 시스템",
    "전기차 가상 변속기",
    "포르쉐 타이칸 터보 GT",
    "타이칸 호주 출시",
    "뉘르부르크링 랩타임",
  ],
  openGraph: {
    title: "포르쉐 타이칸, 가상 변속기를 달다 — 전기차가 기어를 흉내 내는 이유",
    description:
      "E-Shift는 타이칸에 8개의 가상 기어와 패들 시프터, 레브 리미터를 얹는다. 작동 원리와 MY27 전체 변경사항을 정리했다.",
    type: "article",
    locale: "ko_KR",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/news/porsche-taycan-e-shift-2027-ko" },
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

const RELATED_NEWS = [
  {
    slug: "porsche-taycan-e-shift-2027",
    title: "Porsche Taycan gets simulated gear shifts — and it's more interesting than it sounds",
    category: "NEWS",
    date: "June 18, 2026",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/s26_0407.jpg",
  },
  {
    slug: "maserati-grecale-2027-australia-ko",
    title: "마세라티, 2027 그레칼레 SUV 라인업 호주 시장에 확대 출시",
    category: "뉴스",
    date: "2026년 6월 21일",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg",
  },
  {
    slug: "maserati-grecale-2027-australia",
    title: "Maserati expands Grecale SUV lineup for 2027 Australian market",
    category: "NEWS",
    date: "June 21, 2026",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg",
  },
];

const LATEST_ARTICLES = [
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
];

export default function Page() {
  return (
    <div style={S.page}>
      <Navbar />
      <BlogLangTabs
        current="KO"
        links={{
          EN: "/news/porsche-taycan-e-shift-2027",
          KO: "/news/porsche-taycan-e-shift-2027-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>포르쉐 타이칸 E-Shift</span>
          </div>
          <div style={S.badge}>
            <span>뉴스</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 18일</span>
          </div>
          <h1 style={S.h1}>
            포르쉐 타이칸, 가상 변속기를 달다 —{" "}
            <span style={{ color: "#CCDA47" }}>전기차가 기어를 흉내 내는 이유</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>MustGoDeals 편집팀</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>전기차 · 기술</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          {/* Main image */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/s26_0407.jpg"
              alt="2027 포르쉐 타이칸 E-Shift"
              style={{ width: "100%", height: "420px", objectFit: "cover", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Porsche Media</p>
          </div>

          <p style={S.p}>
            전기차에는 기어가 없다. 클러치도, 변속기도, 산길을 달리며 더듬어 찾을 기어비도 없다.
            가속 페달을 밟는 순간부터 최고 속도까지, 하나의 연속된 토크 곡선만이 존재할 뿐이다.
            깔끔하고, 단순하고, 효율적이다.
          </p>

          <p style={S.p}>
            그리고 어떤 운전자들에게는 조금 밋밋하기도 하다.
          </p>

          <p style={S.p}>
            포르쉐도 이 사실을 잘 안다. 그래서 2027년형 타이칸에 &lsquo;E-Shift&rsquo;를 얹었다.
            전기 세단에 8단 가상 DCT 변속기를 구현하는 시스템이다. 패들 시프터와 가상 레브 카운터까지
            갖추고서.
          </p>

          <h2 style={S.h2}>E-Shift는 실제로 무엇을 하는가</h2>

          <p style={S.p}>
            E-Shift는 타이칸의 전기 모터 제어 시스템을 활용해 출력을 8개의 가상 기어 구간으로
            분배한다. 각 &lsquo;기어&rsquo;마다 고유한 회전 범위, 엔진 브레이킹 특성, 그리고
            스티어링 컬럼을 통한 변속 감각이 구현된다. 오른쪽 패들을 당기면 차가
            &lsquo;업시프트&rsquo;한다. 가상 타코미터 바늘이 뚝 떨어지고, 모터 토크 곡선은 새로운
            기울기를 따라간다. 단순히 가속 페달을 밟는 것과는 전혀 다른 질감이다.
          </p>

          <p style={S.p}>
            가상 레드라인에 가까워지면 계기판에 시프트 라이트가 점등된다. 그 상태를 방치하면 가상
            레브 리미터가 개입한다. 덕분에 전기차에서 타코미터를 신경 써야 할 이유가 생긴 셈이다.
            &ldquo;왜 이런 게 필요한가&rdquo;라는 질문이 나오기도 전에 답이 주어지는 영리한 설계다.
          </p>

          <p style={S.p}>
            트림마다 변속을 수반하는 사운드 성격도 다르다. 터보 S는 다음 기어를 찾아가는 순혈 스포츠카의
            음색을 내고, 기본 타이칸은 보다 절제된 톤을 유지한다. 포르쉐는 단순히 메커니즘을 복제하는
            데 그치지 않고, 각 모델의 성격을 사운드에까지 녹여낸 것이다.
          </p>

          {/* Image 2 — after E-Shift explanation */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/s26_0406.jpg"
              alt="포르쉐 타이칸 E-Shift 패들 시프터"
              style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Porsche Media</p>
          </div>

          <h2 style={S.h2}>현대와의 묘한 인연</h2>

          <p style={S.p}>
            어딘가 익숙한 이야기처럼 들린다면, 그 직감이 맞다. 현대자동차는 이미 아이오닉 5 N과
            아이오닉 6 N에 N e-Shift 시스템을 먼저 탑재했다. 수동 변속 감각을 시뮬레이션해 단조로운
            전력 전달에 상호작용과 드라마를 더하는 방식이다. 포르쉐 엔지니어들은 언론 브리핑 자리에서
            현대의 시스템을 &ldquo;진정으로 흥미로운 해법&rdquo;이라며 공개적으로 칭찬했다.
          </p>

          <p style={S.p}>
            그리고 몇 주 뒤, E-Shift를 발표했다. 해석은 각자에게 맡기겠다.
          </p>

          <p style={S.p}>
            경쟁이든 영감이든, 이 흐름이 확인해 주는 것은 산업 전반의 공통된 인식이다. 운전의 재미는
            단순히 빠른 것이 아니라 &lsquo;상호작용&rsquo;에 있다. 비록 시뮬레이션이라도, 변속이라는
            행위 자체가 드라이버와 기계를 이어주는 연결 고리가 된다는 이야기다.
          </p>

          <h2 style={S.h2}>어떻게 선택하나, 그리고 누가 기본으로 받나</h2>

          <p style={S.p}>
            타이칸 세단, 크로스 투리스모, 스포츠 투리스모에서 E-Shift는 옵션 패키지로 구성해야 한다.
            패들 시프터가 달린 플랫-바텀 알칸타라 휠인{" "}
            <span style={S.highlight}>GT 스포츠 스티어링 휠</span>과 함께 묶여있다. 추가 비용이
            들지만, 스포티한 타이칸을 구성하는 구매자라면 어차피 고려하게 될 옵션이다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>터보 GT: E-SHIFT 기본 탑재</div>
            <p style={S.calloutText}>
              타이칸 터보 GT에는 E-Shift가 기본 사양으로 탑재된다. 만타이 퍼포먼스 키트를 장착한 터보 GT는
              최근 뉘르부르크링 노르트슐라이페를{" "}
              <strong style={{ color: "#CCDA47" }}>6분 55초 553</strong>에 완주해, 역대 가장 빠른
              양산차 중 하나로 기록됐다.
            </p>
          </div>

          <h2 style={S.h2}>MY27의 다른 변화들</h2>

          <p style={S.p}>
            가상 변속기가 가장 큰 주목을 받지만, 2027년형 타이칸에는 주목할 만한 업데이트가 더 있다.
          </p>

          <p style={S.p}>
            기존에는 상위 트림에만 적용됐던{" "}
            <span style={S.highlight}>105kWh 퍼포먼스 배터리 플러스</span>가 전 트림 기본 사양으로
            내려온다. 엔트리 트림 구매자도 추가 비용 없이 더 큰 배터리를 받게 되는 것으로, 이 세그먼트에서
            실질적인 개선이다.
          </p>

          {/* Image 3 — after battery/infotainment */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/s26_0400.jpg"
              alt="2027 포르쉐 타이칸 실내 인포테인먼트"
              style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Porsche Media</p>
          </div>

          <p style={S.p}>
            실내에는 포르쉐 신형 디지털 인터랙션 인포테인먼트 시스템이 탑재된다. 기존 모델에서 지적됐던
            응답 지연 문제를 해소할 새로운 하드웨어가 기반이며, AI 음성 어시스턴트와 OTA(무선) 업데이트
            기능이 더해진다. 무선 충전은 <span style={S.highlight}>15W</span>로 향상됐다. 더 저렴한
            차들도 이미 오래전부터 제공해온 기능이지만, 뒤늦게나마 타이칸에도 제대로 탑재됐다는 점은
            반갑다.
          </p>

          <hr style={S.divider} />

          {/* Image 4 — before conclusion */}
          <div style={S.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://editorial.pxcrush.net/carsales/general/editorial/s26_0408.jpg"
              alt="2027 포르쉐 타이칸 외관"
              style={{ width: "100%", height: "360px", objectFit: "cover", display: "block" }}
            />
            <p style={S.imgCaption}>이미지: Porsche Media</p>
          </div>

          <h2 style={S.h2}>호주 출시 일정과 가격</h2>

          <p style={S.p}>
            포르쉐 호주 법인은 아직 MY27 타이칸의 현지 출시 일정을 공식 발표하지 않았다. 포르쉐의
            최근 모델 연도 출시 패턴을 감안하면 2026년 말이나 2027년 초 인도가 예상된다. 현행
            기본 타이칸이 약 <span style={S.highlight}>183,000달러(드라이브어웨이)</span>에서
            시작하는 만큼, 신형에서는 가격이 소폭 인상될 가능성이 높다.
          </p>

          <p style={S.p}>
            호주 구매자들이 E-Shift를 어느 정도로 선택할지가 흥미로운 관전 포인트다. 지금까지 타이칸을
            구성해온 호주 구매자들의 성향을 보면 퍼포먼스 옵션을 아끼는 경우가 드물었다. 가상 변속기는
            처음에는 신기한 기능처럼 보일 수 있지만, 실제로 달려보면 가장 오래 기억에 남는 기능이 될
            가능성이 크다.
          </p>

          {/* Source */}
          <div style={S.sourceBox}>
            <span style={S.sourceLabel}>출처</span>
            <a
              href="https://www.carsales.com.au/editorial/details/porsche-taycan-gets-simulated-gear-shifts-152274/"
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
            <p style={S.ctaDesc}>최신 자동차 딜과 신차 소식을 매주 이메일로 받아보세요</p>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {RELATED_NEWS.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="news-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "#F5F5F0", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "130px", objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "0.875rem" }}>
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
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
            {LATEST_ARTICLES.map((item) => (
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
