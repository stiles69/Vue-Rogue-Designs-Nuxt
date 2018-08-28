importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.61ddf865906c72bb55b1.js",
    "revision": "74c98949571312c8471b0aba2fdda8a2"
  },
  {
    "url": "/_nuxt/layouts/default.daff664b9c6fc3b468a2.js",
    "revision": "47a2ba6461dfe0499edc5a3f537413e6"
  },
  {
    "url": "/_nuxt/manifest.4985f91c6d3ef95e7745.js",
    "revision": "9a9e38e1b9aa522d2bd598ce84955265"
  },
  {
    "url": "/_nuxt/pages/contact.d2a6ddf5be10e0d08ca8.js",
    "revision": "712f6a80cc766a2bb2c67aad8ca8f34d"
  },
  {
    "url": "/_nuxt/pages/index.643618389ae96cfc365b.js",
    "revision": "9b40523c88b5df6001a519b29ef5d9bc"
  },
  {
    "url": "/_nuxt/pages/raspberrypi.6e1b3fcdb8576a77e0c2.js",
    "revision": "cef5e39878ba69a26e2b1a56cba2f35e"
  },
  {
    "url": "/_nuxt/pages/technicalsupport.f48995da274d99b7c123.js",
    "revision": "cee47a297a8da8a08f3aa5eec88ad4f0"
  },
  {
    "url": "/_nuxt/pages/website.e2c6e4d9c938d8e307a8.js",
    "revision": "119c18ceb74badba1539d55869238684"
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





