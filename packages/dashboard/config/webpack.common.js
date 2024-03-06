const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
  entry: "./src/index.js", // entry point of our app
  output: {
    filename: "[name].[contenthash].js", // output file name [name] will be replaced by the name of the entry point [contenthash] will be replaced by a unique hash for the file
  },
  resolve: {
    extensions: [".js", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|woff|svg|eot|ttf)$/i,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
      {
        test: /\.vue$/, // regex to find all vue files
        loader: "vue-loader", // use
      },
      {
        test: /\.scss|.css$/, // regex to find all css files
        use: ["vue-style-loader", "style-loader", "css-loader", "sass-loader"], // use vue-style-loader and css-loader
      },
      {
        test: /\.m?js$/, // regex to find all js files
        exclude: /node_modules/, // ignore node_modules folder
        use: {
          loader: "babel-loader", // use babel-loader to transpile js files
          options: {
            presets: [
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
  plugins: [new VueLoaderPlugin()],
};
