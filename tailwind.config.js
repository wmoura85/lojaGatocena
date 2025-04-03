/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#FF5C39',
          secondary: '#FF6F3C',
          background: '#121212',
          text: '#FFFFFF',
          'text-secondary': '#CCCCCC',
          'text-accent': '#FF6B6B',
          'logo-primary': '#FF6B6B',
          'logo-secondary': '#4ECDC4',
          'logo-accent': '#FFE66D',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  