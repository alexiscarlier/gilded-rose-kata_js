var Shop = require('../src/shop.js');

describe("Shop", function() {

  it("is instantiated with items", function() {
    shop = new Shop();
    expect(shop.items).toEqual([]);
  });

  it("calls update on the items", function() {
    item = jasmine.createSpyObj('item', ['update']);
    shop = new Shop([item]);
    shop.updateQuality();
    expect(item.update).toHaveBeenCalled();
  });
});

module.exports = Shop;
