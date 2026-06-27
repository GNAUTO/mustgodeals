import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlogLangTabs from "../BlogLangTabs";
import { NEWS_ITEMS, BLOG_POSTS, type Lang } from "../../data/posts";

const BLOG_SLUG_PAIRS: Record<string, string> = {
  "end-of-month-car-deals-explained": "wolmal-jadongcha-dil-jongni",
  "wolmal-jadongcha-dil-jongni": "end-of-month-car-deals-explained",
};

function getSiblingSlug(slug: string, lang: Lang, type: "news" | "blog"): string | null {
  if (type === "blog" && BLOG_SLUG_PAIRS[slug]) return BLOG_SLUG_PAIRS[slug];
  if (lang === "EN") return `${slug}-ko`;
  if (lang === "KO" && slug.endsWith("-ko")) return slug.slice(0, -3);
  return null;
}

interface Props {
  type: "news" | "blog";
  slug: string;
  title: string;
  category: string;
  date: string;
  author: string;
  lang: Lang;
  children: React.ReactNode;
}

export default function PostDetail({ type, slug, title, category, date, author, lang, children }: Props) {
  const base = type === "news" ? "/news" : "/blog";
  const siblingSlug = getSiblingSlug(slug, lang, type);
  const langLinks = {
    [lang]: `${base}/${slug}`,
    ...(siblingSlug ? { [lang === "EN" ? "KO" : "EN"]: `${base}/${siblingSlug}` } : {}),
  };

  const relatedNews = NEWS_ITEMS.filter((n) => n.slug !== slug).slice(0, 3);
  const latestBlogs = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

  const breadcrumbSection = type === "news" ? "News" : "Blog";
  const breadcrumbLabel = title.split("—")[0].trim().split(":")[0].trim();

  const isKo = lang === "KO";

  const H = {
    page:       { minHeight: "100vh", background: "#F5F5F0" } as React.CSSProperties,
    hero:       { background: "#1A1A1A", padding: "3rem 2rem 2.5rem" } as React.CSSProperties,
    heroInner:  { maxWidth: "780px", margin: "0 auto" } as React.CSSProperties,
    badge: {
      display: "inline-flex", alignItems: "center", gap: "6px",
      background: "rgba(204,218,71,0.15)", border: "1px solid #CCDA47",
      color: "#CCDA47", fontSize: "11px", padding: "4px 14px",
      borderRadius: "20px", marginBottom: "1.25rem", letterSpacing: "0.5px",
    } as React.CSSProperties,
    h1: {
      color: "white", fontSize: "38px", fontWeight: 500, lineHeight: 1.25,
      marginBottom: "1rem", letterSpacing: "-0.5px",
    } as React.CSSProperties,
    meta: {
      display: "flex", gap: "1.25rem", alignItems: "center",
      flexWrap: "wrap" as const, marginTop: "1rem",
    } as React.CSSProperties,
    metaItem:   { fontSize: "12px", color: "rgba(255,255,255,0.4)" } as React.CSSProperties,
    article:    { maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" } as React.CSSProperties,
    body:       { fontSize: "16px", lineHeight: 1.8, color: "#2A2A2A" } as React.CSSProperties,
    breadcrumb: {
      display: "flex", gap: "6px", alignItems: "center",
      fontSize: "12px", color: "rgba(255,255,255,0.35)", marginBottom: "1.25rem",
    } as React.CSSProperties,
    breadcrumbLink: { color: "rgba(255,255,255,0.35)", textDecoration: "none" } as React.CSSProperties,
  };

  return (
    <div style={H.page}>
      <Navbar />
      <BlogLangTabs current={lang} links={langLinks} />

      {/* Hero */}
      <div style={H.hero}>
        <div style={H.heroInner}>
          <div style={H.breadcrumb}>
            <Link href="/" style={H.breadcrumbLink}>{isKo ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={base} style={H.breadcrumbLink}>{isKo ? (type === "news" ? "뉴스" : "블로그") : breadcrumbSection}</Link>
            <span>›</span>
            <span style={{ color: "rgba(255,255,255,0.55)" }}>{breadcrumbLabel}</span>
          </div>
          <div style={H.badge}>
            <span>{category}</span>
            <span style={{ opacity: 0.5 }}>·</span>
            <span>{date}</span>
          </div>
          <h1 style={H.h1}>{title}</h1>
          <div style={H.meta}>
            <span style={H.metaItem}>{author}</span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={H.article}>
        <div style={H.body}>
          {children}
        </div>
      </article>

      {/* Related News */}
      <div style={{ background: "white", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>
              {isKo ? "관련 뉴스" : "Related News"}
            </div>
            <Link href="/news" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>
              {isKo ? "전체 뉴스 →" : "All news →"}
            </Link>
          </div>
          <div className="section-grid">
            {relatedNews.map((item) => (
              <Link key={item.slug} href={`/news/${item.slug}`} className="news-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "#F5F5F0", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", overflow: "hidden" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt={item.title} style={{ width: "100%", height: "140px", objectFit: "cover", display: "block" }} />
                  <div style={{ padding: "1rem" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.4rem" }}>
                      <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.8px", background: "rgba(204,218,71,0.12)", padding: "2px 8px", borderRadius: "10px" }}>
                        {item.category}
                      </span>
                      <span style={{ fontSize: "11px", color: "#999" }}>{item.date}</span>
                    </div>
                    <div style={{ fontSize: "13px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4 }}>{item.title}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Latest Articles */}
      <div style={{ background: "#ECEEE7", padding: "2.5rem 2rem" }}>
        <div style={{ maxWidth: "780px", margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.25rem" }}>
            <div style={{ fontSize: "18px", fontWeight: 500, color: "#1A1A1A" }}>
              {isKo ? "최신 아티클" : "Latest Articles"}
            </div>
            <Link href="/blog" style={{ fontSize: "13px", color: "#8A9A10", textDecoration: "none", fontWeight: 500 }}>
              {isKo ? "전체 아티클 →" : "All articles →"}
            </Link>
          </div>
          <div className="section-grid">
            {latestBlogs.map((item) => (
              <Link key={item.slug} href={`/blog/${item.slug}`} className="news-card" style={{ textDecoration: "none", display: "block" }}>
                <div style={{ background: "white", borderRadius: "12px", border: "0.5px solid rgba(0,0,0,0.08)", padding: "1.25rem" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "0.5rem" }}>
                    <span style={{ fontSize: "10px", color: "#8A9A10", fontWeight: 600, letterSpacing: "0.5px", textTransform: "uppercase" }}>
                      {item.category}
                    </span>
                    <span style={{ fontSize: "10px", color: "#999", background: "#F5F5F0", padding: "2px 8px", borderRadius: "10px" }}>
                      {item.lang}
                    </span>
                  </div>
                  <div style={{ fontSize: "15px", fontWeight: 500, color: "#1A1A1A", lineHeight: 1.4, marginBottom: "0.5rem" }}>{item.title}</div>
                  <div style={{ fontSize: "13px", color: "#777", lineHeight: 1.55, marginBottom: "0.75rem" }}>{item.excerpt}</div>
                  <div style={{ fontSize: "11px", color: "#aaa" }}>{item.readTime} · {item.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
