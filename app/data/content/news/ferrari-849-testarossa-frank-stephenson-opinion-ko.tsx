import { AS } from '../../../components/posts/article-styles';
import Image from "next/image";

const IMGS = [
  "https://www.topgear.com/sites/default/files/2026/05/Ferrari%20849%20Testarossa.jpg?w=976&h=549",
  "https://www.topgear.com/sites/default/files/styles/media_embed/public/2026/05/Ferrari%20849%20Testarossa%20%283%29.jpg",
  "https://www.topgear.com/sites/default/files/styles/media_embed/public/2026/05/Ferrari%20849%20Testarossa%20%282%29.jpg",
  "https://www.topgear.com/sites/default/files/styles/media_embed/public/2026/05/Ferrari%20849%20Testarossa%20%284%29.jpg",
  "https://www.topgear.com/sites/default/files/styles/media_embed/public/2026/05/Ferrari%20849%20Testarossa%20%285%29.jpg",
];

function Img({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={AS.imgWrap}>
      <Image
        src={src}
        alt={alt}
        width={1200}
        height={675}
        className="article-img"
        style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
      />
      <p style={AS.imgCaption}>Image: Ferrari Media</p>
    </div>
  );
}

export default function Ferrari849TestarosaFrankStephensonOpinionKoContent() {
  return (
    <>

          {/* Hero image */}
          <div style={AS.imgWrap}>
            <Image
              src={IMGS[0]}
              alt="2026 Ferrari 849 Testarossa design review"
              width={1200}
              height={675}
              className="article-img"
              style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center", borderRadius: "8px", display: "block" }}
            />
            <p style={AS.imgCaption}>Image: Ferrari Media</p>
          </div>

          <p style={AS.p}>
            페라리가 가장 상징적인 모델 이름 중 하나를 부활시킬 때 따라오는 압박은 상당하다.{" "}
            <span style={AS.highlight}>페라리 849 테스타로사</span>는 바로 그 유산을 물려받아야
            했고, 페라리{" "}
            <span style={AS.highlight}>디자인</span>을 누구보다 잘 아는 인물{" "}
            <span style={AS.highlight}>프랭크 스티븐슨</span>에 따르면 그 기대에 부응하지 못했다.
            오리지널은 1980년대를 정의한 차 중 하나였다. 시각적으로 너무도 독보적이어서 한
            시대의 과잉과 열망을 상징하는 문화적 아이콘이 됐다.
          </p>

          <h2 style={AS.h2}>오리지널의 무게</h2>

          <p style={AS.p}>
            프랭크 스티븐슨은 페라리와 마세라티에서 오랜 시간을 보낸 뒤 맥라렌과 MINI의
            디자인 책임자를 역임했다. 지난 30여 년간 가장 호평받은 자동차 디자인 중 상당수가
            그의 손에서 나왔다. 그 배경이 그의 849 평가를 그냥 지나치기 어렵게 만든다.
          </p>

          <p style={AS.p}>
            그의 시각은 명확하다. 849의 스타일링은 오리지널의 극적인 인상을 좇으면서도
            그것을 뒷받침할 기계적 근거가 없다. 그의 표현대로 &ldquo;채워야 할 큰 신발을
            채우지 못한&rdquo; 차다.
          </p>

          <Img src={IMGS[1]} alt="2026 Ferrari 849 Testarossa design review side profile" />

          <h2 style={AS.h2}>첫 테스타로사가 달랐던 이유</h2>

          <p style={AS.p}>
            스티븐슨의 핵심 주장은 이렇다. 오리지널 테스타로사의 디자인은 임의적이지 않았다.
            넓은 사이드 스트레이크, 두툼한 리어 펜더, 납작한 측면 실루엣, 이 모든 것은
            플랫 12기통 엔진을 식히기 위한 대형 사이드 라디에이터 때문에 생긴 형태였다.
            디자인이 엔지니어링을 따른 것이다. 바로 그 형태와 기능의 관계가 오리지널에
            시각적 권위를 부여했다.
          </p>

          <Img src={IMGS[2]} alt="2026 Ferrari 849 Testarossa design review front" />

          <div style={AS.callout}>
            <div style={AS.calloutTitle}>페라리 849 테스타로사 핵심 제원</div>
            <p style={AS.calloutText}>
              엔진: 6.5리터 자연흡기 V12.
              출력: 약 830마력.
              오리지널 1984년형은 4.9리터 플랫 12기통, 390마력.
            </p>
          </div>

          <h2 style={AS.h2}>스티븐슨이 실제로 한 말</h2>

          <p style={AS.p}>
            신형 차는 기술적으로 인상적이다. 약 830마력을 내는 6.5리터 V12, 현대적인 섀시,
            1984년 오리지널이 출시됐을 때는 불가능해 보였을 퍼포먼스 수치까지 갖췄다. 하지만
            스티븐슨의 요점은 퍼포먼스가 아니다. 디자인이 이 차가 무엇이고 어떻게 작동하는지에
            대해 솔직한 이야기를 하고 있느냐의 문제다.
          </p>

          <p style={AS.p}>
            스티븐슨은 자신의 작업에 대한 비판도 서슴지 않는 인물이고, 그의 발언은 대개 진심
            어린 확신에서 나온다. 그는 849가 오리지널의 시각적 언어를 빌려왔지만 그것을 만들어낸
            엔지니어링 논리는 없다고 주장한다. 그 결과 드라마가 기능에서 나온 것이 아니라
            장식으로 보인다는 것이다.
          </p>

          <Img src={IMGS[3]} alt="2026 Ferrari 849 Testarossa design review rear" />

          <h2 style={AS.h2}>이름이 중요한가</h2>

          <p style={AS.p}>
            그의 평가에 동의하든 동의하지 않든, 이 논쟁은 이 특정 차를 넘어서는 질문을 던진다.
            제조사가 전설적인 이름을 부활시킬 때 오리지널에 무엇을 빚지고 있는가?
          </p>

          <p style={AS.p}>
            어떤 구매자에게 849는 원하는 것 그 자체일 것이다. 유명한 배지와 경이로운 엔진을
            갖춘 현대적인 페라리. 하지만 또 다른 이들에게 테스타로사라는 이름은 신형이 도달하지
            못한 무게를 지니고 있다. 스티븐슨은 단호히 후자의 입장이다.
          </p>

          <Img src={IMGS[4]} alt="2026 Ferrari 849 Testarossa design review interior" />

          {/* Source */}
          <div style={AS.sourceBox}>
            <span style={AS.sourceLabel}>출처</span>
            <a
              href="https://www.topgear.com/car-news/supercars/ferrari-849-testarossa"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}
            >
              Top Gear ↗
            </a>
          </div>

          {/* CTA */}
          <div style={AS.ctaBox}>
            <div style={AS.ctaTitle}>신차 딜 알림 받기</div>
            <p style={AS.ctaDesc}>재고 정리 차량이 나오면 가장 먼저 알려드립니다, 매주 업데이트</p>
            <a href="/coming-soon" style={AS.ctaBtn}>무료 알림 신청 →</a>
          </div>

    </>
  );
}
