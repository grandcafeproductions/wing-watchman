
ALTER TABLE public.subscriptions
  ADD COLUMN IF NOT EXISTS dep_gate text,
  ADD COLUMN IF NOT EXISTS dep_terminal text,
  ADD COLUMN IF NOT EXISTS arr_gate text,
  ADD COLUMN IF NOT EXISTS arr_terminal text,
  ADD COLUMN IF NOT EXISTS arr_baggage text,
  ADD COLUMN IF NOT EXISTS dep_delayed integer,
  ADD COLUMN IF NOT EXISTS arr_delayed integer,
  ADD COLUMN IF NOT EXISTS duration integer,
  ADD COLUMN IF NOT EXISTS status_normalized text,
  ADD COLUMN IF NOT EXISTS arr_timezone text;
