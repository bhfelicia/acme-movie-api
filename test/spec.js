const app = require("supertest")(require("../app"));
// const { syncAndSeed } = require("../db");

const { expect } = require("chai");

describe("addition", () => {
  it("adds 3 and 4", () => {
    expect(3 + 4).to.equal(7);
  });
});

describe("Routes", () => {
  // beforeEach(async () => await syncAndSeed());
  describe("GET /", () => {
    it("returns an html page", async () => {
      try {
        const response = await app.get("/");
        expect(response.status).to.equal(200);
      } catch (error) {
        console.log(error);
      }
    });
  });
  describe("GET /api/movies", () => {
    it("returns movies", async () => {
      try {
        const movies = await app.get("/api/movies");
        expect(movies.status).to.equal(200);
      } catch (error) {
        console.log(error);
      }
    });
  });
  describe("GET /api/actors", () => {
    it("retrieves our actors from the db", async () => {
      try {
        const response = await app.get("/api/actors");
        expect(response.status).to.equal(200);
      } catch (error) {
        console.log(error);
      }
    });
  });
});
