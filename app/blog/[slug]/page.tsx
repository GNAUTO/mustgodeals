import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_POSTS } from "../../data/posts";
import { getBlogContent } from "../../data/content/blog";
import PostDetail from "../../components/posts/PostDetail";
import { JsonLd } from "../../components/JsonLd";

type Props = { params: Promise<{ slug: string }> };

const LOGO = "https://mustgodeals.com.au/favicon.svg";
const SITE = "https://mustgodeals.com.au";

function toIsoDate(dateStr: string): string {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date().toISOString().split("T")[0] : d.toISOString().split("T")[0];
}

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  const isKo = slug.endsWith("-ko");
  const enSlug = isKo ? slug.slice(0, -3) : slug;
  const koSlug = isKo ? slug : `${slug}-ko`;
  const enExists = BLOG_POSTS.some((p) => p.slug === enSlug);
  const koExists = BLOG_POSTS.some((p) => p.slug === koSlug);

  const languages: Record<string, string> = {};
  if (enExists) { languages["en-AU"] = `/blog/${enSlug}`; languages["x-default"] = `/blog/${enSlug}`; }
  if (koExists) languages["ko-KR"] = `/blog/${koSlug}`;

  return {
    title: `${post.title} | MustGoDeals`,
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
      ...(Object.keys(languages).length > 0 && { languages }),
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: post.lang === "EN" ? "en_AU" : "ko_KR",
      siteName: "MustGoDeals",
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const Content = getBlogContent(slug);
  if (!Content) notFound();

  const iso = toIsoDate(post.date);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: LOGO,
    datePublished: iso,
    dateModified: iso,
    url: `${SITE}/blog/${post.slug}`,
    author: {
      "@type": "Organization",
      name: "MustGoDeals",
      url: SITE,
    },
    publisher: {
      "@type": "Organization",
      name: "MustGoDeals",
      url: SITE,
      logo: {
        "@type": "ImageObject",
        url: LOGO,
      },
    },
  };

  return (
    <>
      <JsonLd data={articleSchema} />
      <PostDetail
        type="blog"
        slug={post.slug}
        title={post.title}
        category={post.category}
        date={post.date}
        author={post.lang === "EN" ? "MustGoDeals Editorial" : "MustGoDeals 편집팀"}
        lang={post.lang}
      >
        <Content />
      </PostDetail>
    </>
  );
}
