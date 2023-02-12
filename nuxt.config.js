export default {

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'British Bro',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Открой свою кофейню с прибылью от 110 000 ₽' },
      { name: 'format-detection', content: 'telephone=no' },

      {
        property: 'og:title',
        content: 'British Bro',
        vmid: 'og:title',
        hid: 'og:title'
      },
      {
        property: 'og:description',
        content: 'Открой свою кофейню с прибылью от 110 000 ₽',
        vmid: 'og:description',
        hid: 'og:description'
      },

      // remove next line before production deploy
      { name: 'robots', content: 'noindex, nofollow' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'apple-touch-icon', type: 'image/png', sizes: '180x180', href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
      { rel: 'manifest', href: '/site.webmanifest' },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // 'element-ui/lib/theme-chalk/index.css'
    'normalize.css/normalize.css',
    '@/assets/style/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['vue-scrollto/nuxt', {
      offset: -200
    }],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
