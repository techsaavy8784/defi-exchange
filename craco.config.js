// craco.config.js

const withTM = require("next-transpile-modules")([
  "react-leaflet",
  "@react-leaflet/core",
  "web3"
]);

module.exports = withTM({
  future: {
    webpack5: true
  },
  style: {
    postcss: {
      plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
      ],
    },
  },
}); 
