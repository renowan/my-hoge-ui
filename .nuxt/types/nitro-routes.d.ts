// Generated by nitro
import type { Serialize, Simplify } from "nitropack/types";
declare module "nitropack/types" {
  type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T
  interface InternalApi {
    '/__nuxt_error': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/nuxt@3.14.1592_@parcel+watcher@2.5.0_@types+node@22.10.1_eslint@9.16.0_jiti@2.4.1__ioredis@5._vtrslbuywpo4z4pxqisbc57nf4/node_modules/nuxt/dist/core/runtime/nitro/renderer').default>>>>
    }
    '/api/_nuxt_icon/:collection': {
      'default': Simplify<Serialize<Awaited<ReturnType<typeof import('../../node_modules/.pnpm/@nuxt+icon@1.9.1_magicast@0.3.5_rollup@3.29.5_vite@5.4.11_@types+node@22.10.1_terser@5.37.0___wufow76iorvpo4gi7da2wy2wnu/node_modules/@nuxt/icon/dist/runtime/server/api').default>>>>
    }
  }
}
export {}