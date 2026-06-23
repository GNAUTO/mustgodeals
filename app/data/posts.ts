export type Lang = "EN" | "KO" | "ZH";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  lang: Lang;
};

export type NewsItem = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  author: string;
  image: string;
  lang: Lang;
};

// ── Blog posts — newest first ──────────────────────────────────────────────
export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "best-time-to-buy-a-car-australia",
    title: "The Best Time to Buy a Car in Australia",
    excerpt:
      "End of financial year, month end, and just before a new model drops — once you understand how dealerships operate, timing stops being guesswork and starts being strategy.",
    category: "Buying Guide",
    readTime: "7 min read",
    date: "June 2026",
    lang: "EN",
  },
  {
    slug: "best-time-to-buy-a-car-australia-ko",
    title: "호주에서 자동차를 가장 싸게 살 수 있는 시기",
    excerpt:
      "회계연도 마감, 월말, 신형 출시 직전. 호주 딜러십이 움직이는 방식을 이해하면 타이밍은 운이 아니라 전략이 된다.",
    category: "구매 가이드",
    readTime: "7분 읽기",
    date: "2026년 6월",
    lang: "KO",
  },
  {
    slug: "end-of-month-car-deals-explained",
    title: "End of month car deals explained — secrets dealers will never tell you",
    excerpt:
      "Dealers face huge pressure from manufacturers at month end. Here's exactly how that pressure works — and how to use it to negotiate thousands off your next car.",
    category: "Insider Guide",
    readTime: "7 min read",
    date: "June 2026",
    lang: "EN",
  },
  {
    slug: "wolmal-jadongcha-dil-jongni",
    title: "월말 자동차 딜 총정리 — 딜러가 절대 말 안해주는 비밀",
    excerpt:
      "월말 마지막 3~5 영업일, 딜러에게 가장 강한 압박이 걸리는 시간. 이 타이밍과 협상 전술만 알면 수천 달러를 아낄 수 있습니다.",
    category: "한국어 가이드",
    readTime: "8분 읽기",
    date: "2026년 6월",
    lang: "KO",
  },
];

// ── News items — newest first ──────────────────────────────────────────────
export const NEWS_ITEMS: NewsItem[] = [
  {
    slug: "renault-megane-etech-2026-australia",
    title: "2026 Renault Megane E-Tech: A Complete Overhaul for Australia",
    excerpt:
      "The 2026 Megane E-Tech arrives with a 67kWh LFP battery, 500km WLTP range, 165kW DC fast charging, and Google Gemini inside. Australian launch expected first half of 2027.",
    category: "NEWS",
    date: "June 23, 2026",
    author: "MustGoDeals Editorial",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/23664-megane-studiothomascortesi-4.jpg",
    lang: "EN",
  },
  {
    slug: "renault-megane-etech-2026-australia-ko",
    title: "2026 르노 메간 E-Tech: 완전히 달라진 호주 출시 예정 모델",
    excerpt:
      "67kWh LFP 배터리, WLTP 500km, 165kW 급속충전, Google Gemini — 완전히 새로워진 메간 E-Tech가 2027년 상반기 호주에 상륙한다.",
    category: "뉴스",
    date: "2026년 6월 23일",
    author: "MustGoDeals 편집팀",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/23664-megane-studiothomascortesi-4.jpg",
    lang: "KO",
  },
  {
    slug: "kia-pv5-passenger-australia-2027",
    title: "Kia PV5 Passenger: Australia's First Electric People Mover Is Coming",
    excerpt:
      "Kia Australia confirms the PV5 Passenger electric people mover arrives in Q4 2026 — the first EV people mover on the local market, with ~390km range and pricing around $60,000.",
    category: "NEWS",
    date: "June 22, 2026",
    author: "MustGoDeals Editorial",
    image: "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/contents/pbv/5/freecoding/pv5-passenger/Usecase_KV_01_m.jpg",
    lang: "EN",
  },
  {
    slug: "kia-pv5-passenger-australia-2027-ko",
    title: "기아 PV5 패신저, 호주 최초의 전기 미니밴으로 온다",
    excerpt:
      "기아 오스트레일리아가 PV5 패신저 전기 미니밴의 2026년 4분기 현지 출시를 공식 확인했다. 호주 최초의 전기 미니밴으로, 390km 주행거리와 $60,000 안팎의 가격이 예상된다.",
    category: "뉴스",
    date: "2026년 6월 22일",
    author: "MustGoDeals 편집팀",
    image: "https://www.kia.com/content/dam/kwcms/kme/global/en/assets/contents/pbv/5/freecoding/pv5-passenger/Usecase_KV_01_m.jpg",
    lang: "KO",
  },
  {
    slug: "bmw-x5-2027-five-powertrains",
    title: "2027 BMW X5: One SUV, Five Ways to Power It",
    excerpt:
      "Five powertrains in one body — petrol, diesel, PHEV, BEV, and hydrogen. The 2027 X5 is BMW's most ambitious model yet, arriving in Australia late 2026.",
    category: "NEWS",
    date: "June 22, 2026",
    author: "MustGoDeals Editorial",
    image: "https://mediapool.bmwgroup.com/cache/P9/202606/P90645286/P90645286-the-new-bmw-x5-prototype-spartanburg-06-2026-2250px.jpg",
    lang: "EN",
  },
  {
    slug: "bmw-x5-2027-five-powertrains-ko",
    title: "2027 BMW X5: 하나의 SUV, 다섯 가지 파워트레인",
    excerpt:
      "하나의 차체에 다섯 가지 파워트레인. 가솔린, 디젤, PHEV, 순수 전기, 수소까지 — BMW 역사상 가장 복잡한 X5가 2026년 말 호주에 상륙한다.",
    category: "뉴스",
    date: "2026년 6월 22일",
    author: "MustGoDeals 편집팀",
    image: "https://mediapool.bmwgroup.com/cache/P9/202606/P90645286/P90645286-the-new-bmw-x5-prototype-spartanburg-06-2026-2250px.jpg",
    lang: "KO",
  },
  {
    slug: "maserati-grecale-2027-australia",
    title: "Maserati expands Grecale SUV lineup for 2027 Australian market",
    excerpt:
      "Maserati's Grecale receives wider V6 availability and an improved Folgore EV with better range and faster charging for 2027, arriving in Australia early next year.",
    category: "NEWS",
    date: "June 21, 2026",
    author: "MustGoDeals Editorial",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg",
    lang: "EN",
  },
  {
    slug: "maserati-grecale-2027-australia-ko",
    title: "마세라티, 2027 그레칼레 SUV 라인업 호주 시장에 확대 출시",
    excerpt:
      "마세라티 그레칼레가 V6 엔진 확대 적용과 폴고레 EV 성능 개선으로 2027년형 업데이트를 받아, 2027년 초 호주 시장에 출시될 예정이다.",
    category: "뉴스",
    date: "2026년 6월 21일",
    author: "MustGoDeals 편집팀",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/01_new-maserati-grecale.jpg",
    lang: "KO",
  },
  {
    slug: "porsche-taycan-e-shift-2027",
    title: "Porsche Taycan gets simulated gear shifts — and it's more interesting than it sounds",
    excerpt:
      "The 2027 Taycan's E-Shift system simulates an 8-speed DCT with paddle shifters and a virtual rev limiter. Here's what it is, how to get it, and what else changes for MY27.",
    category: "NEWS",
    date: "June 18, 2026",
    author: "MustGoDeals Editorial",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/s26_0407.jpg",
    lang: "EN",
  },
  {
    slug: "porsche-taycan-e-shift-2027-ko",
    title: "포르쉐 타이칸, 가상 변속기를 달다 — 전기차가 기어를 흉내 내는 이유",
    excerpt:
      "2027년형 타이칸의 E-Shift 시스템은 패들 시프터와 가상 레브 리미터를 갖춘 8단 DCT를 시뮬레이션한다. 작동 원리와 MY27의 주요 변경사항을 정리했다.",
    category: "뉴스",
    date: "2026년 6월 18일",
    author: "MustGoDeals 편집팀",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/s26_0407.jpg",
    lang: "KO",
  },
];
