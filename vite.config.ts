import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import Inspect from 'vite-plugin-inspect';
import dynamicImport from 'vite-plugin-dynamic-import';
import viteImagemin from 'vite-plugin-imagemin';

export default defineConfig({
  plugins: [
    viteImagemin({
      gifsicle: { optimizationLevel: 3 },
      mozjpeg: { quality: 75 },
      pngquant: { quality: [0.8, 0.9] },
      svgo: { plugins: [{ removeViewBox: false }] },
    }),

    dynamicImport(),
    Inspect(),
    compression({ algorithm: 'brotliCompress' }),
    react(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
  optimizeDeps: {
    include: ['lodash-es'], // Pre-bundle specific dependencies
  },
  build: {
    target: 'es2015', // Target modern browsers
  },
});
