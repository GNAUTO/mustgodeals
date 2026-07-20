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

export default function ShouldYouDetailCarBeforeTradeInKoContent() {
  return (
    <>
      <div style={AS.callout}>
        <div style={AS.calloutTitle}>핵심 요약</div>
        <p style={AS.calloutText}>
          딜러한테 넘길 거면 돈 주고 받는 디테일링은 그냥 버리는 돈입니다. 어차피 딜러가
          훨씬 싸게 다시 손봐요. 직접 대충 청소만 하고 그 돈 아끼세요.
        </p>
      </div>

      <p style={AS.p}>
        아니요. 적어도 돈 주고 하는 건 하지 마세요. 딜러한테 팔거나 트레이드인 할 거면
        전문 디테일링은 돌려받지 못하는 돈입니다. 그냥 직접 깨끗하게 치우는 선에서 끝내면 돼요.
      </p>

      <h2 style={AS.h2}>딜러는 차 받자마자 이걸 합니다</h2>

      <p style={AS.p}>
        딜러가 매입한 차는 매장에 다시 내놓기 전에 무조건 재정비를 거칩니다. 디테일링도
        당연히 포함이고요. 근데 이걸 딜러는 미리 계약해둔 샵에서 해요. 일반 손님이 그냥
        가서 내는 값이랑은 비교도 안 되게 싼 도매 단가로요. 내가 디테일링을 했든 안 했든
        딜러는 어차피 다시 합니다. 결국 내가 제값 다 주고 받은 걸 딜러는 훨씬 싼 값에
        한 번 더 하는 거예요. 안 해도 될 일에 돈 쓴 셈이죠.
      </p>

      <h2 style={AS.h2}>그 돈 돌려주지도 않습니다</h2>

      <p style={AS.p}>
        딜러가 디테일링 영수증 보고 값을 더 쳐주는 일은 없습니다. 매입가는 연식, 모델,
        주행거리, 상태, 도매 시세로 정해집니다. 재정비 비용은 이미 제시하는 금액 안에
        다 들어가 있고, 몇백불 들여 디테일링 했다고 그 돈 더 주는 딜러는 없습니다.
      </p>

      <h2 style={AS.h2}>진짜 값에 영향 주는 건 따로 있어요</h2>

      <p style={AS.p}>
        대신 이건 할 만합니다. 더러운 차는 실제로 손해를 봐요. 더러워서가 아니라, 때가
        상태를 가리니까 딜러가 알아서 최악을 가정하거든요. 시트 얼룩, 도어 포켓에 굴러다니는
        쓰레기, 기름때 낀 대시보드. 이런 게 보이면 아 이 차 험하게 탔구나 싶어서 재정비
        비용을 넉넉하게 잡아버립니다. 그 넉넉하게 잡은 만큼 내가 받을 값에서 깎여요.
        반대로 깨끗하면 그 깎임이 없어지는 거고요. 근데 이건 반나절이면 내 손으로 다 합니다.
        세차하고, 청소기 한 번 돌리고, 잡동사니 치우고, 대시보드 닦고, 트렁크 비우고.
        딱 여기까지예요. 트레이드인 앞두고 광택 복원에 실내 스팀 청소까지 전문가한테 맡기는
        건 딜러가 할 일을 내 돈으로 대신 해주는 겁니다.
      </p>

      <h2 style={AS.h2}>개인 거래는 얘기가 다릅니다</h2>

      <p style={AS.p}>
        지금까지 한 얘기는 중간에 딜러가 껴 있을 때 기준이에요. 개인한테 파는 건 다릅니다.
        개인 구매자는 눈으로 보고 마음으로 사니까, 깔끔해 보이는 차가 값도 더 받고 더 빨리
        팔려요. 이럴 땐 디테일링이 제값을 합니다. 재정비를 딜러가 대신 해주는 경우에만
        하지 말라는 거예요.
      </p>

      <p style={AS.p}>
        내 손으로 치우고, 그 돈은 아끼고, 재정비 비용은 딜러가 쓰게 두세요.
      </p>

      <div style={clusterBox}>
        <div style={clusterHeading}>관련 가이드</div>
        <Link href="/blog/how-to-negotiate-car-price-australia-ko" style={clusterCard}>
          <div style={clusterTitle}>딜러와 차 가격 협상하는 방법</div>
          <div style={clusterArrow}>→</div>
        </Link>
        <Link href="/blog/best-time-to-buy-a-car-australia-ko" style={clusterCard}>
          <div style={clusterTitle}>호주에서 차 구매하기 좋은 시기</div>
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
