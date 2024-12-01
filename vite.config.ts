import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";
import fs from "fs";

// https://vitejs.dev/config/
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
      plugins: [
        {
          name: "copy-css",
          generateBundle(options, bundle) {
            this.emitFile({
              type: "asset",
              fileName: "assets/css/z-table.css",
              source: fs.readFileSync(
                resolve(__dirname, "src/assets/css/z-table.css"),
                "utf-8"
              ),
            });
          },
        },
      ],
    },
  },
});
