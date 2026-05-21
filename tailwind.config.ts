import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#07111F',
        moonlight: '#0D1B2A',
        tropical: '#3DD6D0',
        glow: '#F8FAFC',
        jungle: '#0B2E26'
      },
      boxShadow: {
        glow: '0 0 30px rgba(61, 214, 208, 0.35)',
        moon: '0 0 120px rgba(248, 250, 252, 0.5)'
      },
      backgroundImage: {
        glass: 'linear-gradient(130deg, rgba(255,255,255,0.13), rgba(255,255,255,0.02))'
      },
      fontFamily: {
        sans: ['Inter', 'Poppins', 'Montserrat', 'system-ui', 'sans-serif']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' }
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config;
