const express = require('express');
const { validateRegistrationMW } = require('../middlewares/user.mw');
const {
	getUsers,
	createUser,
	findUser,
	deleteUser,
	updateUser,
} = require('../controllers/userContraller');

const userRouter = express.Router();

userRouter.get('/', getUsers);
userRouter.get('/:userId', findUser);
userRouter.delete('/:userId', deleteUser);
userRouter.put('/:userId', updateUser);
userRouter.post('/', validateRegistrationMW, createUser);

module.exports = userRouter;
