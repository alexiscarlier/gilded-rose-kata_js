class Shop {
  constructor(items=[]){
    this.items = items;
  }

  decrementQuality(item) {
    item.quality -= 1;
  }

  incrementQuality(item) {
    item.quality += 1;
  }

  qualityToZero(item) {
    item.quality = 0;
    // original implementation of this method was the below
    // this.items[i].quality = this.items[i].quality - this.items[i].quality;
  }

  decrementSellIn(item) {
    item.sellIn -= 1;
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.decrementQuality(this.items[i]);
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.incrementQuality(this.items[i]);
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.incrementQuality(this.items[i]);
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.incrementQuality(this.items[i]);
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.decrementSellIn(this.items[i]);
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.decrementQuality(this.items[i]);
              }
            }
          } else {
            this.qualityToZero(this.items[i]);
          }
        } else {
          if (this.items[i].quality < 50) {
            this.incrementQuality(this.items[i]);
          }
        }
      }
    }

    return this.items;
  }

}


module.exports = Shop;
