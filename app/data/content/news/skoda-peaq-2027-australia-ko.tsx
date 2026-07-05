import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function SkodaPeaq2027AustraliaKoContent() {
  return (
    <>

          <p style={AS.p}>
            스코다가 역대 가장 크고 야심 찬 신차의 베일을 벗었다. 목표는 단 하나 — 기아 EV9.
            새로운 <span style={AS.highlight}>스코다 피크(Peaq)</span>는 풀사이즈 7인승 전기 SUV로
            호주 출시가 공식 확정됐다. 최대 640km의 주행거리와 함께, 가격 대비 스펙 경쟁력에서
            기존 강자들을 뒤흔들 가능성을 품고 있다는 이야기다.
          </p>

          {/* Image 1 — hero */}
          <div style={AS.imgWrap}>
            <Image
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c4d60c30-2aac-5ab1-a8e5-57f962a50000"
              alt="2027 스코다 피크 전기 SUV"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>이미지: Skoda Media</p>
          </div>

          <h2 style={AS.h2}>이름의 의미</h2>

          <p style={AS.p}>
            &ldquo;피크(Peaq)&rdquo;는 영어 &ldquo;peak(정점)&rdquo;에서 따온 이름이다. 스코다는
            이 작명에 진심이다. 피크는 코디악(Kodiaq) 위에 위치하며 스코다 전기차 라인업의
            꼭대기를 차지한다. 전장{" "}
            <span style={AS.highlight}>4,874mm</span>, 휠베이스{" "}
            <span style={AS.highlight}>2,965mm</span> — 스코다 역대 최대 SUV인 셈이다. BMW X7보다
            길고, 전체 길이에서 랜드크루저와 불과 몇 밀리미터 차이에 불과한 진짜 '빅 SUV'다.
          </p>

          {/* Image 2 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/a9e8672b-6b48-5de2-b6ab-f5319f250000"
              alt="스코다 피크 외관 디자인"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>이미지: Skoda Media</p>
          </div>

          <h2 style={AS.h2}>세 가지 파워트레인, 하나의 플랫폼</h2>

          <p style={AS.p}>
            피크는 폭스바겐 그룹의 검증된{" "}
            <span style={AS.highlight}>MEB 전기차 플랫폼</span>을 기반으로 한다. VW ID.4, 아우디
            Q4 e-tron, 스코다 에냐크(Enyaq)와 같은 뼈대 위에 만들어진 모델이다. 파워트레인은
            세 가지로 구성되며 주행거리와 성능에서 폭넓은 선택지를 제공한다.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>파워트레인 라인업</div>
            <p style={AS.calloutText}>
              <strong>피크 60</strong> — 63kWh 배터리 · 150kW 후륜구동 · 450km 이상<br /><br />
              <strong>피크 90</strong> — 91kWh 배터리 · 210kW 후륜구동 · 640km 이상<br /><br />
              <strong>피크 90x</strong> — 91kWh 배터리 · AWD · 220kW 합산 · 610km 이상
            </p>
          </div>

          <p style={AS.p}>
            91kWh 모델 기준 DC 급속충전으로{" "}
            <span style={AS.highlight}>10~80% 충전에 단 28분</span>이 걸린다. 점심 한 끼를 먹는
            동안 400km 가량의 주행거리를 채울 수 있다는 이야기이니, 장거리 가족 여행에서도 충분히
            현실적인 선택이 될 수 있는 셈이다.
          </p>

          {/* Image 3 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/5757844a-182f-59b5-b6e7-636b84e50000"
              alt="스코다 피크 실내"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>이미지: Skoda Media</p>
          </div>

          <h2 style={AS.h2}>7인승의 공간 활용</h2>

          <p style={AS.p}>
            넓은 휠베이스는 실내 공간에 직결된다. 5인승 구성 시 트렁크 용량은{" "}
            <span style={AS.highlight}>935리터</span> — 대부분의 왜건보다 크다. 3열을 세워
            7인승으로 활용할 때도 맨 뒷좌석 뒤에{" "}
            <span style={AS.highlight}>299리터</span>가 남고, 앞쪽에는 충전 케이블 보관용{" "}
            <span style={AS.highlight}>37리터 프렁크</span>도 있다.
          </p>

          <p style={AS.p}>
            <span style={AS.highlight}>V2L, V2H, V2G 양방향 충전</span>도 기본으로 지원된다.
            V2L(차량→기기 전력 공급)은 차에서 직접 전자기기를 충전하거나 전원으로 활용할 수
            있는 기능이고, V2H(차량→가정)와 V2G(차량→전력망)는 차를 가정용 보조 배터리나 전력망
            공급원으로 사용할 수 있게 해준다. 태양광 패널을 설치한 가정이라면 실질적인 에너지
            절감 수단이 될 수 있는 구조다.
          </p>

          {/* Image 4 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/c076e739-c913-5682-95ce-f1cbd6450000"
              alt="스코다 피크 기술 사양"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>이미지: Skoda Media</p>
          </div>

          <h2 style={AS.h2}>기술이 만드는 차별점</h2>

          <p style={AS.p}>
            실내에는 스코다 최초의{" "}
            <span style={AS.highlight}>13.6인치 세로형 인포테인먼트 스크린</span>이 탑재된다.
            AR 헤드업 디스플레이는 내비게이션과 안전 정보를 전면 유리에 겹쳐 보여주고,
            Travel Assist 3.0은 스코다의 가장 진보된 반자율주행 시스템이다.
          </p>

          <p style={AS.p}>
            파노라마 선루프는 9개 구역으로 나뉘어 각각 독립적으로 전기변색 조절이 가능하다.
            뒷자리 아이와 앞자리 운전자가 각자 원하는 밝기로 조절할 수 있다는 뜻 — 가족 차에서
            이런 세심함이 빛나는 순간이다.
          </p>

          <hr style={AS.divider} />

          {/* Image 5 */}
          <div style={AS.imgWrap}>
            <Image
              src="https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/0149456a-07c6-5326-ac8d-279df2f50000"
              alt="스코다 피크 후면 디자인"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>이미지: Skoda Media</p>
          </div>

          <h2 style={AS.h2}>디자인: 모던 솔리드</h2>

          <p style={AS.p}>
            스코다는 피크의 디자인 언어를 &ldquo;모던 솔리드(Modern Solid)&rdquo;라 부른다.
            공기저항계수 <span style={AS.highlight}>0.249Cd</span>는 7인승 SUV 중 최고 수준의
            공기역학적 효율을 자랑한다. 플러시 도어 핸들, T자형 LED 라이팅 시그니처, 군더더기
            없는 측면 라인이 어우러진 디자인은 독일 경쟁 브랜드들의 복잡한 스타일링보다
            훨씬 오래 질리지 않는 선택이 될 것이다.
          </p>

          <h2 style={AS.h2}>호주 출시와 가격 전망</h2>

          <p style={AS.p}>
            스코다 호주 법인은 피크의 현지 출시를 확인했지만 구체적인 가격과 출시 시기는 아직
            공개하지 않았다. 스코다의 최근 현지화 가격 전략과 유럽 포지셔닝을 고려하면,
            시작 가격은 <span style={AS.highlight}>$70,000대 초중반</span>이 될 것으로 보인다.
            호주 기준 $90,000대 이상에 시작하는 기아 EV9보다 의미 있게 낮은 가격이다.
          </p>

          <p style={AS.p}>
            스코다가 이 스펙을 그 가격대에 가져올 수 있다면, 피크는 EV9과 경쟁하는 데 그치지
            않고 7인승 전기 SUV 세그먼트에서 &lsquo;가성비&rsquo;의 기준 자체를 다시 쓸 수도
            있는 이야기다.
          </p>

          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>출처</span>
            <a
              href="https://www.drive.com.au/news/2027-skoda-peaq-revealed-as-seven-seat-electric-family-suv/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              drive.com.au ↗
            </a>
          </div>

          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>전기차 클리어런스 딜 알림 받기</div>
            <p style={AS.ctaDesc}>
              전기차 재고 출시 소식을 가장 먼저 받아보세요 — 매주 업데이트
            </p>
            <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</Link>
          </div>

    </>
  );
}
