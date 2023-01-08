import { resolve } from 'path'
import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid';
import unocss from '@unocss/vite';
import presetIcons from '@unocss/preset-icons';
import transformerDirective from '@unocss/transformer-directives'
import unocssPresetWrapp from "./submodules/unocss-preset";

export default defineConfig({
  base: "./",

  resolve: {
    alias: {
      '@': resolve('./submodules'),
      '~': resolve('./src'),
    },
  },

  plugins: [
    solidPlugin(),
    unocss({
      presets: [
        presetIcons(),
        unocssPresetWrapp(),
      ],
      transformers: [
        transformerDirective(),
      ],
    }),
  ],
})
