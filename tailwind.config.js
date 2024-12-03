import forms from '@tailwindcss/forms'

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

      },
    },
    fontFamily: {
    },
  },
  plugins: [
    forms,
  ],

  darkMode: 'class',
}
