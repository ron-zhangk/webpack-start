/*
 * @Author: zhangkai
 * @Date: 2022-11-01 16:00:52
 */
// webpack 是 node 写出来的  node写法
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devServer: {
    // 开发服务器的配置
    port: 3000,
    static: {
      directory: path.join(__dirname, 'build'),
    },
    compress: true, // 是否启用gzip压缩
  },
  mode: 'production', // 模式 默认两种  production development
  entry: './src/index.js', // 入口
  output: {
    filename: 'bundle.[hash:8].js', // 打包后的文件名
    path: path.resolve(__dirname, 'build'), // 路径必须是一个绝对路径
  },
  plugins: [
    // 数组 放着所有的webpack插件
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      minify: {
        removeAttributeQuotes: true, // 双引号
        collapseWhitespace: true, // 回车
      },
      hash: true
    }),
  ],
};
