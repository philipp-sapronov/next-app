const webpack = require("webpack")

const config = {
  mode: "development",
  entry: "./src/scripts/index.js",
  output: {
    filename: "[name].bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
        options: {
          failOnError: true,
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: "vendors",
          chunks: "all",
        },
      },
    },
  },
  externals: {
    jquery: "jQuery",
    // owlCarousel:
  },
  plugins: [new webpack.EnvironmentPlugin(["ENDPOINT"])],
}

module.exports = config
