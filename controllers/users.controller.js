const Controller = require('./controller')('users') //Plan is the model name
const { usersModel, tokenModel, authModel } = require('../models')
const bcrypt = require('bcryptjs')

class usersController extends Controller {

  static showOneFromToken (req, res, next) {
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

  static createAdmin (req, res, next) {
    const hashed_password = bcrypt.hashSync('password')
    authModel.createAdmin(req.newAdmin.id, hashed_password)
    .then(response => res.status(201).json({ [name]: response }))
    .catch(next)
  }

}

module.exports = usersController
