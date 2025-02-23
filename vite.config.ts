import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import analyze from 'rollup-plugin-analyzer';
import Inspect from 'vite-plugin-inspect';
import dynamicImport from 'vite-plugin-dynamic-import';

export default defineConfig({
  plugins: [dynamicImport(), Inspect(), compression({ algorithm: 'brotliCompress' }), react(), analyze()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
});
