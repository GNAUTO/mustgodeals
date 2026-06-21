import Link from "next/link";

const posts = [
  {
    slug: "best-time-to-buy-car-australia",
    title: "Best time to buy a car in Australia (and save thousands)",
    excerpt: "Most Australians don't know that the timing of your car purchase can save you $3,000–$10,000. Here's exactly when to buy.",
    category: "Buyer Guide",
    readTime: "5 min read",
    date: "June 2026",
    lang: "EN",
  },
  {
    slug: "end-of-month-car-deals-explained",
    title: "End of month car deals explained — insider knowledge from dealerships",
    excerpt: "Dealerships face huge pressure from manufacturers at month end. Here's how to use that pressure to your advantage.",
    category: "Insider Guide",
    readTime: "6 min read",
    date: "June 2026",
    lang: "EN",
  },
  {
    slug: "demo-car-vs-used-car-australia",
    title: "Demo car vs used car in Australia — what's the real difference?",
    excerpt: "Demo cars are often the best value in the market. But there are things you need to check before buying one.",
    category: "Buyer Guide",
    readTime: "4 min read",
    date: "June 2026",
    lang: "EN",
  },
  {
    slug: "how-to-negotiate-car-dealership",
    title: "How to negotiate at a car dealership in Australia (scripts included)",
    excerpt: "Most people leave money on the table when buying a car. These exact phrases will help you get a better deal every time.",
    category: "Negotiation",
    readTime: "7 min read",
    date: "June 2026",
    lang: "EN",
  },
  {
    slug: "ho-ju-jungo-cha-gide",
    title: "호주에서 중고차 구매 완벽 가이드 — 딜러 협상 팁",
    excerpt: "호주에서 중고차를 살 때 꼭 알아야 할 것들. 딜러십 협상부터 검사 체크리스트까지 완벽 정리.",
    category: "한국어 가이드",
    readTime: "6분 읽기",
    date: "2026년 6월",
    lang: "KO",
  },
  {
    slug: "australia-car-buying-guide-chinese",
    title: "澳大利亚买车完整指南 — 如何在月底抄底",
    excerpt: "澳大利亚经销商在月底面临巨大压力，这正是买家的机会。了解如何利用这一时机获得最优惠的价格。",
    category: "中文指南",
    readTime: "5分钟阅读",
    date: "2026年6月",
    lang: "ZH",
  },
];

const langs = ["EN", "한국어", "中文", "हिन्दी"];

export default function Home() {
  return (
    <div style={{ minHeight: "100vh", background: "#F5F5F0" }}>
      <nav style={{ background: "#1A1A1A", padding: "0 2rem", height: "60px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ fontSize: "20px", fontWeight: 500, color: "white", letterSpacing: "-0.5px" }}>
            must<span style={{ color: "#CCDA47" }}>go</span>
          </span>
          <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.35)", letterSpacing: "2px", marginTop: "2px" }}>DEALS</span>
        </div>
        <div style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}>
          <Link href="/blog" style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", textDecoration: "none" }}>Blog</Link>
          <Link href="/listings" style={{ color: "rgba(255,255,255,0.65)", fontSize: "13px", textDecoration: "none" }}>Listings</Link>
          <Link href="/alerts" style={{ background: "#CCDA47", color: "#1A1A1A", padding: "6px 14px", borderRadius: "6px", fontSize: "13px", fontWeight: 500, textDecoration: "none" }}>Get Alerts</Link>
        </div>
      </nav>

      <div style={{ background: "#1A1A1A", padding: "4px 2rem", display: "flex", gap: "1rem" }}>
        {langs.map((l) => (
          <span key={l} style={{ fontSize: "11px", color: l === "EN" ? "#CCDA47" : "rgba(255,255,255,0.35)", cursor: "pointer", fontWeight: l === "EN" ? 500 : 400 }}>{l}</span>
        ))}
      </div>

      <div style={{ background: "#1A1A1A", padding: "3rem 2rem", textAlign: "center" }}>
        <div style={{ display: "inline-block", background: "rgba(204,218,71,0.15)", border: "1px solid #CCDA47", color: "#CCDA47", fontSize: "11px", padding: "4px 14px", borderRadius: "20px", marginBottom: "1rem", letterSpacing: "0.5px" }}>
          JUNE 2026 — MONTH END CLEARANCE
        </div>
        <h1 style={{ color: "white", fontSize: "46px", fontWeight: 500, lineHeight: 1.3, marginBottom: "0.75rem", letterSpacing: "-0.5px" }}>
          Cars dealers <span style={{ color: "#CCDA47" }}>must sell</span><br />before month end
        </h1>
        <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "17px", marginBottom: "2rem", maxWidth: "480px", margin: "0 auto 2rem" }}>
          Insider guides, negotiation tips, and clearance deals — updated every week.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
          <Link href="/blog" style={{ background: "#CCDA47", color: "#1A1A1A", padding: "12px 28px", borderRadius: "8px", fontSize: "14px", fontWeight: 500, textDecoration: "none" }}>
            Read buying guides
          </Link>
          <Link href="/alerts" style={{ background: "transparent", color: "white", padding: "12px 28px", borderRadius: "8px", fontSize: "14px", border: "1px solid rgba(255,255,255,0.2)", textDecoration: "none" }}>
            Get deal alerts
          </Link>
        </div>
      </div>

      <div style={{ background: "white", borderTop: "3px solid #CCDA47", padding: "10px 2rem", textAlign: "center", fontSize: "12px", color: "#888" }}>
        <span style={{ background: "#CCDA47", color: "#1A1A1A", fontSize: "9px", fontWeight: 500, padding: "2px 6px", borderRadius: "3px", marginRight: "8px", letterSpacing: "0.5px" }}>AD</span>
        Google AdSense — Advertisement
      </div>

      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "3rem 2rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h2 style={{ fontSize: "26px", fontWeight: 500, color: "#1A1A1A" }}>Latest guides</h2>
          <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>All articles →</Link>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "16px" }}>
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: "none" }}>
              <div style={{ background: "white", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", padding: "1.25rem", height: "100%", transition: "border-color 0.2s", cursor: "pointer" }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.75rem" }}>
                  <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 500, letterSpacing: "0.5px", textTransform: "uppercase" }}>{post.category}</span>
                  <span style={{ fontSize: "10px", color: "#999", background: "#F5F5F0", padding: "2px 8px", borderRadius: "10px" }}>{post.lang}</span>
                </div>
                <h3 style={{ fontSize: "16px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4, marginBottom: "0.6rem" }}>{post.title}</h3>
                <p style={{ fontSize: "14px", color: "#777", lineHeight: 1.6, marginBottom: "1rem" }}>{post.excerpt}</p>
                <div style={{ fontSize: "11px", color: "#aaa" }}>{post.readTime} · {post.date}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div style={{ background: "#1A1A1A", padding: "2.5rem 2rem", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1.5rem", maxWidth: "1100px", margin: "0 auto" }}>
        <div>
          <h3 style={{ color: "white", fontSize: "16px", fontWeight: 500, marginBottom: "4px" }}>Get alerts before deals are gone</h3>
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px" }}>New clearance vehicles every week — be first to know</p>
        </div>
        <div style={{ display: "flex", gap: "8px" }}>
          <input placeholder="your@email.com" style={{ padding: "10px 14px", borderRadius: "6px", border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)", color: "white", fontSize: "13px", width: "220px" }} />
          <button style={{ background: "#CCDA47", color: "#1A1A1A", border: "none", padding: "10px 18px", borderRadius: "6px", fontSize: "13px", fontWeight: 500, cursor: "pointer" }}>Get alerts</button>
        </div>
      </div>

      <footer style={{ background: "#111", padding: "1.25rem 2rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
        <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px" }}>© 2026 MustGoDeals.com.au — Sydney, Australia</span>
        <div style={{ display: "flex", gap: "1.5rem" }}>
          {["About", "For Dealers", "Privacy", "Contact"].map((l) => (
            <Link key={l} href={`/${l.toLowerCase().replace(" ", "-")}`} style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", textDecoration: "none" }}>{l}</Link>
          ))}
        </div>
      </footer>
    </div>
  );
}
