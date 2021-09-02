const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const esbuild = {
  test: /\.ts$/,
  loader: "esbuild-loader",
  options: {
    target: "es2015",
  },
};

module.exports = {
  mode: "development",
  entry: ["./src/entrypoint.js"],
  module: { rules: [esbuild] },
  resolve: { extensions: [".js", ".ts", ".json"] },
  devtool: "inline-source-map",
  devServer: {
    static: ["./dist", "./public"],
    hot: true,
    client: { logging: "warn" },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Hot Module Replacement",
    }),
  ],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
