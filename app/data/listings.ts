// ── Types ─────────────────────────────────────────────────────────────────────

export type Feature = {
  name: string
  descEn: string
  descKo: string
}

export type Option = {
  name: string
  descEn: string
  descKo: string
  price: number
}

export type Listing = {
  slug: string
  status: "available" | "coming_soon" | "sold"
  badge: string
  name: string
  subtitle: string
  location: string
  km: number
  colour: string
  interiorColour?: string
  price: number
  wasPrice: number
  savingsAmount: number
  savingsPct: number
  warranty: string
  images: string[]
  specs: { label: string; value: string }[]
  dealerComment: string
  features: Feature[]
  options: Option[]
  dealer: {
    name: string
    location: string
  }
  whyPriceMakesSense: {
    newDriveAway: number
    addedOptionsValue: number
    totalNewValue: number
    mustgoDealsPrice: number
  }
}

// ── Data ──────────────────────────────────────────────────────────────────────

export const LISTINGS: Listing[] = [
  {
    slug: "2025-audi-a5-sport",
    status: "available",
    badge: "DEMO",
    name: "2025 Audi A5 TFSI 200kW S line",
    subtitle: "2.0L Turbo · Quattro AWD · S tronic",
    location: "Artarmon, Sydney",
    km: 2500,
    colour: "Daytona Grey",
    price: 87880,
    wasPrice: 128918,
    savingsAmount: 41038,
    savingsPct: 32,
    warranty: "5yr unlimited km warranty",
    images: [
      "https://edge.pxcrush.net/cars/dealer/euy7ctpajf5ul5opydntht8xw.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=98b39390ab0e54aba568cf55b91ca2fe&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/223k97ssru0t63qr5nqu0hecz.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=bd970ba1c7e630109dfb4b3fc9476359&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/3djn7viwbypmakn8hd08nyze8.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=982c0e168e1eb055fc079654215c0a41&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/4p8ifi525rxyt1u8il6uaiete.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=29f0ea919f98fc521038805ba308ec39&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/72e1jhwnrq89rmn1swiyr46gm.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=63f26dd893be9ba8384b92ac0e923c1a&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/8ety4qxb6hn1162zbx8nc11ay.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=9bcba19a96892532372a9bd47af47026&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/eg8dagkoil7bp95idh7w3q04.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=684f4efed3cfaa7de0562528c4c6a611&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/4h1iiutb24pf2ebx7pnxu6hhl.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=2312b2594347ec11744c417669539265&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/3ks9z9hi82alh1azv47ztil9o.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=b76f1699f43364302f5c70a4d41d6973&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/5sq9ts6l1eswt9i3q21dpz6k7.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=c08ddd9f84b66ea0c9e1b4402c2ffb94&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/cadcyjpb1fop90qq38ur5xn6n.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=8997fed3f47ced46304b86fc82d7f4ab&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/epmm73ctsvh3btr93bvuf63gs.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=7824e84db9df697564d5d93c9740ea42&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/34uhobbg629467b3pio02mnve.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=29ce87605ea04608c4b6d916b7ed2675&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/2vtdcttw78ylys0c13js6c1ic.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=718fc38563a3f372f16d66e3f9cfbb66&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/8jnleu2e97k7l6sxrwd9wxsb8.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=2fd5883fa9e893033f6f7f1b1c4ff4d2&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/bbjjge0y93k5qddyda3cvwo6e.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=e757cf032e4d673bddc77e526b6470b4&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/4i664ofhtb2b3jzlalikpi7mu.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=757720077fe055f0e4c4087308863c97&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/5uj949elwvueuss7ees1xtf61.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=d17a3b674614164eac9a0a8190601d95&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/eqerzy4tdqtk2885adni4e8wd.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=50751974e003ea5ef8d2032124c291d3&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/2uhtk0b3ovj08m7eczjx3lag6.jpg?pxc_expires=20260924020510&pxc_clear=1&pxc_signature=4fef64cdf52d3e18cfc63dd3be168084&pxc_size=1000%2c667",
    ],
    specs: [
      { label: "Year",         value: "2025" },
      { label: "Body",         value: "Sedan (Hatch) · 5 doors" },
      { label: "Engine",       value: "2.0L Turbo Petrol" },
      { label: "Power",        value: "200 kW / 400 Nm" },
      { label: "Transmission", value: "7-speed S tronic DCT" },
      { label: "Drive",        value: "Quattro AWD" },
      { label: "0–100 km/h",  value: "5.9 sec" },
      { label: "Fuel",         value: "7.4L/100km" },
      { label: "Colour",       value: "Daytona Grey" },
      { label: "Seats",        value: "5" },
      { label: "Build",        value: "July 2025" },
    ],
    dealerComment: "EOFY Sale — one of the best-spec'd A5s we've had. Fully optioned with Premium and Style packages, panoramic roof with switchable transparency, and Bang & Olufsen sound. AWD Quattro with only 2,500km. This one won't last.",
    features: [
      { name: "Bang & Olufsen 3D Sound",     descEn: "19-speaker premium 3D audio system with individual speaker calibration",    descKo: "19개 스피커 3D 프리미엄 사운드, 공간감 있는 콘서트홀 음향" },
      { name: "Head-up Display",             descEn: "Projects speed, navigation and ADAS info onto the windscreen",              descKo: "속도·내비·주행보조 정보를 앞 유리에 투영" },
      { name: "Panoramic Roof (Switchable)", descEn: "Full-width glass roof with electronically switchable transparency",         descKo: "전동 투명도 조절 파노라마 선루프" },
      { name: "Quattro AWD",                 descEn: "Permanent all-wheel drive with torque vectoring differential",             descKo: "상시 AWD + 토크 벡터링 차동장치" },
      { name: "Matrix LED Headlights",       descEn: "Individual LED cell control for maximum illumination without glare",       descKo: "개별 LED 셀 제어로 눈부심 없는 최대 조사 범위" },
      { name: "Adaptive Cruise Control",     descEn: "Maintains speed and following distance automatically on highways",         descKo: "고속도로에서 차간거리·속도 자동 유지" },
    ],
    options: [
      { name: "Premium Package",             descEn: "HUD, B&O Sound, high-power USB-C, ambient lighting pro, acoustic door glass", descKo: "HUD, B&O Sound, USB-C 고출력, 앰비언트 라이팅 프로, 어쿠스틱 도어 글라스", price: 5500 },
      { name: "Style Package",               descEn: "20-inch black metallic wheels, black exterior package, privacy glass",         descKo: "20인치 블랙 메탈릭 휠, 블랙 익스테리어 패키지, 프라이버시 글라스",           price: 3200 },
      { name: "Panoramic Roof (Switchable)", descEn: "Electronically switchable transparency panoramic sunroof",                    descKo: "전동 투명도 조절 선루프",                                                     price: 3800 },
    ],
    dealer: { name: "Jung In B", location: "Artarmon, Sydney" },
    whyPriceMakesSense: {
      newDriveAway:      128918,
      addedOptionsValue: 12500,
      totalNewValue:     141418,
      mustgoDealsPrice:  87880,
    },
  },

  {
    slug: "2025-audi-sq8",
    status: "available",
    badge: "DEMO",
    name: "2025 Audi SQ8 TFSI Quattro",
    subtitle: "4.0L V8 Twin Turbo · Quattro AWD · Tiptronic",
    location: "Artarmon, Sydney",
    km: 2000,
    colour: "Mythos Black",
    interiorColour: "Arras Red / Anthracite",
    price: 189888,
    wasPrice: 227943,
    savingsAmount: 38055,
    savingsPct: 17,
    warranty: "5yr unlimited km warranty",
    images: [
      "https://edge.pxcrush.net/cars/dealer/2kpf62gbkg4jcti5u0rsy42nr.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=e1cd655ac9667dde9314d4ed7fe61a5b&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/4xjfpupwxtxz1gzzah21pkc9w.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=586184ae5e3e9f9cda8125d973955bec&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/3m492f7byax7f9zefwuczhqm4.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=0a12fbfb3cdc5b623ad48c49728fcd63&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/g0lq0pc037nrxzargj9qaru9.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=0e700a425ee6985f5a02bd9de3293e02&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/9478ciqx7bukmn9xy4ef38b6g.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=e2760d891f9346b9bccc754ffe649f83&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/dy16g12owy0jx96u47in4kajz.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=fbfceaa741b2eff4f230fd50f2c4a8b8&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/8n9qtjjrx0128vm331t9hmd9y.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=5d06f5c28e4c13308e903c266bfac877&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/3safzj0x5oweaij3dewiv0jsa.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=06d6727a451b5c06c9697888f2ea0d9a&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/dejmzce99hwp24r7v8zp7hykj.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=eaed668ecc7f5198018bcfbfe5318290&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/1rbfbdtmmwlpzuimh2rd3z7cx.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=3fd84b333038567ed49203916b8a299c&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/9i3z5r2utkv28ip1p0jokr9jg.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=8ca381797567d2967b064271bba0c2ee&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/6y0cln7m4i9i0v9dstdmqwxdd.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=219f145609325374b286fafedaa73c56&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/deel6ytrjly0g7hn7a7jcougz.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=b8d1e5e214d3dbf4add7dcd61df71269&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/chssyaizzrkvlc3i3vmwzk3o9.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=ff4932ce4f92cf3eed046b6083dcd97d&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/20ktxyic9ot317r1weg8tcfry.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=f43a733ee7a1a70d18376b3f69ea3495&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/dfq5hndxry8880zb32b1cqjqd.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=e6943310f397f12241924ce249cc46a8&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/48gecej86yym81qypynnqjnm9.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=2e17576004719db513ba9b85cd62d914&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/eu8kyeh2fs87d3wbhb2oaxooz.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=09c095aee2448dda58ac7540bd0dbe3e&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/5zh7h66wpt6kaf5hijag1a3pk.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=36df447f7aa8c6e2b5348bca9454e427&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/e4z3t1kp54pz0zp5cq53wkd4l.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=f2903b854f0104682d84951574dfbd5b&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/dyl0i6o6t3imdeg7qepy34m93.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=9f6176d6a504b9e5cfa0cdca2e25c0cf&pxc_size=1000%2c667",
      "https://edge.pxcrush.net/cars/dealer/c4r2yzqpbym8c7mt83u2l5c2m.jpg?pxc_expires=20260924144231&pxc_clear=1&pxc_signature=35e67276106f26d1a847ada5f04d64ad&pxc_size=1000%2c667",
    ],
    specs: [
      { label: "Year",         value: "2025" },
      { label: "Body",         value: "SUV · 5 doors" },
      { label: "Engine",       value: "4.0L V8 Twin Turbo Petrol" },
      { label: "Power",        value: "373 kW / 770 Nm" },
      { label: "Transmission", value: "8-speed Tiptronic" },
      { label: "Drive",        value: "Quattro AWD" },
      { label: "0–100 km/h",  value: "4.1 sec" },
      { label: "Fuel",         value: "11.9L/100km" },
      { label: "Colour",       value: "Mythos Black" },
      { label: "Interior",     value: "Arras Red / Anthracite" },
      { label: "Seats",        value: "5" },
      { label: "Build",        value: "October 2025" },
    ],
    dealerComment: "A bespoke V8 SQ8 — one of the most fully optioned examples we've had. Arras Red upholstery package, B&O Advanced 3D sound with 1,920W output, HD Matrix LED with laser lights, Nappa leather, 22-inch black alloys, and panoramic sunroof. If you know SQ8, you know what this spec means.",
    features: [
      { name: "B&O Advanced 3D Sound (1,920W)", descEn: "23-speaker system with 1,920W output and automatically extending acoustic lenses", descKo: "23개 스피커, 1,920W 출력, 자동 확장 어쿠스틱 렌즈 탑재 최고급 사운드" },
      { name: "HD Matrix LED with Laser Light",  descEn: "Individual LED matrix headlights with long-range laser assist and OLED rear lights",  descKo: "레이저 하이빔 보조 기능이 있는 HD 매트릭스 LED + OLED 리어 테일라이트" },
      { name: "Arras Red Nappa Leather",         descEn: "Full Nappa leather upholstery in Arras Red with contrasting stitching",              descKo: "아라스 레드 나파 가죽 풀 인테리어, 콘트라스트 스티칭 적용" },
      { name: "4.0L V8 Twin Turbo",             descEn: "373kW / 770Nm — 0-100km/h in 4.1 seconds with cylinder deactivation",               descKo: "373kW / 770Nm, 정지에서 100km/h까지 4.1초, 실린더 비활성화 기능 포함" },
      { name: "Quattro AWD + Air Suspension",    descEn: "Permanent AWD with adaptive air suspension and torque vectoring",                    descKo: "상시 AWD + 에어 서스펜션 + 토크 벡터링으로 SUV와 스포츠카의 경계를 허물다" },
      { name: '22" Black Alloy Wheels',          descEn: "Factory-fitted 22-inch sport alloys in gloss black finish",                         descKo: "순정 22인치 블랙 스포츠 알로이 휠" },
    ],
    options: [
      { name: "Arras Red Upholstery Package",                                    descEn: "Full Arras Red interior upholstery with contrasting stitching throughout",            descKo: "아라스 레드 풀 인테리어 업홀스터리, 전체 콘트라스트 스티칭 적용",    price: 6500 },
      { name: "Sensory Package (B&O 3D Advanced + Massage + Rear Seat Heating)", descEn: "B&O Advanced 3D Sound (1,920W), massage seats, rear seat heating",                    descKo: "B&O 어드밴스드 3D 사운드 (1,920W), 마사지 시트, 후석 히팅",         price: 7200 },
      { name: "HD Matrix LED with Laser + OLED Package",                         descEn: "HD Matrix LED headlights with laser assist and OLED rear taillights",               descKo: "레이저 보조 HD 매트릭스 LED 헤드라이트 + OLED 리어 테일라이트",    price: 3800 },
      { name: "Full Leather Package",                                             descEn: "Nappa leather upholstery with air quality package and electric sunblinds",          descKo: "나파 가죽 풀 업홀스터리, 에어 퀄리티 패키지, 전동 선블라인드",     price: 2500 },
    ],
    dealer: { name: "Jung In B", location: "Artarmon, Sydney" },
    whyPriceMakesSense: {
      newDriveAway:      227943,
      addedOptionsValue: 20000,
      totalNewValue:     247943,
      mustgoDealsPrice:  189888,
    },
  },
]
