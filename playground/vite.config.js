import { resolve } from 'node:path'
import { cwd } from 'node:process'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { defineConfig } from 'vite'
import VueDevTools from 'vite-plugin-vue-devtools'

export default defineConfig(({ mode }) => {
  const plugins = [
    mode === 'development' && VueDevTools(),
    Vue(),
    UnoCSS(),
    AutoImport({
      imports: [
        'vue',
        'vue-router',
        {
          'vue-router': [
            'createRouter',
            'createWebHashHistory',
          ],
        },
        {
          pinia: [
            'createPinia',
            'defineStore',
          ],
        },
      ],
      eslintrc: {
        enabled: true,
        filepath: '../.eslintrc-auto-import.json',
        globalsPropValue: true,
      },
      dts: false,
    }),
    Components({
      dts: false,
    }),
  ].filter(Boolean)

  return {
    root: cwd(),
    base: '/',
    resolve: {
      alias: {
        '@play': resolve(cwd(), 'src'),
        '~play': resolve(cwd()),
        '@vc-dock/core': resolve(cwd(), '../packages/core/src/index.js'),
      },
    },
    server: {
      port: 3000,
    },
    build: {
      sourcemap: true,
    },
    plugins,
  }
})
