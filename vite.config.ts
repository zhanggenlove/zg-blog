import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const { resolve }  = require('path')

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: [{find:'@', replacement: resolve(__dirname,'src')}]
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import './src/assets/common/variable.scss';`
      }
    }
  }
})
