// sw.js - v5.0
// 🟢 這裡改了版本號，瀏覽器就會知道要重新下載所有檔案
const CACHE_NAME = 'fluo-v5'; 

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(['./', './index.html', './manifest.json', './icon-192.png'])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(res => res || fetch(e.request)));
});
