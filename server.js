const express = require('express');

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

const PORT = 3000;
const HOST = 'locahost';

app.listen(PORT);
