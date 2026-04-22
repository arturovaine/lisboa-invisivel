import { defineConfig } from 'vite';
import { resolve } from 'path';
import { cpSync } from 'fs';

export default defineConfig({
  base: '/lisboa-invisivel/',
  plugins: [
    {
      name: 'copy-static',
      closeBundle() {
        cpSync('img',    'dist/img',    { recursive: true });
        cpSync('assets', 'dist/assets', { recursive: true });
      }
    }
  ],
  build: {
    rollupOptions: {
      input: {
        main:      resolve(__dirname, 'index.html'),
        dados:     resolve(__dirname, 'dados.html'),
        historias: resolve(__dirname, 'historias.html'),
        servicos:  resolve(__dirname, 'servicos.html'),
        sobre:     resolve(__dirname, 'sobre.html'),
      }
    }
  }
});
