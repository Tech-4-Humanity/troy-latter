-- supabase/functions/mirror-url/mee-bulk-mirror.sql
-- One-shot: mirror Westpac + Microsoft MEE docx into the public `documents` bucket.
-- Run AFTER `mirror-url` edge function is deployed.

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
      headers := jsonb_build_object(
        'Content-Type',  'application/json',
        'Authorization', 'Bearer ' || (SELECT decrypted_secret FROM vault.decrypted_secrets WHERE name='supabase_anon_key' LIMIT 1)
      ),
      timeout_milliseconds := 30000
    ) INTO req_id;
    RAISE NOTICE 'queued mirror % → documents/% (req=%)', f->>'url', f->>'path', req_id;
  END LOOP;
END $$;

-- After ~10s, check results:
-- SELECT * FROM net._http_response WHERE created > now() - interval '5 minutes' ORDER BY created DESC LIMIT 10;

-- Then update emp_packs with the canonical Supabase URLs:
-- UPDATE public.emp_packs SET talking_points = jsonb_set(...) WHERE job_id IN (...);
