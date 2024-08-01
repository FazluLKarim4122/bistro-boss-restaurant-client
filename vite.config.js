// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })



// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import { nodePolyfills } from 'vite-plugin-node-polyfills';

// export default defineConfig({
//   plugins:[ react(),
// nodePolyfills({
//   events: true,
// })
// ],
  
//   build: {
//     rollupOptions: {
//       output: {
//         manualChunks(id) {
//           if (id.includes('node_modules')) {
//             return id.toString().split('node_modules/')[1].split('/')[0].toString();
//           }
//         }
//       }
//     },
//     chunkSizeWarningLimit: 1000, // Increase the warning limit if needed
//   },
//   resolve: {
//     alias: {
//       'events': 'events'
//     }
//   }
// });

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    },
    chunkSizeWarningLimit: 1000, // Increase the warning limit if needed
  }
});

