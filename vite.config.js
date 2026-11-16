import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  },
  // The prerender bundle (src/entry-server.jsx) carries its own copy of React
  // and the router, so scripts/prerender.mjs runs it without module resolution.
  ssr: {
    noExternal: true,
  },
});
