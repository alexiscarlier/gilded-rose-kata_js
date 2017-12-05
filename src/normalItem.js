var Item = require('../src/item.js');

class NormalItem extends Item {
  update() {
    this.sellIn < 0 ? this.doubleDegradation() : this.normalDegradation();
    this.boundQuality();
  }

  normalDegradation() {
    this.quality -= 1;
    this.sellIn -= 1;
  }

  doubleDegradation() {
    this.quality -= 2;
    this.sellIn -= 1;
  }

  boundQuality() {
    if (this.quality < 0) {
      this.quality = 0;
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }


}

module.exports = NormalItem;
