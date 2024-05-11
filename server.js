const express = require('express');
const router = require('./routers');

// екземпляр експресівського серверу
const app = express();

// app містить функції які відповідають всім методам HTTP запиту

// MW router змонтовано в app
app.use(router);

const PORT = 3000;
const HOST = 'localhost';

app.listen(PORT, HOST, (req, res) => {
	console.log(`Server starting at ${HOST}:${PORT}`);
});
