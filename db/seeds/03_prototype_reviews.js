exports.seed = function(knex, Promise) {
  // Inserts sample users
  return knex('prototype_reviews').insert([
    { id: 1, prototype_id: 1, user_id: 2, painGain: true, simple: false, changeRequest: 'I like the direction of where this is going. Needs to enable other communication methods beyond text.', nextSteps: 'Review with Brian Delmico' },
    { id: 2, prototype_id: 2, user_id: 3, painGain: true, simple: false, changeRequest: 'While it is simple and our users will love it, we need to enable sorting capabilities that can extend across the entire collection.', nextSteps: 'Make the updates and shoot me the new experience next week'}
  ])
  .then(() => {
    return knex.raw(`SELECT setval('prototype_reviews_id_seq', (SELECT MAX(id) FROM prototype_reviews));`)
  })
}
