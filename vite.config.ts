import vue from '@vitejs/plugin-vue'
import * as path from 'path'
import fs from 'fs'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const bootstrapIcons = () => {
  const virtualModuleId = 'virtual:bootstrap-icons/icons'
  const resolvedVirtualModuleId = '\0' + virtualModuleId
  const icons: string[] = []

  fs.readdir(path.resolve(__dirname, 'node_modules/bootstrap-icons/icons'), (err, files) => {
    icons.push(...(files || []).map((file) => path.basename(file, '.svg')))
  })

  return {
    name: 'bootstrap-icons/icons', // required, will show up in warnings and errors
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export default ${JSON.stringify(icons)}`
      }
    },
  }
}

export default defineConfig({
  plugins: [vue(), dts(), bootstrapIcons()],
  build: {
    lib: {
      entry: {
        index: path.resolve(__dirname, 'src/entry/index.ts'),
        utils: path.resolve(__dirname, 'src/entry/utils.ts'),
      },
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue', 'bootstrap-icons/bootstrap-icons.svg'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
