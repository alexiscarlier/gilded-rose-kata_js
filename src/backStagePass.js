var Item = require('../src/item.js');

class BackstagePass extends Item {
  update() {
    if (this.sellIn <= 0) {
      this.backstagePastSellIn();
    }
    else if (this.sellIn < 6) {
      this.backstageSellSoon();
    }
    else if (this.sellIn < 11) {
      this.backstageSellSoonish();
    }
    else {
      this.backstageSellNormal();
    }
    if (this.quality > 50) {
      this.quality = 50;
    }
  }

  backstagePastSellIn() {
    this.sellIn -= 1;
    this.quality = 0;
  }

  backstageSellSoon() {
    this.sellIn -= 1;
    this.quality += 3;
  }

  backstageSellSoonish() {
    this.sellIn -= 1;
    this.quality += 2;
  }

  backstageSellNormal(item) {
    this.sellIn -= 1;
    this.quality += 1;
  }
}

module.exports = BackstagePass;
