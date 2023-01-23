import { resolve } from 'path'
import { defineConfig } from 'vite'
import favicon from 'vite-plugin-favicons-inject';
import solidPlugin from 'vite-plugin-solid';
import unocss from '@unocss/vite';
import presetIcons from '@unocss/preset-icons';
import transformerDirective from '@unocss/transformer-directives'
import unocssPresetWindblade from "./submodules/unocss-preset/unocss";

export default defineConfig({
  base: "./",

  resolve: {
    alias: {
      '@': resolve('./submodules'),
      '~': resolve('./src'),
    },
  },

  plugins: [
    favicon(
      './src/assets/logo.png',
      {
        icons: {
          favicons: true,
          android: false,
          appleIcon: false,
          appleStartup: false,
          yandex: false,
          windows: false,
        },
      }
    ),
    solidPlugin(),
    unocss({
      presets: [
        presetIcons(),
        unocssPresetWindblade(),
      ],
      transformers: [
        transformerDirective(),
      ],
    }),
  ],
})
