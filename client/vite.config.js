import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Uppercase ".PNG" assets (e.g. src/assets/images/youtube-channel.PNG)
  // are not matched by Vite's default asset types, so include them here.
  assetsInclude: ['**/*.PNG'],
  server: {
    open: true,
    port: 5173,
    proxy: {
      // Proxy API requests to the Express backend in development so the
      // frontend can use relative "/api" URLs (no CORS / hardcoded origin).
      // The base URL in src/services/api.js (VITE_API_URL) stays "/api".
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
      },
    },
  },
})
