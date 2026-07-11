import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

export default function AustraliaTollRoadsEtagGuideKoContent() {
  return (
    <>
      <p style={AS.p}>
        호주에 처음 왔을 때 가장 황당했던 것 중 하나가 톨게이트였다. 고속도로를 타고 달리는데
        창구가 없었다. 멈출 곳도, 돈을 내는 곳도 없었다. 그냥 달리다 보면 머리 위로 뭔가
        지나가는데, 그게 카메라였다. 그리고 몇 주 후 집으로 고지서가 날아왔다. 이 글은 그
        황당함을 처음부터 겪지 않도록 하기 위한 안내다.
      </p>

      <p style={AS.p}>
        호주의 모든 유료도로는{' '}
        <span style={AS.highlight}>전자식으로만 운영된다</span>. 창구 없음, 차단기 없음,
        현금 없음. 번호판 자동 인식 카메라가 전부다. 알고 있으면 아무 문제 없는 시스템이지만,
        몰랐을 때의 결과는 예상보다 비싸다.
      </p>

      <h2 style={AS.h2}>톨게이트 창구가 없다는 게 무슨 뜻인가</h2>

      <p style={AS.p}>
        도로 위 구조물(거틀리)에 설치된 카메라가 지나가는 차량의 번호판을 실시간으로 읽는다.
        그 번호판이 등록된 계정에 연결되어 있으면 자동으로 요금이 청구된다. 연결된 계정이
        없으면 차량 등록 주소로 미납 고지서가 발송된다. 지나치고 나서 &ldquo;나중에 내야지&rdquo;
        가 통하지 않는 구조다. 지나치는 그 순간 이미 시작된 것이다.
      </p>

      <p style={AS.p}>
        시드니를 중심으로 호주에서 주요하게 운영 중인 유료도로는 다음과 같다.
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>시드니 주요 유료도로</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>M2 Hills Motorway</li>
          <li style={AS.tipItem}>M4 Western Motorway</li>
          <li style={AS.tipItem}>M5 South Western Motorway</li>
          <li style={AS.tipItem}>M7 Western Sydney Orbital</li>
          <li style={AS.tipItem}>WestConnex (M8 및 터널 구간)</li>
          <li style={AS.tipItem}>NorthConnex (Pennant Hills Road 터널)</li>
          <li style={AS.tipItem}>Eastern Distributor (공항 접근 도로)</li>
          <li style={AS.tipItem}>Sydney Harbour Bridge / Sydney Harbour Tunnel (남향 방면)</li>
        </ul>
      </div>

      <p style={AS.p}>
        공항에서 시내로 들어오는 길, 서쪽으로 나가는 고속도로 대부분이 여기에 해당한다.
        시드니에서 차를 운전한다면 유료도로를 피해 다니기가 쉽지 않다.
      </p>

      <h2 style={AS.h2}>Tag와 Pass, 어떻게 다른가</h2>

      <p style={AS.p}>
        번호판을 계정에 연결하는 방법은 두 가지다. 어떤 걸 선택하느냐는 이용 빈도에 따라 달라진다.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>TAG (태그)</div>
        <p style={AS.calloutText}>
          앞유리 안쪽에 부착하는 작은 전자기기다. 거틀리를 지나갈 때 센서와 직접 통신해서
          즉시 요금을 차감한다. NSW, VIC, QLD를 아우르는 메인 사업자는 Linkt다. 유료도로를
          자주 이용하는 사람이라면 Tag가 맞다. 계정 등록 후 온라인에서 신청하면 며칠 안에
          우편으로 배송된다.
        </p>
      </div>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>PASS (패스)</div>
        <p style={AS.calloutText}>
          기기 없이 번호판만 계정에 등록하는 임시 방식이다. 카메라가 번호판을 읽어 Pass 계정에
          청구한다. 단기 방문자, 렌터카 이용자, 가끔씩 유료도로를 쓰는 경우에 적합하다.
          유료도로 이용 최대 30일 전부터 이용 후 72시간(3일) 이내까지 등록 가능하다.
          72시간을 넘기면 등록 창이 닫히고 미납 처리된다.
        </p>
      </div>

      <p style={AS.p}>
        비용 차이도 있다. Tag 소지자는 표준 요금만 내지만, Pass 이용자는 카메라 영상 매칭에
        따른 소액의 처리 수수료가 건당 추가된다. 가끔 쓰는 경우엔 큰 차이가 아니지만,
        매일 출퇴근에 쓴다면 Tag가 훨씬 경제적이다.
      </p>

      <h2 style={AS.h2}>렌터카를 탔다면 이건 꼭 확인해야 한다</h2>

      <p style={AS.p}>
        렌터카 이용자들이 가장 많이 실수하는 부분이 여기다. 차를 빌리기 전에 세 가지를
        반드시 확인해야 한다.
      </p>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>렌터카 톨 이용 시 주의사항</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>
            <strong>대부분의 렌터카에는 이미 Tag가 설치되어 있다.</strong> Hertz, Avis, Budget,
            Europcar 등 주요 업체들은 차량에 Linkt 또는 자체 Tag를 기본으로 탑재한다.
            유료도로를 지나가면 업체 계정으로 청구되고, 업체는 실제 요금에 하루 $3.30~$5.50 수준의
            관리 수수료를 더해 청구한다. 요금은 계약서에 명시되어 있다.
          </li>
          <li style={AS.tipItem}>
            <strong>개인 Tag를 렌터카에 가져가면 이중 청구될 수 있다.</strong> 거틀리 센서는
            앞유리의 Tag와 번호판을 동시에 감지한다. 렌터카의 Tag와 내 개인 Tag가 둘 다 반응하면
            같은 구간을 두 번 결제하는 일이 생긴다. 렌터카에 탈 때는 개인 Tag를 앞유리 근처에
            두지 않는 것이 안전하다.
          </li>
          <li style={AS.tipItem}>
            <strong>Tag가 없는 렌터카라면 내가 직접 Pass를 등록해야 한다.</strong> 렌터카 번호판으로
            Linkt Pass를 직접 등록하지 않으면, 미납 고지서가 렌터카 업체로 발송되고 업체는
            톨 금액에 최소 $30 이상의 추가 수수료를 붙여 청구한다.
          </li>
        </ul>
      </div>

      <h2 style={AS.h2}>안 내면 얼마나 커지나</h2>

      <p style={AS.p}>
        미납 톨은 시간이 지날수록 복리처럼 불어난다. 단계별로 금액이 쌓이는 구조다.
      </p>

      <table style={AS.table}>
        <thead>
          <tr>
            <th style={AS.th}>단계</th>
            <th style={AS.th}>기간</th>
            <th style={AS.th}>추가 비용</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={AS.td}>고지서 발송</td>
            <td style={AS.td}>1일~14일</td>
            <td style={AS.td}>원래 요금 + 영상 매칭 수수료</td>
          </tr>
          <tr>
            <td style={AS.td}>관리 수수료 추가</td>
            <td style={AS.td}>15일~35일</td>
            <td style={AS.td}>관리 수수료 별도 가산</td>
          </tr>
          <tr>
            <td style={AS.td}>집행 수수료 추가</td>
            <td style={AS.td}>36일 이후</td>
            <td style={AS.td}>집행 수수료 추가, 총액 크게 증가</td>
          </tr>
          <tr>
            <td style={AS.td}>채권추심 또는 등록 정지</td>
            <td style={AS.td}>장기 미납</td>
            <td style={AS.td}>Revenue NSW 이관, 차량 등록 갱신 불가 가능</td>
          </tr>
        </tbody>
      </table>

      <p style={AS.p}>
        $6짜리 톨 하나가 방치되면 수십 달러의 채무로 바뀌는 구조다. Revenue NSW는 미납
        톨이 있는 차량의 등록 갱신을 막을 수 있는 권한을 가진다. 이민 초기에 차량 등록 주소가
        현재 거주지와 다른 경우, 고지서 자체를 받지 못하고 문제가 커지는 경우도 있다.
      </p>

      <h2 style={AS.h2}>2026년 7월부터 달라진 것</h2>

      <p style={AS.p}>
        2026년 7월부터 Transurban과 NSW 정부는 종이 고지서 발송을 이메일과 SMS 디지털
        알림으로 전환하기 시작했다. 계정이나 차량 등록 정보에 현재 이메일이나 호주 휴대폰
        번호가 등록되어 있다면, 고지서를 우편보다 빨리 받게 된다.
      </p>

      <p style={AS.p}>
        호주에 새로 도착해 주소가 자주 바뀌는 시기라면 이 부분이 특히 중요하다. 연락처 정보가
        최신 상태인지 Service NSW 계정이나 Linkt 계정에서 미리 확인해두는 것이 유리하다.
      </p>

      <div style={AS.callout}>
        <div style={AS.calloutTitle}>NSW 통근 운전자라면 추가로 알아두면 좋은 것</div>
        <p style={AS.calloutText}>
          2026년부터 NSW에서는 주간 톨 한도 상한제와 등록비 할인 제도가 시행되고 있다.
          이 글에서 다룬 계정 등록과는 별개의 주제다.{' '}
          <Link href="/news/nsw-toll-cap-rego-discount-2026-ko" style={{ color: '#CCDA47', textDecoration: 'underline', fontWeight: 600 }}>
            NSW 톨 한도 및 등록비 할인 기사에서 전체 내용을 확인할 수 있다.
          </Link>
        </p>
      </div>

      <h2 style={AS.h2}>처음 시작하는 사람을 위한 정리</h2>

      <div style={AS.tipBox}>
        <div style={AS.tipTitle}>상황별 빠른 가이드</div>
        <ul style={AS.tipList}>
          <li style={AS.tipItem}>
            <strong>렌터카를 탄다면:</strong> 인수 시 Tag 장착 여부와 하루 관리 수수료를 확인한다.
            Tag가 없는 차라면 linkt.com.au에서 해당 번호판으로 Pass를 먼저 등록한다.
          </li>
          <li style={AS.tipItem}>
            <strong>내 차, 가끔 이용한다면:</strong> Linkt Pass를 등록한다. 기기 없이 신용카드와
            번호판으로 계정을 만들 수 있다.
          </li>
          <li style={AS.tipItem}>
            <strong>매일 출퇴근에 유료도로를 쓴다면:</strong> Linkt Tag를 온라인에서 신청한다.
            며칠 안에 우편으로 배송되며 앞유리 안쪽에 부착한다.
          </li>
          <li style={AS.tipItem}>
            <strong>이미 미납이 있을 것 같다면:</strong> revenue.nsw.gov.au에서 번호판으로
            미납 내역을 조회한다. 빨리 확인할수록 추가 비용을 줄일 수 있다.
          </li>
        </ul>
      </div>

      <hr style={AS.divider} />

      <p style={AS.p}>
        알고 나면 별게 아닌 시스템이다. 하지만 모르고 지나쳤을 때의 결과는 생각보다 귀찮고
        비싸다. 호주에 도착했거나 유료도로 이용이 처음인 사람이라면, 이 글 하나로 시작은
        제대로 할 수 있다.
      </p>

      <div style={AS.disclaimer}>
        <p style={AS.disclaimerText}>
          이 글의 요금, 수수료, 처리 기간 정보는 Linkt, Transurban, Revenue NSW의 공개 자료를
          바탕으로 작성됐으며 참고 목적입니다. 렌터카 수수료는 업체와 계약 조건에 따라 다를 수
          있습니다. 정확한 내용은 이용 전 해당 기관 공식 채널에서 직접 확인하시기 바랍니다.
          이 글은 법적 또는 재정적 조언이 아닙니다.
        </p>
      </div>

      <div style={{ borderLeft: "3px solid #CCDA47", padding: "10px 16px", background: "white", borderRadius: "6px", marginBottom: "10px" }}>
        <div style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.7px", textTransform: "uppercase" as const, marginBottom: "4px" }}>도로법규</div>
        <Link href="/news/australia-new-road-rules-july-2026-ko" style={{ fontSize: "14px", fontWeight: 600, color: "#1A1A1A", textDecoration: "none", lineHeight: 1.4, display: "block" }}>
          2026년 7월 호주 신규 도로법규 총정리. 주별 변경사항
        </Link>
      </div>

      <div style={AS.ctaBox}>
        <div style={AS.ctaTitle}>호주에서 차를 알아보고 계신가요?</div>
        <p style={AS.ctaDesc}>딜러십 데모카 및 클리어런스 재고를 한눈에</p>
        <Link href="/listings" style={AS.ctaBtn}>매물 보러 가기 →</Link>
      </div>
    </>
  );
}
