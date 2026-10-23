import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // The repository path is only used for the production GitHub Pages build.
  base: command === 'serve' ? '/' : '/MyProfile-2026/',
}))
