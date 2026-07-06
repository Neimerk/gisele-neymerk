import type { Config } from 'tailwindcss'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand – azul marinho
        brand: {
          50:  '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
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
        // cream – azul muito claro / fundo neutro
        cream: {
          50:  '#F8FAFF',
          100: '#EFF6FF',
          200: '#DBEAFE',
          300: '#BFDBFE',
          400: '#93C5FD',
          500: '#60A5FA',
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
        'warm-sm': '0 1px 3px 0 rgba(29,78,216,0.08), 0 1px 2px -1px rgba(29,78,216,0.06)',
        'warm':    '0 4px 6px -1px rgba(29,78,216,0.10), 0 2px 4px -2px rgba(29,78,216,0.06)',
        'warm-lg': '0 10px 15px -3px rgba(29,78,216,0.12), 0 4px 6px -4px rgba(29,78,216,0.08)',
        'warm-xl': '0 20px 25px -5px rgba(29,78,216,0.14), 0 8px 10px -6px rgba(29,78,216,0.10)',
        'glass':   '0 8px 32px 0 rgba(59,130,246,0.12)',
        'glow':    '0 0 40px rgba(59,130,246,0.25)',
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
