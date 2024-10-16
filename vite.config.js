import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType:'autoUpdate',
      includeAssets:['favicon.ico','apple-touch-icon.png','mask-icon.svg'],
       manifest : {
        name:'3D Portfolio Suneel Pradeep',
        short_name:'3D Portfolio',
        theme_color :'#000000',
        icons : [
          {
              src: 'pwa-64x64.png',
              sizes: '64x64',
              type: 'image/png'
          },
          {
            src: 'pwa-128x128.png',
            sizes: '128x128',
            type: 'image/png'
        },
          {
              src: 'pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png'
          },
          {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any'
          },
          {
              src: 'maskable-icon-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'maskable'
          }
      ]
    
       }
    })
  ],
  assetsInclude : ["**/*.glb"],
  server : {
    port : 3512
  }
  
})
