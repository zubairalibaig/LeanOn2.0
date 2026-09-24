-- 061: one push token per device (listener phone AND laptop both ring).
--
-- Before this, users.fcm_token held ONE token: whichever device registered last
-- won, so a listener who opened LeanOn on a laptop silently stopped getting
-- request alerts on their phone. users.fcm_token stays as a fallback that the
-- app still reads and writes (lib/push.ts), so running this is safe at any time.
--
-- A token belongs to exactly one user: /api/push/register moves it to whoever is
-- signed in on that device now (token is the primary key).
-- Service-role only: RLS on, no policies.

create table if not exists public.push_tokens (
  token        text primary key,
  user_id      uuid not null references public.users(id) on delete cascade,
  user_agent   text,
  created_at   timestamptz not null default now(),
  last_seen_at timestamptz not null default now()
);

create index if not exists push_tokens_user_idx on public.push_tokens (user_id, last_seen_at desc);

alter table public.push_tokens enable row level security;

-- Carry over existing tokens.
insert into public.push_tokens (token, user_id)
select fcm_token, id from public.users
where fcm_token is not null and length(fcm_token) >= 10
on conflict (token) do nothing;
