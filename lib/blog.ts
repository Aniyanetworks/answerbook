import { siteConfig } from "@/lib/config";

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  body: string; // markdown or rich text, published via the n8n workflow
  coverImage?: string;
  publishedAt: string; // ISO 8601
  author: string;
  seoTitle?: string;
  seoDescription?: string;
}

// Revalidate window (seconds) for ISR on blog list/post pages.
export const BLOG_REVALIDATE_SECONDS = 300;

async function fetchFromApi<T>(path: string): Promise<T | null> {
  const baseUrl = siteConfig.blog.apiUrl;
  if (!baseUrl) return null;

  try {
    const res = await fetch(`${baseUrl}${path}`, {
      next: { revalidate: BLOG_REVALIDATE_SECONDS },
    });
    if (!res.ok) return null;
    return (await res.json()) as T;
  } catch {
    // Network/parse failure from the n8n-fed API — fail soft so the site
    // never breaks because the blog backend is unreachable or not yet wired up.
    return null;
  }
}

export async function getPosts(): Promise<BlogPost[]> {
  const posts = await fetchFromApi<BlogPost[]>("/posts");
  return posts ?? [];
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  const post = await fetchFromApi<BlogPost>(`/posts/${slug}`);
  return post ?? null;
}
