/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
up: async (knex) => {
    await knex.schema.createTable("tasks", (table) => {
      table.increments("id").primary();
      table.string("title").notNullable();
      table.string("description").notNullable();
      table.boolean("completed").defaultTo(false);
      table.timestamps(true, true); // Cria 'created_at' e 'updated_at'
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */

down: async (knex) => {
    await knex.schema.dropTableIfExists("tasks"); // Use dropTableIfExists para evitar erros se a tabela não existir
  }
