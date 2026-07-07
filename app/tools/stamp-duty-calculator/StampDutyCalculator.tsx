"use client";

import { useState } from "react";
import {
  State,
  QldCylinders,
  STATE_CONFIG,
  STATES,
  calculateDuty,
  CalcResult,
} from "../../data/stampDutyRates";

const btn = (active: boolean, small = false): React.CSSProperties => ({
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

const label: React.CSSProperties = {
  fontSize: "11px",
  fontWeight: 700,
  color: "#888",
  letterSpacing: "0.09em",
  marginBottom: "10px",
  textTransform: "uppercase" as const,
};

const section: React.CSSProperties = { marginBottom: "20px" };

const QLD_CYL_OPTIONS: { val: QldCylinders; label: string }[] = [
  { val: "ev",  label: "EV or Hybrid" },
  { val: "1-4", label: "4 cyl or fewer" },
  { val: "5-6", label: "5 or 6 cyl" },
  { val: "7+",  label: "7 or more cyl" },
];

export default function StampDutyCalculator() {
  const [selectedState, setSelectedState] = useState<State | null>(null);
  const [priceStr, setPriceStr] = useState("");
  const [price, setPrice] = useState(0);
  const [cylinders, setCylinders] = useState<QldCylinders>("1-4");
  const [isGreen, setIsGreen] = useState(false);
  const [isEV, setIsEV] = useState(false);

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

  return (
    <div style={{ maxWidth: "520px", margin: "0 auto" }}>

      {/* State grid */}
      <div style={section}>
        <div style={label}>Select your state or territory</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
          {STATES.map((s) => (
            <button key={s} onClick={() => handleStateClick(s)} style={btn(selectedState === s)}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Price input */}
      <div style={section}>
        <div style={label}>Vehicle price (AUD)</div>
        <div style={{ position: "relative" }}>
          <span style={{
            position: "absolute", left: "16px", top: "50%",
            transform: "translateY(-50%)", fontSize: "26px", color: "#bbb",
            pointerEvents: "none", userSelect: "none",
          }}>$</span>
          <input
            type="text"
            inputMode="numeric"
            value={priceStr}
            onChange={handlePriceChange}
            placeholder="0"
            style={{
              width: "100%", height: "68px",
              fontSize: "28px", fontWeight: 500, fontFamily: "inherit",
              paddingLeft: "38px", paddingRight: "16px",
              border: "1.5px solid rgba(0,0,0,0.14)", borderRadius: "12px",
              background: "white", color: "#1A1A1A",
              outline: "none", boxSizing: "border-box",
            }}
          />
        </div>
      </div>

      {/* QLD cylinders */}
      {selectedState === "QLD" && (
        <div style={section}>
          <div style={label}>Engine type</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
            {QLD_CYL_OPTIONS.map((o) => (
              <button key={o.val} onClick={() => setCylinders(o.val)} style={btn(cylinders === o.val, true)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* VIC green toggle */}
      {selectedState === "VIC" && (
        <div style={section}>
          <div style={label}>Vehicle emissions</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <button onClick={() => setIsGreen(false)} style={btn(!isGreen)}>
              Standard vehicle
            </button>
            <button onClick={() => setIsGreen(true)} style={btn(isGreen)}>
              EV or hybrid<br />
              <span style={{ fontSize: "11px", fontWeight: 400 }}>(under 120g per km)</span>
            </button>
          </div>
        </div>
      )}

      {/* ACT EV toggle */}
      {selectedState === "ACT" && (
        <div style={section}>
          <div style={label}>Vehicle type</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <button onClick={() => setIsEV(false)} style={btn(!isEV)}>
              Petrol or diesel
            </button>
            <button onClick={() => setIsEV(true)} style={btn(isEV)}>
              Zero emission EV
            </button>
          </div>
        </div>
      )}

      {/* Result card */}
      <div style={{
        background: result ? "white" : "rgba(0,0,0,0.025)",
        border: result ? "1px solid rgba(0,0,0,0.1)" : "1.5px dashed rgba(0,0,0,0.1)",
        borderRadius: "16px",
        padding: "28px 24px 24px",
        textAlign: "center",
        transition: "background 0.2s, border 0.2s",
        marginBottom: result ? "14px" : "0",
      }}>
        {result ? (
          <>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", letterSpacing: "0.1em", marginBottom: "10px" }}>
              ESTIMATED STAMP DUTY
            </div>
            <div style={{ fontSize: "52px", fontWeight: 700, color: "#CCDA47", lineHeight: 1, marginBottom: "12px", letterSpacing: "-1px" }}>
              ${Math.round(result.duty).toLocaleString("en-AU")}
            </div>
            <div style={{ fontSize: "13px", color: "#999", lineHeight: 1.5 }}>
              {result.breakdown}
            </div>
          </>
        ) : (
          <div style={{ fontSize: "14px", color: "#bbb", padding: "12px 0", lineHeight: 1.6 }}>
            Select a state and enter vehicle price<br />to see your stamp duty estimate
          </div>
        )}
      </div>

      {/* Disclaimer */}
      {result && config && (
        <div style={{
          padding: "14px 16px",
          background: "rgba(0,0,0,0.03)",
          borderRadius: "10px",
          fontSize: "12px",
          color: "#888",
          lineHeight: 1.65,
        }}>
          This is an estimate for passenger vehicles based on {config.fullName} rates.
          Actual duty may vary depending on vehicle type, concessions, and individual circumstances.{" "}
          <a
            href={config.revenueOfficeUrl}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#7a8a00", fontWeight: 600, textDecoration: "none" }}
          >
            Confirm with {config.revenueOfficeName} →
          </a>
        </div>
      )}
    </div>
  );
}
