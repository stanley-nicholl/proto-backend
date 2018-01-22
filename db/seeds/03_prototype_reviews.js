exports.seed = function(knex, Promise) {
  // Inserts sample users
  return knex('prototype_reviews').insert([
    { id: 1, prototype_id: 1, user_id: 1, feedback: 'I like the direction of where this is going. Needs to enable other communication methods beyond text.', rating: 4, request: 'review with Brian Delmico' },
    { id: 2, prototype_id: 1, user_id: 3, feedback: 'I like the direction of where this is going. Needs to enable other communication methods beyond text.', rating: 4, request: 'review with Brian Delmico' }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('prototype_reviews_id_seq', (SELECT MAX(id) FROM prototype_reviews));`)
  })
}
