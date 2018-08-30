importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.83c08c09b4081f64dae7.js",
    "revision": "40b6500211fe94abe27f46add93cc0e4"
  },
  {
    "url": "/_nuxt/layouts/default.cbce8cd59ad209daea4f.js",
    "revision": "4ea55239f2b772a01aca1fe9d8143a0d"
  },
  {
    "url": "/_nuxt/manifest.275eb77a790ae8bf7e89.js",
    "revision": "76e5c7983640d71e46388d804b502ffc"
  },
  {
    "url": "/_nuxt/pages/contact.e741d5b729b337ff63d5.js",
    "revision": "e01a98a5ff0ce9068bdee6edc6f42624"
  },
  {
    "url": "/_nuxt/pages/index.018ee52cebf9bce86526.js",
    "revision": "04e5a5a698b1f7a983545dc307b7a662"
  },
  {
    "url": "/_nuxt/pages/raspberrypi.c6daa226cf19510abdca.js",
    "revision": "cdd1596ae04e65d4e62087b11bc2c5f8"
  },
  {
    "url": "/_nuxt/pages/technicalsupport.e4112d2814673e44bf0c.js",
    "revision": "777a2c425a75dc46fdc7382613af4c76"
  },
  {
    "url": "/_nuxt/pages/website.343a9c62c7736c652fd0.js",
    "revision": "46846ddb1b99a633fbd67bfe5513db65"
  },
  {
    "url": "/_nuxt/vendor.b8c4719190ee19fef0b3.js",
    "revision": "78d41ea47cd205c96afd0bbce22f7cf9"
  }
], {
  "cacheId": "rogue-designs-nuxt",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('https://roguedesigns/.*'), workbox.strategies.networkFirst({"cacheName":"rogue-designs-cache","cacheExpiration":{"maxEntries":10,"maxAgeSeconds":3600}}), 'GET')





