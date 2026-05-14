import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    server: {
        host: "0.0.0.0",       // bind to all interfaces inside Docker
        port: 5173,
        allowedHosts: true,   // allow nginx container to proxy requests here
        proxy: {
            "/api": {
                target: "http://localhost:3000",
                changeOrigin: true,
            },
        },
    },
});
