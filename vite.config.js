import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  base: '/GOSIM.org/',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'), // @ => src
      '@assets': path.resolve(__dirname, './src/assets'), // @assets => src/assets
    },
  },
});