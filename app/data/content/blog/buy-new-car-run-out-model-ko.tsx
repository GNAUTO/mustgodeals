import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

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

export default function BuyNewCarRunOutModelKoContent() {
  return (
    <>
      <div style={AS.callout}>
        <div style={AS.calloutTitle}>이 글이 도움되는 분</div>
        <p style={AS.calloutText}>
          한 대를 오래 타실 생각이라면, 풀체인지 직전의 마지막 연식이 가장 합리적인 선택입니다.
          여러 해에 걸쳐 다듬어진 가장 완성도 높은 상태이면서, 할인은 가장 크고 옵션도 가장
          풍성하게 들어갑니다.
        </p>
      </div>

      <p style={AS.p}>
        차를 한 번 사면 십 년, 십오 년씩 오래 타시는 분들께 특히 권해 드리고 싶은 이야기입니다.
        신차를 고르실 때 풀체인지 직전, 그러니까 그 모델의 마지막 연식을 선택하시면 같은
        예산으로 훨씬 더 나은 차를 가지실 수 있습니다. 그 이유와 함께, 흔히 지적되는 한 가지
        단점이 왜 오래 타시는 분들께는 해당되지 않는지 차근차근 말씀드리겠습니다.
      </p>

      <h2 style={AS.h2}>가장 오래 다듬어진, 가장 완성된 차입니다</h2>

      <p style={AS.p}>
        먼저 말씀드리고 싶은 것은 완성도입니다. 하나의 모델은 몇 년에 걸쳐 생산되면서 초기에
        드러난 결함과 부족한 부분을 조금씩 개선해 나갑니다. 첫 연식이 안고 있던 잔고장과
        설계상의 아쉬움이 마지막 연식에 이르면 대부분 정리되어 있습니다. 다시 말해 풀체인지
        직전의 모델은 그 세대에서 가장 오래 다듬어진, 가장 완성된 형태라고 할 수 있습니다.
        오래 타실 차일수록 이 완성도의 가치는 더욱 크게 다가옵니다.
      </p>

      <h2 style={AS.h2}>옵션도 마지막 연식이 가장 풍성합니다</h2>

      <p style={AS.p}>
        옵션 구성 역시 마지막 연식이 가장 유리합니다. 중간 연식은 연식 변경 과정에서 옵션이
        이리저리 재편되며 구성이 애매해지는 경우가 많습니다. 반면 마지막 연식에는 재고를
        정리하려는 목적에서 오히려 옵션을 풍성하게 얹어 주는 경향이 있습니다. 그동안 선택
        사양으로만 제공되던 기능들이 기본으로 포함되거나, 상위 구성을 갖춘 한정 에디션이
        합리적인 가격에 나오기도 합니다. 결과적으로 같은 값으로 더 잘 갖춰진 차를 가지실
        수 있습니다.
      </p>

      <h2 style={AS.h2}>가격도 이 시기가 가장 좋습니다</h2>

      <p style={AS.p}>
        값 역시 이 시기가 가장 좋습니다. 풀체인지를 앞두면 판매점은 새 모델이 들어올 자리를
        마련하기 위해 기존 재고를 서둘러 정리해야 합니다. 자연히 이 시점에 할인 폭이 가장
        커집니다. 호주에서는 이를 런아웃(run out) 세일이라고 부르며, 연식이 바뀌기 직전이
        가장 값이 좋은 때입니다.
      </p>

      <h2 style={AS.h2}>감가에 대한 우려는 이렇게 보시면 됩니다</h2>

      <p style={AS.p}>
        물론 이런 우려도 있습니다. 마지막 연식을 사면 새 모델이 나오는 순간 곧바로 구형이
        되어 감가가 빠르지 않겠느냐는 것입니다. 타당한 지적입니다. 새 모델이 출시되면 기존
        차는 한 세대 이전 모델이 되고, 중고 시세 역시 그만큼 빠르게 내려갑니다. 그러나 이
        부분이 실질적으로 문제가 되는 것은 몇 년 뒤 되파실 분들의 경우입니다. 되팔 때 그
        시세 차이를 그대로 감수해야 하기 때문입니다. 십 년, 십오 년을 타고 폐차에 가까울
        때까지 운행하실 분들께는 사정이 다릅니다. 애초에 되팔 계획이 없으니 감가 속도가
        빠르든 느리든 큰 의미가 없습니다. 많은 분들이 가장 걱정하시는 단점이, 오래 타시는
        분들께는 사실상 사라지는 셈입니다. 오래 타시는 분들이 마지막 연식에서 가장 큰 이득을
        보시는 이유가 바로 여기에 있습니다.
      </p>

      <h2 style={AS.h2}>다만 두 가지는 확인하시기 바랍니다</h2>

      <p style={AS.p}>
        몇 가지는 짚고 넘어가시는 것이 좋습니다. 첫째, 제작 일자와 컴플라이언스 일자를 반드시
        확인하시기 바랍니다. 마지막 연식 재고 중에는 생산된 뒤 상당 기간 보관되어 있던 차량도
        있습니다. 등록은 새로 하더라도 실제 제작 시점이 일 년 이상 지난 경우가 있는데,
        그렇다면 타이어나 배터리도 그만큼 노화가 진행된 상태이며 훗날 되파실 때 연식 표기에서도
        불리해질 수 있습니다. 할인 폭이 이 점을 충분히 반영하고 있다면 괜찮지만, 그렇지 않다면
        추가 할인을 요청하시는 것이 합리적입니다. 둘째, 새로 출시되는 모델이 안전이나 연비
        면에서 크게 앞서는 부분이 있는지 살펴보시기 바랍니다. 십오 년을 함께할 차라면 새
        모델에 추가된 안전 사양이나 하이브리드 구성을 그 오랜 기간 내내 누리지 못하게 되는
        것이므로 한 번쯤 따져 보실 만합니다. 이 두 가지만 확인되면, 마지막 연식은 오래 타실
        분들께 가장 현명한 선택이 됩니다.
      </p>

      <p style={AS.p}>
        많은 분들이 새 모델을 기다리는 사이, 가장 완성된 마지막 연식을 택하시는 것도 충분히
        좋은 선택입니다. 오래 타실수록 그 가치는 더욱 분명해집니다.
      </p>

      <div style={clusterBox}>
        <div style={clusterHeading}>관련 가이드</div>
        <Link href="/blog/best-time-to-buy-a-car-australia-ko" style={clusterCard}>
          <div style={clusterTitle}>호주에서 차 구매하기 좋은 시기</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/how-to-negotiate-car-price-australia-ko" style={clusterCard}>
          <div style={clusterTitle}>딜러와 차 가격 협상하는 방법</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/what-is-a-dealer-clearance-car-australia-ko" style={clusterCard}>
          <div style={clusterTitle}>딜러 클리어런스 카란 무엇인가</div>
          <div style={clusterArrow}>→</div>
        </Link>
      </div>

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>지금 나와 있는 데모카 딜을 확인해 보세요</div>
        <p style={AS.ctaDesc}>월말 재고 정리 딜러 차량, 매주 업데이트됩니다</p>
        <Link href="/listings" style={AS.ctaBtn}>데모카 딜 보러 가기 →</Link>
      </div>
    </>
  );
}
