const db = require('../db/knex')

module.exports = tableName => {
  class Model {
    static all () {
      return db(tableName)
    }

    static find (id) {
      return db(tableName)
      .select('*')
      .where({ id })
      .first()
    }

    static create (body) {
      return db(tableName)
      .insert(body)
      .returning('*')
      .first()
    }

    static update (id, body) {
      return db(tableName)
      .where({ id })
      .update(body)
      .returning('*')
      .first()
    }

    static destroy (id) {
      return db(tableName)
      .where({ id })
      .delete()
    }
  }

  return Model
}
