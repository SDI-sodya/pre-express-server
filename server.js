const express = require('express');
const REGISTRATION_SCHEMA = require('./validations/userSchemas');

const users = [{ id: 1 }, { id: 2 }];

// екземпляр серверу
const app = express();

const PORT = 3000;
const HOST = 'localhost';

// app містить функції які відповідають всім методам HTTP запиту
app.get('/users', (req, res) => {
	console.log('users requested');
	res.send(JSON.stringify(users));
});

/*
  1. отримати дані користувача с запиту
  2. перевірити дані
  3. зберегти дані (потім у БД)
  4. створити сесію дял користувача
  5. відправити дані на кліент
*/

const bodyParserMiddleware = express.json();

app.post('/users', bodyParserMiddleware, (req, res, next) => {
	REGISTRATION_SCHEMA.validate(req.body).then((validateUser) => {
		req.user = validateUser;
		next();
	}).catch(err => {res.send(err.message);});
}, (req, res, next) => {
	const newUser = req.user;

	newUser.id = users.length;
	newUser.createdAt = new Date();

	users.push(newUser);

	res.send(newUser);
});

app.get('*', () => {
	console.log();
});

app.listen(PORT, HOST, () => {
	// коллбек стартує пілся успішного запуску сервера
	console.log(`Server started on ${HOST}:${PORT}`);
});
