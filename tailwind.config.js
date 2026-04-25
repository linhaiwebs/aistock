/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'light-cream': '#FFFEF5',
        'light-yellow': '#FFF9E6',
        'pale-yellow': '#FFF4D4',
        'accent-coral': '#FF6F61',
        'accent-coral-light': '#FF9580',
        'accent-coral-dark': '#E8554E',
        'accent-peach': '#FFB347',
        'accent-peach-light': '#FFC875',
        'accent-peach-dark': '#FF9D1F',
        'surface-light': '#FFFFFF',
        'surface-cream': '#FFFCF0',
        'text-primary': '#2C2416',
        'text-secondary': '#5C4F3B',
        'text-muted': '#8A7A5E',
        'border-light': '#E6DCC8',
        'border-medium': '#D4C5A8',
      },
      backgroundImage: {
        'light-gradient': 'linear-gradient(180deg, #FFFEF5 0%, #FFF9E6 50%, #FFF4D4 100%)',
        'coral-gradient': 'linear-gradient(135deg, #FF6F61 0%, #E8554E 100%)',
        'peach-gradient': 'linear-gradient(135deg, #FFB347 0%, #FF9D1F 100%)',
        'warm-gradient': 'linear-gradient(135deg, #FFF4D4 0%, #FF6F61 50%, #FFB347 100%)',
        'coral-radial': 'radial-gradient(circle, rgba(255, 111, 97, 0.1), transparent)',
        'peach-radial': 'radial-gradient(circle, rgba(255, 179, 71, 0.1), transparent)',
      },
      boxShadow: {
        'coral-glow': '0 0 20px rgba(255, 111, 97, 0.2)',
        'coral-glow-lg': '0 0 40px rgba(255, 111, 97, 0.3)',
        'peach-glow': '0 0 15px rgba(255, 179, 71, 0.2)',
        'soft-shadow': '0 2px 12px rgba(44, 36, 22, 0.1)',
        'soft-shadow-lg': '0 4px 24px rgba(44, 36, 22, 0.15)',
      },
      animation: {
        'pulse-red': 'pulse-red 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-rotate': 'float-rotate 4s ease-in-out infinite',
        'fadeIn': 'fadeIn 0.3s ease-in',
      },
      keyframes: {
        'pulse-red': {
          '0%, 100%': { opacity: 1, boxShadow: '0 0 20px rgba(220, 38, 38, 0.5)' },
          '50%': { opacity: 0.8, boxShadow: '0 0 40px rgba(220, 38, 38, 0.8)' },
        },
        'float-rotate': {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0)' },
          '50%': { transform: 'rotate(5deg) translateY(-10px)' },
        },
        'fadeIn': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
      },
      fontFamily: {
        'title': ['HYYaKuHeiW', 'Noto Sans JP', 'sans-serif'],
        'subtitle': ['Adobe Heiti Std', 'Hiragino Sans', 'sans-serif'],
      },
      spacing: {
        '7.5': '30px',
      },
      borderRadius: {
        'modern-xl': '20px',
        'modern-lg': '16px',
        'modern-md': '12px',
      },
    },
  },
  plugins: [],
};
