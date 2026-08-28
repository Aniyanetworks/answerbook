-- Blog storage for the n8n AI blog pipeline.
--
-- Pipeline shape: an SEO person maintains the keyword queue in a Google
-- Sheet (not this database) -> n8n reads the next pending keyword from that
-- sheet -> generates the article + SEO meta with AI -> fetches a cover image
-- -> inserts a DRAFT row here -> notifies Slack -> a human reviews the draft
-- and flips it to 'published' (via the Supabase table editor, or a future
-- admin page) once it looks good. The public site only ever reads rows with
-- status = 'published'.
--
-- Run this once in the Supabase SQL editor for a new project.

create extension if not exists pgcrypto; -- for gen_random_uuid()

create table if not exists blog_posts (
  id uuid primary key default gen_random_uuid(),

  title text not null,
  slug text not null unique,
  excerpt text not null default '',
  content text not null, -- full article body as HTML (h1/h2/h3/p/ul/ol/table/etc.)

  cover_image text,
  cover_image_alt text,

  meta_title text,
  meta_description text,

  -- The SEO keyword (from the Google Sheet) this post was generated for —
  -- kept for reference/reporting, not shown to site visitors.
  keyword text,

  author text not null default 'answer&book Team',

  status text not null default 'draft' check (status in ('draft', 'published')),
  published_at timestamptz, -- set when status flips to 'published'
  created_at timestamptz not null default now()
);

-- Public blog list/detail pages sort published posts by recency.
create index if not exists blog_posts_published_idx
  on blog_posts (status, published_at desc);

alter table blog_posts enable row level security;

-- The site's public (anon-key) client may only ever see published posts —
-- drafts stay invisible to visitors even though the anon key itself is a
-- public, client-safe credential. n8n writes with the service role key,
-- which bypasses RLS entirely, so no insert/update policy is needed here.
drop policy if exists "Public can read published posts" on blog_posts;
create policy "Public can read published posts"
  on blog_posts for select
  using (status = 'published');
