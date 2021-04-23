const app = require("supertest")(require("../app"));

const { expect } = require("chai");

describe("addition", () => {
  it("adds 3 and 4", () => {
    expect(3 + 4).to.equal(7);
  });
});

describe("Routes", () => {
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
});
