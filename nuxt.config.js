export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'plywanienazdrowie',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { hid: 'robots', name: 'robots', content: 'noindex, nofollow' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/sass/main.scss',
  ],


  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  modules: [
    // Doc: https://bootstrap-vue.js.org/docs/
    "bootstrap-vue/nuxt",
    // Simple usage
    'nuxt-leaflet',

    // With options
    ['nuxt-leaflet', { /* module options */ }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor: ["vue2-google-maps"]
  },
  plugins: [
    "@/plugins/vue2-google-maps.js"
  ],
}
