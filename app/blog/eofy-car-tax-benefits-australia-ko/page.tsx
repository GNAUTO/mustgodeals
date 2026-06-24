import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "회계연도 마감 전에 차를 사면 세금 혜택이 있을까? — ABN 사업자를 위한 가이드 | MustGoDeals",
  description:
    "ABN을 보유한 호주 사업자라면 EOFY 전 차량 구매 시 세금 혜택을 받을 수 있다. 단, 조건과 한도를 정확히 이해해야 한다.",
  keywords: [
    "호주 EOFY 차량 세금 혜택",
    "ABN 자동차 세금 공제 호주",
    "즉시 자산 공제 자동차 호주",
    "호주 차량 감가상각 사업자",
    "EOFY 자동차 구매 호주 2026",
    "Car Limit 호주 2026",
  ],
  openGraph: {
    title: "회계연도 마감 전에 차를 사면 세금 혜택이 있을까? — ABN 사업자를 위한 가이드",
    description:
      "Instant Asset Write-Off, Car Limit, 업무용 비율 — EOFY 전 차량 구매 시 실제로 적용되는 세금 규정을 정리했다.",
    type: "article",
    locale: "ko_KR",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/blog/eofy-car-tax-benefits-australia-ko" },
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
  disclaimer: {
    background: "rgba(0,0,0,0.04)", border: "0.5px solid rgba(0,0,0,0.1)",
    borderRadius: "8px", padding: "1rem 1.25rem", margin: "2rem 0",
  } as React.CSSProperties,
  disclaimerText: { fontSize: "13px", color: "#888", lineHeight: 1.65, margin: 0 } as React.CSSProperties,
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
          EN: "/blog/eofy-car-tax-benefits-australia",
          KO: "/blog/eofy-car-tax-benefits-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>EOFY 자동차 세금 혜택</span>
          </div>
          <div style={S.badge}>
            <span>구매 가이드</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월 24일</span>
          </div>
          <h1 style={S.h1}>
            회계연도 마감 전에 차를 사면 세금 혜택이 있을까? —{" "}
            <span style={{ color: "#CCDA47" }}>ABN 사업자를 위한 가이드</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>7분</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>세금 · EOFY · ABN · 구매 가이드</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            6월이 되면 호주 곳곳에서 &ldquo;EOFY 세일&rdquo;이라는 문구가 넘쳐난다. 자동차
            딜러십도 예외가 아니다. ABN을 보유한 사업자라면 이 시기에 차량을 구매하는 것이 세금
            측면에서 유리하다는 이야기를 한 번쯤 들어봤을 것이다. 실제로 그럴까? 그렇다면 얼마나,
            어떤 조건에서 유리할까?
          </p>

          <h2 style={S.h2}>먼저 알아야 할 것 — Instant Asset Write-Off</h2>

          <p style={S.p}>
            2025-26 회계연도 기준, 연간 매출{" "}
            <span style={S.highlight}>1,000만 달러 미만</span>의 소규모 사업자는{" "}
            <span style={S.highlight}>$20,000 미만</span>의 사업용 자산을 즉시 전액 공제받을 수
            있다. 단, 해당 자산이 2026년 6월 30일 이전에 실제로 사용되거나 사용 준비 완료 상태여야
            한다.
          </p>

          <p style={S.p}>
            쉽게 말하면 — $20,000 미만의 사업용 자산을 구입하면 그 비용 전액을 올해 세금 신고에서
            바로 공제할 수 있다는 뜻이다.
          </p>

          <h2 style={S.h2}>그렇다면 자동차는?</h2>

          <p style={S.p}>
            여기서 중요한 현실이 있다. 대부분의 승용차는 $20,000을 훨씬 초과하기 때문에 Instant
            Asset Write-Off 대상이 되지 않는다. 이 경우 차량은 소규모 사업자 감가상각 풀에 포함되어
            첫 해 <span style={S.highlight}>15%</span>, 이후 매년{" "}
            <span style={S.highlight}>30%</span>씩 공제된다.
          </p>

          <p style={S.p}>
            즉, 새 차를 사면 그 비용을 한 번에 공제받는 것이 아니라 여러 해에 걸쳐 나눠서
            공제받게 된다.
          </p>

          <h2 style={S.h2}>Car Limit — 공제 가능한 최대 금액</h2>

          <p style={S.p}>
            2025-26 회계연도 기준 차량 공제 한도(Car Limit)는{" "}
            <span style={S.highlight}>$69,674</span>다. 차량 가격이 이를 초과하더라도 세금
            계산에 사용할 수 있는 최대 금액은 $69,674로 제한된다. GST 크레딧도 이 한도의
            11분의 1인 <span style={S.highlight}>$6,334</span>가 최대다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>계산 예시</div>
            <p style={S.calloutText}>
              $90,000짜리 차를 구입했고 업무용 사용 비율이 80%라면,<br />
              공제 가능한 최대 금액은 $69,674의 80%인 <strong>$55,739</strong>가 된다.
            </p>
          </div>

          <h2 style={S.h2}>업무용 비율이 핵심이다</h2>

          <p style={S.p}>
            차량을 사업 목적과 개인 목적 모두에 사용한다면, 사업용 사용 비율만큼만 공제받을 수
            있다. 예를 들어 로그북 기록 결과{" "}
            <span style={S.highlight}>65% 업무 사용</span>으로 확인된다면, 공제 역시 그 65%를
            기준으로 계산된다.
          </p>

          <p style={S.p}>
            ATO는 로그북 없이 주장하는 공제 비율을 인정하지 않는다. 차량을 구입했다면 반드시
            로그북을 작성해두어야 한다.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>6월 30일 전에 차를 사면 실제로 뭐가 좋을까?</h2>

          <p style={S.p}>
            세금 혜택보다는 타이밍 자체가 유리하다. 딜러십의 EOFY 재고 정리 압박이 가장 높은
            시기라 협상 여지가 크고, 데모카와 재고 차량이 대거 시장에 나온다. 세금 공제는 어차피
            해가 지나도 감가상각을 통해 받게 되어 있다. 차이는 올해 세금 신고에서 일부를 미리
            당겨서 받느냐, 나중에 나눠서 받느냐의 문제다.
          </p>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>ABN 사업자 핵심 요약</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>즉시 공제는 $20,000 미만 자산에만 적용 — 대부분의 차량은 해당 없음</li>
              <li style={S.tipItem}>$20,000 초과 차량은 감가상각 풀 적용: 1년차 15%, 이후 30%</li>
              <li style={S.tipItem}>감가상각은 Car Limit인 $69,674까지만 계산</li>
              <li style={S.tipItem}>업무용 비율만 공제 가능 — 로그북 필수</li>
              <li style={S.tipItem}>진짜 EOFY 이점은 세금보다 협상력 — 재고 처분 압박이 가장 높은 시기</li>
            </ul>
          </div>

          <h2 style={S.h2}>반드시 알아야 할 것</h2>

          <p style={S.p}>
            자산이 6월 30일 이전에 실제로 사용 가능한 상태여야 한다. 단순히 계약서에 서명하거나
            대금을 지불하는 것만으로는 부족하다. 차량이 실제로{" "}
            <span style={S.highlight}>인도되어 사업에 사용될 준비가 완료</span>되어야 한다.
          </p>

          <div style={S.disclaimer}>
            <p style={S.disclaimerText}>
              이 글은 일반적인 정보 제공 목적으로 작성되었다. 개인 상황에 따라 세금 혜택은 크게
              달라질 수 있으므로, 구체적인 판단은 반드시 공인 회계사 또는 세무사와 상담하기를
              권한다.
            </p>
          </div>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>EOFY 클리어런스 딜 알림 받기</div>
            <p style={S.ctaDesc}>데모카·재고 차량 정보를 매주 가장 먼저 받아보세요</p>
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
                slug: "eofy-car-tax-benefits-australia",
                title: "Should You Buy a Car Before EOFY? A Guide for Australian ABN Holders",
                excerpt: "The instant asset write-off, the car limit, business-use percentage — what actually applies to your car purchase before 30 June.",
                category: "Buying Guide",
                readTime: "7 min read",
                date: "June 24, 2026",
                lang: "EN",
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
