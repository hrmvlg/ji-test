import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
  plugins: [react(), svgr()],                  // 3.1. плагин React :contentReference[oaicite:4]{index=4}
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),  // 3.2. алиас для SCSS :contentReference[oaicite:5]{index=5}
      '@': path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/scss/_variables.scss";`  // 3.3. глобальный импорт переменных :contentReference[oaicite:6]{index=6}
      }
    }
  }
});

