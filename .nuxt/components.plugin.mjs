import { defineNuxtPlugin } from '#app/nuxt'
import { LazyIcon } from '#components'
const lazyGlobalComponents = [
  ["Icon", LazyIcon],
  
]

export default defineNuxtPlugin({
  name: 'nuxt:global-components',
  setup (nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component)
      nuxtApp.vueApp.component('Lazy' + name, component)
    }
  }
})
