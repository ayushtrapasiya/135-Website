import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      'cc7c-110-227-235-236.ngrok-free.app' // <-- your ngrok domain
    ]
  }
})

 