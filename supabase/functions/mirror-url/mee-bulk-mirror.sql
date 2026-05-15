-- supabase/functions/mirror-url/mee-bulk-mirror.sql
-- One-shot: mirror Westpac + Microsoft MEE docx into the public `documents` bucket.
-- Run AFTER `mirror-url` edge function is deployed (with verify_jwt=false).
--
-- No auth header required — mirror-url is allowlisted by URL host + bucket + prefix.

DO $$
DECLARE
  files jsonb := jsonb_build_array(
    jsonb_build_object('url', 'https://troy-latter.vercel.app/westpac/cv.docx',            'path', 'mee-applications/westpac/cv.docx'),
    jsonb_build_object('url', 'https://troy-latter.vercel.app/westpac/cover-letter.docx',  'path', 'mee-applications/westpac/cover-letter.docx'),
    jsonb_build_object('url', 'https://troy-latter.vercel.app/westpac/skills-matrix.docx', 'path', 'mee-applications/westpac/skills-matrix.docx'),
    jsonb_build_object('url', 'https://troy-latter.vercel.app/microsoft/cv.docx',            'path', 'mee-applications/microsoft/cv.docx'),
    jsonb_build_object('url', 'https://troy-latter.vercel.app/microsoft/cover-letter.docx',  'path', 'mee-applications/microsoft/cover-letter.docx'),
    jsonb_build_object('url', 'https://troy-latter.vercel.app/microsoft/skills-matrix.docx', 'path', 'mee-applications/microsoft/skills-matrix.docx')
  );
  f jsonb;
  req_id bigint;
BEGIN
  FOR f IN SELECT * FROM jsonb_array_elements(files) LOOP
    SELECT net.http_post(
      url := 'https://lzfgigiyqpuuxslsygjt.supabase.co/functions/v1/mirror-url',
      body := jsonb_build_object(
        'url',          f->>'url',
        'bucket',       'documents',
        'path',         f->>'path',
        'content_type', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'upsert',       true
      ),
      headers := jsonb_build_object('Content-Type', 'application/json'),
      timeout_milliseconds := 30000
    ) INTO req_id;
    RAISE NOTICE 'queued mirror % → documents/% (req=%)', f->>'url', f->>'path', req_id;
  END LOOP;
END $$;

-- After ~10s, check results:
-- SELECT id, status_code, content::jsonb AS response, created
-- FROM net._http_response
-- WHERE created > now() - interval '5 minutes'
-- ORDER BY created DESC LIMIT 10;

-- Canonical Supabase URLs after mirror succeeds:
-- https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/documents/mee-applications/westpac/cv.docx
-- (etc.)

-- Then update emp_packs to make Supabase the canonical store:
-- UPDATE public.emp_packs SET talking_points = jsonb_set(
--   ...,
--   '{documents,cv,url}',
--   '"https://lzfgigiyqpuuxslsygjt.supabase.co/storage/v1/object/public/documents/mee-applications/westpac/cv.docx"'::jsonb
-- ) WHERE id = 'c5a93b14-8e2f-4d77-b9c8-3a6e7d5f2c10';
