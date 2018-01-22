exports.seed = function(knex, Promise) {
  // Inserts sample users
  return knex('prototypes').insert([
    { id: 1, name: 'Digital Employee Management', description: 'Enabling rapid communication and management of our floor employees. Cut down on paperwork, decrease management oversight needs, and communicate with employees via their preferred method (digital).', userStory: "You're the general manager of our Seattle store. Tomorrow starts our yearly sale, the biggest day of the year for us. You have a need to shuffle a few shifts around for your employees, but only a few minutes to alert those affected of their new shifts. Go ahead and jump and and look send an update to Jennifer and Steve." },
    { id: 2, name: 'Exploring the Unknown', description: 'As we got further and further away, it [the Earth] diminished in size. Finally it shrank to the size of a marble, the most beautiful you can imagine. That beautiful, warm, living object looked so fragile, so delicate, that if you touched it with a finger it would crumble and fall apart. Seeing this has to change a man.', userStory: "There can be no thought of finishing for ‘aiming for the stars.’ Both figuratively and literally, it is a task to occupy the generations. And no matter how much progress one makes, there is always the thrill of just beginning." },

  ])
  .then(() => {
    return knex.raw(`SELECT setval('prototypes_id_seq', (SELECT MAX(id) FROM prototypes));`)
  })
}
