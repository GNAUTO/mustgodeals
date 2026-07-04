import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function Ferrari12CilindriManualeKoContent() {
  return (
    <>
      <p style={AS.p}>
        페라리가{' '}
        <span style={AS.highlight}>12칠린드리 마누알레(12Cilindri Manuale)</span>를
        공개했다. 자연흡기 V12 그란투리스모에 개방형 게이트 6단 수동 변속기를
        얹은 한정판 버전이다. 단, 클러치 페달과 기어 레버는 드라이브트레인에
        기계적으로 연결되어 있지 않다. 순수한 전자 신호로 작동하는
        &ldquo;바이-와이어(by-wire)&rdquo; 시스템이며, 이 차의 핵심은
        바로 그 차이에 있다.
      </p>

      {/* 이미지 1 */}
      <div style={AS.imgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/news/ferrari-12cilindri-front.jpg"
          alt="Ferrari 12Cilindri 전면"
          className="article-img"
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
        />
        <p style={AS.imgCaption}>
          Photo: TTTNIS / Wikimedia Commons (CC0). 표준 12Cilindri 실물 사진. 마누알레 사양은 배지 및 인테리어 디테일이 다를 수 있음.
        </p>
      </div>

      <h2 style={AS.h2}>&ldquo;바이-와이어&rdquo;란 무엇인가</h2>

      <p style={AS.p}>
        <span style={AS.highlight}>12칠린드리 마누알레</span>의 실제 변속기는
        표준 모델과 동일한 8단 듀얼 클러치(DCT)다. 개방형 게이트 레버와
        클러치 페달은 물리적으로 연결된 것이 아니라 센서로 입력값을 읽어
        차량 제어 시스템이 DCT를 통해 변속을 실행하는 구조다. 운전자의 손과
        발이 직접 기계 부품을 구동하는 순간은 없다.
      </p>

      <p style={AS.p}>
        페라리는 이를{' '}
        <span style={AS.highlight}>바이-와이어 수동 변속기</span>라 부른다.
        전통적인 수동 변속의 촉각적 리듬, 게이트를 가르는 레버의 무게감,
        클러치 물림점의 감각, 엔진 반응과 드라이버 입력 사이의 연결감을
        전자적으로 재현하는 것이 목표다. 버튼 하나로 완전 수동 모드와
        자동 모드를 전환할 수 있으며, 자동 모드에서는 DCT가 평소대로 작동한다.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>12칠린드리 마누알레 주요 사양</div>
        <p style={AS.calloutText}>
          6.5L 자연흡기 V12 · 820마력 · 500lb-ft · 0-100km/h 2.9초(숙련 운전자 기준) ·
          바이-와이어 6단 게이트 / 8단 DCT 기반 · 1,499대 한정 · Tailor Made 전용 · €590,000~
        </p>
      </div>

      {/* 이미지 2 */}
      <div style={AS.imgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/news/ferrari-12cilindri-rear.jpg"
          alt="Ferrari 12Cilindri 후면"
          className="article-img"
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
        />
        <p style={AS.imgCaption}>
          Photo: TTTNIS / Wikimedia Commons (CC0). 표준 12Cilindri 실물 사진. 마누알레 사양은 다를 수 있음.
        </p>
      </div>

      <h2 style={AS.h2}>왜 굳이 이 방식을 택했는가</h2>

      <p style={AS.p}>
        820마력 V12에 전통적인 기계식 수동 변속기를 달면 필연적으로 성능
        타협이 발생한다. 변속 시간이 길어지고, 이 출력을 버텨낼 클러치는
        무겁고 단단한 페달을 요구한다. 바이-와이어 방식은 DCT를 실제 변속기로
        유지함으로써 두 문제를 동시에 피해간 것이다.
      </p>

      <p style={AS.p}>
        그 결과,{' '}
        <span style={AS.highlight}>
          마누알레는 숙련된 운전자 기준으로 표준 12칠린드리와 동일한
          0-100km/h 2.9초를 유지
        </span>
        한다. 페라리의 엔지니어들은 조건을 명시했다: 바이-와이어 클러치를
        익숙하게 다루는 운전자와 그렇지 않은 운전자 사이의 성능 차이는
        순수 자동보다 크다. 이 차는 익숙해질수록 더 잘 달린다. 어쩌면
        그것 자체가 이 차의 본질이다.
      </p>

      <p style={AS.p}>
        엔진 자체는 변함없다. 최고출력 820마력, 최대토크 500lb-ft를 발생시키는{' '}
        <span style={AS.highlight}>6.5리터 자연흡기 V12</span>다. 고회전 영역에서
        이 엔진이 만들어내는 사운드는 지금의 자동차 시장에서 전기적 수단으로
        흉내 내기 가장 어려운 것들 중 하나다.
      </p>

      {/* 이미지 3 */}
      <div style={AS.imgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/news/ferrari-12cilindri-rosso-imola.jpg"
          alt="Ferrari 12Cilindri Rosso Imola"
          className="article-img"
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
        />
        <p style={AS.imgCaption}>
          Photo: Mr.choppers / Wikimedia Commons (CC BY-SA 4.0). 로쏘 이몰라 색상의 표준 12Cilindri 실물. 마누알레 사양은 다를 수 있음.
        </p>
      </div>

      <h2 style={AS.h2}>1,499대, 전량 개별 사양</h2>

      <p style={AS.p}>
        생산 대수는{' '}
        <span style={AS.highlight}>1,499대</span>로 제한된다. 전량
        페라리의 개인화 프로그램인{' '}
        <span style={AS.highlight}>Tailor Made</span>를 통해서만 구매할 수
        있으며, 표준 사양 옵션이란 존재하지 않는다. 외장 색상, 인테리어
        소재, 스티칭 컬러, 세부 마감에 이르기까지 모든 차는 오너가 직접
        구성한다.
      </p>

      <p style={AS.p}>
        가격은{' '}
        <span style={AS.highlight}>€590,000(약 9억 6천만 원)</span>부터 시작한다.
        기본 12칠린드리가 €400,000이니 €190,000의 프리미엄이 붙는 셈이다.
        이 수준의 가격대에서 가성비 논쟁은 애초에 성립하지 않는다.
      </p>

      <h2 style={AS.h2}>타이밍이 의미하는 것</h2>

      <p style={AS.p}>
        페라리는 첫 순수 전기 모델인{' '}
        <span style={AS.highlight}>루체(Luce)</span> 공개 직후 마누알레를
        발표했다. 두 발표의 시간적 근접성은 업계 안팎에서 주목을 받았다.
        페라리 측은 마누알레를 순수하게 고객 수요에서 비롯된 개발이라고
        설명한다. 그것이 사실임은 분명하다. 동시에, 이 차가 내연기관의
        정점이 여전히 살아있다는 일종의 선언으로 기능하는지에 대해 페라리는
        답하지 않는다.
      </p>

      <p style={AS.p}>
        어떻게 해석하든,{' '}
        <span style={AS.highlight}>페라리 수동 V12</span> 조합은 이제
        생산 차량으로 존재한다. 방식이 아무리 비전통적이라 해도. 1,499대의
        오너들에게 &ldquo;이게 진짜 수동인가&rdquo;라는 철학적 논쟁은, 산악
        도로를 풀 어택으로 달리는 순간 아마 가장 무의미한 질문이 될 것이다.
      </p>

      {/* 출처 */}
      <div style={AS.sourceBox}>
        <span style={AS.sourceLabel}>출처</span>
        <a
          href="https://www.topgear.com/car-news/supercars/new-12cilindri-manuale-a-v12-ferrari-a-manual-gearbox"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: '13px', color: '#555', textDecoration: 'none' }}
        >
          topgear.com &#8599;
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
