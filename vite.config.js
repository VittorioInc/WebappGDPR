import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'node:url'

const directory = name => fileURLToPath(new URL(name, import.meta.url))
export default defineConfig({
  root: directory('./client'),
  plugins: [vue()],
  server: { fs: { strict: true, allow: [directory('./client'), directory('./shared'), directory('./node_modules')] } },
  build: { outDir: directory('./dist'), emptyOutDir: true }
})
