// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  target: 'static',
  srcDir: 'src/',
  devtools: { enabled: true },
  css: [
    '~/assets/css/tailwind.css',
    '~/assets/fontello/css/fontello.css',
    '~/assets/css/fontello-over-write.css',
    '~/assets/css/z-table.css',
  ],
  modules: ['@pinia/nuxt'],
  app: {
    head: {
      bodyAttrs: {
        id: 'z-default-layout'
      }
    },
  },
  colorMode: {
    preference: 'light',
  },
  // app: {
  //   baseURL: '/dev-zeroboard-ui-design-app.zeroboard-dev.jp/',
  // },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
