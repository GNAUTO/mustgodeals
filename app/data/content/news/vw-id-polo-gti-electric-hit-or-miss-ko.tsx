import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/vw_polo_gti/";

export default function VwIdPoloGtiElectricHitOrMissKoContent() {
  return (
    <>
      <p style={AS.p}>
        폭스바겐 ID.폴로 GTI가 역대 가장 강력한 양산 폴로로 공개됐다. 폭스바겐은 이 차의
        주행 감각이 기존 내연기관 폴로 GTI보다 현행 골프 GTI에 더 가깝다고 설명한다.
        소형 전기차로서는 상당히 강한 주장이고, 이미 정반대 반응이 나오고 있다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_polo_gti_4.webp`}
          alt="폭스바겐 ID.폴로 GTI 전기 핫해치 외관 전면 쿼터뷰 레드 컬러"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <h2 style={AS.h2}>ID.폴로 GTI의 제원</h2>

      <p style={AS.p}>
        ID.폴로 GTI는 단일 프론트 모터로{" "}
        <span style={AS.highlight}>166 kW, 290 Nm</span>을 발휘하며,
        0에서 100 km/h 가속은 <span style={AS.highlight}>6.8초</span>를 주장한다.
        52.2 kWh 배터리 기준 WLTP 항속거리는 최대{" "}
        <span style={AS.highlight}>484 km</span>다. 구동 방식은 전자 제어 전륜 차동 잠금 장치를
        기본 탑재한 전륜구동이다. 폭스바겐은 이 전륜 레이아웃을 1976년 최초의 GTI와 연결되는
        계보로 강조하고 있다.
      </p>

      <p style={AS.p}>
        실내에는 물리 버튼이 복귀했다. 최근 폭스바겐이 밀어붙여온 터치 중심 인터페이스에서
        의도적으로 방향을 튼 것이다. 외관 스타일링도 기존 폴로 세대보다 한층 뚜렷해진
        GTI 전용 디자인 요소를 갖췄다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_polo_gti_1.webp`}
          alt="VW ID.폴로 GTI 실내 물리 버튼과 스포츠 스티어링 휠"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <h2 style={AS.h2}>회의적 시각</h2>

      <p style={AS.p}>
        회의적인 입장의 근거는 전기 퍼포먼스 카가 남긴 최근의 실망스러운 전례다. 출시 전
        큰 기대를 받았던 여러 전기 핫해치가 막상 뚜껑을 열면 감흥 없는 스티어링, 기계와
        유리된 듯한 주행감, 적극적으로 달리기 어려운 항속거리로 기대를 저버렸다. 알핀 A290을
        비롯한 여러 모델이 이 범주에 든다. 유일한 예외로 꼽히는 차는 현대 아이오닉 5 N으로,
        기대에 실제로 부응한 전기 퍼포먼스 카로 두루 인정받고 있다.
      </p>

      <p style={AS.p}>
        ID.폴로 GTI에 대한 우려는 폭스바겐이 도전보다 안정을 택한 것처럼 보인다는 점이다.
        넓은 수요층을 겨냥해 신중하게 설계된 차는 모든 수치에서 완성도 높은 통근차로 귀결될
        수 있다. GTI라는 이름이 약속하는 주행 몰입감보다는 배지만 달린 장바구니차로 끝날
        가능성을 배제하기 어렵다는 시각이다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_polo_gti_3.webp`}
          alt="VW ID.폴로 GTI 리어 뷰 GTI 배지와 레드 브레이크 캘리퍼"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <h2 style={AS.h2}>긍정적 시각</h2>

      <p style={AS.p}>
        반대로 낙관적인 평가는 유용한 전제에서 출발한다. 이 차가 대체하는 내연기관 폴로 GTI
        자체가 애초에 특별히 흥미로운 차가 아니었다는 점이다. 세련되고 무난하고 일상에서
        편하게 탈 수 있는 차였지만, GTI 이름에서 기대하는 감흥을 주는 차는 아니었다.
        그 기준에서 본다면 물리 버튼 복귀, 더 강해진 외관, 뚜렷해진 성격만으로도 이미
        전작보다 앞서 있다.
      </p>

      <p style={AS.p}>
        초기 승차감 평가도 긍정적이다. 알핀 A290보다 최고속력은 낮지만 승차감은 더 낫다는
        평가가 나왔다. 이 관점에서 가장 기대되는 것은 ID.폴로 GTI, 알핀 A290, 미니 JCW
        일렉트릭 3파전 비교 테스트다. 그 결과가 나오면 신형 폭스바겐이 떠오르는 전기 핫해치
        시장에서 어디에 위치하는지 명확해질 것이다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}vw_polo_gti_2.webp`}
          alt="VW ID.폴로 GTI 사이드 프로파일 스포티한 자세와 알로이 휠 디자인"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Volkswagen</p>
      </div>

      <p style={AS.p}>
        ID.폴로 GTI는 확립된 경쟁 모델이 아직 많지 않고 이 가격대의 전기 퍼포먼스가
        어떤 모습이어야 하는지 아직 정답이 없는 시장에 진입한다. 유럽 판매는 2026년에
        시작된다. 우핸들 시장을 포함한 국제 출시 일정은 폭스바겐이 아직 공개하지 않았다.
      </p>
    </>
  );
}
