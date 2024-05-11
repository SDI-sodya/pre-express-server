const express = require('express');
const { validateRegistrationMW } = require('./middleware/user.mw');
const { getUsers, createUser } = require('./controllers/userController');

// екземпляр серверу
const app = express();

const PORT = 3000;
const HOST = 'localhost';

// app містить функції які відповідають всім методам HTTP запиту
app.get('/users', getUsers);

/*
  1. отримати дані користувача с запиту
  2. перевірити дані
  3. зберегти дані (потім у БД)
  4. створити сесію дял користувача
  5. відправити дані на кліент
*/

const bodyParserMiddleware = express.json();

app.post('/users', bodyParserMiddleware, validateRegistrationMW, createUser);

app.get('*', () => {
	console.log();
});

app.listen(PORT, HOST, () => {
	// коллбек стартує пілся успішного запуску сервера
	console.log(`Server started on ${HOST}:${PORT}`);
});
