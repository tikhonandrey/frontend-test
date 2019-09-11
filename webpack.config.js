/* eslint-disable */
const webpack = require("webpack");
const path = require("path");

const CopyWebpackPlugin = require("copy-webpack-plugin");

const config = {
  entry: {
    app: ["./src/index.tsx"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.js"
  },
  devServer: {
    contentBase: path.join(__dirname, "dist"),
    compress: true,
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: /node_modules/
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /\.s?[ac]ss$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { url: false, sourceMap: true } },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
              includePaths: ["./node_modules"]
            }
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"]
  },
  plugins: [
    new CopyWebpackPlugin([
      {
        context: "src/assets",
        from: "**/**",
        to: "assets"
      }
    ])
  ]
};

module.exports = config;
