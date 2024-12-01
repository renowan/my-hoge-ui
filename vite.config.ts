import { defineConfig } from "vite";
import { resolve } from "path";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [
        resolve(__dirname, "src/index.ts"),
        resolve(__dirname, "src/script/utils/index.ts"),
        resolve(__dirname, "src/assets/css/z-table.css"),
      ],
      name: "ZeroboardUI",
      // the proper extensions will be added
      fileName: (format, entryName) => {
        if (entryName === "index") return `zui.${format}`;
        if (entryName === "z-table") return `zui.z-table.css`;
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
        assetFileNames: (chunkInfo) => {
          if (chunkInfo.names.includes("z-table")) return "z-table.css";
          return "[name].[ext]";
        },
      },
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
