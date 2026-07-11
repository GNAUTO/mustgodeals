"use client";

import { useState } from "react";
import Link from "next/link";
import {
  State,
  QldCylinders,
  STATE_CONFIG,
  STATES,
  calculateDuty,
  CalcResult,
} from "../../data/stampDutyRates";

const STATE_NAMES_KO: Record<State, string> = {
  NSW: "뉴 사우스 웨일스",
  VIC: "빅토리아",
  QLD: "퀸즐랜드",
  SA: "사우스 오스트레일리아",
  WA: "웨스턴 오스트레일리아",
  TAS: "태즈매니아",
  ACT: "오스트레일리안 캐피털 테리토리",
  NT: "노던 테리토리",
};

const T = {
  EN: {
    stateLabel:    "Select your state or territory",
    priceLabel:    "Vehicle price (AUD)",
    engineLabel:   "Engine type",
    emissionsLabel:"Vehicle emissions",
    vtypeLabel:    "Vehicle type",
    standard:      "Standard vehicle",
    greenLabel:    "EV or hybrid (under 120g per km)",
    petrol:        "Petrol or diesel",
    zeroEV:        "Zero emission EV",
    resultLabel:   "ESTIMATED STAMP DUTY",
    placeholder:   ["Select a state and enter vehicle price", "to see your stamp duty estimate"],
    disclaimer:    (n: string) => `This is an estimate for passenger vehicles based on ${n} rates. Actual duty may vary depending on vehicle type, concessions, and individual circumstances.`,
    confirmLink:   (n: string) => `Confirm with ${n} →`,
    cylOptions: [
      { val: "ev"  as QldCylinders, label: "EV or Hybrid" },
      { val: "1-4" as QldCylinders, label: "4 cyl or fewer" },
      { val: "5-6" as QldCylinders, label: "5 or 6 cyl" },
      { val: "7+"  as QldCylinders, label: "7 or more cyl" },
    ],
  },
  KO: {
    stateLabel:    "주 또는 준주 선택",
    priceLabel:    "차량 가격 (AUD)",
    engineLabel:   "엔진 유형",
    emissionsLabel:"차량 배출량",
    vtypeLabel:    "차량 유형",
    standard:      "일반 차량",
    greenLabel:    "EV 또는 하이브리드 (120g/km 이하)",
    petrol:        "휘발유 또는 디젤",
    zeroEV:        "무배출 전기차",
    resultLabel:   "예상 스탬프 듀티",
    placeholder:   ["주를 선택하고 차량 가격을 입력하면", "예상 스탬프 듀티가 표시됩니다"],
    disclaimer:    (n: string) => `이 금액은 ${n} 기준 승용차에 대한 예상치입니다. 실제 납부 금액은 차량 유형 및 개별 상황에 따라 다를 수 있습니다.`,
    confirmLink:   (n: string) => `${n}에서 정확한 금액 확인 →`,
    cylOptions: [
      { val: "ev"  as QldCylinders, label: "EV / 하이브리드" },
      { val: "1-4" as QldCylinders, label: "4기통 이하" },
      { val: "5-6" as QldCylinders, label: "5 또는 6기통" },
      { val: "7+"  as QldCylinders, label: "7기통 이상" },
    ],
  },
};

const chip = (active: boolean, small = false): React.CSSProperties => ({
  minHeight: small ? "44px" : "52px",
  border: active ? "2px solid #CCDA47" : "1px solid rgba(0,0,0,0.14)",
  borderRadius: "10px",
  background: active ? "#CCDA47" : "white",
  color: "#1A1A1A",
  fontWeight: active ? 700 : 500,
  fontSize: small ? "11px" : "14px",
  cursor: "pointer",
  fontFamily: "inherit",
  transition: "all 0.15s",
  lineHeight: 1.25,
  padding: "6px 8px",
  width: "100%",
});

const fieldLabel: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 700,
  color: "#888",
  letterSpacing: "0.09em",
  marginBottom: "10px",
  textTransform: "uppercase" as const,
};

const row: React.CSSProperties = { marginBottom: "20px" };

interface Props {
  lang?: "EN" | "KO";
}

export default function StampDutyCalculator({ lang = "EN" }: Props) {
  const tx = T[lang];

  const [selectedState, setSelectedState] = useState<State | null>(null);
  const [priceStr, setPriceStr]           = useState("");
  const [price, setPrice]                 = useState(0);
  const [cylinders, setCylinders]         = useState<QldCylinders>("1-4");
  const [isGreen, setIsGreen]             = useState(false);
  const [isEV, setIsEV]                   = useState(false);

  const handleStateClick = (s: State) => {
    setSelectedState(s);
    setIsGreen(false);
    setIsEV(false);
    setCylinders("1-4");
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d]/g, "");
    if (raw === "") { setPriceStr(""); setPrice(0); return; }
    const num = Math.min(parseInt(raw, 10), 9999999);
    if (isNaN(num)) return;
    setPrice(num);
    setPriceStr(num.toLocaleString("en-AU"));
  };

  let result: CalcResult | null = null;
  if (selectedState && price > 0) {
    result = calculateDuty(selectedState, price, { isGreen, isEV, cylinders });
  }

  const config = selectedState ? STATE_CONFIG[selectedState] : null;
  const stateName = selectedState
    ? (lang === "KO" ? STATE_NAMES_KO[selectedState] : config!.fullName)
    : "";

  return (
    <div style={{ maxWidth: "520px", margin: "0 auto" }}>

      {/* State grid */}
      <div style={row}>
        <div style={fieldLabel}>{tx.stateLabel}</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
          {STATES.map((s) => (
            <button key={s} onClick={() => handleStateClick(s)} style={chip(selectedState === s)}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Price input */}
      <div style={row}>
        <div style={fieldLabel}>{tx.priceLabel}</div>
        <div style={{ position: "relative" }}>
          <span style={{ position: "absolute", left: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "26px", color: "#bbb", pointerEvents: "none", userSelect: "none" }}>$</span>
          <input
            type="text"
            inputMode="numeric"
            value={priceStr}
            onChange={handlePriceChange}
            placeholder="0"
            style={{ width: "100%", height: "68px", fontSize: "28px", fontWeight: 500, fontFamily: "inherit", paddingLeft: "38px", paddingRight: "16px", border: "1.5px solid rgba(0,0,0,0.14)", borderRadius: "12px", background: "white", color: "#1A1A1A", outline: "none", boxSizing: "border-box" }}
          />
        </div>
      </div>

      {/* QLD cylinders */}
      {selectedState === "QLD" && (
        <div style={row}>
          <div style={fieldLabel}>{tx.engineLabel}</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
            {tx.cylOptions.map((o) => (
              <button key={o.val} onClick={() => setCylinders(o.val)} style={chip(cylinders === o.val, true)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* VIC green toggle */}
      {selectedState === "VIC" && (
        <div style={row}>
          <div style={fieldLabel}>{tx.emissionsLabel}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <button onClick={() => setIsGreen(false)} style={chip(!isGreen)}>
              {tx.standard}
            </button>
            <button onClick={() => setIsGreen(true)} style={chip(isGreen)}>
              {tx.greenLabel}
            </button>
          </div>
        </div>
      )}

      {/* ACT EV toggle */}
      {selectedState === "ACT" && (
        <div style={row}>
          <div style={fieldLabel}>{tx.vtypeLabel}</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <button onClick={() => setIsEV(false)} style={chip(!isEV)}>
              {tx.petrol}
            </button>
            <button onClick={() => setIsEV(true)} style={chip(isEV)}>
              {tx.zeroEV}
            </button>
          </div>
        </div>
      )}

      {/* Result card */}
      <div style={{ background: result ? "white" : "rgba(0,0,0,0.025)", border: result ? "1px solid rgba(0,0,0,0.1)" : "1.5px dashed rgba(0,0,0,0.1)", borderRadius: "16px", padding: "28px 24px 24px", textAlign: "center", transition: "background 0.2s, border 0.2s", marginBottom: result ? "14px" : "0" }}>
        {result ? (
          <>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", letterSpacing: "0.1em", marginBottom: "10px" }}>
              {tx.resultLabel}
            </div>
            <div style={{ fontSize: "52px", fontWeight: 700, color: "#CCDA47", lineHeight: 1, marginBottom: "12px", letterSpacing: "-1px" }}>
              ${Math.round(result.duty).toLocaleString("en-AU")}
            </div>
            <div style={{ fontSize: "13px", color: "#999", lineHeight: 1.5 }}>
              {result.breakdown}
            </div>
          </>
        ) : (
          <div style={{ fontSize: "14px", color: "#bbb", padding: "12px 0", lineHeight: 1.8 }}>
            {tx.placeholder[0]}<br />{tx.placeholder[1]}
          </div>
        )}
      </div>

      {/* Disclaimer */}
      {result && config && (
        <div style={{ padding: "14px 16px", background: "rgba(0,0,0,0.03)", borderRadius: "10px", fontSize: "12px", color: "#888", lineHeight: 1.65 }}>
          {tx.disclaimer(stateName)}{" "}
          <a href={config.revenueOfficeUrl} target="_blank" rel="noreferrer" style={{ color: "#7a8a00", fontWeight: 600, textDecoration: "none" }}>
            {tx.confirmLink(config.revenueOfficeName)}
          </a>
        </div>
      )}

      {/* Cross-link */}
      <div style={{ marginTop: "20px", padding: "16px", background: "rgba(0,0,0,0.03)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "13px", color: "#888" }}>Also calculate rego costs</span>
        <Link
          href="/tools/rego-calculator"
          style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A1A", textDecoration: "none" }}
        >
          Rego Calculator →
        </Link>
      </div>
    </div>
  );
}
