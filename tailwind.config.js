import forms from '@tailwindcss/forms'
import {zuiTokens} from './src/contants/zuiTokens'

export default {
  content: [
    './src/components/**/*.{js,vue,ts}',
    './src/layouts/**/*.vue',
    './src/pages/**/*.vue',
    './src/plugins/**/*.{js,ts}',
    './src/nuxt.config.{js,ts}',
    './src/app.vue',
  ],
  theme: {
    extend: {
      colors: {
        ...zuiTokens.colors,
      },
    },
    fontFamily: {
      ...zuiTokens.fontFamily.sans,
    },
  },
  safelist: zuiTokens.safelist,
  plugins: [
    forms,
  ],
  darkMode: 'class',
}
