import path from "path";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@interfaces": path.resolve(__dirname, "./src/interfaces"),
      "@contexts": path.resolve(__dirname, "./src/contexts")
    },
  },
})
