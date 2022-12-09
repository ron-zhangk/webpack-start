// import 'bootstrap';
import './style';

let url = '';
if (DEV === 'dev') {
  url = 'http://localhost:3000';
} else {
  url = 'https://www.baidu.com';
}

console.log(typeof EXPRESSION)
console.log(typeof FLAG)
console.log('URL------', url);

// console.log('home')

// class Log {
//   constructor() {
//     console.log('111000')
//   }
// }

// let log = new Log

// http://localhost:8080 webpack-dev-server 的服务 => 3000

// http-proxy
let xhr = new XMLHttpRequest();

xhr.open('GET', '/user', true);

xhr.onload = function () {
  console.log(xhr.response);
};

xhr.send();
