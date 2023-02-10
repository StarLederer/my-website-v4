import { resolve } from 'path'
import { defineConfig } from 'vite'
import favicon from 'vite-plugin-favicons-inject';
import solidPlugin from 'vite-plugin-solid';
import unocss from '@unocss/vite';
import presetIcons from '@unocss/preset-icons';
import presetVariants from 'unocss-preset-mini-variants';
import transformerDirective from '@unocss/transformer-directives'
import unocssPresetWindblade from "./submodules/windblade/unocss/src";

export default defineConfig({
  base: "./",

  resolve: {
    alias: {
      '@ui': resolve('./submodules/ui'),
      '@me': resolve('./submodules/me'),
      'windblade': resolve('./submodules/windblade/unocss/src'),
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
        presetVariants(),
        presetIcons(),
        unocssPresetWindblade(),
      ],
      transformers: [
        transformerDirective(),
      ],
      theme: {
        windblade: {
          colors: {
            'surface-2': {
              base: { dark: { l: 0.5, c: 0.04, a: 0.2 }, light: { c: 0.2 } },
              on: [
                { dark: { l: 0.9, c: 0.06 } },
                { dark: { l: 0.6, c: 0.06 } },
                { dark: { l: 0.4, c: 0.04 } },
                { dark: { l: 0.2, c: 0.02 } },
              ],
            },
            'accent': {
              base: { dark: { l: 0.84, c: 0.16 }, light: { l: 0.6 } },
            },
          },
        },
      },
      extendTheme: [
        ({ windblade }) => {
          windblade.proportions = {
            's.2': 0.2,
            's.4': 0.4,
            's.5': 0.5,
            's.6': 0.6,
            's.8': 0.8,
            's': 1,
            'm.2': 2,
            'm.4': 4,
            'm.5': 5,
            'm.6': 6,
            'm.8': 8,
            'm': 10,
            'l.2': 20,
            'l.4': 40,
            'l.5': 50,
            'l.6': 60,
            'l.8': 80,
            'l': 100,
          };
        }
      ],
      rules: [
        ['highlight', { filter: 'brightness(1.1) saturate(0.8)' }],
        ['highlight+', { filter: 'brightness(1.2) saturate(0.6)' }]
      ],
    }),
  ],
})
