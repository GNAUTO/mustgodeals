export type Lang = "EN" | "KO" | "ZH";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
  lang: Lang;
  pinned?: boolean;
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
    slug: "what-is-a-dealer-clearance-car-australia",
    title: "What Is a Dealer Clearance Car and Why Is It Cheaper?",
    excerpt:
      "Dealer clearance cars in Australia explained. What they are, why they're cheaper than new, and how to find the best deals on demo and clearance stock near you.",
    category: "Buying Guide",
    readTime: "6 min read",
    date: "July 2, 2026",
    lang: "EN",
  },
  {
    slug: "what-is-a-dealer-clearance-car-australia-ko",
    title: "딜러 급처분 차량이란 무엇이고 왜 더 저렴한가?",
    excerpt:
      "호주 딜러 급처분 차량의 모든 것. 데모카, 런아웃 모델, 전 법인차의 차이와 왜 신차보다 저렴한지, 그리고 좋은 딜을 찾는 방법까지.",
    category: "구매 가이드",
    readTime: "6분",
    date: "2026년 7월 2일",
    lang: "KO",
  },
  {
    slug: "business-car-gst-demo-car-australia",
    title: "Running a Business in Australia? Here's What a Demo Car Actually Saves You",
    excerpt:
      "A practical breakdown of how buying a demo car under an ABN compares to a new car, including GST claims, depreciation, and real numbers.",
    category: "Business",
    readTime: "5 min read",
    date: "June 30, 2026",
    lang: "EN",
  },
  {
    slug: "business-car-gst-demo-car-australia-ko",
    title: "사업자라면 알아야 할 것, 데모카로 절약되는 실제 금액",
    excerpt:
      "ABN으로 데모카를 구매했을 때 신차 대비 어떤 차이가 생기는지, GST 환급부터 감가상각까지 실제 숫자로 풀어본다.",
    category: "비즈니스",
    readTime: "5분",
    date: "2026년 6월 30일",
    lang: "KO",
  },
  {
    slug: "luxury-car-tax-australia",
    title: "Luxury Car Tax in Australia — What It Is and How It Affects Your Next Car Purchase",
    excerpt:
      "LCT can add thousands to the cost of a premium vehicle. Here's how the 2025–26 thresholds work, how to calculate your exposure, and how a demo car can legally eliminate the tax entirely.",
    category: "Buying Guide",
    readTime: "8 min read",
    date: "June 26, 2026",
    lang: "EN",
  },
  {
    slug: "luxury-car-tax-australia-ko",
    title: "호주 럭셔리 카 택스(LCT), 얼마나 내야 할까? 프리미엄 차 사기 전에 꼭 알아야 할 것",
    excerpt:
      "아우디, BMW, 메르세데스 구매 전 반드시 알아야 할 LCT. 2025~2026 기준 한도, 실제 세금 계산법, 데모카로 세금을 줄이는 합법적인 방법까지 정리했다.",
    category: "구매 가이드",
    readTime: "8분",
    date: "2026년 6월 26일",
    lang: "KO",
  },
  {
    slug: "novated-lease-australia",
    title: "What Is a Novated Lease — And Is It Worth It in Australia?",
    excerpt:
      "A novated lease lets you pay for a car with pre-tax salary. Here's exactly how it works, how much you can save, and whether it's the right move for your situation.",
    category: "Buying Guide",
    readTime: "8 min read",
    date: "June 25, 2026",
    lang: "EN",
  },
  {
    slug: "novated-lease-australia-ko",
    title: "노베이티드 리스, 진짜 이득일까? 호주 직장인이라면 알아야 할 모든 것",
    excerpt:
      "세전 급여 공제, FBT, 전기차 면제 혜택까지 — 노베이티드 리스가 내 상황에 맞는지 판단하는 가이드.",
    category: "구매 가이드",
    readTime: "8분",
    date: "2026년 6월 25일",
    lang: "KO",
  },
  {
    slug: "car-stamp-duty-australia-explained",
    title: "What Is Stamp Duty on a Car in Australia? The Hidden Cost Most Buyers Don't See Coming",
    excerpt:
      "Stamp duty is a state government tax applied to every car purchase in Australia — and the rates vary significantly by state. Here's what you need to know before you buy.",
    category: "Buying Guide",
    readTime: "6 min read",
    date: "June 24, 2026",
    lang: "EN",
  },
  {
    slug: "car-stamp-duty-australia-explained-ko",
    title: "호주에서 차 살 때 스탬프 듀티란? — 아무도 알려주지 않는 숨겨진 비용",
    excerpt:
      "주마다 세율이 다르다. 같은 차라도 어느 주에서 사느냐에 따라 수백에서 수천 달러 차이가 날 수 있다.",
    category: "구매 가이드",
    readTime: "6분",
    date: "2026년 6월 24일",
    lang: "KO",
  },
  {
    slug: "eofy-car-tax-benefits-australia",
    title: "Should You Buy a Car Before EOFY? A Guide for Australian ABN Holders",
    excerpt:
      "For Australian business owners with an ABN, buying a car before 30 June can deliver real tax advantages — but the rules are more nuanced than most people realise.",
    category: "Buying Guide",
    readTime: "7 min read",
    date: "June 24, 2026",
    lang: "EN",
  },
  {
    slug: "eofy-car-tax-benefits-australia-ko",
    title: "회계연도 마감 전에 차를 사면 세금 혜택이 있을까? — ABN 사업자를 위한 가이드",
    excerpt:
      "Instant Asset Write-Off, Car Limit, 업무용 비율 — EOFY 전 차량 구매 시 실제로 적용되는 세금 규정을 정리했다.",
    category: "구매 가이드",
    readTime: "7분",
    date: "2026년 6월 24일",
    lang: "KO",
  },
  {
    slug: "why-buy-demo-car-australia",
    title: "Why Buying a Demo Car in Australia Makes More Sense Than You Think",
    excerpt:
      "Near-new quality, full manufacturer warranty, and prices 10–30% below new. Demo cars are one of the best value plays in the Australian car market — especially right now.",
    category: "Buying Guide",
    readTime: "7 min read",
    date: "June 24, 2026",
    lang: "EN",
    pinned: true,
  },
  {
    slug: "why-buy-demo-car-australia-ko",
    title: "호주에서 데모카를 사야 하는 이유 — 신차보다 현명한 선택",
    excerpt:
      "신차와 거의 같은 퀄리티에 가격은 10~30% 낮다. 지금 회계연도 마감 시즌, 데모카 매물이 연중 가장 많이 나오는 시기다.",
    category: "구매 가이드",
    readTime: "7분",
    date: "2026년 6월 24일",
    lang: "KO",
    pinned: true,
  },
  {
    slug: "how-to-negotiate-car-price-australia",
    title: "How to Negotiate a Car Price at an Australian Dealership — A Practical Guide That Actually Works",
    excerpt:
      "The price on the sticker is almost never the final price. Here's what to research beforehand, what not to say in the showroom, and the tactics that actually get dealers to move.",
    category: "Buying Guide",
    readTime: "8 min read",
    date: "June 23, 2026",
    lang: "EN",
  },
  {
    slug: "how-to-negotiate-car-price-australia-ko",
    title: "호주 딜러십에서 자동차 가격을 깎는 법 — 현장에서 통하는 실전 가이드",
    excerpt:
      "쇼룸에 들어서기 전 준비해야 할 것들, 절대 먼저 말하면 안 되는 것, 딜러를 움직이게 만드는 협상 전술까지.",
    category: "구매 가이드",
    readTime: "8분",
    date: "2026년 6월 23일",
    lang: "KO",
  },
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
    slug: "xpeng-mona-l03-australia-2027",
    title: "XPeng Mona L03 Confirmed for Australia as Brand Relaunches",
    excerpt:
      "XPeng's Mona L03 electric SUV is confirmed for Australia in 2027. Full specs inside, plus what the TrueEV cashback dispute means for potential buyers.",
    category: "NEWS",
    date: "July 7, 2026",
    author: "MustGoDeals Editorial",
    image: "/images/news/xpeng-mona-l03/xpeng-mona-l03.jpg",
    lang: "EN",
  },
  {
    slug: "xpeng-mona-l03-australia-2027-ko",
    title: "XPeng 모나 L03 호주 출시 확정: 스펙, 가격, TrueEV 분쟁까지",
    excerpt:
      "XPeng 모나 L03가 2026년 말~2027년 초 호주 출시가 유력해졌다. 쿠페형 전기 SUV 전체 스펙과 함께 TrueEV 분쟁 및 $5,000 캐시백 미지급 이슈도 정리했다.",
    category: "뉴스",
    date: "2026년 7월 7일",
    author: "MustGoDeals 편집팀",
    image: "/images/news/xpeng-mona-l03/xpeng-mona-l03.jpg",
    lang: "KO",
  },
  {
    slug: "australia-new-road-rules-july-2026",
    title: "New Road Rules July 2026: What Changed in Australia",
    excerpt:
      "New road rules are now in effect across Australia. Queensland cracks down on e-scooters, SA hikes speeding fines, and NSW cuts its weekly toll cap.",
    category: "NEWS",
    date: "July 4, 2026",
    author: "MustGoDeals Editorial",
    image: "/images/news/australia-speed-sign-60kmh.jpg",
    lang: "EN",
  },
  {
    slug: "australia-new-road-rules-july-2026-ko",
    title: "2026년 7월 호주 신규 도로법규 총정리: 주별 변경사항",
    excerpt:
      "2026년 7월 1일부터 호주 전역에서 새 도로법규가 시행됐다. QLD 전동킥보드 대대적 규제, SA 과속 벌금 인상, NSW 통행료 상한 인하까지 주별로 정리했다.",
    category: "뉴스",
    date: "2026년 7월 4일",
    author: "MustGoDeals 편집팀",
    image: "/images/news/australia-speed-sign-60kmh.jpg",
    lang: "KO",
  },
  {
    slug: "ferrari-12cilindri-manuale-manual-v12",
    title: "Ferrari 12Cilindri Manuale: 820hp V12 With a Manual Gearbox",
    excerpt:
      "Ferrari's 12Cilindri Manuale pairs an 820hp naturally aspirated V12 with a by-wire 6-speed open-gate manual. Limited to 1,499 units at €590,000.",
    category: "NEWS",
    date: "July 4, 2026",
    author: "MustGoDeals Editorial",
    image: "/images/news/ferrari-12cilindri-front.jpg",
    lang: "EN",
  },
  {
    slug: "ferrari-12cilindri-manuale-manual-v12-ko",
    title: "페라리 12칠린드리 마누알레: 820마력 V12에 수동 변속기를 달다",
    excerpt:
      "페라리가 12칠린드리 마누알레를 공개했다. 개방형 게이트 6단 수동 변속기를 탑재하되, 실제로는 바이-와이어 방식으로 8단 DCT를 조작하는 구조. 1,499대 한정, €590,000~.",
    category: "뉴스",
    date: "2026년 7월 4일",
    author: "MustGoDeals 편집팀",
    image: "/images/news/ferrari-12cilindri-front.jpg",
    lang: "KO",
  },
  {
    slug: "li-mega-electric-china-australia",
    title: "Li Auto Mega Electric MPV Targets Right-Hand Drive Markets",
    excerpt:
      "Li Auto has confirmed RHD production for the Mega electric MPV. Australia isn't on the official list, but the specs and tariff environment say otherwise.",
    category: "NEWS",
    date: "July 4, 2026",
    author: "MustGoDeals Editorial",
    image: "/images/news/li-auto-mega-002.jpg",
    lang: "EN",
  },
  {
    slug: "li-mega-electric-china-australia-ko",
    title: "리 오토 메가, 우핸들 버전 생산 확정 — 호주 진출 가능성은?",
    excerpt:
      "리 오토가 메가 전기 MPV의 우핸들 버전 생산을 공식 확정했다. 호주는 리스트에 없지만, 스펙과 무관세 환경을 보면 얘기가 달라진다.",
    category: "뉴스",
    date: "2026년 7월 4일",
    author: "MustGoDeals 편집팀",
    image: "/images/news/li-auto-mega-002.jpg",
    lang: "KO",
  },
  {
    slug: "fiat-topolino-vatican-city-pope-2026",
    title: "The Pope Just Ordered 20 Fiat Topolinos for Vatican City",
    excerpt:
      "Vatican City has taken delivery of 20 all-electric Fiat Topolinos as part of its Ecological Conversion 2030 programme, making the tiny nation one of the few places where a Topolino can cross the entire country on a single charge.",
    category: "NEWS",
    date: "July 3, 2026",
    author: "MustGoDeals Editorial",
    image: "https://www.topgear.com/sites/default/files/2026/07/fiat-governorate-of-the-vatican-city-state-for-sustainable-micromobility-credit-by-governatorato-s-c-v.jpg",
    lang: "EN",
  },
  {
    slug: "fiat-topolino-vatican-city-pope-2026-ko",
    title: "교황청이 피아트 토폴리노 20대를 주문했다",
    excerpt:
      "바티칸 시국이 생태적 전환 2030 프로그램의 일환으로 전기 소형차 피아트 토폴리노 20대를 도입했다. 세계에서 가장 작은 나라를 한 번 충전으로 여러 바퀴 돌 수 있는 이동수단이다.",
    category: "뉴스",
    date: "2026년 7월 3일",
    author: "MustGoDeals 편집팀",
    image: "https://www.topgear.com/sites/default/files/2026/07/fiat-governorate-of-the-vatican-city-state-for-sustainable-micromobility-credit-by-governatorato-s-c-v.jpg",
    lang: "KO",
  },
  {
    slug: "ferrari-849-testarossa-frank-stephenson-opinion",
    title: "The Ferrari 849 Testarossa Looks the Part But Misses What Made the Original Great",
    excerpt:
      "Former Ferrari designer Frank Stephenson says the new 849 Testarossa had big shoes to fill and hasn't filled them, arguing the original's iconic design came from function rather than styling for its own sake.",
    category: "NEWS",
    date: "July 2, 2026",
    author: "MustGoDeals Editorial",
    image: "https://www.topgear.com/sites/default/files/2026/05/Ferrari%20849%20Testarossa.jpg?w=976&h=549",
    lang: "EN",
  },
  {
    slug: "ferrari-849-testarossa-frank-stephenson-opinion-ko",
    title: "페라리 849 테스타로사, 오리지널의 무게를 감당하지 못했다",
    excerpt:
      "전직 페라리 디자이너 프랭크 스티븐슨이 신형 849 테스타로사를 혹평했다. 오리지널의 아이코닉한 디자인은 기능에서 비롯된 것이었는데, 신형은 그 본질을 놓쳤다는 주장이다.",
    category: "뉴스",
    date: "2026년 7월 2일",
    author: "MustGoDeals 편집팀",
    image: "https://www.topgear.com/sites/default/files/2026/05/Ferrari%20849%20Testarossa.jpg?w=976&h=549",
    lang: "KO",
  },
  {
    slug: "cupra-raval-2027-australia-ev",
    title: "Cupra Raval Electric Hatchback Confirmed for Australia in 2027",
    excerpt:
      "Cupra has locked in the Raval electric hatchback for Australian roads, with pricing expected to start below $40,000 and a range of up to 440km on the larger battery option.",
    category: "NEWS",
    date: "July 2, 2026",
    author: "MustGoDeals Editorial",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/0aa62438-5756-5c5b-a0d9-3511a7850000",
    lang: "EN",
  },
  {
    slug: "cupra-raval-2027-australia-ev-ko",
    title: "쿠프라 라발 전기 해치백, 2027년 호주 출시 확정",
    excerpt:
      "쿠프라가 라발 전기 해치백의 호주 출시를 공식 확정했다. 가격은 $40,000 이하에서 시작할 것으로 예상되며, 상위 배터리 모델은 최대 440km 주행이 가능하다.",
    category: "뉴스",
    date: "2026년 7월 2일",
    author: "MustGoDeals 편집팀",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/0aa62438-5756-5c5b-a0d9-3511a7850000",
    lang: "KO",
  },
  {
    slug: "peugeot-australia-distribution-change-2026",
    title: "Peugeot's Australian Importer Is Walking Away After Nearly 100 Years",
    excerpt:
      "Inchcape has decided not to renew its distribution partnership with Peugeot in Australia, leaving the brand's future in local hands uncertain despite Stellantis vowing to keep it alive.",
    category: "NEWS",
    date: "July 1, 2026",
    author: "MustGoDeals Editorial",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/7522076d-30b2-59d8-8262-7b8934550000",
    lang: "EN",
  },
  {
    slug: "peugeot-australia-distribution-change-2026-ko",
    title: "푸조 호주 수입사 결별 선언, 100년 가까운 파트너십 종료",
    excerpt:
      "푸조의 호주 독립 수입사 인치케이프가 프랑스 브랜드와의 유통 계약을 연장하지 않기로 결정했다. 스텔란티스는 브랜드의 호주 존속을 약속했지만, 향후 유통 구조는 아직 불투명하다.",
    category: "뉴스",
    date: "2026년 7월 1일",
    author: "MustGoDeals 편집팀",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/7522076d-30b2-59d8-8262-7b8934550000",
    lang: "KO",
  },
  {
    slug: "bmw-x5-2027-five-powertrains-australia",
    title: "2027 BMW X5 Revealed With Five Powertrain Options, Including 845km Electric iX5",
    excerpt:
      "The all-new fifth-generation BMW X5 arrives in Australia in late 2026 with petrol, diesel, plug-in hybrid and electric power on offer, topped by an iX5 EV with up to 845km of range.",
    category: "NEWS",
    date: "July 1, 2026",
    author: "MustGoDeals Editorial",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/4d9f987a-6096-582c-a04d-183697750000",
    lang: "EN",
  },
  {
    slug: "bmw-x5-2027-five-powertrains-australia-ko",
    title: "2027 BMW X5 공개, 5가지 파워트레인에 845km 주행 가능한 iX5 전기차까지",
    excerpt:
      "5세대 신형 BMW X5가 2026년 말 호주에 상륙한다. 가솔린, 디젤, 플러그인 하이브리드, 전기차까지 동일 플랫폼으로 제공하며, iX5 전기차는 최대 845km 주행 가능하다고 밝혔다.",
    category: "뉴스",
    date: "2026년 7월 1일",
    author: "MustGoDeals 편집팀",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/4d9f987a-6096-582c-a04d-183697750000",
    lang: "KO",
  },
  {
    slug: "nsw-toll-cap-rego-discount-2026",
    title: "Sydney Toll Cap Drops to $50, Car Rego Gets $100 Cheaper from September",
    excerpt:
      "The 2026-27 NSW state budget cuts the weekly Sydney toll cap from $60 to $50 and slashes vehicle registration fees by $100, with both changes designed to ease cost of living pressure.",
    category: "NEWS",
    date: "June 30, 2026",
    author: "MustGoDeals Editorial",
    image: "https://www.mynrma.com.au/-/media/nrmaheadless/open-road/2026/news/budget-news/toll-road-640x360.jpg",
    lang: "EN",
  },
  {
    slug: "nsw-toll-cap-rego-discount-2026-ko",
    title: "시드니 톨비 주당 $50로 인하, 9월부터 등록비도 $100 할인",
    excerpt:
      "2026-27 NSW 주 예산안에서 시드니 톨 주간 상한이 $60에서 $50로 인하되고, 차량 등록비도 $100 줄어든다. 생활비 부담 완화가 핵심 목표다.",
    category: "뉴스",
    date: "2026년 6월 30일",
    author: "MustGoDeals 편집팀",
    image: "https://www.mynrma.com.au/-/media/nrmaheadless/open-road/2026/news/budget-news/toll-road-640x360.jpg",
    lang: "KO",
  },
  {
    slug: "jas-tensei-honda-nsx-restomod",
    title: "Meet the Tensei, a 420bhp Reborn Honda NSX Built by Honda's Own Race Partner",
    excerpt:
      "Italian outfit JAS, a longtime Honda racing partner, has unveiled the Tensei, a full restomod of the original Honda NSX with Pininfarina styling and a 420bhp Judd-built V6.",
    category: "NEWS",
    date: "June 30, 2026",
    author: "MustGoDeals Editorial",
    image: "https://www.topgear.com/sites/default/files/images/big-read/carousel/2026/06/b710d556570aa46ccb60b98c44f49bbd/NSX%20Resurrection%20%2811%29.jpg",
    lang: "EN",
  },
  {
    slug: "jas-tensei-honda-nsx-restomod-ko",
    title: "혼다 공식 파트너가 만든 420마력 NSX 복원판, 텐세이 공개",
    excerpt:
      "30년간 혼다의 레이싱 파트너였던 이탈리아 업체 JAS가 오리지널 혼다 NSX를 기반으로 한 완전 복원형 레스토모드 텐세이를 공개했다. 피닌파리나 디자인에 저드가 손본 420마력 V6 엔진을 탑재했다.",
    category: "뉴스",
    date: "2026년 6월 30일",
    author: "MustGoDeals 편집팀",
    image: "https://www.topgear.com/sites/default/files/images/big-read/carousel/2026/06/b710d556570aa46ccb60b98c44f49bbd/NSX%20Resurrection%20%2811%29.jpg",
    lang: "KO",
  },
  {
    slug: "gwm-haval-h10-flagship-suv-2027",
    title: "GWM's New Flagship SUV Finally Has a Name, and It's Bigger Than a LandCruiser",
    excerpt:
      "GWM has revealed the full design and interior of its new Haval H10 flagship SUV, a plug-in hybrid model built on the brand's new modular platform and sized larger than a Toyota LandCruiser 300.",
    category: "NEWS",
    date: "June 30, 2026",
    author: "MustGoDeals Editorial",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/cbd076b7-da38-529f-8084-c2e74c150000",
    lang: "EN",
  },
  {
    slug: "gwm-haval-h10-flagship-suv-2027-ko",
    title: "GWM 새 플래그십 SUV 정체 공개, 크기는 랜드크루저보다 크다",
    excerpt:
      "GWM이 새 플래그십 SUV 할발 H10의 전체 디자인과 실내를 공개했다. 새로운 모듈러 플랫폼을 기반으로 한 플러그인 하이브리드 모델로, 토요타 랜드크루저 300보다 큰 차체를 갖췄다.",
    category: "뉴스",
    date: "2026년 6월 30일",
    author: "MustGoDeals 편집팀",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/cbd076b7-da38-529f-8084-c2e74c150000",
    lang: "KO",
  },
  {
    slug: "nsw-police-high-performance-fleet-2026",
    title: "NSW Police to Buy Mystery High-Performance Fleet as Part of $94.3M Armed Response Command",
    excerpt:
      "NSW Police has announced a fleet of high-performance rapid-response vehicles as part of a new Armed Response Command, but hasn't revealed what cars will be purchased.",
    category: "NEWS",
    date: "June 29, 2026",
    author: "MustGoDeals Editorial",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/62ed299e-8f70-5cc3-a037-459f6e650000",
    lang: "EN",
  },
  {
    slug: "nsw-police-high-performance-fleet-2026-ko",
    title: "NSW 경찰, 9,430만 달러 규모 신속대응부대 창설 — 고성능 차량 도입 예고",
    excerpt:
      "NSW 경찰이 새로운 무장대응사령부 설립의 일환으로 고성능 신속대응 차량을 도입할 예정이지만, 구체적인 차종은 아직 공개되지 않았다.",
    category: "뉴스",
    date: "2026년 6월 29일",
    author: "MustGoDeals 편집팀",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/62ed299e-8f70-5cc3-a037-459f6e650000",
    lang: "KO",
  },
  {
    slug: "mazda-6e-no-base-model-australia",
    title: "Mazda 6e Won't Get a Cheaper Base Model — At Least for Now",
    excerpt:
      "Mazda Australia has ruled out a more affordable entry-level grade for the 6e electric sedan, saying the GT is already well-specced for its $49,990 price point.",
    category: "NEWS",
    date: "June 29, 2026",
    author: "MustGoDeals Editorial",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/a7707aea-83a0-5a72-b6aa-990fa9d50000",
    lang: "EN",
  },
  {
    slug: "mazda-6e-no-base-model-australia-ko",
    title: "마쓰다 6e, 저가 베이스 모델 출시 없다 — 현재로선 GT가 최저가",
    excerpt:
      "마쓰다 호주가 6e 전기 세단의 엔트리 등급 추가 계획이 없다고 밝혔다. GT 모델이 $49,990에 이미 충분한 사양을 갖췄다는 입장이다.",
    category: "뉴스",
    date: "2026년 6월 29일",
    author: "MustGoDeals 편집팀",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/a7707aea-83a0-5a72-b6aa-990fa9d50000",
    lang: "KO",
  },
  {
    slug: "polestar-us-ban-connected-vehicle-rule",
    title: "Polestar Banned from US Market Over Chinese Connectivity Rules",
    excerpt:
      "The US has blocked Polestar from selling new vehicles from the 2027 model year, citing national security concerns over Chinese-linked hardware and software in connected cars.",
    category: "NEWS",
    date: "June 28, 2026",
    author: "MustGoDeals Editorial",
    image: "https://www.topgear.com/sites/default/files/2026/06/5193-694911-1-5%20%281%29.jpg?w=892&h=502",
    lang: "EN",
  },
  {
    slug: "polestar-us-ban-connected-vehicle-rule-ko",
    title: "폴스타, 미국 시장서 퇴출 — 중국산 커넥티드 차량 규제 직격탄",
    excerpt:
      "미국 상무부가 중국 연계 하드웨어·소프트웨어를 탑재한 차량의 판매를 금지하면서, 지리(Geely) 산하 폴스타가 2027년형부터 미국 시장에서 철수하게 됐다.",
    category: "뉴스",
    date: "2026년 6월 28일",
    author: "MustGoDeals 편집팀",
    image: "https://www.topgear.com/sites/default/files/2026/06/5193-694911-1-5%20%281%29.jpg?w=892&h=502",
    lang: "KO",
  },
  {
    slug: "australia-car-recalls-june-2026",
    title: "Every Car Recalled in Australia in June 2026 — Is Yours on the List?",
    excerpt:
      "Nine manufacturers issued 11 recalls covering 16 models in June 2026. Here's the full list, how to check your vehicle, and what to do if your car is affected.",
    category: "NEWS",
    date: "June 27, 2026",
    author: "MustGoDeals Editorial",
    image: "https://pressroom.toyota.com.au/-/media/toyota/pressroom/banners/2024/02/13/01/06/lnd_my24_0020_v001-copy.jpg",
    lang: "EN",
  },
  {
    slug: "australia-car-recalls-june-2026-ko",
    title: "2026년 6월 호주 리콜 차량 전체 목록 — 내 차 포함됐나요?",
    excerpt:
      "2026년 6월 호주에서 9개 제조사가 11건 리콜을 발령했다. 체리·폭스바겐·현대·렉서스·토요타 등 16개 모델 전체 목록과 리콜 확인 방법을 정리했다.",
    category: "뉴스",
    date: "2026년 6월 27일",
    author: "MustGoDeals 편집팀",
    image: "https://pressroom.toyota.com.au/-/media/toyota/pressroom/banners/2024/02/13/01/06/lnd_my24_0020_v001-copy.jpg",
    lang: "KO",
  },
  {
    slug: "mazda-sales-dip-australia-2026",
    title: "Mazda Explains Sudden Sales Dip in Australia — New Models on the Way",
    excerpt:
      "Mazda has slipped to 6th–7th in Australia's sales rankings — its lowest position in 15 years. May sales fell 27.4%, but a CX-5 changeover and incoming EVs will reverse the slide.",
    category: "NEWS",
    date: "June 27, 2026",
    author: "MustGoDeals Editorial",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c8ff5774-14aa-519c-9dc3-281f4db50000",
    lang: "EN",
  },
  {
    slug: "mazda-sales-dip-australia-2026-ko",
    title: "마쯔다, 호주 판매 15년 만에 최저 — 신형 CX-5·전기차로 반등 노린다",
    excerpt:
      "마쯔다가 호주 판매 순위 6~7위로 밀려나며 15년 만에 최저 성적을 기록했다. 5월 판매는 27.4% 급감했지만, 신형 CX-5와 전기차 라인업으로 하반기 반등을 자신하고 있다.",
    category: "뉴스",
    date: "2026년 6월 27일",
    author: "MustGoDeals 편집팀",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c8ff5774-14aa-519c-9dc3-281f4db50000",
    lang: "KO",
  },
  {
    slug: "hyundai-i30-sedan-2027-australia",
    title: "2027 Hyundai i30 Sedan Revealed — Bigger, Hybrid-Focused, and Coming to Australia Next Year",
    excerpt:
      "The eighth-generation i30 Sedan grows in every dimension, drops the 1.6T petrol, and upgrades the hybrid to 117kW. Australian arrival is confirmed for the first half of 2027.",
    category: "NEWS",
    date: "June 26, 2026",
    author: "MustGoDeals Editorial",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/e67acf95-dd06-5ea8-a53b-d688c8c50000",
    lang: "EN",
  },
  {
    slug: "hyundai-i30-sedan-2027-australia-ko",
    title: "2027 현대 i30 세단 공개 — 더 커지고, 하이브리드 중심으로, 내년 호주 상륙",
    excerpt:
      "전장 4,765mm로 성장하고, 1.6T 삭제, 117kW 하이브리드로 재편된 8세대 i30 세단. 호주 출시는 2027년 상반기로 예정돼 있다.",
    category: "뉴스",
    date: "2026년 6월 26일",
    author: "MustGoDeals 편집팀",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/e67acf95-dd06-5ea8-a53b-d688c8c50000",
    lang: "KO",
  },
  {
    slug: "audi-a3-s3-rs3-2027-update",
    title: "2027 Audi A3, S3 and RS3 Updated — Bigger Screens, Fewer Buttons, and a Redesigned Interior",
    excerpt:
      "Audi's entire A3 family gets the curved Digital Stage cockpit from the A5 and A6 — a 12.8-inch MMI, 11.9-inch Virtual Cockpit under one piece of glass, and upgraded driver assistance. European launch September 2026.",
    category: "NEWS",
    date: "June 26, 2026",
    author: "MustGoDeals Editorial",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/dd218bf3-401e-53e2-a2c4-ed4470650000",
    lang: "EN",
  },
  {
    slug: "audi-a3-s3-rs3-2027-update-ko",
    title: "2027 아우디 A3·S3·RS3 업데이트 — 더 커진 스크린, 줄어든 버튼, 완전히 달라진 실내",
    excerpt:
      "A5·A6의 디지털 스테이지 아키텍처가 A3까지 내려왔다. 12.8인치 MMI + 11.9인치 버추얼 콕핏이 단일 곡면 유리로 통합되고, 주행 보조 시스템도 전면 강화됐다. 유럽 출시 2026년 9월.",
    category: "뉴스",
    date: "2026년 6월 26일",
    author: "MustGoDeals 편집팀",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/dd218bf3-401e-53e2-a2c4-ed4470650000",
    lang: "KO",
  },
  {
    slug: "skoda-peaq-2027-australia",
    title: "Skoda Peaq Revealed: Seven-Seat Electric SUV with 640km Range Confirmed for Australia",
    excerpt:
      "Skoda's largest-ever SUV arrives as a direct Kia EV9 rival — with up to 640km range, V2L/V2H/V2G bidirectional charging, and a price expected to start in the low-to-mid $70,000s.",
    category: "NEWS",
    date: "June 25, 2026",
    author: "MustGoDeals Editorial",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c4d60c30-2aac-5ab1-a8e5-57f962a50000",
    lang: "EN",
  },
  {
    slug: "skoda-peaq-2027-australia-ko",
    title: "스코다 피크 공개 — 640km 항속, 7인승 전기 SUV 호주 상륙 예고",
    excerpt:
      "스코다 역대 최대 SUV 피크가 베일을 벗었다. 기아 EV9의 직접 경쟁 상대로, 최대 640km 주행거리와 V2L/V2H/V2G를 탑재한 채 호주 출시가 확정됐다.",
    category: "뉴스",
    date: "2026년 6월 25일",
    author: "MustGoDeals 편집팀",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c4d60c30-2aac-5ab1-a8e5-57f962a50000",
    lang: "KO",
  },
  {
    slug: "australia-fuel-excise-relief-extended-july-2026",
    title: "Fuel Prices to Stay Lower for a Little Longer as Australia Extends Excise Relief",
    excerpt:
      "The Albanese Government has extended fuel excise relief through August 2, 2026 — keeping petrol and diesel 16 cents per litre cheaper and saving drivers around $11 per tank.",
    category: "NEWS",
    date: "June 24, 2026",
    author: "MustGoDeals Editorial",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/7cb59eee-4c04-5d94-82a8-793a2e150000",
    lang: "EN",
  },
  {
    slug: "australia-fuel-excise-relief-extended-july-2026-ko",
    title: "호주 유류세 인하 연장 — 7월도 리터당 16센트 저렴하게",
    excerpt:
      "알바니즈 정부가 유류세 인하를 2026년 8월 2일까지 연장한다고 발표했다. 휘발유·경유 가격이 정상 대비 리터당 16센트 낮게 유지된다.",
    category: "뉴스",
    date: "2026년 6월 24일",
    author: "MustGoDeals 편집팀",
    image: "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/7cb59eee-4c04-5d94-82a8-793a2e150000",
    lang: "KO",
  },
  {
    slug: "mazda-6e-cx6e-orders-australia-2026",
    title: "Mazda 6e and CX-6e Clock Up Thousands of Orders Ahead of Australian Launch",
    excerpt:
      "The Mazda 6e sold its initial 300-unit pre-order allocation in two weeks. Now the CX-6e SUV is seeing even stronger demand — and it hasn't even been priced yet.",
    category: "NEWS",
    date: "June 24, 2026",
    author: "MustGoDeals Editorial",
    image: "https://www.mazda.com.au/4966d2/globalassets/vehicle-landing-pages/cx-6e/launch-vlp/assets/au41-p00005750_mazda_cx-6e_vlp_introduction_1300x650px.jpg",
    lang: "EN",
  },
  {
    slug: "mazda-6e-cx6e-orders-australia-2026-ko",
    title: "마즈다 6e·CX-6e, 호주 출시 전 수천 건 사전 주문 돌파",
    excerpt:
      "마즈다 6e 세단 300대 사전 주문이 2주 만에 완판됐다. CX-6e SUV는 가격 발표도 전에 세단을 웃도는 관심을 받고 있다.",
    category: "뉴스",
    date: "2026년 6월 24일",
    author: "MustGoDeals 편집팀",
    image: "https://www.mazda.com.au/4966d2/globalassets/vehicle-landing-pages/cx-6e/launch-vlp/assets/au41-p00005750_mazda_cx-6e_vlp_introduction_1300x650px.jpg",
    lang: "KO",
  },
  {
    slug: "hyundai-i20-n-hybrid-nextgen",
    title: "Next-Gen Hyundai i20 N Is Coming — With Hybrid Power That Could Beat the i30 N",
    excerpt:
      "Hyundai R&D boss confirms a second-gen i20 N with hybrid power is coming sooner rather than later — expected outputs of up to 224kW could make it stronger than any current i30 N.",
    category: "NEWS",
    date: "June 23, 2026",
    author: "MustGoDeals Editorial",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/i20-n-render.jpg",
    lang: "EN",
  },
  {
    slug: "hyundai-i20-n-hybrid-nextgen-ko",
    title: "차세대 현대 i20 N 확정 — 하이브리드 탑재로 i30 N을 넘어설 수도",
    excerpt:
      "현대 글로벌 R&D 총괄이 2세대 i20 N 출시를 공식 확인했다. 최대 224kW 출력의 하이브리드 파워트레인 탑재가 예상되며, 2028년 판매 시작이 유력하다.",
    category: "뉴스",
    date: "2026년 6월 23일",
    author: "MustGoDeals 편집팀",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/i20-n-render.jpg",
    lang: "KO",
  },
  {
    slug: "byd-goodwood-2026-eight-models",
    title: "BYD Is Bringing Eight New Models to Goodwood — Including a Porsche 911 Rival",
    excerpt:
      "BYD debuts eight models at Goodwood 2026 across BYD, Denza, and Yangwang brands — headlined by the world premiere of the Denza Z Coupe, a 350km/h EV targeting the Porsche 911.",
    category: "NEWS",
    date: "June 23, 2026",
    author: "MustGoDeals Editorial",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/denza-z-2-rxk7.jpg",
    lang: "EN",
  },
  {
    slug: "byd-goodwood-2026-eight-models-ko",
    title: "BYD, 굿우드에서 8개 신모델 공개 — 포르쉐 911 라이벌도 등장",
    excerpt:
      "BYD가 굿우드 2026에서 덴자 Z 쿠페 세계 최초 공개를 포함해 BYD·덴자·양왕 3개 브랜드의 신모델 8개를 선보인다. 부스 면적은 행사 역사상 최대인 2,016㎡다.",
    category: "뉴스",
    date: "2026년 6월 23일",
    author: "MustGoDeals 편집팀",
    image: "https://editorial.pxcrush.net/carsales/general/editorial/denza-z-2-rxk7.jpg",
    lang: "KO",
  },
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
