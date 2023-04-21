import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    hmr: {
      protocol: 'ws',
      port: 3000,
      host: 'localhost',
      timeout: 30 * 1000,
      overlay: true,
    },
  },
});
