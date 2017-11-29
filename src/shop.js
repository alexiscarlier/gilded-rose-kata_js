class Shop {
  constructor(items=[]){
    this.items = items;
    this.namesOfExceptions = ['Aged Brie', 'Backstage passes to a TAFKAL80ETC concert', 'Sulfuras, Hand of Ragnaros'];
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


  backstageUpdateQuality(item) {
    if (item.sellIn < 6 && item.quality < 50) {
      item.quality += 2;
    }
    else if (item.sellIn < 11 && item.quality < 50) {
      this.incrementQuality(item);
    }
  }



  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.namesOfExceptions.includes(item.name) === false && item.quality > 0) {
        this.decrementQuality(this.items[i]);
          // this whole bit is saying if you're not a special case, decrement by one
      } else {
        if (this.items[i].quality < 50) {
          this.incrementQuality(this.items[i]);
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            this.backstageUpdateQuality(this.items[i]);
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
