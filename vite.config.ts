// @lovable.dev/vite-tanstack-config already includes the core TanStack/Vite plugins.
// Keep this file focused on deployment-specific overrides.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";
import { nitro } from "nitro/vite";

export default defineConfig({
  cloudflare: false,
  plugins: [
    nitro({
      preset: "vercel",
    }),
  ],
});
