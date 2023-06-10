// const chaiHttp = require("chai-http");
// chai.use(chaiHttp);

const knex = require("../src/Back/data/knex");
const chai = require("chai");
const expect = chai.expect;

describe("knexについて", () => {
  it("返り値がArrayかどうか", async () => {
    const allFlowerList = await knex.select("*").from("slides");
    expect(allFlowerList).to.be.an.instanceof(Array);
  });
});
