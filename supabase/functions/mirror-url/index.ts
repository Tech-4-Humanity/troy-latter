// supabase/functions/mirror-url/index.ts
//
// Mirror any URL on an allowlist into a Supabase Storage bucket.
// Reusable canonical-asset mechanism for MEE applications and beyond.
//
// SECURITY MODEL
//   - verify_jwt = false (configured in supabase/config.toml) — callable without auth.
//   - URL host MUST be in ALLOWED_HOSTS.
//   - bucket MUST be in ALLOWED_BUCKETS.
//   - path MUST start with one of ALLOWED_PREFIXES.
//   - Side effects all use service role internally (storage upload only).
//
// Deploy: supabase functions deploy mirror-url --project-ref lzfgigiyqpuuxslsygjt
//
// Body (JSON):
//   { url, bucket, path, content_type?, upsert? }
//
// Response (JSON):
//   { success: true, public_url, size, etag, content_type, upstream_status }

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

// Allowlists — the canonical security boundary for this function.
const ALLOWED_HOSTS = new Set([
  "troy-latter.vercel.app",
  "troylatter.com",
  "www.troylatter.com",
  "tech4humanity.com.au",
  "www.tech4humanity.com.au"
]);
const ALLOWED_BUCKETS = new Set(["documents", "sites", "deployments"]);
const ALLOWED_PREFIXES = ["mee-applications/", "mee/", "sites/", "deployments/"];
const MAX_BYTES = 50 * 1024 * 1024; // 50 MB

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS"
};

interface MirrorRequest {
  url: string;
  bucket: string;
  path: string;
  content_type?: string;
  upsert?: boolean;
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return json({ error: "POST only" }, 405);

  let body: MirrorRequest;
  try { body = await req.json(); }
  catch { return json({ error: "invalid JSON body" }, 400); }

  // Validate inputs
  if (!body.url || !body.bucket || !body.path) {
    return json({ error: "url, bucket, path are required" }, 400);
  }

  let urlObj: URL;
  try { urlObj = new URL(body.url); }
  catch { return json({ error: "invalid url" }, 400); }

  if (!ALLOWED_HOSTS.has(urlObj.host)) {
    return json({ error: "host not allowlisted", host: urlObj.host, allowed: [...ALLOWED_HOSTS] }, 403);
  }
  if (!ALLOWED_BUCKETS.has(body.bucket)) {
    return json({ error: "bucket not allowlisted", bucket: body.bucket, allowed: [...ALLOWED_BUCKETS] }, 403);
  }
  if (!ALLOWED_PREFIXES.some(p => body.path.startsWith(p))) {
    return json({ error: "path prefix not allowlisted", path: body.path, allowed: ALLOWED_PREFIXES }, 403);
  }

  // Fetch the source URL
  let upstream: Response;
  try { upstream = await fetch(body.url, { redirect: "follow" }); }
  catch (err) { return json({ error: "fetch failed", detail: String(err) }, 502); }

  if (!upstream.ok) {
    return json({ error: "upstream non-2xx", status: upstream.status, url: body.url }, 502);
  }

  const ab = await upstream.arrayBuffer();
  if (ab.byteLength > MAX_BYTES) {
    return json({ error: "too large", size: ab.byteLength, max: MAX_BYTES }, 413);
  }
  const bytes = new Uint8Array(ab);

  const contentType =
    body.content_type ??
    upstream.headers.get("content-type") ??
    "application/octet-stream";

  // Upload via service role (bypasses RLS)
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
    auth: { persistSession: false }
  });

  const { error: uploadErr } = await supabase.storage
    .from(body.bucket)
    .upload(body.path, bytes, {
      contentType,
      upsert: body.upsert ?? true
    });

  if (uploadErr) {
    return json({
      error: "upload failed",
      detail: uploadErr.message,
      bucket: body.bucket,
      path: body.path
    }, 500);
  }

  const { data: pub } = supabase.storage.from(body.bucket).getPublicUrl(body.path);

  return json({
    success: true,
    public_url: pub.publicUrl,
    bucket: body.bucket,
    path: body.path,
    size: bytes.byteLength,
    content_type: contentType,
    upstream_status: upstream.status,
    upstream_etag: upstream.headers.get("etag"),
    mirrored_at: new Date().toISOString()
  }, 200);
});

function json(b: unknown, status = 200): Response {
  return new Response(JSON.stringify(b), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" }
  });
}
