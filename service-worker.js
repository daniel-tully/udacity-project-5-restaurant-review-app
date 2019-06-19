self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open('app-cache')
        .then(function(cache) {
            return cache.addAll(
                [
                  '/',
                  '/css/styles.css',
                  '/data/restaurants.json',
                  '/js/dbhelper.js',
                  '/js/main.js',
                  '/img/1_450.jpg',
                  '/img/1_800.jpg',
                  '/img/2_450.jpg',
                  '/img/2_800.jpg',
                  '/img/3_450.jpg',
                  '/img/3_800.jpg',
                  '/img/4_450.jpg',
                  '/img/4_800.jpg',
                  '/img/5_450.jpg',
                  '/img/5_800.jpg',
                  '/img/6_450.jpg',
                  '/img/6_800.jpg',
                  '/img/7_450.jpg',
                  '/img/7_800.jpg',
                  '/img/8_450.jpg',
                  '/img/8_800.jpg',
                  '/img/9_450.jpg',
                  '/img/9_800.jpg',
                  '/img/10_450.jpg',
                  '/img/10_800.jpg',
                  '/js/restaurant_info.js',
                  '/index.html',
                  '/restaurant.html',
                  'https://unpkg.com/leaflet@1.3.1/dist/leaflet.js',
                  'marker-icon-2x.png',
                  'marker-shadow.png'
                ]
            );
        })
        .catch((response) => {
            console.log(response);
        })
    );
});
  

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
      .catch((error) => {
        console.log(error.responseText);
      })
  );
});