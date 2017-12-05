var Item = require('../src/item.js');
var NormalItem = require('../src/normalItem.js');

class ConjuredItem extends NormalItem {
  update() {
    this.doubleDegradation();
    // this.quality -= 2;
    // this.sellIn -= 1;
    if (this.sellIn < 0) {
      this.quality -= 2;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}

module.exports = ConjuredItem;
