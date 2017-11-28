var Shop = require('../src/gilded_rose.js');
var Item = require('../src/item.js');

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });

  it("decreaes the sell in and quality for normal items", function() {
    const gildedRose = new Shop([ new Item("Fake item", 1, 5)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0);
    expect(items[0].quality).toEqual(4);
  });

  it("increases in quality if is Aged Brie", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 3, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(11);
    expect(items[0].sellIn).toEqual(2);
  });

  it("when passes sell by date, quality ofincreaes twice as fast Aged Brie", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(12);
    expect(items[0].sellIn).toEqual(-2);
  });

  it("for a normal item, qualit degrades twice as fast when past sell by date", function() {
    const gildedRose = new Shop([ new Item("Fake item", -1, 10)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
    expect(items[0].sellIn).toEqual(-2);
  });

  it("an item cannot have quality of more than 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", -1, 50)]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
    expect(items[0].sellIn).toEqual(-2);
  });
});
