import type { Component } from 'vue'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      i18nLabel: (defaults: Record<string, any>) => {
        const ZFormLabel = nuxtApp.vueApp._context.components.ZFormLabel as Component
        if (ZFormLabel && ZFormLabel.props) {
          // 既存のデフォルト値を保持しながら新しい値で上書き
          Object.keys(defaults).forEach(key => {
            if (ZFormLabel.props[key] && ZFormLabel.props[key].default !== undefined) {
              ZFormLabel.props[key].default = defaults[key]
            }
          })
        }
      }
    }
  }
})
