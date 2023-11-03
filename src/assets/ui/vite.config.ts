import { defineConfig } from 'vite'

export default defineConfig({
    root: '.',
    build: {
      outDir: './publish',
      watch: {
        include: [
          "./vite.config.ts",
          "./tailwind.config.ts",
          "../../templates/**/*.html",
          './node_modules/flowbite/**/*.js',
        ]
      },
      rollupOptions: {
        output: {
          entryFileNames: 'dist/js/[name].js',
          chunkFileNames: 'dist/js/[name].js',
          assetFileNames: 'dist/css/[name].[ext]'
        }
      }
    }
  })