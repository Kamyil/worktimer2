// vite.config.ts
import { sveltekit } from "file:///Users/kamyil/Desktop/Projects/chrono-svelte/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { SvelteKitPWA } from "file:///Users/kamyil/Desktop/Projects/chrono-svelte/node_modules/@vite-pwa/sveltekit/dist/index.mjs";
import { defineConfig } from "file:///Users/kamyil/Desktop/Projects/chrono-svelte/node_modules/vitest/dist/config.js";
var vite_config_default = defineConfig({
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
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMva2FteWlsL0Rlc2t0b3AvUHJvamVjdHMvY2hyb25vLXN2ZWx0ZVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2thbXlpbC9EZXNrdG9wL1Byb2plY3RzL2Nocm9uby1zdmVsdGUvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2thbXlpbC9EZXNrdG9wL1Byb2plY3RzL2Nocm9uby1zdmVsdGUvdml0ZS5jb25maWcudHNcIjsvLyBAdHMtaWdub3JlIC0gQ2FuJ3QgZmluZCB0eXBlcyBmb3IgdGhhdFxuaW1wb3J0IHsgc3ZlbHRla2l0IH0gZnJvbSAnQHN2ZWx0ZWpzL2tpdC92aXRlJztcbmltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGVzdC9jb25maWcnO1xuaW1wb3J0IHsgU3ZlbHRlS2l0UFdBIH0gZnJvbSAnQHZpdGUtcHdhL3N2ZWx0ZWtpdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG5cdHBsdWdpbnM6IFtcblx0XHRzdmVsdGVraXQoKSxcblx0XHRTdmVsdGVLaXRQV0Eoe1xuXHRcdFx0c3JjRGlyOiAnLi9zcmMnLFxuXHRcdFx0bW9kZTogJ2RldmVsb3BtZW50Jyxcblx0XHRcdHN0cmF0ZWdpZXM6ICdpbmplY3RNYW5pZmVzdCcsXG5cdFx0XHRmaWxlbmFtZTogJ3Byb21wdC1zdy50cycsXG5cdFx0XHRzY29wZTogJy8nLFxuXHRcdFx0YmFzZTogJy8nLFxuXHRcdFx0bWFuaWZlc3Q6IHtcblx0XHRcdFx0c2hvcnRfbmFtZTogJ0Nocm9ubycsXG5cdFx0XHRcdG5hbWU6ICdDaHJvbm8nLFxuXHRcdFx0XHRzdGFydF91cmw6ICcvJyxcblx0XHRcdFx0c2NvcGU6ICcvJyxcblx0XHRcdFx0ZGlzcGxheTogJ3N0YW5kYWxvbmUnLFxuXHRcdFx0XHR0aGVtZV9jb2xvcjogJyM1YmJhZDUnLFxuXHRcdFx0XHRiYWNrZ3JvdW5kX2NvbG9yOiAnIzViYmFkNScsXG5cdFx0XHRcdGljb25zOiBbXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0c3JjOiAnL2FuZHJvaWQtY2hyb21lLTE5MngxOTIucG5nJyxcblx0XHRcdFx0XHRcdHNpemVzOiAnMTkyeDE5MicsXG5cdFx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UvcG5nJ1xuXHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0c3JjOiAnL2FuZHJvaWQtY2hyb21lLTM4NHgzODQucG5nJyxcblx0XHRcdFx0XHRcdHNpemVzOiAnMzg0eDI4NCcsXG5cdFx0XHRcdFx0XHR0eXBlOiAnaW1hZ2UvcG5nJ1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XVxuXHRcdFx0fSxcblx0XHRcdGluamVjdE1hbmlmZXN0OiB7XG5cdFx0XHRcdGdsb2JQYXR0ZXJuczogWydjbGllbnQvKiovKi57anMsY3NzLGljbyxwbmcsc3ZnLHdlYnAsd29mZix3b2ZmMn0nXVxuXHRcdFx0fSxcblx0XHRcdGRldk9wdGlvbnM6IHtcblx0XHRcdFx0ZW5hYmxlZDogdHJ1ZSxcblx0XHRcdFx0dHlwZTogJ21vZHVsZScsXG5cdFx0XHRcdG5hdmlnYXRlRmFsbGJhY2s6ICcvJ1xuXHRcdFx0fSxcblx0XHRcdC8vIGlmIHlvdSBoYXZlIHNoYXJlZCBpbmZvIGluIHN2ZWx0ZSBjb25maWcgZmlsZSBwdXQgaW4gYSBzZXBhcmF0ZSBtb2R1bGUgYW5kIHVzZSBpdCBhbHNvIGhlcmVcblx0XHRcdGtpdDoge31cblx0XHR9KVxuXHRdLFxuXHR0ZXN0OiB7XG5cdFx0aW5jbHVkZTogWydzcmMvKiovKi57dGVzdCxzcGVjfS57anMsdHN9J11cblx0fVxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQ0EsU0FBUyxpQkFBaUI7QUFDMUIsU0FBUyxvQkFBb0I7QUFDN0IsU0FBUyxvQkFBb0I7QUFFN0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDM0IsU0FBUztBQUFBLElBQ1IsVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLE1BQ1osUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sWUFBWTtBQUFBLE1BQ1osVUFBVTtBQUFBLE1BQ1YsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLFFBQ1QsWUFBWTtBQUFBLFFBQ1osTUFBTTtBQUFBLFFBQ04sV0FBVztBQUFBLFFBQ1gsT0FBTztBQUFBLFFBQ1AsU0FBUztBQUFBLFFBQ1QsYUFBYTtBQUFBLFFBQ2Isa0JBQWtCO0FBQUEsUUFDbEIsT0FBTztBQUFBLFVBQ047QUFBQSxZQUNDLEtBQUs7QUFBQSxZQUNMLE9BQU87QUFBQSxZQUNQLE1BQU07QUFBQSxVQUNQO0FBQUEsVUFDQTtBQUFBLFlBQ0MsS0FBSztBQUFBLFlBQ0wsT0FBTztBQUFBLFlBQ1AsTUFBTTtBQUFBLFVBQ1A7QUFBQSxRQUNEO0FBQUEsTUFDRDtBQUFBLE1BQ0EsZ0JBQWdCO0FBQUEsUUFDZixjQUFjLENBQUMsa0RBQWtEO0FBQUEsTUFDbEU7QUFBQSxNQUNBLFlBQVk7QUFBQSxRQUNYLFNBQVM7QUFBQSxRQUNULE1BQU07QUFBQSxRQUNOLGtCQUFrQjtBQUFBLE1BQ25CO0FBQUE7QUFBQSxNQUVBLEtBQUssQ0FBQztBQUFBLElBQ1AsQ0FBQztBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNMLFNBQVMsQ0FBQyw4QkFBOEI7QUFBQSxFQUN6QztBQUNELENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
