var Item = require('../src/item.js');

describe("Item", function() {

  it("has three proporties assigned upon initialization", function() {
    const item = new Item("name", "sellIn", "quality");
    expect(item.name).toEqual("name");
    expect(item.sellIn).toEqual("sellIn");
    expect(item.quality).toEqual("quality");
  });
});
