import pkg from "./package";

import nodeExternals from "webpack-node-externals";

export const mode = "universal";
export const modules = [
  // Simple usage
  "@nuxtjs/onesignal",
  ["@nuxtjs/pwa", { icon: false }],
  "@nuxtjs/sitemap",
  "@nuxtjs/vuetify",
  "@nuxtjs/webpackmonitor",
  ["@nuxtjs/google-tag-manager", { id: "GTM-N4H694G", layer: "dataLayer", pageTracking: true }]
];
export const manifest = {
  name: "Rogue Designs App",
  shortname: "RogueDesign",
  display: "standalone",
  start_url: ".",
  background_color: "#fff",
  icons: [
    {
      src: "/icons/icon-16x16.png",
      sizes: "16x16",
      type: "image/png"
    },
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
      src: "/icons/icon-76x76.png",
      sizes: "76x76",
      type: "image/png"
    },
    {
      src: "/icons/icon-96x96.png",
      sizes: "96x96",
      type: "image/png"
    },
    {
      src: "/icons/icon-120x120.png",
      sizes: "120x120",
      type: "image/png"
    },
    {
      src: "/icons/icon-144x144.png",
      sizes: "144x144",
      type: "image/png"
    },
    {
      src: "/icons/icon-150x150.png",
      sizes: "150x150",
      type: "image/png"
    },
    {
      src: "/icons/icon-168x168.png",
      sizes: "168x168",
      type: "image/png"
    },
    {
      src: "/icons/icon-180x180.png",
      sizes: "180x180",
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
    },
    {
      src: "/icons/apple-touch-icon.png",
      sizes: "192x192",
      type: "image/png"
    },
    {
      src: "/icons/msapplication-icon-144x144.png",
      sizes: "144x144",
      type: "image/png"
    },
    {
      src: "/icons/mstile-150x150.png",
      sizes: "150x150",
      type: "image/png"
    },
    {
      src: "/icons/safari-pinned-tab",
      sizes: "23x23",
      type: "image/svg"
    }
  ]
};
export const oneSignal = {
  init: {
    appId: "3d126221-8c62-4e88-a36e-ed951740870c",
    allowLocalhostAsSecureOrigin: true,
    welcomeNotification: {
      disable: true
    }
  }
};
export const sitemap = {
  path: "/sitemap.xml",
  hostname: "https://www.roguedesigns.us",
  cacheTime: 1000 * 60 * 15,
  gzip: false,
  generate: true,
  routes: [
    "/",
    {
      url: "/index.html",
      changefreq: "daily",
      priority: 1,
      lastmodISO: "2017-06-30T13:30:00.000Z"
    }
  ]
};
export const vuetify = {
  materialIcons: true,
  css: true,
  theme: {
    primary: "#690909",
    secondary: "#9c6935",
    accent: "#9d3c30",
    error: "#f44336",
    warning: "#FFAB91",
    info: "#2196f3",
    success: "#4caf50"
  }
};
export const head = {
  title: "Rogue Designs Website",
  meta: [
    { charset: "utf-8" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { hid: "description", name: "description", content: "Rogue Designs Newton Iowa 50208 Jasper County" },
    { name: "title", content: "Rogue Designs" },
    { name: "author", content: "Rogue Designs admin@roguedesigns.us" },
    { name: "theme_color", content: "#71ca9d" },
    { name: "lang", content: "en" },
    { name: "og:url", content: "https://www.roguedesigns.us" }
  ],
  link: [
    { rel: "icon", type: "image/x-icon", href: "/icon-192x192.ico" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons" }
  ]
};
export const loading = { color: "#690909" };
export const css = [
  "vuetify/src/stylus/main.styl"
];
export const build = {
  /*
  ** You can extend webpack config here
  */
  extend(config, ctx) {
    if (ctx.isServer) {
      config.externals = [
        nodeExternals({
          whitelist: [/^vuetify/]
        })
      ];
    }
  }
};
