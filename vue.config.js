// vue.config.js
const path = require("path");

module.exports = {
  // options...
  outputDir: path.resolve(__dirname, "templates"),
  assetsDir: "static",
  pages: {
    index: {
      entry: 'src/main.js',
      template: "public/index.html"
    },
    'reporting-dashboard': {
      entry: 'src/reporting-dashboard.js',
      template: "public/altindex.html"
    }
  }
}