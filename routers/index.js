const express = require('express');
const userRouter = require('./userRouter');

const router = express.Router();

// роутер експрессу, містить тіж самі методи маршрутизації що і app

router.use('/users', userRouter);

module.exports = router;
