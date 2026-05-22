# Vercel Deployment

This app builds for Vercel through Nitro.

## Vercel settings

- Install command: `npm ci`
- Build command: `npm run build`
- Output: generated automatically at `.vercel/output`

## Environment variables

Add these in Vercel Project Settings:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_URL`
- `SUPABASE_PUBLISHABLE_KEY`
- `SUPABASE_SERVICE_ROLE_KEY`
- `VITE_LOGIN_USERNAME`
- `VITE_LOGIN_PASSWORD`

The service role key is only used by server routes. Do not expose it with a `VITE_` prefix.

## Supabase Edge Function

The flight dispatch worker in `supabase/functions/dispatch-jobs` is still a Supabase Edge Function and should be deployed with Supabase, not Vercel.

It also needs:

- `SUPABASE_URL`
- `SUPABASE_SERVICE_ROLE_KEY`
- `AIRLABS_API_KEY`
