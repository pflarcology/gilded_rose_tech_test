function Item(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = [];
var MAXIMUM_QUALITY = 5;

function update_quality() {
  for (var i = 0; i < items.length; i++) {

    var specialItems = new SpecialItems;
    var legendaryItems = new LegendaryItems;

    if (!specialItems.isItSpecial(items[i])) {
      if (items[i].quality > 0) {
        if (!legendaryItems.isItLegendary(items[i])) {
          items[i].quality -= 1
        }
          if (items[i].name == 'Conjured') {
            items[i].quality -= 1
          }
      }
    } else {
      if (items[i].quality < MAXIMUM_QUALITY) {
        items[i].quality += 1
        if (items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].sell_in < 11) {
            if (items[i].quality < MAXIMUM_QUALITY) {
              items[i].quality += 1
            }
          }
          if (items[i].sell_in < 6) {
            if (items[i].quality < MAXIMUM_QUALITY) {
              items[i].quality += 1
            }
          }
        }
      }
    }

    if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
      items[i].sell_in -= 1;
    }

    if (items[i].sell_in < 0) {
      if (items[i].name != 'Aged Brie') {
        if (items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
          if (items[i].quality > 0) {
            if (items[i].name != 'Sulfuras, Hand of Ragnaros') {
              items[i].quality -= 1
            }
          }
        } else {
          items[i].quality = items[i].quality - items[i].quality
        }
      } else {
        if (items[i].quality < MAXIMUM_QUALITY) {
          items[i].quality += 1
        }
      }
    }
  }
}
