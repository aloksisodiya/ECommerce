/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('orders',(table)=>{
    table.increments('o_id').primary();
    table.timestamp('order_date').defaultTo(knex.fn.now());
    table.string('order_by').notNullable();
    table.timestamps(true,true);
  });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
