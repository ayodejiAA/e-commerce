const merge = require('webpack-merge');
const TerserPlugin = require('terser-webpack-plugin');
const baseConfig = require('./webpack.base');

module.exports = merge(baseConfig, {
  mode: 'production',
  devtool: 'source-map',

  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin({ cache: true, parallel: true })]
  }
});
