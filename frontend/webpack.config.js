const webpack = require("webpack")

const NODE_ENV = process.env.NODE_ENV || "development"
console.log(NODE_ENV, 'NODE ENV')

const config = {
  mode: NODE_ENV,
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
  },
  plugins: [new webpack.EnvironmentPlugin(["ENDPOINT"])],
}

module.exports = config
