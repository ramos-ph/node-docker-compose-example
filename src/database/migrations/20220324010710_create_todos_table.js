/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async (knex) =>
  knex.schema.createTable('todos', (table) => {
    table.increments('id')
    table.string('title').notNullable()
    table.string('description')
    table.string('status').notNullable().defaultTo('PENDING')
    table
      .integer('user_id')
      .references('users.id')
      .notNullable()
      .onDelete('CASCADE')
    table.timestamps(true, true)
  })

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async (knex) => knex.schema.dropTable('todos')
