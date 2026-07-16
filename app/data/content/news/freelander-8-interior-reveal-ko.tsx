import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/freelander_8_interior/";

export default function Freelander8InteriorRevealKoContent() {
  return (
    <>
      <p style={AS.p}>
        체리와 재규어 랜드로버의 합작 모델 프리랜더 8의 실내 이미지가 공식 공개됐다. 두 회사가
        함께 만든 첫 번째 양산차의 완성된 실내가 처음으로 공개된 것이다. 시트 구성, 소재 처리,
        통합 기술 사양이 이번 공개의 핵심이다. 중국 시장 데뷔는 2026년 하반기로 예정됐다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}freelander_8_interior_1.webp`}
          alt="프리랜더 8 실내 커맨더와 L·A·D·Y 이중 마스터 시트 배치"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>Photo: Chery Jaguar Land Rover</p>
      </div>

      <h2 style={AS.h2}>이중 마스터 컨셉과 실내 소재</h2>

      <p style={AS.p}>
        실내는 각각 고유한 명칭을 가진 두 시트 포지션을 중심으로 구성됐다. 운전석은
        Commander로 명명됐다. 시야가 높은 위치에 놓이며 기본 조작계가 시선을 분산하지 않는
        범위 안에 배치된다. 조수석은 <span style={AS.highlight}>L·A·D·Y</span>라는 명칭을 부여받고
        별도의 기능 세트를 갖췄다. 이 자리의 레그룸은{" "}
        <span style={AS.highlight}>1,200mm</span>로 신장 1.9미터까지의 탑승자가 다리를 뻗을 수
        있다. 조수석 측에는 전폭 리모트 디스플레이, 부드러운 기류 방식의 공조, 영국 저택
        인테리어에서 착안한 방향 시스템, 전용 수납 공간이 포함된다. 합작법인은 이 구성 전체를
        퍼스트 클래스 캐빈 컨셉으로 설명한다.
      </p>

      <p style={AS.p}>
        물리 버튼에는 파리 스터드(Clous de Paris) 패턴이 적용됐다. 반복되는 피라미드 텍스처가
        특징인 이 패턴은 고급 시계 제조 기법에서 유래했다. 센터 노브는 K9 옵티컬 크리스털
        소재에{" "}
        <span style={AS.highlight}>144개의 정밀 컷 페이스</span>를 가공한 형태다. 노브를 둘러싼
        이중 링 앰비언트 라이팅은{" "}
        <span style={AS.highlight}>256가지 색상</span>을 표현한다. 체리와 재규어 랜드로버는 이
        노브를 옵티컬 그레이드 듀얼 플로팅 크리스털 노브로 지칭한다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}freelander_8_interior_3.jpg`}
          alt="프리랜더 8 파리 스터드 물리 버튼과 크리스털 노브 디테일"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Chery Jaguar Land Rover</p>
      </div>

      <h2 style={AS.h2}>디스플레이 구조와 차량 기술</h2>

      <p style={AS.p}>
        대시보드는 합작법인이 T자 브릿지(T-shaped Bridge)로 명명한 레이아웃을 중심으로
        구성된다. 이 프레임 안에{" "}
        <span style={AS.highlight}>46.3인치 8K 파노라마 리모트 디스플레이</span>와{" "}
        <span style={AS.highlight}>15.6인치 LED 센터 스크린</span>이 통합됐다. 두 패널은 별도
        요소가 아닌 하나의 건축적 레이아웃으로 묶여 있다.
      </p>

      <p style={AS.p}>
        화웨이 첸쿤 ADS 5.0 지능형 주행 보조 시스템이 전 트림에 기본 적용된다. 고속도로와
        도심 환경을 모두 포괄하며 객체 감지, 경로 계획, 돌발 교통 상황 대응을 처리한다.
        차량 내부 연산은{" "}
        <span style={AS.highlight}>퀄컴 스냅드래곤 8397</span> 자동차용 칩이 담당한다. 프리랜더
        8은 이 칩을 양산차에 탑재한 세계 최초 수준의 모델 중 하나다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}freelander_8_interior_6.jpg`}
          alt="프리랜더 8 T자 브릿지 대시보드와 46.3인치 8K 파노라마 디스플레이"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Chery Jaguar Land Rover</p>
      </div>

      <h2 style={AS.h2}>파워트레인 플랫폼과 시장 맥락</h2>

      <p style={AS.p}>
        프리랜더 8은 <span style={AS.highlight}>800V 고전압 플랫폼</span> 기반이다. 에너지
        시스템은 CATL과 공동 개발한 Freevoy 배터리로, 레인지 익스텐더와 하이브리드 운용 모드를
        모두 지원한다. 전지형 주행 관리는 화웨이 i-ATS 지능형 전지형 시스템이 맡으며 구동과
        서스펜션 입력을 통합 제어한다.
      </p>

      <p style={AS.p}>
        이번 공개의 배경에는 사업 구조상의 변화가 있다. 재규어 랜드로버는 이달 중국 딜러
        네트워크에 대한 자국 생산 모델 공급을 중단했다. 해당 생산 시설은 체리와 재규어
        랜드로버의 합작 공장으로, 이제 프리랜더 라인 생산에 집중하게 됐다. 프리랜더 8은 이
        재편된 생산 체제에서 나오는 첫 번째 모델이다.
      </p>

      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}freelander_8_interior_2.webp`}
          alt="프리랜더 8 실내 전체 Commander와 L·A·D·Y 시트 배치 전경"
          width={1920}
          height={1080}
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Photo: Chery Jaguar Land Rover</p>
      </div>

      <p style={AS.p}>
        중국 시장 출시는 2026년 하반기로 예정돼 있다. 현재 공개된 정보는 중국 시장에 국한된다.
        체리나 재규어 랜드로버 어느 쪽도 국제 출시 일정에 대한 정보를 제공하지 않았다.
      </p>
    </>
  );
}
