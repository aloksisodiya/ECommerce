/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('reviews',(table)=>{
    table.increments('id').primary();
    table.string('reviewer_name');
    table.string('rating').notNullable();
    table.text('suggestion');
    table.timestamps(true,true);
  });

};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTable('reviews');
};
