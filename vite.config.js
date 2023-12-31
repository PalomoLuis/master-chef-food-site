import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/',
  resolve: {
    alias: {
      '@components': '/src/components',
      '@context': '/src/context',
      '@images': '/src/images',
      '@pages': '/src/pages',
      '@data': '/src/data',
      '@public': '/public'
    }
  },
  plugins: [react()],
})
