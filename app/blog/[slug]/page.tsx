import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, BLOG_REVALIDATE_SECONDS, type BlogPost } from "@/lib/blog";
import PageGlowBackground from "@/components/PageGlowBackground";
import BlogPostArticle from "@/components/BlogPostArticle";
import { siteConfig } from "@/lib/config";

export const revalidate = BLOG_REVALIDATE_SECONDS;

const placeholderPost: BlogPost = {
  title: "Welcome to the Blog",
  slug: "welcome",
  excerpt: "This is a placeholder post shown because no published post was found.",
  body: "<p>This is a placeholder post.</p><p>Once Supabase is configured and posts are published via the n8n workflow, real posts will appear here automatically.</p>",
  publishedAt: new Date().toISOString(),
  author: siteConfig.brandName,
};

async function resolvePost(slug: string): Promise<BlogPost | null> {
  const post = await getPostBySlug(slug);
  if (post) return post;
  // Fall back to the same placeholder shown on the blog index when the
  // backend isn't wired up yet, so the linked-to post isn't a dead end.
  return slug === "welcome" ? placeholderPost : null;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) return {};

  const title = post.seoTitle ?? post.title;
  const description = post.seoDescription ?? post.excerpt;

  return {
    title,
    description,
    alternates: { canonical: `/blog/${slug}` },
    openGraph: {
      title,
      description,
      url: `${siteConfig.url}/blog/${slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      images: post.coverImage ? [post.coverImage] : undefined,
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await resolvePost(slug);
  if (!post) notFound();

  return (
    <>
      <PageGlowBackground />
      <BlogPostArticle post={post} />
    </>
  );
}
