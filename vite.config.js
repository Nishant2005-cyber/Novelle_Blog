import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('@tinymce')) {
              return 'tinymce-vendor';
            }
            if (id.includes('appwrite')) {
              return 'appwrite-vendor';
            }
            if (id.includes('react') || id.includes('@reduxjs') || id.includes('react-router')) {
              return 'react-vendor';
            }
            return 'vendor';
          }
        },
      },
    },
  },
})

