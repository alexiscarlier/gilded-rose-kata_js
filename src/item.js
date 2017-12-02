class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  normalItemUpdate() {
    this.quality -= 1;
    this.sellIn -= 1;
    if (this.sellIn < 0) {
      this.quality -= 1;
    }
    if (item.quality < 0) {
      this.quality = 0;
    }
  }

  agedBrieUpdate() {
    this.quality += 1;
    this.sellIn -= 1;
    if (item.sellIn < 0) {
      this.quality += 1;
    }
    if (item.quality > 50) {
      this.quality = 50;
    }
  }

  conjuredItemUpdate() {
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

module.exports = Item;
