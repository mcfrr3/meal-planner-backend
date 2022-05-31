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
  .createTable('recipe', tbl => {
      tbl.increments('recipe_id')
      tbl.integer('mealsDB-id')
        .notNullable()
        .unique();
      tbl.varchar('recipe_name', 128) 
        .notNullable()
        .unique();
  })
  .createTable('favorite_recipe', tbl => {
      tbl.integer('user_id')
        .unsigned()
        .notNullable()
        .references('user_id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl.integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('recipe_id')
        .inTable('recipe')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
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
