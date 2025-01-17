import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import basicSsl from '@vitejs/plugin-basic-ssl'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl()
  ],
  server: {
    https: true,
    host: 'localhost',
    options: {
      outputPath: "./dist/"
    }
  },
  base: '/Books_reviews_proyect_react/'
})
