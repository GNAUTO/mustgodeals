import type { FC } from 'react';

import BuyingACarInAustraliaGuideContent from './buying-a-car-in-australia-guide';
import BuyingACarInAustraliaGuideKoContent from './buying-a-car-in-australia-guide-ko';
import AustraliaTollRoadsEtagGuideContent from './australia-toll-roads-etag-guide';
import AustraliaTollRoadsEtagGuideKoContent from './australia-toll-roads-etag-guide-ko';
import NswDrivingFinesSchoolZoneDoubleDemeritContent from './nsw-driving-fines-school-zone-double-demerit';
import NswDrivingFinesSchoolZoneDoubleDemeritKoContent from './nsw-driving-fines-school-zone-double-demerit-ko';
import WhatIsADealerClearanceCarAustraliaContent from './what-is-a-dealer-clearance-car-australia';
import WhatIsADealerClearanceCarAustraliaKoContent from './what-is-a-dealer-clearance-car-australia-ko';
import BusinessCarGstDemoCarAustraliaContent from './business-car-gst-demo-car-australia';
import BusinessCarGstDemoCarAustraliaKoContent from './business-car-gst-demo-car-australia-ko';
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
  'buying-a-car-in-australia-guide': BuyingACarInAustraliaGuideContent,
  'buying-a-car-in-australia-guide-ko': BuyingACarInAustraliaGuideKoContent,
  'australia-toll-roads-etag-guide': AustraliaTollRoadsEtagGuideContent,
  'australia-toll-roads-etag-guide-ko': AustraliaTollRoadsEtagGuideKoContent,
  'nsw-driving-fines-school-zone-double-demerit': NswDrivingFinesSchoolZoneDoubleDemeritContent,
  'nsw-driving-fines-school-zone-double-demerit-ko': NswDrivingFinesSchoolZoneDoubleDemeritKoContent,
  'what-is-a-dealer-clearance-car-australia': WhatIsADealerClearanceCarAustraliaContent,
  'what-is-a-dealer-clearance-car-australia-ko': WhatIsADealerClearanceCarAustraliaKoContent,
  'business-car-gst-demo-car-australia': BusinessCarGstDemoCarAustraliaContent,
  'business-car-gst-demo-car-australia-ko': BusinessCarGstDemoCarAustraliaKoContent,
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
