/*
 * @Author: zhangkai
 * @Date: 2022-11-01 15:51:39
 */
let str = require('./a.js');
console.log(str);

require('./index.css');

require('./index.less');

let fn = () => {
  console.log('test log');
};
fn();

@log
class A {
  a = 1;
}

let a = new A();

console.log(a.a);

function log(target) {
  console.log(target);
}
