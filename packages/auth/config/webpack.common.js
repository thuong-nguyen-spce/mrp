const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  module: {
    rules: [
      {
        test: /\.m?js$/, // regex to find all js files
        exclude: /node_modules/, // ignore node_modules folder
        use: {
          loader: "babel-loader", // use babel-loader to transpile js files
          options: {
            presets: [
              "@babel/preset-react", // use react preset
              "@babel/preset-env", // use env preset
            ],
            plugins: [
              "@babel/plugin-transform-runtime", // use babel runtime plugin
            ],
          },
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
};
