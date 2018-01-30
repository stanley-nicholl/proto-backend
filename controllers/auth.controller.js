const Controller = require('./controller')('auth')
const { authModel, usersModel, tokenModel } = require('../models')
const bcrypt = require('bcryptjs')

class authController extends Controller {

  static isAdmin (req, res, next) {
    // Validate and decode token
    tokenModel.verifyAndExtractHeaderToken(req.headers)
    .catch(err => { throw new Error('invalidToken') })
    // Check for and retrieve user from database
    .then(token => usersModel.find(token.sub.id))
    // Verify user
    .then(user => {
      if (!user) throw new Error('requestorInvalid')
      if (user.admin !== true) throw new Error('unauthorizedUser')
      next() // pass auth check
    })
    .catch(next) // fail auth check
  }

  static signin (req, res, next) {
    console.log(req.body);
    // *** Login requires email and password (no token), and will return a token ***
    // Get supplied email and password and grab user match from db
    let name
    const { email, password } = req.body
    if (!email) throw new Error('missingEmail')
    if (!password) throw new Error('missingPassword')
    // Retrieve user match from database
    usersModel.getUserIdByEmail(email)
    .then(result => {
      if (!result) throw new Error('userNotAdmin')
      // Get hash from auth database
      name = result.first_name
      return authModel.find(result.id)
    })
    .then(result => {
      // Check for supplied password match against stored hash
      if (!bcrypt.compareSync(password, result.hashed_password)) throw new Error('invalidPassword')
      // Sign new token with user id
      return tokenModel.sign(result.user_id)
    })
    // Return token to client
    .then(token => res.status(200).json({ Auth: token, name: name }))
    .catch(next)
  }

  static signup (req, res, next) {
    // *** Signup will create a new user; no token is required, however a token will be returned ***
    const { email, first_name, last_name } = req.body
    // Verify fields exist
    if (!first_name) throw new Error('missingFirstname')
    if (!last_name) throw new Error('missingLastname')
    if (!email) throw new Error('missingEmail')
    // Verify that email is unique
    UserModel.getUserIdByEmail(email)
    .then(existingUser => {
      if (existingUser) throw new Error('duplicateUser')
      // If unique, add new user to users database; all new users created with role of 'user'
      const newUser = { email, first_name, last_name }
      return UserModel.create(newUser)
    })
    .then(newUser => {
      // Add hashed password to auth table
      const hashed_password = bcrypt.hashSync(password)
      return AuthModel.create({ user_id: newUser.id, hashed_password })
    })
    // Sign and return a token for the new user
    .then(result => TokenModel.sign(result.user_id))
    // Return token to client
    .then(token => res.status(201).json({ Auth: token }))
    .catch(next)
  }

}

module.exports = authController
