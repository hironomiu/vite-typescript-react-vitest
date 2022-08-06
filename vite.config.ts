import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3030,
  },
  optimizeDeps: {
    entries: '__tests__',
  },
  test: {
    globals: true,
    // environment: 'jsdom',
    environment: 'happy-dom',
    setupFiles: './setup-test-env.ts',
  },
})
