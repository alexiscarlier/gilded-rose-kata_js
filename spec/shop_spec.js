// var Shop = require('../src/shop.js');
// var Item = require('../src/item.js');
//
// describe("Shop", function() {
//
//   it("is initialized with items as an empty array by default", function() {
//     const gildedRose = new Shop();
//     expect(gildedRose.items[0]).toBe(undefined);
//   })
//
//   it("is initialized with a names of exceptions property", function() {
//     const gildedRose = new Shop();
//     expect(gildedRose.namesOfExceptions[0]).toBe('Aged Brie');
//     expect(gildedRose.namesOfExceptions[1]).toBe('Backstage passes to a TAFKAL80ETC concert');
//     expect(gildedRose.namesOfExceptions[2]).toBe('Sulfuras, Hand of Ragnaros');
//     expect(gildedRose.namesOfExceptions[3]).toBe('Conjured');
//   })
//
//   it("should foo", function() {
//     item = new Item("foo", 0, 0);
//     // item = { name: "foo", sellIn: 0, quality: 0 };
//     const gildedRose = new Shop([ item ]);
//     const items = gildedRose.updateQuality();
//     expect(items[0].name).toEqual("foo");
//   });
//

//
//
//   it("deals with Sulfuras behaviour", function() {
//     item = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80};
//     newItem = { name: "Sulfuras, Hand of Ragnaros", sellIn: 0, quality: 80};
//     const gildedRose = new Shop([item]);
//     expect(gildedRose.updateQuality()).toContain(newItem);
//   });
//
//   it("deals with Sulfuras behaviour", function() {
//     item = { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80};
//     newItem = { name: "Sulfuras, Hand of Ragnaros", sellIn: -1, quality: 80};
//     const gildedRose = new Shop([item]);
//     expect(gildedRose.updateQuality()).toContain(newItem);
//   });
// });
