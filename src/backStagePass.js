class BackstagePass extends Item {
  itemTomorrow() {
    if (this.sellIn <= 0) {
      this.backstagePastSellIn();
    }
    else if (item.sellIn < 6) {
      this.backstageSellSoon();
    }
    else if (item.sellIn < 11) {
      this.backstageSellSoonish();
    }
    else {
      this.backstageSellNormal();
    }
    if (item.quality > 50) {
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
