import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: 'src', // Tells Vite to use src as the root (optional, see step 4)
  build: {
    outDir: '../dist',
  },
});
