// sw.js - v5.0 (Cache Buster)
const CACHE_NAME = 'fluo-v5'; // 🟢 修改這裡的版本號，瀏覽器就會強制更新
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png'
  // icon-512.png 非必要快取，節省空間
];

self.addEventListener('install', (e) => {
  // 強制立即接管頁面
  self.skipWaiting(); 
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('activate', (e) => {
  // 清除舊版本的快取 (例如 v4, v3...)
  e.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(
        keyList.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  // 讓新 Service Worker 立即控制所有頁面
  return self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request))
  );
});
