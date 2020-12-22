/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
/* eslint-disable global-require */
/* eslint-disable prettier/prettier */
const defaultTheme = require(`tailwindcss/defaultTheme`);

module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  darkMode: `class`,
  theme: {
    extend: {
      fontFamily: {
        rubik: [`Rubik`, ...defaultTheme.fontFamily.sans]
      },
      boxShadow: {
        dark: `rgba(14, 255, 77, 0.5) 3px 0px 22px`,
      },
      lineHeight: {
        '11': `2.75rem`,
        '12': `3rem`,
        '13': `3.25rem`,
        '14': `3.5rem`,
      },
      backgroundColor: {
        'header-dark': `#11182766`,
        'header-light': `#f3f4f6b3`,
        'react': `#1890ff`,
        'next': `#434343`,
        'vue': `#10b981`,
        'css': `#ff7a45`,
        'html': `#d97706`,
        'express': `#8b5cf6`,
        'node': `#52c41a`,
        'nest': `#ff4d4f`,
        'graphql': `#eb2f96`,
        'docker': `#1890ff`,
        'javascript': `#d4b106`,
        'microservice': `#a0d911`,
      },
    },
  },
  variants: {},
  plugins: [
    require(`@tailwindcss/typography`),
    function ({ addBase, addComponents, theme }) {
      addBase([
        {
          '@font-face': {
            fontFamily: `Rubik`,
            src: `url("/fonts/Rubik-Light.ttf")`,
            fontStyle: `light`,
            fontWeight: `300`,
            fontDisplay: `swap`,
          }
        },
        {
          '@font-face': {
            fontFamily: `Rubik`,
            src: `url("/fonts/Rubik-Regular.ttf")`,
            fontStyle: `normal`,
            fontWeight: `400`,
            fontDisplay: `swap`,
          }
        },
        {
          '@font-face': {
            fontFamily: `Rubik`,
            src: `url("/fonts/Rubik-Italic.ttf")`,
            fontStyle: `italic`,
            fontWeight: `400`,
            fontDisplay: `swap`,
          }
        },
        {
          '@font-face': {
            fontFamily: `Rubik`,
            src: `url("/fonts/Rubik-Bold.ttf")`,
            fontStyle: `bold`,
            fontWeight: `600`,
            fontDisplay: `swap`,
          }
        },
      ])
    },
  ],
};
