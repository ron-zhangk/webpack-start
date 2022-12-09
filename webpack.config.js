/*
 * @Author: zhangkai
 * @Date: 2022-12-09 18:20:19
 */
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  module: {
    noParse: /jquery/, // 不去解析jquery的依赖库
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: [
              ['@babel/plugin-proposal-decorators', { legacy: true }],
              ['@babel/plugin-proposal-class-properties', { loose: true }],
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
    ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.IgnorePlugin(/.\/locale/, /moment/), // 忽略
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};
