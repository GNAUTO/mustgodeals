import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/zeekr_9x/";

export default function Zeekr9xFiveSeatAustraliaLaunch2027KoContent() {
  return (
    <>
      <p style={AS.p}>
        지커가 9X에 5인승 구성을 추가했다. 기존에는 7인승과 6인승만 제공했으나, 호주 출시를
        앞두고 새로운 좌석 배열이 추가된 것이다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}zeekr_9x_1.avif`}
          alt="2027 지커 9X 화이트 외장, 전면 3/4 앵글"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>이미지: 지커</p>
      </div>

      <h2 style={AS.h2}>5인승 구성</h2>

      <p style={AS.p}>
        5인승 9X는 기존 다열 모델과 동일한 차체를 유지하면서 2열 시트를 캡틴 체어 2개와
        가운데 플로어 콘솔 구조로 변경했다. 총 탑승 인원보다 뒷좌석 쾌적성을 우선시하는
        배열로, 유사한 레이아웃을 유료 옵션으로 제공하는 프리미엄 유럽 SUV들과 견줄 만한 구성이다.
      </p>

      <p style={AS.p}>
        외부 치수는 기존과 동일하다. 전장 4,869mm, 전폭 1,930mm, 전고 1,685mm이며
        휠베이스는 <span style={AS.highlight}>2,998mm</span>다. 이 휠베이스 수치는 동급
        5인승 SUV 대비 2열 레그룸에서 유리하다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}zeekr_9x_2.avif`}
          alt="2027 지커 9X 5인승 실내, 2열 캡틴 체어"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>이미지: 지커</p>
      </div>

      <h2 style={AS.h2}>파워트레인</h2>

      <p style={AS.p}>
        9X는 지커의 SEA 플랫폼을 기반으로 하며 듀얼 모터 AWD 구성이다. 최대 출력은{" "}
        <span style={AS.highlight}>544 kW, 토크 710 Nm</span>이며 0에서 100 km/h까지
        3.8초를 주장한다. 100 kWh 배터리를 탑재하며 최대{" "}
        <span style={AS.highlight}>200 kW DC 급속충전</span>을 지원한다.
        CLTC 기준 주행거리는 620 km로 표기되나, 실제 WLTP 수치는 낮아질 것이며
        호주 출시 시점에 맞춰 공개될 것으로 예상된다.
      </p>

      <p style={AS.p}>
        해외 시장에서는 75 kWh 배터리와 후륜 단일 모터 구성의 저사양 모델도 존재하지만,
        호주 출시 여부는 아직 확인되지 않았다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}zeekr_9x_3.avif`}
          alt="2027 지커 9X 측면 프로파일, 루프라인과 휠 디자인"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "380px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>이미지: 지커</p>
      </div>

      <h2 style={AS.h2}>호주 출시</h2>

      <p style={AS.p}>
        지커는 2025년 001 일렉트릭 슈팅 브레이크와 소형 크로스오버 X를 앞세워 호주 시장에 진출했다.
        9X는 그 이후 제품 로드맵에 포함돼 있었다. 호주에서의 정식 출시 일자와 가격은 아직
        발표되지 않았지만, 5인승 추가로 현지 데뷔 전 모델의 폭이 넓어졌다.
      </p>

      <p style={AS.p}>
        지커는 주요 도시를 중심으로 딜러 네트워크를 구축하고 있다. 9X의 경우 001 대비
        차급과 가격대가 높은 만큼, 서비스 센터 접근성과 부품 수급 여건이 구매 결정에서
        중요한 요소가 될 것이다.
      </p>
    </>
  );
}
