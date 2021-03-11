
exports.up = function(knex) {
  return knex.schema.createTable('plants', (table) => {
      table.increments('id').primary()
      table.string('species')
      table.string('typeOf')
      table.string('origin')
      table.string('humidity')
      table.string('temprature')
      table.string('climate')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('plants')
};
