/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema
  .createTable('users', tbl => {
      tbl.increments('user_id');
      tbl.varchar('username', 64)
        .notNullable()
        .unique();
      tbl.varchar('password', 128)
        .notNullable();
  })
  .createTable('favorite_recipe', tbl => {
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users');
      tbl.integer('mealDB_id')
        .unsigned()
        .notNullable();
      tbl.primary(['user_id', 'mealDB_id']);
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists('favorite_recipe')
  .dropTableIfExists('recipe')
  .dropTableIfExists('users');
};
