const express = require('express');
const {validateRegistrationMW} = require('./middlewares/user.mw')


const users = [{ id: 1 }, { id: 2 }];

// екземпляр експресівського серверу
const app = express();

// app містить функції які відповідають всім методам HTTP запиту
// app.get('/users', (req, res) => {
// 	console.log('users requested');

// 	// res.end(JSON.stringify(users));
// 	res.send(users);
// });

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

    if(Math.random() > 0.5) {
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

// мідлвер для обробки JSON у запитах
const bodyParserMiddleware = express.json()

app.post('/users', bodyParserMiddleware, validateRegistrationMW, (req, res, next) => {
  const newUser = req.user;

  newUser.id = users.length;
  newUser.createdAt = new Date();

  users.push(newUser);

  res.send(newUser);
});

/*
  1. Отримати дані користувача з запиту
  2. Перевірити дані
  3. Зберегти дані (потім у БД)
  4. Створити сесію для користувача (логін або перехід в акаунт)
  5. Відправити дані на клієнт
*/

const PORT = 3000;
const HOST = 'locahost';

app.listen(PORT);
