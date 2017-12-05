const Sulfuras = require('../src/sulfuras.js');

describe("Sulfuras", function() {
  it("Sulfuras does not change", function() {
    testItem = new Sulfuras('Sulfuras', 0, 80);
    testItem.update();
    expect(testItem.sellIn).toEqual(0);
    expect(testItem.quality).toEqual(80);
  });
});
