// const environment = "development";
// const config = require("./knexfile.js")[environment];
// const knex = require("knex")(config);

// module.exports = knex;

const knex = require("knex");
const knexConfig = require("./knexfile");

const environment = process.env.DATABASE_URL ? "production" : "development";
module.exports = knex(knexConfig[environment]);
