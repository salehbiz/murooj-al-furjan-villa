import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    port: 5173,
    host: true,
    strictPort: true
  },
  // Ensure that all the subfolders are treated as public assets or resolved directly
  publicDir: false, // We will serve assets directly from the project root using Vite's default dev server behavior
});
