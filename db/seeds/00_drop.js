exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('prototype_reviews').del()
    .then(() => knex('users').del())
    .then(() => knex('prototypes').del())
}
