const CACHE = 'satha-cache-v1';
self.addEventListener('install', evt => {
  evt.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll(['/', '/index.html', '/src/main.tsx']);
    })
  );
});
self.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(cached => {
      return cached || fetch(evt.request);
    })
  );
});
