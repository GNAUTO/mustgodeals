import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function NovatedLeaseAustraliaKoContent() {
  return (
    <>

          <p style={AS.p}>
            차를 사려고 마음먹었을 때, 주변 직장인들 사이에서 한 번쯤 이런 말이 들려온다.
            &ldquo;노베이티드 리스로 하면 세금 아낀다던데.&rdquo; 그런데 막상 알아보려고 하면
            용어부터 낯설고, 어디서부터 시작해야 할지 막막한 것이 현실이다. 이 글에서는
            노베이티드 리스가 무엇인지, 실제로 얼마나 이득인지, 어떤 사람에게 맞는 선택인지를
            정리했다.
          </p>

          <h2 style={AS.h2}>노베이티드 리스란</h2>

          <p style={AS.p}>
            노베이티드 리스(Novated Lease)는 회사가 중간에 끼는 차량 리스 계약이다. 본인이 차를
            고르고, 차량 비용과 유지비를{" "}
            <span style={AS.highlight}>급여에서 세전으로 공제</span>받는 구조, 세금 떼기 전
            돈으로 차를 굴리는 셈이다.
          </p>

          <div style={AS.tipBox}>
            <div style={AS.tipTitle}>세 주체가 움직인다</div>
            <ul style={AS.tipList}>
              <li style={AS.tipItem}><strong>직원</strong>. 차를 고르고 HR에 신청</li>
              <li style={AS.tipItem}><strong>고용주</strong>. 리스 비용을 대신 납부한 뒤 급여에서 공제</li>
              <li style={AS.tipItem}><strong>리스 회사</strong>. 차량 구매와 유지비 관리를 대행</li>
            </ul>
          </div>

          <p style={AS.p}>
            본인이 실제로 해야 할 일은 차 고르기, HR 신청, 급여명세서 확인, 그게 전부다.
            핵심은 세전 공제다. 이미 세금을 낸 돈으로 차를 사는 대신, 세금 내기 전 돈으로
            차를 굴리니 정부가 차 비용 일부를 보조해주는 구조인 셈이다.
          </p>

          <h2 style={AS.h2}>세금이 줄어드는 원리</h2>

          <p style={AS.p}>
            호주 소득세는 누진세 구조다. 연봉{" "}
            <span style={AS.highlight}>$90,000</span> 기준 한계세율은 34.5% (Medicare Levy 포함).
            노베이티드 리스로 연간 $15,000을 세전 공제하면 과세 소득이 $75,000으로 줄고, 약{" "}
            <span style={AS.highlight}>$5,175의 세금</span>을 아끼는 이야기다.
          </p>

          <p style={AS.p}>
            차값뿐 아니라 기름값, 보험료, 등록비, 타이어비까지 세전 처리가 되니 유지비 전체를
            할인된 가격에 쓰는 구조이기도 하다. 연봉 $85,000 직장인이 $45,000짜리 차를 5년간
            운용할 경우, 일반 구매 대비 절감액은 약{" "}
            <span style={AS.highlight}>$15,000~$18,000</span> 수준이다.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>절세 계산 예시</div>
            <p style={AS.calloutText}>
              연봉 $90,000 · 한계세율 34.5%<br />
              연간 리스 패키지: $15,000 세전 공제<br />
              연간 절세액: 약 <strong>$5,175</strong><br />
              $45,000 차 5년 운용 시 총 절감: 약 <strong>$15,000~$18,000</strong>
            </p>
          </div>

          <h2 style={AS.h2}>FBT. 반드시 알아야 할 변수</h2>

          <p style={AS.p}>
            노베이티드 리스의 함정은{" "}
            <span style={AS.highlight}>FBT(Fringe Benefits Tax)</span>다. 회사가 직원에게 차량
            혜택을 제공하면 부과되는 세금인데, 이걸 어떻게 처리하느냐에 따라 절세 효과가
            달라진다.
          </p>

          <p style={AS.p}>
            <strong>주행거리가 많을수록 FBT 부담이 줄어든다.</strong> ATO의 법정 산식은 연간
            주행거리가 늘어날수록 과세 대상 금액을 낮춰준다. 많이 달릴수록 유리하다.
          </p>

          <p style={AS.p}>
            <strong>ECM(Employee Contribution Method).</strong> 세후 급여 일부를 직접 납부해
            FBT 과세 대상 금액 자체를 낮추는 방법이다. 대부분의 리스 회사는 견적 단계에서
            이 부분을 함께 설계해준다, 반드시 확인해야 한다.
          </p>

          <p style={AS.p}>
            FBT 구조를 제대로 반영하지 않은 노베이티드 리스는 서류상으로는 멋있어 보이지만
            실제로는 기대에 못 미칠 수 있다.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>EV라면 지금이 타이밍</h2>

          <p style={AS.p}>
            2022년부터 일정 가격 이하의 전기차와 플러그인 하이브리드는{" "}
            <span style={AS.highlight}>FBT 면제</span> 대상이다. 세전 공제에 FBT 부담까지
            없어지니, EV를 고려 중인 직장인에게는 현재 시점에서 노베이티드 리스가 가장 강력한
            구매 수단 중 하나인 셈이다.
          </p>

          <p style={AS.p}>
            다만 정책 조건은 변경될 수 있으니, 계약 전 최신 적용 요건을 반드시 확인해야 한다.
          </p>

          <h2 style={AS.h2}>맞는 사람, 맞지 않는 사람</h2>

          <div style={AS.tipBox}>
            <div style={AS.tipTitle}>유리한 경우</div>
            <ul style={AS.tipList}>
              <li style={AS.tipItem}>연봉 $70,000 이상, 세율이 높을수록 절세 효과 커짐</li>
              <li style={AS.tipItem}>주행거리가 많은 직장인</li>
              <li style={AS.tipItem}>EV 또는 PHEV 구입을 고려 중인 경우</li>
            </ul>
          </div>

          <div style={AS.tipBox}>
            <div style={AS.tipTitle}>주의가 필요한 경우</div>
            <ul style={AS.tipList}>
              <li style={AS.tipItem}>계약 기간 중 이직 가능성이 높은 경우 (이전 가능하지만 절차가 복잡)</li>
              <li style={AS.tipItem}>자영업자 또는 프리랜서, 고용주가 없으면 구조 자체가 성립하지 않는다</li>
              <li style={AS.tipItem}>연간 주행거리가 적은 경우, FBT 부담이 혜택을 상쇄할 수 있다</li>
            </ul>
          </div>

          <h2 style={AS.h2}>결론</h2>

          <p style={AS.p}>
            연봉이 일정 수준 이상이고 차를 꾸준히 운용할 계획이라면, 노베이티드 리스는 분명히
            검토할 가치가 있다. 다만 &lsquo;세금 아낀다&rsquo;는 말만 듣고 덜컥 계약부터 하는
            건 금물. FBT 구조를 이해하고, 본인의 주행 패턴과 소득 구간에 맞는지 먼저 따져보는
            것이 시작이다.
          </p>

          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>지금 나온 클리어런스 딜 확인하기</div>
            <p style={AS.ctaDesc}>딜러가 처분해야 하는 재고 차량, 매주 업데이트</p>
            <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</Link>
          </div>

    </>
  );
}
