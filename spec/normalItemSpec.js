const NormalItem = require('../src/normalItem.js');

describe("Normal Item", function() {

  it("decreases the sell in and quality", function() {
    const testItem = new NormalItem('Fake Item', 1, 5);
    testItem.update();
    expect(testItem.sellIn).toEqual(0);
    expect(testItem.quality).toEqual(4);
    });
});

  it("prevents the quality from going below zero", function() {
    const testItem = new NormalItem('Fake Item', -1, 0);
    testItem.update();
    expect(testItem.sellIn).toEqual(-2);
    expect(testItem.quality).toEqual(0);
  });

  it("degrades quality twice as fast when past sell in date", function() {
    const testItem = new NormalItem('Fake Item', -1, 10);
    testItem.update();
    expect(testItem.sellIn).toEqual(-2);
    expect(testItem.quality).toEqual(8);
  });
