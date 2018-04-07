exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('events', table => {
    table.increments('event_id')
    table.string('name')
    table.integer('year')
    table.string('description')
    table.string('link')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('events')
};
