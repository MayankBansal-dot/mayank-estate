import type { Config } from 'tailwindcss';
import defaultTheme from 'tailwindcss/defaultTheme';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          50: '#f8f7f7',
          100: '#e8e5e5',
          200: '#d1cbcb',
          300: '#b9b0b0',
          400: '#a29999',
          500: '#8a8181',
          600: '#6b6262',
          700: '#4d4444',
          800: '#2e2626',
          900: '#1a1010',
          950: '#0f0808'
        },
        gold: {
          50: '#fffbf0',
          100: '#fff3d9',
          200: '#ffe9b3',
          300: '#ffd97a',
          400: '#ffc842',
          500: '#ffb81c',
          600: '#d98f0a',
          700: '#b8700b',
          800: '#94550f',
          900: '#7a4408'
        },
        platinum: {
          50: '#f9f9f9',
          100: '#f0f0f0',
          200: '#e0e0e0',
          300: '#d0d0d0',
          400: '#b0b0b0',
          500: '#888888',
          600: '#666666',
          700: '#444444',
          800: '#222222',
          900: '#111111'
        }
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
        serif: ['Playfair Display', ...defaultTheme.fontFamily.serif]
      },
      fontSize: {
        xs: ['12px', { lineHeight: '16px' }],
        sm: ['14px', { lineHeight: '20px' }],
        base: ['16px', { lineHeight: '24px' }],
        lg: ['18px', { lineHeight: '28px' }],
        xl: ['20px', { lineHeight: '28px' }],
        '2xl': ['24px', { lineHeight: '32px' }],
        '3xl': ['30px', { lineHeight: '36px' }],
        '4xl': ['36px', { lineHeight: '40px' }],
        '5xl': ['48px', { lineHeight: '48px' }]
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '16px',
        xl: '24px'
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-lg': '0 8px 32px 0 rgba(31, 38, 135, 0.5)',
        premium: '0 20px 60px 0 rgba(0, 0, 0, 0.3)'
      },
      animation: {
        'jump-up': 'jumpUp 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
        'float': 'float 3s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      keyframes: {
        jumpUp: {
          '0%': {
            transform: 'perspective(1000px) translateZ(0px) translateY(0px)',
            opacity: '1'
          },
          '50%': {
            transform: 'perspective(1000px) translateZ(30px) translateY(-15px)',
            opacity: '1'
          },
          '100%': {
            transform: 'perspective(1000px) translateZ(20px) translateY(-10px)',
            opacity: '1'
          }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
