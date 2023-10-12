import { defineConfig } from 'vite'
import path from 'path'
import vue from '@vitejs/plugin-vue'
import topLevelAwait from 'vite-plugin-top-level-await'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/webtool',
  plugins: [
    vue(),
    topLevelAwait({
      // The export name of top-level await promise for each chunk module
      promiseExportName: '__tla',
      // The function to generate import names of top-level await promise in each chunk module
      promiseImportName: (i) => `__tla_${i}`
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          "@import 'src/assets/sass/common.scss';@import 'src/assets/sass/theme.scss';@import 'src/assets/sass/layout.scss';"
      }
    }
  },
  resolve: {
    alias: {
      // 设置路径
      '~': path.resolve(__dirname, './'),
      // 设置别名
      '@': path.resolve(__dirname, './src')
    },
    extensions: ['.mjs', '.js', '.ts', '.jsx', '.tsx', '.json', '.vue']
  },
  // build: {
  //   assetsPublicPath: './assets' //此处为修改的地方，这里加.
  // },
  server: {
    host: 'localhost', // 指定服务器主机名
    port: 4090, // 指定服务器端口
    hmr: true,
    open: true, // 在服务器启动时自动在浏览器中打开应用程序
    https: false // 是否开启 https
  }
})
