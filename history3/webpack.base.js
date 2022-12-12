/*
 * @Author: zhangkai
 * @Date: 2022-12-07 16:41:06
 */
const path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let { CleanWebpackPlugin } = require('clean-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let webpack = require('webpack');

// 1）cleanWebpackPlugin
// 2）copyWebpackPlugin
// 3）bannerPlugin 内置的 版权声明插件

module.exports = {
  mode: 'production',
  entry: {
    home: './src/index.js',
  },
  devServer: {
    proxy: {
      // 重写的方式 把请求代理到express服务器上
      '/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '/api': '',
        },
      }, // 配置了一个代理
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    // 解析 第三方包 common
    modules: [path.resolve('node_modules')],
    extensions: ['.js', '.jsx', '.css', '.json', '.vue'], // 引入文件不用加后缀
    // mainFields: ['style', 'main'], // 寻找顺序
    // mainFiles: [], // 入口文件的名字 没有默认就是index.js
    // alias: { // 别名
    //   bootstrap: 'bootstrap/dist/css/bootstrap.css',
    // },
  },
  // watch: true,
  // watchOptions: {
  //   // 监控的选项
  //   poll: 1000, // 每秒问我 1000
  //   aggregateTimeout: 500, // 防抖  我一直输入代码
  //   ignored: /node_modules/, // 不需要进行监控哪个文件
  // },

  // 1）源码映射  会单独生成一个sourcemap文件  出错了 会标识当前报错的列和行 特点：大而全
  devtool: 'source-map', //增加映射文件  可以帮我们调试源代码
  // 2) 不会产生单独的文件 但是可以显示列和行
  // devtool: 'eval-source-map',
  // 3) 不会产生列 但是是一个单独的映射文件
  // devtool:'cheap-module-source-map', // 产生后你可以保留起来
  // 4) 不会产生文件  集成在打包后的文件中 不会产生列
  // devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({ // 定义环境变量
      DEV: JSON.stringify('production'),
      FLAG: 'true',
      EXPRESSION: '1+1',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
    // new CleanWebpackPlugin(),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     {
    //       from: './doc',
    //       to: './',
    //     },
    //   ],
    // }),
    // new webpack.BannerPlugin('make 2022 by zk')
  ],
};
