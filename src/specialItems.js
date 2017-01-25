function SpecialItems(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

function isItSpecial(item) {
    if (item.name == 'Aged Brie') {
      return true
    }
    else {
      return false
    }
}
