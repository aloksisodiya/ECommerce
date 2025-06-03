/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('user_id').primary();
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
    table.increments('o_id').primary();
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

  await knex.schema.createTable('order_items',(table)=>{
    table.increments('id').primary();
    table.integer('order_id').notNullable().references('o_id').inTable('orders').onDelete('CASCADE');
    table.integer('product_id').notNullable().references('p_id').inTable('products').onDelete('CASCADE');
    table.integer('quantity').notNullable();
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function(knex) {
  await knex.schema.dropTable('products');
  await knex.schema.dropTable('users');
  await knex.schema.dropTable('orders');
  await knex.schema.dropTable('reviews');
  await knex.schema.dropTable('order_items');
};
