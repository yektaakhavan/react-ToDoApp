// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-ToDoApp/', // نام ریپازیتوری با دقت
  plugins: [react()],
})
