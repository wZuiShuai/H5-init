import type { Theme } from '@unocss/preset-mini'
import { defineConfig, presetAttributify, presetIcons, presetUno } from 'unocss'

export default defineConfig({
  shortcuts: [
    {
      'tab-button-active': 'op100 bg-gray-500:10',
    },
    [/^(flex|grid)-center/g, () => 'justify-center items-center'],
    // [/^(flex|grid)-y-center/g, () => 'items-center'],
  ],
  rules: [
    // ['h-screen', { height: 'calc(var(--vh, 1vh) * 100)' }],
  ],
  theme: <Theme>{
    colors: {
      subject: 'var(--c-ok)',
    },
  },
  presets: [
    presetUno(),
    presetAttributify(),
    presetIcons({
      scale: 1.2,
    }),
  ],
})
