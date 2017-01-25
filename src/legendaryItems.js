function LegendaryItems(name, sell_in, quality) {
  this.name = name;
  this.sell_in = sell_in;
  this.quality = quality;
}

LegendaryItems.prototype.isItLegendary = function(item) {
  if (item.name == 'Sulfuras, Hand of Ragnaros') {
    return true
  }
  else {
    return false
  }
}
