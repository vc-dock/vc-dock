import { resolve } from 'node:path'
import { cwd } from 'node:process'
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(cwd(), 'src/index.js'),
      name: '@vc-dock/core',
      fileName: format => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
        // 保留目录结构，用于按需导入
        // preserveModules: true,
        // preserveModulesRoot: 'src',
        assetFileNames(assetInfo) {
          if (assetInfo.names?.some(item => item.endsWith('.css'))) {
            return 'index.css' // 固定样式文件名称
          }
          return 'assets/[name].[ext]'
        },
      },
    },
    cssCodeSplit: true,
  },
  resolve: {
    alias: {
      '@core': resolve(cwd(), 'src'),
      '~core': resolve(cwd()),
    },
  },
})
