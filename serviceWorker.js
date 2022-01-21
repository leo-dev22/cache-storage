const cacheName = "cache#v1";
const assets = ["/", "/index.html", "/style.css", "/assets/repas2.jpg"];

//save in cache storage
self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(assets);
    })
  );
});
//fetching the cache storage

self.addEventListener("fetch", (e) => {
  //   console.log(e.request);
  e.respondWith(
    caches.match(e.request).then((cache) => {
      return cache || fetch(e.request);
    })
  );
});
