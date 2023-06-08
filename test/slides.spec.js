const chai = require("chai");
const expect = chai.expect;
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
// request = chai.request(server);

// const config = require("../src/Back/data/knexfile.js");
// const knex = require("knex")(config);

// describe("slides", () => {
//   it("ステータスコードが200を返すかどうか？", async () => {
//     const result = await fetch("/slide").then((e) => e.json());
//     console.log(result);

//     request
//     .get("/api/pokemon")
//     .query({ limit: 10 })
//     .end(function(err, res) {
//       expect(err).to.be.null;
//       expect(res).to.have.status(200);
//       done();
//     });
//   });
// });
