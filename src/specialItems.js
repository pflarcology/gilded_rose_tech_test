function specialItems(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

var items = []

function isItSpecial() {
  for (var i = 0; i < items.length; i++) {
    if (items[i].name == 'Aged Brie') {
      return true
    }
    else {
      return false
    }
  }
}
