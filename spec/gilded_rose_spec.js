var Shop = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  it("should foo", function() {
    item = { name: "foo", sellIn: 0, quality: 0 }
    const gildedRose = new Shop([ item ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
    // this test is different from others. Keeping as comparison for when reviewing
  });

  it("decreaes the sell in and quality for normal items", function() {
    item = { name: "Fake Item", sellIn: 1, quality: 5 }
    newItem = { name: "Fake Item", sellIn: 0, quality: 4}
    const gildedRose = new Shop([ item ]);
    expect(gildedRose.updateQuality()).toContain(newItem);
  });

  it("increases in quality if is Aged Brie", function() {
    item = { name: "Aged Brie", sellIn: 3, quality: 10 }
    newItem = { name: "Aged Brie", sellIn: 2, quality: 11}
    const gildedRose = new Shop([ item ]);
    expect(gildedRose.updateQuality()).toContain(newItem);
  });

  it("when passes sell by date, quality ofincreaes twice as fast Aged Brie", function() {
    item = { name: "Aged Brie", sellIn: -1, quality: 10}
    newItem = { name: "Aged Brie", sellIn: -2, quality: 12}
    const gildedRose = new Shop([item]);
    expect(gildedRose.updateQuality()).toContain(newItem);
  });

  it("for a normal item, qualit degrades twice as fast when past sell by date", function() {
    item = { name: "Fake Item", sellIn: -1, quality: 10 }
    newItem = { name: "Fake Item", sellIn: -2, quality: 8}
    const gildedRose = new Shop([ item ]);
    expect(gildedRose.updateQuality()).toContain(newItem);
  });

  it("an item cannot have quality of more than 50", function() {
    item = { name: "Aged Brie", sellIn: -1, quality: 50 }
    newItem = { name: "Aged Brie", sellIn: -2, quality: 50}
    const gildedRose = new Shop([item]);
    expect(gildedRose.updateQuality()).toContain(newItem);
  });

  it("deals with Backstage passes behaviour", function() {
    item = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 10, quality: 30}
    newItem = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 9, quality: 32}
    const gildedRose = new Shop([item]);
    expect(gildedRose.updateQuality()).toContain(newItem);
  })

  it("deals with Backstage passes behaviour", function() {
    item = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 5, quality: 30}
    newItem = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 4, quality: 33}
    const gildedRose = new Shop([item]);
    expect(gildedRose.updateQuality()).toContain(newItem);
  })

  it("deals with Backstage passes behaviour", function() {
    item = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: 0, quality: 30}
    newItem = { name: "Backstage passes to a TAFKAL80ETC concert", sellIn: -1, quality: 0}
    const gildedRose = new Shop([item]);
    expect(gildedRose.updateQuality()).toContain(newItem);
  })

  it("deals with Sulfuras behaviour", function() {
    item = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80}
    newItem = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80}
    const gildedRose = new Shop([item]);
    expect(gildedRose.updateQuality()).toContain(newItem);
  })

  // it("Works for Sulfuras behaviour", function() {
  //   const gildedRose = new Shop([ new Item("Sulfuras", 0, 50)]);
  //   const items = gildedRose.updateQuality();
  //   expect(items[0].quality).toEqual(50);
  //   expect(items[0].sellIn).toEqual(0);
  // });


});
