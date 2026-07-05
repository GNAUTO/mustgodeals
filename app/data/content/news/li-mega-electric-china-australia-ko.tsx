import Link from 'next/link';
import Image from "next/image";
import { AS } from '../../../components/posts/article-styles';

export default function LiMegaElectricChinaAustraliaKoContent() {
  return (
    <>
      <p style={AS.p}>
        중국 전기차 스타트업 리 오토(Li Auto)가{' '}
        <span style={AS.highlight}>리 메가(Li Mega) 전기 MPV의 우핸들 버전 생산을 공식 확정</span>했다.
        초기 출시 대상 시장으로는 홍콩, 중국 본토 우핸들 지역, 싱가포르가 언급됐다.
        호주는 공식 리스트에 없다. 하지만 스펙과 관세 환경을 들여다보면, 불가능하다고
        단언하기도 쉽지 않은 상황이다.
      </p>

      {/* 이미지 1 */}
      <div style={AS.imgWrap}>
        <Image
          src="/images/news/li-auto-mega-002.jpg"
          alt="Li Auto Mega 전기 MPV 외관"
              width={1200}
              height={675}
          className="article-img"
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
        />
        <p style={AS.imgCaption}>Photo: JustAnotherCarDesigner / Wikimedia Commons (CC0)</p>
      </div>

      <h2 style={AS.h2}>리 메가, 어떤 차인가</h2>

      <p style={AS.p}>
        리 메가는 리 오토가 내놓은 7인승 대형 순수 전기 MPV다. 리 오토는 지금까지 주로
        주행거리 연장 방식의 전기 SUV로 알려진 브랜드였는데, 메가는 완전히 다른 방향을
        택했다. 배터리만으로 구동되며, 설계 철학의 중심은 파워트레인보다{' '}
        <span style={AS.highlight}>실내 공간과 승객 경험</span>에 있다.
      </p>

      <p style={AS.p}>
        차체 크기는{' '}
        <span style={AS.highlight}>기아 카니발보다 크다</span>. 2열 독립 시트는 항공기
        비즈니스 클래스에 가까운 리클라이닝 구조로 설계됐고, 파노라믹 글라스와
        고급 소재 마감이 더해져 프리미엄 MPV 포지셔닝을 분명히 한다.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>리 메가 주요 제원</div>
        <p style={AS.calloutText}>
          배터리 102.7kWh · 듀얼 모터 400kW / 542Nm · 0{'–'}100km/h 5.5초 ·
          CLTC 기준 주행거리 710km · 520kW 초고속 충전 · 7인승 · 카니발보다 큰 차체
        </p>
      </div>

      {/* 이미지 2 */}
      <div style={AS.imgWrap}>
        <Image
          src="/images/news/li-auto-mega-001.jpg"
          alt="Li Auto Mega 측면 프로필"
              width={1200}
              height={675}
          className="article-img"
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
        />
        <p style={AS.imgCaption}>Photo: JustAnotherCarDesigner / Wikimedia Commons (CC0)</p>
      </div>

      <h2 style={AS.h2}>진짜 주목해야 할 건 충전 스펙이다</h2>

      <p style={AS.p}>
        퍼포먼스 수치도 7인승 MPV치고는 인상적이다. 듀얼 모터 합산 출력{' '}
        <span style={AS.highlight}>400kW / 542Nm</span>으로 0{'–'}100km/h를 5.5초에
        끊는다. 이는 BMW M3 컴페티션보다 빠른 수치를 7인승 대형 패밀리 카에서
        구현한 셈이다.
      </p>

      <p style={AS.p}>
        그러나 리 메가를 다른 차들과 확실히 구분 짓는 것은 충전 성능이다. 최대{' '}
        <span style={AS.highlight}>520kW 직류 초고속 충전</span>을 지원하며, 리 오토의
        전용 충전기 기준 10분 충전으로 500km 주행이 가능하다는 것이 공식 스펙이다.
        참고로 현재 호주에 설치된 공공 충전기 중 가장 높은 출력은{' '}
        <span style={AS.highlight}>약 400kW</span> 수준이다. 차가 인프라보다 빠른 구조인 셈이다.
      </p>

      <p style={AS.p}>
        CLTC 기준 공인 주행거리는 710km로 표기된다. 중국 인증 기준 특성상 실제
        호주 도로 환경에서는 다소 낮은 수치가 나오겠지만, 7인승 패밀리카에서
        현실적으로 500{'–'}550km의 실주행 거리가 확보된다면 이 세그먼트에서는
        충분히 의미 있는 수준이다.
      </p>

      {/* 이미지 3 */}
      <div style={AS.imgWrap}>
        <Image
          src="/images/news/li-auto-mega-010.jpg"
          alt="Li Auto Mega 디테일 및 인테리어"
              width={1200}
              height={675}
          className="article-img"
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
        />
        <p style={AS.imgCaption}>Photo: Evnerd / Wikimedia Commons (CC0)</p>
      </div>

      <h2 style={AS.h2}>호주가 계속 거론되는 이유</h2>

      <p style={AS.p}>
        리 오토의 공식 발표에 호주는 없다. 그럼에도 업계에서 호주가 꾸준히
        언급되는 데에는 두 가지 이유가 있다.
      </p>

      <p style={AS.p}>
        첫째, 호주는 세계 주요 우핸들 시장 중 하나다. 우핸들 버전을 대량 생산하기로
        결정한 제조사라면 반드시 고려해야 하는 시장 규모다. 둘째, 더 직접적인
        이유로{' '}
        <span style={AS.highlight}>
          호주는 중국산 전기차에 유럽과 미국처럼 고율 관세를 부과하지 않는다
        </span>
        . BYD, MG, GWM 등이 이 관세 환경을 활용해 호주 시장에서 실질적인 판매량을
        쌓아온 것이 그 증거다. 리 오토 역시 같은 구조를 활용할 수 있는 위치에 있다.
      </p>

      <p style={AS.p}>
        리 오토의 내부 상황도 변수다. 리 메가는 중국 출시 이후{' '}
        <span style={AS.highlight}>당초 예상을 크게 밑도는 내수 판매량</span>을
        기록했다. 이런 상황이 수출 시장 확대의 동력이 되는 건 자동차 업계에서
        반복되는 패턴이다. 우핸들 가능 여부가 확인된 지금, 호주 진출의 기술적
        장벽은 사실상 사라진 것이나 다름없다.
      </p>

      <h2 style={AS.h2}>아직 확정된 건 없다</h2>

      <p style={AS.p}>
        명확히 해두자면, 리 오토는{' '}
        <span style={AS.highlight}>호주 출시를 발표한 적이 없다</span>. 현지 딜러망도,
        가격도, 출시 일정도 존재하지 않는다. 달라진 것은 단 하나다. 호주 출시를 위한
        가장 기본적인 전제 조건인 우핸들 생산이 확정됐다는 점이다.
      </p>

      <p style={AS.p}>
        리 오토가 BYD나 GWM이 걸어온 길을 따라 호주 시장에 진입할지는 두고 봐야 한다.
        스펙, 가격 포지셔닝, 그리고 이 차가 겨냥하는 세그먼트를 고려했을 때, 실제로
        출시된다면 호주 대형 MPV 시장에 꽤 흥미로운 변수가 될 것임은 틀림없다.
      </p>

      {/* 출처 */}
      <div style={AS.sourceBox}>
        <span style={AS.sourceLabel}>출처</span>
        <a
          href="https://www.drive.com.au/news/li-mega-electric-car-from-china-one-step-closer-to-australia/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}
        >
          drive.com.au &#8599;
        </a>
      </div>

      {/* CTA */}
      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>신규 매물 알림 받기</div>
        <p style={AS.ctaDesc}>
          클리어런스 매물이 올라오면 가장 먼저 알려드립니다. 매주 업데이트
        </p>
        <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 &rarr;</Link>
      </div>
    </>
  );
}
