/*
 * @Author       : 魏威 <1209562577@qq.com>
 * @Date         : 2023-07-17 14:17 周1
 * @Description  :
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    dts({
      clearPureImport: true,
      cleanVueFileName: true,
      insertTypesEntry: true,
      staticImport: true,
      outDir: ["./dist/types"],
      tsconfigPath: "./tsconfig.json"
    })
  ],
  build: {
    cssMinify: "esbuild",
    lib: {
      entry: "./src/components/index.ts"
    },
    rollupOptions: {
      external: ["vue"],
      input: ["./src/components/index.ts"],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "dist/es",
          globals: {
            vue: "Vue"
          }
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "dist/lib",
          globals: {
            vue: "Vue"
          }
        }
      ]
    }
  }
});
