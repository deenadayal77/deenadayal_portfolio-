/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#06B6D4',
        dark: '#0f172a',
        surface: '#1e293b',
        accent: '#06B6D4',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #06B6D4 0%, #0EA5E9 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
      },
      boxShadow: {
        glow: '0 0 30px rgba(6, 182, 212, 0.4)',
        'glow-lg': '0 0 50px rgba(6, 182, 212, 0.6)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
        'glow': 'glow 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
