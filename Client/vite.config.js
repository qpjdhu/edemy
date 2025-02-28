import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'


// https://vite.dev/config/
export default defineConfig({

  theme: {
    extend: {
      fontSize: {
        'course-details-heading-small': ['2.5px', '3.5px'],
        'course-details-heading-large': ['4.5px', '5.5px'],
        'text-home-heading-small': ['2.5px', '3.5px'],
        'home-heading-large': ['4.5px', '5.5px'],
        'default': ['1px', '1.5px'],
      }
    }
  },
  plugins: [
    react(),
    tailwindcss(),

  ]
})
