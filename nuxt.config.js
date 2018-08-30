const pkg = require('./package')

const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'universal',

  modules: [
    // Simple usage
    "@nuxtjs/pwa",
    "@nuxtjs/sitemap",
    "@nuxtjs/vuetify",
     ['@nuxtjs/google-tag-manager', {id: 'GTM-N4H694G'}]
  ],

  workbox: {
    runtimeCaching: [
      {
        urlPattern: 'https://roguedesigns/.*',
        strategyOptions: {
          cacheName: 'rogue-designs-cache',
          cacheExpiration: {
            maxEntries: 10,
            maxAgeSeconds: 60*60
          }
        }
      }
    ]
   },

  // Manifest
  manifest: {
    name: "Rogue Designs App",
    shortname: "RogueDesign",
    display: "standalone",
    start_url: ".",
    background_color: "#fff",
    icons: [
      {
        src: "/icons/icon-32x32.png",
        sizes: "32x32",
        type: "image/png"
      },
      {
        src: "/icons/icon-48x48.png",
        sizes: "48x48",
        type: "image/png"
      },
      {
        src: "/icons/icon-72x72.png",
        sizes: "72x72",
        type: "image/png"
      },
      {
        src: "/icons/icon-96x96.png",
        sizes: "96x96",
        type: "image/png"
      },
      {
        src: "/icons/icon-144x144.png",
        sizes: "144x144",
        type: "image/png"
      },
      {
        src: "/icons/icon-168x168.png",
        sizes: "168x168",
        type: "image/png"
      },
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/icons/icon-256x256.png",
        sizes: "256x256",
        type: "image/png"
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  },

   //Sitemap
   sitemap: {
    path: "/sitemap.xml",
    hostname: "https://roguedesigns.us",
    cacheTime: 1000 * 60 * 15,
    gzip: false,
    generate: true, // Enable me when using nuxt generate
    routes: [
      "/",
      {
        url: "/index.html",
        changefreq: "daily",
        priority: 1,
        lastmodISO: "2017-06-30T13:30:00.000Z"
      }
    ]
  },

   // Vuetify
   vuetify: {
    materialIcons: true,
    css: true,
    theme: {
      primary: "#3f9699",
      secondary: "#3f996f",
      accent: "#71ca9d",
      error: "#f44336",
      warning: "#FFAB91",
      info: "#2196f3",
      success: "#4caf50"
    }
  },

  /*
  ** Headers of the page
  */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Rogue Designs Newton Iowa 50208 Jasper County' },
      { name: 'title', content: 'Rogue Designs' },
      { name: 'author', content: 'Rogue Designs admin@roguedesigns.us' },
      { name: 'theme_color', content: '#71ca9d' },
      { name: 'lang', content: 'en' },
      { name: 'og:url', content: 'https://roguedesigns.us' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/icon-192x192.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#FFFFFF' },

  /*
  ** Global CSS
  */
  css: [
    'vuetify/src/stylus/main.styl'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  

  /*
  ** Nuxt.js modules
  */
  //modules: [
  //],

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      
      if (ctx.isServer) {
        config.externals = [
          nodeExternals({
            whitelist: [/^vuetify/]
          })
        ]
      }
    }
  }
}
