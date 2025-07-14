import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { basePath } from './src/constants';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'docs',
  },
  base: `${basePath}/`,
});
