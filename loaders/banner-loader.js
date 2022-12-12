let loaderUtils = require('loader-utils');
let schemaUtils = require('schema-utils');
let fs = require('fs');

function loader(source) {
  let options = loaderUtils.getOptions(this);
  let cb = this.async();
  let schema = {
    type: 'object',
    properties: {
      text: {
        type: 'string',
      },
      filename: {
        type: 'string',
      },
    },
  };
  schemaUtils.validate(schema, options, 'banner-loader');
  if (options.filename) {
    this.addDependency(options.filename); // 监听 自动添加文件依赖
    fs.readFile(options.filename, 'utf8', function (err, data) {
      cb(err, `/**${data}**/${source}`);
    });
  } else {
    cb(null, `/**${options.text}**/${source}`);
  }
  return source;
}

module.exports = loader;
