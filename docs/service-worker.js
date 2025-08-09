const CACHE_NAME = 'enceladus-anomaly-archive-v1';
const urlsToCache = [
    '/',
    '/index.html',
    'https://cdn.tailwindcss.com',
    'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap',
    'https://fonts.googleapis.com/css2?family=Source+Code+Pro:wght@400&display=swap',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js',
    'https://assets.mixkit.co/sfx/preview/mixkit-sci-fi-drone-background-471.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-analog-glitch-sound-effect-1025.mp3',
    'https://assets.mixkit.co/sfx/preview/mixkit-retro-video-game-power-up-2184.mp3',
    'https://raw.githubusercontent.com/magicrulerr-art/aicollabs/refs/heads/main/docs/assets/content.json'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});
