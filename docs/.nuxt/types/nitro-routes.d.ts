// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/api/content-examples-code': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/content-examples-code.get').default>>>>
    }
    '/api/pulls.json': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/pulls.json.get').default>>>>
    }
    '/api/releases.json': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/releases.json.get').default>>>>
    }
    '/api/search.json': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/search.json.get').default>>>>
    }
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.1_eslint@9.16.0_jiti@2.4.1__ioredis@5._vtrslbuywpo4z4pxqisbc57nf4/node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/content-examples-code/:component?': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../server/api/content-examples-code.get').default>>>>
    }
    '/api/_mdc/highlight': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/@nuxtjs+mdc@0.9.0_magicast@0.3.5_rollup@4.28.1/node_modules/@nuxtjs/mdc/dist/runtime/highlighter/event-handler').default>>>>
    }
    '/__og-image__/font/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/nuxt-og-image@3.1.1_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5.37._2wtrrgbk7c5icwd34rsai7rxqe/node_modules/nuxt-og-image/dist/runtime/server/routes/font').default>>>>
    }
    '/__og-image__/image/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/nuxt-og-image@3.1.1_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5.37._2wtrrgbk7c5icwd34rsai7rxqe/node_modules/nuxt-og-image/dist/runtime/server/routes/image').default>>>>
    }
    '/__og-image__/static/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/nuxt-og-image@3.1.1_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5.37._2wtrrgbk7c5icwd34rsai7rxqe/node_modules/nuxt-og-image/dist/runtime/server/routes/image').default>>>>
    }
    '/api/_nuxt_icon/:collection': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/@nuxt+icon@1.9.1_magicast@0.3.5_rollup@3.29.5_vite@5.4.11_@types+node@22.10.1_terser@5.37.0___wufow76iorvpo4gi7da2wy2wnu/node_modules/@nuxt/icon/dist/runtime/server/api').default>>>>
    }
    '/api/component-meta': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/nuxt-component-meta@0.9.0_magicast@0.3.5_rollup@4.28.1/node_modules/nuxt-component-meta/dist/runtime/server/api/component-meta.get').default>>>>
    }
    '/api/component-meta.json': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/nuxt-component-meta@0.9.0_magicast@0.3.5_rollup@4.28.1/node_modules/nuxt-component-meta/dist/runtime/server/api/component-meta.get').default>>>>
    }
    '/api/component-meta/:component?': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/nuxt-component-meta@0.9.0_magicast@0.3.5_rollup@4.28.1/node_modules/nuxt-component-meta/dist/runtime/server/api/component-meta.get').default>>>>
    }
    '/api/_content/query/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/@nuxt+content@2.13.2_ioredis@5.4.1_magicast@0.3.5_nuxt@3.14.1592_@parcel+watcher@2.5.0_@types_34hkfh3u3odoy6lvffewnevwga/node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/@nuxt+content@2.13.2_ioredis@5.4.1_magicast@0.3.5_nuxt@3.14.1592_@parcel+watcher@2.5.0_@types_34hkfh3u3odoy6lvffewnevwga/node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/query': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/@nuxt+content@2.13.2_ioredis@5.4.1_magicast@0.3.5_nuxt@3.14.1592_@parcel+watcher@2.5.0_@types_34hkfh3u3odoy6lvffewnevwga/node_modules/@nuxt/content/dist/runtime/server/api/query').default>>>>
    }
    '/api/_content/cache.1733847270275.json': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/@nuxt+content@2.13.2_ioredis@5.4.1_magicast@0.3.5_nuxt@3.14.1592_@parcel+watcher@2.5.0_@types_34hkfh3u3odoy6lvffewnevwga/node_modules/@nuxt/content/dist/runtime/server/api/cache').default>>>>
    }
    '/api/_content/navigation/:qid/**:params': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/@nuxt+content@2.13.2_ioredis@5.4.1_magicast@0.3.5_nuxt@3.14.1592_@parcel+watcher@2.5.0_@types_34hkfh3u3odoy6lvffewnevwga/node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation/:qid': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/@nuxt+content@2.13.2_ioredis@5.4.1_magicast@0.3.5_nuxt@3.14.1592_@parcel+watcher@2.5.0_@types_34hkfh3u3odoy6lvffewnevwga/node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/api/_content/navigation': {
      'get': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/@nuxt+content@2.13.2_ioredis@5.4.1_magicast@0.3.5_nuxt@3.14.1592_@parcel+watcher@2.5.0_@types_34hkfh3u3odoy6lvffewnevwga/node_modules/@nuxt/content/dist/runtime/server/api/navigation').default>>>>
    }
    '/_ipx/**': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../../node_modules/.pnpm/@nuxt+image@1.8.1_ioredis@5.4.1_magicast@0.3.5_rollup@4.28.1/node_modules/@nuxt/image/dist/runtime/ipx').default>>>>
    }
  }
}
export {}