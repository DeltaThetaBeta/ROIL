/* ROIL offline support: keeps the app's own files cached so it opens with no signal.
   Your issues and photos are NOT handled here; they live in the phone's browser storage.
   Bump VERSION whenever you upload new files, so devices pick up the update. */
const VERSION = 'roil-pages-8';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys()
    .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== location.origin) return;
  const key = e.request.mode === 'navigate' ? new URL('./', self.registration.scope).href : e.request.url;
  e.respondWith(caches.open(VERSION).then(async cache => {
    const hit = await cache.match(key, {ignoreSearch: true});
    const fresh = fetch(e.request).then(r => { if (r.ok) cache.put(key, r.clone()); return r; }).catch(() => hit);
    return hit || fresh;   // open instantly from cache, refresh in the background
  }));
});
