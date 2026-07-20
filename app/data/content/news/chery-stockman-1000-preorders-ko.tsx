import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/chery_stockman/";

export default function CheryStockman1000PreordersKoContent() {
  return (
    <>
      <p style={AS.p}>
        호주 첫 디젤 플러그인 하이브리드 유트가 출시 몇 달 전부터 실수요를 끌어모으고 있습니다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}chery_stockman_1.jpg`}
          alt="체리 스톡맨 디젤 플러그인 하이브리드 듀얼캡 유트 외관 전면"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>Photo: Chery Australia</p>
      </div>

      <p style={AS.p}>
        체리 오스트레일리아가 스톡맨에 대해 관심 등록 5000건, 실제 사전예약 1000대 이상을 이미
        받았다고 밝혔습니다. 가격도 전체 사양도 공개되기 전에 나온 숫자예요.
      </p>

      <p style={AS.p}>
        이 숫자가 의미 있는 건 스톡맨이 어떤 차냐 때문입니다. 호주에서 처음 팔리는 디젤
        플러그인 하이브리드 듀얼캡이 될 예정이거든요. 2.5리터 터보디젤에 플러그인 하이브리드를
        얹어서 합산 <span style={AS.highlight}>350kW에 800Nm</span>을 낸다고 체리는 밝혔습니다.
        전기만으로 최대 <span style={AS.highlight}>100km</span>를 간다는데, 이 수치는 옛날
        NEDC 방식 기준이라 요즘 많이 쓰는 WLTP보다 후하게 나옵니다. 다른 차랑 비교할 땐
        조금 깎아서 보는 게 좋아요.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}chery_stockman_3.jpg`}
          alt="체리 스톡맨 유트 사이드 프로파일과 올터레인 타이어"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Chery Australia</p>
      </div>

      <p style={AS.p}>
        숫자만 보면 호주 사람들이 유트 쓰는 방식에 맞춰 만든 차입니다. 견인{" "}
        <span style={AS.highlight}>3500kg</span>, 4x4, 올터레인 타이어 기본, 지상고 247mm를
        확정했어요. 토크는 BYD 샤크 6 퍼포먼스랑 GWM 캐논 알파 PHEV보다 앞서고, 최고 출력은
        샤크 6랑 같습니다.
      </p>

      <p style={AS.p}>
        들어가는 시장은 빠르게 차고 있어요. 스톡맨은 호주에서 다섯 번째 플러그인 하이브리드
        유트가 됩니다. 앞에 BYD 샤크 6, GWM 캐논 알파 PHEV, 포드 레인저 PHEV, JAC 헌터가
        있고요. 이 중 제일 싼 건 헌터로, 온로드 비용 빼고 5만 불 아래에서 시작합니다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}chery_stockman_5.jpg`}
          alt="체리 스톡맨 실내 캐빈과 기술 사양"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Chery Australia</p>
      </div>

      <p style={AS.p}>
        아직 빠진 건 그 1000대가 진짜 판매로 이어질지를 가를 부분, 바로 가격입니다. 체리는
        아직 스톡맨 가격을 안 내놨고 등급이랑 최종 사양도 나중에 공개해요. 가솔린 플러그인
        하이브리드 버전은 2027년에 나올 걸로 보입니다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}chery_stockman_6.jpg`}
          alt="체리 스톡맨 리어 쿼터뷰와 견인 능력"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Chery Australia</p>
      </div>

      <p style={AS.p}>
        스톡맨은 2026년 4분기에 호주 매장에 들어옵니다.
      </p>
    </>
  );
}
