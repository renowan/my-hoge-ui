import path from 'path';
import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/*',
          dest: 'assets'
        }
      ]
    })
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "ZeroboardUI",
      // the proper extensions will be added
      fileName: "zui",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        exports: 'named',
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src/'),
      '~': path.resolve(__dirname, './src/'),
      '#components': '/src/test/setup/components.ts',
    },
  },
});
