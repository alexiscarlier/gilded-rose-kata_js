// dont need to explicitly program sulfuras behaviour
// because it just returns itself
// My normal item function works, but not the rest

class Shop {
  constructor(items=[]){
    this.items = items;
    this.namesOfExceptions = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros'];
    this.qualityLimit = 50;
  }

// general functions

  decrementQuality(item) {
    item.quality -= 1;
  }

  incrementQuality(item) {
    item.quality += 1;
  }

  decrementSellIn(item) {
    item.sellIn -= 1;
  }

  qualityToZero(item) {
    item.quality = 0;
  }

  qualityToLimit(item) {
    item.quality = 50;
  }

  // Normal item functions

  isNormalItem(item) {
    return this.namesOfExceptions.includes(item.name) === false;
  }

  normalItemUpdate(item) {
    this.decrementQuality(item);
    this.decrementSellIn(item);
    if (item.sellIn < 0) {
      this.decrementQuality(item);
    }
    if (item.quality < 0) {
      this.qualityToZero(item);
    }
  }

  // Aged brie functions

  isAgedBrie(item) {
    return item.name === 'Aged Brie';
  }

  agedBrieUpdate(item) {
    this.incrementQuality(item);
    this.decrementSellIn(item);
    if (item.sellIn < 0) {
      this.incrementQuality(item);
    }
    if (item.quality > this.qualityLimit) {
      this.qualityToLimit(item);
    }
  }

  // backstage pass functions

  isBackstagePass(item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
  }

  backstagePastSellIn(item) {
    this.decrementSellIn(item);
    this.qualityToZero(item);
  }

  backstageSellSoon(item) {
    this.decrementSellIn(item);
    item.quality += 3;
  }

  backstageSellSoonish(item) {
    this.decrementSellIn(item);
    item.quality += 2;
  }

  backstageSellNormal(item) {
    this.decrementSellIn(item);
    this.incrementQuality(item);
  }

  backstagePassUpdate(item) {
    if (item.sellIn <= 0) {
      this.backstagePastSellIn(item);
    }
    else if (item.sellIn < 6) {
      this.backstageSellSoon(item);
    }
    else if (item.sellIn < 11) {
      this.backstageSellSoonish(item);
    }
    else {
      this.backstageSellNormal(item);
    }
    if (item.quality > this.qualityLimit) {
      this.qualityToLimit(item);
    }
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.isNormalItem(this.items[i])) {
        this.normalItemUpdate(this.items[i]);
      }
      if (this.isAgedBrie(this.items[i])) {
        this.agedBrieUpdate(this.items[i]);
      }
      if (this.isBackstagePass(this.items[i])) {
        this.backstagePassUpdate(this.items[i]);
      }
    }
    return this.items;
  }

}

module.exports = Shop;
