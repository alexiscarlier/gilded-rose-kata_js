var Shop = require('../src/gilded_rose.js');
var Item = require('../src/item.js');

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("should increase in value if is Aged Brie", function() {
    const gildedRose = new Shop([ new Item("Fake item", 1, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0);
    expect(items[0].quality).toEqual(4);
  });

});
