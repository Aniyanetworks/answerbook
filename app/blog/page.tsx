import type { Metadata } from "next";
import BlogCard from "@/components/BlogCard";
import PageGlowBackground from "@/components/PageGlowBackground";
import { getPosts, type BlogPost } from "@/lib/blog";
import { siteConfig } from "@/lib/config";

// Next.js route segment config exports must be static literals — they're
// parsed at build time without executing imports, so this can't reference
// BLOG_REVALIDATE_SECONDS from lib/blog.ts even though that's the "real"
// source of truth. Keep this in sync with that constant by hand.
export const revalidate = 300;

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

// Placeholder post shown only when Supabase returns zero published posts
// (e.g. NEXT_PUBLIC_SUPABASE_URL/ANON_KEY aren't configured yet, or nothing
// has been published), so the page isn't empty in dev.
const placeholderPost: BlogPost = {
  title: "Welcome to the Blog",
  slug: "welcome",
  excerpt:
    "This is a placeholder post. Once Supabase is configured and posts are published via the n8n workflow, real posts will appear here automatically.",
  body: "<p>This is a placeholder post shown because no published posts were found.</p>",
  publishedAt: new Date().toISOString(),
  author: siteConfig.brandName,
};

export default async function BlogIndexPage() {
  const posts = await getPosts();
  const isEmpty = posts.length === 0;
  const displayed = isEmpty ? [placeholderPost] : posts;

  return (
    <>
      <PageGlowBackground />
      <section className="bg-grid-dark px-4 py-20 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-white">
            Blog
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Insights on lead follow-up, automation, and growing an Ontario
            home-service business.
          </p>
        </div>

        {isEmpty && (
          <p className="mx-auto mt-8 max-w-xl rounded-2xl border border-white/10 bg-white/5 p-4 text-center text-sm text-slate-300 backdrop-blur-xl">
            {/* Dev/empty-state notice — not shown once the blog API returns real posts. */}
            No posts yet — showing a placeholder. Posts published via the n8n
            workflow will appear here automatically.
          </p>
        )}

        <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayed.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
      </section>
    </>
  );
}
