/* eslint-disable prettier/prettier */
module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: false,
  darkMode: `class`,
  theme: {
    fontFamily: {
      'default': [`Padauk`, `sans-serif`]
    },
    extend: {
      backgroundColor: {
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
      }
    },
  },
  variants: {},
  plugins: [],
};
