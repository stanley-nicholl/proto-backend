exports.up = function(knex, Promise) {
  return knex.schema.createTable('auth', (table) => {
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.string('hashed_password').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('auth')
}
