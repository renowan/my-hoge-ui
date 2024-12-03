import path from 'path'
import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        'pinia',
        {
          '@vueuse/core': [
            'defineProps',
            'defineEmits',
            'defineExpose',
            'withDefaults',
          ],
        },
      ],
    }),
    AutoImport({
      dirs: ['utils', 'composables'],
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['/src/test/setup/component-plugin.ts'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '~': path.resolve(__dirname, './src/'),
      '#components': '/src/test/setup/components.ts',
    },
  },
})
