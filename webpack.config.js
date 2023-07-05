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
};
