exports.up = function(knex, Promise) {
  return knex.schema.createTable('prototype_reviews', (table) => {
    table.increments()
    table.integer('prototype_id').notNullable()
    table.foreign('prototype_id').references('prototypes.id').onDelete('CASCADE')
    table.integer('user_id').notNullable()
    table.foreign('user_id').references('users.id').onDelete('CASCADE')
    table.text('feedback').notNullable().defaultTo('')
    table.integer('rating').notNullable().defaultTo(0)
    table.string('request').notNullable().defaultTo('')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('prototype_reviews')
};
