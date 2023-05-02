import { defineConfig } from 'vite';
import vueJsx from '@vitejs/plugin-vue-jsx';
import * as path from 'path';
import pkg from '../package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vueJsx()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '.vitepress/components'),
      '@': path.resolve(__dirname, '../src'),
      [pkg.name]: path.resolve(__dirname, '../src'),
      '@dist': path.resolve(__dirname, '../')
    }
  },
  ssr: {
    noExternal: [
      'lodash',
      'vue',
      'uuid',
      'moment'
    ] 
  }
});
