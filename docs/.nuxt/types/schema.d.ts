import { NuxtModule, RuntimeConfig } from '@nuxt/schema'
declare module '@nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/@nuxt+ui-pro@1.5.0_vue@3.5.13_typescript@5.6.3_/node_modules/@nuxt/ui-pro/modules/pro/index`
     */
    ["uiPro"]: typeof import("/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/@nuxt+ui-pro@1.5.0_vue@3.5.13_typescript@5.6.3_/node_modules/@nuxt/ui-pro/modules/pro/index").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/on/Desktop/git/my-hoge-ui/docs/modules/content-examples-code`
     */
    ["content-examples-code"]: typeof import("/Users/on/Desktop/git/my-hoge-ui/docs/modules/content-examples-code").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     */
    ["fonts"]: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/nuxt-site-config@2.2.21_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5_wk4fkgmxpzgvt3nakyuurn2kne/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]: typeof import("/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/nuxt-site-config@2.2.21_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5_wk4fkgmxpzgvt3nakyuurn2kne/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/plausible`
     */
    ["plausible"]: typeof import("@nuxtjs/plausible").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-component-meta`
     */
    ["componentMeta"]: typeof import("nuxt-component-meta").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-cloudflare-analytics`
     */
    ["cloudflareAnalytics"]: typeof import("nuxt-cloudflare-analytics").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/@nuxt+ui-pro@1.5.0_vue@3.5.13_typescript@5.6.3_/node_modules/@nuxt/ui-pro/modules/pro/index`
     */
    ["uiPro"]?: typeof import("/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/@nuxt+ui-pro@1.5.0_vue@3.5.13_typescript@5.6.3_/node_modules/@nuxt/ui-pro/modules/pro/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/on/Desktop/git/my-hoge-ui/docs/modules/content-examples-code`
     */
    ["content-examples-code"]?: typeof import("/Users/on/Desktop/git/my-hoge-ui/docs/modules/content-examples-code").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     */
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/nuxt-site-config@2.2.21_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5_wk4fkgmxpzgvt3nakyuurn2kne/node_modules/nuxt-site-config/dist/module`
     */
    ["site"]?: typeof import("/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/nuxt-site-config@2.2.21_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5_wk4fkgmxpzgvt3nakyuurn2kne/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/plausible`
     */
    ["plausible"]?: typeof import("@nuxtjs/plausible").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-component-meta`
     */
    ["componentMeta"]?: typeof import("nuxt-component-meta").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-cloudflare-analytics`
     */
    ["cloudflareAnalytics"]?: typeof import("nuxt-cloudflare-analytics").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/@nuxt+ui-pro@1.5.0_vue@3.5.13_typescript@5.6.3_/node_modules/@nuxt/ui-pro/modules/pro/index", Exclude<NuxtConfig["uiPro"], boolean>] | ["/Users/on/Desktop/git/my-hoge-ui/docs/modules/content-examples-code", Exclude<NuxtConfig["content-examples-code"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/nuxt-site-config@2.2.21_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5_wk4fkgmxpzgvt3nakyuurn2kne/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@nuxtjs/plausible", Exclude<NuxtConfig["plausible"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["nuxt-component-meta", Exclude<NuxtConfig["componentMeta"], boolean>] | ["nuxt-cloudflare-analytics", Exclude<NuxtConfig["cloudflareAnalytics"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
}
declare module 'nuxt/schema' {
  interface NuxtOptions {
    /**
     * Configuration for `/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/@nuxt+ui-pro@1.5.0_vue@3.5.13_typescript@5.6.3_/node_modules/@nuxt/ui-pro/modules/pro/index`
     * @see https://www.npmjs.com/package//Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/@nuxt+ui-pro@1.5.0_vue@3.5.13_typescript@5.6.3_/node_modules/@nuxt/ui-pro/modules/pro/index
     */
    ["uiPro"]: typeof import("/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/@nuxt+ui-pro@1.5.0_vue@3.5.13_typescript@5.6.3_/node_modules/@nuxt/ui-pro/modules/pro/index").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/on/Desktop/git/my-hoge-ui/docs/modules/content-examples-code`
     * @see https://www.npmjs.com/package//Users/on/Desktop/git/my-hoge-ui/docs/modules/content-examples-code
     */
    ["content-examples-code"]: typeof import("/Users/on/Desktop/git/my-hoge-ui/docs/modules/content-examples-code").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://www.npmjs.com/package/@nuxt/content
     */
    ["content"]: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     * @see https://www.npmjs.com/package/@nuxt/fonts
     */
    ["fonts"]: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/nuxt-site-config@2.2.21_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5_wk4fkgmxpzgvt3nakyuurn2kne/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/nuxt-site-config@2.2.21_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5_wk4fkgmxpzgvt3nakyuurn2kne/node_modules/nuxt-site-config/dist/module
     */
    ["site"]: typeof import("/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/nuxt-site-config@2.2.21_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5_wk4fkgmxpzgvt3nakyuurn2kne/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://www.npmjs.com/package/@nuxt/ui
     */
    ["ui"]: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxtjs/plausible`
     * @see https://www.npmjs.com/package/@nuxtjs/plausible
     */
    ["plausible"]: typeof import("@nuxtjs/plausible").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-component-meta`
     * @see https://www.npmjs.com/package/nuxt-component-meta
     */
    ["componentMeta"]: typeof import("nuxt-component-meta").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `nuxt-cloudflare-analytics`
     * @see https://www.npmjs.com/package/nuxt-cloudflare-analytics
     */
    ["cloudflareAnalytics"]: typeof import("nuxt-cloudflare-analytics").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? O : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? O : Record<string, any>
  }
  interface NuxtConfig {
    /**
     * Configuration for `/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/@nuxt+ui-pro@1.5.0_vue@3.5.13_typescript@5.6.3_/node_modules/@nuxt/ui-pro/modules/pro/index`
     * @see https://www.npmjs.com/package//Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/@nuxt+ui-pro@1.5.0_vue@3.5.13_typescript@5.6.3_/node_modules/@nuxt/ui-pro/modules/pro/index
     */
    ["uiPro"]?: typeof import("/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/@nuxt+ui-pro@1.5.0_vue@3.5.13_typescript@5.6.3_/node_modules/@nuxt/ui-pro/modules/pro/index").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/on/Desktop/git/my-hoge-ui/docs/modules/content-examples-code`
     * @see https://www.npmjs.com/package//Users/on/Desktop/git/my-hoge-ui/docs/modules/content-examples-code
     */
    ["content-examples-code"]?: typeof import("/Users/on/Desktop/git/my-hoge-ui/docs/modules/content-examples-code").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/mdc`
     * @see https://www.npmjs.com/package/@nuxtjs/mdc
     */
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/content`
     * @see https://www.npmjs.com/package/@nuxt/content
     */
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/fonts`
     * @see https://www.npmjs.com/package/@nuxt/fonts
     */
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/image`
     * @see https://www.npmjs.com/package/@nuxt/image
     */
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/nuxt-site-config@2.2.21_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5_wk4fkgmxpzgvt3nakyuurn2kne/node_modules/nuxt-site-config/dist/module`
     * @see https://www.npmjs.com/package//Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/nuxt-site-config@2.2.21_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5_wk4fkgmxpzgvt3nakyuurn2kne/node_modules/nuxt-site-config/dist/module
     */
    ["site"]?: typeof import("/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/nuxt-site-config@2.2.21_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5_wk4fkgmxpzgvt3nakyuurn2kne/node_modules/nuxt-site-config/dist/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-og-image`
     * @see https://www.npmjs.com/package/nuxt-og-image
     */
    ["ogImage"]?: typeof import("nuxt-og-image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/icon`
     * @see https://www.npmjs.com/package/@nuxt/icon
     */
    ["icon"]?: typeof import("@nuxt/icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/color-mode`
     * @see https://www.npmjs.com/package/@nuxtjs/color-mode
     */
    ["colorMode"]?: typeof import("@nuxtjs/color-mode").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/tailwindcss`
     * @see https://www.npmjs.com/package/@nuxtjs/tailwindcss
     */
    ["tailwindcss"]?: typeof import("@nuxtjs/tailwindcss").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/ui`
     * @see https://www.npmjs.com/package/@nuxt/ui
     */
    ["ui"]?: typeof import("@nuxt/ui").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxtjs/plausible`
     * @see https://www.npmjs.com/package/@nuxtjs/plausible
     */
    ["plausible"]?: typeof import("@nuxtjs/plausible").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@vueuse/nuxt`
     * @see https://www.npmjs.com/package/@vueuse/nuxt
     */
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-component-meta`
     * @see https://www.npmjs.com/package/nuxt-component-meta
     */
    ["componentMeta"]?: typeof import("nuxt-component-meta").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `nuxt-cloudflare-analytics`
     * @see https://www.npmjs.com/package/nuxt-cloudflare-analytics
     */
    ["cloudflareAnalytics"]?: typeof import("nuxt-cloudflare-analytics").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/devtools`
     * @see https://www.npmjs.com/package/@nuxt/devtools
     */
    ["devtools"]?: typeof import("@nuxt/devtools").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    /**
     * Configuration for `@nuxt/telemetry`
     * @see https://www.npmjs.com/package/@nuxt/telemetry
     */
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule<any> | string | [NuxtModule | string, Record<string, any>] | ["/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/@nuxt+ui-pro@1.5.0_vue@3.5.13_typescript@5.6.3_/node_modules/@nuxt/ui-pro/modules/pro/index", Exclude<NuxtConfig["uiPro"], boolean>] | ["/Users/on/Desktop/git/my-hoge-ui/docs/modules/content-examples-code", Exclude<NuxtConfig["content-examples-code"], boolean>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["/Users/on/Desktop/git/my-hoge-ui/node_modules/.pnpm/nuxt-site-config@2.2.21_magicast@0.3.5_rollup@4.28.1_vite@5.4.11_@types+node@22.10.1_terser@5_wk4fkgmxpzgvt3nakyuurn2kne/node_modules/nuxt-site-config/dist/module", Exclude<NuxtConfig["site"], boolean>] | ["nuxt-og-image", Exclude<NuxtConfig["ogImage"], boolean>] | ["@nuxt/icon", Exclude<NuxtConfig["icon"], boolean>] | ["@nuxtjs/color-mode", Exclude<NuxtConfig["colorMode"], boolean>] | ["@nuxtjs/tailwindcss", Exclude<NuxtConfig["tailwindcss"], boolean>] | ["@nuxt/ui", Exclude<NuxtConfig["ui"], boolean>] | ["@nuxtjs/plausible", Exclude<NuxtConfig["plausible"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["nuxt-component-meta", Exclude<NuxtConfig["componentMeta"], boolean>] | ["nuxt-cloudflare-analytics", Exclude<NuxtConfig["cloudflareAnalytics"], boolean>] | ["@nuxt/devtools", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      buildId: string,

      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   nitro: {
      envPrefix: string,
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<any>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: {
         theme: {
            light: string,

            default: string,

            dark: string,
         },

         preload: Array<string>,

         langs: Array<string>,

         highlighter: string,
      },

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<string>,
      },

      contentHead: boolean,

      documentDriven: boolean,

      respectPathCase: boolean,

      experimental: {
         clientDB: boolean,

         cacheContents: boolean,

         stripQueryParameters: boolean,

         advanceQuery: boolean,

         search: any,
      },
   },

   icon: {
      serverKnownCssClasses: Array<any>,
   },

   "nuxt-site-config": {
      stack: Array<{

      }>,

      version: string,

      debug: boolean,
   },

   "nuxt-og-image": {
      version: string,

      satoriOptions: any,

      resvgOptions: any,

      sharpOptions: any,

      publicStoragePath: string,

      defaults: {
         emojis: string,

         renderer: string,

         component: string,

         extension: string,

         width: number,

         height: number,

         cacheMaxAgeSeconds: number,
      },

      debug: boolean,

      baseCacheKey: string,

      fonts: Array<{

      }>,

      hasNuxtIcon: boolean,

      colorPreference: string,

      hasNuxtContent: boolean,

      strictNuxtContentPaths: any,

      isNuxtContentDocumentDriven: boolean,
   },
  }
  interface PublicRuntimeConfig {
   version: string,

   mdc: {
      useNuxtImage: boolean,

      components: {
         prose: boolean,

         map: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },
   },

   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: number,

      experimental: {
         stripQueryParameters: boolean,

         advanceQuery: boolean,

         clientDB: boolean,
      },

      respectPathCase: boolean,

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<string>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: {
         theme: {
            light: string,

            default: string,

            dark: string,
         },

         preload: Array<string>,

         langs: Array<string>,

         highlighter: string,
      },

      wsUrl: string,

      documentDriven: boolean,

      host: string,

      trailingSlash: boolean,

      search: any,

      contentHead: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },

   plausible: {
      enabled: boolean,

      hashMode: boolean,

      domain: string,

      ignoredHostnames: Array<string>,

      ignoreSubDomains: boolean,

      trackLocalhost: any,

      apiHost: string,

      autoPageviews: boolean,

      autoOutboundTracking: boolean,

      logIgnoredEvents: boolean,

      proxy: boolean,

      proxyBaseEndpoint: string,
   },

   cloudflareAnalytics: {
      token: string,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }