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

  {
    slug: "2024-bmw-x3-xdrive-awd",
    status: "available",
    badge: "DEMO",
    name: "2024 BMW X3 20 xDrive",
    subtitle: "G45 · 2.0L Turbo · xDrive AWD · Sports Auto 8-spd",
    location: "Parramatta, NSW",
    km: 5900,
    colour: "Fire Red",
    interiorColour: "M Alcantara Black",
    price: 79900,
    wasPrice: 100900,
    savingsAmount: 21000,
    savingsPct: 21,
    warranty: "Balance of 5yr BMW warranty",
    images: [
      "https://edge.pxcrush.net/cars/dealer/bjjxy32dtkf9b69ba7yl83e8s.jpg",
      "https://edge.pxcrush.net/cars/dealer/41vxwfgbzogt5c05f9olmu7tf.jpg",
      "https://edge.pxcrush.net/cars/dealer/boqq1vryn8romqbkw5t6cq48o.jpg",
      "https://edge.pxcrush.net/cars/dealer/8t4oksw0fvrvdlqdia69m35ie.jpg",
      "https://edge.pxcrush.net/cars/dealer/v11co52ei8odr0ohhlx8586h.jpg",
      "https://edge.pxcrush.net/cars/dealer/bmvcho8hf2qbh6wdk1uppfluz.jpg",
      "https://edge.pxcrush.net/cars/dealer/pehapwn1b1su0tut2lqz5a1m.jpg",
      "https://edge.pxcrush.net/cars/dealer/9dlra75dzfjc53jawuwrpq0u9.jpg",
      "https://edge.pxcrush.net/cars/dealer/au3uxawfcdhmlbskwwfx9c1rm.jpg",
      "https://edge.pxcrush.net/cars/dealer/a3jdo9lpd5wtbvt4p47f2s3j6.jpg",
      "https://edge.pxcrush.net/cars/dealer/8vs2ty96xt2vxccszjhwmx0e2.jpg",
      "https://edge.pxcrush.net/cars/dealer/3p53ygui3smytt40c3ygiz0d1.jpg",
      "https://edge.pxcrush.net/cars/dealer/rlo3wkt2ul5l5le0vfi0zlzg.jpg",
      "https://edge.pxcrush.net/cars/dealer/6fqlbgnfvv9rbfmuiv9c44otg.jpg",
      "https://edge.pxcrush.net/cars/dealer/eheng84hm028rlfgcew1l7n91.jpg",
      "https://edge.pxcrush.net/cars/dealer/dtjeeh3n01qjha431rr7e4wye.jpg",
      "https://edge.pxcrush.net/cars/dealer/dbczubnnrbwr8goleeh137x3j.jpg",
      "https://edge.pxcrush.net/cars/dealer/7gzoc0rq495yptwne83076gjy.jpg",
      "https://edge.pxcrush.net/cars/dealer/d3ds2et0r32rfrn5858jc6yec.jpg",
      "https://edge.pxcrush.net/cars/dealer/8tr1zt0kkep0wddufv6f553pa.jpg",
    ],
    specs: [
      { label: "Year",         value: "2024" },
      { label: "Body",         value: "SUV · 5 doors" },
      { label: "Engine",       value: "2.0L Turbo Petrol" },
      { label: "Transmission", value: "Sports Automatic 8-speed" },
      { label: "Drive",        value: "xDrive AWD" },
      { label: "Fuel",         value: "7.5L/100km" },
      { label: "Colour",       value: "Fire Red" },
      { label: "Interior",     value: "M Alcantara Black" },
      { label: "Seats",        value: "5" },
    ],
    dealerComment: "EXECUTIVE DRIVEN DEMO!!! FITTED WITH THE FOLLOWING OPTIONS — Fire Red over M Alcantara, a rare combination for the new G45 X3. Fully loaded with M Sport Pro, the Enhancement Package (panorama roof, Harman Kardon, alarm), and 20-inch bicolour alloys. Only 5,900km on the clock with balance of factory warranty.",
    features: [
      { name: '20" M Light Alloy Wheels Bicolour',  descEn: "Factory 20-inch M alloy wheels in two-tone bicolour finish",                           descKo: "순정 20인치 M 알로이 휠, 바이컬러 투톤 마감" },
      { name: "Panorama Glass Roof",                 descEn: "Full-width panoramic glass roof with electric blind",                                   descKo: "전동 블라인드 포함 풀 파노라마 글라스 루프" },
      { name: "Harman Kardon Surround Sound",        descEn: "Premium 16-speaker Harman Kardon surround sound system",                               descKo: "16개 스피커 하만카돈 프리미엄 서라운드 사운드" },
      { name: "M Sport Brake Red High-Gloss",        descEn: "M Sport brake callipers in high-gloss red — performance look to match the spec",       descKo: "M 스포츠 하이글로스 레드 브레이크 캘리퍼" },
      { name: "M Alcantara Seat",                    descEn: "M-specific Alcantara seat upholstery with contrast stitching",                         descKo: "M 전용 알칸타라 시트 업홀스터리, 콘트라스트 스티칭" },
      { name: "BMW Live Cockpit Professional",        descEn: "14.9-inch curved touchscreen with 12.9-inch digital instrument cluster",               descKo: "14.9인치 곡면 터치스크린 + 12.9인치 디지털 계기판" },
      { name: "Parking Assistant Plus",              descEn: "Automated parking with surround view camera and reversing assistant",                   descKo: "전방위 카메라 포함 자동 주차 어시스턴트 플러스" },
      { name: "Interior Dash Cam",                   descEn: "Factory-integrated interior dashcam for cabin recording",                               descKo: "순정 통합 실내 대시캠" },
      { name: "Heads-Up Display",                    descEn: "Full-colour HUD projecting speed, navigation and ADAS info onto the windscreen",        descKo: "속도·내비·주행 보조 정보를 앞 유리에 투영하는 컬러 HUD" },
      { name: "Adaptive Cruise Control",             descEn: "Maintains speed and following distance automatically — hands-on highway driving",       descKo: "차간거리·속도 자동 유지 어댑티브 크루즈 컨트롤" },
      { name: "Blind Spot Monitoring",               descEn: "Rear cross-traffic alert and blind spot warning via mirror indicators",                 descKo: "후측방 경보 및 사각지대 경고 미러 인디케이터" },
      { name: "Apple CarPlay / Android Auto",        descEn: "Wireless Apple CarPlay and Android Auto with full display integration",                 descKo: "무선 애플 카플레이 및 안드로이드 오토 완전 통합" },
    ],
    options: [
      { name: '20" M Light Alloy Wheels Bicolour',                      descEn: "Factory 20-inch bicolour M alloy wheels upgrade",                                        descKo: "순정 20인치 바이컬러 M 알로이 휠 업그레이드",                         price: 2000 },
      { name: "Enhancement Package (Panorama + Harman Kardon + Alarm)", descEn: "Panoramic roof, Harman Kardon surround sound, and factory alarm system",                  descKo: "파노라마 루프, 하만카돈 서라운드, 순정 알람 시스템 패키지",           price: 6000 },
      { name: "M Sport Package Pro",                                     descEn: "M Alcantara seats, red M Sport brakes, Pro exterior trim and M steering wheel",          descKo: "M 알칸타라 시트, 레드 M 스포츠 브레이크, 프로 익스테리어, M 스티어링", price: 3000 },
    ],
    dealer: { name: "Jung In B", location: "Parramatta, Sydney" },
    whyPriceMakesSense: {
      newDriveAway:      89900,
      addedOptionsValue: 11000,
      totalNewValue:     100900,
      mustgoDealsPrice:  79900,
    },
  },

  {
    slug: "2025-audi-sq5-edition-one",
    status: "available",
    badge: "DEMO",
    name: "2025 Audi SQ5 Edition One",
    subtitle: "3.0L Turbo V6 · quattro ultra AWD · S tronic",
    location: "Artarmon, Sydney",
    km: 3500,
    colour: "Ultra Blue",
    interiorColour: "Black Leather",
    price: 99986,
    wasPrice: 135113,
    savingsAmount: 35127,
    savingsPct: 26,
    warranty: "5 year manufacturer warranty",
    images: [
      "https://edge.pxcrush.net/cars/dealer/7twyi4kavwaiab0k6df4f57fo.jpg",
      "https://edge.pxcrush.net/cars/dealer/encnui40zwepj4ofis2jd2hkd.jpg",
      "https://edge.pxcrush.net/cars/dealer/6vm5fhtu9geaajuou9j9sdptm.jpg",
      "https://edge.pxcrush.net/cars/dealer/5pvq9q2hsyxa5zex38n2m0ov7.jpg",
      "https://edge.pxcrush.net/cars/dealer/eiidp6qpxtbtmbp9tf7bn89i0.jpg",
      "https://edge.pxcrush.net/cars/dealer/4r38n85s3ekiuq21mf57yn6b1.jpg",
      "https://edge.pxcrush.net/cars/dealer/eyddc05kn5r3a4o7mbt0ajs9s.jpg",
      "https://edge.pxcrush.net/cars/dealer/ebvzrv18u9zfr23xn5hzopj9g.jpg",
      "https://edge.pxcrush.net/cars/dealer/di2jr2ob7vsmdofiini0oxib7.jpg",
      "https://edge.pxcrush.net/cars/dealer/aw1hs8s1zfzz0iltsee7zr78m.jpg",
      "https://edge.pxcrush.net/cars/dealer/2z3ob7rgo8vqevurmpuvd5xyf.jpg",
      "https://edge.pxcrush.net/cars/dealer/5937sh3sft09ub49vd41hbklk.jpg",
      "https://edge.pxcrush.net/cars/dealer/18sg6aacuz41ngrdelx1wwdgh.jpg",
      "https://edge.pxcrush.net/cars/dealer/6vqjoajkgck8afzgzisec1s4s.jpg",
      "https://edge.pxcrush.net/cars/dealer/clzt9nnzxrdp3onj5rnpx9jxx.jpg",
      "https://edge.pxcrush.net/cars/dealer/achsjg9lw06j8vinhb5hl6u5j.jpg",
      "https://edge.pxcrush.net/cars/dealer/b33dtjk9r5o7rj55p822arocu.jpg",
      "https://edge.pxcrush.net/cars/dealer/6jjyr0z6m1i2pjte30pr747h3.jpg",
      "https://edge.pxcrush.net/cars/dealer/4c9jc2aijgfz9lo85hhmfggr4.jpg",
      "https://edge.pxcrush.net/cars/dealer/ayeru63ut0opwh81y6x307658.jpg",
    ],
    specs: [
      { label: "Year",         value: "2025" },
      { label: "Body",         value: "SUV · 5 doors" },
      { label: "Engine",       value: "3.0L Turbo Petrol V6" },
      { label: "Transmission", value: "S tronic 7-speed Dual Clutch" },
      { label: "Drive",        value: "quattro ultra AWD" },
      { label: "Fuel",         value: "7.6L/100km" },
      { label: "Colour",       value: "Ultra Blue" },
      { label: "Interior",     value: "Black Leather" },
      { label: "Seats",        value: "5" },
    ],
    dealerComment: "SQ5 Edition One in Ultra Blue with factory black exterior package, red brake calipers, panoramic sunroof, and 21-inch Audi Sport alloys. 3,500km with balance of 5-year factory warranty. Performance SUV specification at a significant saving below original drive away pricing.",
    features: [
      { name: '21" Audi Sport Alloy Wheels',           descEn: 'Factory 21-inch 5-twin-spoke-Y alloys in silk matt grey finish',                     descKo: '순정 21인치 5트윈스포크-Y 실크 매트 그레이 알로이 휠' },
      { name: 'Red Brake Calipers',                    descEn: 'High-visibility red brake calipers for a sport performance look',                    descKo: '스포티한 퍼포먼스 외관을 완성하는 레드 브레이크 캘리퍼' },
      { name: 'Black Exterior Package',                descEn: 'Gloss black exterior trim replacing chrome elements throughout the body',            descKo: '크롬을 블랙으로 교체하는 블랙 익스테리어 패키지' },
      { name: 'Sport Front Seats with S Embossing',    descEn: 'Contoured sport seats with S quattro embossing for lateral support',                 descKo: 'S 콰트로 엠보싱이 적용된 스포츠 시트, 측면 지지력 강화' },
      { name: 'Sport 3-spoke Leather Steering Wheel',  descEn: 'Flat-bottomed 3-spoke leather multifunction steering wheel',                        descKo: '플랫 바텀 3스포크 가죽 멀티펑션 스티어링 휠' },
      { name: 'Privacy Glass',                         descEn: 'Factory-tinted rear privacy glass for passenger comfort and security',               descKo: '순정 짙은 틴팅 리어 프라이버시 글라스' },
      { name: 'Panoramic Glass Sunroof',               descEn: 'Full-length panoramic glass roof with electric tilt and slide',                     descKo: '전동 틸트/슬라이드 풀 파노라믹 글라스 선루프' },
      { name: 'Audi Sound System',                     descEn: '8-speaker Audi sound system with subwoofer and digital amplifier',                  descKo: '서브우퍼 포함 8스피커 아우디 사운드 시스템' },
      { name: 'Wireless Apple CarPlay / Android Auto', descEn: 'Wireless smartphone integration with full display mirroring',                       descKo: '무선 애플 카플레이 및 안드로이드 오토 통합' },
      { name: 'Wireless Charging',                     descEn: 'Qi wireless charging pad for compatible smartphones',                               descKo: '호환 스마트폰 무선 충전 패드' },
      { name: 'Adaptive Cruise Control',               descEn: 'Maintains speed and following distance automatically on highways',                  descKo: '고속도로 차간거리·속도 자동 유지 어댑티브 크루즈 컨트롤' },
      { name: 'Blind Spot Monitoring',                 descEn: 'Rear and side blind spot warning via mirror indicators',                            descKo: '후측방 사각지대 경고 미러 인디케이터 시스템' },
      { name: 'Lane Keeping Assist',                   descEn: 'Active lane keeping with steering intervention when drifting',                      descKo: '차선 이탈 시 스티어링 개입 능동형 차선 유지 보조' },
      { name: 'Reversing Camera',                      descEn: 'Rear-view camera with guidance lines for parking',                                  descKo: '주차 가이드 라인이 있는 후방 카메라' },
      { name: 'Parking Sensors',                       descEn: 'Front and rear ultrasonic parking sensors with proximity alerts',                   descKo: '전후방 초음파 주차 센서 및 근접 경고' },
      { name: 'Integrated Dash Cam',                   descEn: 'Factory-integrated dashcam for front recording',                                   descKo: '순정 통합 전방 대시캠' },
      { name: 'Digital Instrument Cluster',            descEn: 'Customisable fully digital instrument display',                                     descKo: '커스터마이징 가능한 풀 디지털 계기판' },
      { name: 'GPS Navigation',                        descEn: 'Built-in GPS navigation with real-time traffic updates',                            descKo: '실시간 교통 정보 지원 내장 GPS 내비게이션' },
      { name: 'Ambient Lighting',                      descEn: 'Multi-colour ambient interior lighting for a premium atmosphere',                   descKo: '멀티 컬러 앰비언트 실내 조명' },
      { name: 'Hands Free Boot',                       descEn: 'Kick-to-open hands-free tailgate for easy loading',                                descKo: '발 동작으로 개방되는 핸즈프리 테일게이트' },
    ],
    options: [],
    dealer: { name: "Audi Alto Artarmon", location: "Artarmon, Sydney" },
    whyPriceMakesSense: {
      newDriveAway:      135113,
      addedOptionsValue: 0,
      totalNewValue:     135113,
      mustgoDealsPrice:  99986,
    },
  },
]
