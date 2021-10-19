/*
 * @Author: zhangkai
 * @Date: 2021-09-17 17:02:02
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/main.js',
  },
  output: {
    // filename: '[name].bundle.js',
    // path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '开发环境'
    })
  ]
};