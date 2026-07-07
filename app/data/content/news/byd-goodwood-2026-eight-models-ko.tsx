import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function BydGoodwood2026EightModelsKoContent() {
  return (
    <>

          <p style={AS.p}>
            BYD가 2026 굿우드 페스티벌 오브 스피드에서{" "}
            <span style={AS.highlight}>8개의 신모델</span>을 선보인다. BYD, 덴자(Denza),
            양왕(Yangwang) 세 브랜드에 걸쳐 세계 최초 공개 모델과 유럽 출시 예정 모델이
            함께 등장할 예정이다.
          </p>

          {/* Image 1, Denza Z hero */}
          <div style={AS.imgWrap}>
            <Image
              src="https://editorial.pxcrush.net/carsales/general/editorial/denza-z-2-rxk7.jpg"
              alt="굿우드 2026 덴자 Z 쿠페"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: BYD Media / Denza Z</p>
          </div>

          <h2 style={AS.h2}>메인 이벤트: 덴자 Z</h2>

          <p style={AS.p}>
            이번 행사의 하이라이트는{" "}
            <span style={AS.highlight}>덴자 Z 쿠페</span>와 덴자 Z 레이싱의 세계
            최초 공개다. 포르쉐 911을 겨냥해 개발된 두 모델은 3개의 전기 모터를
            탑재하며, Z 쿠페는 최고속도 약{" "}
            <span style={AS.highlight}>350km/h</span>를 자랑한다. 4인승에 넉넉한
            트렁크까지 갖췄고, 레이싱 버전에는 카본 파이버 에어로 패키지가 추가된다.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>덴자 Z 쿠페. 핵심 제원</div>
            <p style={AS.calloutText}>
              전기 모터 3개 · 최고속도 약 350km/h · 4인승 + 트렁크 ·
              레이싱 버전: 카본 파이버 에어로 패키지 · 굿우드 2026 세계 최초 공개
            </p>
          </div>

          <h2 style={AS.h2}>그 외 공개 모델들</h2>

          <p style={AS.p}>
            호주에서 이미 판매 중인{" "}
            <span style={AS.highlight}>덴자 B5 SUV</span>와{" "}
            <span style={AS.highlight}>BYD 샤크 6</span> 듀얼캡 유트도 유럽 데뷔를
            앞두고 있다. 또한 2027년 초 호주 출시가 예정된 덴자 Z9GT 퍼포먼스 세단의
            영국 론칭도 굿우드에서 이뤄진다. D9 DM-i 미니밴도 함께 공개되는데,
            플러그인 하이브리드 모델로 2열 마사지 시트와 전 좌석 열선·통풍을 갖췄다.
          </p>

          {/* Image 2, BYD Dolphin G */}
          <div style={AS.imgWrap}>
            <Image
              src="https://editorial.pxcrush.net/carsales/general/editorial/090_byd_dolphin_g.jpg"
              alt="BYD 돌핀 G DM-i"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: BYD Media / BYD Dolphin G DM-i</p>
          </div>

          <h2 style={AS.h2}>양왕의 하이퍼카</h2>

          <p style={AS.p}>
            BYD의 럭셔리 브랜드 양왕은 최고속도{" "}
            <span style={AS.highlight}>496.22km/h</span>를 주장하는{" "}
            <span style={AS.highlight}>U9 익스트림 하이퍼카</span>를 전기·플러그인
            하이브리드 두 가지 버전의 U7 럭셔리 세단, U8L 럭셔리 SUV와 함께 선보인다.
          </p>

          {/* Image 3, Denza Z9 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://editorial.pxcrush.net/carsales/general/editorial/denza-z9-2-e2ix.jpeg"
              alt="덴자 Z9 퍼포먼스 세단"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: BYD Media / Denza Z9</p>
          </div>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>규모로 증명하는 자신감</h2>

          <p style={AS.p}>
            BYD의 전시 부스 면적은{" "}
            <span style={AS.highlight}>2,016㎡</span>로, 굿우드 페스티벌 오브 스피드
            역사상 최대 규모다. 숫자 하나가 이 브랜드의 현재 위치를 말해준다.
          </p>

          {/* Image 4, Yangwang U9 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://editorial.pxcrush.net/carsales/general/editorial/yangwang-u9-na07-bagh.jpg"
              alt="양왕 U9 익스트림 하이퍼카"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: BYD Media / Yangwang U9</p>
          </div>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>출처</span>
            <a
              href="https://www.carsales.com.au/editorial/details/byd-to-show-off-eight-new-models-at-goodwood-152307/"
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
              재고 정리 차량이 나오면 가장 먼저 알려드립니다, 매주 업데이트
            </p>
            <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</Link>
          </div>

    </>
  );
}
