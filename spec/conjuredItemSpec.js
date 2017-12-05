const ConjuredItem = require('../src/conjuredItem.js');

describe("Conjured Item", function() {
  it("decreases the quality of conjured items twice as fast as normal items", function() {
    testItem = new ConjuredItem('Conjured', 1, 5);
    testItem.update();
    expect(testItem.sellIn).toEqual(0);
    expect(testItem.quality).toEqual(3);
  });

  it("decreases the quality of conjured items twice as fast as normal items", function() {
    testItem = new ConjuredItem('Conjured', -1, 5);
    testItem.update();
    expect(testItem.sellIn).toEqual(-2);
    expect(testItem.quality).toEqual(1);
  });

  it("decreases the quality of conjured items twice as fast as normal items", function() {
    testItem = new ConjuredItem('Conjured', -1, 0);
    testItem.update();
    expect(testItem.sellIn).toEqual(-2);
    expect(testItem.quality).toEqual(0);
  });
});
