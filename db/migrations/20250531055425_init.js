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

  await knex.schema.createTable('orders',(table)=>{
    table.increments('order_id').primary();
    table.timestamp('order_date').defaultTo(knex.fn.now());
    table.string('order_by').notNullable();
    table.timestamps(true,true);
  });

  await knex.schema.createTable('reviews',(table)=>{
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
exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('products');
  await knex.schema.dropTableIfExists('users');
  await knex.schema.dropTableIfExists('orders');
  await knex.schema.dropTableIfExists('reviews');
};
