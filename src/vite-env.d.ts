/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SITE_DOMAIN: string
  readonly VITE_SITE_NAME: string
  readonly VITE_SITE_DESCRIPTION: string
  readonly VITE_API_URL: string
  readonly VITE_USE_PROXY: string
  readonly VITE_SUPABASE_URL: string
  readonly VITE_SUPABASE_ANON_KEY: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
