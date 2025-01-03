import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [react()],
  base: '/pages',
  server: {
    host: '0.0.0.0',
    port: 8000,
  },
})
