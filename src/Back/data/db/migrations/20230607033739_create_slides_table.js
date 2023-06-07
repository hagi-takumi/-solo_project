/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("slides", (table) => {
    table.increments("id").primary();
    table.string("title", 32).notNullable();
    table.specificType("img_list", "text[]").notNullable(); // 配列のフィールドを指定
    table.date("make_date").notNullable();
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("slides");
};
