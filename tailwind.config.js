/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        genshin: {
          gold: '#d4a853',
          dark: '#1a1f2e',
          panel: '#252b3b',
        },
      },
    },
  },
  plugins: [],
};
