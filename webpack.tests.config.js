const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    init: "./src/index.ts",
    tests: "./tests/sas/tests.ts"
  },
  node: false,
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./~tmpTests"),
    clean: true
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "tests"),
      path.resolve(__dirname, "node_modules/")
    ],
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{
          from: "./public/assets",
          to: "assets"
        },
        {
          from: "./public/i18n",
          to: "i18n"
        }
      ],
    })
  ]
};
