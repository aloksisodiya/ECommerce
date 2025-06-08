/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('cart',(table)=>{
    table.increments('cart_id').primary();
    table.integer('u_id').notNullable().references('user_id').inTable('users').onDelete('CASCADE');
    table.integer('product_id').notNullable().references('p_id').inTable('products').onDelete('CASCADE');
    table.integer('quantity').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('cart');
};