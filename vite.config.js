import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,     // allow external access
    port: 5173,
    allowedHosts: ["sunday-lyonnaise-emmanuel.ngrok-free.dev"], // ✅ allow ngrok host
    proxy: {
      "/api": {
        target: "https://auth-backend.kirittech.com",
        changeOrigin: true,
        secure: false
      },
    },
  },
});