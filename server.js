const express = require('express');

const users = [{id: 1}, {id: 2}];

// екземпляр серверу
const app = express();

// app містить функції які відповідають всім методам HTTP запиту
app.get('/users',(req, res) => {
  console.log('users requested');
  
  // res.end(JSON.stringify(users));
  res.send(JSON.stringify(users));
});
// app.post();
// app.put();
// app.delete();

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, HOST, () => {
  // коллбек стартує пілся успішного запуску сервера
  console.log(`Server started on ${HOST}:${PORT}`);
});