exports.seed = function(knex, Promise) {
  // Inserts sample users
  return knex('prototypes').insert([
    { id: 1, name: 'Digital Employee Management', description: 'Enabling rapid communication and management of our floor employees. Cut down on paperwork, decrease management oversight needs, and communicate with employees via their preferred method (digital).', userStory: "You're the general manager of our Seattle store. Tomorrow starts our yearly sale, the biggest day of the year for us. You have a need to shuffle a few shifts around for your employees, but only a few minutes to alert those affected of their new shifts. Go ahead and send an update to Luke and Han." },
    { id: 2, name: 'Exploring Swift', description: 'Learning about how our users want to discover music, specifically with regards to the multi-platinum artist, Taylor Swift, will help us unlock the future.', userStory: "You're a diehard music fan who loves to dance. Take a look through the T-Swift catalog and add a few items to your Amazon shopping cart. Pay attention to order, flow, and ease of use as you navigate through the browsing and shopping experience." },

  ])
  .then(() => {
    return knex.raw(`SELECT setval('prototypes_id_seq', (SELECT MAX(id) FROM prototypes));`)
  })
}
