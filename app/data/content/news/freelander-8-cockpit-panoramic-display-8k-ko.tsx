import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const IMG = "/images/news/Freelander/";

export default function Freelander8CockpitPanoramicDisplay8kKoContent() {
  return (
    <>
      <p style={AS.p}>
        체리와 재규어랜드로버 합작 브랜드 Freelander가 첫 모델 Freelander 8의 실내 세부
        사양을 공개했다. 핵심은 대시보드 전체 폭에 걸쳐 배치된{" "}
        <span style={AS.highlight}>46.3인치 파노라마 인텔리전트 디스플레이</span>로,
        화웨이, CATL, 퀄컴과의 협업으로 개발된 기술 플랫폼과 함께 탑재된다.
      </p>

      {/* 외관 히어로 */}
      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}e59bbee78987-43-e1783590439397-800x452.png`}
          alt="야간 배경 앞에 서 있는 딥 퍼플 외장의 Freelander 8 외관"
          width={800}
          height={452}
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
          priority
        />
        <p style={AS.imgCaption}>이미지: Freelander 공식 미디어</p>
      </div>

      <h2 style={AS.h2}>46.3인치 파노라마 디스플레이</h2>

      <p style={AS.p}>
        화면 폭은 1.2미터로, Freelander는 이 수치가 동급 주요 경쟁 모델 대비{" "}
        <span style={AS.highlight}>300밀리미터 더 넓다</span>고 밝혔다. 해상도는 8K이며
        제조사 기준으로 표준 4K 대비 4배 높은 픽셀 수다. 최대 밝기는{" "}
        <span style={AS.highlight}>1,000니트</span>이고, Freelander는 이 크기에 이 밝기를
        갖춘 전천후 초고화질 디스플레이로는 업계 유일하다고 주장하고 있다.
      </p>

      {/* 계기판 실제 데이터 표시 */}
      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}e59bbee78987-45-edited.webp`}
          alt="타이어 공기압과 주행 정보를 표시 중인 Freelander 8 파노라마 계기판 전경"
          width={1100}
          height={515}
          style={{ width: "100%", height: "340px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>이미지: Freelander 공식 미디어</p>
      </div>

      {/* 스티어링 휠 너머 콕핏 */}
      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}e59bbee78987-44-edited.webp`}
          alt="저조도 환경에서 스티어링 휠 너머로 보이는 Freelander 8 콕핏과 파노라마 디스플레이"
          width={1100}
          height={619}
          style={{ width: "100%", height: "380px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>이미지: Freelander 공식 미디어</p>
      </div>

      <h2 style={AS.h2}>실내 구성과 차체 제원</h2>

      <p style={AS.p}>
        Freelander 8은{" "}
        <span style={AS.highlight}>2+2+2 6인승 레이아웃</span>을 기반으로 한다. 차체 길이
        5,118밀리미터, 너비 2,050밀리미터, 높이 1,898밀리미터, 휠베이스 3,040밀리미터의
        풀사이즈 SUV다. 아웃도어용 견인 패키지는 선택 옵션으로 제공되며 최대 견인 중량은
        <span style={AS.highlight}>2,000킬로그램</span>이다. 실내 디자인은 Concept 97의
        디자인 언어를 따라 비례와 면 구성을 양산형으로 이어받았다.
      </p>

      <h2 style={AS.h2}>스냅드래곤 8397, 화웨이 ADS 4.1, 896라인 라이다</h2>

      <p style={AS.p}>
        전 트림에{" "}
        <span style={AS.highlight}>퀄컴 스냅드래곤 8397 자동차용 칩</span>이 기본 탑재된다.
        이전 세대 8295 플랫폼과 비교해 CPU 성능 3배, GPU 성능 약 3배, NPU 연산 성능은
        12배 향상됐다. NPU 성능 향상은 인포테인먼트, 운전자 모니터링, 자율주행 기능 전반의
        온보드 AI 처리를 뒷받침한다.
      </p>

      <p style={AS.p}>
        <span style={AS.highlight}>화웨이 첸쿤 ADS 4.1</span> 지능형 주행 시스템도 전
        트림에 기본 탑재되며, 향후 OTA 업그레이드를 지원하는 구조로 설계됐다. 센서는
        <span style={AS.highlight}>896라인 라이다</span>를 포함하고, 배터리 시스템은
        CATL이 공급한다.
      </p>

      {/* 디스플레이 시계 클로즈업 */}
      <div style={AS.imgWrap}>
        <Image
          src={`${IMG}e59bbee78987-46-edited-768x432.webp`}
          alt="굵은 폰트로 09시 07분을 표시 중인 Freelander 8 파노라마 디스플레이 우측 클로즈업"
          width={768}
          height={432}
          style={{ width: "100%", height: "320px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>이미지: Freelander 공식 미디어</p>
      </div>

      <h2 style={AS.h2}>출시 일정과 트림 구성</h2>

      <p style={AS.p}>
        Freelander 8은{" "}
        <span style={AS.highlight}>2026년 하반기</span> 출시 예정이다. 트림은 Pro, Max,
        Max+ 세 가지로 예상된다. 외장 색상은 앞선 공개 행사에서 이미 발표됐으며,
        파워트레인 출력과 가격 등 세부 사양은 아직 확정되지 않았다.
      </p>

      <div style={AS.sourceBox}>
        <span style={AS.sourceLabel}>출처</span>
        <span style={{ fontSize: "13px", color: "#555" }}>carnewschina.com</span>
      </div>
    </>
  );
}
