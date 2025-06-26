import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    rollupOptions: {
      external: [
        'emailjs-com',
        // 'jspdf', ← ❌ REMOVE THIS
      ],
    },
  },
});
