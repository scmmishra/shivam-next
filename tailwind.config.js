const colors = require('tailwindcss/colors')

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    backdropFilter: {
      'none': 'none',
      'blur': 'blur(20px)',
    },
    extend: {
      colors: {
        'light-blue': colors.lightBlue,
        cyan: colors.cyan,
        orange: colors.orange
      },
      typography: {
        DEFAULT: {
          css: {
            h1: {
              color: colors.gray[800],
            },
            h2: {
              color: colors.gray[800],
            },
            h3: {
              color: colors.gray[800],
            },
            h4: {
              color: colors.gray[800],
            },
            p: {
              color: colors.gray[700],
            },
            a: {
              textDecoration: 'none'
            }
          },
        },
        'xs': {
          css: {
            pre: {
              marginTop: '0px',
            },
            fontSize: '0.5rem',
            h1: {
              fontSize: '1.75rem',
              fontWeight: 800,
              marginTop: '0',
              marginBottom: '0.8rem',
              lineHeight: 1.2,
            },
            h2: {
              fontSize: '1.25rem',
              fontWeight: 800,
              marginTop: '0',
              marginBottom: '0.5rem',
              lineHeight: 1.2,
            },
            h3: {
              fontSize: '1rem',
              fontWeight: 800,
              marginTop: '0',
              marginBottom: '0.5rem',
              lineHeight: 1.2,
            },
            p: {
              fontSize: '0.875rem',
              marginTop: '0',
              marginBottom: '0.5rem',
              lineHeight: 1.5,
            },
          },
        },
      }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-filters'),
  ],
}
