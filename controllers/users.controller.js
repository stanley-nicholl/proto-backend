const Controller = require('./controller')('users') //Plan is the model name
const { usersModel, tokenModel } = require('../models')

class usersController extends Controller {

  static showOneFromToken (req, res, next) {
    console.log('test');
    console.log(req.headers);
    // Validate and decode token
    tokenModel.verifyAndExtractHeaderToken(req.headers)
    .catch(err => { throw new Error('invalidToken') })
    // Check for and retrieve user from database
    .then(token => usersModel.find(token.sub.id))
    .then(result => {
      if (!result) throw new Error('noSuchUser')
      return res.status(200).json({ User: result })
    })
    .catch(next)
  }

}

module.exports = usersController
