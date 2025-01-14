import { resolve } from 'node:path'
import { cwd } from 'node:process'
import Vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [Vue()],
  resolve: {
    alias: {
      '@': resolve(cwd(), 'src'),
    },
  },
  build: {
    lib: {
      entry: resolve(cwd(), 'src/index.js'),
      name: 'vc-dock',
      formats: ['es', 'umd'],
      fileName: (format) => {
        if (format === 'es')
          return `index.js`
        if (format === 'umd')
          return `index.cjs`
        return `index.${format}.js`
      },
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
