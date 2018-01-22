const db = require('../db/knex')
const Model = require('./model')('prototypes') //plans is the table name

class prototypesModel extends Model{

  static getReviews (id) {
    return db('prototype_reviews')
    .select('*')
    .where({ prototype_id: id})
  }

  static createReview(body) {
    return db('prototype_reviews')
    .insert(body)
    .returning('*')
  }

}

module.exports = prototypesModel
