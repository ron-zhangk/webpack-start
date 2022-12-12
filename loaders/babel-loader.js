/*
 * @Author: zhangkai
 * @Date: 2022-12-12 17:33:39
 */
let babel = require('@babel/core');
let loaderUtils = require('loader-utils');

function loader(source) {
  let optios = loaderUtils.getOptions(this);
  let cb = this.async();
  babel.transform(
    source,
    {
      ...optios,
      sourceMap: true,
      filename: this.resourcePath.split('/').pop(), // 文件明
    },
    function (err, result) {
      cb(err, result.code, result.map); // 异步
    },
  );
  return source;
}

module.exports = loader;
