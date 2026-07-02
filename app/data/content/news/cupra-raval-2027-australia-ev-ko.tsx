import Link from 'next/link';
import { AS } from '../../../components/posts/article-styles';

const IMGS = [
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/0aa62438-5756-5c5b-a0d9-3511a7850000",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/9b00a424-2d0d-5340-a2d7-b6cf5cb50000",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/3498a33e-3f51-567d-b1d9-6f0dd2450000",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/4549b3cd-2351-57ad-89b9-a9858a350000",
  "https://media.drive.com.au/obj/tx_q:50,rs:auto:1920:1080:1/driveau/upload/cms/uploads/b84ba8c4-efb3-56c1-9a32-5f2551450000",
];

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={AS.imgWrap}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="article-img"
        style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
      />
      <p style={AS.imgCaption}>Image: Cupra Media</p>
    </div>
  );
}

export default function CupraRaval2027AustraliaEvKoContent() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={IMGS[0]}
              alt="2027 Cupra Raval electric hatchback Australia"
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Cupra Media</p>
          </div>

          <p style={AS.p}>
            쿠프라가{" "}
            <span style={AS.highlight}>라발 전기 해치백</span>의{" "}
            <span style={AS.highlight}>호주</span> 출시를 공식 확정했다. 유럽에서 우측 핸들
            생산이 시작된 이후 <span style={AS.highlight}>2027년</span> 중 현지 출시가
            예상된다. 라발은 쿠프라가 약 10년 전 세아트에서 분리 독립한 이후 처음으로
            선보이는 경형 도시형 차량이자, 브랜드 역사상 가장 작은 전기차다.
          </p>

          <h2 style={AS.h2}>도시형 전기 해치백, 핫 해치의 DNA를 품다</h2>

          <p style={AS.p}>
            전장 <span style={AS.highlight}>4046mm</span>, 전폭 1784mm로 BYD Atto 1, 폭스바겐
            폴로와 비슷한 크기다. 호주 시장에서는 BYD 돌핀, GAC Aion UT와 경쟁하게 되며,
            단종 예정인 가솔린 폴로 GTI를 대신해 폭스바겐 그룹의 도시형 퍼포먼스 모델
            역할을 맡게 될 전망이다.
          </p>

          <Img src={IMGS[1]} alt="2027 Cupra Raval electric hatchback Australia 외관" />

          <h2 style={AS.h2}>호주 예상 가격 $40,000 이하</h2>

          <p style={AS.p}>
            호주 판매 가격은 아직 확정되지 않았지만, 쿠프라 호주 제품 담당 제프 샤퍼는
            출시 자체는 확정됐다고 밝혔다. 영국 가격을 기준으로 추산하면 온로드 비용 제외{" "}
            <span style={AS.highlight}>$40,000 이하</span>에서 시작해 퍼포먼스 VZ 모델은
            $40,000대 후반까지 올라갈 것으로 예상된다.
          </p>

          <Img src={IMGS[2]} alt="2027 Cupra Raval electric hatchback Australia 실내" />

          <h2 style={AS.h2}>배터리 두 가지, 최대 440km 주행</h2>

          <p style={AS.p}>
            라발은 폭스바겐 ID. 폴로 EV와 플랫폼을 공유하며 두 가지 배터리 옵션으로
            제공된다. 엔트리 모델은{" "}
            <span style={AS.highlight}>37kWh LFP 배터리</span>에 85kW 또는 100kW 모터를
            조합해 WLTP 기준 약 300km의 주행거리를 제공한다. 상위 옵션은{" "}
            <span style={AS.highlight}>52kWh NMC 배터리</span>에 155kW 모터를 탑재하며,
            플래그십 VZ 등급에서는 165kW까지 출력이 올라가고 WLTP 기준 최대 440km 주행이
            가능하다.
          </p>

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>쿠프라 라발 배터리 및 주행거리</div>
            <p style={AS.calloutText}>
              엔트리: 37kWh LFP 배터리, 85kW 또는 100kW 모터, WLTP 약 300km.
              상위: 52kWh NMC 배터리, 155kW (VZ 165kW), WLTP 최대 440km.
              DC 급속 충전: 130kW, 10~80% 충전 24분.
            </p>
          </div>

          <Img src={IMGS[3]} alt="2027 Cupra Raval electric hatchback Australia VZ 모델" />

          <h2 style={AS.h2}>어댑티브 서스펜션 탑재 VZ 퍼포먼스 등급</h2>

          <p style={AS.p}>
            퍼포먼스 지향의 VZ와 VZ 익스트림 등급에는{" "}
            <span style={AS.highlight}>어댑티브 서스펜션</span>과 전자식 LSD가 기본 적용되며,
            익스트림은 버킷 시트와 10kW 추가 출력을 더한다. 전 라인업에는 12.9인치
            인포테인먼트 터치스크린, 10.25인치 디지털 계기판, 합성 가죽 시트가 제공된다.
          </p>

          <hr style={AS.divider} />

          <h2 style={AS.h2}>호주 출시 일정은 언제?</h2>

          <p style={AS.p}>
            샤퍼는 유럽 내 강한 수요로 인해 정확한 호주 출시 일정을 못 박기가 어렵다고
            밝혔다. 우측 핸들 생산은 아직 시작되지 않았으며, 호주 사양과 가격, 출시
            시기는 연말에 가까워질수록 더 구체적인 정보가 공개될 예정이다. 현재로서는{" "}
            <span style={AS.highlight}>2027년</span> 출시가 가장 유력하다.
          </p>

          <Img src={IMGS[4]} alt="2027 Cupra Raval electric hatchback Australia 출시" />

          <p style={AS.p}>
            지금 바로 구매 가능한 EV 또는 데모카를 찾고 있다면?{" "}
            <Link href="/listings" style={{ color: "#1A1A1A", fontWeight: 600, textDecoration: "underline" }}>
              MustGoDeals 현재 매물 보기
            </Link>
          </p>

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>출처</span>
            <a
              href="https://www.drive.com.au/news/cupra-raval-australia-confirmed/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              Drive.com.au ↗
            </a>
          </div>

          {/* CTA */}
          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>신차 딜 알림 받기</div>
            <p style={AS.ctaDesc}>
              재고 정리 차량이 나오면 가장 먼저 알려드립니다, 매주 업데이트
            </p>
            <Link href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</Link>
          </div>

    </>
  );
}
