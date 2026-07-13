import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/Genesis GV60 Magma price/";

export default function GenesisGv60MagmaAustraliaPrice130000KoContent() {
  return (
    <>
      <p style={AS.p}>
        제네시스가 브랜드 첫 마그마 모델인 GV60 Magma를 호주에 출시했다. 가격은{" "}
        <span style={AS.highlight}>온로드 비용 제외 130,000달러</span>다.
        기본형 GV60보다 약 47퍼센트 높고, 같은 플랫폼을 공유하는 현대 Ioniq 5 N보다
        15,000달러 비싸다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}2c8e99eb-eb87-5c68-b28b-2e4071550000.avif`}
          alt="제네시스 GV60 Magma 마그마 오렌지 외장, 전면 3/4 앵글"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>이미지: 제네시스 호주</p>
      </div>

      <h2 style={AS.h2}>가격과 위치</h2>

      <p style={AS.p}>
        GV60 Magma AWD의 가격은 온로드 비용 제외 130,000달러다. 기본형인 GV60 Advanced RWD는
        88,300달러로, 마그마는 여기에{" "}
        <span style={AS.highlight}>약 47퍼센트의 프리미엄</span>이 붙는다. 현대 Ioniq 5 N과
        비교하면 <span style={AS.highlight}>15,000달러</span> 높다.
      </p>

      <table style={AS.table}>
        <thead>
          <tr>
            <th style={AS.th}>트림</th>
            <th style={{ ...AS.th, textAlign: "right" }}>가격 (온로드 비용 제외)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={AS.td}>GV60 Advanced RWD</td>
            <td style={AS.tdRight}>$88,300</td>
          </tr>
          <tr>
            <td style={AS.td}>GV60 Magma AWD</td>
            <td style={AS.tdRight}>$130,000</td>
          </tr>
        </tbody>
      </table>

      <h2 style={AS.h2}>성능</h2>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}30d5b285-1abe-5280-bdf8-d64f2f750000.avif`}
          alt="제네시스 GV60 Magma 후면, 스포일러와 디퓨저"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>이미지: 제네시스 호주</p>
      </div>

      <p style={AS.p}>
        GV60 Magma는 듀얼 모터 AWD 구성이다. 부스트 모드에서 최대{" "}
        <span style={AS.highlight}>478 kW, 790 Nm</span>을 발휘하며, 일반 주행 모드에서는
        448 kW, 740 Nm다. 0에서 100 km/h까지{" "}
        <span style={AS.highlight}>3.4초</span>를 주장하며, Ioniq 5 N과 가속 수치는 같지만
        토크는 20 Nm 더 높다.
      </p>

      <p style={AS.p}>
        84 kWh 배터리를 탑재하며 WLTP 기준 425 km 주행거리를 주장한다. 주행 기술로는
        가상 기어 시프트, 드리프트 모드, 대형 브레이크, 전자제어 LSD, 어댑티브 서스펜션이
        들어간다. 이 시스템들은 Ioniq 5 N과 상당 부분 공유한다.
      </p>

      <p style={AS.p}>
        외관상으로는 기본형 GV60보다 차고가 낮아지고 21인치 휠이 장착된다. 리어 스포일러,
        전용 리어 범퍼, 프론트 스팻 등 공력 부품이 추가됐다. 마그마 오렌지 외장 색상은
        이 모델에서만 선택 가능하다.
      </p>

      <h2 style={AS.h2}>장비와 보증</h2>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}349c16f6-fafe-566e-8e63-1b64c1650000.avif`}
          alt="제네시스 GV60 Magma 실내, OLED 디스플레이와 스포츠 시트"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "380px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>이미지: 제네시스 호주</p>
      </div>

      <p style={AS.p}>
        실내에는 계기판과 인포테인먼트를 통합한 27인치 OLED 와이드 디스플레이가 탑재된다.
        무선 애플 카플레이와 안드로이드 오토를 지원하며, Ioniq 5 N 및 Ioniq 6 N이
        수동 조절 시트를 쓰는 것과 달리 GV60 Magma에는 전동 조절 스포츠 시트가 들어간다.
        스웨이드와 가죽 마감, 17스피커 뱅앤올룹슨 오디오, 헤드업 디스플레이, 디지털
        룸미러, 앞좌석 열선과 통풍, 뒷좌석 양쪽 열선이 기본 사양이다.
      </p>

      <p style={AS.p}>
        보증은 다른 제네시스 모델과 동일하다. GV60 Magma에는{" "}
        <span style={AS.highlight}>5년 무제한 주행거리 보증</span>과 동일 기간 무상 정기점검이
        제공된다.
      </p>
    </>
  );
}
