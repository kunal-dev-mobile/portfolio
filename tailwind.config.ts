import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      colors: {
        dark: {
          0: '#ffffff',
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
          950: '#0a0e27',
        },
        accent: {
          primary: '#00d4ff',
          secondary: '#ff6b6b',
          tertiary: '#4ecdc4',
        },
      },
      animation: {
        'fade-in': 'fade-in 0.5s ease-in-out',
        'blur-in': 'blur-in 0.6s ease-out',
        'glow-pulse': 'glow-pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scan': 'scan 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'blur-in': {
          '0%': { opacity: '0', filter: 'blur(10px)' },
          '100%': { opacity: '1', filter: 'blur(0)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' },
        },
        'scan': {
          '0%':   { transform: 'translateY(-100%)', opacity: '0' },
          '20%':  { opacity: '1' },
          '80%':  { opacity: '1' },
          '100%': { transform: 'translateY(200%)', opacity: '0' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '12px',
        lg: '25px',
        xl: '40px',
        '2xl': '60px',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
}

export default config
