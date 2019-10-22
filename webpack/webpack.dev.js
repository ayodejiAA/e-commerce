const merge = require('webpack-merge');
const path = require('path');
const webpack = require('webpack');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.join(__dirname, '../src'),
    publicPath: '/',
    compress: true,
    hot: true,
    port: 8080,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/
    }
  },

  plugins: [new webpack.HotModuleReplacementPlugin()]
});
