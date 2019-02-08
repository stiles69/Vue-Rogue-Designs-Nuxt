importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/app.4b0d22bdd46ef2fffb20.js",
    "revision": "6c2512208d00ff43ee993f71626f8163"
  },
  {
    "url": "/_nuxt/layouts/default.9a1025ed4b87f82634fc.js",
    "revision": "5a0c6b3a3020c46240c7dc8ab053b395"
  },
  {
    "url": "/_nuxt/manifest.0f30e29045427587b8a5.js",
    "revision": "084136f0e391d45ceabf12d9fb9ced47"
  },
  {
    "url": "/_nuxt/pages/contact.3517eff26067e94e4f2b.js",
    "revision": "212a55d7c1defa38fc5b172b011e4890"
  },
  {
    "url": "/_nuxt/pages/index.ba63c6c766109b7e64ab.js",
    "revision": "c8d79dc1f6175184dc0f07a49b545b57"
  },
  {
    "url": "/_nuxt/pages/raspberrypi.383ae1a968ebb4878bce.js",
    "revision": "aaea5227f8fc7f8227f40b03bb99dbc1"
  },
  {
    "url": "/_nuxt/pages/technicalsupport.240af6f3e562fddbaecd.js",
    "revision": "8cb7c81583c51595e8f358f02a8aa6d4"
  },
  {
    "url": "/_nuxt/pages/website.977227eadbc7d885ee0b.js",
    "revision": "b218f5b26717c6cd97c4a119b76f1b3f"
  },
  {
    "url": "/_nuxt/vendor.d6ec0b25f542aaefbd26.js",
    "revision": "0ec9c10b42273b73c1eb9fa0f1cafe1b"
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

workbox.routing.registerRoute(new RegExp('https://www.roguedesigns/.*'), workbox.strategies.networkFirst({"cacheName":"rogue-designs-cache","cacheExpiration":{"maxEntries":10,"maxAgeSeconds":3600}}), 'GET')





