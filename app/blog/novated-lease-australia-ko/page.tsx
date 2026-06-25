import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "노베이티드 리스, 진짜 이득일까? 호주 직장인이라면 알아야 할 모든 것 | MustGoDeals",
  description:
    "노베이티드 리스는 세전 급여로 차를 운용하는 구조다. FBT, 전기차 면제, 실제 절세 금액까지 — 호주 직장인을 위한 완전 가이드.",
  keywords: [
    "노베이티드 리스 호주",
    "novated lease 호주",
    "호주 직장인 차량 세금 혜택",
    "호주 세전 자동차",
    "FBT 노베이티드 리스",
    "호주 전기차 노베이티드 리스",
    "호주 자동차 절세",
  ],
  openGraph: {
    title: "노베이티드 리스, 진짜 이득일까? 호주 직장인이라면 알아야 할 모든 것",
    description:
      "세전 급여 공제, FBT, 전기차 면제 혜택까지 — 노베이티드 리스가 내 상황에 맞는지 판단하는 가이드.",
    type: "article",
    locale: "ko_KR",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/blog/novated-lease-australia-ko" },
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
    color: "white", fontSize: "38px", fontWeight: 500,
    lineHeight: 1.25, marginBottom: "1rem", letterSpacing: "-0.5px",
  } as React.CSSProperties,
  hereMeta: {
    display: "flex", gap: "1.25rem", alignItems: "center",
    flexWrap: "wrap" as const, marginTop: "1rem",
  } as React.CSSProperties,
  metaItem:   { fontSize: "12px", color: "rgba(255,255,255,0.4)" } as React.CSSProperties,
  article:    { maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" } as React.CSSProperties,
  body:       { fontSize: "16px", lineHeight: 1.8, color: "#2A2A2A" } as React.CSSProperties,
  h2: {
    fontSize: "24px", fontWeight: 600, color: "#1A1A1A",
    marginTop: "2.5rem", marginBottom: "1rem", letterSpacing: "-0.3px",
  } as React.CSSProperties,
  p:          { marginBottom: "1.25rem", color: "#333", lineHeight: 1.8 } as React.CSSProperties,
  callout: {
    background: "#1A1A1A", border: "1px solid rgba(204,218,71,0.3)",
    borderLeft: "4px solid #CCDA47", borderRadius: "8px",
    padding: "1.25rem 1.5rem", margin: "1.75rem 0",
  } as React.CSSProperties,
  calloutTitle: {
    color: "#CCDA47", fontSize: "12px", fontWeight: 600,
    letterSpacing: "1px", marginBottom: "0.5rem",
  } as React.CSSProperties,
  calloutText: { color: "rgba(255,255,255,0.85)", fontSize: "15px", lineHeight: 1.7, margin: 0 } as React.CSSProperties,
  tipBox: {
    background: "white", border: "0.5px solid rgba(0,0,0,0.1)",
    borderRadius: "10px", padding: "1.25rem 1.5rem", margin: "1.5rem 0",
  } as React.CSSProperties,
  tipTitle: {
    fontSize: "13px", fontWeight: 600, color: "#8A9A10",
    marginBottom: "0.75rem", letterSpacing: "0.3px",
  } as React.CSSProperties,
  tipList: { paddingLeft: "1.25rem", margin: 0 } as React.CSSProperties,
  tipItem: { color: "#333", fontSize: "15px", lineHeight: 1.75, marginBottom: "0.4rem" } as React.CSSProperties,
  highlight: {
    background: "rgba(204,218,71,0.2)", color: "#1A1A1A",
    fontWeight: 600, padding: "1px 5px", borderRadius: "3px",
  } as React.CSSProperties,
  divider:    { border: "none", borderTop: "1px solid rgba(0,0,0,0.08)", margin: "2.5rem 0" } as React.CSSProperties,
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
          EN: "/blog/novated-lease-australia",
          KO: "/blog/novated-lease-australia-ko",
        }}
      />

      {/* Hero */}
      <div style={S.hero}>
        <div style={S.heroInner}>
          <div style={S.breadcrumb}>
            <Link href="/" style={S.breadcrumbLink}>홈</Link>
            <span>›</span>
            <Link href="/blog" style={S.breadcrumbLink}>블로그</Link>
            <span>›</span>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>노베이티드 리스 가이드</span>
          </div>
          <div style={S.badge}>
            <span>구매 가이드</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 25일</span>
          </div>
          <h1 style={S.h1}>
            노베이티드 리스, 진짜 이득일까? —{" "}
            <span style={{ color: "#CCDA47" }}>호주 직장인이라면 알아야 할 모든 것</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>8분</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>금융 · 세금 · 노베이티드 리스 · 구매 가이드</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            차를 사려고 마음먹었을 때, 주변 직장인들 사이에서 한 번쯤 이런 말이 들려온다.
            &ldquo;노베이티드 리스로 하면 세금 아낀다던데.&rdquo; 그런데 막상 알아보려고 하면
            용어부터 낯설고, 어디서부터 시작해야 할지 막막한 것이 현실이다. 이 글에서는
            노베이티드 리스가 무엇인지, 실제로 얼마나 이득인지, 어떤 사람에게 맞는 선택인지를
            정리했다.
          </p>

          <h2 style={S.h2}>노베이티드 리스란</h2>

          <p style={S.p}>
            노베이티드 리스(Novated Lease)는 회사가 중간에 끼는 차량 리스 계약이다. 본인이 차를
            고르고, 차량 비용과 유지비를{" "}
            <span style={S.highlight}>급여에서 세전으로 공제</span>받는 구조 — 세금 떼기 전
            돈으로 차를 굴리는 셈이다.
          </p>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>세 주체가 움직인다</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}><strong>직원</strong> — 차를 고르고 HR에 신청</li>
              <li style={S.tipItem}><strong>고용주</strong> — 리스 비용을 대신 납부한 뒤 급여에서 공제</li>
              <li style={S.tipItem}><strong>리스 회사</strong> — 차량 구매와 유지비 관리를 대행</li>
            </ul>
          </div>

          <p style={S.p}>
            본인이 실제로 해야 할 일은 차 고르기, HR 신청, 급여명세서 확인 — 그게 전부다.
            핵심은 세전 공제다. 이미 세금을 낸 돈으로 차를 사는 대신, 세금 내기 전 돈으로
            차를 굴리니 정부가 차 비용 일부를 보조해주는 구조인 셈이다.
          </p>

          <h2 style={S.h2}>세금이 줄어드는 원리</h2>

          <p style={S.p}>
            호주 소득세는 누진세 구조다. 연봉{" "}
            <span style={S.highlight}>$90,000</span> 기준 한계세율은 34.5% (Medicare Levy 포함).
            노베이티드 리스로 연간 $15,000을 세전 공제하면 과세 소득이 $75,000으로 줄고, 약{" "}
            <span style={S.highlight}>$5,175의 세금</span>을 아끼는 이야기다.
          </p>

          <p style={S.p}>
            차값뿐 아니라 기름값, 보험료, 등록비, 타이어비까지 세전 처리가 되니 유지비 전체를
            할인된 가격에 쓰는 구조이기도 하다. 연봉 $85,000 직장인이 $45,000짜리 차를 5년간
            운용할 경우, 일반 구매 대비 절감액은 약{" "}
            <span style={S.highlight}>$15,000~$18,000</span> 수준이다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>절세 계산 예시</div>
            <p style={S.calloutText}>
              연봉 $90,000 · 한계세율 34.5%<br />
              연간 리스 패키지: $15,000 세전 공제<br />
              연간 절세액: 약 <strong>$5,175</strong><br />
              $45,000 차 5년 운용 시 총 절감: 약 <strong>$15,000~$18,000</strong>
            </p>
          </div>

          <h2 style={S.h2}>FBT — 반드시 알아야 할 변수</h2>

          <p style={S.p}>
            노베이티드 리스의 함정은{" "}
            <span style={S.highlight}>FBT(Fringe Benefits Tax)</span>다. 회사가 직원에게 차량
            혜택을 제공하면 부과되는 세금인데, 이걸 어떻게 처리하느냐에 따라 절세 효과가
            달라진다.
          </p>

          <p style={S.p}>
            <strong>주행거리가 많을수록 FBT 부담이 줄어든다.</strong> ATO의 법정 산식은 연간
            주행거리가 늘어날수록 과세 대상 금액을 낮춰준다. 많이 달릴수록 유리하다.
          </p>

          <p style={S.p}>
            <strong>ECM(Employee Contribution Method).</strong> 세후 급여 일부를 직접 납부해
            FBT 과세 대상 금액 자체를 낮추는 방법이다. 대부분의 리스 회사는 견적 단계에서
            이 부분을 함께 설계해준다 — 반드시 확인해야 한다.
          </p>

          <p style={S.p}>
            FBT 구조를 제대로 반영하지 않은 노베이티드 리스는 서류상으로는 멋있어 보이지만
            실제로는 기대에 못 미칠 수 있다.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>EV라면 지금이 타이밍</h2>

          <p style={S.p}>
            2022년부터 일정 가격 이하의 전기차와 플러그인 하이브리드는{" "}
            <span style={S.highlight}>FBT 면제</span> 대상이다. 세전 공제에 FBT 부담까지
            없어지니, EV를 고려 중인 직장인에게는 현재 시점에서 노베이티드 리스가 가장 강력한
            구매 수단 중 하나인 셈이다.
          </p>

          <p style={S.p}>
            다만 정책 조건은 변경될 수 있으니, 계약 전 최신 적용 요건을 반드시 확인해야 한다.
          </p>

          <h2 style={S.h2}>맞는 사람, 맞지 않는 사람</h2>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>유리한 경우</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>연봉 $70,000 이상 — 세율이 높을수록 절세 효과 커짐</li>
              <li style={S.tipItem}>주행거리가 많은 직장인</li>
              <li style={S.tipItem}>EV 또는 PHEV 구입을 고려 중인 경우</li>
            </ul>
          </div>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>주의가 필요한 경우</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>계약 기간 중 이직 가능성이 높은 경우 (이전 가능하지만 절차가 복잡)</li>
              <li style={S.tipItem}>자영업자 또는 프리랜서 — 고용주가 없으면 구조 자체가 성립하지 않는다</li>
              <li style={S.tipItem}>연간 주행거리가 적은 경우 — FBT 부담이 혜택을 상쇄할 수 있다</li>
            </ul>
          </div>

          <h2 style={S.h2}>결론</h2>

          <p style={S.p}>
            연봉이 일정 수준 이상이고 차를 꾸준히 운용할 계획이라면, 노베이티드 리스는 분명히
            검토할 가치가 있다. 다만 &lsquo;세금 아낀다&rsquo;는 말만 듣고 덜컥 계약부터 하는
            건 금물. FBT 구조를 이해하고, 본인의 주행 패턴과 소득 구간에 맞는지 먼저 따져보는
            것이 시작이다.
          </p>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>지금 나온 클리어런스 딜 확인하기</div>
            <p style={S.ctaDesc}>딜러가 처분해야 하는 재고 차량 — 매주 업데이트</p>
            <Link href="/coming-soon" style={S.ctaBtn}>무료 알림 신청 →</Link>
          </div>

        </div>
      </article>

      {/* Related Articles */}
      <div style={{ background: "white", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>관련 아티클</div>
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>전체 아티클 →</Link>
          </div>
          <div className="section-grid">
            {[
              {
                slug: "novated-lease-australia",
                title: "What Is a Novated Lease — And Is It Worth It in Australia?",
                excerpt: "Pre-tax salary deduction, FBT, EV exemptions — the complete guide to novated leasing for Australian employees.",
                category: "Buying Guide",
                readTime: "8 min read",
                date: "June 25, 2026",
                lang: "EN",
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
                slug: "car-stamp-duty-australia-explained-ko",
                title: "호주에서 차 살 때 스탬프 듀티란? — 아무도 알려주지 않는 숨겨진 비용",
                excerpt: "주마다 세율이 다르다. 같은 차라도 어느 주에서 사느냐에 따라 수백에서 수천 달러 차이가 날 수 있다.",
                category: "구매 가이드",
                readTime: "6분",
                date: "2026년 6월 24일",
                lang: "KO",
              },
            ].map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="news-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "#F5F5F0", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", padding: "1.25rem", height: "100%" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" }}>{item.category}</span>
                    <span style={{ fontSize: "10px", color: "#999", background: "white", padding: "2px 8px", borderRadius: "10px" }}>{item.lang}</span>
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

      {/* Latest News */}
      <div style={{ background: "#ECEEE7", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>최신 뉴스</div>
            <Link href="/news" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>전체 뉴스 →</Link>
          </div>
          <div className="section-grid">
            {[
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
              {
                slug: "hyundai-i20-n-hybrid-nextgen-ko",
                title: "차세대 현대 i20 N 확정 — 하이브리드 탑재로 i30 N을 넘어설 수도",
                category: "뉴스",
                date: "2026년 6월 23일",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/i20-n-render.jpg",
              },
            ].map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="news-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "white", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
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

      <Footer />
    </div>
  );
}
