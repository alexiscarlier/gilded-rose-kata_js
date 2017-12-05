const BackstagePass = require('../src/backstagePass.js');

describe("Backstage pass", function() {
  it("increases quality by two if sell in is less than 10", function() {
    testItem = new BackstagePass('Backstage pass', 10, 30);
    testItem.update();
    expect(testItem.sellIn).toEqual(9);
    expect(testItem.quality).toEqual(32);
  });

  it("increases quality by one if sell in is less above 10", function() {
    testItem = new BackstagePass('Backstage pass', 15, 30);
    testItem.update();
    expect(testItem.sellIn).toEqual(14);
    expect(testItem.quality).toEqual(31);
  });

  it("increases quality by three if sell in is less than 5", function() {
    testItem = new BackstagePass('Backstage pass', 5, 30);
    testItem.update();
    expect(testItem.sellIn).toEqual(4);
    expect(testItem.quality).toEqual(33);
  });

  it("quality drops to zero after sell in date is reached", function() {
    testItem = new BackstagePass('Backstage pass', 0, 30);
    testItem.update();
    expect(testItem.sellIn).toEqual(-1);
    expect(testItem.quality).toEqual(0);
  });

  it("quality cannot go above 50", function() {
    testItem = new BackstagePass('Backstage pass', 5, 49);
    testItem.update();
    expect(testItem.sellIn).toEqual(4);
    expect(testItem.quality).toEqual(50);
  });
});
