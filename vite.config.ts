// @ts-ignore - Can't find types for that
import { sveltekit } from "@sveltejs/kit/vite";
import { SvelteKitPWA } from "@vite-pwa/sveltekit";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [
    sveltekit(),
    SvelteKitPWA({
      srcDir: "./src",
      mode: "development",
      strategies: "injectManifest",
      filename: "prompt-sw.ts",
      scope: "/",
      base: "/",
      manifest: {
        short_name: "Chrono",
        name: "Chrono",
        start_url: "/",
        scope: "/",
        display: "standalone",
        theme_color: "#5bbad5",
        background_color: "#5bbad5",
        icons: [
          {
            src: "/android-chrome-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/android-chrome-384x384.png",
            sizes: "384x284",
            type: "image/png",
          },
        ],
      },
      injectManifest: {
        globPatterns: ["client/**/*.{js,css,ico,png,svg,webp,woff,woff2}"],
      },
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "/",
      },
      // if you have shared info in svelte config file put in a separate module and use it also here
      kit: {},
    }),
  ],
  test: {
    include: ["src/**/*.{test,spec}.{js,ts}"],
  },
});
