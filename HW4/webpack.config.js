// webpack.config.js
var webpack = require('webpack');
module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: 'src/index.js',
  output: {
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/
    }]
  }
};