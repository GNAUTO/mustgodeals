import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/volkswagen_id_cross/";

export default function VwIdCrossElectricSuvRevealKoContent() {
  return (
    <>
      <p style={AS.p}>
        폭스바겐이 ID. Cross를 공개했다. ID.Polo와 같은 플랫폼 기반의 5도어 5인승 전기 크로스오버다.
        이 모델은 폭스바겐 라인업에서 ID.4 아래에 위치하며 브랜드의 전기 SUV 진입점으로 설계됐다.
        영국 가격은 £25,000 미만으로 책정됐으며, 유럽 주류 브랜드의 신형 전기차 가운데
        비교적 낮은 가격대에 속한다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_id_cross_1.webp`}
          alt="폭스바겐 ID. Cross 전기 소형 SUV 외관 전면 쿼터뷰"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <h2 style={AS.h2}>ID. Cross가 어떤 차인가</h2>

      <p style={AS.p}>
        ID. Cross는 ID.Polo의 플랫폼을 공유하며, 기존 승용차 실루엣이 아닌 높인 크로스오버
        차체를 사용한다. 5인승 5도어 구성이며 구동은 전적으로 전륜에 맡긴다. 폭스바겐은
        사륜구동 버전을 발표하지 않았다. 실내 공간과 적재 공간을 컴팩트한 외부 치수 안에
        최대한 담는 방향으로 설계된 소형 전기 크로스오버 범주에 해당한다.
      </p>

      <p style={AS.p}>
        폭스바겐은 ID. Cross의 직접 경쟁 상대로 르노 4, 기아 EV2, 포드 퓨마 Gen E, BYD 아토 2를
        지목하고 있다. 이 모델들은 모두 비슷한 개념을 공유한다. 전기차 기준 합리적인 가격에
        실용적인 높은 차체 스타일을 제공하는 것이다. 이 세그먼트는 유럽에서 빠르게 확장되고
        있으며, ID. Cross는 폭스바겐이 이 영역에 처음으로 진입하는 전용 모델이다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_id_cross_4.webp`}
          alt="폭스바겐 ID. Cross 전기 크로스오버 사이드 프로파일과 리어뷰"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <h2 style={AS.h2}>배터리 선택과 항속거리</h2>

      <p style={AS.p}>
        출시 시점에 두 가지 배터리 옵션이 제공된다. 기본 구성은{" "}
        <span style={AS.highlight}>37 kWh 배터리</span>이며 114 hp와 133 hp 두 가지 출력으로
        제공된다. 폭스바겐이 주장하는 항속거리는 약{" "}
        <span style={AS.highlight}>315 km</span>다. 더 큰 옵션은{" "}
        <span style={AS.highlight}>52 kWh 배터리</span>와{" "}
        <span style={AS.highlight}>208 hp</span> 모터 조합으로, 주장 항속거리는 약{" "}
        <span style={AS.highlight}>435 km</span>까지 늘어난다. 두 구성 모두 전륜구동이다.
        폭스바겐은 현시점에서 어느 배터리에 대해서도 AC 또는 DC 충전 속도 수치를 공개하지
        않았다.
      </p>

      <p style={AS.p}>
        해당 항속거리 수치는 WLTP 테스트 사이클 기준의 폭스바겐 자체 발표치이며 독립적인
        검증을 거치지 않았다. 실제 주행 가능 거리는 도로 환경, 외부 기온, 냉난방 사용 여부에
        따라 달라진다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_id_cross_11.webp`}
          alt="폭스바겐 ID. Cross 실내 물리 버튼 컨트롤과 인포테인먼트 디스플레이"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <h2 style={AS.h2}>실내와 가격</h2>

      <p style={AS.p}>
        트렁크 용량은 <span style={AS.highlight}>475리터</span>이며, 앞쪽에
        <span style={AS.highlight}> 25리터 프렁크</span>가 추가 수납 공간으로 제공된다.
        실내에는 물리 버튼이 복귀했다. 폭스바겐이 최근 출시한 여러 모델에 적용하고 있는
        방향이다. 기존 MEB 플랫폼 차량에 도입된 터치 전용 인터페이스가 냉난방과 음량 조절
        같은 기본 기능마저 화면 조작에 의존하게 만든다는 지속적인 소비자 불만에 대한
        대응으로 풀이된다.
      </p>

      <p style={AS.p}>
        영국 판매 가격은 £25,000 미만부터 시작한다. 호주 판매 가격이나 출시 일정은 폭스바겐이
        아직 발표하지 않았다. 우핸들 버전 생산 계획도 확인되지 않았다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_id_cross_15.webp`}
          alt="폭스바겐 ID. Cross 전기 SUV 외관 디자인 디테일과 리어 스타일링"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <p style={AS.p}>
        ID. Cross는 폭스바겐이 전기차 라인업이 일반 소비자의 손에 닿기 어려운 가격대에만
        집중하고 있다는 비판에 대응하는 과정에서 나온 모델이다. 중국 제조사들의 가격 공세가
        이어지는 가운데 호주를 포함한 여러 시장에서 폭스바겐 전기차 판매량은 낮은 수준을
        유지하고 있다. ID. Cross는 브랜드가 라인업 하단에서 이 격차를 좁히기 위해 내놓은
        가장 명확한 시도다.
      </p>
    </>
  );
}
