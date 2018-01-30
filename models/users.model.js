const db = require('../db/knex')
const Model = require('./model')('users') //plans is the table name

class usersModel extends Model {

  static getUserIdByEmail (email) {
    return db('users')
    .select('id', 'first_name' )
    .where({ email, admin: true })
    .first()
  }

}

module.exports = usersModel
