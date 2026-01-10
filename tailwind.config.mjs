/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}'],
  theme: {
    extend: {
      colors: {
        paper: '#f7f3ef',
        ink: '#2a2a2a',
        taupe: '#a5978e',
        stone: '#e8e1da',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.08)',
      }
    },
    fontFamily: {
      sans: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'Segoe UI',
        'Roboto',
        'Helvetica',
        'Arial',
        'Noto Sans',
        'Apple Color Emoji',
        'Segoe UI Emoji'
      ],
      serif: [
        'ui-serif',
        'Georgia',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
    },
  },
  plugins: [],
};
