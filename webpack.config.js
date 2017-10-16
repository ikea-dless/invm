const path = require("path")

const config = {
  context: path.resolve(__dirname, "src"),
  entry: "index.js",
  output: {
    path: path.resolve(__dirname, "assets"),
    publicPath: "assets",
    filename: "bundle.js"
  },
  resolve: {
    modules: [
      "src",
      "node_modules"
    ],
    extensions: [ ".js", ".jsx" ]
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  }
}

module.exports = config
