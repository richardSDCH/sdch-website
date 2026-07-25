import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Serving from a custom domain at the root, so base stays '/'.
  // If you instead host at username.github.io/reponame WITHOUT a custom
  // domain, change this to '/reponame/'.
  base: '/',
})
