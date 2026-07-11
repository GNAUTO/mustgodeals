// ─────────────────────────────────────────────────────────────────────────────
//  Rego Rates — Australian Vehicle Registration Fees
//  Update annually after July 1 (new financial year)
// ─────────────────────────────────────────────────────────────────────────────

export type RegoState   = "NSW" | "VIC" | "QLD" | "SA" | "WA" | "TAS" | "ACT" | "NT";
export type QldCyl      = "ev_1to3" | "4" | "5to6" | "7to8" | "9to12";
export type TasCyl      = "3orless" | "4" | "5to6" | "7plus";
export type NtEngine    = "to1500cc" | "1501to3000cc" | "over3000cc";
export type ZoneArea    = "metro" | "regional"; // VIC = metro/regional; SA = metro/country (mapped to regional)

export type BreakdownItem = { label: string; amount: number; note?: string };

export type CTPRange = { min: number; max: number; label: string };

export type RegoResult = {
  regoTotal:    number;
  ctpIncluded:  boolean; // true for VIC (TAC) and TAS (MAIB)
  breakdown:    BreakdownItem[];
  ctpRange?:    CTPRange;
  evNote?:      string;
  approxNote?:  string;
  officialUrl:  string;
  officialName: string;
};

export type RegoOptions = {
  weightKg?:  number;
  qldCyl?:    QldCyl;
  tasCyl?:    TasCyl;
  ntEngine?:  NtEngine;
  isEV?:      boolean;
  zone?:      ZoneArea;
};

// ─────────────────────────────────────────────────────────────────────────────
//  NSW  (2026-27)
//  Source: https://www.nsw.gov.au/driving-boating-and-transport/vehicle-registration/fees-concessions-and-forms/vehicle-registration-fees
//  Verified: July 2026
//  Base fee $84 effective from 1 July 2026 (increased from $82)
//  Motor Vehicle Tax is weight-based (private use)
//  One-off $100 discount applies Sep 2026 to Aug 2027 for all private light vehicles (not reflected here)
// ─────────────────────────────────────────────────────────────────────────────
const NSW_BASE = 84;

function nswMVT(kg: number): number {
  if (kg <= 970)  return 278;
  if (kg <= 1150) return 322;
  if (kg <= 1500) return 391;
  if (kg <= 2500) return 596;
  if (kg <= 2790) return 860;
  if (kg <= 3050) return 977;
  if (kg <= 3300) return 1070;
  if (kg <= 3560) return 1164;
  if (kg <= 3810) return 1249;
  if (kg <= 4060) return 1343;
  if (kg <= 4320) return 1434;
  return 1525; // up to 4500kg
}

// ─────────────────────────────────────────────────────────────────────────────
//  QLD  (2026-27)
//  Source: https://www.qld.gov.au/transport/registration/fees/cost
//  Verified: July 2026 — 3.4% Government Indexation Rate applied 1 July 2026
//  Traffic Improvement Fee (TIF): $67.25 for all cylinder categories
//  EV and steam vehicles use the 1-3 cylinder tier
// ─────────────────────────────────────────────────────────────────────────────
const QLD_TIF = 67.25;
const QLD_REG: Record<QldCyl, number> = {
  ev_1to3: 303.10,
  "4":     385.45,
  "5to6":  610.30,
  "7to8":  854.70,
  "9to12": 1002.35,
};

// ─────────────────────────────────────────────────────────────────────────────
//  VIC  (2026-27 estimate)
//  Source: https://www.vicroads.vic.gov.au/registration/registration-fees/vehicle-registration-fees
//  Source TAC: https://www.tac.vic.gov.au/about-the-tac/our-organisation/transport-accident-charge
//  Verified: July 2026 (using 2025-26 registration fee $343 as 2026-27 not yet confirmed)
//  TAC charge indexed by CPI 1 July 2026 — estimates apply for standard passenger vehicle
//  EV discount ($100) ended 1 January 2026 — all vehicles now pay same rate
// ─────────────────────────────────────────────────────────────────────────────
const VIC_REGO = 343;
const VIC_TAC: Record<ZoneArea, number> = {
  metro:    552, // 2025-26 was ~$534; ~3% CPI increase estimated
  regional: 432, // 2025-26 was ~$417; ~3% CPI increase estimated
};

// ─────────────────────────────────────────────────────────────────────────────
//  SA  (2026-27 approximate)
//  Source: https://www.sa.gov.au/topics/driving-and-transport/motoring-fees/vehicle-registration-fees
//  Verified: July 2026 — metro 4-cyl sedan confirmed at ~$675 excl. CTP
//  Weight bands are estimates based on confirmed data point — use EzyReg for exact amount
//  CTP cheapest metro private: $262.07 (2026)
// ─────────────────────────────────────────────────────────────────────────────
function saRego(kg: number, zone: ZoneArea): number {
  const metro =
    kg <= 975  ? 520 :
    kg <= 1154 ? 600 :
    kg <= 1500 ? 675 :
                 790;
  return zone === "metro" ? metro : Math.round(metro * 0.85);
}

// ─────────────────────────────────────────────────────────────────────────────
//  WA  (2026-27)
//  Source: https://www.transport.wa.gov.au/licensing/vehicle/license-vehicle/western-australia
//  Verified: July 2026 — $28.64 per 100kg tare + $6.60 prescribed fee confirmed
//  Motor Injury Insurance (MII) is a separate compulsory payment
// ─────────────────────────────────────────────────────────────────────────────
function waLicence(kg: number): number {
  return Math.round(((kg / 100) * 28.64 + 6.60) * 100) / 100;
}

// ─────────────────────────────────────────────────────────────────────────────
//  TAS  (2026 approximate, all-inclusive)
//  Source: https://www.transport.tas.gov.au/fees_forms/registration_fees
//  Verified: July 2026 — includes registration fee + motor tax + MAIB insurance
//  3-cyl or less renewal ~$602 confirmed; 4-cyl range ~$630-660 confirmed; others estimated
//  No EV registration discount in Tasmania
// ─────────────────────────────────────────────────────────────────────────────
const TAS_ANNUAL: Record<TasCyl, number> = {
  "3orless": 602,
  "4":       640,
  "5to6":    720,
  "7plus":   810,
};

// ─────────────────────────────────────────────────────────────────────────────
//  ACT  (July 2024 rates, may be indexed for 2026-27)
//  Source: https://www.accesscanberra.act.gov.au/driving-transport-and-parking/registration/emissions-based-registration
//  Verified: July 2024 structure confirmed; 2026-27 may be slightly higher
//  AAA = zero-emission EV (0g CO2); Category B = most standard petrol and diesel vehicles
//  Includes government fee ($159.40) and administrative fee ($144.20)
// ─────────────────────────────────────────────────────────────────────────────
function actRego(kg: number, isEV: boolean): number {
  if (isEV) {
    // AAA category — zero emission
    return kg <= 975 ? 382 : kg <= 1505 ? 422 : 460;
  }
  // Category B — standard passenger vehicle (131-175g CO2)
  return kg <= 975 ? 404 : kg <= 1505 ? 513 : 623;
}

// ─────────────────────────────────────────────────────────────────────────────
//  NT  (2026-27 approximate)
//  Source: https://nt.gov.au/driving/rego/fees/registration-fees
//  Verified: July 2026 — 1501-3000cc (standard 4-cyl) = $219 confirmed
//  EV and PHEV: free registration until 30 June 2027 (MAC insurance still applies)
// ─────────────────────────────────────────────────────────────────────────────
const NT_REG: Record<NtEngine, number> = {
  to1500cc:       130,
  "1501to3000cc": 219,
  over3000cc:     350,
};

// ─────────────────────────────────────────────────────────────────────────────
//  Main calculator
// ─────────────────────────────────────────────────────────────────────────────
export function calculateRego(state: RegoState, opts: RegoOptions): RegoResult {
  const {
    weightKg  = 1350,
    qldCyl    = "4",
    tasCyl    = "4",
    ntEngine  = "1501to3000cc",
    isEV      = false,
    zone      = "metro",
  } = opts;

  switch (state) {
    case "NSW": {
      const mvt   = nswMVT(weightKg);
      const total = NSW_BASE + mvt;
      return {
        regoTotal:    total,
        ctpIncluded:  false,
        breakdown: [
          { label: "Registration fee",  amount: NSW_BASE },
          { label: "Motor Vehicle Tax", amount: mvt, note: `${weightKg.toLocaleString("en-AU")}kg tare` },
        ],
        ctpRange:     { min: 300, max: 700, label: "CTP insurance (green slip)" },
        evNote:       isEV ? "NSW does not offer a reduced rego fee for electric vehicles." : undefined,
        officialUrl:  "https://www.service.nsw.gov.au/transaction/renew-vehicle-registration",
        officialName: "Service NSW",
      };
    }

    case "VIC": {
      const tac   = VIC_TAC[zone];
      const total = VIC_REGO + tac;
      return {
        regoTotal:   total,
        ctpIncluded: true,
        breakdown: [
          { label: "Registration fee", amount: VIC_REGO },
          {
            label: "TAC charge",
            amount: tac,
            note: zone === "metro" ? "Metro estimate" : "Regional estimate",
          },
        ],
        evNote:      isEV ? "Victoria's $100 EV registration discount ended 1 January 2026. EVs pay the standard rate." : undefined,
        approxNote:  "TAC charge varies by postcode. This is an estimate for a standard passenger vehicle. Use vicroads.vic.gov.au for your exact cost.",
        officialUrl:  "https://www.vicroads.vic.gov.au/registration/registration-fees",
        officialName: "VicRoads",
      };
    }

    case "QLD": {
      const cat   = isEV ? "ev_1to3" : qldCyl;
      const reg   = QLD_REG[cat];
      const total = reg + QLD_TIF;
      return {
        regoTotal:   total,
        ctpIncluded: false,
        breakdown: [
          { label: "Registration fee",        amount: reg },
          { label: "Traffic Improvement Fee", amount: QLD_TIF },
        ],
        ctpRange:     { min: 411, max: 424, label: "CTP insurance" },
        officialUrl:  "https://www.qld.gov.au/transport/registration/fees/cost",
        officialName: "Transport and Main Roads QLD",
      };
    }

    case "SA": {
      const reg = saRego(weightKg, zone);
      return {
        regoTotal:   reg,
        ctpIncluded: false,
        breakdown: [
          {
            label: "Registration fee",
            amount: reg,
            note: zone === "metro" ? "Metro estimate" : "Country estimate",
          },
        ],
        ctpRange:    { min: 262, max: 380, label: "CTP insurance" },
        evNote:      isEV ? "SA does not currently offer a reduced rego fee for electric vehicles." : undefined,
        approxNote:  "This is an estimate based on typical vehicle weight. Use Service SA EzyReg for your exact registration amount.",
        officialUrl:  "https://account.ezyreg.sa.gov.au",
        officialName: "Service SA (EzyReg)",
      };
    }

    case "WA": {
      const lic = waLicence(weightKg);
      return {
        regoTotal:   lic,
        ctpIncluded: false,
        breakdown: [
          {
            label: "Licence fee",
            amount: lic,
            note: `${weightKg.toLocaleString("en-AU")}kg tare`,
          },
        ],
        ctpRange:    { min: 200, max: 450, label: "Motor Injury Insurance (MII)" },
        evNote:      isEV ? "WA does not currently offer a reduced licence fee for electric vehicles. Check transport.wa.gov.au for updates." : undefined,
        officialUrl:  "https://www.transport.wa.gov.au/licensing/vehicle/license-vehicle/western-australia",
        officialName: "Transport WA",
      };
    }

    case "TAS": {
      const cat   = isEV ? "3orless" : tasCyl;
      const total = TAS_ANNUAL[cat];
      return {
        regoTotal:   total,
        ctpIncluded: true,
        breakdown: [
          { label: "Registration + Motor Tax + MAIB", amount: total },
        ],
        evNote:      isEV ? "Tasmania does not offer a reduced registration fee for electric vehicles." : undefined,
        approxNote:  "Annual renewal total includes registration fee, motor tax, and MAIB insurance. Use service.tas.gov.au for your exact amount.",
        officialUrl:  "https://www.service.tas.gov.au",
        officialName: "Service Tasmania",
      };
    }

    case "ACT": {
      const total = actRego(weightKg, isEV);
      return {
        regoTotal:   total,
        ctpIncluded: false,
        breakdown: [
          {
            label: isEV ? "Registration (zero emission AAA)" : "Registration (standard)",
            amount: total,
          },
        ],
        ctpRange:    { min: 500, max: 720, label: "CTP insurance" },
        evNote:      isEV ? "Zero emission vehicles are registered under the AAA category in the ACT and pay significantly reduced fees." : undefined,
        approxNote:  "Based on July 2024 emission based rates. Amounts may be indexed for 2026 to 2027. Use accesscanberra.act.gov.au for current fees.",
        officialUrl:  "https://www.accesscanberra.act.gov.au",
        officialName: "Access Canberra",
      };
    }

    case "NT": {
      const reg = isEV ? 0 : NT_REG[ntEngine];
      return {
        regoTotal:   reg,
        ctpIncluded: false,
        breakdown: [
          {
            label: isEV ? "Registration (EV free rego active)" : "Registration fee",
            amount: reg,
          },
        ],
        ctpRange:    { min: 240, max: 310, label: "MAC insurance (motor accident)" },
        evNote:      isEV
          ? "BEV and PHEV registration is free in the NT until 30 June 2027. MAC insurance still applies separately."
          : undefined,
        approxNote:  "Registration fee is engine displacement based. Use nt.gov.au for exact fees including MAC levy.",
        officialUrl:  "https://nt.gov.au/driving/rego/fees/registration-fees",
        officialName: "NT Government",
      };
    }
  }
}
