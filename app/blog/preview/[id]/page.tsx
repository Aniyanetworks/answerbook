import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPostByIdForPreview } from "@/lib/blog";
import PageGlowBackground from "@/components/PageGlowBackground";
import BlogPostArticle from "@/components/BlogPostArticle";

// Never index a preview page, and never cache it — it needs to reflect
// whatever's in Supabase right now, including a status that's about to
// change the moment someone clicks Publish/Reject in Slack.
export const metadata: Metadata = { robots: { index: false, follow: false } };
export const dynamic = "force-dynamic";

export default async function BlogPreviewPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ token?: string }>;
}) {
  const { id } = await params;
  const { token } = await searchParams;

  // Gate on a shared secret so this isn't just "anyone who guesses a UUID
  // can read unpublished drafts" — matches the api_key-on-query-param
  // pattern already used elsewhere in this project's n8n integrations.
  const expectedToken = process.env.BLOG_PREVIEW_TOKEN;
  if (!expectedToken || token !== expectedToken) {
    notFound();
  }

  const post = await getPostByIdForPreview(id);
  if (!post) notFound();

  return (
    <>
      <PageGlowBackground />
      <BlogPostArticle
        post={post}
        banner={
          <div className="mb-10 rounded-2xl border border-amber-400/30 bg-amber-400/10 px-5 py-3 text-sm font-medium text-amber-200">
            🔒 Draft preview — not visible to site visitors yet. Current
            status: <strong>{post.status ?? "unknown"}</strong>
          </div>
        }
      />
    </>
  );
}
