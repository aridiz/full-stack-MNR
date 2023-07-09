const webpack = require("webpack");

module.exports = {
  entry: "./src/index.tsx",  //entry point
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,  //if has this extention
        exclude: /node_modules/,
        use: {
          loader: "ts-loader",
        },
      },
    ],
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      HOST: "0.0.0.0",
      PORT: "8080",
    }),
  ],
};
