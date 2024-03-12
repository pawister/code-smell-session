const request = require("supertest");
const app = require("../app");

describe("Sample Test", () => {
  it("should test that true === true", () => {
    expect(true).toBe(true);
  });
  it("POST / => Convert", () => {
    return request(app)
      .post("/total")
      .send({
        values: "1,2",
      })
      .expect("Content-Type", /json/)
      .then((response) => {
        expect(response.body).toEqual(225);
      });
  });
});
