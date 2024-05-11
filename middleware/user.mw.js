const { REGISTRATION_SCHEMA } = require('../validations/userSchemas');

module.exports.validateRegistrationMW = (req, res, next) => {
	REGISTRATION_SCHEMA.validate(req.body)
		.then((validateUser) => {
			req.user = validateUser;
			next();
		})
		.catch((err) => {
			res.send(err.message);
		});
};
