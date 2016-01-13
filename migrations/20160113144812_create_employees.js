exports.up = function(knex, Promise) {
  return knex.schema.createTable('employees', function(table){
    table.increments();
    table.string('first_name');
    table.string('last_name');
    table.integer('restaurant_id');
    table.integer('employee_id');
    table.text('employee_notes');
    table.timestamps();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('employees');
};
