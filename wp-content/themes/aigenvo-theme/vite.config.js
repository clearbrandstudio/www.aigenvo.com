import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [],
  root: 'src',
  base: process.env.NODE_ENV === 'development' ? '/' : '/wp-content/themes/aigenvo-theme/dist/',
  build: {
    outDir: resolve(__dirname, 'dist'),
    available: true,
    assetsDir: '',
    manifest: true,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/main.js'),
        style: resolve(__dirname, 'src/style.css'),
      },
    },
  },
  server: {
    cors: true,
    strictPort: true,
    port: 3000,
    hmr: {
      host: 'localhost',
    },
  },
});
