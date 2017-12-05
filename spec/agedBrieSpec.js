const AgedBrie = require('../src/agedBrie.js');


describe("Aged Brie", function() {

  it("increases in quality as sell in decreases", function() {
    testItem = new AgedBrie('Aged Brie', 3, 10);
    testItem.update();
    expect(testItem.sellIn).toEqual(2);
    expect(testItem.quality).toEqual(11);
  });

  it("increaes in quality twice as fast after sell in date", function() {
    testItem = new AgedBrie('Aged Brie', -1, 10);
    testItem.update();
    expect(testItem.sellIn).toEqual(-2);
    expect(testItem.quality).toEqual(12);
  });

  it("cannot have a quality of more than 50", function() {
    testItem = new AgedBrie('Aged Brie', -1, 50);
    testItem.update();
    expect(testItem.sellIn).toEqual(-2);
    expect(testItem.quality).toEqual(50);
  });
});
