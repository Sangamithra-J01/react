import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // For GitHub Pages project site: https://Sangamithra-J01.github.io/react/
  // If you deploy to a custom domain or root, change base to '/'
  base: '/react/',
  plugins: [react()],
  server: {
    port: 5173,
    open: true
  }
})
