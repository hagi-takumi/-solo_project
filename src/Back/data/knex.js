// const environment = "development";
// const config = require("./knexfile.js")[environment];
// const knex = require("knex")(config);

// module.exports = knex;

const knex = require("knex");
const knexConfig = require("./knexfile");
console.log(process.env.DATABASE_URL);
const environment = process.env.DATABASE_URL ? "production" : "development";
module.exports = knex(knexConfig[environment]);
