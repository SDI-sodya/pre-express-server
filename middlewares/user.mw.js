const {REGISTRATION_SCHEMA} = require('../validation/userChemas')

module.exports.validateRegistrationMW = (req, res, next) => {
  REGISTRATION_SCHEMA.validate(req.body).then((validatedUser) => {
    req.user = validatedUser;
    next()
  }).catch(err => {
    res.send(err.message) // типо вернул ошибку. Не делать так лучше
  })
}