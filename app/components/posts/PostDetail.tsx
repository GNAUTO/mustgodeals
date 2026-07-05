import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import BlogLangTabs from "../BlogLangTabs";
import { NEWS_ITEMS, BLOG_POSTS, type Lang } from "../../data/posts";
import RelatedCarousel from "./RelatedCarousel";

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

  const relatedNews = NEWS_ITEMS.filter((n) => n.slug !== slug && n.lang === lang);
  const latestBlogs = BLOG_POSTS.filter((p) => p.slug !== slug && p.lang === lang);

  const breadcrumbSection = type === "news" ? "News" : "Blog";
  const breadcrumbLabel = title.split("—")[0].trim().split(":")[0].trim();

  const isKo = lang === "KO";

  const H = {
    page:       { minHeight: "100vh", background: "#FAFAFA" } as React.CSSProperties,
    hero:       { background: "#FAFAFA", padding: "2.5rem 2rem 2rem", borderBottom: "1px solid rgba(0,0,0,0.06)" } as React.CSSProperties,
    heroInner:  { maxWidth: "780px", margin: "0 auto" } as React.CSSProperties,
    badge: {
      display: "inline-flex", alignItems: "center", gap: "6px",
      background: "#CCDA47", color: "#1A1A1A",
      fontSize: "11px", padding: "4px 14px",
      borderRadius: "20px", marginBottom: "1.25rem", letterSpacing: "0.5px",
      fontWeight: 600,
    } as React.CSSProperties,
    h1: {
      color: "#1A1A1A", fontSize: "38px", fontWeight: 500, lineHeight: 1.25,
      marginBottom: "1rem", letterSpacing: "-0.5px",
    } as React.CSSProperties,
    meta: {
      display: "flex", gap: "1.25rem", alignItems: "center",
      flexWrap: "wrap" as const, marginTop: "1rem",
    } as React.CSSProperties,
    metaItem:   { fontSize: "12px", color: "#6B6B6B" } as React.CSSProperties,
    article:    { maxWidth: "780px", margin: "0 auto", padding: "3rem 2rem 4rem" } as React.CSSProperties,
    body:       { fontSize: "16px", lineHeight: 1.8, color: "#2A2A2A" } as React.CSSProperties,
    breadcrumb: {
      display: "flex", gap: "6px", alignItems: "center",
      fontSize: "12px", color: "rgba(0,0,0,0.35)", marginBottom: "1.25rem",
    } as React.CSSProperties,
    breadcrumbLink: { color: "rgba(0,0,0,0.35)", textDecoration: "none" } as React.CSSProperties,
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
            <span style={{ color: "rgba(0,0,0,0.55)" }}>{breadcrumbLabel}</span>
          </div>
          <div style={H.badge}>
            <span>{category}</span>
            <span style={{ opacity: 0.6 }}>·</span>
            <span style={{ fontWeight: 400 }}>{date}</span>
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
      {relatedNews.length > 0 && (
        <div style={{ background: "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "2.5rem 2rem" }}>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <RelatedCarousel
              items={relatedNews.map(n => ({ slug: n.slug, title: n.title, category: n.category, date: n.date, image: n.image }))}
              base="/news"
              title={isKo ? "관련 뉴스" : "Related News"}
              allLink="/news"
              allLinkText={isKo ? "전체 뉴스 →" : "All news →"}
              cardStyle="news"
            />
          </div>
        </div>
      )}

      {/* Latest Articles */}
      {latestBlogs.length > 0 && (
        <div style={{ background: "#FAFAFA", borderTop: "1px solid rgba(0,0,0,0.06)", padding: "2.5rem 2rem" }}>
          <div style={{ maxWidth: "780px", margin: "0 auto" }}>
            <RelatedCarousel
              items={latestBlogs.map(p => ({ slug: p.slug, title: p.title, category: p.category, date: p.date, excerpt: p.excerpt, readTime: p.readTime }))}
              base="/blog"
              title={isKo ? "관련 아티클" : "Related Articles"}
              allLink="/blog"
              allLinkText={isKo ? "전체 아티클 →" : "All articles →"}
              cardStyle="blog"
            />
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
