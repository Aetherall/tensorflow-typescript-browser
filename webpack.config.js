const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const esbuild = {
  test: /\.ts$/,
  loader: "esbuild-loader",
  options: {
    loader: "ts",
    target: "esnext",
  },
};

module.exports = {
  mode: "development",
  entry: ["./src/index.ts"],
  module: { rules: [esbuild] },
  resolve: { extensions: [".js", ".ts", ".json"] },
  devtool: "inline-source-map",
  devServer: {
    static: ["./dist", "./public"],
    hot: false,
    liveReload: true,
    client: { logging: "warn" },
  },
  optimization: {
    runtimeChunk: "single",
    moduleIds: "deterministic",
    splitChunks: {
      chunks: "all",
      maxInitialRequests: Infinity,
      minSize: 0,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: "node_modules",
          chunks: "all",
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "[TF] Playground",
    }),
  ],
  output: {
    filename: "[name].[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
