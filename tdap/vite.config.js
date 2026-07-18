import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // GitHub Pages serves this project from a /thedigitalartistpush/ subpath,
  // but Netlify serves it from the domain root — Netlify sets NETLIFY=true during builds.
  base: process.env.NETLIFY ? "/" : "/thedigitalartistpush/",
  plugins: [react()],
});
