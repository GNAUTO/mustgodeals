// Stamp duty rates for Australian state and territory motor vehicle purchases
// All rates are for standard passenger vehicles unless noted
// Rates are based on 2025 to 2026 financial year schedules
// Verify rates at each state revenue office before relying on results

export type State = 'NSW' | 'VIC' | 'QLD' | 'SA' | 'WA' | 'TAS' | 'ACT' | 'NT';
export type QldCylinders = 'ev' | '1-4' | '5-6' | '7+';

export interface StateConfig {
  name: string;
  fullName: string;
  revenueOfficeUrl: string;
  revenueOfficeName: string;
  hasGreenToggle: boolean;
  hasCylinderSelect: boolean;
  hasEVToggle: boolean;
}

export const STATE_CONFIG: Record<State, StateConfig> = {
  NSW: {
    name: 'NSW',
    fullName: 'New South Wales',
    revenueOfficeUrl: 'https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/motor-vehicle-duty',
    revenueOfficeName: 'Revenue NSW',
    hasGreenToggle: false,
    hasCylinderSelect: false,
    hasEVToggle: false,
  },
  VIC: {
    name: 'VIC',
    fullName: 'Victoria',
    revenueOfficeUrl: 'https://www.sro.vic.gov.au/motor-vehicle-duty',
    revenueOfficeName: 'State Revenue Office Victoria',
    hasGreenToggle: true,
    hasCylinderSelect: false,
    hasEVToggle: false,
  },
  QLD: {
    name: 'QLD',
    fullName: 'Queensland',
    revenueOfficeUrl: 'https://www.qld.gov.au/transport/registration/fees/duty',
    revenueOfficeName: 'Queensland Transport and Main Roads',
    hasGreenToggle: false,
    hasCylinderSelect: true,
    hasEVToggle: false,
  },
  SA: {
    name: 'SA',
    fullName: 'South Australia',
    revenueOfficeUrl: 'https://www.revenuesa.sa.gov.au/stamp-duty-vehicles',
    revenueOfficeName: 'RevenueSA',
    hasGreenToggle: false,
    hasCylinderSelect: false,
    hasEVToggle: false,
  },
  WA: {
    name: 'WA',
    fullName: 'Western Australia',
    revenueOfficeUrl: 'https://www.wa.gov.au/organisation/department-of-finance/vehicle-licence-duty',
    revenueOfficeName: 'RevenueWA',
    hasGreenToggle: false,
    hasCylinderSelect: false,
    hasEVToggle: false,
  },
  TAS: {
    name: 'TAS',
    fullName: 'Tasmania',
    revenueOfficeUrl: 'https://www.sro.tas.gov.au/motor-vehicle-duty',
    revenueOfficeName: 'State Revenue Office Tasmania',
    hasGreenToggle: false,
    hasCylinderSelect: false,
    hasEVToggle: false,
  },
  ACT: {
    name: 'ACT',
    fullName: 'Australian Capital Territory',
    revenueOfficeUrl: 'https://www.revenue.act.gov.au/duties/motor-vehicle-duty',
    revenueOfficeName: 'ACT Revenue Office',
    hasGreenToggle: false,
    hasCylinderSelect: false,
    hasEVToggle: true,
  },
  NT: {
    name: 'NT',
    fullName: 'Northern Territory',
    revenueOfficeUrl: 'https://treasury.nt.gov.au/dtf/territory-revenue-office/stamp-duty-on-motor-vehicles',
    revenueOfficeName: 'Territory Revenue Office',
    hasGreenToggle: false,
    hasCylinderSelect: false,
    hasEVToggle: false,
  },
};

export interface CalcResult {
  duty: number;
  breakdown: string;
}

// NSW — Revenue NSW
// Source: https://www.revenue.nsw.gov.au/taxes-duties-levies-royalties/motor-vehicle-duty
// Verified: October 2025
// Up to $44,999: $3 per $100 or part thereof
// $45,000 and over: $1,350 base plus $5 per $100 or part thereof on amount above $45,000
export function calcNSW(price: number): CalcResult {
  if (price < 45000) {
    const duty = Math.ceil(price / 100) * 3;
    return { duty, breakdown: '3% of vehicle value' };
  }
  const duty = 1350 + Math.ceil((price - 45000) / 100) * 5;
  return { duty, breakdown: '$1,350 base then 5% on amount above $45,000' };
}

// VIC — State Revenue Office Victoria
// Source: https://www.sro.vic.gov.au/about-us/rates-and-statistics/current-rates/motor-vehicle-duty-current-rates
// Verified: July 2026 (rates effective 1 July 2026)
// Green passenger cars (combined CO2 at or under 120g/km): $8.40 per $200 flat rate
// Standard passenger cars: tiered $8.40 to $18.00 per $200 based on value
// Tier thresholds: $80,809 / $100,000 / $150,000
export function calcVIC(price: number, isGreen: boolean): CalcResult {
  const seg = (amount: number, rate: number) => Math.ceil(amount / 200) * rate;
  const T1 = 80809, T2 = 100000, T3 = 150000;

  if (isGreen) {
    return { duty: seg(price, 8.40), breakdown: '$8.40 per $200 (green or low emission rate)' };
  }

  let duty: number;
  let breakdown: string;
  if (price <= T1) {
    duty = seg(price, 8.40);
    breakdown = '$8.40 per $200 of vehicle value';
  } else if (price <= T2) {
    duty = seg(T1, 8.40) + seg(price - T1, 10.40);
    breakdown = '$8.40 per $200 to $80,809 then $10.40 per $200';
  } else if (price <= T3) {
    duty = seg(T1, 8.40) + seg(T2 - T1, 10.40) + seg(price - T2, 14.00);
    breakdown = 'Tiered $8.40 to $14.00 per $200 based on value';
  } else {
    duty = seg(T1, 8.40) + seg(T2 - T1, 10.40) + seg(T3 - T2, 14.00) + seg(price - T3, 18.00);
    breakdown = 'Tiered $8.40 to $18.00 per $200 based on value';
  }
  return { duty, breakdown };
}

// QLD — Queensland Transport and Main Roads
// Source: https://www.qld.gov.au/transport/registration/fees/duty/rates
// Verified: March 2023 (rates confirmed current as of July 2026)
// Rate depends on cylinder count; EV and hybrid vehicles receive a lower rate
// Vehicles over $100,000: higher rate applies to the full dutiable value
export function calcQLD(price: number, cylinders: QldCylinders): CalcResult {
  const rateMap: Record<QldCylinders, { low: number; high: number; label: string }> = {
    'ev':  { low: 2.00, high: 4.00, label: '$2 per $100 (EV or hybrid)' },
    '1-4': { low: 3.00, high: 5.00, label: '$3 per $100 (4 cylinders or fewer)' },
    '5-6': { low: 3.50, high: 5.50, label: '$3.50 per $100 (5 or 6 cylinders)' },
    '7+':  { low: 4.00, high: 6.00, label: '$4 per $100 (7 or more cylinders)' },
  };
  const r = rateMap[cylinders];
  const isOver100k = price > 100000;
  const rate = isOver100k ? r.high : r.low;
  const duty = Math.ceil(price / 100) * rate;
  const breakdown = isOver100k
    ? r.label.replace(r.low.toString(), r.high.toString()) + ' (vehicle over $100,000)'
    : r.label;
  return { duty, breakdown };
}

// SA — RevenueSA
// Source: https://revenuesa.sa.gov.au/stamp-duty-vehicles/rates
// Reference: RevenueSA official page structure confirmed via sa.gov.au and Veercal (April 2026)
// Progressive brackets for non-commercial passenger vehicles
// Up to $1,000: $1 per $100 (minimum $5)
// $1,001 to $2,000: $10 plus $2 per $100 above $1,000
// $2,001 to $3,000: $30 plus $3 per $100 above $2,000
// Over $3,000: $60 plus $4 per $100 above $3,000
export function calcSA(price: number): CalcResult {
  if (price <= 1000) {
    const duty = Math.max(5, Math.ceil(price / 100) * 1);
    return { duty, breakdown: '$1 per $100 (minimum $5)' };
  }
  if (price <= 2000) {
    const duty = 10 + Math.ceil((price - 1000) / 100) * 2;
    return { duty, breakdown: '$10 base then $2 per $100 above $1,000' };
  }
  if (price <= 3000) {
    const duty = 30 + Math.ceil((price - 2000) / 100) * 3;
    return { duty, breakdown: '$30 base then $3 per $100 above $2,000' };
  }
  const duty = 60 + Math.ceil((price - 3000) / 100) * 4;
  return { duty, breakdown: '$60 base then $4 per $100 above $3,000' };
}

// WA — RevenueWA (Department of Finance)
// Source: https://www.wa.gov.au/organisation/department-of-treasury-and-finance/vehicle-licence-duty
// Verified: February 2026
// Up to $25,000: 2.75% of dutiable value
// $25,001 to $50,000: sliding scale from 2.75% to 6.5% applied to full value
//   Formula: R = round(2.75 + ((value - 25000) / 6666.66), 2) percent
// Over $50,000: 6.5% of dutiable value
export function calcWA(price: number): CalcResult {
  if (price <= 25000) {
    const duty = Math.round(price * 0.0275 * 100) / 100;
    return { duty, breakdown: '2.75% of vehicle value' };
  }
  if (price <= 50000) {
    const rate = Math.round((2.75 + (price - 25000) / 6666.66) * 100) / 100;
    const duty = Math.round(price * rate / 100 * 100) / 100;
    return { duty, breakdown: `${rate.toFixed(2)}% sliding rate (2.75% to 6.5% range)` };
  }
  const duty = Math.round(price * 0.065 * 100) / 100;
  return { duty, breakdown: '6.5% of vehicle value' };
}

// TAS — State Revenue Office Tasmania
// Source: https://www.sro.tas.gov.au/motor-vehicle-duty/rates-of-duty
// Also: https://www.transport.tas.gov.au/fees_forms/registration_fees/accordion/duty_rates
// Verified via official SRO Tasmania (current rates)
// Standard vehicles at or under 4.5t GVM including passenger cars: $3 per $100 (minimum $20)
export function calcTAS(price: number): CalcResult {
  const duty = Math.max(20, Math.ceil(price / 100) * 3);
  return { duty, breakdown: '3% of vehicle value (minimum $20)' };
}

// ACT — ACT Revenue Office
// Source: https://www.revenue.act.gov.au/duties/motor-vehicle-duty
// Accessed: July 2026. Note: page shows rates effective from February 2027.
// Verify current rates at revenue.act.gov.au before purchase.
// Emissions-based tiered system with three price brackets
// EV / zero emission (0 g/km): lowest rate band
// Standard (Band B, 131 to 175 g/km): typical petrol or diesel vehicle
// Bracket thresholds: $45,000 and $80,000
export function calcACT(price: number, isEV: boolean): CalcResult {
  if (isEV) {
    if (price <= 45000) {
      const duty = Math.ceil(price / 100) * 2.50;
      return { duty, breakdown: '$2.50 per $100 (zero emission vehicle rate)' };
    }
    if (price <= 80000) {
      const duty = 1125 + Math.ceil((price - 45000) / 100) * 4.00;
      return { duty, breakdown: '$1,125 base then $4.00 per $100 above $45,000 (EV rate)' };
    }
    const duty = 2525 + Math.ceil((price - 80000) / 100) * 8.00;
    return { duty, breakdown: '$2,525 base then $8.00 per $100 above $80,000 (EV rate)' };
  }

  if (price <= 45000) {
    const duty = Math.ceil(price / 100) * 3.25;
    return { duty, breakdown: '$3.25 per $100 (standard vehicle)' };
  }
  if (price <= 80000) {
    const duty = 1462.50 + Math.ceil((price - 45000) / 100) * 5.59;
    return { duty, breakdown: '$1,462.50 base then $5.59 per $100 above $45,000' };
  }
  const duty = 3419 + Math.ceil((price - 80000) / 100) * 8.00;
  return { duty, breakdown: '$3,419 base then $8.00 per $100 above $80,000' };
}

// NT — Territory Revenue Office
// Source: https://treasury.nt.gov.au/dtf/territory-revenue-office/stamp-duty-on-motor-vehicles
// Verified via NT Government search results (current rates)
// Flat rate: $3 per $100 of dutiable value
export function calcNT(price: number): CalcResult {
  const duty = Math.ceil(price / 100) * 3;
  return { duty, breakdown: '3% of vehicle value (flat rate)' };
}

export interface CalcOptions {
  isGreen?: boolean;
  isEV?: boolean;
  cylinders?: QldCylinders;
}

export function calculateDuty(state: State, price: number, options: CalcOptions): CalcResult {
  switch (state) {
    case 'NSW': return calcNSW(price);
    case 'VIC': return calcVIC(price, options.isGreen ?? false);
    case 'QLD': return calcQLD(price, options.cylinders ?? '1-4');
    case 'SA':  return calcSA(price);
    case 'WA':  return calcWA(price);
    case 'TAS': return calcTAS(price);
    case 'ACT': return calcACT(price, options.isEV ?? false);
    case 'NT':  return calcNT(price);
  }
}

export const STATES: State[] = ['NSW', 'VIC', 'QLD', 'SA', 'WA', 'TAS', 'ACT', 'NT'];
