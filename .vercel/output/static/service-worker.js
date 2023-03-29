const l = [
  "/_app/immutable/chunks/virtual_pwa-register-c0e23f21.js",
  "/_app/immutable/chunks/0-9c402b5b.js",
  "/_app/immutable/chunks/1-9606c608.js",
  "/_app/immutable/chunks/2-3f73f626.js",
  "/_app/immutable/chunks/_page-95f8a586.js",
  "/_app/immutable/chunks/index-5a684132.js",
  "/_app/immutable/chunks/index-8a7608a3.js",
  "/_app/immutable/chunks/preload-helper-41c905a7.js",
  "/_app/immutable/chunks/singletons-fd632842.js",
  "/_app/immutable/start-6c05ed3a.js",
  "/_app/immutable/components/error.svelte-1fed14f7.js",
  "/_app/immutable/chunks/workbox-window.prod.es5-295a6886.js",
  "/_app/immutable/assets/_layout-8a707527.css",
  "/_app/immutable/components/pages/_layout.svelte-4d22fbf3.js",
  "/_app/immutable/assets/_page-55437986.css",
  "/_app/immutable/components/pages/_page.svelte-7e8ce336.js",
  "/_app/immutable/modules/pages/_page.ts-4f32e096.js"
], m = [
  "/android-chrome-192x192.png",
  "/android-chrome-384x384.png",
  "/apple-touch-icon.png",
  "/browserconfig.xml",
  "/favicon-16x16.png",
  "/favicon-32x32.png",
  "/favicon.ico",
  "/favicon.png",
  "/manifest.json",
  "/mstile-150x150.png",
  "/robots.txt",
  "/safari-pinned-tab.svg",
  "/site.webmanifest"
], o = "1680129848913", a = self, i = `cache${o}`, p = l.concat(m), h = new Set(p);
a.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(i).then((s) => s.addAll(p)).then(() => {
      a.skipWaiting();
    })
  );
});
a.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (s) => {
      for (const t of s)
        t !== i && await caches.delete(t);
      a.clients.claim();
    })
  );
});
async function u(e) {
  const s = await caches.open(`offline${o}`);
  try {
    const t = await fetch(e);
    return s.put(e, t.clone()), t;
  } catch (t) {
    const c = await s.match(e);
    if (c)
      return c;
    throw t;
  }
}
a.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url), t = s.protocol.startsWith("http"), c = s.hostname === self.location.hostname && s.port !== self.location.port, n = s.host === self.location.host && h.has(s.pathname), r = e.request.cache === "only-if-cached" && !n;
  t && !c && !r && e.respondWith(
    (async () => n && await caches.match(e.request) || u(e.request))()
  );
});
