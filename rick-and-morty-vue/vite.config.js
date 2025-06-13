import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath } from 'url'

export default defineConfig({
  plugins: [vue()],  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': 'vue/dist/vue.esm-bundler.js'
    }
  },
  optimizeDeps: {
    include: ['ag-grid-vue3', 'ag-grid-community']
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@import "@/assets/global.css";`
      }
    }
  }
})
