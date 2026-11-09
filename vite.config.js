import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Locally (npm run dev / build) the site lives at "/".
// On GitHub Pages (GITHUB_PAGES=true) it lives at "/REPOSITORY_NAME/".
// Replace YOUR_REPOSITORY_NAME with the exact name of your GitHub repository.
export default defineConfig({
  plugins: [react()],
  base: process.env.GITHUB_PAGES === 'true'
    ? '/YOUR_REPOSITORY_NAME/'
    : '/'
})
