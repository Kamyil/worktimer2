export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-384x384.png","apple-touch-icon.png","browserconfig.xml","favicon.ico","favicon.png","manifest.json","mstile-150x150.png","robots.txt","safari-pinned-tab.svg","site.webmanifest","service-worker.js"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".json":"application/json",".txt":"text/plain",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-c56de55a.js","imports":["_app/immutable/start-c56de55a.js","_app/immutable/chunks/index-5a684132.js","_app/immutable/chunks/singletons-fd632842.js","_app/immutable/chunks/index-8a7608a3.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
