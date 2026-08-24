import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import { getPosts, type BlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Tips and insights for Ontario home-service contractors on lead follow-up, missed-call recovery, and growing a service business.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: `Blog | ${siteConfig.brandName}`,
    url: `${siteConfig.url}/blog`,
  },
};

// Placeholder post shown only when the n8n-fed blog API returns zero posts
// (e.g. BLOG_API_URL isn't configured yet), so the page isn't empty in dev.
const placeholderPost: BlogPost = {
  title: "Welcome to the Blog",
  slug: "welcome",
  excerpt:
    "This is a placeholder post. Once BLOG_API_URL is configured and posts are published via the n8n workflow, real posts will appear here automatically.",
  body: "This is a placeholder post shown because no posts were returned from the blog API.",
  publishedAt: new Date().toISOString(),
  author: siteConfig.brandName,
};

export default async function BlogIndexPage() {
  const posts = await getPosts();
  const isEmpty = posts.length === 0;
  const displayed = isEmpty ? [placeholderPost] : posts;

  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight text-navy-900">
          Blog
        </h1>
        <p className="mt-4 text-lg text-muted">
          Insights on lead follow-up, automation, and growing an Ontario
          home-service business.
        </p>
      </div>

      {isEmpty && (
        <p className="mx-auto mt-8 max-w-xl rounded-lg border border-dashed border-border bg-surface p-4 text-center text-sm text-muted">
          {/* Dev/empty-state notice — not shown once the blog API returns real posts. */}
          No posts yet — showing a placeholder. Posts published via the n8n
          workflow will appear here automatically.
        </p>
      )}

      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {displayed.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </section>
  );
}
