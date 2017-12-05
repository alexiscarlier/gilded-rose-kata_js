var NormalItem = require('../src/normalItem.js');

class BackstagePass extends NormalItem {
  update() {
    if (this.sellIn <= 0) {
      this.losesValue();
    }
    else if (this.sellIn < 6) {
      this.tripleImprovement();
    }
    else if (this.sellIn < 11) {
      this.doubleImprovement();
    }
    else {
      this.normalImprovement();
    }
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

  tripleImprovement() {
    this.quality += 3;
    this.sellIn -= 1;
  }

  losesValue() {
    this.sellIn -= 1;
    this.quality = 0;
  }
}

module.exports = BackstagePass;
