import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostBySlug, type BlogPost } from "@/lib/blog";
import { BlogPostingJsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/config";

const placeholderPost: BlogPost = {
  title: "Welcome to the Blog",
  slug: "welcome",
  excerpt:
    "This is a placeholder post shown because no posts were returned from the blog API.",
  body: "This is a placeholder post.\n\nOnce BLOG_API_URL is configured and posts are published via the n8n workflow, real posts will appear here automatically.",
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

  const date = new Date(post.publishedAt);
  const formatted = Number.isNaN(date.getTime())
    ? null
    : date.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

  const paragraphs = post.body.split(/\n{2,}/).filter(Boolean);

  return (
    <article className="mx-auto max-w-3xl px-4 py-20 sm:px-6">
      <BlogPostingJsonLd
        title={post.title}
        description={post.excerpt}
        slug={post.slug}
        publishedAt={post.publishedAt}
        author={post.author}
        coverImage={post.coverImage}
      />

      <header>
        {formatted && (
          <p className="text-sm font-medium uppercase tracking-wide text-muted">
            {formatted} &middot; {post.author}
          </p>
        )}
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-navy-900">
          {post.title}
        </h1>
      </header>

      {post.coverImage && (
        // eslint-disable-next-line @next/next/no-img-element -- cover images come from an external, config-time-unknown CMS host
        <img
          src={post.coverImage}
          alt={post.title}
          className="mt-8 aspect-video w-full rounded-xl object-cover"
        />
      )}

      <div className="mt-10">
        {paragraphs.map((p, i) => (
          <p key={i} className="mb-5 text-lg leading-relaxed text-navy-900">
            {p}
          </p>
        ))}
      </div>
    </article>
  );
}
