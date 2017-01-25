function SpecialItems(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

function isItSpecial(item) {
    if (item.name == 'Aged Brie' || item.name == 'Backstage passes to a TAFKAL80ETC concert') {
      return true
    }
    else {
      return false
    }
}
