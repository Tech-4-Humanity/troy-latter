
-- 1) Table for capturing AI assistant leads
create table if not exists public.ai_leads (
  id uuid primary key default gen_random_uuid(),
  email text not null,
  name text,
  company text,
  message text,
  source text not null default 'ai_assistant',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

-- 2) Helpful index and uniqueness (case-insensitive email)
create index if not exists ai_leads_email_idx
  on public.ai_leads (lower(email), source);

create unique index if not exists ai_leads_email_source_unique
  on public.ai_leads (lower(email), source);

-- 3) RLS: Insert-only for public (no read/update/delete)
alter table public.ai_leads enable row level security;

drop policy if exists "Public can insert ai leads" on public.ai_leads;
create policy "Public can insert ai leads"
  on public.ai_leads
  for insert
  to anon, authenticated
  with check (true);

-- 4) Keep updated_at fresh on updates (uses existing helper function)
drop trigger if exists ai_leads_set_updated_at on public.ai_leads;
create trigger ai_leads_set_updated_at
  before update on public.ai_leads
  for each row execute function public.update_updated_at_timestamp();
