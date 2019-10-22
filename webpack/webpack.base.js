const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebPackPlugin = require('html-webpack-plugin');

const env = Object.keys(dotenv.config().parsed);

module.exports = {
  target: 'web',
  entry:{ index: './src/index.js'},

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif|woff|woff2|eot|ttf|otf|ico)$/,
        exclude: /node_modules/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
          outputPath: 'assets/images/'
        }
      },
      {
        test: /\.svg$/,
        use: ['@svgr/webpack']
      },
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },

  resolve: {
    extensions: ['*', '.js', '.jsx']
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeComments: true,
        minifyJS: true,
        minifyCSS: true
      }
    }),
    new webpack.EnvironmentPlugin(env)
  ],

  output: {
    path: path.join(__dirname, '../build'),
    filename: 'bundle.js',
    publicPath: '/'
  }
};
