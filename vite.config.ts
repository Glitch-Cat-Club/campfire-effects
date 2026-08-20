import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/* base: "./" so the built demo works from any path (GitHub Pages included) */
export default defineConfig({
  plugins: [react()],
  base: "./",
});
