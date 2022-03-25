/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'vite';
import eslint from '@rollup/plugin-eslint';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    {
      ...eslint(),
      enforce: 'pre',
      apply: 'build',
    },
    react(),
  ],
});
