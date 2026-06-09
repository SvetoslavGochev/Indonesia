const CACHE_VERSION = 'v18';
const STATIC_CACHE = `indo-static-${CACHE_VERSION}`;
const IMAGE_CACHE = `indo-images-${CACHE_VERSION}`;

const CORE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './assets/js/indo.translations.js',
  './assets/js/indo.data.js',
  './assets/js/indo.js',
  './assets/tekst/indotext.txt',
  './assets/tekst/indotext.en.txt',
  './assets/tekst/indotext.de.txt',
  './assets/tekst/indotext.fr.txt',
  './assets/tekst/indotext.es.txt',
  './assets/tekst/indotext.id.txt',
  './assets/tekst/Delfin.txt',
  './assets/tekst/Delfin.en.txt',
  './assets/tekst/Delfin.de.txt',
  './assets/tekst/Delfin.fr.txt',
  './assets/tekst/Delfin.es.txt',
  './assets/tekst/Delfin.id.txt',
  './assets/tekst/waterworld.txt',
  './assets/tekst/waterworld.en.txt',
  './assets/tekst/waterworld.de.txt',
  './assets/tekst/waterworld.fr.txt',
  './assets/tekst/waterworld.es.txt',
  './assets/tekst/waterworld.id.txt',
  './assets/tekst/птици.txt',
  './assets/favicons/favicon.svg'
];

const IMAGE_ASSETS = [
  './assets/images/indonesian-animals.avif',
  './assets/images/indonesian-animals.webp',
  './assets/images/indonesian-animals.jpg',
  './assets/images/Screenshot 2026-05-29 142129.png',
  './assets/images/jakarta-stadium-aerial.avif',
  './assets/images/jakarta-stadium-aerial.webp',
  './assets/images/jakarta-stadium-aerial.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then((cache) => cache.addAll(CORE_ASSETS)),
      caches.open(IMAGE_CACHE).then((cache) => cache.addAll(IMAGE_ASSETS))
    ])
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys
          .filter((key) => key !== STATIC_CACHE && key !== IMAGE_CACHE)
          .map((key) => caches.delete(key))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;

  if (request.method !== 'GET') {
    return;
  }

  const url = new URL(request.url);
  if (url.origin !== self.location.origin) {
    return;
  }

  if (request.mode === 'navigate') {
    event.respondWith(networkFirst(request));
    return;
  }

  if (request.destination === 'image') {
    event.respondWith(cacheFirst(request, IMAGE_CACHE));
    return;
  }

  if (request.destination === 'script' || request.destination === 'style') {
    event.respondWith(staleWhileRevalidate(request, STATIC_CACHE));
    return;
  }

  event.respondWith(cacheFirst(request, STATIC_CACHE));
});

async function networkFirst(request) {
  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.ok) {
      const cache = await caches.open(STATIC_CACHE);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const cachedResponse = await caches.match(request);
    return cachedResponse || caches.match('./index.html');
  }
}

async function cacheFirst(request, cacheName) {
  const cachedResponse = await caches.match(request);
  if (cachedResponse) {
    return cachedResponse;
  }

  try {
    const networkResponse = await fetch(request);
    if (networkResponse && networkResponse.ok) {
      const cache = await caches.open(cacheName);
      cache.put(request, networkResponse.clone());
    }
    return networkResponse;
  } catch (error) {
    const fallback = await caches.match(request);
    if (fallback) {
      return fallback;
    }
    throw error;
  }
}

async function staleWhileRevalidate(request, cacheName) {
  const cache = await caches.open(cacheName);
  const cachedResponse = await cache.match(request);

  const networkPromise = fetch(request)
    .then((networkResponse) => {
      if (networkResponse && networkResponse.ok) {
        cache.put(request, networkResponse.clone());
      }
      return networkResponse;
    })
    .catch(() => null);

  return cachedResponse || networkPromise;
}
