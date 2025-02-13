import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Allows access from other devices
    port: 5173, // Default Vite port (change if needed)
    strictPort: true,
  },
})
