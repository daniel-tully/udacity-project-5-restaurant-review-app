/**
 * base assets
 */
const baseCache = [
  '/',
  '/css/styles.css',
  '/data/restaurants.json',
  '/js/dbhelper.js',
  '/js/main.js',
  '/js/restaurant_info.js',
  '/index.html',
  '/restaurant.html'
];

/**
 * install
 */
self.addEventListener('install', (event) => {
  event.waitUntil(
    // open new cache
    caches.open('app-cache')
    .then((cache) => {
      // add array of urls
      return cache.addAll(baseCache);
    })
    // error output
    .catch((response) => {
      console.log(response);
    })
  );
});

/**
 * fetch
 */
self.addEventListener('fetch', (event) => {
  event.respondWith(
    // check cache
    caches.open('app-cache')
    .then(function(cache) {
      // for match
      return cache.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        // or go to network
        return fetch(event.request)
        .then(function(response) {
          // and add to cache
          cache.put(event.request, response.clone());
          // then return fetch response
          return response;
        });
      })
    })
  )
});