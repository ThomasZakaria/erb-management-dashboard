import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite"; // زود السطر ده

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // وزود دي كمان
  ],
});
