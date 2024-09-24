/** @type {import('tailwindcss').Config} */

module.exports = {
  plugins : [
    require('@tailwindcss/line-clamp')
  ],
  content: ['./src/**/*.{html,js,svelte,ts}'],
  presets : [
    require('./tailwindpreset.config.cjs')
  ],
  theme: {
    extend: {
      colors: {
        'primaryfontcolor' : '#022F02',
        'site_bg_color' : '#F6F7F5',
        'secondarycolor' : '#525257',
        'vibrant_green' : '#2FA304',
        'warm_grey': '#3D4835',
      },
      fontFamily: {
        primaryfont:
          'montserrat, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      },
      fontSize: {
        "4xl" : '2.375rem',
        "3xl" : '2.125rem',
        "2xl" : '1.75rem',
        "xl" : '1.25rem',
        "lg" : '1.25rem',
        "base" : '1.125rem',
        "sm" : '1rem',
        "xs" : '0.875rem',
      },
      fontWeight : {
        "headingweight" : 700,
      },
      alignment : {
        headersection : "center"
      },
    },
  },
}
