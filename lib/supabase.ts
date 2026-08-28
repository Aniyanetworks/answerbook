import { createClient } from "@supabase/supabase-js";
import { siteConfig } from "@/lib/config";

// Public, RLS-scoped client for reading blog content in Server Components.
// Uses the anon key — safe because Row Level Security on `blog_posts`
// restricts anon-key reads to status = 'published' rows only (see
// supabase/schema.sql), so a draft can never leak through this client even
// though the key itself ships in the browser bundle.
//
// null until NEXT_PUBLIC_SUPABASE_URL/ANON_KEY are set, so the blog can fail
// soft (empty list / not-found) instead of crashing before Supabase is
// configured — same pattern the old BLOG_API_URL-based fetch used.
export const supabase =
  siteConfig.supabase.url && siteConfig.supabase.anonKey
    ? createClient(siteConfig.supabase.url, siteConfig.supabase.anonKey)
    : null;
