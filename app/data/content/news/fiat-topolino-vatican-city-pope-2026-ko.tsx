import { AS } from '../../../components/posts/article-styles';
import Image from "next/image";

const IMGS = [
  "https://www.topgear.com/sites/default/files/2026/07/fiat-governorate-of-the-vatican-city-state-for-sustainable-micromobility-credit-by-governatorato-s-c-v.jpg",
  "https://www.topgear.com/sites/default/files/2026/07/fiat-governorate-of-the-vatican-city-state-for-sustainable-micromobility-credit-by-governatorato-s-c-v-%284%29.jpg",
  "https://www.topgear.com/sites/default/files/2026/07/1-Fiat-Topolino-Vatican.jpg",
  "https://www.topgear.com/sites/default/files/2026/07/fiat-governorate-of-the-vatican-city-state-for-sustainable-micromobility-credit-by-governatorato-s-c-v-%281%29.jpg",
  "https://www.topgear.com/sites/default/files/2026/07/2-Fiat-Topolino-Vatican.jpg",
  "https://www.topgear.com/sites/default/files/2026/07/3-Fiat-Topolino-Vatican.jpg",
];

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={AS.imgWrap}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="article-img"
        style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
      />
      <p style={AS.imgCaption}>Image: Fiat Media / Governatorato SCV</p>
    </div>
  );
}

export default function FiatTopolinoVaticanCityPope2026KoContent() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            <Image
              src={IMGS[0]}
              alt="Fiat Topolino Vatican City electric car"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Fiat Media / Governatorato SCV</p>
          </div>

          <p style={AS.p}>
            바티칸 시국이 전기차 시대로 전환했다.{" "}
            <span style={AS.highlight}>피아트</span>가 바티칸 시국 총독부에{" "}
            <span style={AS.highlight}>전기 소형 사륜차 토폴리노 20대</span>와 TRIS 전기
            삼륜 배달 차량을 인도했다. 교황청의 지속가능성 프로그램{" "}
            <span style={AS.highlight}>&lsquo;생태적 전환 2030&rsquo;</span>의 일환이다.
          </p>

          <h2 style={AS.h2}>왜 토폴리노인가</h2>

          <p style={AS.p}>
            바티칸 시국에 이 차량이 적합한 이유는 명확하다. 세계에서 가장 작은 나라인
            바티칸의 면적은{" "}
            <span style={AS.highlight}>44헥타르</span>에 불과하고 인구는 1,000명이 채 되지
            않는다. 토폴리노 한 번 충전으로 바티칸 시국을 여러 바퀴 돌 수 있다. 이 정도
            주행거리 대비 영토 비율을 가진 나라는 세계 어디에도 없다.
          </p>

          <Img src={IMGS[1]} alt="Fiat Topolino Vatican City electric car fleet delivery" />

          <h2 style={AS.h2}>피아트 토폴리노란</h2>

          <p style={AS.p}>
            토폴리노는 피아트가 수년 전 부활시킨 2인승 소형 전기 사륜차다.{" "}
            <span style={AS.highlight}>5.4kWh 배터리</span>를 탑재하며 최고 속도는{" "}
            <span style={AS.highlight}>45km/h</span>, 주행 가능 거리는 약{" "}
            <span style={AS.highlight}>75km</span>다. 일반 가정용 콘센트로 약 4시간이면
            완충된다. 최고 출력은 6kW로 잔디 깎기 기계 수준이며, 최고 속도에 도달하는 데
            약 10초가 걸린다. 그럼에도 외관은 상당히 귀엽다.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>피아트 토폴리노 핵심 제원</div>
            <p style={AS.calloutText}>
              배터리: 5.4kWh. 최고 속도: 45km/h. 주행거리: 약 75km.
              충전 시간: 일반 콘센트 기준 약 4시간.
              출력: 6kW. 영국 가격: £8,995.
            </p>
          </div>

          <Img src={IMGS[2]} alt="Fiat Topolino Vatican City electric car parked" />

          <h2 style={AS.h2}>TRIS 배달 차량</h2>

          <p style={AS.p}>
            함께 도입된 TRIS 차량은 클래식 피아지오 아페 삼륜 배달 트럭을 현대적으로
            재해석한 모델이다. 적재함에 표준 유로 팔레트 2장을 실을 수 있으며 최대
            적재량은{" "}
            <span style={AS.highlight}>420kg</span>,{" "}
            <span style={AS.highlight}>6.9kWh 배터리</span>로 약{" "}
            <span style={AS.highlight}>90km</span>를 주행할 수 있다. 시국 내 라스트마일
            배송에 활용될 예정이다.
          </p>

          <Img src={IMGS[3]} alt="Fiat Topolino Vatican City electric car side view" />

          <h2 style={AS.h2}>바티칸의 생태적 전환 2030</h2>

          <p style={AS.p}>
            바티칸 시국은 더 넓은 환경 공약의 일환으로 차량 탄소 발자국 감축을 목표로
            하고 있으며, 이번 토폴리노 도입은 그 중 가장 눈에 띄는 조치 중 하나다.
            영국 가격 기준 토폴리노 한 대의 가격은{" "}
            <span style={AS.highlight}>£8,995</span>이며, 바티칸이 20대 대량 구매에
            할인을 받았는지는 확인되지 않았다.
          </p>

          <Img src={IMGS[4]} alt="Fiat Topolino Vatican City electric car programme" />

          <Img src={IMGS[5]} alt="Fiat Topolino Vatican City electric car fleet 2026" />

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>출처</span>
            <a
              href="https://www.topgear.com/car-news/electric/pope-just-ordered-20-fiat-topolinos-vatican-city"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              Top Gear ↗
            </a>
          </div>

          {/* CTA */}
          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>신차 딜 알림 받기</div>
            <p style={AS.ctaDesc}>재고 정리 차량이 나오면 가장 먼저 알려드립니다, 매주 업데이트</p>
            <a href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</a>
          </div>

    </>
  );
}
