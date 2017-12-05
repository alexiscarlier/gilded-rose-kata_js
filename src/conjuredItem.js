var Item = require('../src/item.js');

class ConjuredItem extends Item {
  update() {
    this.quality -= 2;
    this.sellIn -= 1;
    if (this.sellIn < 0) {
      this.quality -= 2;
    }
    if (this.quality < 0) {
      this.quality = 0;
    }
  }
}

module.exports = ConjuredItem;
