import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { basePath } from './src/constants';
import svgrPlugin from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin({
      include: '**/*.svg?react',
    }),
  ],
  server: {
    port: 3000,
    open: true,
  },
  base: `${basePath}/`,
});
