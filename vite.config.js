import { defineConfig } from "vite";
// vite 支持Vue sfc
import vue from "@vitejs/plugin-vue";
// vite 支持Vue jsx
import vueJsx from "@vitejs/plugin-vue-jsx";

// https://vitejs.dev/config/

const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};

export default defineConfig({
  // 添加库模式配置

  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: "./src/entry.ts",
      name: "BaseUI",
      fileName: "base-ui",
      // 导出模块格式
      formats: ["esm", "umd", "iife"],
    },
  },
  plugins: [
    // 添加sfc插件
    vue(),
    // 添加JSX插件
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
  ],
});
