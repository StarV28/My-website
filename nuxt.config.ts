// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  modules: [
    "@pinia/nuxt",
    "@nuxtjs/i18n",
    "@nuxt/image",
    "@nuxt/icon",
    "nuxt-simple-sitemap",
    "nuxt-simple-robots",
  ],
  icon: {
    aliases: {}, // сюда потом добавим свои кастомные
    serverBundle: {
      collections: ["uil", "mdi"],
    },
  },
  plugins: [],
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [{}],
      link: [{ rel: "icon", type: "image/x-icon", href: "/logo.ico" }],
    },
  },
  css: ["./app/assets/main.scss", "./app/assets/fonts.css"],
  typescript: {
    strict: true,
  },
  devServer: {
    port: 3000,
    host: "localhost",
  },
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  vite: {
    optimizeDeps: {
      include: ["@vue/devtools-core", "@vue/devtools-kit"],
    },
  },
  //--Languages-------------------------------------//
  i18n: {
    baseUrl: "https://my.wpslab.app",
    langDir: "locales/",
    strategy: "prefix_except_default",
    defaultLocale: "en",
    locales: [
      { code: "en", name: "English", file: "en.json" },
      { code: "de", name: "Deutsch", file: "de.json" },
      { code: "ua", name: "Українська", file: "ua.json" },
      { code: "ru", name: "Русский ", file: "ru.json" },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: "lang",
      redirectOn: "root",
      alwaysRedirect: false,
    },
  },
  //---------------------------------------//
  nitro: {},
});
