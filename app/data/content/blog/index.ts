import type { FC } from 'react';

import BestTimeToBuyACarAustraliaContent from './best-time-to-buy-a-car-australia';
import BestTimeToBuyACarAustraliaKoContent from './best-time-to-buy-a-car-australia-ko';
import CarStampDutyAustraliaExplainedContent from './car-stamp-duty-australia-explained';
import CarStampDutyAustraliaExplainedKoContent from './car-stamp-duty-australia-explained-ko';
import EndOfMonthCarDealsExplainedContent from './end-of-month-car-deals-explained';
import EofyCarTaxBenefitsAustraliaContent from './eofy-car-tax-benefits-australia';
import EofyCarTaxBenefitsAustraliaKoContent from './eofy-car-tax-benefits-australia-ko';
import HowToNegotiateCarPriceAustraliaContent from './how-to-negotiate-car-price-australia';
import HowToNegotiateCarPriceAustraliaKoContent from './how-to-negotiate-car-price-australia-ko';
import LuxuryCarTaxAustraliaContent from './luxury-car-tax-australia';
import LuxuryCarTaxAustraliaKoContent from './luxury-car-tax-australia-ko';
import NovatedLeaseAustraliaContent from './novated-lease-australia';
import NovatedLeaseAustraliaKoContent from './novated-lease-australia-ko';
import WhyBuyDemoCarAustraliaContent from './why-buy-demo-car-australia';
import WhyBuyDemoCarAustraliaKoContent from './why-buy-demo-car-australia-ko';
import WolmalJadongchaDilJongniContent from './wolmal-jadongcha-dil-jongni';

const MAP: Record<string, FC> = {
  'best-time-to-buy-a-car-australia': BestTimeToBuyACarAustraliaContent,
  'best-time-to-buy-a-car-australia-ko': BestTimeToBuyACarAustraliaKoContent,
  'car-stamp-duty-australia-explained': CarStampDutyAustraliaExplainedContent,
  'car-stamp-duty-australia-explained-ko': CarStampDutyAustraliaExplainedKoContent,
  'end-of-month-car-deals-explained': EndOfMonthCarDealsExplainedContent,
  'eofy-car-tax-benefits-australia': EofyCarTaxBenefitsAustraliaContent,
  'eofy-car-tax-benefits-australia-ko': EofyCarTaxBenefitsAustraliaKoContent,
  'how-to-negotiate-car-price-australia': HowToNegotiateCarPriceAustraliaContent,
  'how-to-negotiate-car-price-australia-ko': HowToNegotiateCarPriceAustraliaKoContent,
  'luxury-car-tax-australia': LuxuryCarTaxAustraliaContent,
  'luxury-car-tax-australia-ko': LuxuryCarTaxAustraliaKoContent,
  'novated-lease-australia': NovatedLeaseAustraliaContent,
  'novated-lease-australia-ko': NovatedLeaseAustraliaKoContent,
  'why-buy-demo-car-australia': WhyBuyDemoCarAustraliaContent,
  'why-buy-demo-car-australia-ko': WhyBuyDemoCarAustraliaKoContent,
  'wolmal-jadongcha-dil-jongni': WolmalJadongchaDilJongniContent,
};

export function getBlogContent(slug: string): FC | null {
  return MAP[slug] ?? null;
}
