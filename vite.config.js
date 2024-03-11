import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { VitePWA } from 'vite-plugin-pwa'
import topLevelAwait from "vite-plugin-top-level-await"

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [
      vue(),
      topLevelAwait(),
      VitePWA({
         devOptions: {
            enabled: false
         },
         mode: "development",
         base: "/",
         srcDir: "src",
         filename: "sw.ts",
         includeAssets: ["/favicon.png"],
         strategies: "injectManifest",
         manifest: {
            name: "Annotation",
            short_name: "Annotation",
            theme_color: "#ffffff",
            start_url: "/",
            display: "standalone",
            background_color: "#ffffff",
            icons: [
               {
                  src: "img/icons/logo-dallee-192x192.png",
                  sizes: "192x192",
                  type: "image/png",
               },
               {
                  src: "img/icons/logo-dallee-512x512.png",
                  sizes: "512x512",
                  type: "image/png",
               },
               {
                  src: "img/icons/logo-512x512.png",
                  sizes: "512x512",
                  type: "image/png",
                  purpose: "any maskable",
               },
            ],
         },
      }),
   ],
   server: {
      port: 3000,
      open: true,
      host: true, // allows for external device connection on local network
   },
})
