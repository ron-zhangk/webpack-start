/*
 * @Author: zhangkai
 * @Date: 2021-09-17 17:02:02
 */

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/main.js',
  },
  output: {
    filename: '[name].bundle.js',
    // chunkFilename: '[name].bundle.js'  这样会将拆分出来的 bundle 命名为 lodash.bundle.js，而不是 [id].bundle.js
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {// 打开浏览器的
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
  },
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  },
  optimization: { // 移除重复模块
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    // new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({
      title: '开发环境',
      template: './app.html'
    })
  ]
};

// hot module replacement(热模块替换) 能力的 localhost server
// live reloading(实时重新加载)
// source map 错误定位 （devtool: 'inline-source-map',）
// tree shaking 模块打包工具  按照引入
// SplitChunksPlugin 插件来移除重复模块