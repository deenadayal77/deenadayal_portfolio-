/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00D9FF',
        dark: '#0a0a0a',
        surface: '#1a1a1a',
        accent: '#00D9FF',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        display: ['Space Grotesk', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #00D9FF 0%, #0099CC 100%)',
        'gradient-dark': 'linear-gradient(135deg, #0a0a0a 0%, #0f1419 100%)',
      },
      boxShadow: {
        glow: '0 0 20px rgba(0, 217, 255, 0.3)',
        'glow-lg': '0 0 40px rgba(0, 217, 255, 0.5)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite',
      },
      backdropBlur: {
        'xl': '16px',
      },
    },
  },
  plugins: [],
};
