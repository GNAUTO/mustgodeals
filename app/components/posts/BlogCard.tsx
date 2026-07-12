import Link from "next/link";
import BlogCover, { coverIsDark } from "./BlogCover";
import type { BlogPost } from "../../data/posts";

function CategoryLabel({ label }: { label: string }) {
  return (
    <span style={{
      fontSize: "10px",
      fontWeight: 600,
      letterSpacing: "0.08em",
      textTransform: "uppercase" as const,
      color: "#8A9922",
    }}>
      {label}
    </span>
  );
}

function MetaLine({ date, readTime }: { date: string; readTime: string }) {
  return (
    <span style={{ fontSize: "11px", color: "#B4B2A9" }}>
      {date}{readTime ? `  ·  ${readTime}` : ""}
    </span>
  );
}

export function BlogGridCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link href={`/blog/${post.slug}`} style={{ textDecoration: "none", display: "block" }}>
      <BlogCover
        highlight={post.highlight}
        index={index}
        variant="grid"
        className="blog-cover-grid"
      />
      <div style={{ marginTop: "10px" }}>
        <CategoryLabel label={post.category} />
        <h3 style={{
          fontSize: "14px",
          fontWeight: 500,
          color: "#1A1A1A",
          lineHeight: 1.35,
          margin: "4px 0 5px",
        }}>
          {post.title}
        </h3>
        <MetaLine date={post.date} readTime={post.readTime} />
      </div>
    </Link>
  );
}

export function BlogHeroCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <Link href={`/blog/${post.slug}`} className="blog-hero-card" style={{ textDecoration: "none" }}>
      <div className="blog-hero-cover-wrap">
        <BlogCover
          highlight={post.highlight}
          thumbSubtext={post.thumbSubtext}
          index={index}
          variant="hero"
          className="blog-cover-hero"
        />
      </div>
      <div className="blog-hero-text">
        <CategoryLabel label={post.category} />
        <h2 style={{
          fontSize: "21px",
          fontWeight: 500,
          color: "#1A1A1A",
          lineHeight: 1.3,
          margin: "8px 0 10px",
        }}>
          {post.title}
        </h2>
        <p style={{
          fontSize: "13px",
          color: "#6B6B65",
          lineHeight: 1.68,
          margin: "0 0 14px",
        }}>
          {post.excerpt}
        </p>
        <MetaLine date={post.date} readTime={post.readTime} />
      </div>
    </Link>
  );
}
