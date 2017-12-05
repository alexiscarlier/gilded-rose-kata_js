class AgedBrie extends Item {
  itemTomorrow() {
    this.quality += 1;
    this.sellIn -= 1;
    if (item.sellIn < 0) {
      this.quality += 1;
    }
    if (item.quality > 50) {
      this.quality = 50;
    }
  }
}
