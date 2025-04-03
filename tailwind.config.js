/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: '#FF6B6B',
          secondary: '#4ECDC4',
          background: '#FFE5E5',
          text: '#3D3D3D',
          'text-secondary': '#666666',
          'text-accent': '#FF6B6B',
          'logo-primary': '#FF6B6B',
          'logo-secondary': '#4ECDC4',
          'logo-accent': '#FFE66D',
        },
        fontFamily: {
          sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Oxygen',
            'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
            'sans-serif'],
        },
      },
    },
    plugins: [],
  };
  