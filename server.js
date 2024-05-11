const express = require('express');
const yup = require('yup');

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

app.get(
	'/test',
	(req, res, next) => {
		console.log('first callback');

		req.abracadabra = 'magic trick';

		next();
	},
	(req, res, next) => {
		console.log('second callback');
		console.log(req.abracadabra);
		next();
	},
	(req, res) => {
		console.log('third callback');
		res.send('all done');
	}
);

/*
  1. отримати дані користувача с запиту
  2. перевірити дані
  3. зберегти дані (потім у БД)
  4. створити сесію дял користувача
  5. відправити дані на кліент
*/

const bodyParserMiddleware = express.json();

const REGISTRATION_SCHEMA = yup.object({
	email: yup.string().email().required(),
	password: yup.string().min(8).max(16).required(),
	gender: yup.string(),
});

app.post('/users', bodyParserMiddleware, (req, res, next) => {
	REGISTRATION_SCHEMA.validate(req.body).then((validateUser) => {
		res.send(validateUser) 
	}).catch(err => {
		res.send(err.message);
	})
	console.log(req.body);
  res.send(req.body);
});

app.get('*', () => {
	console.log();
});

app.listen(PORT, HOST, () => {
	// коллбек стартує пілся успішного запуску сервера
	console.log(`Server started on ${HOST}:${PORT}`);
});
