import type { Component } from 'vue'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
  return {
    provide: {
      i18nLabel: (defaults: Record<string, any>) => {
        console.log('i18nLabel')
        const ZFormLabel = nuxtApp.vueApp._context.components.ZFormLabel as Component
        console.log('ZFormLabel', ZFormLabel)
        if (ZFormLabel && ZFormLabel.props) {
          console.log('if')
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
