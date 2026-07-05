import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function JasTenseiHondaNsxRestommodKoContent() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.topgear.com/sites/default/files/images/big-read/carousel/2026/06/b710d556570aa46ccb60b98c44f49bbd/NSX%20Resurrection%20%2811%29.jpg"
              alt="JAS 텐세이 혼다 NSX 레스토모드"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: JAS Motorsport / Top Gear</p>
          </div>

          <p style={AS.p}>
            혼다 NSX가 두 번째 삶을 시작한다. 이번엔{" "}
            <span style={AS.highlight}>혼다의 정식 승인</span>까지 받은 형태다.
          </p>

          <h2 style={AS.h2}>누가, 왜 만들었나</h2>

          <p style={AS.p}>
            밀라노에 위치한 JAS는 WTCC와 BTCC에서 혼다 시빅 워크스 팀을 30년간 운영해온
            공식 레이싱 파트너다. 이 회사가 전설적인 NSX를 새롭게 재해석한 모델을 공개했다.
            이름은 <span style={AS.highlight}>텐세이</span>, 일본어로 환생을 뜻한다. 단순한
            튜닝카가 아니라, 원본 NSX 차체를 기반으로 거의 모든 부품을 새로 설계한 완전한
            레스토모드다.
          </p>

          <p style={AS.p}>
            JAS의 대표 매즈 피셔는 혼다가 이 프로젝트를 직접 승인했다고 밝혔다. 현행
            배출가스 및 안전 규정상 제조사가 직접 오리지널 NSX 같은 차를 다시 만드는 것은
            불가능하지만, 텐세이는 기존 차체를 기반으로 하기 때문에 훨씬 오래된{" "}
            <span style={AS.highlight}>유로 1 기준</span>만 충족하면 된다.
          </p>

          {/* Image 2 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.topgear.com/sites/default/files/images/big-read/carousel/2026/06/b710d556570aa46ccb60b98c44f49bbd/NSX%20Resurrection%20%2810%29.jpg"
              alt="JAS 텐세이 측면"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: JAS Motorsport / Top Gear</p>
          </div>

          <h2 style={AS.h2}>피닌파리나 디자인, 원형을 그대로</h2>

          <p style={AS.p}>
            외관 디자인은 피닌파리나가 맡았다. JAS와 긴밀하게 협업하며 원형의 실루엣을
            그대로 유지하면서도 비율을 더 다듬었다. 팝업 헤드라이트, 시그니처 리어 윙,
            사이드 에어 인테이크는 그대로 남았으며, 1991년 오리지널보다 기능적으로 개선됐다.
            카본 파이버 패널이 기존 알루미늄 구조 위에 덧입혀졌다.
          </p>

          {/* Image 3 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.topgear.com/sites/default/files/images/big-read/carousel/2026/06/b710d556570aa46ccb60b98c44f49bbd/NSX%20Resurrection%20%286%29.jpg"
              alt="JAS 텐세이 전면 디테일"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: JAS Motorsport / Top Gear</p>
          </div>

          <h2 style={AS.h2}>저드 V6, 420마력 — VTEC는 없다</h2>

          <p style={AS.p}>
            파워트레인은 혼다의 오리지널 V6 엔진을 대대적으로 손본 버전이다. 영국 엔진
            전문업체 저드가 배기량을 <span style={AS.highlight}>3.5L</span>로 확장했으며,
            8,500rpm까지 회전하며{" "}
            <span style={AS.highlight}>420마력</span>을 낸다. 기존 NSX 대비 약 140마력
            향상된 수치다. 상징과도 같았던 VTEC 시스템은 빠졌는데, 새로운 엔진의 고회전
            영역에서는 신뢰성을 확보하기 어렵다고 판단했기 때문이다. 동력은 완전히 새롭게
            설계된 6단 수동변속기를 통해 후륜으로만 전달된다.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>텐세이 파워트레인</div>
            <p style={AS.calloutText}>
              3.5L 저드 V6 · 420마력 · 레드라인 8,500rpm · 6단 수동 · 후륜구동 —
              오리지널 NSX 대비 약 140마력 향상. VTEC 삭제.
            </p>
          </div>

          <hr style={AS.divider} />

          {/* Image 4 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.topgear.com/sites/default/files/styles/media_embed/public/2026/06/NSX%20Resurrection%20%283%29.jpg"
              alt="JAS 텐세이 실내"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: JAS Motorsport / Top Gear</p>
          </div>

          <h2 style={AS.h2}>실내: 오리지널의 감성, 새로운 마감</h2>

          <p style={AS.p}>
            실내는 오리지널 대시보드, 센터 콘솔, 도어 패널을 대부분 유지하면서 재가공과
            알루미늄 마감을 더했다. 구매자는 현대적인 반디지털 계기판과 오리지널의 노란 바늘
            6연 게이지를 거의 그대로 재현한 버전 중 선택할 수 있다.
          </p>

          <h2 style={AS.h2}>단 35대, 77만 파운드, NSX는 직접 가져와야</h2>

          <p style={AS.p}>
            생산 대수는 단 <span style={AS.highlight}>35대</span>로, NSX 출시 35주년을
            기념하는 숫자다. 구매자는 베이스가 될 NSX 차량을 직접 제공해야 하며, 가격은
            부가세와 도너 차량 비용을 제외하고{" "}
            <span style={AS.highlight}>77만 파운드</span>다.
          </p>

          {/* Image 5 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://www.topgear.com/sites/default/files/styles/media_embed/public/2026/06/NSX%20Resurrection.jpg"
              alt="JAS 텐세이 후면"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: JAS Motorsport / Top Gear</p>
          </div>

          <p style={AS.p}>
            오리지널 NSX를 동경하며 자란 사람들에게 텐세이는 현행 규제만 없었다면 혼다가
            직접 만들었을 법한 모습에 가장 가까운 결과물이다.
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>출처</span>
            <a
              href="https://www.topgear.com/car-news/jas-tensei-honda-nsx-restomod"
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
              재고 정리 차량이 나오면 가장 먼저 알려드립니다 — 매주 업데이트
            </p>
            <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</Link>
          </div>

    </>
  );
}
