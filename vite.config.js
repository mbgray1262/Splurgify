import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',  // Output directory for the build
  },
  // No 'root' key here since we’re using the project root (where index.html lives)
});
