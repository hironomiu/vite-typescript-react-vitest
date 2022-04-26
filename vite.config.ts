import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030
  },
  optimizeDeps:{
    entries:'__tests__'
  },
  test: {
    globals:true,
    environment:'happy-dom'
  }
})
