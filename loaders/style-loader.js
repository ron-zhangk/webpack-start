let loaderUtils = require('loader-utils');

function loader(source) {
  // 在style-loader中导出一个脚本
  let str = `
    let style = document.createElement('style');
    style.innerHTML = ${JSON.stringify(source)};
    document.head.appendChild(style);
  `;
  return str;
}
// 在style-loader上写了 pitch
// style-loader   css-loader!less-loader!./index.less
loader.pitch = function (remainingRequest) {
  // 剩余的请求
  // 让style-loader 去处理css-loader!less-loader!./index.less
  // require路径返回的就是css-loader处理好的结果 require('!!css-loader!less-loader!index.less')
  console.log(remainingRequest);
  let str = `
    let style = document.createElement('style');
    style.innerHTML = ${loaderUtils.stringifyRequest(this, '!!' + remainingRequest)};
    document.head.appendChild(style);
  `;
  return str;
};

module.exports = loader;
