const ArcGISPlugin = require("@arcgis/webpack-plugin");
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require("path");

module.exports = {
  entry: {
    init: "./src/index.ts",
    tests: "./tests/sas/tests.ts"
  },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./~tmpTests")
  },

  resolve: {
    modules: [
      path.resolve(__dirname, "./src"),
      path.resolve(__dirname, "./tests"),
      "node_modules/"
    ],
    extensions: [".ts", ".tsx", ".js", ".css", ".scss"]
  },

  module: {
    rules: [{
      test: /\.tsx?$/,
      use: [{
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }]
    }]
  },

  plugins: [
    new CleanWebpackPlugin(),
    new ArcGISPlugin(),
    new CopyPlugin({
      patterns: [{
        from: "i18n",
        to: "i18n"
      }],
    })
  ],

  node: {
    process: false,
    global: false,
    fs: "empty"
  }
};