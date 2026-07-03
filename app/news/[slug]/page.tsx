import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NEWS_ITEMS } from "../../data/posts";
import { getNewsContent } from "../../data/content/news";
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
  return NEWS_ITEMS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = NEWS_ITEMS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | MustGoDeals`,
    description: post.excerpt,
    alternates: { canonical: `/news/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      locale: post.lang === "EN" ? "en_AU" : "ko_KR",
      siteName: "MustGoDeals",
      images: [{ url: post.image }],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = NEWS_ITEMS.find((p) => p.slug === slug);
  if (!post) notFound();

  const Content = getNewsContent(slug);
  if (!Content) notFound();

  const iso = toIsoDate(post.date);
  const newsArticleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: post.title,
    description: post.excerpt,
    image: post.image || LOGO,
    datePublished: iso,
    dateModified: iso,
    url: `${SITE}/news/${post.slug}`,
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
      <JsonLd data={newsArticleSchema} />
      <PostDetail
        type="news"
        slug={post.slug}
        title={post.title}
        category={post.category}
        date={post.date}
        author={post.author}
        lang={post.lang}
      >
        <Content />
      </PostDetail>
    </>
  );
}
