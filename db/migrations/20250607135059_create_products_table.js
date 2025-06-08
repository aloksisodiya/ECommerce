/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
 return knex.schema.createTable('products', (table) => {
    table.increments('p_id').primary();
    table.decimal('price').notNullable();
    table.string('name', 1000).notNullable();
    table.integer('stock').notNullable().defaultTo(0);
    table.string('description');
    table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('products');
};
