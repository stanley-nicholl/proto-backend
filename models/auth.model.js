const db = require('../db/knex')
const Model = require('./model')('auth') //plans is the table name

class authModel extends Model {

  static find (userId) {
    return db('auth')
    .where({ user_id: userId })
    .first()
  }
  
}

module.exports = authModel
