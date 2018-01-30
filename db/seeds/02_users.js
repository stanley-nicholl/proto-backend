exports.seed = function(knex, Promise) {
  // Inserts sample users
  return knex('users').insert([
    { id: 1, first_name: 'Stanley', last_name: 'Nicholl', position: 'The Architect', email: 'admin@admin.com', image: `nicholl`, admin: true, prototype_id: null },
    { id: 2, first_name: 'Carrie', last_name: 'Fischer', position: 'VP of Hope', email: 'cfischer@rebellion.com', image: `https://am22.akamaized.net/tms/cnt/uploads/2017/08/leiatop1-650x574.jpg`, admin: false, prototype_id: 1 },
    { id: 3, first_name: 'David', last_name: 'Bowie', position: 'Chief Dance Officer', email: 'spaceOddity@dancewith.us', image: `https://i1.wp.com/ajournalofmusicalthings.com/wp-content/uploads/2016/11/David-Bowie-Aladdin-Sane.jpg?fit=1520%2C855`, admin: false, prototype_id: 2 },
    { id: 4, first_name: 'Adam', last_name: 'West', position: 'Director of Fear & Justice', email: 'thebatman@gothamunderground.bat', image: `https://4.bp.blogspot.com/--4Y7JD-SgVQ/WT6q5StejbI/AAAAAAAAC0A/rkAaipDsSe8RFEI6oLXr8p6hqbha7PGpQCLcB/s1600/BatmanWithBomb.jpg`, admin: false, prototype_id: 1 },
    { id: 5, first_name: 'Doc', last_name: 'Brown', position: 'Director of Time', email: '88@outtatime.com', image: `http://digitalspyuk.cdnds.net/14/23/1600x800/landscape_movies-back-to-the-future-02.jpg`, admin: true, prototype_id: null }
  ])
  .then(() => {
    return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users));`)
  })
}
