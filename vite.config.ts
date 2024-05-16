/// <reference types="vitest" />
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    exclude: ['**/node_modules/**', '**/tests-examples/**', '**/tests/**'],
    environment: 'jsdom',
    globals: true,
    setupFiles: './test-setup.ts',
  },
});
