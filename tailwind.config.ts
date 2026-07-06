import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand – índigo escuro / azul bem escuro quase lilás
        brand: {
          50:  '#EEF2FF',
          100: '#E0E7FF',
          200: '#C7D2FE',
          300: '#A5B4FC',
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
          700: '#4338CA',
          800: '#3730A3',
          900: '#312E81',
          950: '#1E1B4B',
        },
        ocean: {
          50:  '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        // keeping "sage" alias pointing to ocean for compat
        sage: {
          50:  '#F0FDFA',
          100: '#CCFBF1',
          200: '#99F6E4',
          300: '#5EEAD4',
          400: '#2DD4BF',
          500: '#14B8A6',
          600: '#0D9488',
          700: '#0F766E',
          800: '#115E59',
          900: '#134E4A',
        },
        sand: {
          50:  '#FFFBF0',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#FBBF24',
          500: '#F59E0B',
        },
        // cream – lavanda muito clara / fundo neutro
        cream: {
          50:  '#FAFAFA',
          100: '#F5F5FF',
          200: '#EBEBFE',
          300: '#D9D8F8',
          400: '#B8B5F4',
          500: '#9B97F0',
        },
        slate: {
          850: '#0A2540',
        }
      },
      fontFamily: {
        sans:  ['Inter var', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono:  ['JetBrains Mono', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'warm-sm': '0 1px 3px 0 rgba(67,56,202,0.08), 0 1px 2px -1px rgba(67,56,202,0.06)',
        'warm':    '0 4px 6px -1px rgba(67,56,202,0.10), 0 2px 4px -2px rgba(67,56,202,0.06)',
        'warm-lg': '0 10px 15px -3px rgba(67,56,202,0.12), 0 4px 6px -4px rgba(67,56,202,0.08)',
        'warm-xl': '0 20px 25px -5px rgba(67,56,202,0.14), 0 8px 10px -6px rgba(67,56,202,0.10)',
        'glass':   '0 8px 32px 0 rgba(99,102,241,0.12)',
        'glow':    '0 0 40px rgba(99,102,241,0.25)',
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(135deg, #F0F9FF 0%, #E0F2FE 50%, #BAE6FD 100%)',
        'gradient-hero': 'linear-gradient(160deg, #082F49 0%, #075985 35%, #0369A1 65%, #0EA5E9 100%)',
        'gradient-sage': 'linear-gradient(135deg, #F0FDFA 0%, #CCFBF1 100%)',
        'gradient-glass': 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
      },
      animation: {
        'float':        'float 6s ease-in-out infinite',
        'pulse-soft':   'pulse-soft 3s ease-in-out infinite',
        'shimmer':      'shimmer 2s linear infinite',
        'fade-up':      'fade-up 0.6s ease-out',
        'slide-in':     'slide-in 0.4s ease-out',
        'spin-slow':    'spin 8s linear infinite',
        'bounce-soft':  'bounce-soft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0.7' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'fade-up': {
          '0%':   { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'slide-in': {
          '0%':   { opacity: '0', transform: 'translateX(-16px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        'bounce-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config
