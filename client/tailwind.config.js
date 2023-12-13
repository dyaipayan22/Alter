/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '3rem',
        xl: '4rem',
      },
    },
    extend: {
      colors: {
        primary: {
          100: '#de283b',
          200: '#ff6366',
        },
        accent: {
          100: '#25b1bf',
          200: '#005461',
        },
        text: {
          100: '#1a1a1a',
          200: '#404040',
        },
        background: {
          100: '#ffffff',
          200: '#f5f5f5',
          300: '#cccccc',
        },
      },
      fontFamily: {
        Inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
