const postcssNested = require('postcss-nested')

/** @type {import('postcss-load-config').Config} */
module.exports = {
  plugins: [postcssNested],
}
