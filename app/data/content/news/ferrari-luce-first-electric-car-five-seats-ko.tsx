import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/The Luce is not an act of heresy/";

export default function FerrariLuceFirstElectricCarFiveSeatsKoContent() {
  return (
    <>
      <p style={AS.p}>
        페라리가 첫 완전 전기차 루체를 공개했다. 브랜드의 미드십 슈퍼카 공식을 버리고
        5인승 해치백 형태를 선택했으며, 외장과 내장 디자인은 조니 아이브와 마크 뉴슨이
        이끄는 스튜디오 러브프롬이 맡았다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}Ferrari Luce.jpg`}
          alt="페라리 루체 외관, 레드 컬러 전면 3/4 앵글"
          width={1784}
          height={1004}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>이미지: 페라리 공식 미디어</p>
      </div>

      <h2 style={AS.h2}>형태와 패키징</h2>

      <p style={AS.p}>
        루체의 실루엣은 페라리 양산차 역사에서 전례가 없다. 높고 수직적인 원박스
        형태에 5인승을 담았고, 도어는 리어 힌지 방식이다. 원형 리어 램프 같은
        디테일에서 페라리의 계보가 읽히지만, 전체적인 형태는 브랜드의 어떤 모델과도 닮지 않았다.
      </p>

      <p style={AS.p}>
        페라리는 2019년에 루체 개발을 시작했다. 개발팀은 초기에 기존 미드십 플랫폼을
        전기차로 전환하는 방식이 실질적인 이점을 주지 못한다고 판단했다. 엔진과 연료탱크를
        배터리와 모터로 교체한다고 해서 미드십 레이아웃의 핵심인 무게중심과 관성 모멘트
        특성이 재현되지 않는다는 결론이었다. 루체는 백지에서 다시 설계했으며 부품의
        95퍼센트가 신규다. 배터리팩은 차체에 통합되어 비틀림 강성에 직접 기여한다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}Ferrari Luce (5).jpg`}
          alt="페라리 루체 측면 및 후면 프로파일"
          width={1784}
          height={1004}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>이미지: 페라리 공식 미디어</p>
      </div>

      <p style={AS.p}>
        개발 과정에서 F80의 전기 버전도 검토했다. 이 접근은 노르트슐라이페 3분의 2
        바퀴에서 배터리가 소진된다는 사실이 확인된 뒤 폐기됐다. 패키징 제약과 공력 효율
        면에서 출발점으로 삼기에 적합하지 않았다는 설명이다.
      </p>

      <p style={AS.p}>
        차체는 75퍼센트 재활용 알루미늄으로 제작했다. 페라리는 루체가 자사가 만든 차
        가운데 공기저항이 가장 낮다고 밝혔으나, 항력계수 수치는 공개하지 않았다.
        뒷바퀴 직경은 24인치, 앞바퀴는 23인치다. 페라리 양산차 최초로 별도 서브프레임을
        사용했으며, 엘라스토머 부시로 차체에 연결해 소음과 진동을 줄였다.
      </p>

      <h2 style={AS.h2}>파워트레인</h2>

      <p style={AS.p}>
        루체에는 <span style={AS.highlight}>122kWh 배터리</span>와 4개의 전기모터가
        앞뒤 액슬에 각각 두 개씩 탑재된다. 전축 출력은 282마력, 후축 출력은 831마력이며
        합산 최고출력은 <span style={AS.highlight}>1,036마력</span>이다. 뒷바퀴 토크는
        5,900lb ft이고, 앞 모터의 최고 회전수는 3만rpm이다.
      </p>

      <p style={AS.p}>
        신규 차량제어유닛이 초당 200회 목표값을 갱신하며 세 축 전 영역에서 휠 개별
        제어를 수행한다. 실내 사운드는 별도의 합성 오디오 없이 리어 인버터가 자연 발생시키는
        주파수를 활용해 만든다.
      </p>

      <h2 style={AS.h2}>실내와 디자인</h2>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}Ferrari Luce (7).webp`}
          alt="페라리 루체 실내, 대시보드와 스티어링휠"
          width={892}
          height={502}
          style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>이미지: 페라리 공식 미디어</p>
      </div>

      <p style={AS.p}>
        3스포크 스티어링휠은 재활용 알루미늄을 소재로 19개의 CNC 가공 부품으로 구성된다.
        대시보드는 프레스 판금이 아닌 알루미늄 단일 소재 절삭 가공으로 제작해 캐빈 전폭을
        가로지르는 하나의 부품으로 완성했다. 물리 공조 스위치는 그대로 유지했으며, 속도계에는
        실물 바늘이 달려 있다.
      </p>

      <p style={AS.p}>
        센터콘솔은 코닝이 개발한 글라스를 중심으로 구성된다. 전용 차량 키는 콘솔의
        지정된 홈에 도킹되며 이잉크 방식을 사용한다. 차량 전용 서체 LF 마라넬로도
        개발됐다.
      </p>

      <p style={AS.p}>
        페라리는 루체 발표와 함께 6기통, 8기통, 12기통 엔진 모델을 계속 판매한다는 점을
        명시했다. 루체는 기존 어떤 모델 라인의 후속 차량으로 소개되지 않았다.
      </p>
    </>
  );
}
