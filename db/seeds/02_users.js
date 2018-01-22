exports.seed = function(knex, Promise) {
  // Inserts sample users
  return knex('users').insert([
    { id: 1, first_name: 'Stanley', last_name: 'Nicholl', position: 'The Architect', email: 'admin@admin.com', image: `nicholl`, admin: true, prototype_id: null },
    { id: 2, first_name: 'Carrie', last_name: 'Fischer', position: 'VP of Hope', email: 'cfischer@rebellion.com', image: `carrie`, admin: false, prototype_id: 1 },
    { id: 3, first_name: 'David', last_name: 'Bowie', position: 'Chief Dance Officer', email: 'spaceOddity@dancewith.us', image: `bowie`, admin: false, prototype_id: null }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
  })
}
