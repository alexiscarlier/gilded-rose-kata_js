var Item = require('../src/item.js');
var NormalItem = require('../src/normalItem.js');

class ConjuredItem extends NormalItem {
  update() {
    if (this.sellIn < 0) {
      this.quality -= 2;
    }
    this.doubleDegradation();
    this.boundQuality();
  }
}

module.exports = ConjuredItem;
