import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#071f14',
        moonlight: '#0a3d2a',
        tropical: '#5ebd8a',
        glow: '#d4f5e2',
        jungle: '#0B3D26',
        'jungle-deep': '#062a18',
        'jungle-light': '#1a7d5a',
        'jungle-accent': '#3da872',
        'leaf-dark': '#0f4f34',
      },
      boxShadow: {
        glow: '0 0 30px rgba(94, 189, 138, 0.35)',
        moon: '0 0 120px rgba(94, 189, 138, 0.3)',
        'jungle-glow': '0 0 40px rgba(30, 120, 80, 0.25)',
      },
      backgroundImage: {
        glass: 'linear-gradient(130deg, rgba(10,61,42,0.4), rgba(10,61,42,0.1))'
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
        },
        sway: {
          '0%, 100%': { transform: 'rotate(-2deg)' },
          '50%': { transform: 'rotate(2deg)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3s ease-in-out infinite',
        sway: 'sway 4s ease-in-out infinite',
      }
    }
  },
  plugins: []
} satisfies Config;
