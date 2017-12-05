var Item = require('../src/item.js');
var NormalItem = require('../src/normalItem.js');

class ConjuredItem extends NormalItem {
  update() {
    this.doubleDegradation();
    this.boundQuality();
    if (this.sellIn < 0) {
      this.quality -= 2;
    }
  }
}

module.exports = ConjuredItem;
