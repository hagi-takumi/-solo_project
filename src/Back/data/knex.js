// const environment = "development";
// const config = require("./knexfile.js")[environment];
// const knex = require("knex")(config);

// module.exports = knex;

const knex = require("knex");
const knexConfig = require("./knexfile");
console.log(
  "###############",
  process.env.DATABASE_URL ? "production" : "development"
);
console.log(
  process.env.REACT_APP_TEST ? "http://localhost:7777/slide" : "/slide"
);
const environment = process.env.DATABASE_URL ? "production" : "development";
module.exports = knex(knexConfig[environment]);
