import type { Config } from 'tailwindcss'
import forms from '@tailwindcss/forms'
import * as zuiColorTokens from '../src/runtime/utils/zuiColorTokens'

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ...zuiColorTokens.getZuiColorTokens()
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'system-ui',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Oxygen-Sans',
          'Ubuntu',
          'Cantarell',
          'Helvetica Neue',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
        ],
      },
    },
  },
  plugins: [
    forms
  ],
  safelist: [
    {
      pattern: /(bg|text|border|ring)-(gray|primary|danger|caution)-(50|100|200|300|400|500|600|700|800|900)/,
      variants: ['hover'],
    },
    // ...heroicons,
  ],
}
