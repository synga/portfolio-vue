var CACHE_STATIC_NAME = 'static-v2';
var CACHE_DYNAMIC_NAME = 'dynamic-v2';

self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
        .then(function(cache) {
            cache.addAll([
                '/',
                '/index.html',
                '/dist/build.js',
                '/dist/0.build.js',
                '/dist/1.build.js',
                '/dist/2.build.js',
                '/dist/cartao.jpg',
                '/dist/dark-triangles.png',
                '/dist/intersection.png',
                '/dist/swirl_pattern.png',
                'https://fonts.googleapis.com/css?family=Bungee|Chau+Philomene+One|Baloo+Bhaijaan'
            ]);
        })
    )
});

function isInArray(string, array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] === string) {
            return true
        }
    }
    return false;
}

self.addEventListener('install', function(event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME)
        .then(function(cache) {
            cache.addAll(CACHE_ITEMS);
        })
    )
});

self.addEventListener('activate', function(event) {
    event.waitUntil(
        caches.keys()
        .then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function(event) {
    var url = "https://portfolio-gabriel-barreto.firebaseio.com/";
    if (event.request.url.indexOf(url) > -1) {
        event.respondWith(
            caches.open(CACHE_DYNAMIC_NAME)
            .then(function(cache) {
                return fetch(event.request)
                    .then(function(res) {
                        cache.put(event.request, res.clone());
                        return res;
                    });
            })
        );
        // route matching pra retornar o conteudo se estiver presente no cache
    } else if (isInArray(event.request.url, CACHE_ITEMS)) {
        event.respondWith(
            caches.match(event.request)
        );
    } else {
        event.respondWith(
            caches.match(event.request)
            .then(function(response) {
                if (response) {
                    return response;
                } else {
                    return fetch(event.request)
                        .then(function(res) {
                            return caches.open(CACHE_DYNAMIC_NAME)
                                .then(function(cache) {
                                    cache.put(event.request.url, res.clone());
                                    return res;
                                })
                        })
                        .catch(function(err) {

                        });
                }
            })
        );
    }
});