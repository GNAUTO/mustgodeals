import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { BLOG_POSTS } from "../../data/posts";
import { getBlogContent } from "../../data/content/blog";
import PostDetail from "../../components/posts/PostDetail";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: `${post.title} | MustGoDeals`,
    description: post.excerpt,
    alternates: { canonical: `/blog/${slug}` },
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

  return (
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
  );
}
