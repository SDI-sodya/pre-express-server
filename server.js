const express = require('express');
const { validateRegistrationMW } = require('./middlewares/user.mw');
const {
	getUsers,
	createUser,
	findUser,
	deleteUser,
	updateUser,
} = require('./controllers/userContraller');

// екземпляр експресівського серверу
const app = express();

// мідлвер для обробки JSON у запитах
const bodyParserMiddleware = express.json();

// app містить функції які відповідають всім методам HTTP запиту
app.get('/users', getUsers);
app.get('/users/:userId', findUser);
app.delete('/users/:userId', deleteUser);
app.put('/users/:userId', bodyParserMiddleware, updateUser);
app.post('/users', bodyParserMiddleware, validateRegistrationMW, createUser);

// app.get('*', (req, res) => {
// 	console.log('users requested');
// 	res.send('test');
// });

app.get(
	'/test',
	(req, res, next) => {
		console.log('first callback');

		req.abracadabra = 'magic trick';

		// функція сигналізує що можна переходити на наступний обробник
		next();
	},
	(req, res, next) => {
		console.log('second callback');
		console.log(req.abracadabra);

		if (Math.random() > 0.5) {
			next();
		} else {
			res.send('ERROR happened');
		}
	},
	(req, res) => {
		console.log('third callback');
		res.send('all done');
	}
);

/*
  1. Отримати дані користувача з запиту
  2. Перевірити дані
  3. Зберегти дані (потім у БД)
  4. Створити сесію для користувача (логін або перехід в акаунт)
  5. Відправити дані на клієнт
*/

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, HOST, (req, res) => {
	console.log(`Server starting at ${HOST}:${PORT}`);
});
