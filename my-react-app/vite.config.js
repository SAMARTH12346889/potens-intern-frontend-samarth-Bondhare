import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),tailwindcss(),visualizer({
      open: true,
    }),

    VitePWA({
      registerType: "autoUpdate",

      includeAssets: [
        "favicon.svg",
        "apple-touch-icon.png",
        "masked-icon.svg"
      ],

      manifest: {
        name: "Citizen Complaint App",
        short_name: "Complaint",

        description: "Progressive Web App for reporting issues",

        theme_color: "#4f46e5",
        background_color: "#ffffff",

        display: "standalone",

        start_url: "/",

        icons: [
          {
            src: "pwa-192x192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "image/png",
            purpose: "maskable"
          }
        ]
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,png,jpg,jpeg,svg,woff2}"]
      }
    })
  ]
});