import Link from "next/link";
import type { BlogPost } from "@/lib/blog";

export default function BlogCard({ post }: { post: BlogPost }) {
  const date = new Date(post.publishedAt);
  const formatted = Number.isNaN(date.getTime())
    ? null
    : date.toLocaleDateString("en-CA", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow hover:shadow-lg"
    >
      <div className="relative aspect-video w-full bg-surface-alt">
        {post.coverImage && (
          // eslint-disable-next-line @next/next/no-img-element -- cover images come from an external, config-time-unknown CMS host
          <img
            src={post.coverImage}
            alt={post.title}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        {formatted && (
          <p className="text-xs font-medium uppercase tracking-wide text-muted">
            {formatted}
          </p>
        )}
        <h3 className="mt-2 text-lg font-semibold text-navy-900 group-hover:text-accent">
          {post.title}
        </h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted">
          {post.excerpt}
        </p>
        <p className="mt-4 text-sm font-medium text-accent">Read more &rarr;</p>
      </div>
    </Link>
  );
}
