/*
 * @Author: zhangkai
 * @Date: 2022-12-07 17:36:15
 */
// express

let express = require('express');

let app = express();

app.get('/user', (req, res) => {
  res.json({ name: 'ron test11' });
});

app.listen(3000);
