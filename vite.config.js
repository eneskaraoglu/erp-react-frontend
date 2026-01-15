import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@api': path.resolve(__dirname, './src/api'),
      '@contexts': path.resolve(__dirname, './src/contexts'),
    }
  },
  server: {
    port: 3000,
    proxy: {
      '/UrtWEB': {
        target: 'http://localhost:9080',
        changeOrigin: true,
        secure: false,
      }
    }
  }
})
