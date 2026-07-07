import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FaqAccordion from "../components/FaqAccordion";

export const metadata: Metadata = {
  title: "서비스 소개 | MustGoDeals",
  description: "MustGoDeals는 딜러 클리어런스 재고를 한곳에 모아 보여주는 플랫폼입니다. 저희는 판매자가 아니며, 거래에 직접 관여하지 않습니다.",
};

const FAQ_ITEMS = [
  {
    q: "MustGoDeals가 수수료를 받나요?",
    a: "아니요. MustGoDeals는 구매자와 딜러 모두에게 완전 무료입니다. 어떠한 형태의 수수료도 받지 않습니다.",
  },
  {
    q: "차량 상태나 거래에 문제가 생기면 누가 책임지나요?",
    a: "MustGoDeals는 구매자와 딜러를 연결해주는 플랫폼이며 판매자가 아닙니다. 거래에 직접 관여하지 않습니다. 차량 상태, 가격, 계약 조건에 대한 모든 책임은 해당 딜러에게 있습니다. 구매 전 반드시 딜러와 직접 모든 사항을 확인하시기 바랍니다.",
  },
  {
    q: "표시된 가격을 믿을 수 있나요?",
    a: "MustGoDeals의 각 매물에는 신차 출시가와 현재 제안 가격이 함께 표시되어 있어 직접 할인폭을 확인할 수 있습니다. 주행거리와 등록일도 함께 제공되므로 차량 가치를 독립적으로 판단할 수 있습니다. 가격은 딜러가 제출한 그대로 게시됩니다.",
  },
  {
    q: "문의하면 어떤 일이 일어나나요?",
    a: "\"Check Availability\"를 클릭하면 딜러에게 직접 알림이 전달됩니다. 이후 딜러가 직접 연락하여 차량에 대해 안내합니다. MustGoDeals는 그 이후 과정에 관여하지 않습니다.",
  },
];

const STEPS = [
  {
    n: "01",
    title: "딜러가 매물 정보 제공",
    desc: "딜러가 클리어런스 차량 정보를 MustGoDeals에 직접 제출합니다.",
  },
  {
    n: "02",
    title: "검증 후 그대로 게시",
    desc: "MustGoDeals가 정보를 확인한 뒤 있는 그대로 게시합니다. 가격이나 스펙은 변경되지 않습니다.",
  },
  {
    n: "03",
    title: "문의는 딜러에게 직접 전달",
    desc: "\"Check Availability\"를 클릭하면 딜러에게 직접 알림이 전달되고, 딜러가 직접 연락합니다. MustGoDeals는 이후 과정에 관여하지 않습니다.",
  },
];

export default function HowItWorksKo() {
  return (
    <div style={{ minHeight: "100vh", background: "#FAFAFA" }}>
      <Navbar langLinks={{ current: "KO", links: { EN: "/how-it-works", KO: "/how-it-works-ko" } }} />

      {/* Page header */}
      <div style={{ background: "#FAFAFA", padding: "2rem 2rem 1.5rem", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ fontSize: "11px", color: "#8A9A10", letterSpacing: "1px", marginBottom: "0.75rem", fontWeight: 600 }}>서비스 안내</div>
          <h1 style={{ color: "#1A1A1A", fontSize: "32px", fontWeight: 500, letterSpacing: "-0.3px", marginBottom: "0.75rem" }}>
            어떻게 운영되나요
          </h1>
          <p style={{ color: "#6B6B6B", fontSize: "15px", margin: 0, lineHeight: 1.8 }}>
            MustGoDeals는 딜러 클리어런스 재고를 한곳에 모아 보여주는 플랫폼입니다.<br />
            저희는 판매자가 아니며, 거래에 직접 관여하지 않습니다.
          </p>
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" }}>

        {/* 3-step process */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2.5rem", border: "0.5px solid rgba(0,0,0,0.07)", marginBottom: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "1.75rem" }}>단계별 진행 과정</h2>
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

        {/* Transparency card */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2rem", border: "0.5px solid rgba(0,0,0,0.07)", borderLeft: "3px solid #CCDA47", marginBottom: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <div style={{ fontSize: "11px", color: "#8A9A10", letterSpacing: "1px", marginBottom: "0.75rem", fontWeight: 600 }}>투명성 원칙</div>
          <p style={{ color: "#1A1A1A", fontSize: "16px", lineHeight: 1.8, margin: 0 }}>
            MustGoDeals는 딜러와 구매자 모두에게 완전 무료로 운영됩니다. 특정 매물을 우선 노출하거나 대가를 받고 밀어주는 경우는 없습니다. 표시된 내용은 딜러가 제출한 그대로입니다.
          </p>
        </div>

        {/* Why so cheap */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2.5rem", border: "0.5px solid rgba(0,0,0,0.07)", marginBottom: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "1rem" }}>왜 이렇게 저렴한가요?</h2>
          <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.8, marginBottom: "1rem" }}>
            클리어런스 및 데모카가 신차보다 저렴한 이유는 분명합니다. 딜러는 특정 재무 기한 전에 재고, 연식 변경 물량, 또는 과잉 배정된 차량을 소진해야 하는 압박을 받습니다. 그 압박이 실질적인 할인으로 이어지는 것입니다.
          </p>
          <p style={{ fontSize: "15px", color: "#444", lineHeight: 1.8, marginBottom: "1.5rem" }}>
            이런 차량들은 대부분 주행거리가 낮고, 제조사 보증도 신차와 동일하게 적용되며, 이후 서비스 지원도 동일하게 받을 수 있습니다.
          </p>
          <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            <Link href="/blog/what-is-a-dealer-clearance-car-australia-ko" style={{ fontSize: "13px", color: "#7a8a00", fontWeight: 600, textDecoration: "none", background: "rgba(204,218,71,0.12)", padding: "7px 14px", borderRadius: "6px", border: "1px solid rgba(204,218,71,0.3)" }}>
              딜러 급처분차란 →
            </Link>
            <Link href="/blog/why-buy-demo-car-australia-ko" style={{ fontSize: "13px", color: "#7a8a00", fontWeight: 600, textDecoration: "none", background: "rgba(204,218,71,0.12)", padding: "7px 14px", borderRadius: "6px", border: "1px solid rgba(204,218,71,0.3)" }}>
              데모카를 사야 하는 이유 →
            </Link>
          </div>
        </div>

        {/* FAQ */}
        <div style={{ background: "white", borderRadius: "12px", padding: "2.5rem", border: "0.5px solid rgba(0,0,0,0.07)", marginBottom: "1.5rem", boxShadow: "0 1px 4px rgba(0,0,0,0.04)" }}>
          <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#1A1A1A", marginBottom: "0.25rem" }}>자주 묻는 질문</h2>
          <p style={{ fontSize: "13px", color: "#aaa", marginBottom: "1.5rem", marginTop: "0.5rem" }}>질문을 탭하면 답변을 확인할 수 있습니다.</p>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>

        {/* Legal disclaimer */}
        <div style={{ background: "#1A1A1A", borderRadius: "12px", padding: "1.75rem 2rem" }}>
          <div style={{ fontSize: "11px", color: "#CCDA47", letterSpacing: "1px", marginBottom: "0.75rem", fontWeight: 600 }}>법적 고지</div>
          <p style={{ color: "rgba(255,255,255,0.6)", fontSize: "13px", lineHeight: 1.8, margin: 0 }}>
            MustGoDeals는 광고 플랫폼입니다. 판매자, 중개인, 대리인이 아닙니다. 모든 거래는 구매자와 딜러 사이에서 직접 이루어지며, MustGoDeals는 이 사이트에 게시된 거래 또는 매물과 관련하여 어떠한 책임도 지지 않습니다.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
}
