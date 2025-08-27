
-- 1) Table for Envato notes, per user and per note key (d1..d14)
create table if not exists public.envato_strategy_notes (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null,
  note_key text not null,
  content text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint envato_strategy_notes_user_key_unique unique (user_id, note_key)
);

-- 2) Enable RLS
alter table public.envato_strategy_notes enable row level security;

-- 3) Owner-only policies
drop policy if exists "envato_notes_select_own" on public.envato_strategy_notes;
create policy "envato_notes_select_own"
  on public.envato_strategy_notes
  for select
  using (auth.uid() = user_id);

drop policy if exists "envato_notes_insert_own" on public.envato_strategy_notes;
create policy "envato_notes_insert_own"
  on public.envato_strategy_notes
  for insert
  with check (auth.uid() = user_id);

drop policy if exists "envato_notes_update_own" on public.envato_strategy_notes;
create policy "envato_notes_update_own"
  on public.envato_strategy_notes
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "envato_notes_delete_own" on public.envato_strategy_notes;
create policy "envato_notes_delete_own"
  on public.envato_strategy_notes
  for delete
  using (auth.uid() = user_id);

-- 4) Trigger to keep updated_at fresh (uses an existing helper if present)
-- If public.update_updated_at_timestamp exists (per your project), use it:
drop trigger if exists trg_envato_notes_updated_at on public.envato_strategy_notes;
create trigger trg_envato_notes_updated_at
before update on public.envato_strategy_notes
for each row
execute function public.update_updated_at_timestamp();

-- 5) Helpful index for user lookups
create index if not exists idx_envato_notes_user on public.envato_strategy_notes(user_id);
