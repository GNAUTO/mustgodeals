import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function HyundaiI20NHybridNextgenKoContent() {
  return (
    <>

          <p style={AS.p}>
            현대자동차 글로벌 R&amp;D 총괄 만프레드 하러(Manfred Harrer)가 2세대 i20 N
            출시를 &ldquo;빠른 시일 내에&rdquo; 공식 확인했다. 투싼에 적용된 1.6리터 터보
            하이브리드 시스템의{" "}
            <span style={AS.highlight}>N 퍼포먼스 버전</span>이 탑재될 것으로 알려졌다.
          </p>

          {/* Image 1 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://editorial.pxcrush.net/carsales/general/editorial/i20-n-render.jpg"
              alt="차세대 현대 i20 N 렌더링"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Hyundai Media / AI Render</p>
          </div>

          <h2 style={AS.h2}>왜 지금인가</h2>

          <p style={AS.p}>
            하러는 Autocar와의 인터뷰에서 &ldquo;유럽 시장에서 i20 N은 반드시 필요한
            모델&rdquo;이라고 말했다. 기존 i20 N과 고성능 IONIQ 5 N, 6 N 사이의 가격·성능
            공백이 너무 크다는 이유에서다. &ldquo;팬들을 위해 이 엔트리 레벨을 반드시
            돌려놓겠다. 최대한 빨리 움직이고 있다&rdquo;고 덧붙였다.
          </p>

          <h2 style={AS.h2}>파워트레인은?</h2>

          <p style={AS.p}>
            하러는 신형 i20 N이 &ldquo;하이브리드화&rdquo;될 것이라고 확인하며,
            &ldquo;기존 기술을 활용하는 것이 합리적&rdquo;이라고 말했다. 탑재될 파워트레인은{" "}
            <span style={AS.highlight}>1.6리터 터보 가솔린 엔진</span>에 최신 기아 셀토스의
            하이브리드 시스템을 트랙용으로 튜닝한 버전이 될 것으로 예상된다.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>예상 출력</div>
            <p style={AS.calloutText}>
              최대 <strong>224kW / 380Nm</strong>. 현재 판매 중인 어떤 i30 N
              변형 모델보다도 강력한 수치다.
            </p>
          </div>

          {/* Image 2 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://editorial.pxcrush.net/carsales/general/editorial/i20-n-shadow-edition-02-iot5.jpg"
              alt="현대 i20 N 쉐도우 에디션"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Hyundai Media / i20 N Shadow Edition</p>
          </div>

          <h2 style={AS.h2}>개발은 얼마나 됐나</h2>

          <p style={AS.p}>
            하러는 프로토타입이 이미 테스트 중이며 개발이 상당히 진행된 상태라고 밝혔다.
            글로벌 데뷔는 &ldquo;그리 멀지 않았다&rdquo;고 했으며,{" "}
            <span style={AS.highlight}>2027년 말 공개</span>,{" "}
            <span style={AS.highlight}>2028년 판매 시작</span>이 유력한 시나리오다.
          </p>

          {/* Image 3 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://editorial.pxcrush.net/carsales/general/editorial/hyundai-brazil-spec-i20-1.jpg"
              alt="현대 i20 브라질 스펙"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Hyundai Media / i20 Brazil Spec</p>
          </div>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>호주 시장엔?</h2>

          <p style={AS.p}>
            현재 i20 N은 호주에서 합리적인 가격의 핫해치로 꾸준히 인기를 끌어왔다. 이번
            발표는 현세대 마지막 모델인{" "}
            <span style={AS.highlight}>2026 i20 N 쉐도우 에디션</span>이 호주에 출시된 지
            불과 일주일도 안 된 시점에 나왔다. 만약 차세대 모델이 i30 N을 뛰어넘는 출력으로
            출시된다면, 핫해치 시장의 판도가 크게 흔들릴 수 있다.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>출처</span>
            <a
              href="https://www.carsales.com.au/editorial/details/next-gen-hyundai-i20-n-confirmed-with-hybrid-power-152311/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              carsales.com.au ↗
            </a>
          </div>

          {/* CTA */}
          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>신차 딜 알림 받기</div>
            <p style={AS.ctaDesc}>
              매주 업데이트되는 클리어런스 딜 정보를 가장 먼저 받아보세요
            </p>
            <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</Link>
          </div>

    </>
  );
}
