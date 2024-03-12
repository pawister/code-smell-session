const convert = require("../convert.js");
describe("Convert Test", () => {
  it("should test that 1 === 75", () => {
    expect(convert(1)).toBe(75);
  });
});
