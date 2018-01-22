exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments()
    table.string('first_name').notNullable().defaultTo('')
    table.string('last_name').notNullable().defaultTo('')
    table.string('position').notNullable().defaultTo('')
    table.string('email').notNullable().defaultTo('')
    table.string('image').notNullable().defaultTo('')
    table.boolean('admin').defaultTo(false)
    table.integer('prototype_id')
    table.foreign('prototype_id').references('prototypes.id').onDelete('CASCADE')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
}
