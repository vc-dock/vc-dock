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
      formats: ['es'],
      fileName: 'index',
    },
    cssCodeSplit: false,
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
