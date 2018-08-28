importScripts('/_nuxt/workbox.42554690.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.d8f37c75315892e4ee3f.js",
    "revision": "9ffdb8e13c6c31a78c28318121c707cc"
  },
  {
    "url": "/_nuxt/layouts/default.377917ec8e6d638a43ec.js",
    "revision": "719708f3deecd30d7406032f8f95a3ff"
  },
  {
    "url": "/_nuxt/manifest.2e462cda472f7e7d9ed3.js",
    "revision": "23c79f6d031258b35156b3c719d11638"
  },
  {
    "url": "/_nuxt/pages/contact.615efedc126b1019c524.js",
    "revision": "28ac9a9f92ab6a2f626203534a63a578"
  },
  {
    "url": "/_nuxt/pages/index.934eea46d5db572b9aba.js",
    "revision": "e4d9d0a3005c12bbee3d59f3f3b28298"
  },
  {
    "url": "/_nuxt/pages/raspberrypi.e2c9ca4e04bc1ddab256.js",
    "revision": "3e7fb9bfe9ae781436faed5b12b7c14f"
  },
  {
    "url": "/_nuxt/pages/technicalsupport.1c76dbec88cfb54001a2.js",
    "revision": "afe9acd621e41953c550913cc8cc95c8"
  },
  {
    "url": "/_nuxt/pages/website.ac3800c59c6ef8d18cfe.js",
    "revision": "59cc246bc9ef24e990434cb32a16ebeb"
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





