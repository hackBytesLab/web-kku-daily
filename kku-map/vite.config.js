import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const proxyBase = env.VITE_TRANSIT_PROXY_BASE || ''
  const server = proxyBase
    ? {
        proxy: {
          '/transit': {
            target: proxyBase,
            changeOrigin: true,
            secure: false,
            // Example: /transit/* -> {proxyBase}/*
            rewrite: (path) => path.replace(/^\/transit/, ''),
          },
        },
      }
    : undefined

  return {
    plugins: [react()],
    server,
  }
})
