const express = require('express');
const { validateRegistrationMW } = require('../middlewares/user.mw');
const {
	getUsers,
	createUser,
	findUser,
	deleteUser,
	updateUser,
} = require('../controllers/userContraller');

// мідлвер для обробки JSON у запитах
const bodyParserMiddleware = express.json();

const router = express.Router();

// роутер експрессу, містить тіж самі методи маршрутизації що і app
router.get('/users', getUsers);
router.get('/users/:userId', findUser);
router.delete('/users/:userId', deleteUser);
router.put('/users/:userId', bodyParserMiddleware, updateUser);
router.post('/users', bodyParserMiddleware, validateRegistrationMW, createUser);

module.exports = router;