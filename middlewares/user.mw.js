const {REGISTRATION_SCHEMA} = require('../validation/userChemas')

module.exports.validateRegistrationMW = async (req, res, next) => {
  try {
    const validatedUser = await REGISTRATION_SCHEMA.validate(req.body);

    req.user = validatedUser;
    next()
    
  } catch (error) {
   // типо вернул ошибку. Не делать так лучше
    res.send(err.message)
  }
};