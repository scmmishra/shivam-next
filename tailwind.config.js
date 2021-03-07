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
    fontFamily: {
      sans: [
        'Barlow',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
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
              color: colors.gray[700],
            },
            h2: {
              color: colors.gray[700],
            },
            h3: {
              color: colors.gray[700],
            },
            h4: {
              color: colors.gray[700],
            },
            p: {
              color: colors.gray[600],
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
