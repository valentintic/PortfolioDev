import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  base: '/',
  define: {
    'process.env': {}
  },
  envPrefix: ['VITE_', 'REACT_APP_'],
  server: {
    host: '0.0.0.0', // Permite conexiones externas
    port: 5174, // Usa este puerto
    strictPort: true, // Evita cambios de puerto automáticos
  },
  css: {
    // Mejoras para el procesamiento de CSS
    devSourcemap: true, // Mejora el debugging de estilos
  }
})
