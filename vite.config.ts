import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import type { UserConfig } from 'vite';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
  },
} as UserConfig);
