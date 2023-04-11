export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["android-chrome-192x192.png","android-chrome-384x384.png","apple-touch-icon.png","browserconfig.xml","favicon.ico","favicon.png","manifest.json","mstile-150x150.png","robots.txt","safari-pinned-tab.svg","site.webmanifest","service-worker.js"]),
	mimeTypes: {".png":"image/png",".xml":"application/xml",".ico":"image/vnd.microsoft.icon",".json":"application/json",".txt":"text/plain",".svg":"image/svg+xml",".webmanifest":"application/manifest+json"},
	_: {
		entry: {"file":"_app/immutable/start-0d3f656b.js","imports":["_app/immutable/start-0d3f656b.js","_app/immutable/chunks/index-3a54b012.js","_app/immutable/chunks/singletons-efdd871c.js","_app/immutable/chunks/index-a91180d9.js","_app/immutable/chunks/preload-helper-41c905a7.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
