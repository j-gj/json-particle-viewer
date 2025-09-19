import { defineConfig } from 'vite'

export default defineConfig({
  base: './',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    minify: 'esbuild',
    sourcemap: false, // Remove sourcemaps for smaller bundle
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          three: ['three']
        },
        // Consistent naming for better caching
        entryFileNames: 'js/[name]-[hash].js',
        chunkFileNames: 'js/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Additional optimizations
    chunkSizeWarningLimit: 1000,
    reportCompressedSize: true
  },
  server: {
    port: 3000,
    open: true
  }
})