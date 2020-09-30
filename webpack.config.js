const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  entry: path.resolve(__dirname, "./src/index.tsx"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
  },
  mode: "development",
  module: {
    rules: [
      { test: /.tsx?$/, use: "awesome-typescript-loader" },
      { test: /.jsx?$/, use: "babel-loader" },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [new HtmlWebpackPlugin({ template: "./public/index.html" })],
};
