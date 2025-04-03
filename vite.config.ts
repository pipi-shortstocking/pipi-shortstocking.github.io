import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  // assetsInclude: ["**/*.jpg", "**/*.png", "**/*.svg"],
  plugins: [react()],
});
