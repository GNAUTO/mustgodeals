import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export const metadata: Metadata = {
  title: "딜러 파트너십 | MustGoDeals",
  description: "MustGoDeals에 클리어런스 및 데모카 재고를 등록하세요. 딜러에게 완전 무료이며, 구매자 문의는 딜러에게 직접 전달됩니다.",
};

const VALUE_PROPS = [
  {
    icon: "✦",
    title: "현재 완전 무료",
    desc: "등록비, 수수료 모두 없습니다. 정책이 바뀔 경우 사전에 명확히 안내드립니다.",
  },
  {
    icon: "◎",
    title: "클리어런스 전용 채널",
    desc: "일반 신차 목록과 뒤섞이지 않습니다. 이미 구매 의향이 있는 구매자들이 찾는 채널입니다.",
  },
  {
    icon: "→",
    title: "문의는 딜러에게 직접 전달",
    desc: "구매자가 문의하면 정보가 딜러에게 바로 전달됩니다. 중간 단계 없이, 지연 없이.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "매물 정보를 이메일로 보내주세요",
    desc: "hello.mustgodeals@gmail.com으로 매물 정보를 보내주세요. 제조사, 모델, 연식, 주행거리, 색상, 신차 출시가, 제안 가격을 포함해 주세요.",
  },
  {
    n: "02",
    title: "검증 후 게시",
    desc: "MustGoDeals가 제출 내용을 확인한 뒤 매물을 게시합니다. 보통 영업일 기준 하루 이내에 처리됩니다.",
  },
  {
    n: "03",
    title: "구매자 문의가 딜러에게 직접 전달",
    desc: "구매자가 \"Check Availability\"를 클릭하면 구매자 정보가 딜러에게 즉시 전달됩니다. 이후 과정은 딜러가 직접 진행합니다.",
  },
];

export default function ForDealersKo() {
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA" }}>
      <Navbar langLinks={{ current: "KO", links: { EN: "/for-dealers", KO: "/for-dealers-ko" } }} />

      {/* Page header */}
      <div style={{ background: "#FAFAFA", padding: "2rem 2rem 1.5rem", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", color: "#8A9A10", letterSpacing: "1px", marginBottom: "0.75rem", fontWeight: 600 }}>딜러 파트너십</div>
          <h1 style={{ color: "#1A1A1A", fontSize: "32px", fontWeight: 500, letterSpacing: "-0.3px", marginBottom: "0.75rem" }}>
            재고를 더 빠르게, 비용 없이
          </h1>
          <p style={{ color: "#6B6B6B", fontSize: "15px", margin: 0, lineHeight: 1.8 }}>
            MustGoDeals가 이미 구매를 고려 중인 구매자들 앞에<br />
            클리어런스 재고를 노출합니다. 계약 없이, 수수료 없이, 간단하게.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" }}>

        {/* Value propositions */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "12px", marginBottom: "1.5rem" }}>
          {VALUE_PROPS.map(({ icon, title, desc }) => (
            <div key={title} style={{ background: "white", borderRadius: "10px", padding: "1.5rem", border: "0.5px solid rgba(0,0,0,0.07)", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
              <div style={{ fontSize: "18px", color: "#CCDA47", marginBottom: "0.75rem", fontWeight: 700 }}>{icon}</div>
              <div style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.5rem" }}>{title}</div>
              <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.7 }}>{desc}</div>
            </div>
          ))}
        </div>

        {/* How it works for dealers */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2.5rem", border: "0.5px solid rgba(0,0,0,0.07)", marginBottom: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "1.75rem" }}>3단계로 매물 등록하기</h2>
          {STEPS.map(({ n, title, desc }, i) => (
            <div key={n} style={{
              display: "flex",
              gap: "20px",
              paddingBottom: i < STEPS.length - 1 ? "1.5rem" : 0,
              marginBottom: i < STEPS.length - 1 ? "1.5rem" : 0,
              borderBottom: i < STEPS.length - 1 ? "0.5px solid rgba(0,0,0,0.06)" : "none",
            }}>
              <div style={{ flexShrink: 0, width: "40px", height: "40px", borderRadius: "50%", background: "#CCDA47", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#1A1A1A" }}>{n}</span>
              </div>
              <div>
                <div style={{ fontSize: "15px", fontWeight: 600, color: "#1A1A1A", marginBottom: "5px" }}>{title}</div>
                <div style={{ fontSize: "14px", color: "#555", lineHeight: 1.8 }}>{desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Social proof */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2rem", border: "0.5px solid rgba(0,0,0,0.07)", borderLeft: "3px solid #CCDA47", marginBottom: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: "11px", color: "#8A9A10", letterSpacing: "1px", marginBottom: "0.75rem", fontWeight: 600 }}>현재 파트너</div>
          <p style={{ color: "#1A1A1A", fontSize: "16px", lineHeight: 1.75, margin: "0 0 0.5rem" }}>
            현재 시드니 프리미엄 브랜드 딜러 3곳과 협력하고 있습니다.
          </p>
          <p style={{ color: "#6B6B6B", fontSize: "14px", lineHeight: 1.75, margin: 0 }}>
            모든 파트너는 절차가 간단하고 비용이 없다는 점에서 참여했습니다. 클리어런스 재고가 있다면, 그것만으로 충분합니다.
          </p>
        </div>

        {/* CTA */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2.5rem", border: "0.5px solid rgba(0,0,0,0.07)", textAlign: "center", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.75rem" }}>재고 등록을 시작하시겠어요?</h2>
          <p style={{ fontSize: "15px", color: "#777", lineHeight: 1.75, marginBottom: "1.75rem" }}>
            클리어런스 차량 정보를 이메일로 보내주시면<br />영업일 기준 하루 이내에 매물을 게시해 드립니다.
          </p>
          <Link
            href="mailto:hello.mustgodeals@gmail.com?subject=%EB%94%9C%EB%9F%AC%20%EB%A7%A4%EB%AC%BC%20%EB%93%B1%EB%A1%9D%20%EB%AC%B8%EC%9D%98"
            style={{
              display: "inline-block",
              background: "#CCDA47",
              color: "#1A1A1A",
              padding: "14px 28px",
              borderRadius: "8px",
              fontSize: "15px",
              fontWeight: 600,
              textDecoration: "none",
              letterSpacing: "-0.1px",
            }}
          >
            이메일로 문의하기
          </Link>
          <div style={{ marginTop: "1rem", fontSize: "13px", color: "#aaa" }}>hello.mustgodeals@gmail.com</div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
