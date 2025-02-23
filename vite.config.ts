import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import compression from 'vite-plugin-compression';
export default defineConfig({
  plugins: [compression({ algorithm: 'brotliCompress' }), react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  base: '/',
  build: {
    cssCodeSplit: true, // Enable CSS splitting
  },
  optimizeDeps: {
    exclude: ['lodash', 'moment'], // Exclude heavy libraries
  },
});
