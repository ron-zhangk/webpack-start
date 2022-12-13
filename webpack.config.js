/*
 * @Author: zhangkai
 * @Date: 2022-12-09 18:20:19
 */
let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let webpack = require('webpack');

module.exports = {
  optimization: {
    // 抽离公共代码
    splitChunks: {
      // 分割代码块
      cacheGroups: {
        //缓存组
        common: {
          // 公共模块
          chunks: 'initial', // 从入口处开始就提取代码
          minSize: 0, // 大于多少字节我就抽离出来
          minChunks: 2, // 引用多少次抽离
        },
        vendor: {
          // 第三方模块
          priority: 1, // 权重，先抽取第三方模块
          test: /node_modules/, // 这里面你引了 node_modules 就把你抽离出来
          chunks: 'initial',
          minSize: 0,
          minChunks: 2,
        },
      },
    },
  },
  mode: 'development',
  entry: {
    index: './src/index.js',
  },
  devServer: {
    hot: true, // 启用热更新
    port: 3000,
  },
  resolveLoader: {
    modules: [path.resolve(__dirname, 'loaders')],
  },
  module: {
    noParse: /jquery/, // 不去解析jquery的依赖库
    rules: [
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.js$/,
        use: {
          loader: 'banner-loader',
          options: {
            text: 'zhangkai',
            filename: path.join(__dirname, 'banner.js'),
          },
        },
      },
      {
        test: /\.jpg$/,
        // 目的就是根据图片生成一个md5 发射到dist目录下， file-loader还会返回当前的图片路径
        // use:'file-loader',

        // url-loader 1）file-loader会处理路径
        use: {
          loader: 'url-loader',
          options: {
            limit: 1000 * 1024,
          },
        },
      },
      // {
      //   test: /\.js$/,
      //   exclude: /node_modules/,
      //   include: path.resolve(__dirname, 'src'),
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env'],
      //       plugins: [
      //         ['@babel/plugin-proposal-decorators', { legacy: true }],
      //         ['@babel/plugin-proposal-class-properties', { loose: true }],
      //         '@babel/plugin-transform-runtime',
      //       ],
      //     },
      //   },
      // },
    ],
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new webpack.IgnorePlugin(/.\/locale/, /moment/), // 忽略
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(), // 热更新插件
  ],
};
