import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function PolestarUsBanConnectedVehicleRuleKoContent() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.topgear.com/sites/default/files/2026/06/5193-694911-1-5%20%281%29.jpg?w=892&h=502"
              alt="폴스타 차량"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Polestar Media</p>
          </div>

          <p style={AS.p}>
            폴스타가 미국 시장에서 사실상 퇴출됐다. 미국 상무부 산업안보국(BIS)이 새로 도입한{" "}
            <span style={AS.highlight}>커넥티드 차량 규칙(Connected Vehicle Rule)</span>에 따라,
            폴스타는 2027년형부터 미국 내 신차 판매가 금지된다.
          </p>

          <h2 style={AS.h2}>왜 폴스타가 타깃이 됐나</h2>

          <p style={AS.p}>
            이번 규제의 핵심은 중국 또는 러시아와 연계된 하드웨어·소프트웨어를 탑재한 차량의
            판매를 차단하는 것이다. 중국 완성차 그룹{" "}
            <span style={AS.highlight}>지리(Geely)</span>가 대주주인 폴스타는 폴스타 2, 4,
            신형 5 세단을 모두 중국에서 생산하고 있어 규제 대상에 그대로 포함됐다.
            미국 현지에서 생산되는 폴스타 3 SUV조차 예외를 인정받지 못했다.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>산업안보국 성명</div>
            <p style={AS.calloutText}>
              산업안보국은 중국·러시아 기업들이 &ldquo;커넥티드 차량의 데이터를 공유하거나
              원격 접근을 허용하도록 강요받을 수 있다&rdquo;며 국가 안보 위협을 금지 이유로
              명시했다.
            </p>
          </div>

          <h2 style={AS.h2}>기존 미국 고객은 어떻게 되나</h2>

          <p style={AS.p}>
            폴스타는 기존 재고에 한해 폴스타 3와 4의 미국 판매를 당분간 이어가고,
            기존 고객에 대한 서비스 지원도 계속하겠다고 밝혔다. 미국 시장은 폴스타 전체
            판매의 약 <span style={AS.highlight}>6%</span>에 불과한 만큼, 브랜드 전체에
            미치는 재무적 타격은 제한적이라는 분석이다.
          </p>

          <h2 style={AS.h2}>폴스타, 이후 행보는</h2>

          <p style={AS.p}>
            마이클 로슐러(Michael Lohscheller) CEO는 유럽을 핵심 성장 시장으로 지목하며
            동남아시아, 동유럽, 중남미, 캐나다 확장 계획을 재확인했다. 또한{" "}
            <span style={AS.highlight}>폴스타 4의 새로운 고지상고 왜건 파생 모델</span>을
            2026년 하반기에 출시하고, 2027년에는 완전히 새로운 폴스타 2를, 그 이후에는
            컴팩트 SUV 폴스타 7을 선보일 예정이라고 밝혔다.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>호주 시장에 미치는 영향</h2>

          <p style={AS.p}>
            호주 시장에는 직접적인 영향이 없다. 폴스타는 호주에서 계속 정상 영업을 이어간다.
            그러나 이번 조치는 서방 각국 정부가 중국산 자동차 기술에 대한 규제를 강화하는
            흐름의 일환으로, 향후 글로벌 자동차 시장 판도에 적지 않은 파장을 미칠 전망이다.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>출처</span>
            <a
              href="https://www.topgear.com/car-news/electric/polestar-banned-us-market-connected-vehicle-rule"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              Top Gear ↗
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
