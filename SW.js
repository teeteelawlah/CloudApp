self.addEventListener("install", e => {
	e.waitUntil(
		caches.open("static").then(cache =>{
			return cache.addAll(["./index.html", "./src/cloud.css", "./images/android-chrome-192x192.png"]);
		})
	);
});

self.addEventListener("fetch", e => {
	e.respondWith(
		caches.match(e.request).then(response =>{
			return response || fetch(e.request);
		})
	)
});