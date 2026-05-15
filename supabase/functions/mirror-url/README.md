# mirror-url

Fetch any public URL and mirror it into a Supabase Storage bucket. Reusable canonical-asset mechanism for MEE applications and any other workflow that needs durable file URLs.

## Deploy (one-time)

Any of these works:

### Option A — Supabase CLI
```bash
supabase functions deploy mirror-url --project-ref lzfgigiyqpuuxslsygjt
```

### Option B — Supabase MCP (from Claude)
Ask Claude to deploy via the Supabase MCP connector — the deploy tool can push the function from this repo path.

### Option C — Dashboard
Supabase Dashboard → Edge Functions → New Function → paste `index.ts`.

No env vars to set; `SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are injected automatically.

## Call from SQL (after deploy)

```sql
SELECT net.http_post(
  url := 'https://lzfgigiyqpuuxslsygjt.supabase.co/functions/v1/mirror-url',
  body := jsonb_build_object(
    'url', 'https://troy-latter.vercel.app/westpac/cv.docx',
    'bucket', 'documents',
    'path', 'mee-applications/westpac/cv.docx',
    'content_type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
  ),
  headers := jsonb_build_object(
    'Content-Type', 'application/json',
    'Authorization', 'Bearer ' || (SELECT decrypted_secret FROM vault.decrypted_secrets WHERE name='supabase_anon_key')
  )
) AS request_id;
```

Result: file mirrored to `https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/documents/mee-applications/westpac/cv.docx` — permanent, public, independent of Vercel.

## Bulk-mirror MEE applications

See `supabase/functions/mirror-url/mee-bulk-mirror.sql` for the one-shot SQL that mirrors the current MEE pack (Westpac + Microsoft, 6 docx files).
