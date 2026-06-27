import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function AustraliaCarRecallsJune2026KoContent() {
  return (
    <>
      {/* Hero image */}
      <div style={AS.imgWrap}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://pressroom.toyota.com.au/-/media/toyota/pressroom/banners/2024/02/13/01/06/lnd_my24_0020_v001-copy.jpg"
          alt="Toyota Prado 2024 호주"
          style={{ width: "100%", height: "420px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
        />
        <p style={AS.imgCaption}>Image: Toyota Australia Media</p>
      </div>

      <p style={AS.p}>
        2026년 6월, 호주 정부의 리콜 시스템이 유난히 바쁘게 돌아갔다.{" "}
        <span style={AS.highlight}>9개 제조사가 11건의 리콜을 발령</span>했고, 총 16개 모델이 영향을
        받았다. 중국산 신진 브랜드부터 유럽 전통 강자까지 — 아래 목록에 내 차가 있다면, 가까운
        공식 딜러에서 무상 수리를 받을 수 있다.
      </p>

      <p style={AS.p}>
        2026년 6월 호주에서 발생한 모든 차량 리콜을 정리했다. 내 차가 포함됐는지 확인하는
        방법과 다음 단계까지 함께 안내한다.
      </p>

      <h2 style={AS.h2}>6월 리콜 전체 목록</h2>

      <div style={{ overflowX: "auto", margin: "1.5rem 0" }}>
        <table style={AS.table}>
          <thead>
            <tr>
              <th style={AS.th}>날짜</th>
              <th style={AS.th}>연식</th>
              <th style={AS.th}>브랜드</th>
              <th style={AS.th}>모델</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["2026년 6월 23일", "2023–2026", "체리", "Tiggo 8 Pro Max"],
              ["2026년 6월 18일", "2024–2025", "폭스바겐", "Polo, T-Roc, T-Cross"],
              ["2026년 6월 18일", "2024–2026", "현대", "Inster (AX)"],
              ["2026년 6월 17일", "2015–2022", "렉서스", "RC F"],
              ["2026년 6월 12일", "2024–2025", "랜드로버", "Range Rover"],
              ["2026년 6월 5일", "2025", "현대", "Palisade (LX3)"],
              ["2026년 6월 5일", "2022–2024", "닛산", "Qashqai"],
              ["2026년 6월 3일", "2024–2025", "렉서스", "GX550, UX300e, UX300h"],
              ["2026년 6월 3일", "2024–2025", "토요타", "Prado (250 Series)"],
              ["2026년 6월 2일", "2020–2023", "기아", "Picanto"],
              ["2026년 6월 2일", "2025", "쿠프라", "Terramar"],
            ].map(([date, year, make, model], i) => (
              <tr key={i}>
                <td style={AS.td}>{date}</td>
                <td style={AS.td}>{year}</td>
                <td style={{ ...AS.td, fontWeight: 600 }}>{make}</td>
                <td style={AS.td}>{model}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 style={AS.h2}>리콜, 무서운 게 아니다</h2>

      <p style={AS.p}>
        리콜이라는 단어를 들으면 괜히 불안해지는 게 사실이다. 그런데 사실 리콜은 제조사가
        &lsquo;우리가 책임지겠다&rsquo;고 나서는 행위다. 에어백 인플레이터 결함, 소프트웨어 오류,
        연료 누유, 브레이크 이슈 — 원인이 무엇이든, 수리는 무조건 무료이고, 비용은 제조사가
        전액 부담한다.
      </p>

      <p style={AS.p}>
        이번 달 주목할 항목은 두 가지다. 먼저{" "}
        <span style={AS.highlight}>폭스바겐 폴로·T-Roc·T-Cross</span>는 2024~2025년식 세 모델이
        한꺼번에 이름을 올렸다. 그리고{" "}
        <span style={AS.highlight}>렉서스 RC F</span>는 무려 2015년식까지 범위가 확대된다 —
        중고차로 구매했더라도 VIN(차대번호)이 해당 범위에 들어가면 리콜 대상이다.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>중요 안내</div>
        <p style={AS.calloutText}>
          데모카(전시·시승 차량)도 리콜 대상에서 예외가 없다. 딜러가 리콜이 등록된 데모카를
          판매할 경우, 반드시 수리를 완료한 후 인도해야 할 법적 의무가 있다.
        </p>
      </div>

      <h2 style={AS.h2}>내 차 리콜 여부, 이렇게 확인하세요</h2>

      <p style={AS.p}>
        호주 정부의 공식 리콜 데이터베이스에서 브랜드·모델명 또는 VIN(차대번호, 대시보드나
        운전석 도어 프레임에 새겨진 17자리 코드)으로 검색할 수 있다.
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>리콜 확인 방법</div>
        <ol style={AS.tipList}>
          <li style={AS.tipItem}>
            <a
              href="https://www.vehiclerecalls.gov.au"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#1A1A1A", fontWeight: 600 }}
            >
              recalls.infrastructure.gov.au
            </a>{" "}
            접속
          </li>
          <li style={AS.tipItem}>제품 카테고리에서 &ldquo;Vehicle&rdquo; 선택</li>
          <li style={AS.tipItem}>브랜드·모델 검색 또는 VIN 입력</li>
          <li style={AS.tipItem}>리콜 항목이 나오면 공식 딜러에 연락해 수리 예약</li>
        </ol>
      </div>

      <p style={AS.p}>
        제조사에서 우편이나 이메일로 연락이 오기도 하지만, 기다리지 말고 먼저 확인하는 편이
        낫다. 위 목록에서 내 차를 발견했다면 지금 바로 검색해보자. 비용은 0원이고, 대부분의
        수리는 하루 안에 끝난다.
      </p>

      <h2 style={AS.h2}>리콜 이후 어떻게 되나요?</h2>

      <p style={AS.p}>
        리콜이 등록되면 공식 딜러십으로 수리 지침과 부품이 공급된다. 예약을 잡고 차를 맡기면
        제조사 의무에 따라 무상으로 수리가 진행된다 — 공임비, 부품값 어느 것도 청구되지 않는다.
        그것이 리콜의 본질이다. 제조사가 자신들의 실수를 인정하고 책임지는 방식인 셈이다.
      </p>

      <p style={AS.p}>
        중고차나 데모카를 구매할 계획이라면, 계약서에 서명하기 전 리콜 이력을 확인하는 것이
        현명하다. 미해결 리콜이 있다고 해서 반드시 구매를 포기할 이유는 없지만, 딜러가 수리를
        완료했는지, 아니면 완료 일정을 명확하게 안내하는지는 반드시 확인해야 한다.
      </p>

      <div style={AS.sourceBox}>
        <span style={AS.sourceLabel}>출처</span>
        <a
          href="https://www.drive.com.au/news/every-car-recalled-so-far-in-june-2026/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
        >
          drive.com.au ↗
        </a>
      </div>

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>데모카 딜을 찾고 계신가요?</div>
        <p style={AS.ctaDesc}>
          데모카는 리콜 수리 완료 후 인도가 원칙입니다. 공식 딜러의 현재 매물을 확인해보세요.
        </p>
        <Link href="/listings" style={AS.ctaBtn}>데모 매물 보기 →</Link>
      </div>
    </>
  );
}
