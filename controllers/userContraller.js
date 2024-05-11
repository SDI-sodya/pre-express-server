const User = require('../models/User');

module.exports.getUsers = async (req, res) => {
	console.log('users requested');

	const users = await User.findAll;

	// res.end(JSON.stringify(users));
	res.send(users);
};

module.exports.createUser = async (req, res, next) => {
	const newUser = await User.create(req.user);

	res.send(newUser);
};

module.exports.findUser = async (req, res, next) => {
	const { userId } = req.params;

	const user = await User.findOne(+userId);

	res.send(user);
};

module.exports.deleteUser = async (req, res, next) => {
	const { userId } = req.params;
	const deletedUser = await User.delete(+userId);

	res.send(deletedUser);
};

module.exports.updateUser = async (req, res, next) => {
  const { params: { userId }, body } = req;

  const updatedUser = await User.update(+userId, body);
  res.send(updatedUser);
};
