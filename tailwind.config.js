/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sp: { max: '768px' },
        tab: { min: '769px', max: '1024px' },
        pc: '1025px',
      },
      /* Colors, fonts, gradients are defined via @theme in CSS (Tailwind v4) */
    },
  },
  plugins: [],
}


