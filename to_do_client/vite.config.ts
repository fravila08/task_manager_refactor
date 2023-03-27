import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/static/",
  build: {
    outDir: "../static",
    emptyOutDir: true,
  },
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});