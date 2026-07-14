import Link from "next/link";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { BlogGridCard } from "./BlogCard";
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

  const thisPost = BLOG_POSTS.find((p) => p.slug === slug);
  const relatedSlugs = thisPost?.relatedSlugs ?? [];
  const readTime = thisPost?.readTime;
  const relatedPosts = relatedSlugs
    .map((s) => BLOG_POSTS.find((p) => p.slug === s))
    .filter(Boolean) as typeof BLOG_POSTS;

  const HUB_SLUG = lang === "KO" ? "buying-a-car-in-australia-guide-ko" : "buying-a-car-in-australia-guide";
  const isHubPage = slug === "buying-a-car-in-australia-guide" || slug === "buying-a-car-in-australia-guide-ko";
  const showHubLink = type === "blog" && !isHubPage;

  const usedSlugs = new Set([slug, ...relatedSlugs]);
  const fallbacks = BLOG_POSTS
    .filter((p) => p.lang === lang && !usedSlugs.has(p.slug))
    .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));
  const readNextPosts = [...relatedPosts, ...fallbacks].slice(0, 3);

  const relatedNews = NEWS_ITEMS.filter((n) => n.slug !== slug && n.lang === lang);

  const relatedBlogPosts = type === "news"
    ? BLOG_POSTS
        .filter((p) => p.lang === lang)
        .sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0))
        .slice(0, 3)
    : [];

  const breadcrumbSection = type === "news" ? "News" : "Blog";
  const breadcrumbLabel = title.split("—")[0].trim().split(":")[0].trim();

  const isKo = lang === "KO";

  const H = {
    page:      { minHeight: "100vh", background: "#FFFFFF" } as React.CSSProperties,
    hero:      { background: "#FFFFFF", padding: "2.25rem 2rem 2rem", borderBottom: "1px solid #EDECE5" } as React.CSSProperties,
    heroInner: { maxWidth: "660px", margin: "0 auto" } as React.CSSProperties,
    overline: {
      fontSize: "11px", fontWeight: 600, color: "#8A9922",
      letterSpacing: "1.5px", textTransform: "uppercase" as const,
      marginBottom: "1.125rem",
    } as React.CSSProperties,
    h1: {
      color: "#1A1A1A", fontSize: "36px", fontWeight: 500, lineHeight: 1.25,
      marginBottom: "1rem", letterSpacing: "-0.5px",
    } as React.CSSProperties,
    meta: {
      display: "flex", alignItems: "center",
      flexWrap: "wrap" as const,
    } as React.CSSProperties,
    metaItem: { fontSize: "12px", color: "#8F8F86" } as React.CSSProperties,
    article:   { maxWidth: "660px", margin: "0 auto", padding: "3rem 2rem 4rem" } as React.CSSProperties,
    body:      { fontSize: "16px", lineHeight: 1.85, color: "#3D3D38" } as React.CSSProperties,
    breadcrumb: {
      display: "flex", gap: "6px", alignItems: "center",
      fontSize: "12px", color: "#B4B2A9", marginBottom: "1.25rem",
    } as React.CSSProperties,
    breadcrumbLink: { color: "#B4B2A9", textDecoration: "none" } as React.CSSProperties,
  };

  return (
    <div style={H.page}>
      <Navbar langLinks={{ current: lang, links: langLinks }} />

      {/* Hero */}
      <div style={H.hero} className="article-page-hero">
        <div style={H.heroInner}>
          <div style={H.breadcrumb}>
            <Link href="/" style={H.breadcrumbLink}>{isKo ? "홈" : "Home"}</Link>
            <span>›</span>
            <Link href={base} style={H.breadcrumbLink}>{isKo ? (type === "news" ? "뉴스" : "블로그") : breadcrumbSection}</Link>
            <span>›</span>
            <span>{breadcrumbLabel}</span>
          </div>
          <div style={H.overline}>{category} · {date}</div>
          <h1 style={H.h1}>{title}</h1>
          <div style={H.meta}>
            <span style={H.metaItem}>
              {author}{readTime ? ` · ${readTime}` : ""}
            </span>
          </div>
        </div>
      </div>

      {/* Article */}
      <article style={H.article} className="article-page-body">
        <div style={H.body} className="article-body">
          {children}
        </div>

        {/* Hub page backlink */}
        {showHubLink && (
          <div style={{ marginTop: "2.5rem", padding: "1rem 1.25rem", background: "#F5F5F0", border: "1px solid #EDECE5", borderRadius: "8px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "12px" }}>
            <span style={{ fontSize: "13px", color: "#8F8F86", lineHeight: 1.5 }}>
              {isKo ? "호주 차량 구매의 모든 것을 한곳에서 정리한 종합 가이드입니다." : "Part of our complete guide to buying a car in Australia."}
            </span>
            <Link href={`/blog/${HUB_SLUG}`} style={{ fontSize: "13px", fontWeight: 600, color: "#1A1A1A", textDecoration: "none", whiteSpace: "nowrap" }}>
              {isKo ? "전체 가이드 보기 →" : "View full guide →"}
            </Link>
          </div>
        )}

        {/* Read next */}
        {type === "blog" && readNextPosts.length > 0 && (
          <div style={{ marginTop: "2.5rem", borderTop: "1px solid #EDECE5", paddingTop: "2rem" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#8F8F86", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              {isKo ? "다음으로 읽어보세요" : "Read next"}
            </div>
            <div className="read-next-grid">
              {readNextPosts.map((post, idx) => (
                <BlogGridCard key={post.slug} post={post} index={idx} />
              ))}
            </div>
          </div>
        )}
      </article>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <div style={{ background: "#F5F5F0", borderTop: "1px solid #EDECE5", padding: "2.5rem 2rem" }}>
          <div style={{ maxWidth: "660px", margin: "0 auto" }}>
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

      {/* Related Blog — news pages only */}
      {type === "news" && relatedBlogPosts.length > 0 && (
        <div style={{ background: "#FFFFFF", borderTop: "1px solid #EDECE5", padding: "2.5rem 2rem 3rem" }}>
          <div style={{ maxWidth: "660px", margin: "0 auto" }}>
            <div style={{ fontSize: "11px", fontWeight: 700, color: "#8F8F86", letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "1.25rem" }}>
              {isKo ? "관련 블로그" : "Related Blog"}
            </div>
            <div className="read-next-grid">
              {relatedBlogPosts.map((post, idx) => (
                <BlogGridCard key={post.slug} post={post} index={idx} />
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
