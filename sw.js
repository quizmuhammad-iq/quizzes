const CACHE_NAME = 'quizzes-v5';
const STATIC_FILES = [
  'index.html',
  'quiz.html',
  'manifest.json',
  'icon192.png',
  'icon512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(STATIC_FILES))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
