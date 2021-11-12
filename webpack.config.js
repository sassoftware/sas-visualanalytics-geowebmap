const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    index: ['./src/index.css', './src/index.ts']
  },
  node: false,
  output: {
    path: path.join(__dirname, 'dist'),
    chunkFilename: 'chunks/[id].js',
    publicPath: '',
    clean: true
  },
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 3001,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        options: {
          transpileOnly: true
        }
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      path.resolve(__dirname, "node_modules/")
    ],
    extensions: [".ts", ".tsx", ".js", ".scss", ".css"]
  },
  plugins: [
    new HtmlWebPackPlugin({
      title: 'ArcGIS API  for JavaScript',
      template: './public/index.html',
      filename: './index.html',
      chunksSortMode: 'none',
      inlineSource: '.(css)$'
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[chunkhash].css",
      chunkFilename: "[id].css"
    }),
    new CopyPlugin({
      patterns: [{
          from: "./public/assets",
          to: "assets"
        },
        {
          from: "./public/examples.html"
        },
        {
          from: "./public/.htaccess"
        },
        {
          from: "./public/i18n",
          to: "i18n"
        }
      ],
    })
  ]
};
