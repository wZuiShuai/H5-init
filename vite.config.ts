import { URL, fileURLToPath } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import Unocss from 'unocss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // 将所有带swiper-的标签名都视为自定义元素
          isCustomElement: tag => tag.includes('swiper-'),
        },
      },
    }),
    AutoImport({
      imports: [
        'vue',
      ],
      dts: true,
    }),
    Components({
      resolvers: [VantResolver()],
      dts: true,
    }),
    Unocss(),
  ],
  base: './', // 设置打包路径
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  server: {
    // 服务器主机名，如果允许外部访问，可设置为 "0.0.0.0"
    host: '0.0.0.0',
    // port: 8080,
    // open: true,
    // cors: true,
    
    // 跨域代理配置
    // proxy: {
    //   '/api': {
    //     target: 'http://golf.zhenyujm.com/admin',
    //     changeOrigin: true,
    //     rewrite: path => path.replace(/^\/api/, ''),
    //   },
    // },
  },
})
