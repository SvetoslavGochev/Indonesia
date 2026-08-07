const CACHE_VERSION = 'v83';
const STATIC_CACHE = `indo-static-${CACHE_VERSION}`;
const IMAGE_CACHE = `indo-images-${CACHE_VERSION}`;

const CORE_ASSETS = [
  './',
  './index.html',
  './robots.txt',
  './sitemap.xml',
  './style.css',
  './style.min.css',
  './assets/js/indo.translations.js',
  './assets/js/indo.data.js',
  './assets/js/indo.data.mock.js',
  './assets/js/indo.data.mode.js',
  './assets/js/indo.js',
  './assets/js/indo.min.js',
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
  './assets/tekst/ribaLuna.txt',
  './assets/tekst/ribaLuna.en.txt',
  './assets/tekst/sinioprastenOktopod.txt',
  './assets/tekst/sinioprastenOktopod.en.txt',
  './assets/tekst/круиз.txt',
  './assets/tekst/круиз.en.txt',
  './assets/tekst/круиз.de.txt',
  './assets/tekst/круиз.fr.txt',
  './assets/tekst/круиз.es.txt',
  './assets/tekst/круиз.id.txt',
  './assets/tekst/ламбо.txt',
  './assets/tekst/ламбо.en.txt',
  './assets/tekst/ламбо.de.txt',
  './assets/tekst/ламбо.fr.txt',
  './assets/tekst/ламбо.es.txt',
  './assets/tekst/ламбо.id.txt',
  './assets/tekst/sportstot7.txt',
  './assets/tekst/sportstot7.en.txt',
  './assets/tekst/sportstot7.de.txt',
  './assets/tekst/sportstot7.fr.txt',
  './assets/tekst/sportstot7.es.txt',
  './assets/tekst/sportstot7.id.txt',
  './assets/tekst/top3hranaInd.txt',
  './assets/tekst/top3hranaInd.en.txt',
  './assets/tekst/top3hranaInd.de.txt',
  './assets/tekst/top3hranaInd.fr.txt',
  './assets/tekst/top3hranaInd.es.txt',
  './assets/tekst/top3hranaInd.id.txt',
  './assets/tekst/plodowe.txt',
  './assets/tekst/plodowe.en.txt',
  './assets/tekst/plodowe.de.txt',
  './assets/tekst/plodowe.fr.txt',
  './assets/tekst/plodowe.es.txt',
  './assets/tekst/plodowe.id.txt',
  './assets/tekst/dyrweta.txt',
  './assets/tekst/dyrweta.en.txt',
  './assets/tekst/dyrweta.de.txt',
  './assets/tekst/dyrweta.fr.txt',
  './assets/tekst/dyrweta.es.txt',
  './assets/tekst/dyrweta.id.txt',
  './assets/tekst/parkove.txt',
  './assets/tekst/parkove.en.txt',
  './assets/tekst/parkove.de.txt',
  './assets/tekst/parkove.fr.txt',
  './assets/tekst/parkove.es.txt',
  './assets/tekst/parkove.id.txt',
  './assets/tekst/vlak.txt',
  './assets/tekst/vlak1.txt',
  './assets/tekst/vlak1.en.txt',
  './assets/tekst/vlak1.de.txt',
  './assets/tekst/vlak1.fr.txt',
  './assets/tekst/vlak1.es.txt',
  './assets/tekst/vlak1.id.txt',
  './assets/tekst/borneoPytuvane.txt',
  './assets/tekst/motorsport.txt',
  './assets/tekst/football2.txt',
  './assets/tekst/football2.en.txt',
  './assets/tekst/football2.de.txt',
  './assets/tekst/football2.fr.txt',
  './assets/tekst/football2.es.txt',
  './assets/tekst/football2.id.txt',
  './assets/tekst/UningBromo.bg.txt',
  './assets/tekst/UningBromo.en.txt',
  './assets/tekst/UningBromo.de.txt',
  './assets/tekst/UningBromo.fr.txt',
  './assets/tekst/UningBromo.es.txt',
  './assets/tekst/UningBromo.id.txt',
  './assets/tekst/pytepisPalembeng.txt',
  './assets/tekst/pytepisPalembeng.en.txt',
  './assets/tekst/pytepisPalembeng.de.txt',
  './assets/tekst/pytepisPalembeng.fr.txt',
  './assets/tekst/pytepisPalembeng.es.txt',
  './assets/tekst/pytepisPalembeng.id.txt',
  './assets/tekst/reki.txt',
  './assets/tekst/reki.en.txt',
  './assets/tekst/reki.de.txt',
  './assets/tekst/reki.fr.txt',
  './assets/tekst/reki.es.txt',
  './assets/tekst/reki.id.txt',
  './assets/tekst/vulkani.txt',
  './assets/tekst/vulkani.en.txt',
  './assets/tekst/vulkani.de.txt',
  './assets/tekst/vulkani.fr.txt',
  './assets/tekst/vulkani.es.txt',
  './assets/tekst/vulkani.id.txt',
  './assets/tekst/sladkowodniRibi.txt',
  './assets/tekst/zemniviwotni.txt',
  './assets/tekst/zemniviwotni.en.txt',
  './assets/tekst/zemniviwotni.de.txt',
  './assets/tekst/zemniviwotni.fr.txt',
  './assets/tekst/zemniviwotni.es.txt',
  './assets/tekst/zemniviwotni.id.txt',
  './assets/tekst/птици.txt',
  './assets/tekst/birds.en.txt',
  './assets/tekst/birds.de.txt',
  './assets/tekst/birds.fr.txt',
  './assets/tekst/birds.es.txt',
  './assets/tekst/birds.id.txt',
  './assets/favicons/favicon.svg'
];

const IMAGE_ASSETS = [
  './assets/images/indonesian-animals.avif',
  './assets/images/jakarta-stadium-aerial.avif',
  './assets/images/jakarta-stadium.avif',
  './assets/images/marine-dolphin.jpg',
  './assets/images/marine-sea-turtle.jpg',
  './assets/images/marine-manta-ray.jpg',
  './assets/images/marine-coral-fish.jpg',
  './assets/images/marine-seahorse.jpg',
  './assets/images/marine-whale-shark.jpg',
  './assets/images/ribaLuna.jpeg',
  './assets/images/sinOKtopod.jpeg',
  './assets/images/bird-javan-ostrich-480.webp',
  './assets/images/bird-javan-ostrich-960.webp',
  './assets/images/bird-cockatoo-480.webp',
  './assets/images/bird-cockatoo-960.webp',
  './assets/images/bird-harpy-eagle-480.webp',
  './assets/images/bird-harpy-eagle-960.webp',
  './assets/images/bird-hornbill-480.webp',
  './assets/images/bird-hornbill-960.webp',
  './assets/images/bird-paradise-bird-480.webp',
  './assets/images/bird-paradise-bird-960.webp',
  './assets/images/bird-green-parrot-480.webp',
  './assets/images/bird-green-parrot-960.webp',
  './assets/images/bird-javan-pheasant-480.webp',
  './assets/images/bird-javan-pheasant-960.webp',
  './assets/images/bird-myna-480.webp',
  './assets/images/bird-myna-960.webp',
  './assets/images/fruit-mangosteen.webp',
  './assets/images/fruit-jackfruit.webp',
  './assets/images/fruit-rambutan.webp',
  './assets/images/fruit-longan.webp',
  './assets/images/fruit-salak.webp',
  './assets/images/fruit-durian.webp',
  './assets/images/tree-ulin.jpg',
  './assets/images/tree-amber.webp',
  './assets/images/tree-teak.webp',
  './assets/images/tree-mangrove.webp',
  './assets/images/tree-casuarina.webp',
  './assets/images/tree-banyan.webp',
  './assets/images/park-komodo.jpg',
  './assets/images/park-bromo.jpg',
  './assets/images/park-ujung-kulon.jpg',
  './assets/images/park-gunung-leuser.jpg',
  './assets/images/park-lorentz.jpg',
  './assets/images/park-tanjung-puting.jpg',
  './assets/images/freshwater-gourami.webp',
  './assets/images/freshwater-catfish.webp',
  './assets/images/freshwater-tilapia.webp',
  './assets/images/freshwater-snakehead.webp',
  './assets/images/freshwater-prawn.webp',
  './assets/images/freshwater-nile-perch.webp',
  './assets/images/land-rhino.jpg',
  './assets/images/land-tiger.jpg',
  './assets/images/land-orangutan.jpg',
  './assets/images/land-komodo.jpg',
  './assets/images/land-elephant.jpg',
  './assets/images/land-babirusa.jpg'
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
