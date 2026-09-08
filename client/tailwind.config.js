/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffef8',
          100: '#fffde8',
          200: '#fffbd0',
          300: '#fff7a3',
          400: '#ffef66',
          500: '#ff8500',
          600: '#ff6200',
          700: '#ff3b00',
          800: '#e60000',
          900: '#b30000',
        },
        /* brand: {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
          950: '#172554',
        }, */
        accent: {
          400: '#fb923c',
          500: '#f97316',
          600: '#ea580c',
          700: '#c2410c',
        },
      },
      fontFamily: {
        sans: ['"Segoe UI"', 'system-ui', '-apple-system', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
