// import calc from './test';
// import 在生产环境会自动去除没用的代码
// tree-shaking 把没有用到的代码 自动删除掉

// console.log(calc.sum(1, 2));




let calc = require('./test');
// es6模块会默认把结果放在default上
// 且都会打包进去

console.log(calc.default.sum(1, 2));





// scope hosting 作用域提升
let a = 1;
let b = 2;
let c = 3;
let d = a + b + c; // 在webpack中自动省略 可以简化的代码
console.log('d================================', d);
