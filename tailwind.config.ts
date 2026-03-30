import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f3ff',
          100: '#dde3ff',
          200: '#c2ccff',
          300: '#97a5ff',
          400: '#6b73ff',
          500: '#4a48ff',
          600: '#3b28f5',
          700: '#2f1cd8',
          800: '#2718ae',
          900: '#1e1a7e',
          950: '#0c0b3b',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
