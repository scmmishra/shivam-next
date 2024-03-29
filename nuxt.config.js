const shiki = require("shiki");

export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Shivam Mishra",
    htmlAttrs: {
      lang: "en",
    },
    meta: [{ charset: "utf-8" }, { name: "viewport", content: "width=device-width, initial-scale=1" }, { hid: "description", name: "description", content: "" }],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.svg" }],
    script: [{ src: "https://cdn.splitbee.io/sb.js", async: true, crossorigin: "anonymous" }],
  },

  //   fontLoader: {
  //     url:
  //       'https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap',

  //     prefetch: true,
  //     preconnect: true,
  //   },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: ["~/plugins/enzo.client.js"],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/content
    "@nuxt/content",
    "@nuxtjs/robots",
  ],

  robots: {
    UserAgent: "*",
    Disallow: ["/cya-soon", "/thank-you"],
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      async highlighter() {
        const highlighter = await shiki.getHighlighter({
          // Complete themes: https://github.com/shikijs/shiki/tree/master/packages/themes
          theme: "min-dark",
        });

        return (rawCode, lang) => {
          return highlighter.codeToHtml(rawCode, lang);
        };
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    parallel: true,
    cache: true,
    hardsource: true,
  },
};
