-- ─── Extensions ────────────────────────────────────────────────────────────
create extension if not exists "uuid-ossp";

-- ─── Profiles ───────────────────────────────────────────────────────────────
create table if not exists public.profiles (
  id            uuid references auth.users(id) on delete cascade primary key,
  email         text not null,
  name          text not null default '',
  avatar_url    text,
  plan          text not null default 'free' check (plan in ('free','essential','premium','integral','concierge')),
  streak        integer not null default 0,
  completed_classes integer not null default 0,
  points        integer not null default 0,
  weight        numeric(5,2),
  height        numeric(5,2),
  goal          text,
  bio           text,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

alter table public.profiles enable row level security;

create policy "Users can view own profile"
  on public.profiles for select using (auth.uid() = id);

create policy "Users can update own profile"
  on public.profiles for update using (auth.uid() = id);

-- Auto-create profile on signup
create or replace function public.handle_new_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.profiles (id, email, name)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'name', split_part(new.email, '@', 1))
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- ─── Classes ────────────────────────────────────────────────────────────────
create table if not exists public.classes (
  id              uuid default uuid_generate_v4() primary key,
  title           text not null,
  description     text not null default '',
  category        text not null,
  level           text not null default 'all' check (level in ('beginner','intermediate','advanced','all')),
  duration_minutes integer not null default 30,
  thumbnail_url   text,
  video_url       text,
  instructor      text not null default 'Gisele Neymerk',
  tags            text[] default '{}',
  rating          numeric(3,2) default 0,
  total_ratings   integer default 0,
  views           integer default 0,
  is_premium      boolean default false,
  created_at      timestamptz not null default now()
);

alter table public.classes enable row level security;

create policy "Anyone can view classes"
  on public.classes for select using (true);

-- ─── User Classes (progress) ─────────────────────────────────────────────────
create table if not exists public.user_classes (
  id               uuid default uuid_generate_v4() primary key,
  user_id          uuid references public.profiles(id) on delete cascade not null,
  class_id         uuid references public.classes(id) on delete cascade not null,
  completed        boolean default false,
  progress_seconds integer default 0,
  completed_at     timestamptz,
  created_at       timestamptz not null default now(),
  unique(user_id, class_id)
);

alter table public.user_classes enable row level security;

create policy "Users can manage own class progress"
  on public.user_classes for all using (auth.uid() = user_id);

-- ─── Daily Goals ────────────────────────────────────────────────────────────
create table if not exists public.daily_goals (
  id                  uuid default uuid_generate_v4() primary key,
  user_id             uuid references public.profiles(id) on delete cascade not null,
  date                date not null default current_date,
  movement_minutes    integer default 0,
  movement_target     integer default 60,
  water_glasses       integer default 0,
  water_target        integer default 8,
  meditation_minutes  integer default 0,
  meditation_target   integer default 20,
  sleep_hours         numeric(4,2) default 0,
  sleep_target        numeric(4,2) default 8,
  unique(user_id, date)
);

alter table public.daily_goals enable row level security;

create policy "Users can manage own daily goals"
  on public.daily_goals for all using (auth.uid() = user_id);

-- ─── Appointments ───────────────────────────────────────────────────────────
create table if not exists public.appointments (
  id                  uuid default uuid_generate_v4() primary key,
  user_id             uuid references public.profiles(id) on delete cascade not null,
  professional_name   text not null,
  professional_role   text not null,
  scheduled_at        timestamptz not null,
  duration_minutes    integer default 50,
  type                text default 'video' check (type in ('video','phone','chat')),
  status              text default 'scheduled' check (status in ('scheduled','completed','cancelled')),
  notes               text,
  created_at          timestamptz not null default now()
);

alter table public.appointments enable row level security;

create policy "Users can manage own appointments"
  on public.appointments for all using (auth.uid() = user_id);

-- ─── Posts (community) ──────────────────────────────────────────────────────
create table if not exists public.posts (
  id          uuid default uuid_generate_v4() primary key,
  user_id     uuid references public.profiles(id) on delete cascade not null,
  content     text not null,
  image_url   text,
  likes       integer default 0,
  comments    integer default 0,
  created_at  timestamptz not null default now()
);

alter table public.posts enable row level security;

create policy "Anyone can view posts"
  on public.posts for select using (true);

create policy "Users can manage own posts"
  on public.posts for insert with check (auth.uid() = user_id);

create policy "Users can update own posts"
  on public.posts for update using (auth.uid() = user_id);

create policy "Users can delete own posts"
  on public.posts for delete using (auth.uid() = user_id);

-- ─── Challenges ─────────────────────────────────────────────────────────────
create table if not exists public.challenges (
  id            uuid default uuid_generate_v4() primary key,
  title         text not null,
  description   text not null,
  duration_days integer not null default 30,
  participants  integer default 0,
  category      text not null,
  starts_at     timestamptz not null,
  ends_at       timestamptz not null,
  created_at    timestamptz not null default now()
);

alter table public.challenges enable row level security;

create policy "Anyone can view challenges"
  on public.challenges for select using (true);

-- ─── Updated_at trigger ─────────────────────────────────────────────────────
create or replace function public.set_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

create trigger profiles_updated_at
  before update on public.profiles
  for each row execute procedure public.set_updated_at();
