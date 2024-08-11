/* eslint-disable @typescript-eslint/no-explicit-any */
import { presetMini, defineConfig, presetUno, presetAttributify } from 'unocss';

export default defineConfig({
  presets: [presetAttributify({}), presetUno(), presetMini()],
  theme: {
    colors: {},
    size: {
      xs: '4px',
      sm: '8px',
      md: '16px',
      lg: '24px',
      xl: '48px',
    },
  },
  rules: [
    ['no-shadow', { 'box-shadow': 'none' }],
    ['q-ma-auto', { margin: 'auto' }],
    ['q-pa-auto', { padding: 'auto' }],
    [
      /^q-m[xy]-(\d+)$/,
      ([, d]: any) => ({
        'margin-left': `${d / 4}rem`,
        'margin-right': `${d / 4}rem`,
      }),
    ],
    [/^q-ma-(\d+)$/, ([, d]: any) => ({ margin: `${d / 4}rem` })],
    [
      /^q-p[xy]-(\d+)$/,
      ([, d]: any) => ({
        'padding-left': `${d / 4}rem`,
        'padding-right': `${d / 4}rem`,
      }),
    ],
    [/^q-pa-(\d+)$/, ([, d]: any) => ({ padding: `${d / 4}rem` })],
    [
      /^q-p[xy]-(.*)$/,
      ([, c], { theme }: any) => {
        if (theme.size[c])
          return {
            'padding-left': theme.size[c],
            'padding-right': theme.size[c],
          };
      },
    ],
    [
      /^q-pa-(.*)$/,
      ([, c], { theme }: any) => {
        if (theme.size[c]) return { padding: theme.size[c] };
      },
    ],
  ],
});
