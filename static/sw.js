importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.820176aad99d189df176.js",
    "revision": "efa4078c7482dc9145998b81548bf802"
  },
  {
    "url": "/_nuxt/layouts/default.edf0f082ed42630784a6.js",
    "revision": "47af7e5e750cfe975391a3f36f7edf6e"
  },
  {
    "url": "/_nuxt/manifest.0a28c31ceadd9ff19287.js",
    "revision": "b20a7d5851b27ab5c78dbae17ae2eb0e"
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





