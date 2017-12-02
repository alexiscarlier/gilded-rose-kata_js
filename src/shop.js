class Shop {
  constructor(items=[]){
    this.items = items;
    this.namesOfExceptions = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros', 'Conjured'];
    this.qualityLimit = 50;
  }

  isConjuredItem(item) {
    return item.name === 'Conjured';
  }

  isNormalItem(item) {
    return this.namesOfExceptions.includes(item.name) === false;
  }

  isAgedBrie(item) {
    return item.name === 'Aged Brie';
  }

  isBackstagePass(item) {
    return item.name === 'Backstage passes to a TAFKAL80ETC concert';
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.isNormalItem(this.items[i])) {
        this.items[i].normalItemUpdate();
      }
      if (this.isAgedBrie(this.items[i])) {
        this.items[i].agedBrieUpdate();
      }
      if (this.isBackstagePass(this.items[i])) {
        this.items[i].backstagePassUpdate();
      }
      if (this.isConjuredItem(this.items[i])) {
        this.items[i].conjuredItemUpdate();
      }
    }
    return this.items;
  }

}

module.exports = Shop;
