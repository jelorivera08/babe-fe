/* eslint-disable global-require */
/* eslint-disable import/no-extraneous-dependencies */
const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [
    require("postcss-preset-env")({ stage: 0 }),
    tailwindcss("./tailwind.js")("./tailwindcss-config.js"),
    require("autoprefixer"),
  ],
};
