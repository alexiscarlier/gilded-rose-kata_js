var Item = require('../src/item.js');

class NormalItem extends Item {
  update() {
    this.sellIn < 0 ? this.quality -= 2 : this.quality -= 1;
    this.sellIn -= 1;
    if (this.quality < 0) {
      this.quality = 0;
    }
  }

}

module.exports = NormalItem;
