exports.seed = function(knex, Promise) {
  // Plain text password for all sample users is 'password'
  return knex('auth').insert([
    { user_id: 1, hashed_password: '$2a$10$w8ogbY524E441yPnbLmOTutsux895tuzO4wIUFDfVLghjvyUDPwxS' },
    { user_id: 5, hashed_password: '$2a$10$u8NM/0DijGnLCjP9aZTsX.ogmzDO51FzVGZYNYxfP34br3zBFDQ8K' }
  ])
}
