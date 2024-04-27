const path = require("path");
const nodeExternals = require("webpack-node-externals");
module.exports = {
  mode: "production",
  target: "web",
  entry: "./lib/index.js",
  module: {
    rules: [
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: [/node_modules/, /demo/, /build/],
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: [nodeExternals()],
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
    library: {
      name: "ErrorGuardian",
      type: "umd",
      export: "default",
      umdNamedDefine: true,
    },
    globalObject: "this",
  },
};
