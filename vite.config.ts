import { defineConfig } from 'vite'
import vitedge from 'vitedge/plugin.js'
import reactRefresh from '@vitejs/plugin-react-refresh'

export default defineConfig({
  plugins: [
    vitedge(),
    reactRefresh()
  ]
})
