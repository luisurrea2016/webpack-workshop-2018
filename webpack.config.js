const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpackMerge = require("webpack-merge");
const MyFirstWebpackPlugin = require("./build-utils/MyFirstWebpackPlugin");

const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);
const presetConfig = require("./build-utils/loadPresets");

module.exports = ({ mode, presets } = { mode: "production", presets: [] }) => {
  return webpackMerge(
    {
      resolveLoader: {
        alias: {
          'my-loader': require.resolve('./build-utils/my-loader.js'),
        },
      },
      mode: 'none',
      module: {
        rules: [
          {
            test: /\.js/,
            use: 'my-loader',
          },
          {
            test: /\.jpe?g$/,
            use: [
              {
                loader: "url-loader",
                options: {
                  limit: 5000
                }
              }
            ]
          }
        ]
      },
      output: {
        filename: "bundle.js",
        chunkFilename: '[name].lazy-cunk.js'
      },
      plugins: [new MyFirstWebpackPlugin(), new HtmlWebpackPlugin(), new webpack.ProgressPlugin()]
    },
    modeConfig(mode),
    presetConfig({ mode, presets })
  );
};
