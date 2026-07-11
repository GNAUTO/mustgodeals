"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import {
  RegoState, QldCyl, TasCyl, NtEngine, ZoneArea,
  calculateRego,
} from "../../data/regoRates";

const STATES: RegoState[] = ["NSW", "VIC", "QLD", "SA", "WA", "TAS", "ACT", "NT"];

const WEIGHT_PRESETS = [
  { label: "Small car",      kg: 950  },
  { label: "Compact",        kg: 1100 },
  { label: "Sedan or Wagon", kg: 1350 },
  { label: "SUV or Ute",     kg: 1800 },
];

const QLD_CYL_OPTS: { val: QldCyl; label: string }[] = [
  { val: "ev_1to3", label: "EV or 3"  },
  { val: "4",       label: "4 cyl"    },
  { val: "5to6",    label: "5 or 6"   },
  { val: "7to8",    label: "7 or 8"   },
  { val: "9to12",   label: "9 plus"   },
];

const TAS_CYL_OPTS: { val: TasCyl; label: string }[] = [
  { val: "3orless", label: "3 or fewer" },
  { val: "4",       label: "4 cyl"      },
  { val: "5to6",    label: "5 or 6"     },
  { val: "7plus",   label: "7 or more"  },
];

const NT_ENG_OPTS: { val: NtEngine; label: string }[] = [
  { val: "to1500cc",     label: "Up to 1500cc"   },
  { val: "1501to3000cc", label: "1501 to 3000cc" },
  { val: "over3000cc",   label: "Over 3000cc"    },
];

const chip = (active: boolean, small = false): React.CSSProperties => ({
  minHeight:  small ? "44px" : "52px",
  border:     active ? "2px solid #CCDA47" : "1px solid rgba(0,0,0,0.14)",
  borderRadius: "10px",
  background: active ? "#CCDA47" : "white",
  color:      "#1A1A1A",
  fontWeight: active ? 700 : 500,
  fontSize:   small ? "11px" : "14px",
  cursor:     "pointer",
  fontFamily: "inherit",
  transition: "all 0.15s",
  lineHeight: 1.25,
  padding:    "6px 8px",
  width:      "100%",
});

const fieldLabel: React.CSSProperties = {
  fontSize:       "11px",
  fontWeight:     700,
  color:          "#888",
  letterSpacing:  "0.09em",
  marginBottom:   "10px",
  textTransform:  "uppercase" as const,
};

const row: React.CSSProperties = { marginBottom: "20px" };

const WEIGHT_BASED = new Set<RegoState>(["NSW", "SA", "WA", "ACT"]);
const ZONE_BASED   = new Set<RegoState>(["VIC", "SA"]);
const CTP_SEP      = new Set<RegoState>(["NSW", "QLD", "SA", "WA", "ACT", "NT"]);

export default function RegoCalculator() {
  const [state,     setState]     = useState<RegoState | null>(null);
  const [weightStr, setWeightStr] = useState("1,350");
  const [weightKg,  setWeightKg]  = useState(1350);
  const [qldCyl,    setQldCyl]    = useState<QldCyl>("4");
  const [tasCyl,    setTasCyl]    = useState<TasCyl>("4");
  const [ntEngine,  setNtEngine]  = useState<NtEngine>("1501to3000cc");
  const [isEV,      setIsEV]      = useState(false);
  const [zone,      setZone]      = useState<ZoneArea>("metro");
  const [showCTP,   setShowCTP]   = useState(false);

  const handleStateClick = (s: RegoState) => {
    setState(s);
    setIsEV(false);
    setZone("metro");
    setShowCTP(false);
  };

  const handleWeightChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d]/g, "");
    if (raw === "") { setWeightStr(""); setWeightKg(0); return; }
    const num = Math.min(parseInt(raw, 10), 9999);
    if (isNaN(num)) return;
    setWeightKg(num);
    setWeightStr(num.toLocaleString("en-AU"));
  };

  const setPreset = (kg: number) => {
    setWeightKg(kg);
    setWeightStr(kg.toLocaleString("en-AU"));
  };

  const result = useMemo(() => {
    if (!state) return null;
    return calculateRego(state, {
      weightKg:  weightKg > 0 ? weightKg : 1350,
      qldCyl,
      tasCyl,
      ntEngine,
      isEV,
      zone,
    });
  }, [state, weightKg, qldCyl, tasCyl, ntEngine, isEV, zone]);

  const needsWeight = state ? WEIGHT_BASED.has(state) : false;
  const needsZone   = state ? ZONE_BASED.has(state)   : false;
  const needsCTP    = state ? CTP_SEP.has(state)       : false;
  const needsQldCyl = state === "QLD" && !isEV;
  const needsTasCyl = state === "TAS" && !isEV;
  const needsNtEng  = state === "NT"  && !isEV;

  const zoneRegionalLabel = state === "SA" ? "Country" : "Regional";

  return (
    <div style={{ maxWidth: "520px", margin: "0 auto" }}>

      {/* State grid */}
      <div style={row}>
        <div style={fieldLabel}>Select your state or territory</div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
          {STATES.map((s) => (
            <button key={s} onClick={() => handleStateClick(s)} style={chip(state === s)}>
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Weight presets + manual input */}
      {needsWeight && (
        <div style={row}>
          <div style={fieldLabel}>Vehicle tare weight</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px", marginBottom: "10px" }}>
            {WEIGHT_PRESETS.map((p) => (
              <button
                key={p.kg}
                onClick={() => setPreset(p.kg)}
                style={chip(weightKg === p.kg, true)}
              >
                {p.label}
              </button>
            ))}
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              inputMode="numeric"
              value={weightStr}
              onChange={handleWeightChange}
              placeholder="Enter exact weight"
              style={{ width: "100%", height: "56px", fontSize: "22px", fontWeight: 500, fontFamily: "inherit", paddingLeft: "16px", paddingRight: "48px", border: "1.5px solid rgba(0,0,0,0.14)", borderRadius: "12px", background: "white", color: "#1A1A1A", outline: "none", boxSizing: "border-box" }}
            />
            <span style={{ position: "absolute", right: "16px", top: "50%", transform: "translateY(-50%)", fontSize: "14px", color: "#bbb", pointerEvents: "none", userSelect: "none" }}>
              kg
            </span>
          </div>
          <div style={{ fontSize: "11px", color: "#bbb", marginTop: "6px" }}>
            Tare weight is listed on your compliance plate or in the owner manual
          </div>
        </div>
      )}

      {/* QLD cylinders */}
      {needsQldCyl && (
        <div style={row}>
          <div style={fieldLabel}>Engine cylinders</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: "6px" }}>
            {QLD_CYL_OPTS.map((o) => (
              <button key={o.val} onClick={() => setQldCyl(o.val)} style={chip(qldCyl === o.val, true)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* TAS cylinders */}
      {needsTasCyl && (
        <div style={row}>
          <div style={fieldLabel}>Engine cylinders</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "8px" }}>
            {TAS_CYL_OPTS.map((o) => (
              <button key={o.val} onClick={() => setTasCyl(o.val)} style={chip(tasCyl === o.val, true)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* NT engine */}
      {needsNtEng && (
        <div style={row}>
          <div style={fieldLabel}>Engine displacement</div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "8px" }}>
            {NT_ENG_OPTS.map((o) => (
              <button key={o.val} onClick={() => setNtEngine(o.val)} style={chip(ntEngine === o.val, true)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Zone selector */}
      {needsZone && (
        <div style={row}>
          <div style={fieldLabel}>Location</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <button onClick={() => setZone("metro")}    style={chip(zone === "metro")}>Metro</button>
            <button onClick={() => setZone("regional")} style={chip(zone === "regional")}>{zoneRegionalLabel}</button>
          </div>
        </div>
      )}

      {/* EV toggle */}
      {state && (
        <div style={row}>
          <div style={fieldLabel}>Vehicle type</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <button onClick={() => setIsEV(false)} style={chip(!isEV)}>Petrol or diesel</button>
            <button onClick={() => setIsEV(true)}  style={chip(isEV)}>Electric vehicle</button>
          </div>
        </div>
      )}

      {/* CTP toggle */}
      {needsCTP && (
        <div style={row}>
          <div style={fieldLabel}>Third party insurance</div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
            <button onClick={() => setShowCTP(false)} style={chip(!showCTP)}>Not included</button>
            <button onClick={() => setShowCTP(true)}  style={chip(showCTP)}>Show estimate</button>
          </div>
        </div>
      )}

      {/* Result card */}
      <div
        style={{
          background:   result ? "white" : "rgba(0,0,0,0.025)",
          border:       result ? "1px solid rgba(0,0,0,0.1)" : "1.5px dashed rgba(0,0,0,0.1)",
          borderRadius: "16px",
          padding:      "28px 24px 24px",
          textAlign:    "center",
          transition:   "background 0.2s, border 0.2s",
          marginBottom: result ? "14px" : "0",
        }}
      >
        {result ? (
          <>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#aaa", letterSpacing: "0.1em", marginBottom: "10px" }}>
              ANNUAL REGISTRATION ESTIMATE
            </div>
            <div style={{ fontSize: "52px", fontWeight: 700, color: "#CCDA47", lineHeight: 1, marginBottom: "12px", letterSpacing: "-1px" }}>
              ${Math.round(result.regoTotal).toLocaleString("en-AU")}
            </div>

            {/* Breakdown */}
            <div style={{ textAlign: "left", borderTop: "1px solid rgba(0,0,0,0.06)", paddingTop: "14px", marginTop: "4px" }}>
              {result.breakdown.map((item, i) => (
                <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "6px" }}>
                  <span style={{ fontSize: "13px", color: "#555" }}>
                    {item.label}
                    {item.note && (
                      <span style={{ fontSize: "11px", color: "#bbb", marginLeft: "6px" }}>({item.note})</span>
                    )}
                  </span>
                  <span style={{ fontSize: "13px", color: "#1A1A1A", fontWeight: 600, marginLeft: "8px", flexShrink: 0 }}>
                    ${item.amount.toLocaleString("en-AU", { minimumFractionDigits: 0, maximumFractionDigits: 2 })}
                  </span>
                </div>
              ))}

              {/* CTP included badge */}
              {result.ctpIncluded && (
                <div style={{ marginTop: "8px", fontSize: "11px", color: "#6B8A00", background: "rgba(204,218,71,0.15)", border: "1px solid rgba(204,218,71,0.4)", borderRadius: "6px", padding: "5px 10px", display: "inline-block" }}>
                  Compulsory third party insurance included
                </div>
              )}

              {/* CTP range */}
              {showCTP && result.ctpRange && (
                <div style={{ marginTop: "10px", padding: "10px 12px", background: "rgba(0,0,0,0.03)", borderRadius: "8px" }}>
                  <div style={{ fontSize: "11px", color: "#aaa", marginBottom: "4px", textTransform: "uppercase", letterSpacing: "0.07em" }}>
                    {result.ctpRange.label}
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 600, color: "#555" }}>
                    ${result.ctpRange.min.toLocaleString("en-AU")} to ${result.ctpRange.max.toLocaleString("en-AU")}
                  </div>
                  <div style={{ fontSize: "11px", color: "#bbb", marginTop: "3px" }}>Contact your insurer for an exact quote</div>
                </div>
              )}
            </div>

            {/* EV note */}
            {result.evNote && (
              <div style={{ marginTop: "12px", padding: "10px 12px", background: "rgba(0,0,0,0.03)", borderRadius: "8px", fontSize: "12px", color: "#666", textAlign: "left" }}>
                {result.evNote}
              </div>
            )}
          </>
        ) : (
          <div style={{ fontSize: "14px", color: "#bbb", padding: "12px 0", lineHeight: 1.8 }}>
            Select a state and enter your vehicle details<br />to see your annual rego estimate
          </div>
        )}
      </div>

      {/* Disclaimer */}
      {result && (
        <div style={{ padding: "14px 16px", background: "rgba(0,0,0,0.03)", borderRadius: "10px", fontSize: "12px", color: "#888", lineHeight: 1.65 }}>
          {result.approxNote
            ? `${result.approxNote} `
            : `This is an estimate based on published ${state} rates for a standard private passenger vehicle. `}
          <a
            href={result.officialUrl}
            target="_blank"
            rel="noreferrer"
            style={{ color: "#7a8a00", fontWeight: 600, textDecoration: "none" }}
          >
            Confirm with {result.officialName} →
          </a>
        </div>
      )}

      {/* Cross-link */}
      <div style={{ marginTop: "20px", padding: "16px", background: "rgba(0,0,0,0.03)", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{ fontSize: "13px", color: "#888" }}>Also calculate stamp duty</span>
        <Link
          href="/tools/stamp-duty-calculator"
          style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A1A", textDecoration: "none" }}
        >
          Stamp Duty Calculator →
        </Link>
      </div>
    </div>
  );
}
