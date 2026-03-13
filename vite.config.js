import { defineConfig } from 'vite'
import preact from '@preact/preset-vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [preact()],
  server: {
    allowedHosts: [
      'presently-primal-nighthawk.cloudpub.ru/'
    ]
  },
  headers: {
    'Content-Type': 'application/javascript',
    'X-Content-Type-Options': 'nosniff'
  }
})
