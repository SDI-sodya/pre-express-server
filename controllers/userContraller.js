const User = require('../models/User')

module.exports.getUsers = async (req, res) => {
	console.log('users requested');

  const users = await User.findAll

	// res.end(JSON.stringify(users));
	res.send(users);
}

module.exports.createUser = async (req, res, next) => {
  const newUser = await User.create(req.user)

  res.send(newUser);
};