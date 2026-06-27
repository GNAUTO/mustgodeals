import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { NEWS_ITEMS } from "../../data/posts";
import { getNewsContent } from "../../data/content/news";
import PostDetail from "../../components/posts/PostDetail";

type Props = { params: Promise<{ slug: string }> };

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

  return (
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
  );
}
