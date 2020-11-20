module.exports = {
  theme: {
    fontFamily: {
      display: ['Nunito', 'sans-serif'],
      sans: ['Lato', 'sans-serif'],
    },
  },
  variants: {},
  plugins: [],
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
};
