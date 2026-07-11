export type TrackerBrand = {
  id: string;
  name: string;
  offerUrl: string;
};

// Australian manufacturer offer pages.
// Verify robots.txt at each URL before the first run.
// The collect-prices cron checks robots.txt at runtime and skips any
// brand where the path is disallowed for our user agent.
export const TRACKER_BRANDS: TrackerBrand[] = [
  {
    id: "toyota",
    name: "Toyota",
    offerUrl: "https://www.toyota.com.au/offers",
  },
  {
    id: "kia",
    name: "Kia",
    offerUrl: "https://www.kia.com/au/offers.html",
  },
  {
    id: "hyundai",
    name: "Hyundai",
    offerUrl: "https://www.hyundai.com/en-AU/offers",
  },
  {
    id: "mazda",
    name: "Mazda",
    offerUrl: "https://www.mazda.com.au/finance/current-offers",
  },
  {
    id: "mitsubishi",
    name: "Mitsubishi",
    offerUrl: "https://www.mitsubishi-motors.com.au/finance-insurance/current-offers",
  },
  {
    id: "mg",
    name: "MG",
    offerUrl: "https://www.mgmotor.com.au/offers",
  },
  {
    id: "gwm",
    name: "GWM",
    offerUrl: "https://www.gwm.com.au/offers",
  },
];
