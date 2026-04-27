const CACHE = 'hoist-test-v2';
const ASSETS = ['./', './index.html', './manifest.json'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Never cache Firebase / Google API calls — they need to be live
  if(url.hostname.includes('firebaseio.com') ||
     url.hostname.includes('googleapis.com') ||
     url.hostname.includes('gstatic.com') ||
     url.hostname.includes('firebase')){
    return;
  }
  // Same-origin only: cache-first with network fallback
  if(url.origin !== self.location.origin) return;

  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      const copy = resp.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy)).catch(()=>{});
      return resp;
    }).catch(() => caches.match('./index.html')))
  );
});

self.addEventListener('message', e => {
  if(e.data === 'skipWaiting') self.skipWaiting();
});
