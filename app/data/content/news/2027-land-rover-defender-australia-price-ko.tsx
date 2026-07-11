import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

const BASE = "/images/news/2027%20Land%20Rover%20Defender%20price";

const IMGS = [
  `${BASE}/10fa9603-bc1f-5dee-a235-f7e7cb650000.avif`,
  `${BASE}/4ca26a72-ed10-50f8-af03-745dccb50000.avif`,
  `${BASE}/4e74292e-3f20-5d81-b9fd-ff5155f50000.avif`,
  `${BASE}/8e442f7c-5bab-5672-8d88-58bfa8a50000.avif`,
  `${BASE}/9896fe04-af84-5b5e-88fe-1fe910950000.avif`,
  `${BASE}/a958e6f7-19b2-5a3c-88e9-80786ca50000.avif`,
  `${BASE}/afcbdfe9-7b74-5ce3-9f11-b84f36350000.avif`,
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
      <p style={AS.imgCaption}>Image: Land Rover Media</p>
    </div>
  );
}

const groupHead: React.CSSProperties = {
  padding: "8px 14px",
  fontWeight: 700,
  fontSize: "11px",
  letterSpacing: "0.08em",
  background: "#1A1A1A",
  color: "#CCDA47",
};

const newBadge: React.CSSProperties = {
  display: "inline-block",
  background: "#CCDA47",
  color: "#1A1A1A",
  fontSize: "10px",
  fontWeight: 700,
  padding: "1px 6px",
  borderRadius: "3px",
  marginLeft: "8px",
  letterSpacing: "0.05em",
};

export default function LandRoverDefender2027AustraliaPriceKoContent() {
  return (
    <>
      {/* Hero image */}
      <div style={AS.imgWrap}>
        <Image
          src={IMGS[0]}
          alt="2027 랜드로버 디펜더 외관"
          width={1200}
          height={675}
          className="article-img"
          style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Image: Land Rover Media</p>
      </div>

      <p style={AS.p}>
        랜드로버가 호주 시장에 2027년형 디펜더 주문을 개시했다. 신규 최상위 트림인
        버텍스(Vertex)가 라인업에 합류하고, 가격은 최대{" "}
        <span style={AS.highlight}>$8,400</span> 인상됐다. 엔트리 모델인 디펜더 90 S
        D250은 $102,800부터 시작하며, 첫 출고는 2026년 하반기가 될 전망이다.
      </p>

      <p style={AS.p}>
        2027년형 업데이트는 2020년 호주 출시 이후 디펜더가 맞이하는 가장 폭넓은
        제품 변화인 셈이다. 가격 조정 외에도 새로운 시트 레이아웃, 대화형 AI 음성
        인식 시스템, 신규 컬러, 그리고 두 가지 옵션 팩이 더해졌다.
      </p>

      <h2 style={AS.h2}>최대 $8,400 가격 인상</h2>

      <p style={AS.p}>
        2027년형 디펜더 대부분의 트림은 2026년형 대비 $4,400에서 $8,400 사이의
        가격 인상이 적용됐다. 엔트리 트림인 90 S D250 Auto는{" "}
        <span style={AS.highlight}>$4,400</span> 오른 $102,800이 됐다.
      </p>

      <Img src={IMGS[1]} alt="2027 랜드로버 디펜더 전면 외관" />

      <p style={AS.p}>
        반면 디펜더 옥타 블랙(Octa Black)의 가격 인상폭은 상대적으로 미미한 $500에
        그쳐 $314,300이 됐다. 옥타는 4.4리터 트윈터보 V8이 467kW를 발휘하는 디펜더의
        극한 버전이라는 점에서 이례적으로 작은 인상폭이라는 이야기다.
      </p>

      <h2 style={AS.h2}>버텍스 트림 신설, X 등급 위로</h2>

      <p style={AS.p}>
        2027년형의 핵심 변화는 <span style={AS.highlight}>버텍스(Vertex)</span> 트림
        추가다. 기존 X 등급 위에 새롭게 자리한 버텍스는 디펜더 X 플랫폼을 기반으로
        90과 110 보디 스타일로 제공된다. 옥타를 제외한 디펜더 라인업 중 가장 높은
        사양을 갖춘 것이 특징이다.
      </p>

      <Img src={IMGS[2]} alt="2027 랜드로버 디펜더 버텍스 트림" />

      <p style={AS.p}>
        버텍스의 외관을 구분 짓는 요소는 보디 컬러 로어 클래딩과 22인치 새틴 그레이
        알로이 휠이다. 일반 디펜더 컬러 팔레트와 별도로 운용되는 버텍스 전용 컬러는
        후지 화이트, 산토리니 블랙, 울스턴 그린, 보라스코 그레이, 카르파티안 그레이,
        그리고 파타고니아 화이트 매트 랩으로 구성된다.
      </p>

      <p style={AS.p}>
        가격은 버텍스 110 D350 Auto가{" "}
        <span style={AS.highlight}>$171,800</span>으로 출발하며, 90 P425 Auto는
        $176,800, 110 P425 Auto는 $181,000이다. 세 트림 모두 기존 모델에 없던
        완전 신규 추가 라인업이다.
      </p>

      <h2 style={AS.h2}>호주에만 남은 V8 엔진</h2>

      <p style={AS.p}>
        랜드로버는 2027년형에서도 호주 시장에{" "}
        <span style={AS.highlight}>5.0리터 슈퍼차저 V8</span>을 유지하기로 결정했다.
        유럽 시장에서는 이미 단종된 엔진이지만, 호주 고객들의 지속적인 수요를 반영한
        결과라는 설명이다.
      </p>

      <Img src={IMGS[3]} alt="2027 랜드로버 디펜더 옥타" />

      <p style={AS.p}>
        옥타에 탑재된 4.4리터 트윈터보 V8도 마찬가지다. 유럽 사양은 467kW에서
        397kW로 출력이 낮아졌지만, 호주 사양은{" "}
        <span style={AS.highlight}>467kW와 750Nm</span>을 그대로 유지한다. 이 시장의
        고객 기대치에 맞춘 결정이라는 것이 랜드로버 호주 측의 입장이다.
      </p>

      <h2 style={AS.h2}>디펜더 110, 6인승 레이아웃 추가</h2>

      <p style={AS.p}>
        디펜더 110에 새로운 시트 구성이 추가됐다. 2열을 일반 벤치 시트 대신 독립
        캡틴 시트 두 개로 꾸미는 6인승 레이아웃으로, 2열 중앙에 활용 공간이 생기는
        구조다. 기존의 5인승과 7인승에 더해 6인승 선택지가 더해진 것인 만큼,
        다양한 활용 방식을 원하는 구매자에게 실질적인 옵션이 될 것이다.
      </p>

      <h2 style={AS.h2}>Hey Land Rover 음성 인식 전 모델 적용</h2>

      <p style={AS.p}>
        2027년형 디펜더 전 모델에는 새로운 대화형 AI 음성 인식 시스템이 탑재된다.
        &ldquo;<span style={AS.highlight}>Hey Land Rover</span>&rdquo;라는 호출어로
        활성화되며, 고정된 명령어 방식이 아닌 자연스러운 문장으로 내비게이션, 공조,
        미디어 설정을 제어할 수 있다.
      </p>

      <Img src={IMGS[4]} alt="2027 랜드로버 디펜더 실내 기술 시스템" />

      <p style={AS.p}>
        음성 인터페이스는 2027년형 디펜더 전반에 적용된 Pivi Pro 인포테인먼트
        플랫폼에 통합됐다. 랜드로버 측은 호주 영어 억양과 표현 방식을 반영해
        개발됐다고 밝혔다.
      </p>

      <h2 style={AS.h2}>나미브 오렌지 신규 컬러 추가</h2>

      <p style={AS.p}>
        외관 컬러에는{" "}
        <span style={AS.highlight}>나미브 오렌지(Namib Orange)</span>가 새롭게 추가됐다.
        S, X-Dynamic SE, X-Dynamic HSE, X 등급 전 보디 스타일에 적용 가능한 이 색상은
        기존 디펜더 팔레트에서 보기 드문 따뜻한 어스 톤이다.
      </p>

      <p style={AS.p}>
        옥타에는 <span style={AS.highlight}>울스턴 그린(Woolstone Green)</span>이 신규
        추가됐다. 110 트로피 에디션은 기존 케직 그린에서{" "}
        <span style={AS.highlight}>산토리니 블랙</span>으로 헤리티지 컬러가 교체되고,
        딥 샌드글로우 옐로는 그대로 유지된다.
      </p>

      <Img src={IMGS[5]} alt="2027 랜드로버 디펜더 신규 컬러" />

      <h2 style={AS.h2}>테크놀로지 팩과 익스텐디드 익스테리어 팩</h2>

      <p style={AS.p}>
        2027년형에는 두 가지 신규 옵션 팩이 새롭게 도입됐다.
      </p>

      <p style={AS.p}>
        <span style={AS.highlight}>테크놀로지 팩</span>은 S, X-Dynamic SE, X-Dynamic HSE
        등급에 적용 가능하며, 홈 충전 소켓, 헤드업 디스플레이, 메리디언 서라운드 사운드
        시스템, 디지털 리어뷰 미러를 하나의 패키지로 묶었다. 기존에는 개별 옵션으로만
        선택할 수 있던 항목들이다.
      </p>

      <p style={AS.p}>
        <span style={AS.highlight}>익스텐디드 익스테리어 팩</span>은 X-Dynamic SE,
        X-Dynamic HSE, 하드 탑, 130 V8에 제공되며, 전후면 범퍼 디자인, 신규 리어
        스포일러, 스페어 휠 커버로 구성된다. 루프 마운트 라이트 팟과 테일도어 기어
        캐리어는 별도 액세서리로도 추가 가능하다.
      </p>

      <h2 style={AS.h2}>2026 상반기 럭셔리 대형 SUV 판매 1위</h2>

      <p style={AS.p}>
        랜드로버에 따르면 2026년 상반기 기준 디펜더는 호주 럭셔리 대형 SUV 부문
        판매 1위를 기록했다. 상반기 출고량은{" "}
        <span style={AS.highlight}>1,911대</span>로, BMW X5 1,769대, 렉서스 RX 1,182대,
        메르세데스벤츠 GLE 1,054대, 포르쉐 카이엔 1,036대를 앞섰다.
      </p>

      <Img src={IMGS[6]} alt="2027 랜드로버 디펜더 측면 외관" />

      <p style={AS.p}>
        2위인 BMW X5와의 격차는 상반기 기준 142대다. X5 역시 2026년 하반기 완전
        변경 모델로 전환되는 만큼, 두 모델 간 경쟁은 2027년에도 이어질 전망이다.
      </p>

      <hr style={AS.divider} />

      <h2 style={AS.h2}>2027년형 디펜더 호주 가격표</h2>

      <div style={{ overflowX: "auto", margin: "16px 0 8px" }}>
        <table style={AS.table}>
          <thead>
            <tr>
              <th style={{ ...AS.th, width: "70%" }}>모델</th>
              <th style={{ ...AS.th, textAlign: "right" }}>가격 (MLP)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan={2} style={groupHead}>DEFENDER 90</td>
            </tr>
            <tr>
              <td style={AS.td}>90 S D250 Auto</td>
              <td style={AS.tdRight}>$102,800</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>
                Vertex 90 P425 Auto
                <span style={newBadge}>신규</span>
              </td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>$176,800</td>
            </tr>

            <tr>
              <td colSpan={2} style={groupHead}>DEFENDER HARD TOP 110</td>
            </tr>
            <tr>
              <td style={AS.td}>Hard Top 110 S D250 Auto</td>
              <td style={AS.tdRight}>$107,800</td>
            </tr>

            <tr>
              <td colSpan={2} style={groupHead}>DEFENDER 110</td>
            </tr>
            <tr>
              <td style={AS.td}>110 S D250 Auto</td>
              <td style={AS.tdRight}>$107,800</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>
                Vertex 110 D350 Auto
                <span style={newBadge}>신규</span>
              </td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>$171,800</td>
            </tr>
            <tr>
              <td style={AS.td}>
                Vertex 110 P425 Auto
                <span style={newBadge}>신규</span>
              </td>
              <td style={AS.tdRight}>$181,000</td>
            </tr>

            <tr>
              <td colSpan={2} style={groupHead}>DEFENDER 130</td>
            </tr>
            <tr>
              <td style={AS.td}>130 S D250 Auto</td>
              <td style={AS.tdRight}>$115,800</td>
            </tr>

            <tr>
              <td colSpan={2} style={groupHead}>DEFENDER OCTA</td>
            </tr>
            <tr>
              <td style={AS.td}>Octa Auto</td>
              <td style={AS.tdRight}>$308,800</td>
            </tr>
            <tr>
              <td style={{ ...AS.td, background: "rgba(0,0,0,0.02)" }}>Octa Black Auto</td>
              <td style={{ ...AS.tdRight, background: "rgba(0,0,0,0.02)" }}>$314,300</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p style={{ fontSize: "12px", color: "#999", marginTop: "6px", marginBottom: "24px", lineHeight: 1.6 }}>
        가격은 제조사 리스트 프라이스(MLP) 기준이며 온로드 비용 미포함입니다. 전체 트림
        가격은 landrover.com/en-au에서 확인할 수 있습니다.
      </p>

      {/* Source */}
      <div style={AS.sourceBox}>
        <span style={AS.sourceLabel}>출처</span>
        <a
          href="https://media.landrover.com/en-AU"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
        >
          Land Rover Media Australia ↗
        </a>
      </div>

      {/* CTA */}
      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>신차 입고 알림 받기</div>
        <p style={AS.ctaDesc}>
          급처분 차량이 시장에 나오는 즉시 알려드립니다. 매주 업데이트
        </p>
        <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</Link>
      </div>
    </>
  );
}
