module.exports = {
  plugins: {
    'postcss-nested' : {},
    'tailwindcss/nesting': {},
    tailwindcss: {config: './tailwind.config.cjs'},
    autoprefixer: {},
  },
}
