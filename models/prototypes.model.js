const db = require('../db/knex')
const Model = require('./model')('prototypes') //plans is the table name

class prototypesModel extends Model{

  static getReviews (id) {
    return db('prototype_reviews')
    .join('users', 'prototype_reviews.user_id', 'users.id')
    .join('prototypes', 'prototype_reviews.prototype_id', 'prototypes.id')
    .select('prototype_reviews.id', 'prototypes.id as prototype_id', 'prototypes.name', 'prototype_reviews.painGain', 'prototype_reviews.simple', 'prototype_reviews.changeRequest', 'prototype_reviews.nextSteps', 'users.id as user_id', 'users.first_name', 'users.last_name')
    .where({ 'prototype_reviews.prototype_id': id})
  }

  static createReview(body) {
    console.log(body);
    return db('prototype_reviews')
    .insert(body)
    .returning('*')
  }

}

module.exports = prototypesModel
