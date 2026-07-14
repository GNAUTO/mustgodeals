import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';
import SuitAvoid from '../../../components/posts/SuitAvoid';

const faqData = [
  {
    q: "하이브리드와 PHEV의 실질적인 차이가 뭔가",
    a: "하이브리드는 충전 포트가 없다. 배터리는 제동 에너지와 엔진이 스스로 충전하며, 운전자가 관여할 필요 없다. PHEV는 콘센트에서 충전하는 훨씬 큰 배터리를 탑재해 40~80km를 순수 전기로 주행한 뒤 휘발유로 전환한다. 집이나 직장에서 매일 충전할 수 있다면 PHEV의 연료비 절감 효과가 압도적이다. 충전이 어려운 환경이라면 무거운 배터리를 달고 다니는 무거운 휘발유차가 될 뿐이다.",
  },
  {
    q: "전기차를 지금 사도 될까 아니면 기다려야 할까",
    a: "집이나 직장 충전이 가능하고 구매 예산이 $91,387 이하라면 지금 사는 것이 재정적으로 합리적이다. BEV 적격 차량의 FBT 면제 혜택은 적어도 2027년 3월 31일까지 유지되므로, 노베이티드 리스를 통한 절세 창구가 열려 있는 동안 활용하는 것이 유리하다. 반면 충전 시설이 없는 아파트에 거주하거나 하루 400km 이상을 단번에 달려야 하는 상황이라면, 인프라 확충이나 더 긴 항속거리 모델을 기다리는 것이 현실적이다.",
  },
  {
    q: "EREV가 PHEV와 어떻게 다른가",
    a: "PHEV는 배터리가 방전되거나 고속 주행 시 엔진이 직접 바퀴를 굴릴 수 있다. EREV는 어떤 상황에서도 엔진이 바퀴를 구동하지 않는다. 엔진은 오직 발전기 역할만 하며, 생산된 전기가 모터로 전달된다. 결과적으로 EREV는 배터리 잔량과 무관하게 항상 전기차처럼 달린다. 출력 전달이 매끄럽고 일관된 것이 특징이다. 단점은 호주에서 아직 검증된 감가 데이터가 거의 없다는 점이다.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

const clusterBox: React.CSSProperties = { margin: "2rem 0" };
const clusterHeading: React.CSSProperties = { fontSize: "11px", fontWeight: 700, color: "#888", letterSpacing: "0.09em", textTransform: "uppercase" as const, marginBottom: "10px" };
const clusterCard: React.CSSProperties = {
  display: "flex", alignItems: "center", justifyContent: "space-between",
  background: "white", border: "0.5px solid rgba(0,0,0,0.09)",
  borderLeft: "3px solid #CCDA47", borderRadius: "8px",
  padding: "0.875rem 1.25rem", textDecoration: "none",
  marginBottom: "8px", gap: "12px",
};
const clusterTitle: React.CSSProperties = { fontSize: "14px", fontWeight: 600, color: "#1A1A1A", lineHeight: 1.3 };
const clusterArrow: React.CSSProperties = { fontSize: "16px", color: "#CCDA47", flexShrink: 0 };

export default function FuelTypeGuideAustraliaKoContent() {
  return (
    <>
      <p style={AS.p}>
        일곱 가지 파워트레인 중 무엇을 선택할지는 대부분의 구매자가 생각하는 것보다 단순하다.
        하루 주행거리, 집이나 직장에서 충전이 가능한지, 주말 사용 패턴. 이 세 가지만 정리해도
        선택지는 한두 개로 좁혀진다.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>핵심 요약</div>
        <p style={AS.calloutText}>
          도심 통근자 대부분에게는 하이브리드 또는 PHEV가 가장 무난한 선택이다.
          집이나 직장에서 충전이 가능하다면 배터리 전기차의 장기 비용 구조가 가장 유리하며,
          노베이티드 리스와 결합하면 절세 효과가 더욱 커진다.
          견인이나 장거리 주행이 잦다면 디젤이 여전히 가장 현실적인 답이다.
        </p>
      </div>

      <p style={AS.p}>
        차량 구입 시 취득세(스탬프 듀티)는 주(州)마다 다르고 구입 가격에 따라 달라진다.
        연료 방식별 총보유비용을 비교하기 전에 실제 세금 부담을 먼저 파악하는 것이 좋다.{" "}
        <Link href="/tools/stamp-duty-calculator">
          스탬프 듀티 계산기
        </Link>
        에서 전 주(州) 계산이 가능하다.
      </p>

      <hr style={AS.divider} />

      {/* ── 휘발유 ── */}
      <h2 style={AS.h2}>휘발유</h2>
      <div style={AS.overline}>작동 방식</div>
      <p style={AS.p}>
        가솔린 엔진이 무연 휘발유를 연소해 바퀴를 직접 구동한다.
        별도의 배터리나 전기모터 없이 엔진이 모든 일을 담당하는 구조다.
      </p>
      <h3 style={AS.h3}>호주에서의 강점과 약점</h3>
      <p style={AS.p}>
        휘발유가 여전히 기본값인 이유는 명확하다. 구매 가격이 가장 낮고, 모델 선택폭이
        가장 넓으며, 중고 거래 시장도 가장 크다. 어떤 정비소에서도 수리가 가능하다는
        실용적인 강점도 있다. 약점은 운행 비용이다. km당 연료비는 액체 연료 파워트레인
        중 가장 높고, 전기차에게 주어지는 FBT 면제 혜택도 받지 못한다.
        전기차 공급이 늘어나면서 감가 압력도 서서히 커지는 추세다.
      </p>
      <SuitAvoid
        lang="KO"
        suits="초기 구입 비용을 최소화해야 하는 구매자. 충전 인프라가 부족하고 새로운 기술 정비 서비스가 드문 지방 거주자. 합리적인 가격대에서 가장 넓은 모델 선택폭을 원하는 경우에 적합하다."
        avoid="연간 2만km 이상 주행해 연료비가 크게 쌓이는 운전자. 고용주가 전기차 노베이티드 리스 혜택을 제공하는 직장인은 휘발유차 선택 시 상당한 절세 기회를 놓치게 된다."
      />

      <hr style={AS.divider} />

      {/* ── 디젤 ── */}
      <h2 style={AS.h2}>디젤</h2>
      <div style={AS.overline}>작동 방식</div>
      <p style={AS.p}>
        점화 플러그 없이 압축 착화 방식으로 연소한다. 리터당 에너지 밀도가 높아
        지속적인 부하 상황과 고속도로 주행에서 연비가 유리하다.
      </p>
      <h3 style={AS.h3}>호주에서의 강점과 약점</h3>
      <p style={AS.p}>
        디젤은 호주가 요구하는 것들에 강하다. 장거리 이동, 카라반이나 트레일러 견인,
        연간 고주행거리 모두 디젤에 유리한 환경이다. 도심 운전자가 간과하기 쉬운 약점은
        DPF(디젤 미립자 필터)다. 고속도로 주행 중 장시간 열이 가해져야 필터가 재생되는데,
        짧은 도심 주행만 반복하면 필터가 막혀 고액 수리로 이어진다. 정비비도 휘발유보다
        다소 높고, 글로벌 배기 규제 강화로 장기 재판매 가치에 불확실성이 있다.
      </p>
      <SuitAvoid
        lang="KO"
        suits="보트, 카라반, 트레일러를 정기적으로 견인하는 운전자. 연간 3만km 이상을 주로 고속도로에서 달리는 고주행거리 운전자. 충전소 없이도 최장 거리를 달려야 하는 지방 거주자."
        avoid="왕복 30km 이내 단거리 도심 통근자. 고속도로를 거의 이용하지 않는 대도시 거주자. DPF 문제 리스크만으로도 순수 도심 용도에는 부적합하다."
      />

      <hr style={AS.divider} />

      {/* ── 하이브리드 ── */}
      <h2 style={AS.h2}>하이브리드 (HEV)</h2>
      <div style={AS.overline}>작동 방식</div>
      <p style={AS.p}>
        가솔린 엔진과 소형 배터리를 결합한다. 배터리는 제동 에너지 회수와 엔진으로
        자동 충전되며, 충전 포트는 없다. 운전자 입장에서는 일반 휘발유차와 동일하게 사용한다.
      </p>
      <h3 style={AS.h3}>호주에서의 강점과 약점</h3>
      <p style={AS.p}>
        호주에서 하이브리드 판매가 빠르게 늘고 있는 이유는 분명하다. 충전 인프라나
        생활 방식 변화 없이 연비를 개선할 수 있기 때문이다. 제동 에너지 회수로
        브레이크 패드 마모도 줄어 정비비도 낮아진다. 연비 개선 효과는 제동이 잦은
        도심에서 가장 크고, 고속도로에서는 배터리 기여도가 줄어 효과가 감소한다.
        견인 등급이 디젤보다 낮은 편이며, 파워트레인 복잡도가 순수 휘발유차보다
        높지만 주요 브랜드의 신뢰성은 검증됐다.
      </p>
      <SuitAvoid
        lang="KO"
        suits="충전 시설 없이 연료비를 줄이고 싶은 도심 통근자. 충전을 원하지 않거나 할 수 없는 아파트 거주자. 생활 패턴 변화 없이 연비를 개선할 수 있는 검증된 선택지를 원하는 구매자."
        avoid="상당한 견인 능력이 필요한 운전자. 연비 절감 폭이 줄어드는 장거리 고속도로 주행이 주 용도인 경우, 디젤이나 휘발유와 실질적인 차이가 적을 수 있다."
      />

      <hr style={AS.divider} />

      {/* ── PHEV ── */}
      <h2 style={AS.h2}>플러그인 하이브리드 (PHEV)</h2>
      <div style={AS.overline}>작동 방식</div>
      <p style={AS.p}>
        콘센트에서 충전하는 대형 배터리를 탑재한 하이브리드다. 전기만으로 40~80km를
        주행한 뒤 배터리가 방전되면 휘발유로 전환되는 구조다.
      </p>
      <h3 style={AS.h3}>호주에서의 강점과 약점</h3>
      <p style={AS.p}>
        호주인의 평균 일일 통근 거리는 50km에 훨씬 못 미친다. 야간 충전이 가능한
        운전자라면 대부분의 평일 출퇴근을 휘발유 없이 해결할 수 있고, 장거리 드라이브엔
        휘발유 엔진이 그대로 작동한다. 이 조합은 실질적으로 매력적이다. 단, 충전
        인프라가 없으면 무거운 배터리를 달고 달리는 무거운 휘발유차로 전락한다.
        PHEV에 대한 FBT 면제는 2025년 4월 1일에 종료됐다. 이후 새로 체결된 PHEV
        노베이티드 리스는 휘발유차와 동일하게 전액 FBT가 부과된다. 해당 날짜 이전
        체결 계약은 리스 기간 종료까지 혜택이 유지되나, 계약 조건을 실질적으로
        변경하면 적격 여부가 리셋될 수 있다.
      </p>
      <SuitAvoid
        lang="KO"
        suits="집이나 직장에서 충전이 가능하고 일일 통근 거리가 60km 이내인 운전자. 순수 전기차로 전환하기 전에 휘발유 백업을 유지하며 일상 연료비를 줄이고 싶은 구매자. 2025년 4월 이전 체결로 FBT 면제를 유지하고 있는 기존 계약자."
        avoid="충전이 불가능한 아파트 거주자. FBT 절세를 기대하고 노베이티드 리스를 계획 중인 경우, 면제가 이미 종료됐으므로 계산이 달라진다. 배터리 전기 구간이 금방 소진되는 장거리 지방 주행이 주 용도인 운전자."
      />

      <hr style={AS.divider} />

      {/* ── EREV ── */}
      <h2 style={AS.h2}>EREV (주행거리 연장형 전기차)</h2>
      <div style={AS.overline}>작동 방식</div>
      <p style={AS.p}>
        배터리 전기차에 소형 가솔린 엔진을 탑재한 형태지만, 엔진은 절대 바퀴를
        직접 구동하지 않는다. 엔진은 오직 발전기 역할만 하며 생산된 전기가
        모터로 전달돼 주행을 이어간다.
      </p>
      <h3 style={AS.h3}>호주에서의 강점과 약점</h3>
      <p style={AS.p}>
        EREV는 배터리 잔량과 무관하게 항상 전기차처럼 달린다. 발전기가 전기를 공급하는
        동안에도 출력 전달 방식은 동일하며 운전 느낌이 일관되다. 현재 공공 충전 인프라가
        부족해 BEV가 부담스러운 운전자에게 전기차 드라이빙과 항속거리 안심을 동시에
        제공하는 구성이다. 다만 2026년 중반 현재 호주에서 구매 가능한 모델이 극소수다.
        감가 데이터가 사실상 없어 재판매 가치 예측이 어렵다는 리스크를 안고 있으며,
        향후 12~18개월 내 선택지가 늘어날 전망이지만 현재는 초기 단계다.
      </p>
      <SuitAvoid
        lang="KO"
        suits="현재 BEV 항속거리가 부족한 장거리 운전자 중 전기차 드라이빙을 원하는 경우. 재판매 불확실성을 이해하고 수용할 수 있는 얼리 어답터. 2~3년 이내 차량 교체 없이 장기 보유를 계획하는 구매자."
        avoid="검증된 감가 데이터를 바탕으로 자산 가치를 예측하고 싶은 구매자. 폭넓은 딜러 네트워크에서 즉시 출고를 원하는 경우, 현재는 선택지가 매우 제한적이다."
      />
      <p style={AS.p}>
        EREV는 중고 감가 데이터가 부족하므로, 시승차나 데모카를 구매할 때 워런티 시작
        시점을 정확히 확인하는 것이 특히 중요하다.{" "}
        <Link href="/blog/demo-car-warranty-start-australia-ko">
          데모카 워런티 가이드
        </Link>
        에서 서명 전 확인해야 할 사항을 정리했다.
      </p>

      <hr style={AS.divider} />

      {/* ── BEV ── */}
      <h2 style={AS.h2}>배터리 전기차 (BEV)</h2>
      <div style={AS.overline}>작동 방식</div>
      <p style={AS.p}>
        배터리에 저장된 전기만으로 주행하며, 콘센트 또는 공공 급속충전기로 충전한다.
        내연기관, 연료탱크, 배기 시스템이 없다.
      </p>
      <h3 style={AS.h3}>호주에서의 강점과 약점</h3>
      <p style={AS.p}>
        km당 연료비(전기 요금)는 주류 파워트레인 중 가장 낮다. 엔진 오일, 점화 플러그가
        없고 회생제동으로 브레이크 마모도 줄어 정기점검 비용도 크게 낮아진다.
        PAYG 직장인의 경우, LCT 연비 우수 기준 임계값($91,387, 2025~26년도) 이하의
        적격 BEV는 2027년 3월 31일까지 노베이티드 리스를 통한 FBT 면제 혜택을 받는다.
        세전 리스 상환과 세전 운용비, 그리고 FBT 면제가 결합되면 호주에서 가장 큰
        세금 혜택을 동반한 자동차 소유 구조가 만들어진다. 약점은 충전 의존성이다.
        집이나 직장 충전 없이 공공 급속충전만으로 운용하면 비용 절감 효과가 줄고
        불편함이 커진다. 단일 충전으로 400km를 초과하는 장거리 주행 시 충전 계획이
        필수다.
      </p>
      <SuitAvoid
        lang="KO"
        suits="집이나 직장 충전이 가능하고 일일 주행거리가 항속거리 안에 들어오는 운전자. 노베이티드 리스를 통해 FBT 면제와 세전 공제 효과를 극대화하려는 직장인. 예측 가능한 일상 패턴과 야간 충전 환경을 갖춘 도심 거주자."
        avoid="집 충전도, 직장 충전도 불가능한 아파트 거주자. 대부분의 BEV는 중량 견인 등급이 낮고, 견인 시 항속거리가 급감한다. 하루 400km 이상을 충전 계획 없이 단번에 달려야 하는 운전자에게도 현재 BEV 인프라는 아직 부족하다."
      />
      <p style={AS.p}>
        노베이티드 리스가 적격 전기차에서 실제로 얼마를 절약해 주는지 연봉별로
        상세하게 분석한 내용은{" "}
        <Link href="/blog/novated-lease-worth-it-australia-ko">
          노베이티드 리스 가이드
        </Link>
        에서 확인할 수 있다.
      </p>

      <hr style={AS.divider} />

      {/* ── 수소 ── */}
      <h2 style={AS.h2}>수소 (FCEV)</h2>
      <div style={AS.overline}>작동 방식</div>
      <p style={AS.p}>
        수소와 산소의 화학 반응으로 전기를 만들어 모터를 구동한다.
        배기로는 수증기만 나온다. 충전 시간은 휘발유 주유와 비슷하다.
      </p>
      <h3 style={AS.h3}>호주에서의 현실</h3>
      <p style={AS.p}>
        2026년 현재 수소는 일반 소비자의 선택지가 아니다. 수소 충전소는 특정 플릿
        운영 노선에 집중돼 있고, 대부분의 호주인이 거주하거나 일하는 곳 근처에
        수소를 충전할 수 있는 곳이 없다. 구매 가격도 높고 모델 선택폭도 극히 제한적이다.
        인프라 투자가 장기적으로 상황을 바꿀 수 있지만, 현재는 특정 플릿 운영자를
        위한 기술이다.
      </p>
      <SuitAvoid
        lang="KO"
        suits="수소 인프라가 구축된 노선을 운영하는 상업 플릿 사업자. 충전 시설에 직접 접근 가능한 플릿 계약 운영자."
        avoid="충전 솔루션을 스스로 마련할 수 없는 일반 소비자 구매자. 수소는 2026년 현재 호주 일반 구매자의 현실적인 선택지가 아니다."
      />

      <hr style={AS.divider} />

      {/* ── 요약 표 ── */}
      <h2 style={AS.h2}>내 생활 패턴에 맞는 연료 방식</h2>

      <div style={{ overflowX: "auto" }}>
        <table style={{ ...AS.table, minWidth: "540px" }}>
          <thead>
            <tr>
              <th style={AS.th}>생활 패턴</th>
              <th style={AS.th}>1순위</th>
              <th style={AS.th}>2순위</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={AS.td}>하루 40km 이내 도심 통근, 집 충전 가능</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>BEV</td>
              <td style={AS.td}>PHEV</td>
            </tr>
            <tr>
              <td style={AS.td}>도심 통근, 집이나 직장 충전 불가</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>하이브리드</td>
              <td style={AS.td}>휘발유</td>
            </tr>
            <tr>
              <td style={AS.td}>왕복 80km 이상 장거리 고속도로 통근</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>디젤</td>
              <td style={AS.td}>하이브리드</td>
            </tr>
            <tr>
              <td style={AS.td}>주중 도심, 주말 장거리 로드트립</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>PHEV</td>
              <td style={AS.td}>하이브리드</td>
            </tr>
            <tr>
              <td style={AS.td}>카라반이나 트레일러 정기 견인</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>디젤</td>
              <td style={AS.td}>휘발유</td>
            </tr>
            <tr>
              <td style={AS.td}>아파트 거주, 충전 환경 없음</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>하이브리드</td>
              <td style={AS.td}>휘발유</td>
            </tr>
            <tr>
              <td style={AS.td}>PAYG 직장인, 노베이티드 리스 활용</td>
              <td style={{ ...AS.td, fontWeight: 600, color: "#1A1A1A" }}>BEV</td>
              <td style={AS.td}>EREV</td>
            </tr>
          </tbody>
        </table>
      </div>

      <hr style={AS.divider} />

      <h2 style={AS.h2}>자주 묻는 질문</h2>

      {faqData.map(({ q, a }, i) => (
        <div key={i} style={{ marginBottom: "1.5rem" }}>
          <h3 style={AS.h3}>{q}</h3>
          <p style={AS.p}>{a}</p>
        </div>
      ))}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div style={AS.disclaimer}>
        <p style={AS.disclaimerText}>
          이 글은 일반 정보 제공 목적으로 작성됐으며 세무 또는 재무 조언이 아닙니다.
          FBT 기준, LCT 임계값, 면제 조건은 변경될 수 있습니다. 구매 또는 급여 희생 결정 전에
          ato.gov.au에서 최신 정보를 확인하시고, 구체적인 상황에 맞는 조언은 등록된
          세무사 또는 재무 상담사에게 문의하시기 바랍니다.
        </p>
      </div>

      <div style={clusterBox}>
        <div style={clusterHeading}>관련 가이드</div>
        <Link href="/blog/novated-lease-worth-it-australia-ko" style={clusterCard}>
          <div style={clusterTitle}>노베이티드 리스, 정말 이득일까. 연봉과 상황별 정직한 답변</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/demo-car-warranty-start-australia-ko" style={clusterCard}>
          <div style={clusterTitle}>호주 데모카 워런티는 정확히 언제부터 시작될까</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/tools/stamp-duty-calculator" style={clusterCard}>
          <div style={clusterTitle}>내 차 취득세(스탬프 듀티) 계산하기</div>
          <div style={clusterArrow}>→</div>
        </Link>
      </div>

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>지금 나온 클리어런스 딜 확인하기</div>
        <p style={AS.ctaDesc}>월말 재고 정리 딜, 매주 업데이트</p>
        <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</Link>
      </div>
    </>
  );
}
