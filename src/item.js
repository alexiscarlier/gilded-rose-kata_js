class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

module.exports = Item;

  // normalItemUpdate() {
  //   this.quality -= 1;
  //   this.sellIn -= 1;
  //   if (this.sellIn < 0) {
  //     this.quality -= 1;
  //   }
  //   if (item.quality < 0) {
  //     this.quality = 0;
  //   }
  // }
  //
  // agedBrieUpdate() {
  //   this.quality += 1;
  //   this.sellIn -= 1;
  //   if (item.sellIn < 0) {
  //     this.quality += 1;
  //   }
  //   if (item.quality > 50) {
  //     this.quality = 50;
  //   }
  // }
  //
  // conjuredItemUpdate() {
  //   this.quality -= 2;
  //   this.sellIn -= 1;
  //   if (this.sellIn < 0) {
  //     this.quality -= 2;
  //   }
  //   if (this.quality < 0) {
  //     this.quality = 0;
  //   }
  // }
  //
  // backstagePastSellIn() {
  //   this.sellIn -= 1;
  //   this.quality = 0;
  // }
  //
  // backstageSellSoon() {
  //   this.sellIn -= 1;
  //   this.quality += 3;
  // }
  //
  // backstageSellSoonish() {
  //   this.sellIn -= 1;
  //   this.quality += 2;
  // }
  //
  // backstageSellNormal(item) {
  //   this.sellIn -= 1;
  //   this.quality += 1;
  // }
  //
  // backstagePassUpdate() {
  //   if (this.sellIn <= 0) {
  //     this.backstagePastSellIn();
  //   }
  //   else if (item.sellIn < 6) {
  //     this.backstageSellSoon();
  //   }
  //   else if (item.sellIn < 11) {
  //     this.backstageSellSoonish();
  //   }
  //   else {
  //     this.backstageSellNormal();
  //   }
  //   if (item.quality > 50) {
  //     this.quality = 50;
  //   }
  // }
