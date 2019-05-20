const withFonts = require("next-fonts");

module.exports = withFonts({
  target: "serverless",
  webpack(config, options) {
    return config;
  },
});
