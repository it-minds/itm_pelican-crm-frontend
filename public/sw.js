if (!self.define) {
	let e,
		s = {};
	const i = (i, n) => (
		(i = new URL(i + '.js', n).href),
		s[i] ||
			new Promise(s => {
				if ('document' in self) {
					const e = document.createElement('script');
					(e.src = i), (e.onload = s), document.head.appendChild(e);
				} else (e = i), importScripts(i), s();
			}).then(() => {
				let e = s[i];
				if (!e) throw new Error(`Module ${i} didn’t register its module`);
				return e;
			})
	);
	self.define = (n, r) => {
		const t = e || ('document' in self ? document.currentScript.src : '') || location.href;
		if (s[t]) return;
		let o = {};
		const c = e => i(e, t),
			l = { module: { uri: t }, exports: o, require: c };
		s[t] = Promise.all(n.map(e => l[e] || c(e))).then(e => (r(...e), o));
	};
}
define(['./workbox-3ea082d2'], function (e) {
	'use strict';
	self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				// { url: 'assets/index.39127f52.js', revision: null },
				// { url: 'assets/index.49fad93e.css', revision: null },
				{ url: 'index.html', revision: 'ffcb1728922bf55ec001198348ea3c26' },
				{ url: 'registerSW.js', revision: '1872c500de691dce40960bb85481de07' },
				{ url: 'manifest.webmanifest', revision: 'a600056e489c805cc31e489fc1f63742' },
			],
			{}
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL('index.html')));
});
