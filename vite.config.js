import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  plugins: [react(), tailwindcss()],
  // The repository path is only used for the production GitHub Pages build.
  base: command === 'serve' ? '/' : '/MyProfile-2026/',
  build: {
    rolldownOptions: {
      output: {
        codeSplitting: {
          groups: [
            {
              name: 'three-vendor',
              test: /node_modules[\\/]three[\\/]/,
              minSize: 120_000,
              maxSize: 450_000,
              priority: 10,
            },
          ],
        },
      },
    },
  },
}))
