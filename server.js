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

app.get('*', (req, res) => {
	console.log('users requested');
	res.send('test');
});

const PORT = 3000;
const HOST = 'locahost';

app.listen(PORT);
