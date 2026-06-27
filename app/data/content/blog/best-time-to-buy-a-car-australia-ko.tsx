import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function BestTimeToBuyACarAustraliaKoContent() {
  return (
    <>

          <p style={AS.p}>
            자동차를 사려는 사람이라면 누구나 한 번쯤 이런 생각을 해본다.
            &lsquo;지금이 맞는 타이밍일까, 조금 더 기다려야 할까?&rsquo; 사실 이 질문에는
            꽤 명확한 답이 존재한다. 호주 딜러십이 움직이는 방식을 이해하면, 타이밍은
            운이 아니라 전략이 된다.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>지금 이 글을 읽고 있다면 — 6월 말이 바로 그 타이밍이다</div>
            <p style={AS.calloutText}>
              오늘은 6월 22일이다. 호주 회계연도 마감(6월 30일)까지 단 8일이 남았다.
              딜러십 입장에서 6월 30일은 단순한 월말이 아니다. 연간 판매 실적이 확정되는 날이자,
              제조사 인센티브가 결정되는 마감선이다. 이 시기 딜러의 협상 유연성은 1년 중
              가장 높은 수준에 달한다. 지금 당장 딜러십에 전화해서 재고를 확인해볼 이유가 충분하다.
            </p>
          </div>

          <h2 style={AS.h2}>1년 타이밍 캘린더 — 월별로 보는 구매 적기</h2>

          <table style={AS.table}>
            <thead>
              <tr>
                <th style={AS.th}>시기</th>
                <th style={AS.th}>상황</th>
                <th style={AS.th}>구매 적기?</th>
              </tr>
            </thead>
            <tbody>
              {[
                ["1월", "연초 비수기, 구매자 적음", "좋음"],
                ["2~3월", "분기말(3월), 재고 정리", "좋음"],
                ["4~5월", "평달, 특별 이벤트 없음", "보통"],
                ["6월", "회계연도 마감, 최대 할인 시즌", "★ 최고"],
                ["7~8월", "신년 재고 입고, 새 모델 준비", "보통"],
                ["9월", "분기말, 재고 정리", "좋음"],
                ["10~11월", "평달", "보통"],
                ["12월", "연말 프로모션, 재고 정리", "좋음"],
              ].map(([period, desc, rating], i) => (
                <tr key={i} style={{ background: rating.includes("최고") ? "rgba(204,218,71,0.07)" : i % 2 === 0 ? "white" : "#FAFAF8" }}>
                  <td style={{ ...AS.td, fontWeight: rating.includes("최고") ? 600 : 400 }}>{period}</td>
                  <td style={AS.td}>{desc}</td>
                  <td style={{ ...AS.td, color: rating.includes("최고") ? "#8A9A10" : rating === "좋음" ? "#555" : "#999", fontWeight: rating.includes("최고") ? 700 : 400 }}>{rating}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <h2 style={AS.h2}>월말 마지막 3~5일이 핵심인 이유</h2>

          <p style={AS.p}>
            딜러십의 판매 목표는 월 단위로 리셋된다. 마지막 3~5일은 목표 달성 여부가
            판가름나는 시점이어서, 이 기간 딜러의 태도는 평소와 확연히 달라진다.
            같은 달 초에 거절당했던 조건이 월말에는 통과되는 경우가 적지 않다.
            딜러가 먼저 연락해오는 타이밍도 대부분 이 시기다.
          </p>

          <p style={AS.p}>
            이 현상의 배경에는 제조사 인센티브 구조가 있다. 월 판매 목표를 달성하면 그달에
            판매된 모든 차량에 소급 적용되는 보너스가 지급된다. 마지막 1~2대가 이 보너스
            전체를 결정하는 셈이라, 딜러 입장에서는 마진을 양보하더라도 거래를 성사시키는
            편이 훨씬 유리하다.
          </p>

          <h2 style={AS.h2}>신형 모델 출시 직전 — 재고 부담이 기회가 되는 순간</h2>

          <p style={AS.p}>
            새 모델 출시 소식이 들리기 시작하면, 기존 재고는 딜러십에게 부담이 된다.
            새 차가 들어오기 전에 창고를 비워야 하는 압박이 고스란히 할인으로 이어지는 셈이다.
            Toyota RAV4, Mazda CX-5처럼 인기 모델의 페이스리프트나 풀체인지 출시 전후가
            이전 연식을 가장 유리하게 살 수 있는 타이밍이기도 하다.
          </p>

          <p style={AS.p}>
            신형이 꼭 필요한 게 아니라면, 이 시기를 기다리는 전략이 현명한 선택일 수 있다.
            딜러가 먼저 &ldquo;이번 달 안에 결정해주시면 특별 조건을 드릴 수 있다&rdquo;는
            연락을 먼저 해오는 경우도 많다.
          </p>

          <h2 style={AS.h2}>데모카를 노려라 — 6~7월이 최고 물량</h2>

          <p style={AS.p}>
            매년 회계연도가 바뀌는 6~7월, 딜러십 시승차(데모카)가 대거 시장에 풀린다.
            수백 킬로미터밖에 안 달린 차가 많고 관리 상태도 좋지만, 가격은 신차보다
            <span style={AS.highlight}> 10~15% 낮다</span>. 새 차에 준하는 품질을 합리적으로
            원하는 구매자에게는 놓치기 아까운 타이밍이다. 딜러십에 따로 데모카 재고가 있는지
            물어보는 것만으로 선택지가 달라진다.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>지금 바로 할 수 있는 것들</h2>

          <div style={AS.tipBox}>
            <div style={AS.tipTitle}>6월 30일 전 실행 체크리스트</div>
            <ul style={AS.tipList}>
              <li style={AS.tipItem}>원하는 차종 시장가 조사 (Carsales, Drive 참고)</li>
              <li style={AS.tipItem}>6월 30일 전 딜러십 방문 또는 전화 예약</li>
              <li style={AS.tipItem}>파이낸스 옵션 사전 검토 (은행 vs 딜러 파이낸스)</li>
              <li style={AS.tipItem}>데모카 재고 별도 문의</li>
              <li style={AS.tipItem}>
                협상 시 이 한 마디 —{" "}
                <strong>&ldquo;이 차, 베스트프라이스로 해주실 수 있어요?&rdquo;</strong>{" "}
                (다른 딜러도 보고 있다는 뉘앙스를 풍기면서 던지면, 딜러가 먼저 카드를 꺼내게 된다)
              </li>
            </ul>
          </div>

          <p style={AS.p}>
            아무리 좋은 타이밍을 잡아도 준비가 안 된 구매자는 기회를 놓치게 되어 있다.
            타이밍을 알았다면, 이제 움직일 차례다.
          </p>

          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>월말 딜 알림 받기</div>
            <p style={AS.ctaDesc}>딜러가 반드시 팔아야 하는 재고를 매주 이메일로 받아보세요</p>
            <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</Link>
          </div>

    </>
  );
}
