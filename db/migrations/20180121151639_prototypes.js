exports.up = function(knex, Promise) {
  return knex.schema.createTable('prototypes', (table) => {
    table.increments()
    table.string('name').notNullable().defaultTo('')
    table.text('description').notNullable().defaultTo('')
    table.text('userStory').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('prototypes')
}
