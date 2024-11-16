// vite.config.js
import { defineConfig } from "file:///E:/CoManD-UI/comand-frontend-framework/node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import vue from "file:///E:/CoManD-UI/comand-frontend-framework/node_modules/@vitejs/plugin-vue/dist/index.mjs";
var __vite_injected_original_dirname = "E:\\CoManD-UI\\comand-frontend-framework";
var vite_config_default = defineConfig({
  plugins: [
    vue()
  ],
  build: {
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.js"),
      name: "comand-frontend-framework",
      fileName: "comand-frontend-framework"
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        globals: {
          vue: "Vue"
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxDb01hbkQtVUlcXFxcY29tYW5kLWZyb250ZW5kLWZyYW1ld29ya1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcQ29NYW5ELVVJXFxcXGNvbWFuZC1mcm9udGVuZC1mcmFtZXdvcmtcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L0NvTWFuRC1VSS9jb21hbmQtZnJvbnRlbmQtZnJhbWV3b3JrL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgcmVzb2x2ZSB9IGZyb20gXCJwYXRoXCJcclxuaW1wb3J0IHZ1ZSBmcm9tICdAdml0ZWpzL3BsdWdpbi12dWUnXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgICAgdnVlKCldLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCBcInNyYy9pbmRleC5qc1wiKSxcclxuICAgICAgbmFtZTogXCJjb21hbmQtZnJvbnRlbmQtZnJhbWV3b3JrXCIsXHJcbiAgICAgIGZpbGVOYW1lOiBcImNvbWFuZC1mcm9udGVuZC1mcmFtZXdvcmtcIlxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFtcInZ1ZVwiXSxcclxuICAgICAgb3V0cHV0OiB7XHJcbiAgICAgICAgZ2xvYmFsczoge1xyXG4gICAgICAgICAgdnVlOiBcIlZ1ZVwiXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59KVxyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTBTLFNBQVMsb0JBQW9CO0FBQ3ZVLFNBQVMsZUFBZTtBQUN4QixPQUFPLFNBQVM7QUFGaEIsSUFBTSxtQ0FBbUM7QUFLekMsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ0wsSUFBSTtBQUFBLEVBQUM7QUFBQSxFQUNULE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU8sUUFBUSxrQ0FBVyxjQUFjO0FBQUEsTUFDeEMsTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLElBQ1o7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxLQUFLO0FBQUEsTUFDaEIsUUFBUTtBQUFBLFFBQ04sU0FBUztBQUFBLFVBQ1AsS0FBSztBQUFBLFFBQ1A7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
