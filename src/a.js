// webpack 打包我们的图片
// 1、在JS中创建图片来引用
// file-loader 默认会在内部生成一张图片 到build目录下
// 把生成的图片名字返回回来
import './index.css'
import dog from './dog.png';
let image = new Image();
console.log(dog)
image.src = dog; // 就是一个普通的字符串
document.body.appendChild(image);
// 2、在css引入background('url')
// 3、<img src="" alt="">

// module.exports = 'zfpx';
// require('@babel/polyfill')

// class B {}

// function* generate() {
//   yield 1;
// }

// console.log(generate().next());

// "aaa".includes('a')

// import $ from 'jquery'
// //expose-loader 暴露全局的loader  内联的loader
// // pre 前面执行的loader  post 后置支持的loader  normal 普通的loader

// console.log(window.$)
