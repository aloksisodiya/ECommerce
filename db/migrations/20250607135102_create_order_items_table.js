/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('order_items',(table)=>{
    table.increments('id').primary();
    table.integer('order_id').notNullable().references('o_id').inTable('orders').onDelete('CASCADE');
    table.integer('product_id').notNullable().references('p_id').inTable('products').onDelete('CASCADE');
    table.integer('quantity').notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
 return knex.schema.dropTable('order_items');
};
