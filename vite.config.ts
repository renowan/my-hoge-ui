import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import fs from 'fs';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [
        resolve(__dirname, "src/index.ts"),
        resolve(__dirname, "src/script/utils/index.ts"),
        // resolve(__dirname, "src/assets/css/z-table.css"),
      ],
      name: "ZeroboardUI",
      // the proper extensions will be added
      fileName: (format, entryName) => {
        if (entryName === 'index') return `zui.${format}`;
        return `${entryName}.${format}`;
      },
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
        // CSSファイルの出力を明示的に設定
        // assetFileNames: (chunkInfo) => {
        //   console.log('chunkInfo:', chunkInfo);
        //   if (chunkInfo.names.includes("z-table")) return "z-table.css";
        //   return "[name].[ext]";
        // },
      },
      plugins: [
        {
          name: 'copy-css',
          generateBundle(options, bundle) {
            this.emitFile({
              type: 'asset',
              fileName: 'z-table.css',
              source: fs.readFileSync(resolve(__dirname, "src/assets/css/z-table.css"), 'utf-8')
            });
          }
        }
      ]
    },
  },
});

/*
export default defineConfig({
  plugins: [vue()],
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
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
*/
