// supabase/functions/mirror-url/index.ts
//
// Mirror any public URL into a Supabase Storage bucket.
// Reusable canonical-asset mechanism for MEE applications and beyond.
//
// Deploy:   supabase functions deploy mirror-url --project-ref lzfgigiyqpuuxslsygjt
// Or via the Supabase MCP / Dashboard once.
//
// Body (JSON):
//   {
//     "url":      "https://troy-latter.vercel.app/westpac/cv.docx",  (required, must be public)
//     "bucket":   "documents",                                       (required, must exist + be public)
//     "path":     "mee-applications/westpac/cv.docx",                (required, target key)
//     "content_type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document"  (optional)
//   }
//
// Response (JSON):
//   { success: true, public_url: "https://...supabase.co/storage/v1/object/public/documents/...", size: 13208, etag: "..." }
//
// Auth: caller supplies Bearer token (anon key works for invocation; service role used INTERNALLY for storage write).

import { createClient } from "https://esm.sh/@supabase/supabase-js@2.45.4";

const SUPABASE_URL = Deno.env.get("SUPABASE_URL")!;
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;

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
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  if (req.method !== "POST") {
    return json({ error: "POST only" }, 405);
  }

  let body: MirrorRequest;
  try {
    body = await req.json();
  } catch {
    return json({ error: "invalid JSON body" }, 400);
  }

  if (!body.url || !body.bucket || !body.path) {
    return json({ error: "url, bucket, path are required" }, 400);
  }

  // Fetch the source URL
  let upstream: Response;
  try {
    upstream = await fetch(body.url, { redirect: "follow" });
  } catch (err) {
    return json({ error: "fetch failed", detail: String(err) }, 502);
  }

  if (!upstream.ok) {
    return json({
      error: "upstream non-2xx",
      status: upstream.status,
      url: body.url
    }, 502);
  }

  const bytes = new Uint8Array(await upstream.arrayBuffer());
  const contentType =
    body.content_type ??
    upstream.headers.get("content-type") ??
    "application/octet-stream";

  // Upload to storage (service-role bypasses RLS)
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
    upstream_status: upstream.status
  }, 200);
});

function json(body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" }
  });
}
