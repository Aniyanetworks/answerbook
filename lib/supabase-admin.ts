import { createClient } from "@supabase/supabase-js";

// SERVER-ONLY. Uses the Supabase service role key, which bypasses Row
// Level Security entirely (see supabase/schema.sql — RLS normally hides
// anything but status = 'published' rows). This exists solely so the blog
// preview route can render a draft before it's published.
//
// Never import this from a Client Component, and never let the service
// role key anywhere near a NEXT_PUBLIC_* variable — that's the exact
// mistake that would ship full database write access to every visitor's
// browser.
const url = process.env.NEXT_PUBLIC_SUPABASE_URL; // same project, public URL is fine
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY; // server-only, no NEXT_PUBLIC_ prefix

export const supabaseAdmin =
  url && serviceRoleKey ? createClient(url, serviceRoleKey) : null;
