import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
import analyze from 'rollup-plugin-analyzer';

export default defineConfig({
  plugins: [compression({ algorithm: 'brotliCompress' }), react(), analyze()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
});
