// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/les-jumelles/', // ✅ Très important pour GitHub Pages
  plugins: [react()],
})
