/* [SYSTEM_START] :: Service Worker v3.0 */

// 🟢 設定版本號
// 每當你修改 index.html 或這個 sw.js，請修改這裡的數字 (例如 v1 -> v2)
// 這會觸發瀏覽器的更新機制，強制刪除舊快取
const CACHE_VERSION = 'fluo-pen-v8.8';

// 🟢 設定要「預先快取」的核心檔案
// 這些檔案在第一次載入時就會被下載並存起來
const PRECACHE_URLS = [
  './',
  './index.html',
  './icon.png'
];

// 安裝階段 (Install)
self.addEventListener('install', (event) => {
  console.log('[SW] Installing New Version:', CACHE_VERSION);

  // 1. 強制讓新的 SW 立刻進入 waiting 狀態，不需等待
  self.skipWaiting();

  // 2. 預先快取核心檔案
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => {
        console.log('[SW] Caching App Shell');
        return cache.addAll(PRECACHE_URLS);
      })
      .catch((err) => console.error('[SW] Precache Fail:', err))
  );
});

// 啟動階段 (Activate)
// 這是清理舊快取的最佳時機
self.addEventListener('activate', (event) => {
  console.log('[SW] Activated');

  // 1. 取得控制權，讓頁面立刻使用新的 SW，不需要重新整理
  event.waitUntil(
    Promise.all([
      self.clients.claim(),
      // 2. 清理舊版本的快取
      caches.keys().then((cacheNames) => {
        return Promise.all(
          cacheNames.map((cacheName) => {
            // 如果快取名稱跟現在的版本不一樣，就刪掉
            if (cacheName !== CACHE_VERSION) {
              console.log('[SW] Deleting Old Cache:', cacheName);
              return caches.delete(cacheName);
            }
          })
        );
      })
    ])
  );
});

// 攔截請求階段 (Fetch)
// 這是決定要讀快取還是讀網路的關鍵
self.addEventListener('fetch', (event) => {
  const requestUrl = new URL(event.request.url);

  // 策略 A: 針對 HTML 頁面 -> Network First (網路優先)
  // 為了確保你每次打開都是「最新版」，我們優先連網，連不上才讀快取
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          return caches.open(CACHE_VERSION).then((cache) => {
            cache.put(event.request, networkResponse.clone());
            return networkResponse;
          });
        })
        .catch(() => {
          // 沒網路時，回傳快取的 index.html
          return caches.match('./index.html');
        })
    );
    return;
  }

  // 策略 B: 針對外部資源 (Tailwind, Fonts) -> Stale-While-Revalidate
  // 有快取先給快取 (速度快)，背景偷偷去更新 (下次就變新的)
  if (requestUrl.hostname.includes('tailwindcss.com') || 
      requestUrl.hostname.includes('googleapis.com') ||
      requestUrl.hostname.includes('gstatic.com')) {
    
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchPromise = fetch(event.request).then((networkResponse) => {
          // 只快取成功的請求 (status 200)
          if(networkResponse && networkResponse.status === 200) {
             caches.open(CACHE_VERSION).then((cache) => {
               cache.put(event.request, networkResponse.clone());
             });
          }
          return networkResponse;
        }).catch(e => console.log('CDN fetch failed (offline)'));

        // 如果有快取就先給快取，沒有就等網路回應
        return cachedResponse || fetchPromise;
      })
    );
    return;
  }

  // 策略 C: 其他靜態資源 (Icon, Local JS) -> Cache First (快取優先)
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
/* [SYSTEM_END] */
