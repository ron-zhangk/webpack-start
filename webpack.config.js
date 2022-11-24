/*
 * @Author: zhangkai
 * @Date: 2022-11-01 18:29:56
 */
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.resolve(__dirname, 'build'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true,
        collapseWhitespace: true,
      },
      hash: true,
    }),
  ],
  module: {
    rules: [
      // css-loader 接续 @import 这种语法的
      // style-loader 它是把 css 插入到header的标签中
      // loader的特点 希望单一
      // loader的用法 字符串只用一个loader  多个loader需要用数组
      // loader的顺序 默认是从右向左执行 从下至上
      // loader还可以写成对象方式
      {
        // 可以处理css文件
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'top'
            }
          },
          'css-loader',
        ],
      },
      {
        // 可以处理less文件
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
            options: {
              insert: 'top'
            }
          },
          'css-loader', // @import 解析路径
          'less-loader' // 把less -> css
        ],
      },
    ],
  },
};
