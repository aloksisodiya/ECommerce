/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name');
    table.string('email').unique();
    table.string('password');
    table.timestamps(true, true);
  });

  await knex.schema.createTable('products', (table) => {
    table.increments('p_id').primary();
    table.decimal('price').notNullable();
    table.string('name', 1000).notNullable();
    table.string('description');
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('products');
  await knex.schema.dropTableIfExists('users');
};
