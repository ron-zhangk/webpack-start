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
