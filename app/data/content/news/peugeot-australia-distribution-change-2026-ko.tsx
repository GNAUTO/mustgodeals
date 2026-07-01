import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

const IMGS = [
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/7522076d-30b2-59d8-8262-7b8934550000",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/lqapoa8dbnbz5nup3agn",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/1e000304-7655-5e71-81c1-5c8752150000",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/68a15138-b635-5956-b26d-b6b2f0750000",
];

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={AS.imgWrap}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="article-img"
        style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
      />
      <p style={AS.imgCaption}>Image: Peugeot Media</p>
    </div>
  );
}

export default function PeugeotAustraliaDistributionChange2026KoContent() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMGS[0]}
              alt="푸조 호주 유통 변경 2026"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Peugeot Media</p>
          </div>

          <p style={AS.p}>
            푸조의 호주 독립 수입사{" "}
            <span style={AS.highlight}>인치케이프</span>가 프랑스 브랜드와의 유통 파트너십을
            종료하기로 결정했다. 2024년 11월 시트로엥 판매 중단에 이은 두 번째 결별로,
            호주 시장에서 가장 오랜 역사를 가진 자동차 브랜드 중 하나인 푸조의 미래에
            불확실성이 드리우고 있다.
          </p>

          <h2 style={AS.h2}>일방적 결별이 아닌 상호 합의</h2>

          <p style={AS.p}>
            인치케이프는 포트폴리오 전략적 검토의 일환으로{" "}
            <span style={AS.highlight}>스텔란티스와 상호 합의</span> 하에 계약 종료를
            결정했다고 밝혔다. 전환 기간은 약 12개월로 알려져 있으며, 그 동안 인치케이프의
            29개 딜러 네트워크는 기존 재고 판매와 고객 서비스, 부품 공급, 보증 처리를
            계속 진행할 예정이다.
          </p>

          <Img src={IMGS[1]} alt="푸조 호주 딜러 네트워크" />

          <h2 style={AS.h2}>스텔란티스 "푸조, 호주 시장 계속 간다"</h2>

          <p style={AS.p}>
            스텔란티스는 푸조가 호주 시장에서 철수하는 것은 아니라고 강조했다. 스텔란티스
            호주 대변인은 유통 연속성을 유지하고 향후 계획을 공유하겠다고 밝혔다. 유력한
            시나리오 중 하나는 푸조가{" "}
            <span style={AS.highlight}>스텔란티스 호주 직수입 체계에 편입</span>되어 지프,
            피아트, 알파 로메오, 리프모터와 같은 라인업을 형성하는 것이다.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>푸조 오너 필독 사항</div>
            <p style={AS.calloutText}>
              기존 오너: 12개월 전환 기간 동안 서비스·부품·보증 유지.
              신차 구매 희망자: 인치케이프 29개 딜러에서 기존 재고 구매 가능.
              신모델: 308 페이스리프트 출시 일정 현재 불투명.
            </p>
          </div>

          <h2 style={AS.h2}>시장 상황도 좋지 않다</h2>

          <p style={AS.p}>
            타이밍이 좋지 않다. 2025년 푸조의 호주 신차 등록 대수는{" "}
            <span style={AS.highlight}>1,350대</span>로 전년 대비 약 29% 감소했다. 2026년
            상반기 출시 예정이었던 308 해치백 페이스리프트 모델의 도입 일정도 현재로서는
            불투명한 상황이다.
          </p>

          <Img src={IMGS[2]} alt="푸조 308 해치백 페이스리프트" />

          <h2 style={AS.h2}>100년 가까운 호주 역사</h2>

          <p style={AS.p}>
            호주에서의 푸조 역사는{" "}
            <span style={AS.highlight}>1900년대 초</span>로 거슬러 올라간다. 이번 결별
            이후 스텔란티스가 얼마나 빠르게 새로운 유통 구조를 마련하느냐에 따라, 이 오랜
            브랜드의 호주 내 미래가 결정될 것이다.
          </p>

          <Img src={IMGS[3]} alt="푸조 브랜드 헤리티지 호주" />

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>출처</span>
            <a
              href="https://www.drive.com.au/news/peugeot-australia-inchcape-distribution/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              Drive.com.au ↗
            </a>
          </div>

          {/* CTA */}
          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>신차 딜 알림 받기</div>
            <p style={AS.ctaDesc}>
              재고 정리 차량이 나오면 가장 먼저 알려드립니다, 매주 업데이트
            </p>
            <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</Link>
          </div>

    </>
  );
}
