import { defineConfig } from 'vite';
import autoprefixer from 'autoprefixer';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default defineConfig({
  root: 'src/',
  build: {
    cssMinify: false,
    emptyOutDir: true,
    outDir: '../build',
  },
  css: {
    devSourcemap: true,
    postcss: {
      plugins: [autoprefixer()],
    },
  },
  plugins: [
    ViteImageOptimizer({
      png: {
        progressive: true,
        quality: 70,
      },
      jpg: {
        progressive: true,
        quality: 70,
      },
      jpeg: {
        progressive: true,
        quality: 70,
      },
      svg: {
        multipass: true,
        plugins: [
          'removeDesc',
          'removeDimensions',
          'removeTitle',
          'sortAttrs',
          {
            name: 'removeAttrs',
            params: {
              attrs: 'stroke.*',
            },
          },
        ],
      },
    }),
  ],
});
