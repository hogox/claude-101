import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// base path matches the GitHub Pages repo name (https://<user>.github.io/claude-101/)
export default defineConfig({
  base: "/claude-101/",
  server: { port: 5173, strictPort: true },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
