import { defineConfig, presetAttributify, presetIcons, presetUno, presetWind } from 'unocss'

export default defineConfig({
  presets: [
    presetUno(),
    presetIcons(),
    presetAttributify(),
    presetWind(),
  ],
})
