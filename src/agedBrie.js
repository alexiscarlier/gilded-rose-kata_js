var Item = require('../src/item.js');

class AgedBrie extends Item {
  update() {
    this.quality += 1;
    this.sellIn -= 1;
    if (this.sellIn < 0) {
      this.quality += 1;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }
}

module.exports = AgedBrie;
