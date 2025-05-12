import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


export default defineConfig({
  base: '/yummZe/', 
  plugins: [react(), tailwindcss()],
  css: {
    devSourcemap: false,
  },
})
