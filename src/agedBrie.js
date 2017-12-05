var NormalItem = require('../src/normalItem.js');

class AgedBrie extends NormalItem {
  update() {
    this.sellIn < 0 ? this.doubleImprovement() : this.normalImprovement();
    this.boundQuality();
  }

  normalImprovement() {
    this.quality += 1;
    this.sellIn -= 1;
  }

  doubleImprovement() {
    this.quality += 2;
    this.sellIn -= 1;
  }
}

module.exports = AgedBrie;
