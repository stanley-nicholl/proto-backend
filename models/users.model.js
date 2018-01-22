const db = require('../db/knex')
const Model = require('./model')('users') //plans is the table name

class usersModel extends Model {}

module.exports = usersModel
