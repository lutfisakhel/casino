// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  telemetry: false,

  experimental: {
    defaults: {
      nuxtLink: {
        trailingSlash: "remove",
      },
    },
  },

  app: {
    head: {
      charset: "utf-16",
      htmlAttrs: { lang: "ar-SA", dir: "rtl" },
      viewport: "width=device-width,initial-scale=1",
      title: "theturkbet",
      titleTemplate: "%s - theturkbet.com",
      meta: [
        { name: "apple-mobile-web-app-title", content: "theturkbet" },
        { name: "application-name", content: "theturkbet" },
        { name: "msapplication-TileColor", content: "#2b67bb" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#5bbad5" },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
    layoutTransition: { name: "layout", mode: "out-in" },
  },

  sitemap: {
    strictNuxtContentPaths: true,
    autoLastmod: true,
  },

  // docs https://nuxtseo.com/site-config/getting-started/background
  site: {
    url: "https://theturkbet.com",
    name: "theturkbet",

    identity: {
      type: "Person",
    },
    indexable: false, // TODO: IMPORTANT change this to true when ready
  },

  typescript: {
    strict: true,
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ["/"],
    },
  },

  colorMode: {
    classSuffix: "",
  },

  modules: [
    // docs https://tailwindcss.nuxtjs.org/getting-started/setup
    "@nuxtjs/tailwindcss",
    // docs https://color-mode.nuxtjs.org/#setup
    "@nuxtjs/color-mode",
    // docs https://image.nuxt.com/
    "@nuxt/image",
    // docs https://nuxt.com/modules/icon, search icons at https://icones.js.org/
    "nuxt-icon",
    // docs https://nuxt.com/modules/headlessui
    "nuxt-headlessui",
    "@vueuse/nuxt",
    // docs https://content.nuxt.com/
    "@nuxt/content",
    // docs https://nuxt.com/modules/robots
    "@nuxtjs/robots",
    // docs https://github.com/nuxt-modules/sitemap
    "@nuxtjs/sitemap",
    // docs https://google-fonts.nuxtjs.org/getting-started/setup
    "@nuxtjs/google-fonts",
    // docs https://github.com/nuxt-modules/critters#readme
    "@nuxtjs/critters",

    "@nuxtjs/fontaine",
    "nuxt-delay-hydration",
  ],

  delayHydration: {
    // enables nuxt-delay-hydration in dev mode for testing
    // NOTE: you should disable this once you've finished testing, it will break HMR
    // debug: process.env.NODE_ENV === "development",
    mode: "mount",
    replayClick: true,
    idleCallbackTimeout: 1000,
    exclude: ["/"],
  },

  critters: {
    // Options passed directly to critters: https://github.com/GoogleChromeLabs/critters#critters-2
    config: {
      // Default: 'media'
      preload: "swap",
    },
  },

  headlessui: {
    prefix: "",
  },

  robots: {
    rules: {
      UserAgent: "*",
      Disallow: "/contact-success",
      Sitemap: "https://theturkbet.com/sitemap.xml",
    },
  },

  content: {
    highlight: {
      theme: "dracula",
    },
    markdown: {
      anchorLinks: false,
    },
  },

  googleFonts: {
    download: true,
    display: "swap",
    families: {
      Roboto: { wght: [100, 400, 700, 900] },
    },
  },

  image: {
    // format: ['webp', 'jpeg'],
    // densities: [1],
    // presets: {
    //   medium: {
    //     modifiers: {
    //       w: 600,
    //     }
    //   },
    //   avatar: {
    //     modifiers: {
    //       w: 50,
    //     }
    //   }
    // }
  },

  build: {
    // to analyze run `npx nuxi analyze`
  },
});
