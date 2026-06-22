import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import BlogLangTabs from "../../components/BlogLangTabs";
import Footer from "../../components/Footer";

export const metadata: Metadata = {
  title: "호주에서 자동차를 가장 싸게 살 수 있는 시기 | MustGoDeals",
  description:
    "회계연도 마감, 월말, 신형 출시 직전. 호주 딜러십이 움직이는 방식을 이해하면 타이밍은 운이 아니라 전략이 된다. 구매 최적 시기를 월별로 정리했다.",
  keywords: [
    "호주 자동차 구매 시기",
    "자동차 딜 타이밍 호주",
    "회계연도 자동차 할인 호주",
    "월말 자동차 협상",
    "데모카 구매 호주",
    "호주 자동차 싸게 사는법",
    "best time buy car australia korean",
  ],
  openGraph: {
    title: "호주에서 자동차를 가장 싸게 살 수 있는 시기",
    description:
      "회계연도 마감, 월말, 신형 출시 직전 — 딜러십이 움직이는 타이밍을 알면 수천 달러를 아낄 수 있다.",
    type: "article",
    locale: "ko_KR",
    siteName: "MustGoDeals",
  },
  alternates: { canonical: "/blog/best-time-to-buy-a-car-australia-ko" },
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
  table: {
    width: "100%", borderCollapse: "collapse" as const,
    margin: "1.5rem 0", fontSize: "14px",
    border: "0.5px solid rgba(0,0,0,0.1)", borderRadius: "8px", overflow: "hidden",
  } as React.CSSProperties,
  th: {
    background: "#1A1A1A", color: "#CCDA47", padding: "10px 14px",
    textAlign: "left" as const, fontWeight: 600, fontSize: "12px", letterSpacing: "0.3px",
  } as React.CSSProperties,
  td: {
    padding: "10px 14px", borderBottom: "1px solid rgba(0,0,0,0.07)",
    color: "#333", fontSize: "14px", verticalAlign: "top" as const,
  } as React.CSSProperties,
};

export default function Page() {
  return (
    <div style={S.page}>
      <Navbar />
      <BlogLangTabs
        current="KO"
        links={{
          EN: "/blog/best-time-to-buy-a-car-australia",
          KO: "/blog/best-time-to-buy-a-car-australia-ko",
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
            <span style={{ color: "rgba(255,255,255,0.55)" }}>자동차 구매 최적 시기</span>
          </div>
          <div style={S.badge}>
            <span>구매 가이드</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>2026년 6월</span>
          </div>
          <h1 style={S.h1}>
            호주에서 자동차를{" "}
            <span style={{ color: "#CCDA47" }}>가장 싸게 살 수 있는 시기</span>
          </h1>
          <div style={S.hereMeta}>
            <span style={S.metaItem}>7분 읽기</span>
            <span style={S.metaItem}>·</span>
            <span style={S.metaItem}>타이밍 · 협상 · 구매 전략</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={S.article}>
        <div style={S.body}>

          <p style={S.p}>
            자동차를 사려는 사람이라면 누구나 한 번쯤 이런 생각을 해본다.
            &lsquo;지금이 맞는 타이밍일까, 조금 더 기다려야 할까?&rsquo; 사실 이 질문에는
            꽤 명확한 답이 존재한다. 호주 딜러십이 움직이는 방식을 이해하면, 타이밍은
            운이 아니라 전략이 된다.
          </p>

          <div style={S.callout}>
            <div style={S.calloutTitle}>지금 이 글을 읽고 있다면 — 6월 말이 바로 그 타이밍이다</div>
            <p style={S.calloutText}>
              오늘은 6월 22일이다. 호주 회계연도 마감(6월 30일)까지 단 8일이 남았다.
              딜러십 입장에서 6월 30일은 단순한 월말이 아니다. 연간 판매 실적이 확정되는 날이자,
              제조사 인센티브가 결정되는 마감선이다. 이 시기 딜러의 협상 유연성은 1년 중
              가장 높은 수준에 달한다. 지금 당장 딜러십에 전화해서 재고를 확인해볼 이유가 충분하다.
            </p>
          </div>

          <h2 style={S.h2}>1년 타이밍 캘린더 — 월별로 보는 구매 적기</h2>

          <table style={S.table}>
            <thead>
              <tr>
                <th style={S.th}>시기</th>
                <th style={S.th}>상황</th>
                <th style={S.th}>구매 적기?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1월", "연초 비수기, 구매자 적음", "좋음"],
                ["2~3월", "분기말(3월), 재고 정리", "좋음"],
                ["4~5월", "평달, 특별 이벤트 없음", "보통"],
                ["6월", "회계연도 마감, 최대 할인 시즌", "★ 최고"],
                ["7~8월", "신년 재고 입고, 새 모델 준비", "보통"],
                ["9월", "분기말, 재고 정리", "좋음"],
                ["10~11월", "평달", "보통"],
                ["12월", "연말 프로모션, 재고 정리", "좋음"],
              ].map(([period, desc, rating], i) => (
                <tr key={i} style={{ background: rating.includes("최고") ? "rgba(204,218,71,0.07)" : i % 2 === 0 ? "white" : "#FAFAF8" }}>
                  <td style={{ ...S.td, fontWeight: rating.includes("최고") ? 600 : 400 }}>{period}</td>
                  <td style={S.td}>{desc}</td>
                  <td style={{ ...S.td, color: rating.includes("최고") ? "#8A9A10" : rating === "좋음" ? "#555" : "#999", fontWeight: rating.includes("최고") ? 700 : 400 }}>{rating}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={S.h2}>월말 마지막 3~5일이 핵심인 이유</h2>

          <p style={S.p}>
            딜러십의 판매 목표는 월 단위로 리셋된다. 마지막 3~5일은 목표 달성 여부가
            판가름나는 시점이어서, 이 기간 딜러의 태도는 평소와 확연히 달라진다.
            같은 달 초에 거절당했던 조건이 월말에는 통과되는 경우가 적지 않다.
            딜러가 먼저 연락해오는 타이밍도 대부분 이 시기다.
          </p>

          <p style={S.p}>
            이 현상의 배경에는 <span style={S.highlight}>스텝-스텝 보너스</span>라는 제조사
            인센티브 구조가 있다. 월 판매 목표를 달성하면 그달에 판매된 모든 차량에 소급
            적용되는 대규모 보너스가 지급된다. 마지막 1~2대가 이 보너스 전체를 결정하는
            셈이라, 딜러 입장에서는 마진을 양보하더라도 거래를 성사시키는 편이 훨씬 유리하다.
          </p>

          <h2 style={S.h2}>신형 모델 출시 직전 — 재고 부담이 기회가 되는 순간</h2>

          <p style={S.p}>
            새 모델 출시 소식이 들리기 시작하면, 기존 재고는 딜러십에게 부담이 된다.
            새 차가 들어오기 전에 창고를 비워야 하는 압박이 고스란히 할인으로 이어지는 셈이다.
            Toyota RAV4, Mazda CX-5처럼 인기 모델의 페이스리프트나 풀체인지 출시 전후가
            이전 연식을 가장 유리하게 살 수 있는 타이밍이기도 하다.
          </p>

          <p style={S.p}>
            신형이 꼭 필요한 게 아니라면, 이 시기를 기다리는 전략이 현명한 선택일 수 있다.
            딜러가 먼저 &ldquo;이번 달 안에 결정해주시면 특별 조건을 드릴 수 있다&rdquo;는
            연락을 먼저 해오는 경우도 많다.
          </p>

          <h2 style={S.h2}>데모카를 노려라 — 6~7월이 최고 물량</h2>

          <p style={S.p}>
            매년 회계연도가 바뀌는 6~7월, 딜러십 시승차(데모카)가 대거 시장에 풀린다.
            수백 킬로미터밖에 안 달린 차가 많고 관리 상태도 좋지만, 가격은 신차보다
            <span style={S.highlight}> 10~15% 낮다</span>. 새 차에 준하는 품질을 합리적으로
            원하는 구매자에게는 놓치기 아까운 타이밍이다. 딜러십에 따로 데모카 재고가 있는지
            물어보는 것만으로 선택지가 달라진다.
          </p>

          <hr style={S.divider} />

          <h2 style={S.h2}>지금 바로 할 수 있는 것들</h2>

          <div style={S.tipBox}>
            <div style={S.tipTitle}>6월 30일 전 실행 체크리스트</div>
            <ul style={S.tipList}>
              <li style={S.tipItem}>원하는 차종 시장가 조사 (Carsales, Drive 참고)</li>
              <li style={S.tipItem}>6월 30일 전 딜러십 방문 또는 전화 예약</li>
              <li style={S.tipItem}>파이낸스 옵션 사전 검토 (은행 vs 딜러 파이낸스)</li>
              <li style={S.tipItem}>데모카 재고 별도 문의</li>
              <li style={S.tipItem}>
                협상 시 이 한 마디 —{" "}
                <strong>&ldquo;이 차, 베스트프라이스로 해주실 수 있어요?&rdquo;</strong>{" "}
                (다른 딜러도 보고 있다는 뉘앙스를 풍기면서 던지면, 딜러가 먼저 카드를 꺼내게 된다)
              </li>
            </ul>
          </div>

          <p style={S.p}>
            아무리 좋은 타이밍을 잡아도 준비가 안 된 구매자는 기회를 놓치게 되어 있다.
            타이밍을 알았다면, 이제 움직일 차례다.
          </p>

          <div style={S.ctaBox}>
            <div style={S.ctaTitle}>월말 딜 알림 받기</div>
            <p style={S.ctaDesc}>딜러가 반드시 팔아야 하는 재고를 매주 이메일로 받아보세요</p>
            <Link href="/coming-soon" style={S.ctaBtn}>무료 알림 신청 →</Link>
          </div>

        </div>
      </article>

      {/* Related Articles */}
      <div style={{ background: "white", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>관련 글</div>
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>전체 글 →</Link>
          </div>
          <div className="section-grid">
            {[
              {
                slug: "best-time-to-buy-a-car-australia",
                title: "The Best Time to Buy a Car in Australia",
                excerpt: "End of financial year, month end, and just before a new model drops — once you understand how dealerships operate, timing stops being guesswork.",
                category: "Buying Guide",
                readTime: "7 min read",
                date: "June 2026",
                lang: "EN",
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
              {
                slug: "end-of-month-car-deals-explained",
                title: "End of Month Car Deals Explained — Secrets Dealers Will Never Tell You",
                excerpt: "Dealers face huge pressure from manufacturers at month end. Here's exactly how that pressure works — and how to use it to negotiate thousands off your next car.",
                category: "Insider Guide",
                readTime: "7 min read",
                date: "June 2026",
                lang: "EN",
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
                slug: "maserati-grecale-2027-australia-ko",
                title: "마세라티, 2027 그레칼레 SUV 라인업 호주 시장에 확대 출시",
                category: "뉴스",
                date: "2026년 6월 21일",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg",
              },
              {
                slug: "porsche-taycan-e-shift-2027-ko",
                title: "포르쉐 타이칸, 가상 변속기를 달다 — 전기차가 기어를 흉내 내는 이유",
                category: "뉴스",
                date: "2026년 6월 18일",
                image: "https://editorial.pxcrush.net/carsales/general/editorial/s26_0407.jpg",
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
