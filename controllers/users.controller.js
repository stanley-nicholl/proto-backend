const Controller = require('./controller')('users') //Plan is the model name
const { usersModel } = require('../models')

class usersController extends Controller {}

module.exports = usersController
