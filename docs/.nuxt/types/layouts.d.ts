import type { ComputedRef, MaybeRef } from 'vue'
export type LayoutKey = "default" | "docs"
declare module "../../../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.1_eslint@9.16.0_jiti@2.4.1__ioredis@5._vtrslbuywpo4z4pxqisbc57nf4/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: MaybeRef<LayoutKey | false> | ComputedRef<LayoutKey | false>
  }
}